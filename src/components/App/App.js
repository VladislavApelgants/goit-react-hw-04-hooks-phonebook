import React, { useState } from 'react';
import s from './App.module.scss';
import { v4 as uuidv4 } from 'uuid';
import Form from '../Form';
import ContactList from '../ContactList';
import Filter from '../Filter';
import useLocalStorage from '../../hooks/useLocalStorage';

function App() {
  const [contacts, setContacts] = useLocalStorage('contacts', '');
  const [filter, setFilter] = useState('');

  function formSubmit(name, number) {
    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in the contacts`);
      return;
    }
    return setContacts(prevContacts => [
      { name, number, id: uuidv4() },
      ...prevContacts,
    ]);
  }

  function del(e) {
    setContacts(contacts.filter(contact => contact.id !== e));
  }

  function getFiltered() {
    const lowerCase = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(lowerCase),
    );
  }

  function filt(e) {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'filter':
        setFilter(value);
        break;
      default:
        return;
    }
  }

  return (
    <div className={s.phonebook}>
      <h1 className={s.title}>Phonebook</h1>
      <Form onSubmit={formSubmit} />
      <div className="contacts">
        <h2 className={s.title}>Contacts</h2>
        <Filter value={filter} onChange={filt} />
        <div className={s.containerOverflow}>
          {contacts.length !== 0 ? (
            <ContactList data={getFiltered()} onChange={del} />
          ) : (
            <p>There is nothing here yet</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
