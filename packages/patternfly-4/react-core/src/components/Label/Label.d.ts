import { FunctionComponent, HTMLProps, ReactNode } from 'react';

export interface LabelProps extends HTMLProps<HTMLSpanElement> {
  children: ReactNode;
  isCompact?: boolean;
}

declare const Label: FunctionComponent<LabelProps>;

export default Label;
