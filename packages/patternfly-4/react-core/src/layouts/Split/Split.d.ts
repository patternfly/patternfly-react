import { FunctionComponent, HTMLProps, ReactType } from 'react';
import { OneOf } from '../../helpers/typeUtils';
import { GutterSize } from '../../styles/gutters';

export interface SplitProps extends HTMLProps<HTMLDivElement> {
  component?: ReactType<SplitProps>;
  gutter?: OneOf<typeof GutterSize, keyof typeof GutterSize>;
}

declare const Split: FunctionComponent<SplitProps>;

export default Split;
