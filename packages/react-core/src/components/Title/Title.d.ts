import { SFC, HTMLProps, ReactNode } from 'react';
import { Omit, OneOf } from '../../typeUtils';
import { BaseSizes } from '../../styles/sizes';

export const TitleSize: Pick<
  typeof BaseSizes,
  'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'
>;

export interface TitleProps
  extends Omit<HTMLProps<HTMLHeadingElement>, 'size'> {
  size: OneOf<typeof TitleSize, keyof typeof TitleSize>;
  children?: ReactNode;
}

declare const Title: SFC<TitleProps>;

export default Title;
