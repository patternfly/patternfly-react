import { SFC, HTMLProps, ReactNode } from 'react';
import { Omit } from '../../typeUtils';

export interface EmptyStateProps extends Omit<HTMLProps<HTMLDivElement>, 'children'> {
  children: ReactNode;
}

declare const EmptyState: SFC<EmptyStateProps>;

export default EmptyState;
