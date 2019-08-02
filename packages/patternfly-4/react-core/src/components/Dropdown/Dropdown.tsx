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
  dropdownItems?: any[]; 
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
  /** Toggle for the dropdown, examples: <DropdownToggle> or <DropdownToggleCheckbox> */
  toggle: React.ReactElement<any>; 
  /** Function callback called when user selects item */
  onSelect?(event: React.SyntheticEvent<HTMLDivElement>): void;
}

export class DropdownWithContext extends React.Component<DropdownProps> {
  openedOnEnter = false;
  baseComponentRef = React.createRef<any>();

  // seed for the aria-labelledby ID
  static currentId = 0;
  
  static defaultProps = {
    className: '',
    dropdownItems: [] as any[],
    isOpen: false,
    isPlain: false,
    isGrouped: false,
    position: DropdownPosition.left,
    direction: DropdownDirection.down,
    onSelect: Function.prototype
  };

  constructor(props: DropdownProps) {
    super(props);
    if (props.dropdownItems && props.dropdownItems.length > 0 && props.children) {
      throw new Error(
        `Children and dropdownItems props have been provided. Only the dropdownItems prop items will be rendered `
      );
    }
  }
  
  onEnter = () => {
    this.openedOnEnter = true;
  };

  componentDidUpdate() {
    if (!this.props.isOpen){ this.openedOnEnter = false;}
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
    const id = toggle.props.id || `pf-toggle-id-${DropdownWithContext.currentId++}`;
    let component: string;
    let renderedContent: React.ReactNode[];
    let ariaHasPopup = false;
    if (dropdownItems && dropdownItems.length > 0) {
      component = 'ul';
      renderedContent = dropdownItems;
      ariaHasPopup = true;
    } else {
      component = 'div';
      renderedContent = React.Children.toArray(children);
    }
    return (
      <DropdownContext.Consumer>
        {({ baseClass, baseComponent }) => {
          const BaseComponent = baseComponent as any;
          return (
            <BaseComponent
              {...props}
              className={css(
                baseClass,
                direction === DropdownDirection.up && styles.modifiers.top,
                isOpen && styles.modifiers.expanded,
                className
              )}
              ref={this.baseComponentRef}
            >
              {React.Children.map(toggle, oneToggle =>
                React.cloneElement(oneToggle, {
                  parentRef: this.baseComponentRef,
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
          );
        }}
      </DropdownContext.Consumer>
    );
  }
}

export const Dropdown: React.FunctionComponent<DropdownProps> = ({
  onSelect,
  ref, // Types of Ref are different for React.FC vs React.Component
  ...props
}: DropdownProps) => (
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