import React from 'react';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import styles from '@patternfly/patternfly-next/components/ModalBox/modal-box.css';
import { Button } from '../Button';
import { TimesIcon } from '@patternfly/react-icons';

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

const ModalBoxCloseButton = ({ className, onClose, ...props }) => (
  <div {...props} className={css(styles.modalBoxClose, className)}>
    <Button variant="plain" onClick={onClose} aria-label="Close">
      <TimesIcon />
    </Button>
  </div>
);

ModalBoxCloseButton.propTypes = propTypes;
ModalBoxCloseButton.defaultProps = defaultProps;

export default ModalBoxCloseButton;
