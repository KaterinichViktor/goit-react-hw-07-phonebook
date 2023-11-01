// src/components/ContactForm.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../Redux/contactsSlice';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const handleAddContact = () => {
    if (name === '' || number === '') {
      alert('Будь ласка, заповніть всі поля');
      return;
    }

    // Об'єкт, який буде відправлений на сервер
    const newContact = {
      name,
      number,
    };

    // Відправка нового контакту на сервер методом POST
    fetch('https://653f88eb9e8bd3be29e0c133.mockapi.io/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newContact),
    })
      .then((response) => response.json())
      .then((data) => {
        // Після успішного додавання на сервер отримуємо новий контакт з ID
        dispatch(addContact(data));
        // Очищення полів форми
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
