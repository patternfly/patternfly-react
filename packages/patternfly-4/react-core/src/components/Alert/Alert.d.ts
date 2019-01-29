import { FunctionComponent, HTMLProps, ReactNode } from 'react';
import { OneOf, Omit } from '../../typeUtils';

export const AlertVariant: {
  success: 'success';
  danger: 'danger';
  warning: 'warning';
  info: 'info';
};

export interface AlertProps extends Omit<HTMLProps<HTMLDivElement>, 'action'> {
  variant: OneOf<typeof AlertVariant, keyof typeof AlertVariant>;
  children?: ReactNode;
  action?: ReactNode;
  title?: string;
  'aria-label': string;
  variantLabel?: string;
}

declare const Alert: FunctionComponent<AlertProps>;

export default Alert;
