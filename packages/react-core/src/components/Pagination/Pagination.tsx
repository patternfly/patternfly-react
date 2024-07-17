import * as React from 'react';
import { ToggleTemplate, PaginationToggleTemplateProps } from './ToggleTemplate';
import styles from '@patternfly/react-styles/css/components/Pagination/pagination';
import { css } from '@patternfly/react-styles';
import { fillTemplate } from '../../helpers';
import { Navigation } from './Navigation';
import { PaginationOptionsMenu } from './PaginationOptionsMenu';
import { useOUIAProps, OUIAProps } from '../../helpers';
import { formatBreakpointMods } from '../../helpers/util';
import widthChars from '@patternfly/react-tokens/dist/esm/c_pagination__nav_page_select_c_form_control_width_chars';

export enum PaginationVariant {
  bottom = 'bottom',
  top = 'top'
}

const defaultPerPageOptions = [
  {
    title: '10',
    value: 10
  },
  {
    title: '20',
    value: 20
  },
  {
    title: '50',
    value: 50
  },
  {
    title: '100',
    value: 100
  }
];

/** Properties to customize the content and behavior of the pagination dropdown options. These
 * properties should be passed into the pagination component's perPageOptions property.
 */

export interface PerPageOptions {
  /** The text title of the option, which is rendered inside the pagination dropdown menu. */
  title?: string;
  /** The value of the option, which determines how many items are displayed per page. */
  value?: number;
}

/** Properties to customize various pagination titles. The following properties should be
 * passed into the pagination component's title property.
 */

export interface PaginationTitles {
  /** Accessible label for the input displaying the current page. */
  currPageAriaLabel?: string;
  /** The type or title of the items being paginated. */
  items?: string;
  /** The title of the pagination options menu. */
  itemsPerPage?: string;
  /** Label for the English word "of". */
  ofWord?: string;
  /** Accessible label for the options toggle. */
  optionsToggleAriaLabel?: string;
  /** The title of a page displayed beside the page number. */
  page?: string;
  /** The title of a page displayed beside the page number (plural form). */
  pages?: string;
  /** Accessible label for the pagination component. */
  paginationAriaLabel?: string;
  /** The suffix to be displayed after each option on the options menu dropdown. */
  perPageSuffix?: string;
  /** Accessible label for the button which moves to the first page. */
  toFirstPageAriaLabel?: string;
  /** Accessible label for the button which moves to the last page. */
  toLastPageAriaLabel?: string;
  /** Accessible label for the button which moves to the next page. */
  toNextPageAriaLabel?: string;
  /** Accessible label for the button which moves to the previous page. */
  toPreviousPageAriaLabel?: string;
}

export type OnSetPage = (
  event: React.MouseEvent | React.KeyboardEvent | MouseEvent,
  newPage: number,
  perPage?: number,
  startIdx?: number,
  endIdx?: number
) => void;

export type OnPerPageSelect = (
  event: React.MouseEvent | React.KeyboardEvent | MouseEvent,
  newPerPage: number,
  newPage: number,
  startIdx?: number,
  endIdx?: number
) => void;

/** The main pagination component. */

