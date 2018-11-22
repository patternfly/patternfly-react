import React from 'react';
import { css } from '@patternfly/react-styles';
import { tableToggle, tableExpandableRow } from '@patternfly/patternfly-next/components/Table/table.css';
import CollapseColumn from '../../CollapseColumn';

export default (value, { rowIndex, rowData, column: { extraParams: { onCollapse } } }) => {
  function onToggle(event) {
    onCollapse && onCollapse(event, rowIndex, rowData && !rowData.isOpen)
  }
  return {
    className: css(tableToggle),
    children: <CollapseColumn onToggle={onToggle} isOpen={rowData && rowData.isOpen}>{value}</CollapseColumn>
  }
}
