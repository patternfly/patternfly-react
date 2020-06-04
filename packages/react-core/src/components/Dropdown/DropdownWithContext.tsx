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
import { FocusTrap } from '../../helpers';

export interface DropdownWithContextState {
  focusTrapActive: boolean;
}

export class DropdownWithContext extends React.Component<DropdownProps & OUIAProps, DropdownWithContextState> {
  tip: TippyInstance;
  openedOnEnter = false;
  baseComponentRef = React.createRef<any>();

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
    ouiaComponentType: 'Dropdown'
  };

  constructor(props: DropdownProps & OUIAProps) {
    super(props);
    this.state = {
      focusTrapActive: false
    };
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
          const content = isOpen ? (
            <div className="pf-c-dropdown" style={{ position: 'absolute' }}>
              <DropdownMenu
                component={component}
                isOpen={true}
                position={position}
                aria-labelledby={contextId ? `${contextId}-toggle` : id}
                openedOnEnter={openedOnEnter}
                isGrouped={isGrouped}
                autoFocus={openedOnEnter && autoFocus}
              >
                {renderedContent}
              </DropdownMenu>
            </div>
          ) : (
            <></>
          );
          return (
            <PopoverBase
              content={content}
              onCreate={(tip: TippyInstance) => (this.tip = tip)}
              isVisible={isOpen}
              trigger={'manual'}
              arrow={false}
              interactive
              interactiveBorder={0}
              maxWidth="none"
              distance={0}
              appendTo={() => document.body}
              boundary="window"
              flip={false}
              placement="bottom-start"
              hideOnClick={false}
              theme="pf-popover"
              lazy={false}
              duration={0}
              animation="none"
              showOnCreate
            >
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
                    isOpen,
                    id,
                    isPlain,
                    'aria-haspopup': ariaHasPopup,
                    onEnter: () => this.onEnter()
                  })
                )}
              </BaseComponent>
            </PopoverBase>
          );
        }}
      </DropdownContext.Consumer>
    );
  }
}
