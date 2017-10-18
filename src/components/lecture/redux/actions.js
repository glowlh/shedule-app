import Type from './types';

export const deleteLecture = (payload) => ({
  type: Type.DELETE_LECTURE,
  payload,
});

export const addLecture = (payload) => ({
  type: Type.ADD_LECTURE,
  payload,
});
