// src/components/ContactList.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, selectContacts } from '../Redux/contactsSlice'; 

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleDeleteContact = (id) => {
    // Видалення контакту на сервері
    fetch(`https://653f88eb9e8bd3be29e0c133.mockapi.io/contacts/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        // Після успішного видалення на сервері видаляємо його на сайті
        dispatch(deleteContact(id));
      })
      .catch((error) => {
        console.error('Помилка під час видалення з сервера:', error);
      });
  };

  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <button onClick={() => handleDeleteContact(contact.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
