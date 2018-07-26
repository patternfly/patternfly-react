import { SFC, HTMLProps, ReactType } from 'react';

export interface CardBodyProps extends HTMLProps<HTMLDivElement> {
  component?: ReactType<CardBodyProps>;
}

declare const CardBody: SFC<CardBodyProps>;

export default CardBody;
