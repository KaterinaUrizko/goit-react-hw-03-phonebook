import { Component } from 'react';
import { nanoid } from 'nanoid'

import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import './App.module.css';


export class App extends Component {

state = {
  contacts: [
    // {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    // {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    // {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    // {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
    filter:'',
  }


  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
         localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }



  formSubmit = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
      
    };

    const contactChecked = this.state.contacts.some(
      item =>
        (item.name.toLowerCase() === contact.name.toLowerCase() &&
          item.number === contact.number) || item.number === contact.number);
    
  
      contactChecked ? alert(`${name} is already in contacts`)
      : this.setState(({ contacts }) => ({
          contacts: [contact, ...contacts],
        }));
  };

  changeFilterInput = e => {
    this.setState({ filter: e.target.value });
     };

  findContacts = () => {
    const { filter, contacts } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
   
    return (
      <section>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmit} />
        <h2>Contacts</h2>
        <Filter filter={this.state.filter} changeFilterInput={this.changeFilterInput} />
        <ContactList
          contacts={this.findContacts()}
          deleteContact={this.deleteContact}
        />
      </section>
    );
  };
}
