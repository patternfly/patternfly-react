import { SFC } from "react";

export interface VerticalNavBadgeProps {
  badgeClass?: string;
  tooltip?: string;
  count?: number;
  iconClass?: string;
}

declare const VerticalNavBadge: SFC<VerticalNavBadgeProps>;

export default VerticalNavBadge;