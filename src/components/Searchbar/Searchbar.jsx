import { useState } from 'react';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import { IconContext } from 'react-icons';
import { BsSearch } from 'react-icons/bs';
import {
  Header,
  SearchForm,
  SearchButton,
  SearchInput,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const [searchName, setSearchName] = useState('');

  const handleNameChange = e => {
    setSearchName(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (searchName.trim() === '') {
      return toast.warn('Please enter a valid seach name');
    }
    onSubmit(searchName);
    setSearchName('');
  };

  return (
    <Header>
      <SearchForm onSubmit={handleSubmit}>
        <SearchButton type="submit">
          <IconContext.Provider value={{ size: '20px' }}>
            <BsSearch />
          </IconContext.Provider>
        </SearchButton>
        <SearchInput
          type="text"
          name="searchName"
          value={searchName}
          onChange={handleNameChange}
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </Header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
