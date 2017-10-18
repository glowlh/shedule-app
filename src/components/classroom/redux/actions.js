import Type from './types';

export const deleteClassroom = (payload) => ({
  type: Type.DELETE_CLASSROOM,
  payload,
});

export const addClassroom = (payload) => ({
  type: Type.ADD_CLASSROOM,
  payload,
});
