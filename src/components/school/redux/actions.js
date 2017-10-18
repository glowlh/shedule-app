import Type from './types';

export const deleteSchool = (payload) => ({
  type: Type.DELETE_SCHOOL,
  payload,
});

export const addSchool = (payload) => ({
  type: Type.ADD_SCHOOL,
  payload,
});
