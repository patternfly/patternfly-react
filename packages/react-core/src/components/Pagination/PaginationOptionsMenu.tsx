import * as React from 'react';
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
  defaultToFullPage?: boolean;
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

interface PaginationOptionsMenuState {
  isOpen: boolean;
}

export class PaginationOptionsMenu extends React.Component<PaginationOptionsMenuProps, PaginationOptionsMenuState> {
  static displayName = 'PaginationOptionsMenu';
  private toggleRef = React.createRef<HTMLButtonElement>();
  private menuRef = React.createRef<HTMLDivElement>();
  private containerRef = React.createRef<HTMLDivElement>();
  static defaultProps: PaginationOptionsMenuProps = {
    className: '',
    widgetId: '',
    isDisabled: false,
    dropDirection: 'down',
    perPageOptions: [] as PerPageOptions[],
    itemsPerPageTitle: 'Items per page',
    perPageSuffix: 'per page',
    optionsToggleAriaLabel: '',
    ofWord: 'of',
    perPage: 0,
    firstIndex: 0,
    lastIndex: 0,
    defaultToFullPage: false,
    itemsTitle: 'items',
    toggleTemplate: ToggleTemplate,
    onPerPageSelect: () => null as any
  };

  constructor(props: PaginationOptionsMenuProps) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  onToggle = () => {
    this.setState((prevState: PaginationOptionsMenuState) => ({ isOpen: !prevState.isOpen }));
  };

  onSelect = () => {
    this.setState((prevState: PaginationOptionsMenuState) => ({ isOpen: !prevState.isOpen }));
    this.toggleRef.current?.focus();
  };

  handleNewPerPage = (_evt: React.MouseEvent | React.KeyboardEvent | MouseEvent, newPerPage: number) => {
    const { page, onPerPageSelect, itemCount, defaultToFullPage } = this.props;
    let newPage = page;

    while (Math.ceil(itemCount / newPerPage) < newPage) {
      newPage--;
    }

    if (defaultToFullPage) {
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

  handleMenuKeys = (event: KeyboardEvent) => {
    const { isOpen } = this.state;
    // Close the menu on tab or escape
    if (
      (isOpen && this.menuRef.current?.contains(event.target as Node)) ||
      this.toggleRef.current?.contains(event.target as Node)
    ) {
      if (event.key === 'Escape' || event.key === 'Tab') {
        this.setState({ isOpen: false });
        this.toggleRef.current?.focus();
      }
    }
  };

  handleClick = (event: MouseEvent) => {
    const { isOpen } = this.state;

    // If the event is on the toggle and was fired via keyboard 'click', focus the first
    // non-disabled menu item
    // https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/detail
    if (event.detail === 0 && isOpen && this.toggleRef.current?.contains(event.target as Node)) {
      setTimeout(() => {
        const firstElement = this.menuRef?.current?.querySelector('li button:not(:disabled)');
        firstElement && (firstElement as HTMLElement).focus();
      }, 0);
    }

    // If the event is not on the toggle, close the menu
    if (
      isOpen &&
      !this.toggleRef?.current?.contains(event.target as Node) &&
      !this.menuRef.current?.contains(event.target as Node)
    ) {
      this.setState({ isOpen: false });
    }
  };

  componentDidMount = () => {
    window.addEventListener('keydown', this.handleMenuKeys);
    window.addEventListener('click', this.handleClick);
  };

  componentWillUnmount = () => {
    window.removeEventListener('keydown', this.handleMenuKeys);
    window.removeEventListener('click', this.handleClick);
  };

  renderItems = () => {
    const { perPageOptions, perPage, perPageSuffix } = this.props;

    return perPageOptions.map(({ value, title }) => (
      <MenuItem
        key={value}
        data-action={`per-page-${value}`}
        isSelected={perPage === value}
        onClick={event => this.handleNewPerPage(event, value)}
      >
        {title}
        {` ${perPageSuffix}`}
      </MenuItem>
    ));
  };

  render() {
    const {
      widgetId,
      isDisabled,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      itemsPerPageTitle,
      dropDirection,
      optionsToggleAriaLabel,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      perPageOptions,
      toggleTemplate: ToggleTemplate,
      firstIndex,
      lastIndex,
      itemCount,
      itemsTitle,
      ofWord
    } = this.props;
    const { isOpen } = this.state;

    const toggle = (
      <MenuToggle
        ref={this.toggleRef}
        onClick={this.onToggle}
        aria-label={optionsToggleAriaLabel}
        isDisabled={isDisabled || (itemCount && itemCount <= 0)}
        isExpanded={isOpen}
        {...(widgetId && { id: `${widgetId}-toggle` })}
        variant="plainText"
        aria-haspopup="listbox"
      >
        {typeof ToggleTemplate === 'string' ? (
          fillTemplate(ToggleTemplate, { firstIndex, lastIndex, ofWord, itemCount, itemsTitle })
        ) : (
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
      <Menu onSelect={this.onSelect} ref={this.menuRef}>
        <MenuContent>
          <MenuList>{this.renderItems()}</MenuList>
        </MenuContent>
      </Menu>
    );

    return (
      <div ref={this.containerRef}>
        <Popper
          trigger={toggle}
          popper={menu}
          isVisible={isOpen}
          direction={dropDirection}
          appendTo={this.containerRef.current || undefined}
          popperMatchesTriggerWidth={false}
          removeFindDomNode
        />
      </div>
    );
  }
}
