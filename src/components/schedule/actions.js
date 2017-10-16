import types from './action-types';

export const addFavorite = (payload) => ({
  type: types.ADD_FAVORITE,
  payload,
});
