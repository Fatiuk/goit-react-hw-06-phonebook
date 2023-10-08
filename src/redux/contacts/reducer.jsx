import { contactInitialState } from './initialState';
import { addContact, deleteContact } from './actions';
import { createReducer } from '@reduxjs/toolkit';

export const contactReducer = createReducer(contactInitialState, {
  [addContact]: (state, action) => {
    const isExist = state.some(contact => contact.name === action.payload.name);
    if (!isExist) {
      state.push(action.payload);
    }
  },
  [deleteContact]: (state, action) => {
    return state.filter(contact => contact.id !== action.payload);
  },
});