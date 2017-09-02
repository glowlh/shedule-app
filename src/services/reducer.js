import appActions from './actions';

const initialState = {
  id: 0,
  text: 'Way',
};

const app = (state = initialState, action) => {
  switch (action.type) {
    case appActions.INIT:
      return {...state, text: action.payload};
    default:
      return state;
  }
};

export default app;
