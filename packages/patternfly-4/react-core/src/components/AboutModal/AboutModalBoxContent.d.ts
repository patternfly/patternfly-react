import { FunctionComponent, HTMLProps, ReactNode } from 'react';

export interface ModalBoxBodyProps extends HTMLProps<HTMLDivElement> {
  children: ReactNode;
  tradeMark: string;
  id: string;
}

declare const ModalBoxBody: FunctionComponent<ModalBoxBodyProps>;

export default ModalBoxBody;
