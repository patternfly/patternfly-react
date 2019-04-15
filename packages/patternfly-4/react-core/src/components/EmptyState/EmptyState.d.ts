import { FunctionComponent, HTMLProps, ReactNode } from 'react';
import { OneOf, Omit } from '../../helpers/typeUtils';

export const EmptyStateVariant : {
  large: 'large',
  small: 'small',
  full: 'full'
};

export interface EmptyStateProps extends Omit<HTMLProps<HTMLDivElement>, 'children'> {
  children: ReactNode;
  variant: OneOf<typeof EmptyStateVariant, keyof typeof EmptyStateVariant>;
}

declare const EmptyState: FunctionComponent<EmptyStateProps>;

export default EmptyState;
