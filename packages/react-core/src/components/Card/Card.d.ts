import { SFC, HTMLProps, ReactType } from 'react';

export interface CardProps extends HTMLProps<HTMLDivElement> {
  component?: ReactType<CardProps>;
}

declare const Card: SFC<CardProps>;

export default Card;
