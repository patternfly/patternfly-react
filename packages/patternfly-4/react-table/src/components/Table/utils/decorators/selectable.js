import React from 'react';
import { css } from '@patternfly/react-styles';
import { tableCheck } from '@patternfly/patternfly-next/components/Table/table.css';
import SelectColumn from '../../SelectColumn';

export default (label, { column: { extraParams: { onSelect, rowLabeledBy = 'simple-node' } }, rowIndex, rowData }) => {
  const rowId = rowIndex !== undefined ? rowIndex : -1;
  function selectClick(event) {
    let selected = rowIndex === undefined ? event.target.checked : rowData && !rowData.selected;
    onSelect && onSelect(selected, selected, rowId);
  }
  const customProps = {
    ...rowId !== -1 ? {
      checked: rowData && !!rowData.selected,
      'aria-labelledby': rowLabeledBy + rowIndex
    } : {
        'aria-label': 'Select all rows'
      }
  }

  return ({
    className: css(tableCheck),
    component: 'td',
    scope: '',
    children: (
      <SelectColumn {...customProps} onSelect={selectClick} name={rowId !== -1 ? `checkrow${rowIndex}` : 'check-all'}>{label}</SelectColumn>
    )
  });
}
