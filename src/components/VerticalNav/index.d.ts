import VerticalNavBase, { VerticalNavProps } from './VerticalNav';
import VerticalNavMasthead, {
  VerticalNavMastheadProps
} from './VerticalNavMasthead';
import VerticalNavItem, {
  VerticalNavItemObject,
  VerticalNavItemProps
} from './VerticalNavItem';
import VerticalNavSecondaryItem from './VerticalNavSecondaryItem';
import VerticalNavTertiaryItem from './VerticalNavTertiaryItem';
import VerticalNavBrand, { VerticalNavBrandProps } from './VerticalNavBrand';
import VerticalNavIconBar, {
  VerticalNavIconBarProps
} from './VerticalNavIconBar';
import VerticalNavBadge, { VerticalNavBadgeProps } from './VerticalNavBadge';

declare const VerticalNav: typeof VerticalNavBase & {
  Badge: typeof VerticalNavBadge;
  Brand: typeof VerticalNavBrand;
  IconBar: typeof VerticalNavIconBar;
  Item: typeof VerticalNavItem;
  Masthead: typeof VerticalNavMasthead;
  SecondaryItem: typeof VerticalNavSecondaryItem;
  TertiaryItem: typeof VerticalNavTertiaryItem;
};

export {
  VerticalNav,
  VerticalNavProps,
  VerticalNavMasthead,
  VerticalNavMastheadProps,
  VerticalNavItem,
  VerticalNavItemObject,
  VerticalNavItemProps,
  VerticalNavSecondaryItem,
  VerticalNavTertiaryItem,
  VerticalNavBrand,
  VerticalNavBrandProps,
  VerticalNavIconBar,
  VerticalNavIconBarProps,
  VerticalNavBadge,
  VerticalNavBadgeProps
};
