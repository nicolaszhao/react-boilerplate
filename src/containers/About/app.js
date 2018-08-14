import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Todo from 'components/Todo';
import style from './about.scss';

class App extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className={style.container}>
        <h1>About</h1>
        <Todo />
      </div>
    );
  }
}

export default hot(module)(App);
