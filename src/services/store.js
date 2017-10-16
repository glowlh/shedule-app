import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import schoolReducer from '../components/school/reducer';
import classroomReducer from '../components/classroom/reducer';
import teacherReducer from '../components/teacher/reducer';
import lectureReducer from '../components/lecture/reducer';
import scheduleReducer from '../components/schedule/reducer';

const store = createStore(
  combineReducers({
    schools: schoolReducer,
    classrooms: classroomReducer,
    teachers: teacherReducer,
    lectures: lectureReducer,
    schedule: scheduleReducer,
  }),
  applyMiddleware(thunk),
);

export default store;
