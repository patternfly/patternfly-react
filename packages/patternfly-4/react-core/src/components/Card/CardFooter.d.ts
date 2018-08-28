import { SFC, HTMLProps, ReactType } from 'react';

export interface CardFooterProps extends HTMLProps<HTMLDivElement> {
  component?: ReactType<CardFooterProps>;
}

declare const CardFooter: SFC<CardFooterProps>;

export default CardFooter;
