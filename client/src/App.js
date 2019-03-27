import React from 'react';
import { Switch, Route, } from 'react-router-dom';
import { Grommet, } from 'grommet';
import Navbar from './components/Navbar';
import Home from './components/Home';

const App = () => (
  <>
  <Grommet theme={theme}>
    <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
  </Grommet>
  </>
)

const theme = {
  global: {
    font: {
      family: 'Benton Sans',
      size: '16px',
      height: '20px',
    },
    colors: {
      brand: '#003399',
    },
  },
};

export default App;
