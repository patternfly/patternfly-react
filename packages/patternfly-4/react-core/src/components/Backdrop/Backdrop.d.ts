import { SFC, HTMLProps, ReactNode } from 'react';

export interface BackdropProps extends HTMLProps<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
}

declare const Backdrop: SFC<BackdropProps>;

export default Backdrop;
