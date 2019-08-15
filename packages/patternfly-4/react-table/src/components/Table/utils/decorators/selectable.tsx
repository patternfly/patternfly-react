import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table';
import { IExtra, IFormatterValueType } from '../../Table';
import { SelectColumn } from '../../SelectColumn';

export const selectable = (label: IFormatterValueType, { rowIndex, columnIndex, rowData, column, property }: IExtra) => {
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
      isVisible: true,
      scope: ''
    };
  }
  const rowId = rowIndex !== undefined ? rowIndex : -1;

  
  function selectClick(event: React.ChangeEvent<HTMLInputElement>) {
    const selected = rowIndex === undefined ? event.target.checked : rowData && !rowData.selected;
    // todo: change event type to React.FormEvent<HTMLInputElement> in the future, breaking change a.t.m.
    // tslint:disable-next-line:no-unused-expression
    onSelect && onSelect((event as unknown) as React.MouseEvent, selected, rowId, rowData, extraData);
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
        })
  };

  return {
    className: css(styles.tableCheck),
    component: 'td',
    scope: '',
    isVisible: true,
    children: (
      <SelectColumn {...customProps} onSelect={selectClick} name={rowId !== -1 ? `checkrow${rowIndex}` : 'check-all'}>
        {label}
      </SelectColumn>
    )
  };
};
