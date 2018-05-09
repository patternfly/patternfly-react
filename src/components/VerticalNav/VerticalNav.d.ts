import { VerticalNavItemObject } from './VerticalNavItem';
import { ReactNode, ComponentClass } from 'react';

export interface VerticalNavControlledTypes {
  isMobile?: boolean;
  showMobileNav?: boolean;
  navCollapsed?: boolean;
  activePath?: string;
  hoverPath?: string;
  mobilePath?: string;
  pinnedPath?: string;
}

export interface VerticalNavProps {
  blurDelay?: boolean;
  blurDisabled?: boolean;
  children?: ReactNode;
  defaults: VerticalNavControlledTypes;
  dynamicBodyClasses?: boolean;
  forceHidden?: boolean;
  hiddenIcons?: boolean;
  hideMasthead?: boolean;
  hoverDelay?: boolean;
  hoverDisabled?: boolean;
  items?: VerticalNavItemObject[];
  onCollapse?(): void;
  onExpand?(): void;
  onItemBlur?(
    primary: VerticalNavItemObject,
    secondary: VerticalNavItemObject,
    tertiary: VerticalNavItemObject
  ): void;
  onItemClick?(
    primary: VerticalNavItemObject,
    secondary: VerticalNavItemObject,
    tertiary: VerticalNavItemObject
  ): void;
  onItemHover?(
    primary: VerticalNavItemObject,
    secondary: VerticalNavItemObject,
    tertiary: VerticalNavItemObject
  ): void;
  onItemPin?(item: VerticalNavItemObject, depth: number, pinned: boolean): void;
  onLayoutChange?(): void;
  onMenuToggleClick?(): void;
  onMobileSelection?(
    primary: VerticalNavItemObject,
    secondary: VerticalNavItemObject,
    tertiary: VerticalNavItemObject
  ): void;
  onNavigate?(item: VerticalNavItemObject): void;
  persist?: boolean;
  persistentSecondary?: boolean;
  pinnableMenus?: boolean;
  setControlledState?(state: Partial<VerticalNavControlledTypes>): void;
  showBadges?: boolean;
  types?: VerticalNavControlledTypes;
}

declare const VerticalNav: ComponentClass<VerticalNavProps> & {
  NoPersist: typeof VerticalNav;
  WithPersist: typeof VerticalNav;
};

export default VerticalNav;
