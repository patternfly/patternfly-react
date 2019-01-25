import React from 'react';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import styles from '@patternfly/patternfly-next/components/Alert/alert.css';
import { Button, ButtonVariant } from '../Button';
import { TimesIcon } from '@patternfly/react-icons';

const propTypes = {
  /** additional classes added to the AlertActionCloseButton */
  className: PropTypes.string,
  /** A callback for when the close button is clicked */
  onClose: PropTypes.func,
  /** Aria Label for the Close button */
  'aria-label': PropTypes.string,
  /** Additional props are spread to the container <Button>  */
  '': PropTypes.any
};

const defaultProps = {
  className: '',
  onClose: () => undefined,
  'aria-label': 'Close'
};

const AlertActionCloseButton = ({ className, onClose, 'aria-label': ariaLabel, ...props }) => (
  <Button variant={ButtonVariant.plain} onClick={onClose} aria-label={ariaLabel} {...props}>
    <TimesIcon />
  </Button>
);

AlertActionCloseButton.propTypes = propTypes;
AlertActionCloseButton.defaultProps = defaultProps;

export default AlertActionCloseButton;
