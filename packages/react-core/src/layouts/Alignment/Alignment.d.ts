import { HTMLProps, SFC, ReactType } from 'react';

export interface AlignmentProps extends HTMLProps<HTMLDivElement> {
  component?: ReactType<AlignmentProps>;
}

declare const Alignment: SFC<AlignmentProps>;

export default Alignment;