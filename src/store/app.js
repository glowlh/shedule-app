import { createStore } from 'redux';
import app from '../reducer/app';

const store = createStore(app);
store.subscribe(() => {
  console.log(store.getState().text);
});

export default store;
