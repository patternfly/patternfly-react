import React, { Fragment } from 'react';
import { css } from '@patternfly/react-styles';
import { tableToggle } from '@patternfly/patternfly-next/components/Table/table.css';
import CollapseColumn from '../../CollapseColumn';
import ExpandableRowContent from '../../ExpandableRowContent';

export const collapsible = (
  value,
  {
    rowIndex,
    rowData,
    column: {
      extraParams: {
        onCollapse, rowLabeledBy = 'simple-node', expandId = 'expand-toggle'
      }
    }
  }
) => {
  function onToggle(event) {
    onCollapse && onCollapse(event, rowIndex, rowData && !rowData.isOpen)
  }
  return {
    className: css(tableToggle),
    children: <CollapseColumn aria-labelledby={`${rowLabeledBy}${rowIndex} ${expandId}${rowIndex}`}
      onToggle={onToggle}
      id={expandId + rowIndex}
      isOpen={rowData && rowData.isOpen}
    >
      {value}
    </CollapseColumn>
  }
}

export const expandedRow = (colSpan) => {
  const expandedRowFormatter = (value, { rowIndex, rowData, column: { extraParams: { contentId = 'expanded-content' } } }) => {
    return rowData.hasOwnProperty('parent') && {
        colSpan: colSpan,
        children: <ExpandableRowContent id={contentId + rowIndex}>{value.title || value}</ExpandableRowContent>
      }
  };
  return expandedRowFormatter;
}
