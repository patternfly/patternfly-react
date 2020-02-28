import React from 'react';
import PropTypes from 'prop-types';
import { noop } from '../../../index';
import Modal from '../Modal';
import CustomModalDialog from '../InnerComponents/CustomModalDialog';
import { Modal as BsModal } from 'react-bootstrap';

/**
 * Modal Pattern component.
 */
const ModalPattern = ({ show, title, onClose, footer, children, ...rest }) => (
  <Modal show={show} {...rest}>
    <Modal.Header>
      <Modal.CloseButton onClick={onClose} />
      <Modal.Title>{title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>{children}</Modal.Body>
    <Modal.Footer>{footer}</Modal.Footer>
  </Modal>
);

ModalPattern.propTypes = {
  ...BsModal.propTypes,
  show: PropTypes.bool,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  onClose: PropTypes.func,
  footer: PropTypes.node,
  children: PropTypes.node
};

ModalPattern.defaultProps = {
  ...BsModal.defaultProps,
  dialogComponentClass: CustomModalDialog,
  show: false,
  title: '',
  onClose: noop,
  footer: null,
  children: null
};

ModalPattern.displayName = 'ModalPattern';

export default ModalPattern;
