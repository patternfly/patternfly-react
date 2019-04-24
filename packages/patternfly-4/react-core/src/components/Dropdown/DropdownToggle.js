import React from 'react';
import { CaretDownIcon } from '@patternfly/react-icons';
import PropTypes from 'prop-types';
import Toggle from './Toggle';
import styles from '@patternfly/patternfly/components/Dropdown/dropdown.css';
import { css } from '@patternfly/react-styles';

const InnerToggle = ({ children, iconComponent: IconComponent, ...props }) => (
  <Toggle {...props}>
    {children && <span className={IconComponent && css(styles.dropdownToggleText)}>{children}</span>}
    {IconComponent && <IconComponent className={css(children && styles.dropdownToggleIcon)} />}
  </Toggle>
);

const DropdownToggle = ({ splitButtonItems, ...props }) =>
  splitButtonItems ? (
    <div
      className={css(
        styles.dropdownToggle,
        styles.modifiers.splitButton,
        props.isDisabled && styles.modifiers.disabled
      )}
    >
      {splitButtonItems}
      <InnerToggle {...props} isSplitButton aria-label={props['aria-label'] || 'Select'} />
    </div>
  ) : (
    <InnerToggle {...props} />
  );

DropdownToggle.propTypes = {
  /** HTML ID of dropdown toggle */
  id: PropTypes.string,
  /** Anything which can be rendered as dropdown toggle button */
  children: PropTypes.node,
  /** Classes applied to root element of dropdown toggle button */
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
  /** Display the toggle with no border or background */
  isPlain: PropTypes.bool,
  /** The icon to display for the toggle. Defaults to CaretDownIcon. Set to null to not show an icon. */
  iconComponent: PropTypes.func,
  /** Elements to display before the toggle button. When included, renders the toggle as a split button. */
  splitButtonItems: PropTypes.arrayOf(PropTypes.node),
  /** Accessible label for the dropdown toggle button */
  'aria-label': PropTypes.any,
  /** Additional props are spread to the container component */
  '': PropTypes.any
};

DropdownToggle.defaultProps = {
  id: '',
  children: null,
  className: '',
  isOpen: false,
  parentRef: null,
  isFocused: false,
  isHovered: false,
  isActive: false,
  isPlain: false,
  onToggle: Function.prototype,
  iconComponent: CaretDownIcon
};

export default DropdownToggle;
