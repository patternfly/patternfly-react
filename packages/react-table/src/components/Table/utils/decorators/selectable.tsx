import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table';
import { IExtra, IFormatterValueType, ITransform } from '../../Table';
import { SelectColumn, RowSelectVariant } from '../../SelectColumn';
import checkStyles from '@patternfly/react-styles/css/components/Check/check';

export const selectable: ITransform = (
  label: IFormatterValueType,
  { rowIndex, columnIndex, rowData, column, property }: IExtra
) => {
  const {
    extraParams: { onSelect, selectVariant, allRowsSelected }
  } = column;
  const extraData = {
    rowIndex,
    columnIndex,
    column,
    property
  };

  if (rowData && rowData.hasOwnProperty('parent') && !rowData.showSelect && !rowData.fullWidth) {
    return {
      component: 'td',
      isVisible: true
    };
  }
  const rowId = rowIndex !== undefined ? rowIndex : -1;

  /**
   * @param {React.FormEvent} event - React form event
   */
  function selectClick(event: React.FormEvent<HTMLInputElement>) {
    const selected = rowIndex === undefined ? event.currentTarget.checked : rowData && !rowData.selected;
    // tslint:disable-next-line:no-unused-expression
    onSelect && onSelect(event, selected, rowId, rowData, extraData);
  }
  const customProps = {
    ...(rowId !== -1
      ? {
          checked: rowData && !!rowData.selected,
          'aria-label': `Select row ${rowIndex}`
        }
      : {
          checked: allRowsSelected,
          'aria-label': 'Select all rows'
        }),
    ...(rowData &&
      (rowData.disableCheckbox || rowData.disableSelection) && {
        disabled: true,
        className: checkStyles.checkInput
      })
  };
  const selectName =
    rowId !== -1 ? (selectVariant === RowSelectVariant.checkbox ? `checkrow${rowIndex}` : 'radioGroup') : 'check-all';

  return {
    className: css(styles.tableCheck),
    component: 'td',
    isVisible: !rowData || !rowData.fullWidth,
    children: (
      <SelectColumn
        {...customProps}
        selectVariant={selectVariant as RowSelectVariant}
        onSelect={selectClick}
        name={selectName}
      >
        {label}
      </SelectColumn>
    )
  };
};
