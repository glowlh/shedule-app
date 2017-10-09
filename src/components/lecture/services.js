import {addLecture as addLectureAction} from './actions';
import LectureValidator from './validator';

export const addLecture = (payload) => {
  return (dispatch, getState) => {
    const state = getState();
    const validator = new LectureValidator();
    return validator.validate(payload, state)
      .then(() => {
        dispatch(addLectureAction(payload));
      });
  }
};
