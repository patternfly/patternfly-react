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
  position: PropTypes.oneOf(Object.keys(DropdownPosition))
};

const defaultProps = {
  children: null,
  className: '',
  isOpen: true,
  position: DropdownPosition.left,
  component: 'ul'
};

const DropdownMenu = ({ className, isOpen, position, children, component: Component, ...props }) => {
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
      >
        {children}
      </Component>
    );
  } else if (Component === 'ul') {
    menu = (
      <FocusTrap>
        <Component
          {...props}
          className={css(
            styles.dropdownMenu,
            position === DropdownPosition.right && styles.modifiers.alignRight,
            className
          )}
          hidden={!isOpen}
        >
          {children}
        </Component>
      </FocusTrap>
    );
  }
  return menu;
};

DropdownMenu.propTypes = propTypes;
DropdownMenu.defaultProps = defaultProps;

export default DropdownMenu;
