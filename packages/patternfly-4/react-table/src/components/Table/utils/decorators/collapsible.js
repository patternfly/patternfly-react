import React, { Fragment } from 'react';
import { css } from '@patternfly/react-styles';
import { tableToggle } from '@patternfly/patternfly-next/components/Table/table.css';
import CollapseColumn from '../../CollapseColumn';
import ExpandableRowContent from '../../ExpandableRowContent';

export const collapsible = (value, { rowIndex, rowData, column: { extraParams: { onCollapse } } }) => {
  function onToggle(event) {
    onCollapse && onCollapse(event, rowIndex, rowData && !rowData.isOpen)
  }
  return {
    className: css(tableToggle),
    children: <CollapseColumn onToggle={onToggle} isOpen={rowData && rowData.isOpen}>{value}</CollapseColumn>
  }
}

export const expandedRow = (colSpan) => {
  const expandedRowFormatter = (value, { rowData }) => {
    return {
      ...rowData.hasOwnProperty('parent') ? {
        colSpan: colSpan,
        children: <ExpandableRowContent>{value.title || value}</ExpandableRowContent>
      } : value
    };
  }
  return expandedRowFormatter;
}
