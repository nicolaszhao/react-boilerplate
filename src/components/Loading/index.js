import React from 'react';
import { CSSTransition } from 'react-transition-group';
import style from './loading.scss';

const classNames = {
  enter: style.enter,
  enterActive: style['enter-active'],
  exit: style.exit,
  exitActive: style['exit-active']
};

const Loading = ({ visible }) => (
  <CSSTransition
    in={visible}
    timeout={400}
    classNames={classNames}
    unmountOnExit
  >
    {() => (
      <div className={style.wrapper}>
        <span>Loading...</span>
      </div>
    )}
  </CSSTransition>
);

export default Loading;
