import PropTypes from 'prop-types';

import {
  ImageGalleryItems,
  ImageGalleryImage,
  ImageTagList,
} from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ url, tag, openModal, fullImage }) => {
  const tagsList = tag.split(',').map(t => t.trim());
  return (
    <>
      <ImageGalleryItems>
        <ImageGalleryImage
          src={url}
          alt={tag}
          onClick={() => openModal(fullImage)}
        />
        <ImageTagList>
          {tagsList.map((t, idx) => (
            <span key={idx}>{t}</span>
          ))}
        </ImageTagList>
      </ImageGalleryItems>
    </>
  );
};

ImageGalleryItem.propTypes = {
  url: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  fullImage: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};
