import { SFC, FormEvent } from 'react';
import { TextInputProps } from '@patternfly/react-core/dist/js/components/TextInput';

export interface TableTextInputProps extends Omit<TextInputProps, 'defaultValue' | 'autoFocus' | 'onBlur'> {
  defaultValue?: string;
  autoFocus?: boolean;
  onBlur?(value: string, event: FormEvent<HTMLInputElement>): void;
}

export const TableTextInput: SFC<TableTextInputProps>;
