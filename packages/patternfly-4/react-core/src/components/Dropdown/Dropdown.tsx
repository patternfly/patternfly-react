import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Dropdown/dropdown';
import { css } from '@patternfly/react-styles';
import { DropdownMenu } from './DropdownMenu';
import { DropdownPosition, DropdownDirection, DropdownContext } from './dropdownConstants';

export interface DropdownProps extends React.HTMLProps<HTMLDivElement>{
  /** Anything which can be rendered in a dropdown */
  children?: React.ReactNode; 
  /** Classes applied to root element of dropdown */
  className?: string; 
  /** Array of DropdownItem nodes that will be rendered in the dropdown Menu list */
  dropdownItems?: Array<any>; 
  /** Flag to indicate if menu is opened */
  isOpen?: boolean; 
  /** Display the toggle with no border or background */
  isPlain?: boolean; 
  /** Indicates where menu will be aligned horizontally */
  position?: DropdownPosition | 'right' | 'left';
  /** Display menu above or below dropdown toggle */
  direction?: DropdownDirection | 'up' | 'down';
  /** Flag to indicate if dropdown has groups */
  isGrouped?: boolean;
  /** Placeholder to use custom toggle elements */
  toggle: React.ReactNode; 
  /** Function callback called when user selects item */
  onSelect?(event: React.SyntheticEvent<HTMLDivElement>): void;
}

// seed for the aria-labelledby ID
let currentId = 0;

export class DropdownWithContext extends React.Component<DropdownProps> {
  
  static defaultProps = {
    children: (props: any) => {
      if (props.dropdownItems && props.dropdownItems.length > 0 && props.children) {
        return new Error(
          `Children and dropdownItems props have been provided. Only the dropdownItems prop items will be rendered `
        );
      }
      return null;
    },
    className: '',
    dropdownItems: [],
    isOpen: false,
    isPlain: false,
    isGrouped: false,
    position: DropdownPosition.left,
    direction: DropdownDirection.down,
    onSelect: Function.prototype
  };
  
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