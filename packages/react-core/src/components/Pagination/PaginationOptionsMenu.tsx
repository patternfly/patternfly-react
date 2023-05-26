import * as React from 'react';
import { css } from '@patternfly/react-styles';
import { Menu, MenuContent, MenuList, MenuItem } from '../Menu';
import { MenuToggle } from '../MenuToggle';
import { Popper } from '../../helpers/Popper/Popper';
import { PaginationToggleTemplateProps, ToggleTemplate } from './ToggleTemplate';
import { PerPageOptions, OnPerPageSelect } from './Pagination';
import { fillTemplate } from '../../helpers';

export interface PaginationOptionsMenuProps extends React.HTMLProps<HTMLDivElement> {
  /** Custom class name added to the pagination options menu. */
  className?: string;
  /** Id added to the title of the pagination options menu. */
  widgetId?: string;
  /** Flag indicating if pagination options menu is disabled. */
  isDisabled?: boolean;
  /** Menu will open up or open down from the options menu toggle. */
  dropDirection?: 'up' | 'down';
  /** Minimum width of the pagination options menu. If set to "trigger", the minimum width will be set to the toggle width. */
  minWidth?: string | 'trigger';
  /** Array of titles and values which will be the options on the options menu dropdown. */
  perPageOptions?: PerPageOptions[];
  /** The title of the pagination options menu. */
  itemsPerPageTitle?: string;
  /** Current page number. */
  page?: number;
  /** The suffix to be displayed after each option on the options menu dropdown. */
  perPageSuffix?: string;
  /** The type or title of the items being paginated. */
  itemsTitle?: string;
  /** Accessible label for the options toggle. */
  optionsToggleAriaLabel?: string;
  /** The total number of items being paginated. */
  itemCount?: number;
  /** The first index of the items being paginated. */
  firstIndex?: number;
  /** The last index of the items being paginated. */
  lastIndex?: number;
  /** Flag to indicate whether to show last full page of results when user selects perPage
   * value that is greater than remaining rows.
   */
  isLastFullPageShown?: boolean;
  /** The number of items to be displayed per page. */
  perPage?: number;
  /** The number of the last page. */
  lastPage?: number;
  /** This will be shown in pagination toggle span. You can use firstIndex, lastIndex,
   * itemCount, and/or itemsTitle props.
   */
  toggleTemplate: ((props: PaginationToggleTemplateProps) => React.ReactElement) | string;
  /** Function called when user selects number of items per page. */
  onPerPageSelect?: OnPerPageSelect;
  /** Label for the English word "of". */
  ofWord?: string;
}

export const PaginationOptionsMenu: React.FunctionComponent<PaginationOptionsMenuProps> = ({
  className,
  widgetId,
  page: pageProp,
  itemCount,
  isDisabled = false,
  minWidth,
  dropDirection = 'down',
  perPageOptions = [] as PerPageOptions[],
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  itemsPerPageTitle = 'Items per page',
  perPageSuffix = 'per page',
  optionsToggleAriaLabel,
  ofWord = 'of',
  perPage = 0,
  firstIndex = 0,
  lastIndex = 0,
  isLastFullPageShown = false,
  itemsTitle = 'items',
  toggleTemplate,
  onPerPageSelect = () => null as any
}: PaginationOptionsMenuProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleRef = React.useRef<HTMLButtonElement>(null);
  const menuRef = React.useRef<HTMLDivElement>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const onToggle = () => {
    setIsOpen((prevState) => !prevState);
  };

  const onSelect = () => {
    setIsOpen((prevState) => !prevState);
    toggleRef.current?.focus();
  };

  const handleNewPerPage = (_evt: React.MouseEvent | React.KeyboardEvent | MouseEvent, newPerPage: number) => {
    let newPage = pageProp;

    while (Math.ceil(itemCount / newPerPage) < newPage) {
      newPage--;
    }

    if (isLastFullPageShown) {
      if (itemCount / newPerPage !== newPage) {
        while (newPage > 1 && itemCount - newPerPage * newPage < 0) {
          newPage--;
        }
      }
    }
    const startIdx = (newPage - 1) * newPerPage;
    const endIdx = newPage * newPerPage;
    return onPerPageSelect(_evt, newPerPage, newPage, startIdx, endIdx);
  };

  React.useEffect(() => {
    const handleMenuKeys = (event: KeyboardEvent) => {
      // Close the menu on tab or escape
      if (
        (isOpen && menuRef.current?.contains(event.target as Node)) ||
        toggleRef.current?.contains(event.target as Node)
      ) {
        if (event.key === 'Escape' || event.key === 'Tab') {
          setIsOpen(false);
          toggleRef.current?.focus();
        }
      }
    };

    const handleClick = (event: MouseEvent) => {
      // If the event is on the toggle and was fired via keyboard 'click', focus the first
      // non-disabled menu item
      // https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/detail
      if (event.detail === 0 && isOpen && toggleRef.current?.contains(event.target as Node)) {
        setTimeout(() => {
          const firstElement = menuRef?.current?.querySelector('li button:not(:disabled)');
          firstElement && (firstElement as HTMLElement).focus();
        }, 0);
      }

      // If the event is not on the toggle, close the menu
      if (
        isOpen &&
        !toggleRef?.current?.contains(event.target as Node) &&
        !menuRef.current?.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleMenuKeys);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('keydown', handleMenuKeys);
      window.removeEventListener('click', handleClick);
    };
  }, [isOpen, menuRef]);

  const renderItems = () =>
    perPageOptions.map(({ value, title }) => (
      <MenuItem
        key={value}
        data-action={`per-page-${value}`}
        isSelected={perPage === value}
        onClick={(event) => handleNewPerPage(event, value)}
      >
        {title}
        {` ${perPageSuffix}`}
      </MenuItem>
    ));

  const toggle = (
    <MenuToggle
      ref={toggleRef}
      onClick={onToggle}
      {...(optionsToggleAriaLabel && { 'aria-label': optionsToggleAriaLabel })}
      isDisabled={isDisabled || (itemCount && itemCount <= 0)}
      isExpanded={isOpen}
      {...(widgetId && { id: `${widgetId}-toggle` })}
      variant="plainText"
      aria-haspopup="listbox"
    >
      {toggleTemplate &&
        typeof toggleTemplate === 'string' &&
        fillTemplate(toggleTemplate, { firstIndex, lastIndex, ofWord, itemCount, itemsTitle })}
      {toggleTemplate &&
        typeof toggleTemplate !== 'string' &&
        (toggleTemplate as (props: PaginationToggleTemplateProps) => React.ReactElement)({
          firstIndex,
          lastIndex,
          ofWord,
          itemCount,
          itemsTitle
        })}
      {!toggleTemplate && (
        <ToggleTemplate
          firstIndex={firstIndex}
          lastIndex={lastIndex}
          ofWord={ofWord}
          itemCount={itemCount}
          itemsTitle={itemsTitle}
        />
      )}
    </MenuToggle>
  );

  const menu = (
    <Menu className={css(className)} onSelect={onSelect} ref={menuRef}>
      <MenuContent>
        <MenuList>{renderItems()}</MenuList>
      </MenuContent>
    </Menu>
  );

  return (
    <div ref={containerRef}>
      <Popper
        trigger={toggle}
        triggerRef={toggleRef}
        popper={menu}
        popperRef={menuRef}
        isVisible={isOpen}
        direction={dropDirection}
        appendTo={containerRef.current || undefined}
        minWidth={minWidth !== undefined ? minWidth : 'revert'}
      />
    </div>
  );
};

PaginationOptionsMenu.displayName = 'PaginationOptionsMenu';
