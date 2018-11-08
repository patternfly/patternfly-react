import React from 'react';
import { CaretDownIcon } from '@patternfly/react-icons';
import PropTypes from 'prop-types';
import Toggle from './Toggle';
import styles from '@patternfly/patternfly-next/components/Dropdown/dropdown.css';
import { css } from '@patternfly/react-styles';

const DropdownToggle = ({ children, iconComponent: IconComponent, ...props }) => (
  <Toggle {...props}>
    {children}
    {IconComponent && <IconComponent className={css(styles.dropdownToggleIcon)} />}
  </Toggle>
);

DropdownToggle.propTypes = {
  /** HTML ID of dropdown toggle */
  id: PropTypes.string,
  /** Anything which can be rendered as dropdown toggle */
  children: PropTypes.node.isRequired,
  /** Classes applied to root element of dropdown toggle */
  className: PropTypes.string,
  /** Flag to indicate if menu is opened */
  isOpen: PropTypes.bool,
  /** Callback called when toggle is clicked */
  onToggle: PropTypes.func,
  /** Element which wraps toggle */
  parentRef: PropTypes.any,
  /** Forces focus state */
  isFocused: PropTypes.bool,
  /** Forces hover state */
  isHovered: PropTypes.bool,
  /** Forces active state */
  isActive: PropTypes.bool,
  /** The icon to display for the toggle. Defaults to CaretDownIcon. Set to null to not show an icon. */
  iconComponent: PropTypes.func
};

DropdownToggle.defaultProps = {
  id: '',
  className: '',
  isOpen: false,
  parentRef: null,
  isFocused: false,
  isHovered: false,
  isActive: false,
  onToggle: Function.prototype,
  iconComponent: CaretDownIcon
};

export default DropdownToggle;
