import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table';
import { CollapseColumn } from '../../CollapseColumn';
import { ExpandableRowContent } from '../../ExpandableRowContent';
import { IExtra, IFormatterValueType, IFormatter, decoratorReturnType } from '../../Table';

export const collapsible: IFormatter = (
  value: IFormatterValueType,
  { rowIndex, columnIndex, rowData, column, property }: IExtra
) => {
  const {
    extraParams: { onCollapse, rowLabeledBy = 'simple-node', expandId = 'expand-toggle' }
  } = column;
  const extraData = {
    rowIndex,
    columnIndex,
    column,
    property
  };

  /**
   * @param {React.MouseEvent} event - Mouse event
   */
  function onToggle(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    // tslint:disable-next-line:no-unused-expression
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

export const expandable: IFormatter = (value: IFormatterValueType, { rowData }: IExtra) =>
  rowData.hasOwnProperty('parent') ? <ExpandableRowContent>{value}</ExpandableRowContent> : value;

export const expandedRow = (colSpan: number) => {
  const expandedRowFormatter = (
    value: IFormatterValueType,
    {
      rowIndex,
      rowData,
      column: {
        extraParams: { contentId = 'expanded-content' }
      }
    }: IExtra
  ): decoratorReturnType | false => {
    if (rowData.hasOwnProperty('parent')) {
      const formatter: decoratorReturnType = {
        id: contentId + rowIndex,
        className: rowData.noPadding && css(styles.modifiers.noPadding)
      };

      if (!rowData.useAllCellInExpandedContent) {
        formatter.colSpan = colSpan + (rowData.fullWidth ? 1 : 0);
      }

      return formatter;
    }

    return false;
  };
  return expandedRowFormatter;
};

export const skipRemainingExpandedRow = () => {
  const skipRemainingExpandedRowFormatter = (
    value: IFormatterValueType,
    {
      rowIndex,
      rowData,
      columnIndex,
      column: {
        extraParams: { contentId = 'expanded-content' }
      }
    }: IExtra
  ): decoratorReturnType | false => {
    if (rowData.hasOwnProperty('parent')) {
      const formatter: decoratorReturnType = {
        id: contentId + rowIndex + '-' + columnIndex,
        className: rowData.noPadding && css(styles.modifiers.noPadding)
      };

      if (!rowData.useAllCellInExpandedContent) {
        formatter.skipCell = true;
      }

      return formatter;
    }

    return false;
  };
  return skipRemainingExpandedRowFormatter;
};
