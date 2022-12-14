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

    this.props.onSubmit(this.state.searchName);
    if (this.state.searchName.trim() === '') {
      return toast.warn('Please enter a valid seach name');
    }
    this.props.onSubmit(this.state.searchName);
    this.setState({ searchName: '' });
  };

  render() {
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
            value={this.state.searchName}
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
