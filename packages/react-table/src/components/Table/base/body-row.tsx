/**
 * body-row.tsx
 *
 * Forked from reactabular-table version 8.14.0
 * https://github.com/reactabular/reactabular/tree/v8.14.0/packages/reactabular-table/src
 */
import { isEqual, isFunction } from 'lodash';
import * as React from 'react';
import { columnsAreEqual } from './columns-are-equal';
import { evaluateFormatters } from './evaluate-formatters';
import { evaluateTransforms } from './evaluate-transforms';
import { mergeProps } from './merge-props';
import { createElementType, formatterValueType, ColumnType, ColumnsType, RowType, RendererType } from './types';

export interface BodyRowProps {
  columns: ColumnsType;
  renderers: RendererType;
  onRow?: Function;
  rowIndex: number;
  rowData: RowType;
  rowKey: string;
}

export class BodyRow extends React.Component<BodyRowProps, {}> {
  static displayName = 'BodyRow';
  static defaultProps = {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onRow: (...args: any) => Object
  };

  shouldComponentUpdate(nextProps: BodyRowProps) {
    const { columns, rowData } = this.props;

    // Check for row based override.
    const { renderers } = nextProps;

    if (renderers && renderers.row && (renderers.row as React.Component).shouldComponentUpdate) {
      if (isFunction((renderers.row as React.Component).shouldComponentUpdate)) {
        return (renderers.row as React.Component).shouldComponentUpdate.call(this, nextProps, {}, {});
      }

      return true;
    }

    return !(columnsAreEqual(columns, nextProps.columns) && isEqual(rowData, nextProps.rowData));
  }
  render() {
    const { columns, renderers, onRow, rowKey, rowIndex, rowData } = this.props;

    return React.createElement(
      renderers.row as createElementType,
      onRow(rowData, { rowIndex, rowKey }),
      (columns as []).map((column: ColumnType, columnIndex: number) => {
        const { property, cell, props } = column;
        const evaluatedProperty = (property || (cell && cell.property)) as string;
        const { transforms = [], formatters = [] } = cell || {};
        const extraParameters = {
          columnIndex,
          property: evaluatedProperty,
          column,
          rowData,
          rowIndex,
          rowKey
        };
        const transformed = evaluateTransforms(transforms, rowData[evaluatedProperty], extraParameters);

        if (!transformed) {
          // eslint-disable-next-line no-console
          console.warn('Table.Body - Failed to receive a transformed result');
        }

        return React.createElement(
          renderers.cell as createElementType,
          {
            key: `col-${columnIndex}-row-${rowIndex}`,
            ...mergeProps(props, cell && cell.props, transformed)
          },
          transformed.children ||
            evaluateFormatters(formatters)(
              rowData[`_${evaluatedProperty}`] || (rowData[evaluatedProperty] as formatterValueType),
              extraParameters
            )
        );
      })
    );
  }
}
