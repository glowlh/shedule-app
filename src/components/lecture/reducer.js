import actionTypes from './action-types';

const initialState = [{
  name: 'test',
  dateFrom: '01-01-2017',
  dateTo: '02-02-2017',
  schools: ['test-school'],
  classroom: 'test-classroom',
  teacher: 'test-teacher'
}];

const lectureReducer = (state = initialState, action) => {
  switch (action.types) {
    case actionTypes.ADD_LECTURE: {
      const item = {...action.payload};
      item.id = state.length;
      return [...state, item];
    }
    case actionTypes.DELETE_LECTURE: {
      const id = action.payload;
      return state.filter(it => it.id !== id);
    }
    default:
      return state;
  }
};

export default lectureReducer;
