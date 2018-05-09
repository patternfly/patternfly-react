import { HTMLAttributes, ReactNode, SFC } from 'react';

export interface CardLinkProps extends HTMLAttributes<HTMLAnchorElement> {
  /** card link icon */
  icon?: ReactNode;
}

declare const CardLink: SFC<CardLinkProps>;

export default CardLink;
