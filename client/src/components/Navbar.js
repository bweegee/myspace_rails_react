import React from 'react';
import { Box, Button, } from 'grommet';

class Navbar extends React.Component {
  state = {
  }

  render() {
    return (
      <AppBar>
        <Box>
          
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
    // justify='between'
    background='brand'
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation='medium'
    style={{ zIndex: '1' }}
    {...props}
  />
);

export default Navbar
