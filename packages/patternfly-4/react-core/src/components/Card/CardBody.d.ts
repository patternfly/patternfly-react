import { FunctionComponent, HTMLProps, ReactType } from 'react';

export interface CardBodyProps extends HTMLProps<HTMLDivElement> {
  component?: ReactType<CardBodyProps>;
  isFilled?: boolean;
}

declare const CardBody: FunctionComponent<CardBodyProps>;

export default CardBody;
