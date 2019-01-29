import { FunctionComponent, HTMLProps, ReactNode } from 'react';

export interface EmptyStateSecondaryActionsProps extends HTMLProps<HTMLDivElement> {
  children?: ReactNode;
}

declare const EmptyStateSecondaryActions: FunctionComponent<EmptyStateSecondaryActionsProps>;

export default EmptyStateSecondaryActions;
