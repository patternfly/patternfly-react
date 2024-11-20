import React from 'react';
import { css } from '@patternfly/react-styles';
import { Menu, MenuContent, MenuProps } from '../Menu';
import { Popper } from '../../helpers/Popper/Popper';
import { getOUIAProps, OUIAProps, getDefaultOUIAId, onToggleArrowKeydownDefault } from '../../helpers';

export interface SelectPopperProps {
  /** Vertical direction of the popper. If enableFlip is set to true, this will set the initial direction before the popper flips. */
  direction?: 'up' | 'down';
  /** Horizontal position of the popper */
  position?: 'right' | 'left' | 'center' | 'start' | 'end';
  /** Custom width of the popper. If the value is "trigger", it will set the width to the select toggle's width */
  width?: string | 'trigger';
  /** Minimum width of the popper. If the value is "trigger", it will set the min width to the select toggle's width */
  minWidth?: string | 'trigger';
  /** Maximum width of the popper. If the value is "trigger", it will set the max width to the select toggle's width */
  maxWidth?: string | 'trigger';
  /** Enable to flip the popper when it reaches the boundary */
  enableFlip?: boolean;
  /** The container to append the select to. Defaults to document.body.
   * If your select is being cut off you can append it to an element higher up the DOM tree.
   * Some examples:
   * appendTo="inline"
   * appendTo={() => document.body}
   * appendTo={document.getElementById('target')}
   */
  appendTo?: HTMLElement | (() => HTMLElement) | 'inline';
  /** Flag to prevent the popper from overflowing its container and becoming partially obscured. */
  preventOverflow?: boolean;
}

export interface SelectToggleProps {
  /**  Select toggle node. */
  toggleNode: React.ReactNode;
  /** Reference to the toggle. */
  toggleRef?: React.RefObject<HTMLButtonElement>;
}

/**
 * See the Menu documentation for additional props that may be passed.
 */

export interface SelectProps extends MenuProps, OUIAProps {
  /** Anything which can be rendered in a select */
  children?: React.ReactNode;
  /** Classes applied to root element of select */
  className?: string;
  /** Flag to indicate if select is open */
  isOpen?: boolean;
  /** Single select option value for single select menus, or array of select option values for multi select. You can also specify isSelected on the SelectOption. */
  selected?: any | any[];
  /** Select toggle. The toggle should either be a renderer function which forwards the given toggle ref, or a direct ReactNode that should be passed along with the toggleRef property. */
  toggle: SelectToggleProps | ((toggleRef: React.RefObject<any>) => React.ReactNode);
  /** Flag indicating the toggle should be focused after a selection. If this use case is too restrictive, the optional toggleRef property with a node toggle may be used to control focus. */
  shouldFocusToggleOnSelect?: boolean;
  /** @beta Flag indicating the first menu item should be focused after opening the menu. */
  shouldFocusFirstItemOnOpen?: boolean;
  /** Function callback when user selects an option. */
  onSelect?: (event?: React.MouseEvent<Element, MouseEvent>, value?: string | number) => void;
  /** Callback to allow the select component to change the open state of the menu.
   * Triggered by clicking outside of the menu, or by pressing any keys specificed in onOpenChangeKeys. */
  onOpenChange?: (isOpen: boolean) => void;
  /** Keys that trigger onOpenChange, defaults to tab and escape. It is highly recommended to include Escape in the array, while Tab may be omitted if the menu contains non-menu items that are focusable. */
  onOpenChangeKeys?: string[];
  /** Callback to override the toggle keydown behavior. By default, when the toggle has focus and the menu is open, pressing the up/down arrow keys will focus a valid non-disabled menu item - the first item for the down arrow key and last item for the up arrow key. */
  onToggleKeydown?: (event: KeyboardEvent) => void;
  /** Select variant. For typeahead variant focus won't shift to menu items when pressing up/down arrows. */
  variant?: 'default' | 'typeahead';
  /** Indicates if the select should be without the outer box-shadow */
  isPlain?: boolean;
  /** @hide Forwarded ref */
  innerRef?: React.Ref<HTMLDivElement>;
  /** z-index of the select menu */
  zIndex?: number;
  /** Determines the accessible role of the select. For a checkbox select pass in "menu". */
  role?: string;
  /** Additional properties to pass to the popper */
  popperProps?: SelectPopperProps;
  /** Height of the select menu */
  menuHeight?: string;
  /** Maximum height of select menu */
  maxMenuHeight?: string;
  /** Indicates if the select menu should be scrollable */
  isScrollable?: boolean;
  /** Flag indicating if scroll on focus of the first menu item should occur. */
  shouldPreventScrollOnItemFocus?: boolean;
  /** Time in ms to wait before firing the toggles' focus event. Defaults to 0 */
  focusTimeoutDelay?: number;
}

