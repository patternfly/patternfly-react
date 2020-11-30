import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table';
import { IExtra, IFormatterValueType, ITransform } from '../../TableTypes';
import { FavoritesCell } from '../../FavoritesCell';

export const favoritable: ITransform = (
  value: IFormatterValueType,
  { rowIndex, columnIndex, rowData, column, property }: IExtra
) => {
  const {
    extraParams: { onFavorite }
  } = column;
  const extraData = {
    rowIndex,
    columnIndex,
    column,
    property
  };
  debugger;

  // this is a child row which should not display the favorites icon
//   if (rowData && rowData.hasOwnProperty('parent') && !rowData.fullWidth) {
//     return {
//       component: 'td',
//       isVisible: true
//     };
//   }
//   const rowId = rowIndex !== undefined ? rowIndex : -1;

  /**
   * @param {React.MouseEvent} event - Mouse event
   */
  function favoritesClick(event: React.MouseEvent<HTMLButtonElement>) {
    // tslint:disable-next-line:no-unused-expression
    onFavorite && onFavorite(event, rowIndex, rowData && !rowData.favorited, rowData, extraData);
  }

  return {
    className: css(styles.tableFavorite, rowData.favorited && styles.modifiers.favorited),
    // isVisible: !rowData.fullWidth,
    children: (
      <FavoritesCell
        // aria-labelledby={`${rowLabeledBy}${rowIndex} ${expandId}${rowIndex}`}
        onFavorite={favoritesClick}
        // id={expandId + rowIndex}
        isFavorited={rowData && rowData.favorited}
      >
        {value}
      </FavoritesCell>
    )
  };
};
