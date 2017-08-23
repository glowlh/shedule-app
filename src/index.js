import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import App from './component/app/index.jsx'
import store from './store/app';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);