export interface PaginationProps extends React.HTMLProps<HTMLDivElement>, OUIAProps {
  /** What should be rendered inside the pagination. */
  children?: React.ReactNode;
  /** Additional classes for the pagination container. */
  className?: string;
  /** Indicate whether to show last full page of results when user selects perPage value
   * greater than remaining rows.
   */
  isLastFullPageShown?: boolean;
  /** Direction of dropdown context menu. */
  dropDirection?: 'up' | 'down';
  /** Page to start at. */
  firstPage?: number;
  /** Flag indicating that pagination should use page insets. */
  usePageInsets?: boolean;
  /** Insets at various breakpoints. */
  inset?: {
    default?: 'insetNone' | 'insetSm' | 'insetMd' | 'insetLg' | 'insetXl' | 'inset2xl';
    sm?: 'insetNone' | 'insetSm' | 'insetMd' | 'insetLg' | 'insetXl' | 'inset2xl';
    md?: 'insetNone' | 'insetSm' | 'insetMd' | 'insetLg' | 'insetXl' | 'inset2xl';
    lg?: 'insetNone' | 'insetSm' | 'insetMd' | 'insetLg' | 'insetXl' | 'inset2xl';
    xl?: 'insetNone' | 'insetSm' | 'insetMd' | 'insetLg' | 'insetXl' | 'inset2xl';
    '2xl'?: 'insetNone' | 'insetSm' | 'insetMd' | 'insetLg' | 'insetXl' | 'inset2xl';
  };
  /** Flag indicating if pagination is disabled. */
  isDisabled?: boolean;
  /** Flag indicating if pagination is compact. */
  isCompact?: boolean;
  /** Flag indicating if pagination should not be sticky on mobile. */
  isStatic?: boolean;
  /** Flag indicating if pagination should stick to its position (based on variant). */
  isSticky?: boolean;
  /** Total number of items. */
  itemCount?: number;
  /** Last index of items on current page. */
  itemsEnd?: number;
  /** First index of items on current page. */
  itemsStart?: number;
  /** Start index of rows to display, used in place of providing page. */
  offset?: number;
  /** Current page number. */
  page?: number;
  /** Number of items per page. */
  perPage?: number;
  /** Array of the number of items per page options. */
  perPageOptions?: PerPageOptions[];
  /** Function called when user clicks on navigate to first page. */
  onFirstClick?: (event: React.SyntheticEvent<HTMLButtonElement>, page: number) => void;
  /** Function called when user clicks on navigate to last page. */
  onLastClick?: (event: React.SyntheticEvent<HTMLButtonElement>, page: number) => void;
  /** Function called when user clicks on navigate to next page. */
  onNextClick?: (event: React.SyntheticEvent<HTMLButtonElement>, page: number) => void;
  /** Function called when user inputs page number. */
  onPageInput?: (event: React.KeyboardEvent<HTMLInputElement>, page: number) => void;
  /** Function called when user selects number of items per page. */
  onPerPageSelect?: OnPerPageSelect;
  /** Function called when user clicks on navigate to previous page. */
  onPreviousClick?: (event: React.SyntheticEvent<HTMLButtonElement>, page: number) => void;
  /** Function called when user sets page. */
  onSetPage?: OnSetPage;
  /** Object with titles to display in pagination. */
  titles?: PaginationTitles;
  /** This will be shown in pagination toggle span. You can use firstIndex, lastIndex,
   * itemCount, itemsTitle, and/or ofWord props.
   */
  toggleTemplate?: ((props: PaginationToggleTemplateProps) => React.ReactElement) | string;
  /** Position where pagination is rendered. */
  variant?: 'top' | 'bottom' | PaginationVariant;
  /** Id to ideintify widget on page. */
  widgetId?: string;
  /** Value to overwrite the randomly generated data-ouia-component-id.*/
  ouiaId?: number | string;
  /** Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false. */
  ouiaSafe?: boolean;
  /** @beta The container to append the pagination options menu to. */
  menuAppendTo?: HTMLElement | (() => HTMLElement) | 'inline';
}

const handleInputWidth = (lastPage: number, node: HTMLDivElement) => {
  if (!node) {
    return;
  }
  const len = String(lastPage).length;
  if (len >= 3) {
    node.style.setProperty(widthChars.name, `${len}`);
  } else {
    node.style.setProperty(widthChars.name, '2');
  }
};

