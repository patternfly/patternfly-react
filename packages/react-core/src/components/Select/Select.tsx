import {
  type ReactNode,
  type RefObject,
  type MouseEvent as ReactMouseEvent,
  type Ref,
  type FunctionComponent,
  useRef,
  useEffect,
  forwardRef
} from 'react';
import { css } from '@patternfly/react-styles';
import { Menu, MenuContent, MenuProps } from '../Menu';
import { Popper } from '../../helpers/Popper/Popper';
import { getOUIAProps, OUIAProps, getDefaultOUIAId } from '../../helpers';

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
  /** The container to append the select to. Defaults to 'inline'.
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
  toggleNode: ReactNode;
  /** Reference to the toggle. */
  toggleRef?: RefObject<HTMLButtonElement>;
}

/**
 * See the Menu documentation for additional props that may be passed.
 */

export interface SelectProps extends MenuProps, OUIAProps {
  /** Anything which can be rendered in a select */
  children?: ReactNode;
  /** Classes applied to root element of select */
  className?: string;
  /** Flag to indicate if select is open */
  isOpen?: boolean;
  /** Single select option value for single select menus, or array of select option values for multi select. You can also specify isSelected on the SelectOption. */
  selected?: any | any[];
  /** Select toggle. The toggle should either be a renderer function which forwards the given toggle ref, or a direct ReactNode that should be passed along with the toggleRef property. */
  toggle: SelectToggleProps | ((toggleRef: RefObject<any>) => ReactNode);
  /** Flag indicating the toggle should be focused after a selection. If this use case is too restrictive, the optional toggleRef property with a node toggle may be used to control focus. */
  shouldFocusToggleOnSelect?: boolean;
  /** Function callback when user selects an option. */
  onSelect?: (event?: ReactMouseEvent<Element, MouseEvent>, value?: string | number) => void;
  /** Callback to allow the select component to change the open state of the menu.
   * Triggered by clicking outside of the menu, or by pressing any keys specificed in onOpenChangeKeys. */
  onOpenChange?: (isOpen: boolean) => void;
  /** @beta Keys that trigger onOpenChange, defaults to tab and escape. It is highly recommended to include Escape in the array, while Tab may be omitted if the menu contains non-menu items that are focusable. */
  onOpenChangeKeys?: string[];
  /** Indicates if the select should be without the outer box-shadow */
  isPlain?: boolean;
  /** @hide Forwarded ref */
  innerRef?: Ref<HTMLDivElement>;
  /** z-index of the select menu */
  zIndex?: number;
  /** @beta Determines the accessible role of the select. For a checkbox select pass in "menu". */
  role?: string;
  /** Additional properties to pass to the popper */
  popperProps?: SelectPopperProps;
  /** Height of the select menu */
  menuHeight?: string;
  /** Maximum height of select menu */
  maxMenuHeight?: string;
  /** Indicates if the select menu should be scrollable */
  isScrollable?: boolean;
}

const SelectBase: FunctionComponent<SelectProps & OUIAProps> = ({
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
  menuHeight,
  maxMenuHeight,
  isScrollable,
  ...props
}: SelectProps & OUIAProps) => {
  const localMenuRef = useRef<HTMLDivElement>();
  const localToggleRef = useRef<HTMLButtonElement>();

  const menuRef = (innerRef as RefObject<HTMLDivElement>) || localMenuRef;
  const toggleRef =
    typeof toggle === 'function' || (typeof toggle !== 'function' && !toggle.toggleRef)
      ? localToggleRef
      : (toggle?.toggleRef as RefObject<HTMLButtonElement>);

  useEffect(() => {
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
      // toggle was opened, focus on first menu item
      if (isOpen && toggleRef.current?.contains(event.target as Node)) {
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
  }, [isOpen, menuRef, toggleRef, onOpenChange, onOpenChangeKeys]);

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
      isScrollable={isScrollable}
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

export const Select = forwardRef((props: SelectProps, ref: Ref<any>) => <SelectBase innerRef={ref} {...props} />);

Select.displayName = 'Select';
