import { SFC } from 'react';
import { TableInlineEditMessages } from './TableInlineEditRow';

export interface TableInlineEditHeaderRowProps {
  isEditing?: boolean;
  messages?: TableInlineEditMessages;
  onCancel?(): void;
  onConfirm?(): void;
}

declare const TableInlineEditHeaderRow: SFC<TableInlineEditHeaderRowProps>;

export default TableInlineEditHeaderRow;
