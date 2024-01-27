import PropTypes from 'prop-types';

import {
  GalleryItemStyled,
  GalleryListStyled,
  ImageStyled,
} from './ImageGallery.styled';

const ImageGalleryList = ({ images, toggleModal }) => {
  return (
    <GalleryListStyled>
      {images.map(({ id, webformatURL, tags, largeImageURL }) => {
        return (
          <GalleryItemStyled
            key={id}
            onClick={() => toggleModal(largeImageURL, tags)}
          >
            <ImageStyled src={webformatURL} alt={tags} />
          </GalleryItemStyled>
        );
      })}
    </GalleryListStyled>
  );
};

export default ImageGalleryList;

ImageGalleryList.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      webformatURL: PropTypes.string,
      tags: PropTypes.string,
      largeImageURL: PropTypes.string,
    })
  ).isRequired,
  toggleModal: PropTypes.func,
};
