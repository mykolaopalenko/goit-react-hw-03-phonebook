import React from 'react';
import css from './ContactList.module.css';
import PropTypes from 'prop-types';
import Avatar from 'react-avatar';

export default class ContactItem extends React.Component {
  render() {
    const { id, name, number, deleteContact } = this.props;
    return (
      <>
        <div className={css.contactName}>
          <Avatar size="40" name={name} round={true} />
          <p className={css.contact}>
            {name}: {number}
          </p>
        </div>
        <button
          id={id}
          className={css.deleteBtn}
          type="button"
          onClick={deleteContact}
        >
          Delete
        </button>
      </>
    );
  }
}

ContactItem.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  number: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
