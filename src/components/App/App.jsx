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
    // console.dir(e.currentTarget);
    const { value, name } = e.currentTarget;
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { value } = e.target.name;

    if (this.dublicateCheck(value)) {
      alert(`${value} is alredy existing`);
      return e.currentTarget.reset();
    }
    // const { value, name } = e.currentTarget;
    this.setState(prev => ({
      contacts: [
        ...prev.contacts,
        { name: prev.name, number: prev.number, id: nanoid() },
      ],
    }));
    e.currentTarget.reset();
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
    const { contacts } = this.state;
    return (
      <Container>
        <Phonebook
          contacts={contacts}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        <Filter
          contacts={contacts}
          handleFilter={this.handleFilter}
          handleChange={this.handleChange}
        />
        <Contacts
          contacts={this.state}
          handleDelete={this.handleDelete}
          handleFilter={this.handleFilter}
        />
      </Container>
    );
  }
}
