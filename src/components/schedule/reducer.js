import actionTypes from './action-types';

const initialState = {
  favorite: [],
};

const scheduleReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_FAVORITE: {
      return {...state, favorite: action.payload};
    }
    default:
      return state;
  }
};

export default scheduleReducer;
