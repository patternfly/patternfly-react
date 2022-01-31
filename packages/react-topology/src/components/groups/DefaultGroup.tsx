import * as React from 'react';
import { observer } from 'mobx-react';
import DefaultGroupExpanded from './DefaultGroupExpanded';
import { WithContextMenuProps, WithDndDropProps, WithSelectionProps } from '../../behavior';
import { BadgeLocation, LabelPosition, Node } from '../../types';
import DefaultGroupCollapsed from './DefaultGroupCollapsed';
import { CollapsibleGroupProps } from './types';

type DefaultGroupProps = {
  element: Node;
  droppable?: boolean;
  canDrop?: boolean;
  dropTarget?: boolean;
  dragging?: boolean;
  dragRegroupable?: boolean;
  hover?: boolean;
  label?: string; // Defaults to element.getLabel()
  secondaryLabel?: string;
  showLabel?: boolean; // Defaults to true
  labelPosition?: LabelPosition; // Defaults to bottom
  truncateLength?: number; // Defaults to 13
  labelIconClass?: string; // Icon to show in label
  labelIconPadding?: number;
  badge?: string;
  badgeColor?: string;
  badgeTextColor?: string;
  badgeBorderColor?: string;
  badgeClassName?: string;
  badgeLocation?: BadgeLocation;
} & CollapsibleGroupProps &
  WithSelectionProps &
  WithDndDropProps &
  WithContextMenuProps;

const DefaultGroup: React.FC<DefaultGroupProps> = ({ element, onCollapseChange, ...rest }) => {
  const handleCollapse = (group: Node, collapsed: boolean): void => {
    if (collapsed) {
      group.setBounds(group.getBounds().setSize(rest.collapsedWidth, rest.collapsedHeight));
    }
    group.setCollapsed(collapsed);
    onCollapseChange && onCollapseChange(group, collapsed);
  };

  if (element.isCollapsed()) {
    return <DefaultGroupCollapsed element={element} onCollapseChange={handleCollapse} {...rest} />;
  }
  return <DefaultGroupExpanded element={element} onCollapseChange={handleCollapse} {...rest} />;
};

export default observer(DefaultGroup);
