import report from 'utils/report';

let reporter = {
  test() {
    report({ event: 'test_click' });
  }
};

export default reporter;
