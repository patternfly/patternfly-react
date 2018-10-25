import { HTMLProps, SFC, ReactType, ReactNode } from 'react';
import { OneOf } from '../../typeUtils';

export const LabelVariant: {
  compact: 'compact';
};

export interface LabelProps extends HTMLProps<HTMLLabelElement> {
  children?: ReactNode;
  variant?: OneOf<typeof LabelVariant, keyof typeof LabelVariant>;
}

declare const Label: SFC<LabelProps>;

export default Label;
