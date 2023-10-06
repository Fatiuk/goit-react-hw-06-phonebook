import { nanoid } from 'nanoid';

export const addContacts = dataByForm => {
  return {
    type: 'contacts/addContact',
    payload: {
      id: nanoid(),
      ...dataByForm,
    },
  };
};
