import { HTMLProps, FormEvent, ReactNode } from 'react';
import { Omit } from '../../typeUtils';

export interface DataListCheckProps
  extends Omit<HTMLProps<HTMLInputElement>, 'type' | 'onChange' | 'disabled' | 'aria-labelledby'> {
  isDisabled?: boolean;
  isValid?: boolean;
  isChecked?: boolean;
  onChange?(checked: boolean, event: FormEvent<HTMLInputElement>): void;
  'aria-labelledby': string;
}

declare const DataListCheck: React.SFC<DataListCheckProps>;

export default DataListCheck;
