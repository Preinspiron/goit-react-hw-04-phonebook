// import PT from 'prop-types';

import { FeedbackSection } from './Feedback.styled';
import { Contacts } from './Contacts';

const Phonebook = ({ contact, handleSubmit }) => {
  return (
    <FeedbackSection>
      <form
        action="
      "
      >
        <h1>Phone Book</h1>
        <input
          style={{ fontSize: '34px' }}
          placeholder="Enter a phone number"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <button type="button" className="btn" onSubmit={handleSubmit}>
          Add contact
        </button>
      </form>

      <Contacts />
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
