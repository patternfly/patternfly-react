import * as React from 'react';
import { Header } from './base';
import { IHeaderRow } from './TableTypes';
import { TableContext } from './TableContext';
import { ColumnsType } from './base/types';

interface ContextHeaderProps {
  className?: string;
  headerRows?: IHeaderRow[];
}

const ContextHeader: React.FunctionComponent<ContextHeaderProps> = ({
  className = '',
  headerRows = undefined as IHeaderRow[],
  ...props
}: ContextHeaderProps) => <Header {...props} headerRows={headerRows as ColumnsType} className={className} />;

export interface HeaderProps extends React.HTMLProps<HTMLTableRowElement> {
  /** Additional classes added to the TableHeader  */
  className?: string;
}

export const TableHeader: React.FunctionComponent<HeaderProps> = ({ ...props }: HeaderProps) => (
  <TableContext.Consumer>
    {({ headerRows }) => <ContextHeader {...props} headerRows={headerRows} />}
  </TableContext.Consumer>
);
TableHeader.displayName = 'TableHeader';
