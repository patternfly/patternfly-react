import { SFC, HTMLProps, ReactNode } from 'react';
import { OneOf } from '../../typeUtils';

export const AlertVariant: {
  success: 'Succes';
  danger: 'Danger';
  warning: 'Warning';
  info: 'Info';
}

export interface AlertProps extends HTMLProps<HTMLDivElement> {
  variant: OneOf<typeof AlertVariant, keyof typeof AlertVariant>;
  children?: ReactNode;
}

declare const Alert: SFC<AlertProps>;

export default Alert;
