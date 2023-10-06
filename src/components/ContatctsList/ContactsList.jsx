import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/selectors';
import { getFilter } from 'redux/filter/selectors';
import {
  ContactListWrap,
  PhonebookList,
  PhonebookItem,
} from './ContactsList.styled';
import ContactsItem from 'components/ContactsItem/ContactsItem';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filteredContacts = filter
    ? contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.status.toLowerCase())
      )
    : contacts;

  return (
    <ContactListWrap>
      <PhonebookList>
        {filteredContacts.map(contact => (
          <PhonebookItem key={contact.id}>
            <ContactsItem contact={contact}></ContactsItem>
          </PhonebookItem>
        ))}
      </PhonebookList>
    </ContactListWrap>
  );
};

export default ContactList;
