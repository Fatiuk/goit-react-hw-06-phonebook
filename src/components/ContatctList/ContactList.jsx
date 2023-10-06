import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/selectors';
import {
  ContactListWrap,
  PhonebookList,
  PhonebookItem,
  ContactSpan,
  ContactLink,
  ContactDeleteBtn,
} from './ContactList.styled';

const ContactList = ({ handleDeleteContact }) => {
  const contacts = useSelector(getContacts);
  return (
    <ContactListWrap>
      <PhonebookList>
        {contacts.map(({ id, name, number }) => (
          <PhonebookItem key={id}>
            <ContactSpan>{name}</ContactSpan>:{' '}
            <ContactLink href={`tel:${number}`}>{number}</ContactLink>
            <ContactDeleteBtn
              type="button"
              onClick={() => handleDeleteContact(id)}
            >
              Delete
            </ContactDeleteBtn>
          </PhonebookItem>
        ))}
      </PhonebookList>
    </ContactListWrap>
  );
};

export default ContactList;
