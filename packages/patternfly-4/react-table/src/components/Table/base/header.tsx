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
}

class BaseHeader extends React.Component<HeaderProps, {columns: any}> {
  constructor(props: HeaderProps) {
    super(props);
    this.state = {
      columns: (this.props.headerRows || [this.props.columns] as ColumnsType)
    };
  }
  startDrag = -1;

  applyDragDropOperation(from: number, to: number) {
    if (from !== to) {
      let newArr = this.state.columns[0];
      [newArr[from], newArr[to]] = [newArr[to], newArr[from]];
      this.setState({
        columns: [newArr]
      });
    }
  }

  render() {
    const { children, headerRows, onRow, renderers, columns, reorderableColumns, ...props } = this.props;
    const dragAndDropProps = (reorderableColumns) ? { draggable: true } : null;
    // If headerRows aren't passed, default to bodyColumns as header rows
    return React.createElement(
      renderers.header.wrapper as createElementType,
      props,
      [
        this.state.columns.map((rowData: RowsType, rowIndex: number) =>
          React.createElement(HeaderRow, {
            key: `${rowIndex}-header-row`,
            renderers: renderers.header,
            onRow,
            rowData,
            rowIndex,
            ...dragAndDropProps,
            onDragStart: (e: any) => {
              // TODO: why can't we use rowIndex? It's always zero for some reason
              this.startDrag = e.target.getAttribute('data-key');
              e.target.style.opacity = 0.4;
            },
            onDragEnd: (e: any) => {
              e.target.style.opacity = 1;
            },
            onDrop: (e: any) => {
              if (e.stopPropagation) {
                e.stopPropagation();
              }
              e.target.style.border = 'none';
              this.applyDragDropOperation(this.startDrag, e.target.getAttribute('data-key'));
              return false;
            },
            onDragOver: (e: any) => {
              if (e.preventDefault) {
                e.preventDefault();
              }
              return false;
            },
            onDragEnter: (e: any) => {
              e.target.style.border = '2px black dashed';
            },
            onDragLeave: (e: any) => {
              e.target.style.border = 'none';
            }
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