export const Pagination: React.FunctionComponent<PaginationProps> = ({
  children,
  className = '',
  variant = PaginationVariant.top,
  isDisabled = false,
  isCompact = false,
  isSticky = false,
  isStatic = false,
  dropDirection: dropDirectionProp,
  toggleTemplate,
  perPage = defaultPerPageOptions[0].value,
  titles = {
    items: '',
    page: '',
    pages: '',
    itemsPerPage: 'Items per page',
    perPageSuffix: 'per page',
    toFirstPageAriaLabel: 'Go to first page',
    toPreviousPageAriaLabel: 'Go to previous page',
    toLastPageAriaLabel: 'Go to last page',
    toNextPageAriaLabel: 'Go to next page',
    optionsToggleAriaLabel: '',
    currPageAriaLabel: 'Current page',
    paginationAriaLabel: 'Pagination',
    ofWord: 'of'
  },
  firstPage = 1,
  page: pageProp = 1,
  offset = null,
  isLastFullPageShown = false,
  itemsStart = null,
  itemsEnd = null,
  itemCount,
  perPageOptions = defaultPerPageOptions,
  widgetId = 'options-menu',
  onSetPage = () => undefined,
  onPerPageSelect = () => undefined,
  onFirstClick = () => undefined,
  onPreviousClick = () => undefined,
  onNextClick = () => undefined,
  onPageInput = () => undefined,
  onLastClick = () => undefined,
  ouiaId,
  ouiaSafe = true,
  usePageInsets,
  inset,
  menuAppendTo,
  ...props
}: PaginationProps) => {
  const paginationRef = React.useRef<HTMLDivElement>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const getLastPage = () =>
    // when itemCount is not known let's set lastPage as page+1 as we don't know the total count
    itemCount || itemCount === 0 ? Math.ceil(itemCount / perPage) || 0 : page + 1;

  React.useEffect(() => {
    const node = paginationRef.current;
    handleInputWidth(getLastPage(), node);
  }, [perPage, itemCount]);

  const dropDirection = dropDirectionProp || (variant === 'bottom' && !isStatic ? 'up' : 'down');

  let page = pageProp;
  if (offset !== null) {
    itemsStart = offset + 1;
    page = Math.max(Math.ceil(itemsStart / perPage), 1);
    itemsEnd = offset + perPage;
  }

  const lastPage = getLastPage();
  let firstIndex = (page - 1) * perPage + 1;
  let lastIndex = page * perPage;

  if (itemCount || itemCount === 0) {
    firstIndex = itemCount <= 0 ? 0 : (page - 1) * perPage + 1;

    if (page < firstPage && itemCount > 0) {
      page = firstPage;
    } else if (page > lastPage) {
      page = lastPage;
    }

    if (itemCount >= 0) {
      lastIndex = page === lastPage || itemCount === 0 ? itemCount : page * perPage;
    }
  }

  const PaginationToggleTemplateProps = {
    firstIndex,
    lastIndex,
    itemCount,
    itemsTitle: titles.items,
    ofWord: titles.ofWord
  };

  return (
    <div
      ref={paginationRef}
      className={css(
        styles.pagination,
        variant === PaginationVariant.bottom && styles.modifiers.bottom,
        usePageInsets && styles.modifiers.pageInsets,
        formatBreakpointMods(inset, styles),
        isStatic && styles.modifiers.static,
        isSticky && styles.modifiers.sticky,
        className
      )}
      {...(widgetId && { id: `${widgetId}-${variant}-pagination` })}
      {...useOUIAProps(Pagination.displayName, ouiaId, ouiaSafe, variant)}
      {...props}
    >
      {variant === PaginationVariant.top && (
        <div className={css(styles.paginationTotalItems)}>
          {toggleTemplate &&
            typeof toggleTemplate === 'string' &&
            fillTemplate(toggleTemplate, PaginationToggleTemplateProps)}
          {toggleTemplate &&
            typeof toggleTemplate !== 'string' &&
            (toggleTemplate as (props: PaginationToggleTemplateProps) => React.ReactElement)(
              PaginationToggleTemplateProps
            )}
          {!toggleTemplate && (
            <ToggleTemplate
              firstIndex={firstIndex}
              lastIndex={lastIndex}
              itemCount={itemCount}
              itemsTitle={titles.items}
              ofWord={titles.ofWord}
            />
          )}
        </div>
      )}
      {perPageOptions && perPageOptions.length > 0 && (
        <PaginationOptionsMenu
          itemsPerPageTitle={titles.itemsPerPage}
          perPageSuffix={titles.perPageSuffix}
          itemsTitle={isCompact ? '' : titles.items}
          optionsToggleAriaLabel={titles.optionsToggleAriaLabel}
          perPageOptions={perPageOptions}
          firstIndex={itemsStart !== null ? itemsStart : firstIndex}
          lastIndex={itemsEnd !== null ? itemsEnd : lastIndex}
          ofWord={titles.ofWord}
          isLastFullPageShown={isLastFullPageShown}
          itemCount={itemCount}
          page={page}
          perPage={perPage}
          lastPage={lastPage}
          onPerPageSelect={onPerPageSelect}
          dropDirection={dropDirection}
          widgetId={`${widgetId}-${variant}`}
          toggleTemplate={toggleTemplate}
          isDisabled={isDisabled}
          containerRef={containerRef}
          appendTo={menuAppendTo}
        />
      )}
      <Navigation
        pagesTitle={titles.page}
        pagesTitlePlural={titles.pages}
        toLastPageAriaLabel={titles.toLastPageAriaLabel}
        toPreviousPageAriaLabel={titles.toPreviousPageAriaLabel}
        toNextPageAriaLabel={titles.toNextPageAriaLabel}
        toFirstPageAriaLabel={titles.toFirstPageAriaLabel}
        currPageAriaLabel={titles.currPageAriaLabel}
        paginationAriaLabel={titles.paginationAriaLabel}
        ofWord={titles.ofWord}
        page={itemCount && itemCount <= 0 ? 0 : page}
        perPage={perPage}
        itemCount={itemCount}
        firstPage={itemsStart !== null ? itemsStart : 1}
        lastPage={lastPage}
        onSetPage={onSetPage}
        onFirstClick={onFirstClick}
        onPreviousClick={onPreviousClick}
        onNextClick={onNextClick}
        onLastClick={onLastClick}
        onPageInput={onPageInput}
        isDisabled={isDisabled}
        isCompact={isCompact}
      />
      {children}
    </div>
  );
};

Pagination.displayName = 'Pagination';
