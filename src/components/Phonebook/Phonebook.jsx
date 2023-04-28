// import PT from 'prop-types';

import { FeedbackSection } from './Feedback.styled';

const Phonebook = ({ contacts, handleSubmit, handleChange }) => {
  const { name } = contacts;
  return (
    <FeedbackSection>
      <form onSubmit={handleSubmit}>
        <h1>Phone Book</h1>
        <input
          style={{ fontSize: '34px' }}
          placeholder="Enter a phone number"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
        <input
          style={{ fontSize: '34px' }}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          // value={contacts.nubmer}
          onChange={handleChange}
        />
        <button type="submit" className="btn">
          Add contact
        </button>
      </form>
    </FeedbackSection>
  );
};

export default Phonebook;
/* Profile.propTypes = {
  username: PT.string.isRequired,
  tag: PT.string.isRequired,
  location: PT.string.isRequired,
  avatar: PT.string.isRequired,
  stats: PT.any.isRequired,
}; */
