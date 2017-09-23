import actionTypes from './types';

const initialState = [];

const schoolReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_SCHOOL: {
      const item = {...action.payload};
      item.id = state.length;
      return [...state, item];
    }
    case actionTypes.DELETE_SCHOOL: {
      const id = action.payload;
      return state.filter(it => it.id !== id);
    }
    default:
      return state;
  }
};

export default schoolReducer;
