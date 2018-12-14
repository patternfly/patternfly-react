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
    this.refsCollection = {};
    this.keyHandler = this.keyHandler.bind(this);
  }

  keyHandler(index, position) {
    const kids = this.props.children;
    console.log(`current index: ${index}`);
    let nextIndex;
    if (position === 'up') {
      if (index === 0) {
        // loop back to end
        nextIndex = kids.length - 1;
      } else {
        nextIndex = index - 1;
      }
    } else if (index === kids.length - 1) {
      // loop back to beginning
      nextIndex = 0;
    } else {
      nextIndex = index + 1;
    }
    if (this.refsCollection[`item-${nextIndex}`] === null) {
      console.log(`${nextIndex} is disabled`);
      this.keyHandler(nextIndex, position);
    } else {
      console.log(`focusing ${nextIndex}`);
      this.refsCollection[`item-${nextIndex}`].focus();
    }
  }

  sendRef = (index, node, isDisabled) => {
    if (isDisabled || node.getAttribute('role') === 'separator') {
      this.refsCollection[`item-${index}`] = null;
    } else {
      this.refsCollection[`item-${index}`] = node;
    }
  };

  extendChildren() {
    return React.Children.map(this.props.children, (child, index) =>
      React.cloneElement(child, {
        keyHandler: this.keyHandler,
        index,
        sendRef: this.sendRef
      })
    );
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
                React.Children.map(children, (child, index) =>
                  React.cloneElement(child, {
                    keyHandler: this.keyHandler,
                    index
                  })
                )}
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
            {this.extendChildren()}
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
