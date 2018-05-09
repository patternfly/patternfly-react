import { SFC, HTMLAttributes } from 'react';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** Top Card Accent Bool */
  accented?: boolean;
  /** Aggregate Card Bool */
  aggregated?: boolean;
  /** Aggregate Mini Card Bool */
  aggregatedMini?: boolean;
  /** Match Height Bool */
  matchHeight?: boolean;
  /** Reference prop for root element */
  cardRef?(element: HTMLDivElement): void;
}

declare const Card: SFC<CardProps>;

export default Card;
