import React from 'react';
import PT from 'prop-types';
import { Contact } from './Phonebook.styled';
import './style.scss';

export const Contacts = ({ handleFilter, handleDelete, filter }) => {
  console.log(filter);
  return (
    <Contact>
      {handleFilter(filter).map(({ name, number, id }) => (
        <li key={id}>
          <p>
            {name}: {number}
          </p>
          <button className="btn" onClick={() => handleDelete(id)}>
            delete
          </button>
        </li>
      ))}
    </Contact>
  );
};

Contacts.propTypes = {
  filter: PT.string,
};
