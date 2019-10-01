import { SFC, FormEvent } from 'react';
import { TextInputProps, Omit } from '@patternfly/react-core';

export interface TableTextInputProps extends Omit<TextInputProps, 'defaultValue' | 'autoFocus' | 'onBlur'> {
  defaultValue?: string;
  autoFocus?: boolean;
  onBlur?(value: string, event: FormEvent<HTMLInputElement>): void;
}

declare const TableTextInput: SFC<TableTextInputProps>;

export default TableTextInput;
