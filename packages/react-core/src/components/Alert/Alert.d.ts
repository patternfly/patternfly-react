import { SFC, HTMLProps, ReactNode } from 'react';
import { OneOf } from '../../typeUtils';

export const AlertVariant: {
  success: 'success';
  danger: 'danger';
  warning: 'warning';
  info: 'info';
};

export interface AlertProps extends HTMLProps<HTMLDivElement> {
  variant: OneOf<typeof AlertVariant, keyof typeof AlertVariant>;
  children?: ReactNode;
}

declare const Alert: SFC<AlertProps>;

export default Alert;
