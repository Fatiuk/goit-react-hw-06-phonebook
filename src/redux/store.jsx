import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './contacts/reducer';
import { filtersReducer } from './filter/reducer';

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filtersReducer,
  },
});
