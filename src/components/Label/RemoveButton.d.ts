import { HTMLAttributes, SFC } from 'react';

export interface RemoveButtonProps extends HTMLAttributes<HTMLSpanElement> {
  /** Callback when remove button is clicked */
  onRemoveClick?(): void;
}

declare const RemoveButton: SFC<RemoveButtonProps>;

export default RemoveButton;
