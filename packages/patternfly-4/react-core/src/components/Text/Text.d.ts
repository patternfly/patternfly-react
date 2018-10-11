import { SFC, HTMLProps, ReactNode } from 'react';
import { OneOf } from '../../typeUtils';

export const TextVariants: {
  h1: 'h1';
  h2: 'h2';
  h3: 'h3';
  h4: 'h4';
  h5: 'h5';
  h6: 'h6';
  p: 'p';
  a: 'a';
  small: 'small';
  blockquote: 'blockquote';
  pre: 'pre';
};

export interface TextProps extends HTMLProps<HTMLDivElement> {
  component?: OneOf<typeof TextVariants, keyof typeof TextVariants>;
  children?: ReactNode;
  className?: string;
}

declare const Text: SFC<TextProps>;

export default Text;
