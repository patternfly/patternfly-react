import { FunctionComponent, HTMLProps } from 'react';

export interface AlertActionCloseButtonProps extends HTMLProps<HTMLDivElement> {
  onClose?: Function;
  'aria-label'?: string;
}

declare const AlertActionCloseButton: FunctionComponent<AlertActionCloseButtonProps>;

export default AlertActionCloseButton;
