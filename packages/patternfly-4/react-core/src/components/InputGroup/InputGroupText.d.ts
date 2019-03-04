import { SFC, HTMLProps, ReactNode, ReactType } from 'react';
import { Omit } from '../../typeUtils'

export interface InputGroupTextProps extends Omit<HTMLProps<HTMLSpanElement | HTMLLabelElement>, 'children'> {
    children: ReactNode;
    component?: ReactType<HTMLSpanElement> | ReactType<HTMLLabelElement>;
}

declare const InputGroupText: SFC<InputGroupTextProps>;

export default InputGroupText;
