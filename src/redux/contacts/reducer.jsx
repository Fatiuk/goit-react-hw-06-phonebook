import { contactInitialState } from './initialState';

export const contactReducer = (state = contactInitialState, action) => {
  switch (action.type) {
    case 'contacts/addContact':
      const isExist = state.some(
        contact => contact.name === action.payload.name
      );
      if (isExist) {
        return state;
      }
      return [...state, action.payload];

    case 'contacts/deleteContact':
      return state.filter(contact => contact.id !== action.payload);

    default:
      return state;
  }
};
