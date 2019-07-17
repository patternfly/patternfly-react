import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import styles from '@patternfly/react-styles/css/components/Dropdown/dropdown';
import { css } from '@patternfly/react-styles';
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
  /** Flag to indicate if the first dropdown item should gain initial focus, set false when adding
   * a specific auto-focus item (like a current selection) otherwise leave as true (this is only applicable
   * when passing an array of dropdownItems) */
  autoFocus: PropTypes.bool,
  /** Display the toggle with no border or background */
  isPlain: PropTypes.bool,
  /** Indicates where menu will be aligned horizontally */
  position: PropTypes.oneOf(Object.values(DropdownPosition)),
  /** Display menu above or below dropdown toggle */
  direction: PropTypes.oneOf(Object.values(DropdownDirection)),
  /** Flag to indicate if dropdown has groups */
  isGrouped: PropTypes.bool,
  /** Placeholder to use custom toggle elements */
  toggle: PropTypes.node.isRequired,
  /** Function callback called when user selects item */
  onSelect: PropTypes.func,
  /** Additional props are spread to the container <div> */
  '': PropTypes.any // eslint-disable-line react/require-default-props
};

const defaultProps = {
  children: null,
  className: '',
  dropdownItems: [],
  isOpen: false,
  autoFocus: true,
  isPlain: false,
  isGrouped: false,
  position: DropdownPosition.left,
  direction: DropdownDirection.down,
  onSelect: Function.prototype
};

export class DropdownWithContext extends React.Component {
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
      autoFocus,
      isPlain,
      isGrouped,
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
      <DropdownContext.Consumer>
        {({ baseClass, baseComponent: BaseComponent }) => (
          <BaseComponent
            {...props}
            className={css(
              baseClass,
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
                ariaHasPopup,
                onEnter: this.onEnter
              })
            )}
            {isOpen && (
              <DropdownMenu
                component={component}
                isOpen={isOpen}
                autoFocus={autoFocus}
                position={position}
                aria-labelledby={id}
                openedOnEnter={this.openedOnEnter}
                isGrouped={isGrouped}
              >
                {renderedContent}
              </DropdownMenu>
            )}
          </BaseComponent>
        )}
      </DropdownContext.Consumer>
    );
  }
}

const Dropdown = ({ onSelect, ...props }) => (
  <DropdownContext.Provider
    value={{
      onSelect: event => onSelect && onSelect(event),
      menuClass: styles.dropdownMenu,
      itemClass: styles.dropdownMenuItem,
      toggleClass: styles.dropdownToggle,
      baseClass: styles.dropdown,
      baseComponent: 'div',
      sectionClass: styles.dropdownGroup,
      sectionTitleClass: styles.dropdownGroupTitle,
      sectionComponent: 'section',
      disabledClass: styles.modifiers.disabled,
      hoverClass: styles.modifiers.hover,
      separatorClass: styles.dropdownSeparator
    }}
  >
    <DropdownWithContext {...props} />
  </DropdownContext.Provider>
);

Dropdown.propTypes = propTypes;
Dropdown.defaultProps = defaultProps;
DropdownWithContext.propTypes = propTypes;
DropdownWithContext.defaultProps = defaultProps;

export default Dropdown;
