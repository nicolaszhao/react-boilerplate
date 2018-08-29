import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Loading from 'components/Loading';
import * as api from 'api'; 
import style from './home.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    api.getUser()
      .then(data => console.log(data))
      .catch(err => console.log(err))
      .then(() => this.setState({ loading: false }));
  }
  
  render() {
    return (
      <div className="container">
        <h1 className={style.title}>Home</h1>
        <Loading visible={this.state.loading} />
      </div>
    );
  }
}

export default hot(module)(App);
