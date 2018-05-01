import { NavbarProps } from '../Navbar';
import { ReactNode, SFC } from 'react';

export interface VerticalNavMastheadProps {
  title?: string;
  titleImg?: string;
  iconImg?: string;
  href?: string;
  updateNavOnMenuToggleClick?: NavbarProps['onClick'];
  children?: ReactNode;
}

declare const VerticalNavMasthead: SFC<VerticalNavMastheadProps>;

export default VerticalNavMasthead;
