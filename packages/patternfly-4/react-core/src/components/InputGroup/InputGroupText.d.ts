import { SFC, HTMLProps, ReactNode, ReactType } from 'react';
import { Omit } from '../../helpers/typeUtils'

export interface InputGroupTextProps extends Omit<HTMLProps<HTMLSpanElement | HTMLLabelElement>, 'children'> {
    children: ReactNode;
    component?: ReactType;
}

declare const InputGroupText: SFC<InputGroupTextProps>;

export default InputGroupText;
