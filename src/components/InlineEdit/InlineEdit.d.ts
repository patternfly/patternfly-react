import { ReactNode, SFC } from 'react';

export interface InlineEditProps<V = any, D = any> {
  /** Function that determines whether value or edit component should be rendered */
  isEditing(additionalData: D): boolean;
  /** Returns value component */
  renderValue(value: V, additionalData: D): ReactNode;
  /** Returns edit component */
  renderEdit(value: V, additionalData: D): ReactNode;
  /** Inline edit input value */
  value?: V;
  /** Additional data passed th the render functions */
  additionalData?: D;
}

declare const InlineEdit: SFC<InlineEditProps>;

export default InlineEdit;
