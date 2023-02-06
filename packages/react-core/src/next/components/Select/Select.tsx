import React from 'react';
import { css } from '@patternfly/react-styles';
import { Menu, MenuContent, MenuProps } from '../../../components/Menu';
import { Popper } from '../../../helpers/Popper/Popper';
import { getOUIAProps, OUIAProps, getDefaultOUIAId } from '../../../helpers';

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
  /** Function callback when user selects an option. */
  onSelect?: (event?: React.MouseEvent<Element, MouseEvent>, itemId?: string | number) => void;
  /** Callback to allow the select component to change the open state of the menu.
   * Triggered by clicking outside of the menu, or by pressing either tab or escape. */
  onOpenChange?: (isOpen: boolean) => void;
  /** Indicates if the select should be without the outer box-shadow */
  isPlain?: boolean;
  /** Minimum width of the select menu */
  minWidth?: string;
  /** @hide Forwarded ref */
  innerRef?: React.Ref<HTMLDivElement>;
  /** z-index of the select menu */
  zIndex?: number;
  /** @beta Determines the accessible role of the select. For a checkbox select pass in "menu". */
  role?: string;
}

const SelectBase: React.FunctionComponent<SelectProps & OUIAProps> = ({
  children,
  className,
  onSelect,
  isOpen,
  selected,
  toggle,
  onOpenChange,
  isPlain,
  minWidth,
  innerRef,
  zIndex = 9999,
  role = 'listbox',
  ...props
}: SelectProps & OUIAProps) => {
  const localMenuRef = React.useRef<HTMLDivElement>();
  const toggleRef = React.useRef<HTMLButtonElement>();
  const containerRef = React.useRef<HTMLDivElement>();

  const menuRef = (innerRef as React.RefObject<HTMLDivElement>) || localMenuRef;
  React.useEffect(() => {
    const handleMenuKeys = (event: KeyboardEvent) => {
      // Close the menu on tab or escape if onOpenChange is provided
      if (
        (isOpen && onOpenChange && menuRef.current?.contains(event.target as Node)) ||
        toggleRef.current?.contains(event.target as Node)
      ) {
        if (event.key === 'Escape' || event.key === 'Tab') {
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
  }, [isOpen, menuRef, onOpenChange]);

  const menu = (
    <Menu
      role={role}
      className={css(className)}
      ref={menuRef}
      onSelect={(event, itemId) => onSelect(event, itemId)}
      isPlain={isPlain}
      selected={selected}
      {...(minWidth && {
        style: {
          '--pf-c-menu--MinWidth': minWidth
        } as React.CSSProperties
      })}
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
    <div ref={containerRef}>
      <Popper
        trigger={toggle(toggleRef)}
        removeFindDomNode
        popper={menu}
        appendTo={containerRef.current || undefined}
        isVisible={isOpen}
        zIndex={zIndex}
      />
    </div>
  );
};

export const Select = React.forwardRef((props: SelectProps, ref: React.Ref<any>) => (
  <SelectBase innerRef={ref} {...props} />
));

Select.displayName = 'Select';
