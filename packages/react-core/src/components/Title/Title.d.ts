import { SFC, HTMLProps, ReactNode } from 'react';
import { Omit, OneOf } from '../../typeUtils';

export const TitleSize: {
  xxxxl: 'xxxxl';
  xxxl: 'xxxl';
  xxl: 'xxl';
  xl: 'xl';
  lg: 'lg';
  md: 'md';
};
export interface TitleProps
  extends Omit<HTMLProps<HTMLHeadingElement>, 'size'> {
  size: OneOf<typeof TitleSize, keyof typeof TitleSize>;
  withMargins?: boolean;
  children?: ReactNode;
}

declare const Title: SFC<TitleProps>;

export default Title;
