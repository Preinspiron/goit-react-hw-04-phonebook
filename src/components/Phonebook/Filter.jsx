import { Input } from './Feedback.styled';
export const Filter = ({ handleFilter, handleChange, filter }) => {
  return (
    <Input
      type="text"
      name="filter"
      placeholder="Find contacts"
      value={filter}
      onChange={handleChange}
    />
  );
};
