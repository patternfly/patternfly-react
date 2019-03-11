import { FunctionComponent, HTMLProps, ReactType } from 'react';
import { OneOf } from '../../helpers/typeUtils';
import { GutterSize } from '../../styles/gutters';

export interface StackProps extends HTMLProps<HTMLDivElement> {
  component?: ReactType<StackProps>;
  gutter?: OneOf<typeof GutterSize, keyof typeof GutterSize>;
}

declare const Stack: FunctionComponent<StackProps>;

export default Stack;
