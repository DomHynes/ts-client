import React, { Component } from 'react';
import Login from './login';
import CRUD from './crud';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Easy Peasy + Typescript</h1>
        <Login />
        <CRUD />
      </div>
    );
  }
}

export default App;
