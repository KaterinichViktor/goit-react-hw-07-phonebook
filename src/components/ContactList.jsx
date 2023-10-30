import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, selectFilter } from '../Redux/contactsSlice'; // Import selectContacts and selectFilter

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.data);
  const filter = useSelector(selectFilter);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {filteredContacts.map((contact) => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <button onClick={() => dispatch(deleteContact(contact.id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
