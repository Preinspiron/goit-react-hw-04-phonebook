import { Component } from 'react';
import { Container } from './App.styled.js';
import { nanoid } from 'nanoid';
import Phonebook, { Filter, Contacts, INIT } from '../Phonebook';

export class App extends Component {
  static defaultProps = INIT;
  state = {
    contacts: this.props.contacts,
    filter: '',
  };
  handleChange = e => {
    const { name, value } = e.target;
    console.log(name, value);
    this.setState({ [name]: value });
  };
  componentDidMount(prev) {
    const local = localStorage.getItem('contacts');
    if (local) this.setState({ contacts: JSON.parse(local) });
  }
  componentDidUpdate(prevProp, prevState) {
    console.log('update');
    console.log(prevProp, prevState);
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }

  addContact = value => {
    if (this.dublicateCheck(value.name)) return alert(`${value.name} exist`);
    this.setState(({ contacts }) => ({
      contacts: [
        ...contacts,
        {
          ...value,
          id: nanoid(),
        },
      ],
    }));
  };
  handleFormData = data => {
    // this.setState(({ contacts }) => ({
    // contacts: data === 'true' ? this.props.contacts : [],
    // }));
  };
  handleDelete = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(el => el.id !== id),
    }));
  };

  handleFilter = query => {
    const { filter } = this.state;
    if (!filter) return this.state.contacts;
    return this.state.contacts.filter(({ name }) => {
      return name.toLowerCase().includes(query.toLowerCase());
    });
  };

  dublicateCheck(name) {
    return this.state.contacts.some(item => item.name === name);
  }
  render() {
    const { filter } = this.state;
    return (
      <Container>
        <h1>Phonebook</h1>
        <Phonebook
          handleFormData={this.handleFormData}
          addContact={this.addContact}
          handleChange={this.handleChange}
        />
        <h2>Contacts</h2>
        <Filter
          filter={filter}
          handleFilter={this.handleFilter}
          handleChange={this.handleChange}
        />
        <Contacts
          filter={filter}
          handleDelete={this.handleDelete}
          handleFilter={this.handleFilter}
        />
      </Container>
    );
  }
}
