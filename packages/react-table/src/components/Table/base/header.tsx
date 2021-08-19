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
}

class BaseHeader extends React.Component<HeaderProps, {}> {
  render() {
    const { children, headerRows, onRow, renderers, columns, ...props } = this.props;

    // If headerRows aren't passed, default to bodyColumns as header rows
    return React.createElement(
      renderers.header.wrapper as createElementType,
      props,
      [
        (headerRows || ([columns] as ColumnsType)).map((rowData, rowIndex) =>
          React.createElement(HeaderRow, {
            key: `${rowIndex}-header-row`,
            renderers: renderers.header,
            onRow,
            rowData,
            rowIndex
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
