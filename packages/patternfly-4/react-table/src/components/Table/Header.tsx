import * as React from 'react';
import { Header } from './base';
import { IHeaderRow, TableContext } from './Table';
import { RowsType } from './base/types';

interface ContextHeaderProps {
  className?: string;
  headerRows?: IHeaderRow[];
}

const ContextHeader: React.FunctionComponent<ContextHeaderProps> = ({
  className = '',
  headerRows = undefined as IHeaderRow[],
  ...props
} : ContextHeaderProps ) => (
  // note: IHeader[] can be made to extend RowsTypes[] in the future so base types are consistent
  <Header {...props} headerRows={headerRows as RowsType[]} className={className} />
);

export interface HeaderProps extends React.HTMLProps<HTMLTableRowElement> {
  className?: string;
}

const TableHeader: React.FunctionComponent<HeaderProps> = ({
  ...props
} : HeaderProps ) => (
  <TableContext.Consumer>
  {({ headerRows }) => <ContextHeader {...props} headerRows={headerRows} />}
  </TableContext.Consumer>
);

export default TableHeader;