import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/OptionsMenu/options-menu';
import paginationStyles from '@patternfly/react-styles/css/components/Pagination/pagination';
import { css } from '@patternfly/react-styles';
import { Dropdown, DropdownItem, DropdownDirection } from '../Dropdown';
import { CheckIcon } from '@patternfly/react-icons';
import { OptionsToggle } from './OptionsToggle';
import { ToggleTemplateProps } from './ToggleTemplate';
import { PerPageOptions } from './Pagination';

export interface PaginationOptionsMenuProps extends React.HTMLProps<HTMLDivElement> {
  /** Custom class name added to the Pagination Options Menu */
  className?: string;
  /** Id added to the title of the Pagination Options Menu */
  widgetId?: string;
  /** Menu will open up or open down from the Options menu toggle */
  dropDirection?: 'up' | 'down';
  /** Array of titles and values which will be the options on the Options Menu dropdown */
  perPageOptions?: PerPageOptions[];
  /** The Title of the Pagination Options Menu */
  itemsPerPageTitle?: string;
  /** The suffix to be displayed after each option on the Options Menu dropdown */
  perPageSuffix?: string;
  /** The type or title of the items being paginated */
  itemsTitle?: string;
  /** The text to be displayed on the Options Toggle */
  optionsToggle?: string;
  /** The total number of items being paginated */
  itemCount?: number;
  /** The first index of the items being paginated */
  firstIndex?: number;
  /** The last index of the items being paginated */
  lastIndex?: number;
  /** The number of items to be displayed per page */
  perPage?: number;
  /** This will be shown in pagination toggle span. You can use firstIndex, lastIndex, itemCount, itemsTitle props. */
  toggleTemplate?: ((props: ToggleTemplateProps) => React.ReactElement) | string;
  /** Function called when user selects number of items per page. */
  onPerPageSelect?: (event: React.MouseEvent | React.KeyboardEvent | MouseEvent, perPage: number) => void;
}

interface PaginationOptionsMenuState {
  isOpen: boolean;
}

export class PaginationOptionsMenu extends React.Component<PaginationOptionsMenuProps, PaginationOptionsMenuState> {
  private parentRef = React.createRef<HTMLDivElement>();
  static defaultProps = {
   className: '',
   widgetId: '',
   dropDirection: DropdownDirection.down,
   perPageOptions: [] as PerPageOptions[],
   itemsPerPageTitle: 'Items per page',
   perPageSuffix: 'per page',
   optionsToggle: 'Select',
   perPage: 0,
   firstIndex: 0,
   lastIndex: 0,
   itemCount: 0,
   itemsTitle: 'items',
   toggleTemplate: ({firstIndex, lastIndex, itemCount, itemsTitle}:ToggleTemplateProps) => (
     <React.Fragment>
       <strong>
         {firstIndex} - {lastIndex}
       </strong>{' '}
       of<strong>{itemCount}</strong> {itemsTitle}
     </React.Fragment>
   ),
   onPerPageSelect: () => null as any
 };

  constructor(props: PaginationOptionsMenuProps){
    super(props);
    this.state = {
      isOpen: false
    };
  };

  onToggle = (isOpen: boolean) => {
    this.setState({ isOpen });
  };

  onSelect = () => {
    this.setState((prevState: PaginationOptionsMenuState) => {
      return { isOpen: !prevState.isOpen }
    });
  };

  renderItems = () => {
    const { perPageOptions, perPage, onPerPageSelect, perPageSuffix } = this.props;

    return perPageOptions.map(({ value, title }) => (
      <DropdownItem
        key={value}
        component="button"
        data-action={`per-page-${value}`}
        className={css(styles.optionsMenuMenuItem, perPage === value && 'pf-m-selected')}
        onClick={event => onPerPageSelect(event, value)}
      >
        {title}
        <span className={css(paginationStyles.paginationMenuText)}>{` ${perPageSuffix}`}</span>
        {perPage === value && (
          <i className={css(styles.optionsMenuMenuItemIcon)}>
            <CheckIcon />
          </i>
        )}
      </DropdownItem>
    ));
  };

  render() {
    const { className, widgetId, itemsPerPageTitle, dropDirection, optionsToggle, perPageOptions, toggleTemplate, firstIndex, lastIndex, itemCount, itemsTitle } = this.props;
    const { isOpen } = this.state;

    return (
      <div
        className={css(styles.optionsMenu, className)}
        ref={this.parentRef}
      >
        <span id={`${widgetId}-label`} hidden>
          {itemsPerPageTitle}:
        </span>
        <Dropdown
          direction={dropDirection}
          onSelect={this.onSelect}
          isOpen={isOpen}
          toggle={
            <OptionsToggle
              optionsToggle={optionsToggle}
              showToggle={perPageOptions && perPageOptions.length > 0}
              onToggle={this.onToggle}
              isOpen={isOpen}
              widgetId={widgetId}
              firstIndex={firstIndex}
              lastIndex={lastIndex}
              itemCount={itemCount}
              itemsTitle={itemsTitle}
              toggleTemplate={toggleTemplate}
              parentRef={this.parentRef.current}
            />
          }
          dropdownItems={this.renderItems()}
          isPlain
        />
      </div>
    );
  }
}
