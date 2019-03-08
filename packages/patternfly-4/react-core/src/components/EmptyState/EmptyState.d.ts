import { FunctionComponent, HTMLProps, ReactNode } from 'react';
import { Omit } from '../../helpers/typeUtils';

export interface EmptyStateProps extends Omit<HTMLProps<HTMLDivElement>, 'children'> {
  children: ReactNode;
}

declare const EmptyState: FunctionComponent<EmptyStateProps>;

export default EmptyState;
