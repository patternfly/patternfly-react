import { SFC, HTMLProps, ReactType } from 'react';
import { OneOf } from '../../typeUtils';
import { GutterSize, getGutterModifier } from '../../styles/gutters';

export interface StackProps extends HTMLProps<HTMLDivElement> {
  component?: ReactType<StackProps>;
  gutter?: OneOf<typeof GutterSize, keyof typeof GutterSize>;
}

declare const Stack: SFC<StackProps>;

export default Stack;