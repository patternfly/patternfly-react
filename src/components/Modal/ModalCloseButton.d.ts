import { SFC, HTMLAttributes } from 'react';

export interface ModalCloseButtonProps
  extends HTMLAttributes<HTMLButtonElement> {
  closeText?: string;
}

declare const ModalCloseButton: SFC<ModalCloseButtonProps>;

export default ModalCloseButton;
