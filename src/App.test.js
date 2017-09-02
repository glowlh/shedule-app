import React from 'react';
import ReactDOM from 'react-dom';
import App from './schedule/components/app/index.jsx';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
