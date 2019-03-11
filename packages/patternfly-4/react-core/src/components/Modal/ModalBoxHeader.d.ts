import { FunctionComponent, HTMLProps, ReactNode } from 'react';

export interface ModalBoxHeaderProps extends HTMLProps<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
  hideTitle: boolean;
}

declare const ModalBoxHeader: FunctionComponent<ModalBoxHeaderProps>;

export default ModalBoxHeader;
