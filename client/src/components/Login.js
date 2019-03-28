import React from 'react';
import {Box, Form, TextInput, Button} from 'grommet';
import { AuthConsumer, } from '../providers/AuthProvider';

class Login extends React.Component {
  state = { email: '', password: '', }

  handleSubmit = e => {
    e.preventDefault();
    const { email, password, } = this.state;
    this.props.auth.handleLogin({ email, password, }, this.props.history);
  }

  handleChange = e => {
    const { name, value, } = e.target;
    this.setState({ [name]: value, });
  }

  render() {
    const { email, password, } = this.state;

    return (
      <Box align="center">
      <Form>
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
        <Button onClick={this.handleSubmit} label="Register" />
      </Form>
    </Box>
    )
  }
}

export default class ConnectedLogin extends React.Component {
  render() {
    return (
      <AuthConsumer>
        { auth => <Login {...this.props} auth={auth} /> }
      </AuthConsumer>
    )
  }
}
