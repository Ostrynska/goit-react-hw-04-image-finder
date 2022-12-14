import PropTypes from 'prop-types';

import {
  ImageGalleryItems,
  ImageGalleryImage,
} from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ url, tag, openModal, fullImage }) => {
  return (
    <ImageGalleryItems>
      <ImageGalleryImage
        src={url}
        alt={tag}
        onClick={() => openModal(fullImage)}
      />
    </ImageGalleryItems>
  );
};

ImageGalleryItem.propTypes = {
  url: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  fullImage: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};
