import { FunctionComponent, HTMLProps, ReactNode } from 'react';
import { Omit } from '../../typeUtils';

export interface ExpandedContentProps extends Omit<HTMLProps<HTMLDivElement>, 'onChange' | 'children'> {
  children: ReactNode;
  onChange?(value: string, event: FormEvent<HTMLInputElement>): void;
}

declare const ExpandedContent: FunctionComponent<ExpandedContentProps>;

export default ExpandedContent;
