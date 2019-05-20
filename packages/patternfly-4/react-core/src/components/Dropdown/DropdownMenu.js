import React from 'react';
import styles from '@patternfly/patternfly/components/Dropdown/dropdown.css';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import { componentShape } from '../../helpers/componentShape';
import ReactDOM from 'react-dom';
import { keyHandler } from '../../helpers/util';
import { DropdownPosition, DropdownDirection, DropdownArrowContext, DropdownContext } from './dropdownConstants';
import { KEY_CODES, KEYHANDLER_DIRECTION } from '../../helpers/constants';

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
  /** Flag to indicate if menu is grouped */
  isGrouped: PropTypes.bool,
  /** Additional props are spread to the container component */
  '': PropTypes.any
};

const defaultProps = {
  children: null,
  className: '',
  isOpen: true,
  position: DropdownPosition.left,
  component: 'ul',
  isGrouped: false
};

class DropdownMenu extends React.Component {
  refsCollection = [];

  componentDidMount() {
    if (this.props.openedOnEnter) {
      const focusTarget =
        this.refsCollection.filter(
          ref => ref && ((ref.current && !ref.current.hasAttribute('disabled')) || !ref.hasAttribute('disabled'))
        )[0] || null;
      if (this.props.component === 'ul') focusTarget && focusTarget.focus();
      else {
        (focusTarget.current.focus && focusTarget.current.focus()) ||
          (focusTarget && ReactDOM.findDOMNode(focusTarget.current).focus());
      }
    }
  }

  childKeyHandler = (index, position, custom = false) => {
    keyHandler(
      index,
      position,
      this.refsCollection,
      this.props.isGrouped ? this.refsCollection : this.props.children,
      custom
    );
  };

  sendRef = (index, node, isDisabled) => {
    if (!node.getAttribute) {
      this.refsCollection[index] = ReactDOM.findDOMNode(node);
    } else if (isDisabled || node.getAttribute('role') === 'separator') {
      this.refsCollection[index] = null;
    } else {
      this.refsCollection[index] = node;
    }
  };

  extendChildren() {
    const { children, isGrouped } = this.props;
    if (isGrouped) {
      let index = 0;
      return React.Children.map(children, group =>
        React.cloneElement(group, {
          children:
            (group.props.children.constructor === Array &&
              group.props.children.map(option =>
                React.cloneElement(option, {
                  index: index++
                })
              )) ||
            React.cloneElement(group.props.children, {
              index: index++
            })
        })
      );
    }
    return React.Children.map(children, (child, index) =>
      React.cloneElement(child, {
        index
      })
    );
  }

  extendCustomChildren() {
    const mappedChildren = React.Children.map(this.props.children, (child, index) => {
      const mappedChild = React.cloneElement(child, {
        ref: React.createRef(),
        className: `${css(
          child.props.isDisabled && styles.modifiers.disabled,
          child.props.isHovered && styles.modifiers.hover,
          styles.dropdownMenuItem
        )}${child.props.className ? child.props.className : ''}`,
        tabIndex: -1,
        onKeyDown: event => {
          if (event.keyCode === KEY_CODES.TAB) return;
          event.preventDefault();
          if (event.keyCode === KEY_CODES.ARROW_UP) {
            keyHandler(index, KEYHANDLER_DIRECTION.up, this.refsCollection, this.props.children, true);
          } else if (event.keyCode === KEY_CODES.ARROW_DOWN) {
            keyHandler(index, KEYHANDLER_DIRECTION.DOWN, this.refsCollection, this.props.children, true);
          }
        }
      });
      !mappedChild.props.disabled
        ? (this.refsCollection[index] = mappedChild.ref)
        : (this.refsCollection[index] = null);
      return mappedChild;
    });
    return mappedChildren;
  }

  render() {
    const {
      className,
      isOpen,
      position,
      children,
      component: Component,
      isGrouped,
      openedOnEnter,
      ...props
    } = this.props;
    return (
      <DropdownArrowContext.Provider
        value={{
          keyHandler: this.childKeyHandler,
          sendRef: this.sendRef
        }}
      >
        {Component === 'div' ? (
          <DropdownContext.Consumer>
            {onSelect => (
              <ul
                className={css(
                  styles.dropdownMenu,
                  position === DropdownPosition.right && styles.modifiers.alignRight,
                  className
                )}
                hidden={!isOpen}
                onClick={event => onSelect && onSelect(event)}
              >
                <Component {...props}>{this.extendCustomChildren()}</Component>
              </ul>
            )}
          </DropdownContext.Consumer>
        ) : (
          (isGrouped && (
            <div
              {...props}
              className={css(
                styles.dropdownMenu,
                position === DropdownPosition.right && styles.modifiers.alignRight,
                className
              )}
              hidden={!isOpen}
              role="menu"
            >
              {this.extendChildren()}
            </div>
          )) || (
            <Component
              {...props}
              className={css(
                styles.dropdownMenu,
                position === DropdownPosition.right && styles.modifiers.alignRight,
                className
              )}
              hidden={!isOpen}
              role="menu"
            >
              {this.extendChildren()}
            </Component>
          )
        )}
      </DropdownArrowContext.Provider>
    );
  }
}

DropdownMenu.propTypes = propTypes;
DropdownMenu.defaultProps = defaultProps;

export default DropdownMenu;
