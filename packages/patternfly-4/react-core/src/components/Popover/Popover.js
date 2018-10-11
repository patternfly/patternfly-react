import React from 'react';
import PropTypes from 'prop-types';
import styles from '@patternfly/patternfly-next/components/Popover/popover.css';
import { css, getModifier } from '@patternfly/react-styles';
import PopoverDialog, { PopoverPosition } from './PopoverDialog';
import PopoverArrow from './PopoverArrow';
import PopoverContent from './PopoverContent';
import PopoverHeader from './PopoverHeader';
import PopoverBody from './PopoverBody';
import PopoverCloseButton from './PopoverCloseButton';

const Popover = ({ position, header, onClose, children, className }) => (
  <PopoverDialog position={position}>
    <PopoverArrow />
    <PopoverContent>
      <PopoverCloseButton onClose={onClose} />
      <PopoverHeader id={`popover-${position}-header`}>{header}</PopoverHeader>
      <PopoverBody id={`popover-${position}-body`}>{children}</PopoverBody>
    </PopoverContent>
  </PopoverDialog>
);

const propTypes = {
  /** Popover position */
  position: PropTypes.oneOf(Object.values(PopoverPosition)),
  /** Popover header text */
  header: PropTypes.string.isRequired,
  /** Popover body text */
  children: PropTypes.string.isRequired,
  /** Popover onClose function */
  onClose: PropTypes.func
};

Popover.propTypes = propTypes;
Popover.defaultProps = {
  onClose: () => {},
  position: 'top'
};

export default Popover;
