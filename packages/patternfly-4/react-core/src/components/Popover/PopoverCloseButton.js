import React from 'react';
import PropTypes from 'prop-types';
import styles from '@patternfly/patternfly-next/components/Popover/popover.css';
import { css } from '@patternfly/react-styles';
import { Button } from '@patternfly/react-core';
import { TimesIcon } from '@patternfly/react-icons';

const PopoverCloseButton = ({ onClose, 'aria-label': ariaLabel, ...rest }) => (
  <div className={css(styles.popoverClose)} {...rest}>
    <Button onClick={onClose} variant="plain" aria-label={ariaLabel}>
      <TimesIcon />
    </Button>
  </div>
);

PopoverCloseButton.propTypes = {
  /** PopoverCloseButton onClose function */
  onClose: PropTypes.func.isRequired,
  /** Aria label for the Close button */
  'aria-label': PropTypes.string.isRequired
};

export default PopoverCloseButton;
