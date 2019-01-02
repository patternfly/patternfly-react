import { SFC, HTMLProps } from 'react';

export interface FormProps extends HTMLProps<HTMLFormElement> {
    isHorizontal?: boolean;
}

declare const Form: SFC<FormProps>;

export default Form;
