import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import App from './components/app/index.jsx'
import store from '../services/store';

const init = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
};

export default init;
