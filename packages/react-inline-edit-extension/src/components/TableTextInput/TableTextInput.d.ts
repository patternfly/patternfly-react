import { SFC, FormEvent } from 'react';
import { TextInputProps } from '@patternfly/react-core/dist/esm/components/TextInput';

export interface TableTextInputProps extends Omit<TextInputProps, 'defaultValue' | 'autoFocus' | 'onBlur'> {
  defaultValue?: string;
  autoFocus?: boolean;
  onBlur?(value: string, event: FormEvent<HTMLInputElement>): void;
}

declare const TableTextInput: SFC<TableTextInputProps>;

export default TableTextInput;
