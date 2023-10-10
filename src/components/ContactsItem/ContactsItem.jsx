import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import {
  ContactSpan,
  ContactLink,
  ContactDeleteBtn,
} from './ContactsItem.styled';

function ContactsItem({ contact, contact: { name, number, id } }) {
  const dispatch = useDispatch();

  console.log(contact);

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <>
      <ContactSpan>{name}</ContactSpan>
      <ContactLink href={`tel:${number}`}>{number}</ContactLink>
      <ContactDeleteBtn type="button" onClick={handleDelete}>
        Delete
      </ContactDeleteBtn>
    </>
  );
}

export default ContactsItem;
