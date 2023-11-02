import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts, selectContacts, selectFilter } from '../Redux/contactsSlice';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

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

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {filteredContacts.map((contact) => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <button onClick={() => handleDeleteContact(contact.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;


// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { deleteContact, selectFilter, selectContacts } from '../Redux/contactsSlice';

// const ContactList = () => {
//   const dispatch = useDispatch();
//   const contacts = useSelector(selectContacts);
//   const filter = useSelector(selectFilter);

//   const filteredContacts = contacts.filter((contact) =>
//     contact.name.toLowerCase().includes(filter.toLowerCase())
//   );

//   return (
//     <ul>
//       {filteredContacts.map((contact) => (
//         <li key={contact.id}>
//           {contact.name}: {contact.number}
//           <button onClick={() => dispatch(deleteContact(contact.id))}>Delete</button>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default ContactList;
