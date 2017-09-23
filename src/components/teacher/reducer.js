import actionTypes from './types';

const initialState = [];

const teacherReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TEACHER: {
      const item = {...action.payload};
      item.id = state.length;
      return [...state, item];
    }
    case actionTypes.DELETE_TEACHER: {
      const id = action.payload;
      return state.filter(it => it.id !== id);
    }
    default:
      return state;
  }
};

export default teacherReducer;
