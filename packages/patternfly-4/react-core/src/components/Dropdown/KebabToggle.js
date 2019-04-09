import React from 'react';
import PropTypes from 'prop-types';
import { EllipsisVIcon } from '@patternfly/react-icons';
import Toggle from './Toggle';

const propTypes = {
  /** HTML ID of dropdown toggle */
  id: PropTypes.string,
  /** Anything which can be rendered as dropdown toggle */
  children: PropTypes.node,
  /** Classess applied to root element of dropdown toggle */
  className: PropTypes.string,
  /** Flag to indicate if menu is opened */
  isOpen: PropTypes.bool,
  /** Label Toggle button */
  'aria-label': PropTypes.string,
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
  /** Disables the dropdown toggle */
  isDisabled: PropTypes.bool,
  /** Display the toggle with no border or background */
  isPlain: PropTypes.bool,
  /** Additional props are spread to the container component */
  '': PropTypes.any
};

const defaultProps = {
  id: '',
  children: null,
  className: '',
  isOpen: false,
  'aria-label': 'Actions',
  parentRef: null,
  isFocused: false,
  isHovered: false,
  isActive: false,
  isPlain: false,
  isDisabled: false,
  onToggle: Function.prototype
};

const Kebab = ({ ...props }) => (
  <Toggle {...props}>
    <EllipsisVIcon />
  </Toggle>
);

Kebab.propTypes = propTypes;
Kebab.defaultProps = defaultProps;

export default Kebab;
