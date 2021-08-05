import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Image from '../assets/Image';

class SelectedBeast extends React.Component {
  render() {
    const { title, description, imgSrc, handleClose, show } = this.props;
    return (
      <Modal show={show} onHide={handleClose} onClick={handleClose}>
        <Modal.Header>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image imgSrc={imgSrc} title={title} />
        </Modal.Body>
        <Modal.Footer>{description}</Modal.Footer>
      </Modal>
    );
  }
}
export default SelectedBeast;
