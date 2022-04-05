import { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Label, Input } from './SearchForm.styled';
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';

const SearchForm = ({ onSubmit }) => {
  const [searchMovie, setSearchMovie] = useState('');

  const handleNameChange = event => {
    setSearchMovie(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (searchMovie.trim() === '') {
      toast.error('Oops... Try again!', { theme: 'colored' });
      return;
    }

    onSubmit(searchMovie);
    setSearchMovie('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="searchMovie"
        value={searchMovie}
        onChange={handleNameChange}
        autoFocus
        placeholder="Search movies"
      />
      <Button type="submit">
        <ImSearch size={25} />
        <Label>Search</Label>
      </Button>
    </Form>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default SearchForm;
