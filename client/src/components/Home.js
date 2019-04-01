import React from 'react';
import axios from 'axios';
import { AuthConsumer, } from '../providers/AuthProvider';
import { Grid, Box, Heading, TextInput, Button, Image, } from 'grommet';
import { FormAdd, } from 'grommet-icons';
import ProfilePic from '../images/asuka_profile.jpg';

class Home extends React.Component {
  state = { posts: [], comment: '', }

  componentDidMount() {
    axios.get("/api/posts")
      .then( res => this.setState({ posts: res.data, }))
  }

  showPosts = () => (
    this.state.posts.map( post =>
      <Box key={post.id} margin="small">
        <Heading level="3">{ post.comment }</Heading>
      </Box>
    )
  )

  handleChange = e => {
    const {name, value} = e.target;
    this.setState({[name]: value});
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { posts, comment, } = this.state;
    const { auth: { handleAddPost, }, history } = this.props;
    handleAddPost({ comment, }, history);
    this.setState({ comment: '' });
  }

  render() {
    const { comment, } = this.state
    return (
      <Grid
        margin="small"
        rows={["count": "fill", "size": "..."]}
        columns={["count": "fill", "size": "..."]}
        gap="small"
        areas={[
          { name: 'header', start: [0, 0], end: [3, 0] },
          { name: 'avatar ', start: [0, 1], end: [0, 1] },
          { name: 'userPosts', start: [1, 1], end: [3, 1] },
        ]}
      >
        <Box gridArea="header" background="light1" align="center">
          <Heading level="3">username</Heading>
        </Box>
        <Box gridArea="avatar" background="light-5">
          <Box direction="row">
            <Image
              src={ProfilePic}
              alt="silhouette"
              alignSelf="start"
              margin="small"
            />
            <Box margin="xsmall">
              <Heading level="6">Name</Heading>
              <Heading level="6">email</Heading>
            </Box>
          </Box>
        </Box>
        <Box gridArea="userPosts" background="light-2">
          Your Posts
          {this.showPosts()}
          <Box direction="row">
            <TextInput
              placeholder="New Post"
              name="comment"
              value={comment}
              onChange={this.handleChange}
            />
            <Button
              icon={<FormAdd color="green" />}
              type="submit"
              plain={true}
              margin="small"
              color="add"
              onClick={this.handleSubmit}
              label="Add"
            />
          </Box>
        </Box>
      </Grid>
    )
  }
}

export default class ConnectedHome extends React.Component {
  render() {
    return (
      <AuthConsumer>
        {auth => <Home {...this.props} auth={auth} />}
      </AuthConsumer>
    );
  }
}
