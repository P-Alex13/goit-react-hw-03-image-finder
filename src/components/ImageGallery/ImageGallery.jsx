import { ImageGalleryList, Modal } from 'components';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

import { ImageLarge } from './ImageGallery.styled';

class ImageGallery extends PureComponent {
  state = {
    showModal: false,
    largeImageURL: '',
    tags: '',
  };

  toggleModal = (largeImageURL, tags) => {
    return this.setState(({ showModal }) => ({
      showModal: !showModal,
      largeImageURL,
      tags,
    }));
  };

  render() {
    const { largeImageURL, tags } = this.state;
    return (
      <>
        <ImageGalleryList
          images={this.props.images}
          toggleModal={this.toggleModal}
        />
        {this.state.showModal && (
          <Modal onClose={this.toggleModal}>
            <ImageLarge src={largeImageURL} alt={tags} />
          </Modal>
        )}
      </>
    );
  }
}

export default ImageGallery;

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  largeImg: PropTypes.string,
  tags: PropTypes.string,
};