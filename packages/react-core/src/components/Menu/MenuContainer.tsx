import React from 'react';
import { Popper } from '../../helpers/Popper/Popper';

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
  /** Custom callback to override the default behaviour when pressing up/down arrows. Default is focusing the menu items (first item on arrow down, last item on arrow up). */
  onArrowUpDownKeyDown?: (event: KeyboardEvent) => void;
  /** z-index of the dropdown menu */
  zIndex?: number;
  /** Additional properties to pass to the Popper */
  popperProps?: MenuPopperProps;
  /** Flag indicating if scroll on focus of the first menu item should occur. */
  shouldPreventScrollOnItemFocus?: boolean;
  /** Time in ms to wait before firing the toggles' focus event. Defaults to 0 */
  focusTimeoutDelay?: number;
}

/**
 * Container that links a menu and menu toggle together, to handle basic keyboard input and control the opening and closing of a menu.
 * This component is currently in beta and is subject to change.
 */
export const MenuContainer: React.FunctionComponent<MenuContainerProps> = ({
  menu,
  menuRef,
  isOpen,
  toggle,
  toggleRef,
  onOpenChange,
  onArrowUpDownKeyDown,
  zIndex = 9999,
  popperProps,
  onOpenChangeKeys = ['Escape', 'Tab'],
  shouldPreventScrollOnItemFocus = true,
  focusTimeoutDelay = 0
}: MenuContainerProps) => {
  React.useEffect(() => {
    const onArrowUpDownKeyDownDefault = (event: KeyboardEvent) => {
      event.preventDefault();

      let listItem: HTMLLIElement;
      if (event.key === 'ArrowDown') {
        listItem = menuRef.current?.querySelector('li');
      } else {
        const allItems = menuRef.current?.querySelectorAll('li');
        listItem = allItems ? allItems[allItems.length - 1] : null;
      }

      const focusableElement = listItem?.querySelector(
        'button:not(:disabled),input:not(:disabled),a:not([aria-disabled="true"])'
      );
      focusableElement && (focusableElement as HTMLElement).focus();
    };

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

      if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        if (onArrowUpDownKeyDown) {
          onArrowUpDownKeyDown(event);
        } else {
          onArrowUpDownKeyDownDefault(event);
        }
      }
    };

    const handleClick = (event: MouseEvent) => {
      // toggle was opened, focus on first menu item
      if (isOpen && toggleRef.current?.contains(event.target as Node)) {
        setTimeout(() => {
          const firstElement = menuRef?.current?.querySelector(
            'li button:not(:disabled),li input:not(:disabled),li a:not([aria-disabled="true"])'
          );
          firstElement && (firstElement as HTMLElement).focus({ preventScroll: shouldPreventScrollOnItemFocus });
        }, focusTimeoutDelay);
      }

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
    onArrowUpDownKeyDown,
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
