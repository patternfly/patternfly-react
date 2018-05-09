import { VerticalNavBadgeProps } from './VerticalNavBadge';
import { ReactNode, SFC } from 'react';

export interface VerticalNavItemObject {
  active?: boolean;
  badges?: VerticalNavBadgeProps[];
  className?: string;
  hovered?: boolean;
  href?: string;
  iconClass?: string;
  initialActive?: boolean;
  onBlur?(
    primary: VerticalNavItemObject,
    secondary: VerticalNavItemObject,
    tertiary: VerticalNavItemObject
  ): void;
  onClick?(
    primary: VerticalNavItemObject,
    secondary: VerticalNavItemObject,
    tertiary: VerticalNavItemObject
  ): void;
  onHover?(
    primary: VerticalNavItemObject,
    secondary: VerticalNavItemObject,
    tertiary: VerticalNavItemObject
  ): void;
  pinned?: boolean;
  selectedOnMobile?: boolean;
  subItems?: VerticalNavItemObject[];
  title?: string;
}

export interface VerticalNavItemProps extends VerticalNavItemObject {
  children?: ReactNode;
  item?: VerticalNavItemObject;
  title?: string;
}

declare const VerticalNavItem: SFC<VerticalNavItemProps>;

export default VerticalNavItem;
