import types from './action-types';

export const deleteLecture = (payload) => ({
  type: types.DELETE_LECTURE,
  payload,
});

export const addLecture = (payload) => ({
  type: types.ADD_LECTURE,
  payload,
});
