import SchoolValidator from './validator';
import {addSchool as addSchoolAction} from './actions';

export const addSchool = (payload) => {
  return (dispatch) => {
    const classroomValidator = new SchoolValidator();
    return classroomValidator.validate(payload)
      .then(() => {
        dispatch(addSchoolAction(payload));
      });
  }
};
