import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table';
import { IExtra, IFormatterValueType, ITransform } from '../../Table';
import { SelectColumn } from '../../SelectColumn';
import checkStyles from '@patternfly/react-styles/css/components/Check/check';

export const selectable: ITransform = (
  label: IFormatterValueType,
  { rowIndex, columnIndex, rowData, column, property }: IExtra
) => {
  const {
    extraParams: { onSelect, allRowsSelected, rowLabeledBy = 'simple-node' }
  } = column;
  const extraData = {
    rowIndex,
    columnIndex,
    column,
    property
  };

  if (rowData && rowData.hasOwnProperty('parent') && !rowData.showSelect) {
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
          'aria-labelledby': rowLabeledBy + rowIndex
        }
      : {
          checked: allRowsSelected,
          'aria-label': 'Select all rows'
        }),
    ...(rowData &&
      rowData.disableCheckbox && {
        disabled: true,
        class: checkStyles.checkInput
      })
  };

  return {
    className: css(styles.tableCheck),
    component: 'td',
    isVisible: true,
    children: (
      <SelectColumn {...customProps} onSelect={selectClick} name={rowId !== -1 ? `checkrow${rowIndex}` : 'check-all'}>
        {label}
      </SelectColumn>
    )
  };
};
