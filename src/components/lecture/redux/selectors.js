import { createSelector } from 'reselect';

const itemsSelector = state => state.selected;

export const selectedSelector = createSelector(
  itemsSelector,
  selected => selected,
);
