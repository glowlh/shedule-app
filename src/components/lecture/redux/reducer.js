import Type from './types';

const initialState = {
  selected: [],
  items: [
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
  ]
};

const lectureReducer = (state = initialState, action) => {
  switch (action.type) {
    case Type.ADD_LECTURE: {
      const stateItems = [...state.items];
      const item = {...action.payload};
      item.id = state.items.length;
      const newItems = [...stateItems, item];
      return {...state, newItems};
    }
    case Type.DELETE_LECTURE: {
      const id = action.payload;
      const newItems = state.items.filter(it => it.id !== id);
      return {...state, newItems};
    }
    case Type.ADD_SELECTED: {
      const selected = new Set(state.selected);
      action.payload.forEach(it => selected.add(it));
      return {...state, selected: [...selected]};
    }
    default:
      return state;
  }
};

export default lectureReducer;
