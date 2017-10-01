import ClassroomValidator from './validator';
import {addClassroom as addClassroomAction} from './actions';

export const addClassroom = (payload) => {
  return (dispatch) => {
    const classroomValidator = new ClassroomValidator();
    return classroomValidator.validate(payload)
      .then(() => {
        dispatch(addClassroomAction(payload));
      });
  }
};
