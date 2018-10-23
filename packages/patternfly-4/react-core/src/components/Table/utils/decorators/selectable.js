import React from 'react';
import { css } from '@patternfly/react-styles';
import { tableCheck } from '@patternfly/patternfly-next/components/Table/table.css';
import SelectColumn from '../../SelectColumn';

export default (label, { column: { extraParams: { onSelect } }, rowIndex, rowData }) => {
  const rowId = rowIndex !== undefined ? rowIndex : -1;
  function selectClick(event) {
    let selected;
    if (rowIndex === undefined) {
      selected = event.target.checked;
    } else {
      selected = rowData && !rowData.selected;
    }
    onSelect && onSelect(event, selected, rowId);
  }
  const customProps = {
    ...rowId !== -1 ? {
      checked: rowData && !!rowData.selected
    } : {}
  }
  return ({
    className: css(tableCheck),
    component: 'td',
    scope: '',
    children: (
      <SelectColumn {...customProps} onSelect={selectClick} name={rowIndex ? `checkrow${rowIndex}` : 'check-all'}>{label}</SelectColumn>
    )
  });
}
