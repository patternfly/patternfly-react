import { SFC, HTMLProps} from 'react';

export interface EmptyStateProps extends HTMLProps<HTMLDivElement> {
}

declare const EmptyState: SFC<EmptyStateProps>;

export default EmptyState;
