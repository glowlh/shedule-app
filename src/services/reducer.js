import { createStore } from 'redux';
import appActions from '../components/app/form-add-school/types';

const initialState = {
  schools: [],
};

const app = (state = initialState, action) => {
  switch (action.type) {
    case appActions.ADD_SCHOOL: {
      const item = {...action.payload};
      item.id = state.schools.length;
      const schools = [...state.schools, item];

      return {...state, schools};
    }
    case appActions.DELETE_SCHOOL: {
      const id = action.payload;
      const schools = state.schools.filter(it => it.id !== id);
      const newState = {...state, schools};

      return newState;
    }
    default:
      return state;
  }
};

const store = createStore(app);
export default store;
