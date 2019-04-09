import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button';

const propTypes = {
  /** Aria label for chip button */
  'aria-label': PropTypes.string,
  /** Content rendered inside the chip item */
  children: PropTypes.node,
  /** Additional classes added to the chip item */
  className: PropTypes.string,
  /** Function that is called when clicking on the chip button */
  onClick: PropTypes.func
};

const defaultProps = {
  'aria-label': 'close',
  children: null,
  className: '',
  onClick: () => { }
};

const ChipButton = ({ children, ...props }) => (
  <Button variant="plain"  {...props}>
    {children}
  </Button>
);

ChipButton.propTypes = propTypes;
ChipButton.defaultProps = defaultProps;

export default ChipButton;
