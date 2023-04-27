import { Component } from "react";

import PropTypes from 'prop-types';
import './ContactForm.module.css';

export class ContactForm extends Component {

    state = {
        name:'',
        number: '',
    }

    handleChange = event => {
        const {name, value} = event.currentTarget;
        this.setState({[name]: value});
        console.log(this.state);
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state);
        this.setState({
            name:'',
            number:'',
        });
    };

    render() {
        const { name, number } = this.state;
        return (
          <form onSubmit={this.handleSubmit}>
           <label> Name
            <input
                type="text"
                name="name"
                value={name}
                onChange={this.handleChange}
                placeholder="Name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
            </label>
            <label> Phone number
              <input
                type="tel"
                name="number"
                value={number}
                onChange={this.handleChange}
                placeholder="Phone number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
            </label>
    
            <button type="submit">Add contact</button>
          </form>
        );
      }
    }
    
    ContactForm.prototypes = {
         onSubmit: PropTypes.func.isRequired,
         name: PropTypes.string.isRequired,
         number: PropTypes.number.isRequired
    };


