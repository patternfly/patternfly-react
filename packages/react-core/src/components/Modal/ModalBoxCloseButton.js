import React from 'react';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
// import styles from '@patternfly/patternfly-next/components/ModalBox/styles.css';
import Button from '../Button/Button';
import { Times } from '@patternfly/react-icons';

const propTypes = {
  /** additional classes added to the close button */
  className: PropTypes.string,
  /** A callback for when the close button is clicked */
  onClose: PropTypes.func
};

const defaultProps = {
  className: '',
  onClose: () => undefined
};

// TODO: update this to not use hard coded once once style is available
const ModalBoxCloseButton = ({ className, onClose, ...props }) => (
  <div {...props} className={css('pf-c-modal-box__close', className)}>
    <Button variant="action" onClick={onClose}>
      <Times />
    </Button>
  </div>
);

ModalBoxCloseButton.propTypes = propTypes;
ModalBoxCloseButton.defaultProps = defaultProps;

export default ModalBoxCloseButton;
