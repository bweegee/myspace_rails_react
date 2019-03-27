import React from 'react';
import { Link, } from 'react-router-dom';
import { Box, Button, Image, } from 'grommet';
import { Login, } from 'grommet-icons';
import Logo from '../images/mySpace.png';

class Navbar extends React.Component {
  state = {
  }

  render() {
    return (
      <AppBar>
        <Link to="/">
          <Image
            src={Logo}
            alt="ms"
          />
        </Link>
        <Box
          direction="row"
          align="center"
        >
          <Link to="/login" style={{ color: '#FFF' }}>
            <Button
              label="Login"
              icon={<Login />}
              plain="true"
              margin="small"
            />
          </Link>
          <Link to="/register" style={{ color: '#FFF' }}>
            <Button
              label="Register"
              plain="true"
              margin="small"
            />
          </Link>
        </Box>
      </AppBar>
    )
  }
}

const AppBar = (props) => (
  <Box
    tag='header'
    direction='row'
    // align='center'
    justify='between'
    background='brand'
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation='medium'
    style={{ zIndex: '1' }}
    {...props}
  />
);

export default Navbar
