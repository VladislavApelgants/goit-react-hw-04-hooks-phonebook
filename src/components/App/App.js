import React, { Component } from 'react';
import s from './App.module.scss';
import { v4 as uuidv4 } from 'uuid';
import Form from '../Form';
import ContactList from '../ContactList';
import Filter from '../Filter';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contactsStorage = JSON.parse(localStorage.getItem('contacts'));
    if (contactsStorage) {
      this.setState({ contacts: contactsStorage });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  componentWillUnmount() {}

  formSubmit = (name, number) => {
    this.setState(prevState => {
      if (prevState.contacts.find(contact => contact.name === name)) {
        alert(`${name} is already in the contacts`);
        return;
      }

      return {
        contacts: [{ name, number, id: uuidv4() }, ...prevState.contacts],
      };
    });
  };

  delete = e => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== e),
    }));
  };

  filter = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  getFiltered = () => {
    const { contacts, filter } = this.state;
    const lowerCase = filter.toLowerCase();
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(lowerCase);
    });
  };

  render() {
    const { filter, contacts } = this.state;
    const filteredCard = this.getFiltered();

    return (
      <div className={s.phonebook}>
        <h1 className={s.title}>Phonebook</h1>
        <Form onSubmit={this.formSubmit} />
        <div className="contacts">
          <h2 className={s.title}>Contacts</h2>
          <Filter value={filter} onChange={this.filter} />
          <div className={s.containerOverflow}>
            {contacts.length !== 0 ? (
              <ContactList data={filteredCard} onChange={this.delete} />
            ) : (
              <p>There is nothing here yet</p>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
