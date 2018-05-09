import { SFC, ReactNode, MouseEvent } from 'react';

export interface VerticalNavBrandProps {
  children?: ReactNode;
  href?: string;
  iconImg?: string;
  img?: string;
  onClick?(event: MouseEvent<HTMLAnchorElement>): void;
  title?: string;
  titleImg?: string;
}

declare const VerticalNavBrand: SFC<VerticalNavBrandProps>;

export default VerticalNavBrand;
