import PropTypes from 'prop-types';
import './ContactList.module.css';


export const ContactList = ({contacts, deleteContact}) => {
    return (
    <ul>
        {contacts.map(({id, name, number}) =>
            (
            <li key={id}>
            <p>{name}: {number}</p>
            <button type ='button' onClick={()=>deleteContact(id)}>Delete</button>
            </li>)
        )}
    </ul>)
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({ 
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,})),
    deleteContact: PropTypes.func.isRequired,
  };