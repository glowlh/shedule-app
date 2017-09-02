import { createStore } from 'redux';
import app from './reducer';

const store = createStore(app);
store.subscribe(() => {
  console.log(store.getState().text);
});

export default store;
