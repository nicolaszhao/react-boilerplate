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
        <header className={style.header}>
          <h1>About</h1>
        </header>
      </div>
    );
  }
}

export default hot(module)(App);
