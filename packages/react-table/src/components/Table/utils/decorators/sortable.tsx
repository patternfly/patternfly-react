import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table';
import { IExtra, IFormatterValueType, ITransform } from '../../TableTypes';
import { SortColumn, SortByDirection } from '../../SortColumn';
import StarIcon from '@patternfly/react-icons/dist/esm/icons/star-icon';

export const sortableFavorites = (sort: any) => () =>
  sortable(<StarIcon aria-hidden />, {
    columnIndex: sort.columnIndex,
    className: styles.modifiers.favorite,
    ariaLabel: 'Sort favorites',
    column: {
      extraParams: {
        sortBy: sort.sortBy,
        onSort: sort?.onSort
      }
    }
  });

export const sortable: ITransform = (
  label: IFormatterValueType,
  { columnIndex, column, property, className, ariaLabel }: IExtra
) => {
  const {
    extraParams: { sortBy, onSort }
  } = column;

  const extraData = {
    columnIndex,
    column,
    property
  };

  const isSortedBy = sortBy && columnIndex === sortBy.index;
  /**
   * @param {React.MouseEvent} event - React mouse event
   */
  function sortClicked(event: React.MouseEvent) {
    let reversedDirection: SortByDirection;
    if (!isSortedBy) {
      reversedDirection = sortBy.defaultDirection ? (sortBy.defaultDirection as SortByDirection) : SortByDirection.asc;
    } else {
      reversedDirection = sortBy.direction === SortByDirection.asc ? SortByDirection.desc : SortByDirection.asc;
    }
    // tslint:disable-next-line:no-unused-expression
    onSort && onSort(event, columnIndex, reversedDirection, extraData);
  }

  return {
    className: css(styles.tableSort, isSortedBy && styles.modifiers.selected, className),
    'aria-sort': isSortedBy ? `${sortBy.direction}ending` : 'none',
    children: (
      <SortColumn
        isSortedBy={isSortedBy}
        sortDirection={isSortedBy ? sortBy.direction : ''}
        onSort={sortClicked}
        aria-label={ariaLabel}
      >
        {label as React.ReactNode}
      </SortColumn>
    )
  };
};
