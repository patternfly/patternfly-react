import { SFC, HTMLProps } from 'react';

export interface BoxBodyProps extends HTMLProps<HTMLDivElement> {}

declare const BoxBody: SFC<BoxBodyProps>;

export default BoxBody;
