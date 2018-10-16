import { SFC, HTMLProps, ReactType, ReactNode } from 'react';
import { OneOf, Omit } from '../../typeUtils';

export const ProgressSize: {
  sm: 'sm',
  md: 'md',
  lg: 'lg'
}

export const ProgressMeasureLocation: {
  outside: 'outside',
  inside: 'inside',
  top: 'top',
  none: 'none'
}

export const ProgressVariant: {
  danger: 'danger',
  success: 'success',
  info: 'info'
}

export interface ProgressProps extends Omit<HTMLProps<HTMLDivElement>, 'size'> {
  children?: ReactNode;
  className?: string;
  size?: OneOf<typeof ProgressSize, keyof typeof ProgressSize>;
  measureLocation?: OneOf<typeof ProgressMeasureLocation, keyof typeof ProgressMeasureLocation>;
  variant?: OneOf<typeof ProgressVariant, keyof typeof ProgressVariant>;
  title?: string;
  value?: number;
  min?: number;
  max?: number;
  valueText?: string;
}

declare const Progress: SFC<ProgressProps>;

export default Progress;
