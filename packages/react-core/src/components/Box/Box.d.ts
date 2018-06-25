import { SFC, HTMLProps } from 'react';

export interface BoxProps extends HTMLProps<HTMLDivElement> {}

declare const Box: SFC<BoxProps>;

export default Box;
