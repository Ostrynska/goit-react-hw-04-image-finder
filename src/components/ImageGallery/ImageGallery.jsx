import PropTypes from 'prop-types';

import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';

export const ImageGallery = ({ images, onClick }) => (
  <>
    <Gallery>
      {images.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id}
          url={webformatURL}
          fullImage={largeImageURL}
          tag={tags}
          openModal={onClick}
        />
      ))}
    </Gallery>
  </>
);

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
  onClick: PropTypes.func.isRequired,
};
