import {
  ImageGalleryItems,
  ImageGalleryImage,
} from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ id, tags, webImage, largeImage }) => {
  return (
    <ImageGalleryItems>
      <ImageGalleryImage src={webImage} alt={tags} />
    </ImageGalleryItems>
  );
};
