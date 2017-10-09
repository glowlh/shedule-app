import ClassroomValidator from './validator';
import {addClassroom as addClassroomAction} from './actions';

export const addClassroom = (payload) => {
  return (dispatch, getState) => {
    const classrooms = getState().classrooms;
    const isUnique = !classrooms.some(it => it.name === payload.name);
    if (!isUnique) {
      return Promise.reject({error: 'The classroom is not unique'});
    }

    const validator = new ClassroomValidator();
    return validator.validate(payload)
      .then(() => {
        dispatch(addClassroomAction(payload));
      });
  }
};
