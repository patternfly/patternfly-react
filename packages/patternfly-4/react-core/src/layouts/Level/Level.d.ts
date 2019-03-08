import { FunctionComponent, HTMLProps } from 'react';
import { OneOf } from '../../helpers/typeUtils';
import { GutterSize } from '../../styles/gutters';

export interface LevelProps extends HTMLProps<HTMLDivElement> {
  gutter: OneOf<typeof GutterSize, keyof typeof GutterSize>;
}

declare const Level: FunctionComponent<LevelProps>;

export default Level;
