import React from 'react';
// import { Modal, ModalManager, Effect } from 'react-dynamic-modal';
import { Modal } from 'react-bootstrap/';

class SelectedBeast extends React.Component {
  render() {
    const { title, description, imgSrc, handleClose, show } = this.props;
    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={imgSrc}
            alt={title}
            style={{ height: '100%', width: '100%', objectFit: 'contain' }}
          />
        </Modal.Body>
        <Modal.Footer>{description}</Modal.Footer>
      </Modal>
    );
  }
}
export default SelectedBeast;
