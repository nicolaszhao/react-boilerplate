import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import style from './about.scss';

class App extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="container">
        <h1 className={style.title}>About</h1>
      </div>
    );
  }
}

export default hot(module)(App);
