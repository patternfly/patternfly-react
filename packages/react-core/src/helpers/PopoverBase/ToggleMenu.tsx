import * as React from 'react';
import PopoverBase from './PopoverBase';

export interface ToggleMenuBaseProps {
  /** The parent container to append the menu to. Defaults to 'inline'
   * If your menu is being cut off you can append it to an element higher up the DOM tree.
   * Some examples:
   * menuAppendTo="parent"
   * menuAppendTo={() => document.body}
   * menuAppendTo={document.getElementById('target')}
   */
  menuAppendTo?: HTMLElement | (() => HTMLElement) | 'parent' | 'inline';
}

export interface ToggleMenuComponentProps extends ToggleMenuBaseProps {
  /** The toggle element */
  toggle: React.ReactNode;
  /** The menu element */
  menu: React.ReactNode;
  /** menu direction */
  direction?: 'up' | 'down';
  /** menu position */
  position?: 'right' | 'left';
  /** True to open the menu */
  isOpen: boolean;
}

export const ToggleMenuComponent: React.FunctionComponent<ToggleMenuComponentProps> = ({
  toggle,
  menu,
  isOpen,
  menuAppendTo,
  direction = 'down',
  position = 'left'
}) => {
  const getPlacement = () => `${direction === 'up' ? 'top' : 'bottom'}-${position === 'right' ? 'end' : 'start'}`;
  return (
    <PopoverBase
      content={menu}
      isVisible={isOpen}
      trigger={'manual'}
      arrow={false}
      interactive
      interactiveBorder={0}
      maxWidth="none"
      distance={0}
      appendTo={menuAppendTo === 'inline' ? null : menuAppendTo}
      boundary="window"
      flip={false}
      placement={getPlacement()}
      hideOnClick={false}
      theme="pf-popover"
      lazy
      duration={0}
      animation="none"
      showOnCreate
    >
      {toggle}
    </PopoverBase>
  );
};
