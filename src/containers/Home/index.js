import 'utils/polyfills.js';
import 'styles/base.scss';
import React from 'react';
import { render } from 'react-dom';
import App from './app';

render(
  <App />,
  document.getElementById('app')
);