const SelectBase: React.FunctionComponent<SelectProps & OUIAProps> = ({
  children,
  className,
  onSelect,
  isOpen,
  selected,
  toggle,
  shouldFocusToggleOnSelect = false,
  shouldFocusFirstItemOnOpen = false,
  onOpenChange,
  onOpenChangeKeys = ['Escape', 'Tab'],
  onToggleKeydown,
  variant,
  isPlain,
  innerRef,
  zIndex = 9999,
  role = 'listbox',
  popperProps,
  menuHeight,
  maxMenuHeight,
  isScrollable,
  shouldPreventScrollOnItemFocus = true,
  focusTimeoutDelay = 0,
  ...props
}: SelectProps & OUIAProps) => {
  const localMenuRef = React.useRef<HTMLDivElement>();
  const localToggleRef = React.useRef<HTMLButtonElement>();

  const menuRef = (innerRef as React.RefObject<HTMLDivElement>) || localMenuRef;
  const toggleRef =
    typeof toggle === 'function' || (typeof toggle !== 'function' && !toggle.toggleRef)
      ? localToggleRef
      : (toggle?.toggleRef as React.RefObject<HTMLButtonElement>);

  const prevIsOpen = React.useRef<boolean>(isOpen);
  React.useEffect(() => {
    // menu was opened, focus on first menu item
    if (prevIsOpen.current === false && isOpen === true && shouldFocusFirstItemOnOpen) {
      setTimeout(() => {
        const firstElement = menuRef?.current?.querySelector('li button:not(:disabled),li input:not(:disabled)');
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
        isOpen &&
        onOpenChange &&
        (menuRef.current?.contains(event.target as Node) || toggleRef.current?.contains(event.target as Node))
      ) {
        if (onOpenChangeKeys.includes(event.key)) {
          event.preventDefault();
          onOpenChange(false);
          toggleRef.current?.focus();
        }
      }

      if (toggleRef.current?.contains(event.target as Node)) {
        if (onToggleKeydown) {
          onToggleKeydown(event);
        } else if (isOpen && variant !== 'typeahead') {
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
    isOpen,
    menuRef,
    toggleRef,
    onOpenChange,
    onOpenChangeKeys,
    onToggleKeydown,
    shouldPreventScrollOnItemFocus,
    shouldFocusFirstItemOnOpen,
    focusTimeoutDelay
  ]);

  const menu = (
    <Menu
      role={role}
      className={css(className)}
      ref={menuRef}
      onSelect={(event, value) => {
        onSelect && onSelect(event, value);
        shouldFocusToggleOnSelect && toggleRef.current.focus();
      }}
      isPlain={isPlain}
      selected={selected}
      isScrollable={isScrollable ?? (menuHeight !== undefined || maxMenuHeight !== undefined)}
      {...getOUIAProps(
        Select.displayName,
        props.ouiaId !== undefined ? props.ouiaId : getDefaultOUIAId(Select.displayName),
        props.ouiaSafe !== undefined ? props.ouiaSafe : true
      )}
      {...props}
    >
      <MenuContent menuHeight={menuHeight} maxMenuHeight={maxMenuHeight}>
        {children}
      </MenuContent>
    </Menu>
  );
  return (
    <Popper
      trigger={typeof toggle === 'function' ? toggle(toggleRef) : toggle.toggleNode}
      triggerRef={toggleRef}
      popper={menu}
      popperRef={menuRef}
      isVisible={isOpen}
      zIndex={zIndex}
      {...popperProps}
    />
  );
};

export const Select = React.forwardRef((props: SelectProps, ref: React.Ref<any>) => (
  <SelectBase innerRef={ref} {...props} />
));

Select.displayName = 'Select';
