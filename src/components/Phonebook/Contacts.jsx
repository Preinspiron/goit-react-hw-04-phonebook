import React from 'react';
import { Contact } from './Feedback.styled';

export const Contacts = ({
  handleFilter,
  handleDelete,
  contacts: { contacts, filter },
}) => {
  return (
    <Contact>
      <h2>Contacts</h2>
      <ul>
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
      </ul>
    </Contact>
  );
};

// contact.map(item => console.log(item));
