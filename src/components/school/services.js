import SchoolValidator from './validator';
import {addSchool as addSchoolAction} from './actions';

export const addSchool = (payload) => {
  return (dispatch, getState) => {
    const schools = getState().schools;
    const isUnique = !schools.some(it => it.name === payload.name);
    if (!isUnique) {
      return Promise.reject({error: 'The school is not unique'});
    }

    const schoolValidator = new SchoolValidator();
    return schoolValidator.validate(payload)
      .then(() => {
        dispatch(addSchoolAction(payload));
      });
  }
};
