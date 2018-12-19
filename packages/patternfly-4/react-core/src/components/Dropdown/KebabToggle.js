import React from 'react';
import PropTypes from 'prop-types';
import { EllipsisVIcon } from '@patternfly/react-icons';
import Toggle from './Toggle';

const defaultAriaLabel = 'Actions';

const Kebab = ({icon,  ...props }) => (
  <Toggle {...props}>
    {icon ? icon : <EllipsisVIcon />}
  </Toggle>
);

Kebab.propTypes = {
  /** HTML ID of dropdown toggle */
  id: PropTypes.string,
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
  /** Display the toggle with no border or background */
  isPlain: PropTypes.bool,
  /** Anything that can be displayed instead of the default EllipsisVIcon as a dropdown toggle **/
  icon: PropTypes.node
};
Kebab.defaultProps = {
  id: '',
  className: '',
  isOpen: false,
  'aria-label': defaultAriaLabel,
  parentRef: null,
  isFocused: false,
  isHovered: false,
  isActive: false,
  isPlain: false,
  onToggle: Function.prototype,
  icon: null
};

export default Kebab;
