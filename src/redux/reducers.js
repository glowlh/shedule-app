import { combineReducers } from 'redux';
import schools from '../components/school/redux/reducer';
import classrooms from '../components/classroom/redux/reducer';
import teachers from '../components/teacher/redux/reducer';
import lectures from '../components/lecture/redux/reducer';

const reducers = combineReducers({
  schools,
  classrooms,
  teachers,
  lectures,
});

export default reducers;
