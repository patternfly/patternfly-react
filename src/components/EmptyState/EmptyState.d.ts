import { SFC, HTMLAttributes } from 'react';

export interface EmptyStateProps extends HTMLAttributes<HTMLDivElement> {}

declare const EmptyState: SFC<EmptyStateProps>;

export default EmptyState;
