import { FormEvent, FunctionComponent, HTMLProps } from 'react';
import { Omit } from '../../helpers/typeUtils';

export interface DataListCheckProps
  extends Omit<HTMLProps<HTMLInputElement>, 'type' | 'onChange' | 'disabled' | 'aria-labelledby'> {
  isDisabled?: boolean;
  isValid?: boolean;
  isChecked?: boolean;
  onChange?(checked: boolean, event: FormEvent<HTMLInputElement>): void;
  'aria-labelledby': string;
}

declare const DataListCheck: FunctionComponent<DataListCheckProps>;

export default DataListCheck;
