import { createAction, nanoid } from '@reduxjs/toolkit';

export const addContact = createAction('contacts/addContact', dataByForm => {
  return {
    payload: {
      id: nanoid(),
      ...dataByForm,
    },
  };
});

export const deleteContact = createAction('contacts/deleteContact');
