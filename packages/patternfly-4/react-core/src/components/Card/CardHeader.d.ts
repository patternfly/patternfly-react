import { FunctionComponent, HTMLProps, ReactType } from 'react';

export interface CardHeaderProps extends HTMLProps<HTMLDivElement> {
  component?: ReactType<CardHeaderProps>;
}

declare const CardHeader: FunctionComponent<CardHeaderProps>;

export default CardHeader;
