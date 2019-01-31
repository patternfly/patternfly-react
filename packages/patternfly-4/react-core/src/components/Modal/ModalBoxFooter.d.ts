import { FunctionComponent, HTMLProps, ReactNode } from 'react';

export interface ModalBoxFooterProps extends HTMLProps<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
}

declare const ModalBoxFooter: FunctionComponent<ModalBoxFooterProps>;

export default ModalBoxFooter;
