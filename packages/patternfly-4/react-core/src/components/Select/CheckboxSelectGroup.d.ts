import { HTMLProps, FormEvent } from 'react';
import { Omit } from '../../typeUtils';

export interface CheckboxSelectGroupProps extends Omit<HTMLProps<HTMLOptionElement>> {
  label?: string;
}

declare const CheckboxSelectGroup: React.FunctionComponent<CheckboxSelectGroupProps>;

export default CheckboxSelectGroup;
