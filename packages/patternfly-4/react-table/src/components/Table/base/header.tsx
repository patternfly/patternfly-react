/**
 * header.tsx
 *
 * Forked from reactabular-table version 8.14.0
 * https://github.com/reactabular/reactabular/tree/v8.14.0/packages/reactabular-table/src
 */
import * as React from 'react';
import { createElementType, RowsType, ColumnsType, RenderersTypes } from './types';
import { ProviderContext } from './provider';
import { HeaderRow } from './header-row';

export interface HeaderProps {
  headerRows?: RowsType[] | ColumnsType; // array of rows arrays
  children?: React.ReactNode;
  columns?: ColumnsType;
  renderers?: RenderersTypes['renderers'];
  onRow?: Function;
  className?: string;
  reorderableColumns?: boolean;
  onDragStart?: Function;
  onDragEnd?: Function;
  onDrop?: Function;
  onDragOver?: Function;
  onDragEnter?: Function;
  onDragLeave?: Function;
}

class BaseHeader extends React.Component<HeaderProps, {}> {
  render() {
    const {
      children,
      headerRows,
      onRow,
      renderers,
      columns,
      reorderableColumns,
      onDragStart,
      onDrop,
      onDragOver,
      onDragLeave,
      onDragEnter,
      onDragEnd,
      ...props
    } = this.props;
    const isDraggable = (reorderableColumns) ? { draggable: true } : null;
    // If headerRows aren't passed, default to bodyColumns as header rows
    return React.createElement(
      renderers.header.wrapper as createElementType,
      props,
      [
        (this.props.headerRows || [this.props.columns] as ColumnsType).map((rowData: RowsType, rowIndex: number) =>
          React.createElement(HeaderRow, {
            key: `${rowIndex}-header-row`,
            renderers: renderers.header,
            onRow,
            rowData,
            rowIndex,
            ...isDraggable,
            onDragStart,
            onDragLeave,
            onDragEnter,
            onDragOver,
            onDrop,
            onDragEnd
          })
        )
      ].concat(children as any)
    );
  }
}

export const Header = (props: HeaderProps) => (
  <ProviderContext.Consumer>
    {({ columns, renderers }) => <BaseHeader columns={columns} renderers={renderers} {...props} />}
  </ProviderContext.Consumer>
);
