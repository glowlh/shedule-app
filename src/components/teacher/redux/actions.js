import Type from './types';

export const deleteTeacher = (payload) => ({
  type: Type.DELETE_TEACHER,
  payload,
});

export const addTeacher = (payload) => ({
  type: Type.ADD_TEACHER,
  payload,
});
