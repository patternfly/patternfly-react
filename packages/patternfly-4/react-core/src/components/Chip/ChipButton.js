import React from 'react';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import styles from '@patternfly/patternfly-next/components/Chip/chip.css';
import { Button } from '../Button';

const ChipButton = ({ children, className, onClick, ...props }) => {
  return (
    <Button variant="plain" onClick={onClick} className={className} {...props}>
      {children}
    </Button>
  );
};

ChipButton.propTypes = {
  /** Content rendered inside the chip item */
  children: PropTypes.node,
  /** Additional classes added to the chip item */
  className: PropTypes.string,
  /** Function that is called when clicking on the chip button */
  onClick: PropTypes.func,
};

ChipButton.defaultProps = {
  children: null,
  className: '',
  onClick: () => {}
};

export default ChipButton;
