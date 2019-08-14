import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table';
import { CollapseColumn } from '../../CollapseColumn';
import { ExpandableRowContent } from '../../ExpandableRowContent';
import { IExtra, IFormatterValueType } from '../../Table';

export const collapsible = (value: IFormatterValueType, { rowIndex, columnIndex, rowData, column, property }: IExtra) => {
  const {
    extraParams: { onCollapse, rowLabeledBy = 'simple-node', expandId = 'expand-toggle' }
  } = column;
  const extraData = {
    rowIndex,
    columnIndex,
    column,
    property
  };

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

export const expandable = (value: IFormatterValueType, { rowData }: IExtra) =>
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
  ) =>
    rowData.hasOwnProperty('parent') && {
      // todo: rewrite this logic, it is not type safe
      colSpan: colSpan + (!!rowData.fullWidth as any),
      id: contentId + rowIndex,
      className: rowData.noPadding && css(styles.modifiers.noPadding)
    };
  return expandedRowFormatter;
};
