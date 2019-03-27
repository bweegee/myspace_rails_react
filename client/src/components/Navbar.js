import React from 'react';
import { Box, Button, Image, } from 'grommet';
import { Login, } from 'grommet-icons';
import Logo from '../images/mySpace.png';

class Navbar extends React.Component {
  state = {
  }

  render() {
    return (
      <AppBar>
        <Image
          src={Logo}
          alt="ms"
        />
        <Box
          direction="row"
          justify="between"
        >
          <Button
            label="Login"
            icon={<Login />}
            plain="true"
            margin="small"
          />
          <Button
            label="Register"
            plain="true"
            margin="small"
          />
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
