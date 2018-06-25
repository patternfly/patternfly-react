import { SFC, HTMLProps } from 'react';

export interface BoxHeaderProps extends HTMLProps<HTMLDivElement> {}

declare const BoxHeader: SFC<BoxHeaderProps>;

export default BoxHeader;
