import React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/patternfly/components/Table/table.css';
import CollapseColumn from '../../CollapseColumn';
import ExpandableRowContent from '../../ExpandableRowContent';

export const collapsible = (value, { rowIndex, columnIndex, rowData, column, property }) => {
  const {
    extraParams: { onCollapse, rowLabeledBy = 'simple-node', expandId = 'expand-toggle' }
  } = column;
  const extraData = {
    rowIndex,
    columnIndex,
    column,
    property
  };

  function onToggle(event) {
    onCollapse && onCollapse(event, rowIndex, rowData && !rowData.isOpen, rowData, extraData);
  }
  return {
    className: rowData.isOpen !== undefined && css(styles.tableToggle),
    isVisible: !rowData.fullWidth,
    children: (
      <CollapseColumn
        aria-labelledby={`${rowLabeledBy}${rowIndex} ${expandId}${rowIndex}`}
        onToggle={onToggle}
        id={expandId + rowIndex}
        isOpen={rowData && rowData.isOpen}
      >
        {value}
      </CollapseColumn>
    )
  };
};

export const expandable = (value, { rowData }) =>
  rowData.hasOwnProperty('parent') ? <ExpandableRowContent>{value}</ExpandableRowContent> : value;

export const expandedRow = colSpan => {
  const expandedRowFormatter = (
    value,
    {
      rowIndex,
      rowData,
      column: {
        extraParams: { contentId = 'expanded-content' }
      }
    }
  ) =>
    rowData.hasOwnProperty('parent') && {
      colSpan: colSpan + !!rowData.fullWidth,
      id: contentId + rowIndex,
      className: rowData.noPadding && css(styles.modifiers.noPadding)
    };
  return expandedRowFormatter;
};
