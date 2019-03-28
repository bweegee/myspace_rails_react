import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import { AuthConsumer, } from '../providers/AuthProvider';
import {Box, Button, Image} from 'grommet';
import {Login, Logout, } from 'grommet-icons';
import Logo from '../images/mySpace.png';

class Navbar extends React.Component {
  state = {};

  rightNavItems = () => {
    const { auth: { user, handleLogout, } } = this.props;

    if (user) {
      return (
        <Box direction="row" align="center">
          <Button
            label="Logout"
            icon={<Logout />}
            plain={true}
            margin="small"
            onClick={() => handleLogout(this.props.history)}
          />
        </Box>
      )
    } else {
      return (
        <Box direction="row" align="center">
          <Link to="/login" style={{color: '#FFF'}}>
            <Button
              label="Login"
              icon={<Login />}
              plain={true}
              margin="small"
            />
          </Link>
          <Link to="/register" style={{color: '#FFF'}}>
            <Button label="Register" plain={true} margin="small" />
          </Link>
        </Box>
      )
    }
  }

  render() {
    return (
      <AppBar>
        <Link to="/">
          <Image src={Logo} alt="ms" />
        </Link>
        { this.rightNavItems() }
      </AppBar>
    );
  }
}

const ConnectedNavbar = (props) => (
  <AuthConsumer>
    { auth => (
      <Navbar { ...props } auth={auth} />
    )}
  </AuthConsumer>
)

// Navbar styles
const AppBar = props => (
  <Box
    tag="header"
    direction="row"
    // align='center'
    justify="between"
    background="brand"
    pad={{left: 'medium', right: 'small', vertical: 'small'}}
    elevation="medium"
    style={{zIndex: '1'}}
    {...props}
  />
);

export default withRouter(ConnectedNavbar);
