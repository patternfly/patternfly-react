import { SFC, HTMLProps, ReactNode } from 'react';
import { OneOf } from '../../typeUtils';

export const TextListVariants: {
  ul: 'ul';
  ol: 'ol';
  dl: 'dl';
};

export interface TextListProps extends HTMLProps<HTMLDivElement> {
  component?: OneOf<typeof TextListVariants, keyof typeof TextListVariants>;
  children?: ReactNode;
  className?: string;
}

declare const TextList: SFC<TextListProps>;

export default TextList;
