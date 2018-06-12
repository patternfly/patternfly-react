import { SFC, HTMLProps, ReactNode } from 'react';

export enum TitleSize {
  xxxxl = 'xxxxl',
  xxxl = 'xxxl',
  xxl = 'xxl',
  xl = 'xl',
  lg = 'lg',
  md = 'md'
}

export interface TitleProps extends HTMLProps<HTMLHeadingElement> {
  size: TitleSize;
  withMargins?: boolean;
  children?: ReactNode;
}

declare const Title: SFC<Props>;

export default Title;
