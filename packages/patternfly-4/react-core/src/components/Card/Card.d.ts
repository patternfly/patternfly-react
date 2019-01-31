import { FunctionComponent, HTMLProps, ReactType } from 'react';

export interface CardProps extends HTMLProps<HTMLDivElement> {
  component?: ReactType<CardProps>;
}

declare const Card: FunctionComponent<CardProps>;

export default Card;
