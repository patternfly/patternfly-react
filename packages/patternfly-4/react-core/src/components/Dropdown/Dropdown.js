import React, { Children, cloneElement } from 'react';
import styles from '@patternfly/patternfly/components/Dropdown/dropdown.css';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import DropdownMenu from './DropdownMenu';
import { DropdownPosition, DropdownDirection, DropdownContext } from './dropdownConstants';

// seed for the aria-labelledby ID
let currentId = 0;

const propTypes = {
  /** Anything which can be rendered in a dropdown */
  children: props => {
    if (props.dropdownItems && props.dropdownItems.length > 0 && props.children) {
      return new Error(
        `Children and dropdownItems props have been provided. Only the dropdownItems prop items will be rendered `
      );
    }
    return null;
  },
  /** Classes applied to root element of dropdown */
  className: PropTypes.string,
  /** Array of DropdownItem nodes that will be rendered in the dropdown Menu list */
  dropdownItems: PropTypes.array,
  /** Flag to indicate if menu is opened */
  isOpen: PropTypes.bool,
  /** Display the toggle with no border or background */
  isPlain: PropTypes.bool,
  /** Indicates where menu will be alligned horizontally */
  position: PropTypes.oneOf(Object.values(DropdownPosition)),
  /** Display menu above or below dropdown toggle */
  direction: PropTypes.oneOf(Object.values(DropdownDirection)),
  /** Placeholder to use custom toggle elements */
  toggle: PropTypes.node.isRequired,
  /** Function callback called when user selects item */
  onSelect: PropTypes.func,
  /** Additional props are spread to the container <div> */
  '': PropTypes.any
};

const defaultProps = {
  children: null,
  className: '',
  dropdownItems: [],
  isOpen: false,
  isPlain: false,
  position: DropdownPosition.left,
  direction: DropdownDirection.down,
  onSelect: Function.prototype
};

class Dropdown extends React.Component {
  onEnter = () => {
    this.openedOnEnter = true;
  };

  componentDidUpdate() {
    if (!this.props.isOpen) this.openedOnEnter = false;
  }

  render() {
    const {
      children,
      className,
      direction,
      dropdownItems,
      isOpen,
      isPlain,
      onSelect,
      position,
      toggle,
      ...props
    } = this.props;
    const id = toggle.props.id || `pf-toggle-id-${currentId++}`;
    let component;
    let renderedContent;
    let ariaHasPopup = null;
    if (dropdownItems && dropdownItems.length > 0) {
      component = 'ul';
      renderedContent = dropdownItems;
      ariaHasPopup = true;
    } else {
      component = 'div';
      renderedContent = children;
    }
    return (
      <div
        {...props}
        className={css(
          styles.dropdown,
          direction === DropdownDirection.up && styles.modifiers.top,
          isOpen && styles.modifiers.expanded,
          className
        )}
        ref={ref => {
          this.parentRef = ref;
        }}
      >
        {Children.map(toggle, oneToggle =>
          cloneElement(oneToggle, {
            parentRef: this.parentRef,
            isOpen,
            id,
            isPlain,
            'aria-haspopup': '' + ariaHasPopup,
            onEnter: this.onEnter
          })
        )}
        {isOpen && (
          <DropdownContext.Provider value={event => onSelect && onSelect(event)}>
            <DropdownMenu
              component={component}
              isOpen={isOpen}
              position={position}
              aria-labelledby={id}
              openedOnEnter={this.openedOnEnter}
            >
              {renderedContent}
            </DropdownMenu>
          </DropdownContext.Provider>
        )}
      </div>
    );
  }
}

Dropdown.propTypes = propTypes;
Dropdown.defaultProps = defaultProps;

export default Dropdown;
