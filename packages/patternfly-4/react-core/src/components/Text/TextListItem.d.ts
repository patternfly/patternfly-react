import { SFC, HTMLProps, ReactNode } from 'react';
import { OneOf } from '../../typeUtils';

export const TextListItemVariants: {
  li: 'li';
  dt: 'dt';
  dd: 'dd';
};

export interface TextListItemProps extends HTMLProps<HTMLDivElement> {
  component?: OneOf<typeof TextListItemVariants, keyof typeof TextListItemVariants>;
  children?: ReactNode;
  className?: string;
}

declare const TextListItem: SFC<TextListItemProps>;

export default TextListItem;
