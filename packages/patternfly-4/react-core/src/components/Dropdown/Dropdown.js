import React, { Children, cloneElement } from 'react';
import styles from '@patternfly/patternfly-next/components/Dropdown/dropdown.css';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
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
  /** HTML ID of dropdown element */
  id: PropTypes.string,
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
  id:
    new Date().getTime() +
    Math.random()
      .toString(36)
      .slice(2),
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
  state = {
    focusedItemRef: null,
    focusOnReentry: null
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.focusOnReentry !== this.state.focusOnReentry && !this.state.focusOnReentry) {
      prevState.focusOnReentry.focus();
    }
  };

  setFocusedItemRef = focusedItemRef => this.setState({ focusedItemRef });

  handleOnFocus = () => {
    const { focusOnReentry } = this.state;

    if (focusOnReentry) {
      this.setFocusedItemRef(focusOnReentry);
      this.setState({ focusOnReentry: null });
      return;
    }

    this.setState({ focusedItemRef: this.parentRef });
  };

  handleOnKeyDown = e => {
    const { focusedItemRef } = this.state;

    if (e.key === 'Tab' && !e.shiftKey && focusedItemRef === this.menuRef.lastChild) {
      this.setState({ focusedItemRef: null, focusOnReentry: this.menuRef.lastChild });
    }
    if (e.key === 'Tab' && e.shiftKey && focusedItemRef === this.parentRef) {
      this.setState({ focusedItemRef: null });
    }
  };

  render() {
    const { focusedItemRef } = this.state;
    const { className, children, isOpen, toggle, direction, onSelect, isPlain, position, id, ...props } = this.props;
    return (
      <div
        {...props}
        id={id}
        className={css(
          styles.dropdown,
          isPlain && styles.modifiers.plain,
          direction === DropdownDirection.up && styles.modifiers.top,
          position === DropdownPosition.right && styles.modifiers.alignRight,
          isOpen && focusedItemRef && styles.modifiers.expanded,
          className
        )}
        ref={ref => {
          this.parentRef = ref;
        }}
        onKeyDown={this.handleOnKeyDown}
        onFocus={this.handleOnFocus}
      >
        {toggle &&
          Children.map(toggle, oneToggle =>
            cloneElement(oneToggle, {
              parentRef: this.parentRef,
              focusedItemRef: this.state.focusedItemRef,
              focusOnReentry: this.state.focusOnReentry,
              isOpen
            })
          )}
        <DropdownMenu
          isOpen={isOpen && focusedItemRef}
          aria-labelledby={id}
          onClick={event => onSelect && onSelect(event)}
          ref={ref => {
            this.menuRef = ref;
          }}
        >
          {Children.map(children, child => cloneElement(child, { setFocusedItemRef: this.setFocusedItemRef }))}
        </DropdownMenu>
      </div>
    );
  }
}

Dropdown.propTypes = propTypes;
Dropdown.defaultProps = defaultProps;

export default Dropdown;
