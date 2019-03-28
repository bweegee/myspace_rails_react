import React from 'react';
import {Box, Form, TextInput, Heading, Button} from 'grommet';
import {AuthConsumer} from '../providers/AuthProvider';

class Register extends React.Component {
  state = {
    email: '',
    password: '',
    passConfirmation: '',
  };

handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, passwordConfirmation } = this.state;
    const { auth: { handleRegister, }, history, } = this.props;

    if (password === passwordConfirmation)
      handleRegister({ email, password, passwordConfirmation, }, history);
    else
      alert('Passwords Do Not Match!')
  }

  handleChange = e => {
    const {name, value} = e.target;
    this.setState({[name]: value});
  };

  render() {
    const {email, password, passConfirmation} = this.state;
    return (
      <Box margin="large" align="center">
        <Form onSubmit={this.handleSubmit}>
        <Heading level="3">Register</Heading>
          <Box
            width="medium"
            direction="row"
            margin="large"
            align="center"
            round="small"
            >
            <TextInput
              placeholder="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </Box>
          <Box
            width="medium"
            direction="row"
            margin="large"
            align="center"
            round="small"
            >
            <TextInput
              placeholder="password"
              name="password"
              type="password"
              value={password}
              onChange={this.handleChange}
            />
          </Box>
          <Box
            width="medium"
            direction="row"
            margin="large"
            align="center"
            round="small"
            >
            <TextInput
              placeholder="confirm password"
              name="passConfirmation"
              value={passConfirmation}
              type="password"
              onChange={this.handleChange}
            />
          </Box>
          <Button onSubmit={this.handleSubmit} label="Submit" />
        </Form>
      </Box>
    );
  }
}

export default class ConnectedRegister extends React.Component {
  render() {
    return (
      <AuthConsumer>
        {auth => <Register {...this.props} auth={auth} />}
      </AuthConsumer>
    );
  }
}
