import { FunctionComponent, HTMLProps } from 'react';
import { Header } from './base';
import { IHeaderRow } from '../../../components';
import { TableContext } from './TableContext';
import { ColumnsType } from '../../../components/Table/base/types';

interface ContextHeaderProps {
  className?: string;
  headerRows?: IHeaderRow[];
}

const ContextHeader: FunctionComponent<ContextHeaderProps> = ({
  className = '',
  headerRows = undefined as IHeaderRow[],
  ...props
}: ContextHeaderProps) => <Header {...props} headerRows={headerRows as ColumnsType} className={className} />;

export interface HeaderProps extends HTMLProps<HTMLTableRowElement> {
  /** Additional classes added to the TableHeader  */
  className?: string;
}

export const TableHeader: FunctionComponent<HeaderProps> = ({ ...props }: HeaderProps) => (
  <TableContext.Consumer>
    {({ headerRows }) => <ContextHeader {...props} headerRows={headerRows} />}
  </TableContext.Consumer>
);
TableHeader.displayName = 'TableHeader';
