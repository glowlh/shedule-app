import { createStore } from 'redux';
import schoolActionTypes from '../components/school/types';

const initialState = {
  schools: [],
};

const app = (state = initialState, action) => {
  switch (action.type) {
    case schoolActionTypes.ADD_SCHOOL: {
      const item = {...action.payload};
      item.id = state.schools.length;
      const schools = [...state.schools, item];

      return {...state, schools};
    }
    case schoolActionTypes.DELETE_SCHOOL: {
      const id = action.payload;
      const schools = state.schools.filter(it => it.id !== id);
      return {...state, schools};
    }
    default:
      return state;
  }
};

const store = createStore(app);
export default store;
