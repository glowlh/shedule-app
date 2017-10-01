import SchoolValidator from './validator';
import {addSchool as addSchoolAction} from './actions';

export const addSchool = (payload) => {
  return (dispatch) => {
    const schoolValidator = new SchoolValidator();
    return schoolValidator.validate(payload)
      .then(() => {
        dispatch(addSchoolAction(payload));
      });
  }
};
