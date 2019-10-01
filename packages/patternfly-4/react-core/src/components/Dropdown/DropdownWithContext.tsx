import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Dropdown/dropdown';
import { css } from '@patternfly/react-styles';
import { DropdownMenu } from './DropdownMenu';
import { DropdownProps } from './Dropdown';
import { DropdownPosition, DropdownDirection, DropdownContext } from './dropdownConstants';

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
    onSelect: Function.prototype,
    autoFocus: true
  };

  constructor(props: DropdownProps) {
    super(props);
    if (props.dropdownItems && props.dropdownItems.length > 0 && props.children) {
      throw new Error(
        'Children and dropdownItems props have been provided. Only the dropdownItems prop items will be rendered '
      );
    }
  }

  onEnter = () => {
    this.openedOnEnter = true;
  };

  componentDidUpdate() {
    if (!this.props.isOpen) {
      this.openedOnEnter = false;
    }
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
      autoFocus,
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
    const openedOnEnter = this.openedOnEnter;
    return (
      <DropdownContext.Consumer>
        {({ baseClass, baseComponent, id: contextId }) => {
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
                  onEnter: () => this.onEnter()
                })
              )}
              {isOpen && (
                <DropdownMenu
                  component={component}
                  isOpen={isOpen}
                  position={position}
                  aria-labelledby={contextId ? `${contextId}-toggle` : id}
                  openedOnEnter={openedOnEnter}
                  isGrouped={isGrouped}
                  autoFocus={openedOnEnter && autoFocus}
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
