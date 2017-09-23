import { createStore, combineReducers } from 'redux';
import schoolReducer from '../components/school/reducer';
import classroomReducer from '../components/classroom/reducer';
import teacherReducer from '../components/teacher/reducer';

const store = createStore(combineReducers({
  schools: schoolReducer,
  classrooms: classroomReducer,
  teachers: teacherReducer,
}));

export default store;
