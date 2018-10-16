import React, { Children, cloneElement } from 'react';
import styles from '@patternfly/patternfly-next/components/Dropdown/dropdown.css';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import FocusTrap from 'focus-trap-react';
import DropdownMenu from './DropdownMenu';

export const DropdownPosition = {
  right: 'right',
  left: 'left'
};

export const DropdownDirection = {
  up: 'up',
  down: 'down'
};

const propTypes = {
  /** Anything which can be rendered as dropdown items */
  children: PropTypes.node,
  /** Classess applied to root element of dropdown */
  className: PropTypes.string,
  /** Flag to indicate if menu is opened */
  isOpen: PropTypes.bool,
  /** Display the toggle with no border or background */
  isPlain: PropTypes.bool,
  /** Indicates where menu will be alligned horizontally */
  position: PropTypes.oneOf(Object.keys(DropdownPosition)),
  /** Display menu above or below dropdown toggle */
  direction: PropTypes.oneOf(Object.keys(DropdownDirection)),
  /** Placeholder to use custom toggle elements */
  toggle: PropTypes.node,
  /** Function callback called when user selects item */
  onSelect: PropTypes.func
};

const defaultProps = {
  toggle: null,
  children: null,
  className: '',
  isOpen: false,
  isPlain: false,
  position: DropdownPosition.left,
  direction: DropdownDirection.down,
  onSelect: Function.prototype
};

class Dropdown extends React.Component {
  render() {
    const { className, children, isOpen, toggle, direction, onSelect, isPlain, position, ...props } = this.props;
    return (
      <div
        {...props}
        className={css(
          styles.dropdown,
          isPlain && styles.modifiers.plain,
          direction === DropdownDirection.up && styles.modifiers.top,
          position === DropdownPosition.right && styles.modifiers.alignRight,
          isOpen && styles.modifiers.expanded,
          className
        )}
        ref={ref => {
          this.parentRef = ref;
        }}
      >
        {toggle && Children.map(toggle, oneToggle => cloneElement(oneToggle, { parentRef: this.parentRef, isOpen }))}
        {isOpen && (
          <FocusTrap>
            <DropdownMenu
              isOpen={isOpen}
              aria-labelledby={toggle ? toggle.props.id : ''}
              onClick={event => onSelect && onSelect(event)}
            >
              {children}
            </DropdownMenu>
          </FocusTrap>
        )}
      </div>
    );
  }
}

Dropdown.propTypes = propTypes;
Dropdown.defaultProps = defaultProps;

export default Dropdown;
