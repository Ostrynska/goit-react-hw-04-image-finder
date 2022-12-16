import { Component } from 'react';
import PropTypes from 'prop-types';

import { Overlay, ModalWindow } from './Modal.styled';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeyDown);
  }

  onKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onModalClick();
    }
  };

  onBackDrop = e => {
    if (e.target === e.currentTarget) {
      this.props.onModalClick();
    }
  };

  render() {
    const { fullImage, alt } = this.props;

    return (
      <Overlay onClick={this.onBackDrop}>
        <ModalWindow>
          <img src={fullImage} alt={alt} />
        </ModalWindow>
      </Overlay>
    );
  }
}

Modal.prototypes = {
  fullImage: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onModalClick: PropTypes.func.isRequired,
};
