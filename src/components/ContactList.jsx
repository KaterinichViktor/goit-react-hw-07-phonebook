import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, selectContacts } from '../Redux/contactsSlice';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <button onClick={() => dispatch(deleteContact(contact.id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
