import { HTMLProps, SFC, ReactType, ReactNode } from 'react';

export interface LabelProps extends HTMLProps<HTMLSpanElement> {
  children: ReactNode;
  isCompact?: boolean;
}

declare const Label: SFC<LabelProps>;

export default Label;
