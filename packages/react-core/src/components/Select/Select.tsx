import React from 'react';
import { css } from '@patternfly/react-styles';
import { Menu, MenuContent, MenuProps } from '../Menu';
import { Popper } from '../../helpers/Popper/Popper';
import { getOUIAProps, OUIAProps, getDefaultOUIAId } from '../../helpers';

export interface SelectPopperProps {
  /** Vertical direction of the popper. If enableFlip is set to true, this will set the initial direction before the popper flips. */
  direction?: 'up' | 'down';
  /** Horizontal position of the popper */
  position?: 'right' | 'left' | 'center';
  /** Custom width of the popper. If the value is "trigger", it will set the width to the select toggle's width */
  width?: string | 'trigger';
  /** Minimum width of the popper. If the value is "trigger", it will set the min width to the select toggle's width */
  minWidth?: string | 'trigger';
  /** Maximum width of the popper. If the value is "trigger", it will set the max width to the select toggle's width */
  maxWidth?: string | 'trigger';
  /** Enable to flip the popper when it reaches the boundary */
  enableFlip?: boolean;
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
  /** Single itemId for single select menus, or array of itemIds for multi select. You can also specify isSelected on the SelectOption. */
  selected?: any | any[];
  /** Renderer for a custom select toggle. Forwards a ref to the toggle. */
  toggle: (toggleRef: React.RefObject<any>) => React.ReactNode;
  /** Flag indicating the toggle should be focused after a selection. */
  shouldFocusToggleOnSelect?: boolean;
  /** Function callback when user selects an option. The toggleRef property is optional to allow customization of focus management. */
  onSelect?: (
    event?: React.MouseEvent<Element, MouseEvent>,
    itemId?: string | number,
    toggleRef?: React.RefObject<any>
  ) => void;
  /** Callback to allow the select component to change the open state of the menu.
   * Triggered by clicking outside of the menu, or by pressing either tab or escape (or specificed in onOpenChangeKeys). */
  onOpenChange?: (isOpen: boolean) => void;
  /** @beta Keys that trigger onOpenChange, defaults to tab and escape. */
  onOpenChangeKeys?: string[];
  /** Indicates if the select should be without the outer box-shadow */
  isPlain?: boolean;
  /** @hide Forwarded ref */
  innerRef?: React.Ref<HTMLDivElement>;
  /** z-index of the select menu */
  zIndex?: number;
  /** @beta Determines the accessible role of the select. For a checkbox select pass in "menu". */
  role?: string;
  /** Additional properties to pass to the popper */
  popperProps?: SelectPopperProps;
}

const SelectBase: React.FunctionComponent<SelectProps & OUIAProps> = ({
  children,
  className,
  onSelect,
  isOpen,
  selected,
  toggle,
  shouldFocusToggleOnSelect = false,
  onOpenChange,
  onOpenChangeKeys = ['Escape', 'Tab'],
  isPlain,
  innerRef,
  zIndex = 9999,
  role = 'listbox',
  popperProps,
  ...props
}: SelectProps & OUIAProps) => {
  const localMenuRef = React.useRef<HTMLDivElement>();
  const toggleRef = React.useRef<HTMLButtonElement>();

  const menuRef = (innerRef as React.RefObject<HTMLDivElement>) || localMenuRef;
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
    };

    const handleClick = (event: MouseEvent) => {
      // toggle was clicked open via keyboard, focus on first menu item
      if (isOpen && toggleRef.current?.contains(event.target as Node) && event.detail === 0) {
        setTimeout(() => {
          const firstElement = menuRef?.current?.querySelector('li button:not(:disabled),li input:not(:disabled)');
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
  }, [isOpen, menuRef, onOpenChange, onOpenChangeKeys]);

  const menu = (
    <Menu
      role={role}
      className={css(className)}
      ref={menuRef}
      onSelect={(event, itemId) => {
        onSelect && onSelect(event, itemId, toggleRef);
        shouldFocusToggleOnSelect && toggleRef.current.focus();
      }}
      isPlain={isPlain}
      selected={selected}
      {...getOUIAProps(
        Select.displayName,
        props.ouiaId !== undefined ? props.ouiaId : getDefaultOUIAId(Select.displayName),
        props.ouiaSafe !== undefined ? props.ouiaSafe : true
      )}
      {...props}
    >
      <MenuContent>{children}</MenuContent>
    </Menu>
  );
  return (
    <Popper
      trigger={toggle(toggleRef)}
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
