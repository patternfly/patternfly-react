import { FunctionComponent, HTMLProps, ReactNode } from 'react';

export interface ModalBoxProps extends HTMLProps<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  id: string;
  isLarge?: boolean;
  title: string;
}

declare const ModalBox: FunctionComponent<ModalBoxProps>;

export default ModalBox;
