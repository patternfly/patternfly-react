import React from 'react';
import PropTypes from 'prop-types';
import styles from '@patternfly/patternfly-next/components/Pagination/pagination.css';
import { css } from '@patternfly/react-styles';
import { DropdownDirection } from '../Dropdown';
import Navigation from './Navigation';
import OptionsMenu from './OptionsMenu';

const perPageOptions = [
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
]

export const PaginationVariant = {
  top: 'top',
  bottom: 'bottom'
}

const propTypes = {
  /** TODO */
  variant: PropTypes.oneOf(Object.values(PaginationVariant)),
  /** TODO */
  perPage: PropTypes.number,
  /** TODO */
  perPageOptions: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.node,
    value: PropTypes.number
  })),
  /** TODO */
  itemCount: PropTypes.number.isRequired,
  /** TODO */
  page: PropTypes.number,
  /** TODO */
  itemsStart: PropTypes.number,
  /** TODO */
  itemsEnd: PropTypes.number,
  /** TODO */
  amountOfPages: PropTypes.number,
  /** TODO */
  widgetId: PropTypes.string,
  /** TODO */
  dropDirection: PropTypes.oneOf(Object.values(DropdownDirection)),
  /** TODO */
  titles: PropTypes.shape({
    page: PropTypes.string,
    items: PropTypes.string
  }),
  /** TODO */
  onSetPage: PropTypes.func,
  /** TODO */
  onFirstClick: PropTypes.func,
  /** TODO */
  onPreviousClick: PropTypes.func,
  /** TODO */
  onNextClick: PropTypes.func,
  /** TODO */
  onLastClick: PropTypes.func,
  /** TODO */
  onPageInput: PropTypes.func,
  /** TODO */
  onPerPageSelect: PropTypes.func
}

const defaultProps = {
  variant: PaginationVariant.top,
  titles: {
    items: 'items',
    pages: 'pages'
  },
  page: 1,
  perPageOptions,
  onSetPage: () => undefined,
  onPerPageSelect: () => undefined,
  onFirstClick: () => undefined,
  onPreviousClick: () => undefined,
  onNextClick: () => undefined,
  onLastClick: () => undefined
}

const Pagination = ({
  perPage,
  page,
  className,
  children,
  itemsStart,
  itemsEnd,
  variant,
  titles,
  itemCount,
  dropDirection,
  perPageOptions,
  onPerPageSelect,
  onSetPage,
  onFirstClick,
  onPreviousClick,
  onNextClick,
  onLastClick,
  widgetId,
  ...props
}) => {
  const lastPage = Math.ceil(itemCount / perPage);
  const firstIndex = itemCount === 0 ? 0 : (page - 1) * perPage + 1;
  const lastIndex = itemCount === 0 ? 0 : page === lastPage ? itemCount : page * perPage;
  return (
    <div className={
        css(styles.pagination, variant === PaginationVariant.bottom && styles.modifiers.footer , className)
      }
      {...props}
    >
      {
        variant === PaginationVariant.top &&
        <div className={css(styles.paginationTotalItems)}>
          {`${itemCount} ${titles.items}`}
        </div>
      }
      <OptionsMenu
        titles={titles}
        perPageOptions={perPageOptions}
        firstIndex={itemsStart !== undefined ? itemsStart : firstIndex}
        lastIndex={itemsEnd !== undefined ? itemsEnd : lastIndex}
        itemCount={itemCount}
        perPage={perPage}
        onPerPageSelect={onPerPageSelect}
        dropDirection={dropDirection}
        widgetId={widgetId || 'pagination-options-menu'}
      />
      <Navigation
        titles={titles}
        page={page}
        lastPage={lastPage}
        onSetPage={onSetPage}
        onFirstClick={onFirstClick}
        onPreviousClick={onPreviousClick}
        onNextClick={onNextClick}
        onLastClick={onLastClick}
          />
      {children}
    </div>
  )
}

Pagination.propTypes = propTypes;
Pagination.defaultProps = {
  ...defaultProps,
  perPage: defaultProps.perPageOptions[0].value
};
export default Pagination;
