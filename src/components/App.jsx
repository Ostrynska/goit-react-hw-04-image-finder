import React, { Component } from 'react';
import { getImages } from '../services/api';
import { Toaster } from 'react-hot-toast';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Wrapper } from './App.styled';
import { Loading } from './Loader/Loader';
import { ErrorView } from './Notification/NotificationError';
import { Button } from './Button/Button';

export class App extends Component {
  state = {
    searchName: '',
    images: [],
    // error: null,
    // loading: false,
    page: 1,
    isLoading: false,
    showModal: null,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { searchName, page } = this.state;
    const prevSearch = prevProps.searchName;
    const prevPage = prevState.page;

    if (prevPage !== page || prevSearch !== searchName) {
      try {
        this.setState({ isLoading: true });
        const image = await getImages(searchName, page);
        this.setState(prevState => {
          return { images: [...prevState.images, ...image] };
        });
        this.setState({ isLoading: false });
      } catch (error) {
        this.setState({ error, isLoading: false });
      }
    }
  }

  handleFormSubmit = searchName => {
    if (this.state.searchName !== searchName) {
      this.setState({ images: [], searchName });
    }
    this.setState({ searchName, page: 1, images: [] });
  };

  loadMore = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  onModalOpen = url => {
    this.setState({
      showModal: url,
    });
  };

  onModalClose = () => {
    this.setState({
      showModal: '',
    });
  };

  render() {
    const { images, isLoading, showModal } = this.state;
    return (
      <Wrapper>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {images === null && <h1>Search images and photos</h1>}
        {/* {status === 'rejected' && <ErrorView message={error.message} />} */}

        {images.length !== 0 && <ImageGallery images={images} />}
        {/* {isLoading && <Loading />} */}
        {images.length >= 12 && <Button loadMore={this.loadMore} />}
        <Toaster />
      </Wrapper>
    );
  }
}
