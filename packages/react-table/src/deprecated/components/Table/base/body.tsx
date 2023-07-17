/**
 * body.tsx
 *
 * Forked from reactabular-table version 8.14.0
 * https://github.com/reactabular/reactabular/tree/v8.14.0/packages/reactabular-table/src
 */
import * as React from 'react';
import isEqual from 'lodash/isEqual';
import {
  RowsType,
  RowType,
  RowKeyType,
  RenderersTypes,
  createElementType,
  ColumnsType
} from '../../../../components/Table/base/types';
import { ProviderContext } from '../../../../components/Table/base/provider';
import { resolveRowKey } from './resolve-row-key';
import { BodyRow } from './body-row';

export interface BodyProps {
  onRow?: Function;
  rows: RowsType;
  rowKey?: RowKeyType;
  columns?: ColumnsType;
  renderers?: RenderersTypes['renderers'];
  mappedRows?: any;
  className?: string;
}

class BaseBody extends React.Component<BodyProps, {}> {
  static defaultProps = {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onRow: (...args: any) => ({})
  };

  shouldComponentUpdate(nextProps: BodyProps) {
    // Skip checking props against `onRow` since that can be bound at render().
    // That's not particularly good practice but you never know how the users
    // prefer to define the handler.
    // Check for wrapper based override.
    const { renderers } = nextProps;

    if (
      renderers &&
      renderers.body &&
      renderers.body.wrapper &&
      (renderers.body.wrapper as React.Component).shouldComponentUpdate
    ) {
      if (typeof (renderers.body.wrapper as React.Component).shouldComponentUpdate === 'function') {
        return (renderers.body.wrapper as React.Component).shouldComponentUpdate.call(this, nextProps, {}, {});
      }
      return true;
    }

    return !isEqual(this.omitOnRow(this.props), this.omitOnRow(nextProps));
  }

  omitOnRow = (props: BodyProps) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { onRow, ...ret } = props;
    return ret;
  };

  render() {
    const { onRow, rows, rowKey, columns, renderers, ...props } = this.props;
    const children = (rows as []).map((rowData: RowType, index: number) => {
      const key = resolveRowKey({ rowData, rowIndex: index, rowKey });
      return React.createElement(BodyRow, {
        key,
        renderers: renderers.body,
        onRow,
        rowKey: key,
        rowIndex: index,
        rowData,
        columns
      });
    });

    return React.createElement(renderers.body.wrapper as createElementType, props, children);
  }
}

export const Body = (props: BodyProps) => (
  <ProviderContext.Consumer>
    {({ columns, renderers }) => <BaseBody columns={columns} renderers={renderers} {...props} />}
  </ProviderContext.Consumer>
);
