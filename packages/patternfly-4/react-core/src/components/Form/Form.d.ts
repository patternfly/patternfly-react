import { SFC, HTMLProps, ReactNode } from 'react';

export interface FormProps extends React.Component<HTMLFormElement> {
    isHorizontal?: boolean;
    children?: ReactNode;
    className?: string;
}

declare const Form: SFC<FormProps>;

export default Form;
