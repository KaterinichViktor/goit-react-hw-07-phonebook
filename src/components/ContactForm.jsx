// ContactForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../Redux/contactsSlice';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const handleAddContact = () => {
    if (name === '' || number === '') {
      alert('Please fill in all fields');
      return;
    }

    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };

  return (
    <div>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="tel"
          name="number"
          placeholder="Phone Number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <button type="button" onClick={handleAddContact}>
          Add Contact
        </button>
      </form>
    </div>
  );
};

export default ContactForm;