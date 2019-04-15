import { HTMLProps, FormEvent } from 'react';
import { Omit } from '../../helpers/typeUtils';

export interface CheckboxSelectGroupProps extends Omit<HTMLProps<HTMLOptionElement>, 'disabled'> {
  label?: string;
}

declare const CheckboxSelectGroup: React.FunctionComponent<CheckboxSelectGroupProps>;

export default CheckboxSelectGroup;
