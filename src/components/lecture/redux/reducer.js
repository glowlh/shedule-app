import Type from './types';

const initialState = [
  {
    name: 'super lecture',
    dateFrom: '2017-10-16T10:29:00.092Z',
    dateTo: '2017-10-16T12:29:00.092Z',
    schools: ['test-school'],
    classroom: 'test-classroom',
    teacher: 'test-teacher',
    id: '0',
  },
  {
    name: 'simple lecture',
    dateFrom: '2017-10-17T09:29:00.092Z',
    dateTo: '2017-10-17T12:29:00.092Z',
    schools: ['test-school'],
    classroom: 'test-classroom',
    teacher: 'test-teacher',
    id: '1',
  },
];

const lectureReducer = (state = initialState, action) => {
  switch (action.type) {
    case Type.ADD_LECTURE: {
      const item = {...action.payload};
      item.id = state.length;
      return [...state, item];
    }
    case Type.DELETE_LECTURE: {
      const id = action.payload;
      return state.filter(it => it.id !== id);
    }
    default:
      return state;
  }
};

export default lectureReducer;
