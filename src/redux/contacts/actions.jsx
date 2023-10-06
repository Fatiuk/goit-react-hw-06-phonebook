import { nanoid } from 'nanoid';

export const addContact = dataByForm => {
  return {
    type: 'contacts/addContact',
    payload: {
      id: nanoid(),
      ...dataByForm,
    },
  };
};

export const deleteContact = contactId => {
  return {
    type: 'contacts/deleteContact',
    payload: contactId,
  };
};
