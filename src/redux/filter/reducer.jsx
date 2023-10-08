import { setQueryFilter } from './actions';
import { filterInitialState } from './initialState';
import { createReducer } from '@reduxjs/toolkit';

export const filtersReducer = createReducer(filterInitialState.filter, {
  [setQueryFilter]: (state, action) => {
    return action.payload;
  },
});
