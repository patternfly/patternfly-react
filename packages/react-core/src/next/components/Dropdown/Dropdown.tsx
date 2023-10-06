import React from 'react';
import { css } from '@patternfly/react-styles';
import { Menu, MenuContent, MenuProps } from '../../../components/Menu';
import { Popper } from '../../../helpers/Popper/Popper';
import { useOUIAProps, OUIAProps } from '../../../helpers';

export interface DropdownProps extends MenuProps, OUIAProps {
  /** Anything which can be rendered in a dropdown. */
  children?: React.ReactNode;
  /** Classes applied to root element of dropdown. */
  className?: string;
  /** Renderer for a custom dropdown toggle. Forwards a ref to the toggle. */
  toggle: (toggleRef: React.RefObject<any>) => React.ReactNode;
  /** Flag to indicate if menu is opened.*/
  isOpen?: boolean;
  /** Function callback called when user selects item. */
  onSelect?: (event?: React.MouseEvent<Element, MouseEvent>, itemId?: string | number) => void;
  /** Callback to allow the dropdown component to change the open state of the menu.
   * Triggered by clicking outside of the menu, or by pressing either tab or escape. */
  onOpenChange?: (isOpen: boolean) => void;
  /** Indicates if the menu should be without the outer box-shadow. */
  isPlain?: boolean;
  /** Indicates if the menu should be scrollable. */
  isScrollable?: boolean;
  /** Min width of the menu. */
  minWidth?: string;
  /** @hide Forwarded ref */
  innerRef?: React.Ref<any>;
  /** Value to overwrite the randomly generated data-ouia-component-id.*/
  ouiaId?: number | string;
  /** Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false. */
  ouiaSafe?: boolean;
  /** z-index of the dropdown menu */
  zIndex?: number;
  /** The container to append the dropdown to. Defaults to 'inline'.
   * If your dropdown is being cut off you can append it to an element higher up the DOM tree.
   * Some examples:
   * appendTo="inline"
   * appendTo={() => document.body}
   * appendTo={document.getElementById('target')}
   */
  appendTo?: HTMLElement | (() => HTMLElement) | 'inline';
}

const DropdownBase: React.FunctionComponent<DropdownProps> = ({
  children,
  className,
  onSelect,
  isOpen,
  toggle,
  onOpenChange,
  isPlain,
  isScrollable,
  minWidth,
  innerRef,
  ouiaId,
  ouiaSafe = true,
  zIndex = 9999,
  appendTo = 'inline',
  ...props
}: DropdownProps) => {
  const localMenuRef = React.useRef<HTMLDivElement>();
  const toggleRef = React.useRef<HTMLButtonElement>();
  const containerRef = React.useRef<HTMLDivElement>();
  const ouiaProps = useOUIAProps(Dropdown.displayName, ouiaId, ouiaSafe);

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
      className={css(className)}
      ref={menuRef}
      onSelect={(event, itemId) => onSelect(event, itemId)}
      isPlain={isPlain}
      isScrollable={isScrollable}
      {...(minWidth && {
        style: {
          '--pf-c-menu--MinWidth': minWidth
        } as React.CSSProperties
      })}
      {...props}
      {...ouiaProps}
    >
      <MenuContent>{children}</MenuContent>
    </Menu>
  );
  const popperProps = {
    trigger: toggle(toggleRef),
    removeFindDomNode: true,
    popper: menu,
    isVisible: isOpen,
    zIndex
  };
  return appendTo === 'inline' ? (
    <div ref={containerRef}>
      <Popper {...popperProps} appendTo={containerRef.current || undefined} />
    </div>
  ) : (
    <Popper {...popperProps} appendTo={appendTo} />
  );
};

export const Dropdown = React.forwardRef((props: DropdownProps, ref: React.Ref<any>) => (
  <DropdownBase innerRef={ref} {...props} />
));
Dropdown.displayName = 'Dropdown';
