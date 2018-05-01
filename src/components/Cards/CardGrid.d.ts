import { SFC } from 'react';
import { GridProps } from '../Grid';

export interface CardGridProps extends GridProps {
  /** Match Height */
  matchHeight?: boolean;
}

declare const CardGrid: SFC<CardGridProps>;

export default CardGrid;
