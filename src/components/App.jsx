import React, { Component } from 'react';
import { toast, Toaster } from 'react-hot-toast';

import { getImages, getImageData } from '../services/api';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loading } from './Loader/Loader';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    searchName: '',
    images: [],
    page: 1,
    loading: false,
    showModal: false,
    fullImage: '',
    error: null,
  };

  componentDidUpdate(_, prevState) {
    const prevSearch = prevState.searchName;
    const prevPage = prevState.page;
    const { searchName, page } = this.state;

    if (prevSearch !== searchName || prevPage !== page) {
      this.renderGallery();
    }
  }

  renderGallery = async () => {
    const { searchName, page } = this.state;
    this.setState({ loading: true });

    try {
      const { hits, totalHits, total } = await getImages(searchName, page);
      const newDataImage = getImageData(hits);

      if (!hits.length) {
        toast.error(
          `Nooo... we cannot find "${searchName}" 😢
          Please try again`
        );
      } else if (page === 1) {
        toast.success(`You can find: ${total} images 🚀`);
      }

      this.setState(({ images }) => ({
        images: [...images, ...newDataImage],
        totalHits,
      }));
    } catch (error) {
      this.setState({ error });
      toast.error(`Oops... Something went wrong`);
    } finally {
      this.setState({ loading: false });
    }
  };

  onFormSubmit = searchName => {
    this.setState({ searchName, images: [], page: 1 });
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  openModal = fullImage => {
    this.toggleModal();
    this.setState({
      fullImage,
    });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { images, loading, fullImage, showModal, totalHits } = this.state;
    const hideLoadMoreBtn =
      images.length > 0 && !loading && images.length !== totalHits;

    return (
      <>
        <Searchbar onSubmit={this.onFormSubmit} />
        <ImageGallery images={images} onClick={this.openModal} />
        {showModal && (
          <Modal onModalClick={this.toggleModal} fullImage={fullImage} />
        )}
        {loading && <Loading />}
        {hideLoadMoreBtn && <Button onLoadMore={this.loadMore} />}
        <Toaster position="top-right" />
      </>
    );
  }
}
