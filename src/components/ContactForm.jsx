import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, selectContacts } from '../Redux/contactsSlice';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const isNameUnique = () => {
    return !contacts.some((contact) => contact.name === name);
  };

  const handleAddContact = () => {
    if (name === '' || number === '') {
      alert('Будь ласка, заповніть всі поля');
      return;
    }

    if (!isNameUnique()) {
      alert("Це ім'я вже існує. Виберіть інше ім'я.");
      return;
    }

    const newContact = {
      name,
      number,
    };

    fetch('https://653f88eb9e8bd3be29e0c133.mockapi.io/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newContact),
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(addContact(data));
        setName('');
        setNumber('');
      })
      .catch((error) => {
        console.error('Помилка при додаванні на сервер:', error);
      });
  };

  return (
    <div>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Ім'я"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="tel"
          name="number"
          placeholder="Номер телефону"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <button type="button" onClick={handleAddContact}>
          Додати контакт
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
