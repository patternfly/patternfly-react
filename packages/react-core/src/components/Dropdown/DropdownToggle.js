import React from 'react';
import { CaretDownIcon } from '@patternfly/react-icons';
import PropTypes from 'prop-types';
import Toggle from './Toggle';
import styles from '@patternfly/patternfly-next/components/Dropdown/styles.css';
import { css } from '@patternfly/react-styles';

const DropdownToggle = ({ children, ...props }) => (
  <Toggle {...props}>
    {children}
    <CaretDownIcon className={css(styles.dropdownToggleIcon)} />
  </Toggle>
);

DropdownToggle.propTypes = {
  /** Anything which can be rendered as dropdown toggle */
  children: PropTypes.node.isRequired,
  /** Classess applied to root element of dropdown toggle */
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
  isActive: PropTypes.bool
};

DropdownToggle.defaultProps = {
  className: '',
  isOpen: false,
  parentRef: null,
  isFocused: false,
  isHovered: false,
  isActive: false,
  onToggle: Function.prototype
};

export default DropdownToggle;
