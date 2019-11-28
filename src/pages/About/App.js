import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { hot } from 'react-hot-loader/root';
import Wrapper from '../../components/Wrapper';

function App() {
  return (
    <Wrapper currentPage="about">
      <h2>About</h2>
      <p>This is a React Multi-Page Application boilerplate.</p>
    </Wrapper>
  );
}

export default hot(App);
