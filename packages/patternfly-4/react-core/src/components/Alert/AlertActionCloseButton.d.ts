import { SFC, HTMLProps, ReactNode } from 'react';
import { OneOf, Omit } from '../../typeUtils';

export interface AlertActionCloseButtonProps extends HTMLProps<HTMLDivElement> {
  onClose?: Function;
  'aria-label'?: string;
}

declare const AlertActionCloseButton: SFC<AlertActionCloseButtonProps>;

export default AlertActionCloseButton;
