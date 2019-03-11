import React from 'react';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import styles from '@patternfly/patternfly/components/Chip/chip.css';
import { Button } from '../Button';

const ChipButton = ({ ariaLabel, children, className, onClick, ...props }) => (
  <Button variant="plain" aria-label={ariaLabel} onClick={onClick} className={className} {...props}>
    {children}
  </Button>
);

ChipButton.propTypes = {
  /** Aria label for chip button */
  ariaLabel: PropTypes.string,
  /** Content rendered inside the chip item */
  children: PropTypes.node,
  /** Additional classes added to the chip item */
  className: PropTypes.string,
  /** Function that is called when clicking on the chip button */
  onClick: PropTypes.func
};

ChipButton.defaultProps = {
  ariaLabel: 'close',
  children: null,
  className: '',
  onClick: () => {}
};

export default ChipButton;
