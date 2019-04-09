import React from 'react';
import PropTypes from 'prop-types';
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
  'aria-label': '',
  className: '',
  onClose: () => undefined
};

const AlertActionCloseButton = ({ className, onClose, variantLabel, 'aria-label': ariaLabel, title, variant, ...props }) => (
  <Button
    variant={ButtonVariant.plain}
    onClick={onClose}
    aria-label={ariaLabel === '' ? `Close ${variant} alert: ${title}` : ariaLabel}
    {...props}
  >
    <TimesIcon />
  </Button>
);

AlertActionCloseButton.propTypes = propTypes;
AlertActionCloseButton.defaultProps = defaultProps;

export default AlertActionCloseButton;
