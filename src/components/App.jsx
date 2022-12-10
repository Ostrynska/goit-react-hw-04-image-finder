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
    // query: [],
    items: [],
  };

  // componentDidUpdate(_, prevState) {
  //   if (
  //     prevState.page !== this.state.page ||
  //     prevState.searchName !== this.state.searchName
  //   ) {
  //     console.log('Fetch data');
  //   }
  // }

  handleFormSubmit = searchName => {
    this.setState({ searchName });

    // this.setState({
    //   page: 1,
    //   searchName,
    //   items: [],
    // });
  };

  loadMore = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  render() {
    return (
      <Wrapper>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery searchName={this.state.searchName} />
        <Button loadMore={this.loadMore} />
        <Toaster />
      </Wrapper>
    );
  }
}
