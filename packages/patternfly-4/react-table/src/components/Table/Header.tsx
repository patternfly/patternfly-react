import * as React from 'react';
import { Header } from './base';
import { IHeaderRow, TableContext } from './Table';
import { ColumnsType } from './base/types';

interface ContextHeaderProps {
  className?: string;
  headerRows?: IHeaderRow[];
  draggable?: boolean;
  onDragStart?: Function;
  onDragEnd?: Function;
  onDrop?: Function;
  onDragOver?: Function;
  onDragEnter?: Function;
  onDragLeave?: Function;
}

const ContextHeader: React.FunctionComponent<ContextHeaderProps> = ({
  className = '',
  headerRows = undefined as IHeaderRow[],
  draggable,
  onDragStart,
  onDragEnd,
  onDragEnter,
  onDragLeave,
  onDragOver,
  onDrop,
  ...props
}: ContextHeaderProps ) => {
  return (
    <Header
      {...props}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onDrop={onDrop}
      onDragOver={onDragOver}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      reorderableColumns={draggable}
      headerRows={headerRows as ColumnsType}
      className={className} />
  )
};

export interface HeaderProps extends React.HTMLProps<HTMLTableRowElement> {
  className?: string;
}

export const TableHeader: React.FunctionComponent<HeaderProps> = ({
  ...props
}: HeaderProps ) => {
  return (
    <TableContext.Consumer>
    {({
      headerRows,
      draggable,
      onDragStart,
      onDragEnd,
      onDrop,
      onDragOver,
      onDragEnter,
      onDragLeave
    }) => {
      return (
        <ContextHeader
          {...props}
          draggable={draggable}
          onDragStart={onDragStart}
          onDragEnd={onDragEnd}
          onDrop={onDrop}
          onDragOver={onDragOver}
          onDragEnter={onDragEnter}
          onDragLeave={onDragLeave}
          headerRows={headerRows} />
      );
    }}
    </TableContext.Consumer>
  )
};
