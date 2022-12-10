import React, { Component } from 'react';
// import { FetchImages } from 'api';
import { Toaster } from 'react-hot-toast';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Wrapper } from './App.styled';

export class App extends Component {
  state = {
    searchName: '',
    page: 1,
  };

  handleFormSubmit = searchName => {
    this.setState({ searchName });
  };

  render() {
    return (
      <Wrapper>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery searchName={this.state.searchName} />
        <Button />
        <Toaster />
      </Wrapper>
    );
  }
}
