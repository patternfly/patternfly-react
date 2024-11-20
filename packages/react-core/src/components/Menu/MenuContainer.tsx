import React from 'react';
import { onToggleArrowKeydownDefault, Popper } from '../../helpers';

export interface MenuPopperProps {
  /** Vertical direction of the popper. If enableFlip is set to true, this will set the initial direction before the popper flips. */
  direction?: 'up' | 'down';
  /** Horizontal position of the popper */
  position?: 'right' | 'left' | 'center' | 'start' | 'end';
  /** Custom width of the popper. If the value is "trigger", it will set the width to the dropdown toggle's width */
  width?: string | 'trigger';
  /** Minimum width of the popper. If the value is "trigger", it will set the min width to the dropdown toggle's width */
  minWidth?: string | 'trigger';
  /** Maximum width of the popper. If the value is "trigger", it will set the max width to the dropdown toggle's width */
  maxWidth?: string | 'trigger';
  /** Enable to flip the popper when it reaches the boundary */
  enableFlip?: boolean;
  /** Flag to prevent the popper from overflowing its container and becoming partially obscured. */
  preventOverflow?: boolean;
}

export interface MenuContainerProps {
  /** Menu to be rendered */
  menu: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  /** Reference to the menu */
  menuRef: React.RefObject<any>;
  /** Toggle to be rendered */
  toggle: React.ReactNode;
  /** Reference to the toggle */
  toggleRef: React.RefObject<any>;
  /** Flag to indicate if menu is opened.*/
  isOpen: boolean;
  /** Callback to change the open state of the menu.
   * Triggered by clicking outside of the menu, or by pressing any keys specificed in onOpenChangeKeys. */
  onOpenChange?: (isOpen: boolean) => void;
  /** Keys that trigger onOpenChange, defaults to tab and escape. It is highly recommended to include Escape in the array, while Tab may be omitted if the menu contains non-menu items that are focusable. */
  onOpenChangeKeys?: string[];
  /** Callback to override the toggle keydown behavior. By default, when the toggle has focus and the menu is open, pressing the up/down arrow keys will focus a valid non-disabled menu item - the first item for the down arrow key and last item for the up arrow key. */
  onToggleKeydown?: (event: KeyboardEvent) => void;
  /** z-index of the dropdown menu */
  zIndex?: number;
  /** Additional properties to pass to the Popper */
  popperProps?: MenuPopperProps;
  /** @beta Flag indicating the first menu item should be focused after opening the dropdown. */
  shouldFocusFirstItemOnOpen?: boolean;
  /** Flag indicating if scroll on focus of the first menu item should occur. */
  shouldPreventScrollOnItemFocus?: boolean;
  /** Time in ms to wait before firing the toggles' focus event. Defaults to 0 */
  focusTimeoutDelay?: number;
}

/**
 * Container that links a menu and menu toggle together, to handle basic keyboard input and control the opening and closing of a menu.
 */
export const MenuContainer: React.FunctionComponent<MenuContainerProps> = ({
  menu,
  menuRef,
  isOpen,
  toggle,
  toggleRef,
  onOpenChange,
  onToggleKeydown,
  zIndex = 9999,
  popperProps,
  onOpenChangeKeys = ['Escape', 'Tab'],
  shouldFocusFirstItemOnOpen = false,
  shouldPreventScrollOnItemFocus = true,
  focusTimeoutDelay = 0
}: MenuContainerProps) => {
  const prevIsOpen = React.useRef<boolean>(isOpen);
  React.useEffect(() => {
    // menu was opened, focus on first menu item
    if (prevIsOpen.current === false && isOpen === true && shouldFocusFirstItemOnOpen) {
      setTimeout(() => {
        const firstElement = menuRef?.current?.querySelector(
          'li button:not(:disabled),li input:not(:disabled),li a:not([aria-disabled="true"])'
        );
        firstElement && (firstElement as HTMLElement).focus({ preventScroll: shouldPreventScrollOnItemFocus });
      }, focusTimeoutDelay);
    }

    prevIsOpen.current = isOpen;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  React.useEffect(() => {
    const handleMenuKeys = (event: KeyboardEvent) => {
      // Close the menu on tab or escape if onOpenChange is provided
      if (
        (isOpen && onOpenChange && menuRef.current?.contains(event.target as Node)) ||
        toggleRef.current?.contains(event.target as Node)
      ) {
        if (onOpenChangeKeys.includes(event.key)) {
          onOpenChange(false);
          toggleRef.current?.focus();
        }
      }

      if (toggleRef.current?.contains(event.target as Node)) {
        if (onToggleKeydown) {
          onToggleKeydown(event);
        } else if (isOpen) {
          onToggleArrowKeydownDefault(event, menuRef);
        }
      }
    };

    const handleClick = (event: MouseEvent) => {
      // If the event is not on the toggle and onOpenChange callback is provided, close the menu
      if (isOpen && onOpenChange && !toggleRef?.current?.contains(event.target as Node)) {
        if (isOpen && !menuRef.current?.contains(event.target as Node)) {
          onOpenChange(false);
        }
      }
    };

    window.addEventListener('keydown', handleMenuKeys);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('keydown', handleMenuKeys);
      window.removeEventListener('click', handleClick);
    };
  }, [
    focusTimeoutDelay,
    isOpen,
    menuRef,
    onOpenChange,
    onOpenChangeKeys,
    onToggleKeydown,
    shouldPreventScrollOnItemFocus,
    toggleRef
  ]);

  return (
    <Popper
      trigger={toggle}
      triggerRef={toggleRef}
      popper={menu}
      popperRef={menuRef}
      isVisible={isOpen}
      zIndex={zIndex}
      {...popperProps}
    />
  );
};
MenuContainer.displayName = 'MenuContainer';
