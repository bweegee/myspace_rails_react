import React from 'react';
import axios from 'axios';
import { Box, Heading, } from 'grommet';

class Home extends React.Component {
  state = { posts: [], }

  componentDidMount() {
    axios.get("/api/posts")
      .then( res => this.setState({ posts: res.data, }))
  }

  render() {
    const { posts, } = this.state
    return (
      <Box>
        <Heading level="3">Your Posts</Heading>
        { posts }
      </Box>
    )
  }
}

export default Home
