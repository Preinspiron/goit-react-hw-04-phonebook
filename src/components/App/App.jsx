import { useEffect, useState } from 'react';
import { Container } from './App.styled.js';
import { nanoid } from 'nanoid';
import Phonebook, { Filter, Contacts } from '../Phonebook';
import { INIT } from '../Phonebook/index';

export const App = () => {
  let DEF_STATE = localStorage.getItem('contacts');
  let DEF_PARSED = JSON.parse(DEF_STATE);
  const [contacts, setContacts] = useState(DEF_PARSED ?? INIT.contacts);
  const [filter, setFilter] = useState('');
  console.log(contacts);

  // useEffect(() => {
  //   const local = localStorage.getItem('contacts');
  //   if (local) setContacts([...JSON.parse(local)]);
  // }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleChange = e => {
    const { value } = e.target;
    setFilter(value);
  };

  const addContact = value => {
    if (dublicateCheck(value.name)) return alert(`${value.name} exist`);
    setContacts(prev => [...prev, { ...value, id: nanoid() }]);
  };

  const handleFormData = data => {
    // this.setState(({ contacts }) => ({
    // contacts: data === 'true' ? this.props.contacts : [],
    // }));
  };
  const handleDelete = id => {
    setContacts(pr => [...pr.filter(el => el.id !== id)]);
  };

  const handleFilter = query => {
    // if (!filter) return contacts;
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(query.toLowerCase())
    );
  };

  const dublicateCheck = name => {
    return contacts.some(item => item.name === name);
  };

  return (
    <Container>
      <h1>Phonebook</h1>
      <Phonebook
        handleFormData={handleFormData}
        addContact={addContact}
        handleChange={handleChange}
      />
      <h2>Contacts</h2>
      <Filter
        filter={filter}
        handleFilter={handleFilter}
        handleChange={handleChange}
      />
      <Contacts
        filter={filter}
        handleDelete={handleDelete}
        handleFilter={handleFilter}
      />
    </Container>
  );
};
