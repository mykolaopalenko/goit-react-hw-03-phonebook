import React from 'react';
import ContactItem from './ContactItem';
import css from './ContactList.module.css';
import PropTypes from 'prop-types';

export default class ContactList extends React.Component {
  render() {
    const { contacts, deleteContact } = this.props;
    return (
      <ul>
        {contacts.map(({ id, name, number }) => {
          return (
            <li className={css.item} key={id}>
              <ContactItem
                id={id}
                name={name}
                number={number}
                deleteContact={deleteContact}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  deleteContact: PropTypes.func.isRequired,
};
