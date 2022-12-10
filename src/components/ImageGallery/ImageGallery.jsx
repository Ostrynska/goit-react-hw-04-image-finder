import { Component } from 'react';
// import { fetchImages } from 'api';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { FallbackView } from '../Notification/NotificationError';
import { Gallery } from './ImageGallery.styled';

export class ImageGallery extends Component {
  state = {
    images: null,
    error: null,
    status: 'idle',
  };

  async componentDidUpdate(prevProps, prevState) {
    const prevSearch = prevProps.searchName;
    const nextSearch = this.props.searchName;

    if (prevSearch !== nextSearch) {
      this.setState({ status: 'pending' });
      fetch(
        `https://pixabay.com/api/?key=29966303-d9893c98832d118b1f4c04955&q=${nextSearch}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(
            new Error(`Nooooooooo we cannot find ${nextSearch}`)
          );
        })
        .then(images => this.setState({ images, status: 'resolved' }))
        .catch(error => {
          console.log(error);
          this.setState({ error, status: 'rejected' });
          console.log(error);
        });
    }
  }

  render() {
    const { images, error, status } = this.state;

    if (status === 'idle') {
      return <h1>Введіть ім'я зображення</h1>;
    }

    if (status === 'pending') {
      return <h1>Loading ...</h1>;
    }

    if (status === 'rejected') {
      return <FallbackView message={error.message} />;
    }

    if (status === 'resolved') {
      return (
        <Gallery>
          {images.hits.map(({ id, tags, webformatURL, largeImageURL }) => (
            <ImageGalleryItem
              key={id}
              id={id}
              tags={tags}
              webImage={webformatURL}
              largeImage={largeImageURL}
            />
          ))}
        </Gallery>
      );
    }
  }
}
