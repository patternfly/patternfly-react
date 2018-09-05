import { SFC, HTMLProps, ReactNode } from 'react';

export interface ModalBoxFooterProps extends HTMLProps<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
}

declare const ModalBoxFooter: SFC<ModalBoxFooterProps>;

export default ModalBoxFooter;
