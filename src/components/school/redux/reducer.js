import Type from './types';

const initialState = [{
  name: '30-08',
  count: 17,
  description: 'выпуск в декабре'
}];

const schoolReducer = (state = initialState, action) => {
  switch (action.type) {
    case Type.ADD_SCHOOL: {
      const item = {...action.payload};
      item.id = state.length;
      return [...state, item];
    }
    case Type.DELETE_SCHOOL: {
      const id = action.payload;
      return state.filter(it => it.id !== id);
    }
    default:
      return state;
  }
};

export default schoolReducer;
