import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const root = ReactDOM.createRoot(div);
  root.render(<App />);
  ReactDOM.unmountComponentAtNode(div);
});
