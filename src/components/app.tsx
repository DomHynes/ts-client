import React, { Component, Fragment } from 'react';
import Login from './login';
import CRUD from './crud';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Login />
        <CRUD />
      </Fragment>
    );
  }
}

export default App;
