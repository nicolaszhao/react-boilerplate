import React, { Component } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { hot } from 'react-hot-loader/root';
import { delayTask } from '@totebox/util';
import * as api from '../../api';
import style from './index.module.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: null,
      error: null,
    };
  }

  componentDidMount() {
    this.fetchUser();
  }

  async fetchUser() {
    this.clearLoadingTask = delayTask(() => this.setState({ loading: true }));
    this.setState({ error: null });

    try {
      const data = await api.fetchUser();
      this.setState({ data });
    } catch (error) {
      this.setState({ error });
    }

    if (!this.clearLoadingTask()) {
      this.setState({ loading: false });
    }
  }

  render() {
    const {
      loading,
      data,
      error,
    } = this.state;

    return (
      <div className={style.container}>
        <h1>Home</h1>
        <section className={style.content}>
          {loading && <span className={style.loading}>Loading...</span>}
          {error && (
            <p className={style.error}>
              Error:
              {error.message}
            </p>
          )}
          {data && (
            <dl className={style.profile}>
              {Object.keys(data).map((field, i) => (
                <React.Fragment key={`${i + 1}`}>
                  <dt>{field}</dt>
                  <dd>{data[field]}</dd>
                </React.Fragment>
              ))}
            </dl>
          )}
        </section>
        <footer>
          <ul>
            <li>
              <button
                type="button"
                className={style.button}
                onClick={() => this.fetchUser()}
              >
                Refresh
              </button>
            </li>
            <li>
              <a className={style.link} href="./about.html">to About</a>
            </li>
          </ul>
        </footer>
      </div>
    );
  }
}

export default hot(App);
