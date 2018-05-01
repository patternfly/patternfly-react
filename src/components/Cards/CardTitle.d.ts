import { HTMLAttributes, SFC } from 'react';

export interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {}

declare const CardTitle: SFC<CardTitleProps>;

export default CardTitle;
