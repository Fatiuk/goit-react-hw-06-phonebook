import {
  ContactSpan,
  ContactLink,
  ContactDeleteBtn,
} from './ContactsItem.styled';

function ContactsItem({ contact: { name, number } }) {
  return (
    <>
      <ContactSpan>{name}</ContactSpan>:{' '}
      <ContactLink href={`tel:${number}`}>{number}</ContactLink>
      <ContactDeleteBtn type="button">Delete</ContactDeleteBtn>
    </>
  );
}

export default ContactsItem;
