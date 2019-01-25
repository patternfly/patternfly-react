import { FunctionComponent, HTMLProps, ReactType } from 'react';

export interface CardFooterProps extends HTMLProps<HTMLDivElement> {
  component?: ReactType<CardFooterProps>;
}

declare const CardFooter: FunctionComponent<CardFooterProps>;

export default CardFooter;
