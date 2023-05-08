import React from 'react';
import { Popper, PopperProps } from '../../helpers/Popper/Popper';

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
   * Triggered by clicking outside of the menu, or by pressing either tab or escape (or keys specified in onOpenChangeKeys). */
  onOpenChange?: (isOpen: boolean) => void;
  /** @beta Keys that trigger onOpenChange, defaults to tab and escape. */
  onOpenChangeKeys?: string[];
  /** z-index of the dropdown menu */
  zIndex?: number;
  /** Additional properties to pass to the Popper */
  popperProps?: Partial<PopperProps>;
}

/**
 * Container that links a menu and menu toggle together, to handle basic keyboard input and control the opening and closing of a menu
 */
export const MenuContainer: React.FunctionComponent<MenuContainerProps> = ({
  menu,
  menuRef,
  isOpen,
  toggle,
  toggleRef,
  onOpenChange,
  zIndex = 9999,
  popperProps,
  onOpenChangeKeys = ['Escape', 'Tab']
}: MenuContainerProps) => {
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
    };

    const handleClick = (event: MouseEvent) => {
      // toggle was clicked open via keyboard, focus on first menu item
      if (isOpen && toggleRef.current?.contains(event.target as Node) && event.detail === 0) {
        setTimeout(() => {
          const firstElement = menuRef?.current?.querySelector(
            'li button:not(:disabled),li input:not(:disabled),li a:not([aria-disabled="true"])'
          );
          firstElement && (firstElement as HTMLElement).focus();
        }, 0);
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
  }, [isOpen, menuRef, onOpenChange, onOpenChangeKeys, toggleRef]);

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
