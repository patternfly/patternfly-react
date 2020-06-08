import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Dropdown/dropdown';
import { css } from '@patternfly/react-styles';
import { DropdownMenu } from './DropdownMenu';
import { DropdownProps } from './Dropdown';
import { DropdownContext, DropdownDirection, DropdownPosition } from './dropdownConstants';
import { getOUIAProps, OUIAProps } from '../../helpers';
import { PickOptional } from '../../helpers/typeUtils';
import PopoverBase from '../../helpers/PopoverBase/PopoverBase';
import { Instance as TippyInstance } from 'tippy.js';

export class DropdownWithContext extends React.Component<DropdownProps & OUIAProps> {
  tip: TippyInstance;
  openedOnEnter = false;
  baseComponentRef = React.createRef<any>();
  menuComponentRef = React.createRef<any>();

  // seed for the aria-labelledby ID
  static currentId = 0;

  static defaultProps: PickOptional<DropdownProps> = {
    className: '',
    dropdownItems: [] as any[],
    isOpen: false,
    isPlain: false,
    isGrouped: false,
    position: DropdownPosition.left,
    direction: DropdownDirection.down,
    onSelect: (): void => undefined,
    autoFocus: true,
    menuAppendTo: 'inline',
    ouiaComponentType: 'Dropdown'
  };

  constructor(props: DropdownProps & OUIAProps) {
    super(props);
    if (props.dropdownItems && props.dropdownItems.length > 0 && props.children) {
      // eslint-disable-next-line no-console
      console.error(
        'Children and dropdownItems props have been provided. Only the dropdownItems prop items will be rendered'
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

  setMenuComponentRef = (element: any) => {
    this.menuComponentRef = element;
  };

  getMenuComponentRef = () => this.menuComponentRef;

  getPlacement = (position: 'right' | 'left', direction: 'up' | 'down') => {
    const placement = `${direction === 'up' ? 'top' : 'bottom'}-${position === 'right' ? 'end' : 'start'}`;
    return placement;
  };

  render() {
    const {
      children,
      className,
      direction,
      dropdownItems,
      isOpen,
      isPlain,
      isGrouped,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      onSelect,
      position,
      toggle,
      autoFocus,
      ouiaId,
      menuAppendTo,
      menuTippyProps,
      ouiaComponentType,
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
          const menuComponent = (
            <DropdownMenu
              setMenuComponentRef={this.setMenuComponentRef}
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
          );
          const popoverContent = (
            <div
              className={css(
                baseClass,
                direction === DropdownDirection.up && styles.modifiers.top,
                position === DropdownPosition.right && styles.modifiers.alignRight,
                isOpen && styles.modifiers.expanded,
                className
              )}
              // temporary fix until Core adds a modifier
              // https://github.com/patternfly/patternfly-react/pull/4348#discussion_r436924794
              style={{ display: 'block' }}
            >
              {isOpen && menuComponent}
            </div>
          );
          const mainComponent = (
            <BaseComponent
              {...props}
              className={css(
                baseClass,
                direction === DropdownDirection.up && styles.modifiers.top,
                position === DropdownPosition.right && styles.modifiers.alignRight,
                isOpen && styles.modifiers.expanded,
                className
              )}
              ref={this.baseComponentRef}
              {...getOUIAProps(ouiaComponentType, ouiaId)}
            >
              {React.Children.map(toggle, oneToggle =>
                React.cloneElement(oneToggle, {
                  parentRef: this.baseComponentRef,
                  getMenuRef: this.getMenuComponentRef,
                  isOpen,
                  id,
                  isPlain,
                  'aria-haspopup': ariaHasPopup,
                  onEnter: () => this.onEnter()
                })
              )}
              {menuAppendTo === 'inline' && isOpen && menuComponent}
            </BaseComponent>
          );
          return menuAppendTo === 'inline' ? (
            mainComponent
          ) : (
            <PopoverBase
              content={popoverContent}
              onCreate={(tip: TippyInstance) => (this.tip = tip)}
              isVisible={isOpen}
              trigger={'manual'}
              arrow={false}
              interactive
              interactiveBorder={0}
              maxWidth="none"
              distance={0}
              appendTo={menuAppendTo}
              boundary="window"
              flip={false}
              placement={this.getPlacement(position, direction)}
              hideOnClick={false}
              theme="pf-popover"
              lazy
              duration={0}
              animation="none"
              showOnCreate
              {...menuTippyProps}
            >
              {mainComponent}
            </PopoverBase>
          );
        }}
      </DropdownContext.Consumer>
    );
  }
}
