import { createStore } from 'redux';
import app from './reducer';

const store = createStore(app);
store.subscribe(() => {});

export default store;
