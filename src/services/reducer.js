import appActions from './actions';

const initialState = {
  schools: [],
};

const app = (state = initialState, action) => {
  switch (action.type) {
    case appActions.ADD_SCHOOL: {
      const newState = {...state};
      const item = {...action.payload};
      item.id = state.schools.length;
      newState.schools.push(item);

      return newState;
    }
    case appActions.DELETE_SCHOOL: {
      const id = action.payload;
      const schools = [...state.schools].filter(it => it.id !== id);
      const newState = {...state, schools};

      return newState;
    }
    default:
      return state;
  }
};

export default app;
