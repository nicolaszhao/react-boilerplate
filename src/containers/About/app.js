import React, { Component } from 'react';
import Todo from 'components/Todo';
import style from './about.scss';

export default class App extends Component {
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
