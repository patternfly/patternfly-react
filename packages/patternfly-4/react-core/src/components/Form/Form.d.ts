import { FunctionComponent, HTMLProps } from 'react';

export interface FormProps extends HTMLProps<HTMLFormElement> {
    isHorizontal?: boolean;
}

declare const Form: FunctionComponent<FormProps>;

export default Form;
