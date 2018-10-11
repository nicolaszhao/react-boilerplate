import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { delayTask } from 'tote-box';
import { Loading, Modal } from 'react-tote-box';
import * as api from 'api'; 
import style from './home.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: {},
      error: null,
      errorModalVisible: false
    };
  }

  componentDidMount() {
    const clearLoadingTask = delayTask(() => this.setState({ loading: true }));
    
    api.fetchUser()
      .then(data => this.setState({ data }))
      .catch(error => this.setState({ error, errorModalVisible: true }))
      .then(() => {
        if (!clearLoadingTask()) {
          this.setState({ loading: false });
        }
      });
  }
  
  render() {
    const { data, loading, error, errorModalVisible } = this.state;

    return (
      <div className={style.container}>
        <header className={style.header}>
          <h1>Profile</h1>
        </header>
        <section className={style.content}>
          <dl>
            {Object.keys(data).map((field, i) => (
              <React.Fragment key={i}>
                <dt>{field}</dt>
                <dd>{data[field]}</dd>
              </React.Fragment>
            ))}
          </dl>
        </section>
        <Loading visible={loading} />
        <Modal
          title="Error"
          animation="zoom"
          onClose={() => this.setState({ errorModalVisible: false })}
          visible={errorModalVisible}
        >
          <p className={style.error}>
            {error && error.message}
          </p>
        </Modal>
      </div>
    );
  }
}

export default hot(module)(App);
