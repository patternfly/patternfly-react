import { SFC } from 'react';

export interface TableInlineEditMessages {
  cancelButtonLabel?: string;
  confirmButtonLabel?: string;
}

export interface TableInlineEditRowProps {
  isEditing?: boolean;
  last?: boolean;
  messages?: TableInlineEditMessages;
  onCancel?(): void;
  onConfirm?(): void;
}

declare const TableInlineEditRow: SFC<TableInlineEditRowProps>;

export default TableInlineEditRow;
