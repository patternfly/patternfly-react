import React from 'react';
import PropTypes from 'prop-types';
import styles from '@patternfly/patternfly-next/components/Popover/popover.css';
import { css } from '@patternfly/react-styles';
import { Button } from '@patternfly/react-core';
import { TimesIcon } from '@patternfly/react-icons';

const PopoverCloseButton = ({ onClose }) => (
  <div className={css(styles.popoverClose)}>
    <Button onClick={onClose} variant="plain" aria-label="Action">
      <TimesIcon />
    </Button>
  </div>
);

PopoverCloseButton.propTypes = {
  /** PopoverCloseButton onClose function */
  onClose: PropTypes.func.isRequired
};

export default PopoverCloseButton;
