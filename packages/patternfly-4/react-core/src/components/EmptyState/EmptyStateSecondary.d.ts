import { SFC, HTMLProps} from 'react';

export interface EmptyStateSecondaryProps extends HTMLProps<HTMLDivElement> {
}

declare const EmptyStateSecondary: SFC<EmptyStateSecondaryProps>;

export default EmptyStateSecondary;
