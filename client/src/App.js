import React from 'react';
import { Switch, Route, } from 'react-router-dom';
import { Grommet, } from 'grommet';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import FetchUser from './components/FetchUser';

const App = () => (
  <>
  <Grommet theme={theme}>
    <Navbar />
    <FetchUser>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
      </Switch>
    </FetchUser>
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
