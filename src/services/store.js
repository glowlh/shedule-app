import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import schoolReducer from '../components/school/reducer';
import classroomReducer from '../components/classroom/reducer';
import teacherReducer from '../components/teacher/reducer';
import lectureReducer from '../components/lecture/reducer';

const store = createStore(
  combineReducers({
    schools: schoolReducer,
    classrooms: classroomReducer,
    teachers: teacherReducer,
    lectures: lectureReducer,
  }),
  applyMiddleware(thunk),
);

export default store;
