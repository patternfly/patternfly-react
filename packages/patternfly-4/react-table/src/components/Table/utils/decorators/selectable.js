import React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table';
import SelectColumn from '../../SelectColumn';

export default (label, { rowIndex, columnIndex, rowData, column, property }) => {
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

  function selectClick(event) {
    const selected = rowIndex === undefined ? event.target.checked : rowData && !rowData.selected;
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
