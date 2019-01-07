import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown, DropdownDirection, DropdownToggle, DropdownPosition } from '../Dropdown';
import { ThIcon } from '@patternfly/react-icons';

export const propTypes = {
  /** Additional element css classes */
  className: PropTypes.string,
  /** Display menu above or below dropdown toggle */
  direction: PropTypes.oneOf(Object.keys(DropdownDirection)),
  /** Array of DropdownItem nodes that will be rendered in the dropdown Menu list */
  dropdownItems: PropTypes.array,
  /** open bool */
  isOpen: PropTypes.bool,
  /** Display the toggle with no border or background */
  isPlain: PropTypes.bool,
  /** Function callback called when user selects item */
  onSelect: PropTypes.func,
  /** Callback called when application launcher toggle is clicked */
  onToggle: PropTypes.func,
  /** Indicates where menu will be alligned horizontally */
  position: PropTypes.oneOf(Object.keys(DropdownPosition))
};

export const defaultProps = {
  className: '',
  direction: DropdownDirection.down,
  dropdownItems: [],
  isOpen: false,
  isPlain: true,
  onSelect: Function.prototype,
  onToggle: Function.prototype,
  position: DropdownPosition.left
};

const ApplicationLauncher = ({ onToggle, ...props }) => (
  <Dropdown
    {...props}
    toggle={
      <DropdownToggle iconComponent={null} onToggle={onToggle}>
        <ThIcon />
      </DropdownToggle>
    }
  />
);

ApplicationLauncher.propTypes = propTypes;
ApplicationLauncher.defaultProps = defaultProps;

export default ApplicationLauncher;
