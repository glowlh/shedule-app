import { createStore } from 'redux';
import schoolActionTypes from '../components/school/types';
import classroomActionTypes from '../components/classroom/types';

const initialState = {
  schools: [],
  classrooms: [],
};

const app = (state = initialState, action) => {
  switch (action.type) {
    case schoolActionTypes.ADD_SCHOOL: {
      const item = {...action.payload};
      item.id = state.schools.length;
      const schools = [...state.schools, item];

      return {...state, schools};
    }
    case schoolActionTypes.DELETE_SCHOOL: {
      const id = action.payload;
      const schools = state.schools.filter(it => it.id !== id);
      return {...state, schools};
    }
    case classroomActionTypes.ADD_CLASSROOM: {
      const item = {...action.payload};
      item.id = state.classrooms.length;
      const classrooms = [...state.classrooms, item];

      return {...state, classrooms};
    }
    case classroomActionTypes.DELETE_CLASSROOM: {
      const id = action.payload;
      const classrooms = state.classrooms.filter(it => it.id !== id);
      return {...state, classrooms};
    }
    default:
      return state;
  }
};

const store = createStore(app);
export default store;
