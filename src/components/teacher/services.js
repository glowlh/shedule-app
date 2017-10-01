import TeacherValidator from './validator';
import {addTeacher as addTeacherAction} from './actions';

export const addTeacher = (payload) => {
  return (dispatch) => {
    const teacherValidator = new TeacherValidator();
    return teacherValidator.validate(payload)
      .then(() => {
        dispatch(addTeacherAction(payload));
      });
  }
};
