import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Loading from 'components/Loading';
import style from './home.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 1000);
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
