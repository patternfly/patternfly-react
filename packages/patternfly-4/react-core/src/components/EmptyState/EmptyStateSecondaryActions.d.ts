import { SFC, HTMLProps, ReactNode } from 'react';

export interface EmptyStateSecondaryActionsProps extends HTMLProps<HTMLDivElement> {
  children?: ReactNode;
}

declare const EmptyStateSecondaryActions: SFC<EmptyStateSecondaryActionsrops>;

export default EmptyStateSecondaryActions;
