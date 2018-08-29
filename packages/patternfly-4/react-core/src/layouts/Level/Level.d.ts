import { SFC, HTMLProps, ReactNode } from 'react';
import { Omit, OneOf } from '../../typeUtils';
import { GutterSize } from '../../styles/gutters';

export interface LevelProps extends HTMLProps<HTMLDivElement> {
  gutter: OneOf<typeof GutterSize, keyof typeof GutterSize>;
}

declare const Level: SFC<LevelProps>;

export default Level;
