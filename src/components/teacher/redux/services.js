import TeacherValidator from '../validator';
import {addTeacher as addTeacherAction} from './actions';

export const addTeacher = (payload) => {
  return (dispatch, getState) => {
    const teachers = getState().teachers;
    const isUnique = !teachers.some(it => it.name === payload.name);
    if (!isUnique) {
      return Promise.reject({error: 'The teacher is not unique'});
    }

    const teacherValidator = new TeacherValidator();
    return teacherValidator.validate(payload)
      .then(() => {
        dispatch(addTeacherAction(payload));
      });
  }
};
