import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown, DropdownDirection, DropdownPosition, DropdownToggle } from '../Dropdown';
import { ThIcon } from '@patternfly/react-icons';

export const propTypes = {
  /** Additional element css classes */
  className: PropTypes.string,
  /** Display menu above or below dropdown toggle */
  direction: PropTypes.oneOf(Object.values(DropdownDirection)),
  /** Array of DropdownItem nodes that will be rendered in the dropdown Menu list */
  dropdownItems: PropTypes.array,
  /** open bool */
  isOpen: PropTypes.bool,
  /** Function callback called when user selects item */
  onSelect: PropTypes.func,
  /** Callback called when application launcher toggle is clicked */
  onToggle: PropTypes.func,
  /** Indicates where menu will be alligned horizontally */
  position: PropTypes.oneOf(Object.values(DropdownPosition)),
  /** Adds accessible text to the button. Required for plain buttons */
  'aria-label': PropTypes.string
};

export const defaultProps = {
  className: '',
  direction: DropdownDirection.down,
  dropdownItems: [],
  isOpen: false,
  onSelect: Function.prototype,
  onToggle: Function.prototype,
  position: DropdownPosition.left,
  'aria-label': 'Actions'
};

class ApplicationLauncher extends React.Component {
  render() {
    return <Dropdown
      { ...this.props }
      toggle={
        <DropdownToggle iconComponent={null} onToggle={this.props.onToggle}>
          <ThIcon />
        </DropdownToggle>
      }
      isPlain
    />
  }
}

ApplicationLauncher.propTypes = propTypes;
ApplicationLauncher.defaultProps = defaultProps;

export default ApplicationLauncher;
