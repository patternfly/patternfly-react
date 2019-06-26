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
import { createElementType, formatterValueType, ColumnType, RowType, RenderersTypes } from './types';

export interface BodyRowProps {
  columns: RenderersTypes['columns'];
  renderers: RenderersTypes['renderers']['body'];
  onRow?: Function;
  rowIndex: number;
  rowData: RowType;
  rowKey: string;
}

export class BodyRow extends React.Component<BodyRowProps, {}> {
  static defaultProps = {
    onRow: (...args:any) => Object 
  };

  shouldComponentUpdate(nextProps: BodyRowProps){
    const previousProps = this.props;

    // Check for row based override.
    const { renderers } = nextProps;

    if (renderers && renderers.row && (renderers.row as React.Component).shouldComponentUpdate) {
      if (isFunction((renderers.row as React.Component).shouldComponentUpdate)) {
        return (renderers.row as React.Component).shouldComponentUpdate.call(this, nextProps, {}, {});
      }

      return true;
    }

    return !(
      columnsAreEqual(previousProps.columns, nextProps.columns) && isEqual(previousProps.rowData, nextProps.rowData)
    );
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
          // tslint:disable-next-line:no-console
          console.warn('Table.Body - Failed to receive a transformed result');
        }

        return React.createElement(
          renderers.cell as createElementType,
          {
            key: `${columnIndex}-cell`,
            ...mergeProps(props, cell && cell.props, transformed)
          },
          transformed.children ||
            evaluateFormatters(formatters)(
              rowData[`_${evaluatedProperty}`] || rowData[evaluatedProperty] as formatterValueType,
              extraParameters
            )
        );
      })
    );
  }
}