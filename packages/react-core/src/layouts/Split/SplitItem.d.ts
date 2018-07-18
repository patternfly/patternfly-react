import { SFC, HTMLProps } from 'react';
import { Omit, OneOf } from '../../typeUtils';

export const SplitItemVariant: {
  primary: 'primary';
  secondary: 'secondary';
}

export interface SplitItemProps extends HTMLProps<HTMLDivElement> {
  variant?: OneOf<typeof SplitItemVariant, keyof typeof SplitItemVariant>;
}

declare const SplitItem: SFC<SplitItemProps>;

export default SplitItem;
