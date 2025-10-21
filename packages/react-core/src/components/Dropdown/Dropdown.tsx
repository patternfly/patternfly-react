import { forwardRef, useEffect, useRef } from 'react';
import { css } from '@patternfly/react-styles';
import { Menu, MenuContent, MenuProps } from '../Menu';
import { Popper, PopperOptions } from '../../helpers/Popper/Popper';
import type { DropdownItemProps } from './DropdownItem';
import { useOUIAProps, OUIAProps, onToggleArrowKeydownDefault } from '../../helpers';

/** @deprecated Use PopperOptions instead */
export type DropdownPopperProps = PopperOptions;

export interface DropdownToggleProps {
  /**  Dropdown toggle node. */
  toggleNode: React.ReactNode;
  /** Reference to the toggle. */
  toggleRef?: React.RefObject<HTMLButtonElement | null>;
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
  onSelect?: (event?: React.MouseEvent<Element, MouseEvent>, value?: DropdownItemProps['value']) => void;
  /** Callback to allow the dropdown component to change the open state of the menu.
   * Triggered by clicking outside of the menu, or by pressing any keys specified in onOpenChangeKeys. */
  onOpenChange?: (isOpen: boolean) => void;
  /** Keys that trigger onOpenChange, defaults to tab and escape. It is highly recommended to include Escape in the array, while Tab may be omitted if the menu contains non-menu items that are focusable. */
  onOpenChangeKeys?: string[];
  /** Callback to override the toggle keydown behavior. By default, when the toggle has focus and the menu is open, pressing the up/down arrow keys will focus a valid non-disabled menu item - the first item for the down arrow key and last item for the up arrow key. */
  onToggleKeydown?: (event: KeyboardEvent) => void;
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
  /** When applied, wraps dropdown in a container with a data-ouia-component-id.*/
  containerOuiaId?: number | string;
  /** Set the value of data-ouia-safe for the container when containerOuiaId is applied. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false. */
  containerOuiaSafe?: boolean;
  /** Sets the base component to render for the container. Defaults to <span> */
  containerComponent?: React.ReactNode;
  /** z-index of the dropdown menu */
  zIndex?: number;
  /** Additional properties to pass to the Popper */
  popperProps?: PopperOptions;
  /** Height of the dropdown menu */
  menuHeight?: string;
  /** Maximum height of dropdown menu */
  maxMenuHeight?: string;
  /** @beta Flag indicating the first menu item should be focused after opening the dropdown. */
  shouldFocusFirstItemOnOpen?: boolean;
  /** Flag indicating if scroll on focus of the first menu item should occur. */
  shouldPreventScrollOnItemFocus?: boolean;
  /** Time in ms to wait before firing the toggles' focus event. Defaults to 0 */
  focusTimeoutDelay?: number;
}

const DropdownBase: React.FunctionComponent<DropdownProps> = ({
  children,
  className,
  onSelect,
  isOpen,
  toggle,
  shouldFocusToggleOnSelect = false,
  onOpenChange,
  onToggleKeydown,
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
  shouldFocusFirstItemOnOpen = false,
  shouldPreventScrollOnItemFocus = true,
  focusTimeoutDelay = 0,
  containerOuiaId,
  containerOuiaSafe = true,
  containerComponent = 'span',
  ...props
}: DropdownProps) => {
  const localMenuRef = useRef<HTMLDivElement>(undefined);
  const localToggleRef = useRef<HTMLButtonElement>(undefined);
  const ouiaProps = useOUIAProps(Dropdown.displayName, ouiaId, ouiaSafe);
  const ContainerComponent = containerComponent as any;
  const containerOuiaProps = useOUIAProps('Dropdown container', containerOuiaId, containerOuiaSafe);

  const menuRef = (innerRef as React.RefObject<HTMLDivElement | null>) || localMenuRef;
  const toggleRef =
    typeof toggle === 'function' || (typeof toggle !== 'function' && !toggle.toggleRef)
      ? localToggleRef
      : (toggle?.toggleRef as React.RefObject<HTMLButtonElement | null>);

  const prevIsOpen = useRef<boolean>(isOpen);
  useEffect(() => {
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

  useEffect(() => {
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

  const scrollable = maxMenuHeight !== undefined || menuHeight !== undefined || isScrollable;

  const menu = (
    <Menu
      className={css(className)}
      ref={menuRef}
      onSelect={(event, value) => {
        onSelect && onSelect(event, value);
        shouldFocusToggleOnSelect && toggleRef.current?.focus();
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

  const popper = (
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

  return containerOuiaId ? <ContainerComponent {...containerOuiaProps}>{popper}</ContainerComponent> : popper;
};

export const Dropdown = forwardRef((props: DropdownProps, ref: React.Ref<any>) => (
  <DropdownBase innerRef={ref} {...props} />
));
Dropdown.displayName = 'Dropdown';
