import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { hot } from 'react-hot-loader/root';
import './index.scss';

function App() {
  return (
    <div className="container">
      <h1>About</h1>
      <section>
        <p>This is a react multi-page boilerplate.</p>
        <a className="button" href="./">Back to Home</a>
      </section>
    </div>
  );
}

export default hot(App);
