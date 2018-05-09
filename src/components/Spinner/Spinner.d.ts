import { SFC, HTMLAttributes } from 'react';

export type SpinnerSize = 'lg' | 'md' | 'sm' | 'xs';

export interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {
  loading?: boolean;
  inline?: boolean;
  inverse?: boolean;
  size?: SpinnerSize;
}

declare const Spinner: SFC<SpinnerProps>;

export default Spinner;
