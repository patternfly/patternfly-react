import React from 'react';
import styles from '@patternfly/patternfly-next/components/Dropdown/dropdown.css';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import { componentShape } from '../../internal/componentShape';
import { DropdownPosition } from './dropdownConstants';
import FocusTrap from 'focus-trap-react';

const propTypes = {
  /** Anything which can be rendered as dropdown items */
  children: PropTypes.node,
  /** Classess applied to root element of dropdown menu */
  className: PropTypes.string,
  /** Flag to indicate if menu is opened */
  isOpen: PropTypes.bool,
  /** Indicates which component will be used as dropdown menu */
  component: componentShape,
  /** Indicates where menu will be alligned horizontally */
<<<<<<< HEAD
  position: PropTypes.oneOf(Object.values(DropdownPosition)),
  onSelect: PropTypes.func,
  /** Additional props are spread to the container component */
  '': PropTypes.any
=======
  position: PropTypes.oneOf(Object.keys(DropdownPosition))
>>>>>>> feat(Dropdown): improved select event piping, added fix for focus trap toggle
};

const defaultProps = {
  children: null,
  className: '',
  isOpen: true,
  position: DropdownPosition.left,
  component: 'ul'
};

const DropdownMenu = ({ className, isOpen, position, children, onSelect, component: Component, ...props }) => {
  let menu = null;
  if (Component === 'div') {
    menu = (
      <Component
        {...props}
        className={css(
          styles.dropdownMenu,
          position === DropdownPosition.right && styles.modifiers.alignRight,
          className
        )}
        hidden={!isOpen}
        onClick={onSelect}
      >
        {children}
      </Component>
    );
  } else if (Component === 'ul') {
    menu = (
      <FocusTrap
        focusTrapOptions={{
          clickOutsideDeactivates: true
        }}
      >
        <Component
          {...props}
          className={css(
            styles.dropdownMenu,
            position === DropdownPosition.right && styles.modifiers.alignRight,
            className
          )}
          hidden={!isOpen}
        >
          {children && React.Children.map(children, child => React.cloneElement(child, { onSelect }))}
        </Component>
      </FocusTrap>
    );
  }
  return menu;
};

DropdownMenu.propTypes = propTypes;
DropdownMenu.defaultProps = defaultProps;

export default DropdownMenu;
