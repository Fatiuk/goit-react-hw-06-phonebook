// ============ Section ============
import Section from './Section/Section';
// ============ ContactForm ============
import ContactForm from './ContactForm/ContactForm';
// ============ ContactList ============
import Filter from './Filter/Filter';
// ============ ContactList ============
import ContactList from './ContatctsList/ContactsList';

const App = () => {
  // const [filter, setFilter] = useState('');

  // // The method that updates the value of the filter
  // const changeFilter = event => {
  //   setFilter(event.target.value);
  // };
  // // The method that returns the filtered list of contacts
  // const filteredContacts = () => {
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase().trim())
  //   );
  // };

  return (
    <Section title="📚 Phonebook 📞">
      <ContactForm></ContactForm>
      <h2>Contacts</h2>
      <Filter></Filter>
      <ContactList></ContactList>
    </Section>
  );
};

export default App;
