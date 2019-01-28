import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@patternfly/react-core';
import { TimesIcon } from '@patternfly/react-icons';

const PopoverCloseButton = ({ onClose, 'aria-label': ariaLabel, ...rest }) => (
  <Button onClick={onClose} variant="plain" aria-label={ariaLabel}>
    <TimesIcon />
  </Button>
);

PopoverCloseButton.propTypes = {
  /** PopoverCloseButton onClose function */
  onClose: PropTypes.func.isRequired,
  /** Aria label for the Close button */
  'aria-label': PropTypes.string.isRequired
};

export default PopoverCloseButton;
