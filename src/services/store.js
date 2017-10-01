import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import schoolReducer from '../components/school/reducer';
import classroomReducer from '../components/classroom/reducer';
import teacherReducer from '../components/teacher/reducer';

const store = createStore(
  combineReducers({
    schools: schoolReducer,
    classrooms: classroomReducer,
    teachers: teacherReducer,
  }),
  applyMiddleware(thunk),
);

export default store;
