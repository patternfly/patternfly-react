import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table';
import { CollapseColumn } from '../../CollapseColumn';
import { ExpandableRowContent } from '../../ExpandableRowContent';
import { IExtra, IFormatterValueType, IFormatter, decoratorReturnType } from '../../TableTypes';

export const collapsible: IFormatter = (
  value: IFormatterValueType,
  { rowIndex, columnIndex, rowData, column, property }: IExtra
) => {
  const {
    extraParams: {
      onCollapse,
      rowLabeledBy = 'simple-node',
      expandId = 'expand-toggle',
      allRowsExpanded,
      collapseAllAriaLabel
    }
  } = column;
  const extraData = {
    rowIndex,
    columnIndex,
    column,
    property
  };

  const rowId = rowIndex !== undefined ? rowIndex : -1;

  const customProps = {
    ...(rowId !== -1
      ? {
          isOpen: rowData?.isOpen,
          'aria-labelledby': `${rowLabeledBy}${rowId} ${expandId}${rowId}`
        }
      : {
          isOpen: allRowsExpanded,
          'aria-label': collapseAllAriaLabel || 'Expand all rows'
        })
  };

  /**
   * @param {React.MouseEvent} event - Mouse event
   */
  function onToggle(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const open = rowData ? !rowData.isOpen : !allRowsExpanded;
    // tslint:disable-next-line:no-unused-expression
    onCollapse && onCollapse(event, rowIndex, open, rowData, extraData);
  }

  return {
    className: (rowData?.isOpen !== undefined || rowId === -1) && css(styles.tableToggle),
    isVisible: !rowData?.fullWidth,
    children: (
      <CollapseColumn
        aria-labelledby={`${rowLabeledBy}${rowId} ${expandId}${rowId}`}
        onToggle={onToggle}
        id={expandId + rowId}
        {...customProps}
      >
        {value as React.ReactNode}
      </CollapseColumn>
    )
  };
};

export const expandable: IFormatter = (value: IFormatterValueType, { rowData }: IExtra) =>
  rowData && rowData.hasOwnProperty('parent') ? (
    <ExpandableRowContent>{value as React.ReactNode}</ExpandableRowContent>
  ) : (
    value
  );

export const expandedRow = (colSpan?: number, additionalColSpan: number = 0) => {
  const expandedRowFormatter = (
    value: IFormatterValueType,
    {
      columnIndex,
      rowIndex,
      rowData,
      column: {
        extraParams: { contentId = 'expanded-content' }
      }
    }: IExtra
  ): decoratorReturnType =>
    value &&
    rowData.hasOwnProperty('parent') && {
      colSpan:
        !rowData.cells || rowData.cells.length === 1 ? colSpan + (rowData.fullWidth ? additionalColSpan + 1 : 0) : 1,
      id: contentId + rowIndex + (columnIndex ? '-' + columnIndex : ''),
      className: rowData.noPadding && css(styles.modifiers.noPadding)
    };
  return expandedRowFormatter;
};
