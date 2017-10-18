import Type from './types';

const initialState = [{
  name: 'Малый зал',
  count: 30,
  description: '137 аудитория - 1 этаж'
}];

const classroomReducer = (state = initialState, action) => {
  switch (action.type) {
    case Type.ADD_CLASSROOM: {
      const item = {...action.payload};
      item.id = state.length;
      return [...state, item];
    }
    case Type.DELETE_CLASSROOM: {
      const id = action.payload;
      return state.filter(it => it.id !== id);
    }
    default:
      return state;
  }
};

export default classroomReducer;
