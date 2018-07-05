import { SFC, HTMLProps, ReactType } from 'react';

export interface CardHeaderProps extends HTMLProps<HTMLDivElement> {
  component?: ReactType<CardHeaderProps>;
}

declare const CardHeader: SFC<CardHeaderProps>;

export default CardHeader;
