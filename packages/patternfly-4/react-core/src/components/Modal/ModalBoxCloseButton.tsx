import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button';
import { TimesIcon } from '@patternfly/react-icons';

const propTypes = {
  /** additional classes added to the close button */
  className: PropTypes.string,
  /** A callback for when the close button is clicked */
  onClose: PropTypes.func,
  /** Additional props are spread to the container <div> */
  '': PropTypes.any
};

const defaultProps = {
  className: '',
  onClose: () => undefined
};

const ModalBoxCloseButton = ({ className, onClose, ...props }) => (
  <React.Fragment>
    <Button variant="plain" onClick={onClose} aria-label="Close" {...props}>
      <TimesIcon />
    </Button>
  </React.Fragment>
);

ModalBoxCloseButton.propTypes = propTypes;
ModalBoxCloseButton.defaultProps = defaultProps;

export default ModalBoxCloseButton;
