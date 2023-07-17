/**
 * body-row.tsx
 *
 * Forked from reactabular-table version 8.14.0
 * https://github.com/reactabular/reactabular/tree/v8.14.0/packages/reactabular-table/src
 */
import isEqual from 'lodash/isEqual';
import * as React from 'react';
import {
  createElementType,
  formatterValueType,
  ColumnType,
  ColumnsType,
  RowType,
  RendererType
} from '../../../../components/Table/base/types';
import { columnsAreEqual } from '../../../../components/Table/base/columns-are-equal';
import { evaluateFormatters } from '../../../../components/Table/base/evaluate-formatters';
import { evaluateTransforms } from '../../../../components/Table/base/evaluate-transforms';
import { mergeProps } from '../../../../components/Table/base/merge-props';

export interface BodyRowProps {
  columns: ColumnsType;
  renderers: RendererType;
  onRow?: Function;
  rowIndex: number;
  rowData: RowType;
  rowKey: string;
}

class BodyRow extends React.Component<BodyRowProps, {}> {
  static displayName = 'BodyRow';
  static defaultProps = {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onRow: (...args: any) => ({})
  };

  shouldComponentUpdate(nextProps: BodyRowProps) {
    const { columns, rowData } = this.props;

    // Check for row based override.
    const { renderers } = nextProps;

    if (renderers && renderers.row && (renderers.row as React.Component).shouldComponentUpdate) {
      if (typeof (renderers.row as React.Component).shouldComponentUpdate === 'function') {
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

        let additionalFormaters = [];
        if (rowData[evaluatedProperty]) {
          additionalFormaters = rowData[evaluatedProperty].formatters;
        }

        return React.createElement(
          renderers.cell as createElementType,
          {
            key: `col-${columnIndex}-row-${rowIndex}`,
            ...mergeProps(props, cell && cell.props, transformed)
          },
          (!rowData.fullWidth && transformed.children) ||
            evaluateFormatters([...formatters, ...additionalFormaters])(
              rowData[`_${evaluatedProperty}`] || (rowData[evaluatedProperty] as formatterValueType),
              extraParameters
            )
        );
      })
    );
  }
}

export { BodyRow };
