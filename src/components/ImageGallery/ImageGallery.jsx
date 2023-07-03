import PropTypes from 'prop-types';

import { Container } from 'components/Container/Container';

import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';

export const ImageGallery = ({ images, onClick }) => (
  <section>
    <Container>
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
    </Container>
  </section>
);

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
  onClick: PropTypes.func.isRequired,
};
