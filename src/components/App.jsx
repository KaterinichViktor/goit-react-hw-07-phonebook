// App.jsx
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../Redux/contactsSlice';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 24,
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}

export default App;
