import { Component } from 'react';
import { Container } from './App.styled.js';
import Phonebook from '../Phonebook';
// import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    // this.setState(prev => console.log(prev));
  };

  render() {
    return (
      <Container>
        <Phonebook contact={this.state} handleSubmit={this.handleSubmit} />
      </Container>
    );
  }
}
