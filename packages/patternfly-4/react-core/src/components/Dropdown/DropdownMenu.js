import React from 'react';
import styles from '@patternfly/patternfly-next/components/Dropdown/dropdown.css';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import { componentShape } from '../../internal/componentShape';
import { DropdownPosition, DropdownContext } from './dropdownConstants';
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
  position: PropTypes.oneOf(Object.values(DropdownPosition)),
  /** Additional props are spread to the container component */
  '': PropTypes.any
};

const defaultProps = {
  children: null,
  className: '',
  isOpen: true,
  position: DropdownPosition.left,
  component: 'ul'
};

class DropdownMenu extends React.Component {
  constructor(props) {
    super(props);
    this.keyHandler = this.keyHandler.bind(this);
  }

  componentDidMount() {
    console.log('menu', this.refs);
  }

  keyHandler(ref) {
    console.log('handled', ref);
    console.log(this.props.children);
  }

  render() {
    const { className, isOpen, position, children, component: Component, ...props } = this.props;
    let menu = null;
    if (Component === 'div') {
      menu = (
        <DropdownContext.Consumer>
          {onSelect => (
            <Component
              {...props}
              className={css(
                styles.dropdownMenu,
                position === DropdownPosition.right && styles.modifiers.alignRight,
                className
              )}
              hidden={!isOpen}
              onClick={event => onSelect && onSelect(event)}
            >
              {children &&
                React.Children.map(children, child => React.cloneElement(child, { keyHandler: this.keyHandler }))}
            </Component>
          )}
        </DropdownContext.Consumer>
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
            {children &&
              React.Children.map(children, child => React.cloneElement(child, { keyHandler: this.keyHandler }))}
          </Component>
        </FocusTrap>
      );
    }
    return menu;
  }
}

DropdownMenu.propTypes = propTypes;
DropdownMenu.defaultProps = defaultProps;

export default DropdownMenu;
