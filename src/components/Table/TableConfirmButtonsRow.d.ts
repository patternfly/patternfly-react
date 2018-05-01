import { ReactNode, ComponentClass } from 'react';

interface TableConfirmButtonsRowProps {
  buttonsClassName?: string;
  buttonsPosition?(
    window: { width: number; height: number },
    boundingClientRect: ClientRect
  ): void;
  children?: ReactNode;
  isEditing?(): boolean;
  messages?: {
    confirmButtonLabel?: string;
    cancelButtonLabel?: string;
  };
  onCancel?(): void;
  onConfirm?(): void;
}

declare const TableConfirmButtonsRow: ComponentClass<
  TableConfirmButtonsRowProps
>;

export default TableConfirmButtonsRow;
