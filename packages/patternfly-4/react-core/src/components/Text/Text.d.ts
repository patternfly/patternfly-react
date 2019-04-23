import { FunctionComponent, HTMLProps, ReactNode } from 'react';
import { OneOf } from '../../helpers/typeUtils';

export const TextVariants: {
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

declare const Text: FunctionComponent<TextProps>;

export default Text;
