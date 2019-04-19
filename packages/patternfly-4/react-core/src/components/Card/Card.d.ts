import { FunctionComponent, HTMLProps, ReactType } from 'react';

export interface CardProps extends HTMLProps<HTMLDivElement> {
  component?: ReactType<CardProps>;
  isHoverable?: boolean;
}

declare const Card: FunctionComponent<CardProps>;

export default Card;
