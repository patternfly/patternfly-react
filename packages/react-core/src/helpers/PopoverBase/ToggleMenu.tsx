import * as React from 'react';
import { Props as TippyProps } from 'tippy.js';
import PopoverBase from './PopoverBase';
import { usePopper } from 'react-popper';

export const PatternFlyPopper = () => {
  const [referenceElement, setReferenceElement] = React.useState(null);
  const [popperElement, setPopperElement] = React.useState(null);
  const [arrowElement, setArrowElement] = React.useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [{ name: 'arrow', options: { element: arrowElement } }]
  });

  return (
    <>
      <button type="button" ref={setReferenceElement}>
        Reference element
      </button>

      <div ref={setPopperElement} style={styles.popper} {...attributes.popper}>
        Popper element
        <div ref={setArrowElement} style={styles.arrow} />
      </div>
    </>
  );
};

export interface ToggleMenuBaseProps {
  /** The parent container to append the menu to. Defaults to 'inline'
   * If your menu is being cut off you can append it to an element higher up the DOM tree.
   * Some examples:
   * menuAppendTo="parent"
   * menuAppendTo={() => document.body}
   * menuAppendTo={document.getElementById('target')}
   */
  menuAppendTo?: HTMLElement | (() => HTMLElement) | 'parent' | 'inline';
  /** additional tippy.js props to pass through to the menu */
  menuTippyProps?: Partial<TippyProps>;
}

export interface ToggleMenuComponentProps extends ToggleMenuBaseProps, Partial<TippyProps> {
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
  position = 'left',
  ...menuTippyProps
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
      {...menuTippyProps}
    >
      {toggle}
    </PopoverBase>
  );
};
