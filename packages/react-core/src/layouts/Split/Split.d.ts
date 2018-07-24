import { SFC, HTMLProps, ReactType } from 'react';
import { OneOf } from '../../typeUtils';
import { GutterSize, getGutterModifier } from '../../styles/gutters';

export interface SplitProps extends HTMLProps<HTMLDivElement> {
  component?: ReactType<SplitProps>;
  gutter?: OneOf<typeof GutterSize, keyof typeof GutterSize>;
}

declare const Split: SFC<SplitProps>;

export default Split;
