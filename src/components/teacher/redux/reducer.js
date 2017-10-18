import Type from './types';

const initialState = [{
  name: 'Титов Иван',
  description: 'Элвис'
}];

const teacherReducer = (state = initialState, action) => {
  switch (action.type) {
    case Type.ADD_TEACHER: {
      const item = {...action.payload};
      item.id = state.length;
      return [...state, item];
    }
    case Type.DELETE_TEACHER: {
      const id = action.payload;
      return state.filter(it => it.id !== id);
    }
    default:
      return state;
  }
};

export default teacherReducer;
