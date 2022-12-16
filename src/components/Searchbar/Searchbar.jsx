import { Component } from 'react';
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

export class Searchbar extends Component {
  state = {
    searchName: '',
  };

  handleNameChange = e => {
    this.setState({ searchName: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { searchName } = this.state;

    this.props.onSubmit(searchName);
    if (searchName.trim() === '') {
      return toast.warn('Please enter a valid seach name');
    }
    this.props.onSubmit(searchName);
    this.setState({ searchName: '' });
  };

  render() {
    const { searchName } = this.state;

    return (
      <Header>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchButton type="submit">
            <IconContext.Provider value={{ size: '20px' }}>
              <BsSearch />
            </IconContext.Provider>
          </SearchButton>
          <SearchInput
            type="text"
            name="searchName"
            value={searchName}
            onChange={this.handleNameChange}
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </Header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
