import React, { useState, useEffect } from 'react';
// ============ Section ============
import Section from './Section/Section';
// ============ ContactForm ============
import ContactForm from './ContactForm/ContactForm';
// ============ ContactList ============
import Filter from './Filter/Filter';
// ============ ContactList ============
import ContactList from './ContatctList/ContactList';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const App = () => {
  // State
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? initialContacts
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  // The method that deletes the contact by its ID
  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };
  // The method that updates the value of the filter
  const changeFilter = event => {
    setFilter(event.target.value);
  };
  // The method that returns the filtered list of contacts
  const filteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  };

  return (
    <Section title="📚 Phonebook 📞">
      <ContactForm></ContactForm>
      <h2>Contacts</h2>
      <Filter filter={filter} onChange={changeFilter}></Filter>
      <ContactList
        contacts={filteredContacts()}
        handleDeleteContact={deleteContact}
      ></ContactList>
    </Section>
  );
};

export default App;
