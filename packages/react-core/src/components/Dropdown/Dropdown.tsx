import React from 'react';
import { css } from '@patternfly/react-styles';
import { Menu, MenuContent, MenuProps } from '../Menu';
import { Popper } from '../../helpers/Popper/Popper';
import { useOUIAProps, OUIAProps } from '../../helpers';

export interface DropdownPopperProps {
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
  /** The container to append the popper to. Defaults to 'inline'. */
  appendTo?: HTMLElement | (() => HTMLElement) | 'inline';
  /** Flag to prevent the popper from overflowing its container and becoming partially obscured. */
  preventOverflow?: boolean;
}

export interface DropdownToggleProps {
  /**  Dropdown toggle node. */
  toggleNode: React.ReactNode;
  /** Reference to the toggle. */
  toggleRef?: React.RefObject<HTMLButtonElement>;
}

/**
 * See the Menu documentation for additional props that may be passed.
 */
export interface DropdownProps extends MenuProps, OUIAProps {
  /** Anything which can be rendered in a dropdown. */
  children?: React.ReactNode;
  /** Classes applied to root element of dropdown. */
  className?: string;
  /** Dropdown toggle. The toggle should either be a renderer function which forwards the given toggle ref, or a direct ReactNode that should be passed along with the toggleRef property. */
  toggle: DropdownToggleProps | ((toggleRef: React.RefObject<any>) => React.ReactNode);
  /** Flag to indicate if menu is opened.*/
  isOpen?: boolean;
  /** Flag indicating the toggle should be focused after a selection. If this use case is too restrictive, the optional toggleRef property with a node toggle may be used to control focus. */
  shouldFocusToggleOnSelect?: boolean;
  /** Function callback called when user selects item. */
  onSelect?: (event?: React.MouseEvent<Element, MouseEvent>, value?: string | number) => void;
  /** Callback to allow the dropdown component to change the open state of the menu.
   * Triggered by clicking outside of the menu, or by pressing any keys specificed in onOpenChangeKeys. */
  onOpenChange?: (isOpen: boolean) => void;
  /** @beta Keys that trigger onOpenChange, defaults to tab and escape. It is highly recommended to include Escape in the array, while Tab may be omitted if the menu contains non-menu items that are focusable. */
  onOpenChangeKeys?: string[];
  /** Indicates if the menu should be without the outer box-shadow. */
  isPlain?: boolean;
  /** Indicates if the menu should be scrollable. */
  isScrollable?: boolean;
  /** @hide Forwarded ref */
  innerRef?: React.Ref<any>;
  /** Value to overwrite the randomly generated data-ouia-component-id.*/
  ouiaId?: number | string;
  /** Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false. */
  ouiaSafe?: boolean;
  /** z-index of the dropdown menu */
  zIndex?: number;
  /** Additional properties to pass to the Popper */
  popperProps?: DropdownPopperProps;
  /** Height of the dropdown menu */
  menuHeight?: string;
  /** Maximum height of dropdown menu */
  maxMenuHeight?: string;
}

const DropdownBase: React.FunctionComponent<DropdownProps> = ({
  children,
  className,
  onSelect,
  isOpen,
  toggle,
  shouldFocusToggleOnSelect = false,
  onOpenChange,
  isPlain,
  isScrollable,
  innerRef,
  ouiaId,
  ouiaSafe = true,
  zIndex = 9999,
  popperProps,
  onOpenChangeKeys = ['Escape', 'Tab'],
  menuHeight,
  maxMenuHeight,
  ...props
}: DropdownProps) => {
  const localMenuRef = React.useRef<HTMLDivElement>();
  const localToggleRef = React.useRef<HTMLButtonElement>();
  const ouiaProps = useOUIAProps(Dropdown.displayName, ouiaId, ouiaSafe);

  const menuRef = (innerRef as React.RefObject<HTMLDivElement>) || localMenuRef;
  const toggleRef =
    typeof toggle === 'function' || (typeof toggle !== 'function' && !toggle.toggleRef)
      ? localToggleRef
      : (toggle?.toggleRef as React.RefObject<HTMLButtonElement>);

  React.useEffect(() => {
    const handleMenuKeys = (event: KeyboardEvent) => {
      // Close the menu on tab or escape if onOpenChange is provided
      if (
        isOpen &&
        onOpenChange &&
        (menuRef.current?.contains(event.target as Node) || toggleRef.current?.contains(event.target as Node))
      ) {
        if (onOpenChangeKeys.includes(event.key)) {
          onOpenChange(false);
          toggleRef.current?.focus();
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
  }, [isOpen, menuRef, toggleRef, onOpenChange, onOpenChangeKeys]);

  const scrollable = maxMenuHeight !== undefined || menuHeight !== undefined || isScrollable;

  const menu = (
    <Menu
      className={css(className)}
      ref={menuRef}
      onSelect={(event, value) => {
        onSelect && onSelect(event, value);
        shouldFocusToggleOnSelect && toggleRef.current.focus();
      }}
      isPlain={isPlain}
      isScrollable={scrollable}
      {...props}
      {...ouiaProps}
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

export const Dropdown = React.forwardRef((props: DropdownProps, ref: React.Ref<any>) => (
  <DropdownBase innerRef={ref} {...props} />
));
Dropdown.displayName = 'Dropdown';
