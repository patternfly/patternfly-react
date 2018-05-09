import { SFC, HTMLAttributes } from 'react';

export interface EmptyStateActionProps extends HTMLAttributes<HTMLDivElement> {
  /** Turn on secondary container styling */
  secondary?: boolean;
}

declare const EmptyStateAction: SFC<EmptyStateActionProps>;

export default EmptyStateAction;
