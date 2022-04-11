import * as React from 'react';
import { observer } from 'mobx-react';
import DefaultGroupExpanded from './DefaultGroupExpanded';
import { WithContextMenuProps, WithDndDropProps, WithSelectionProps, WithDragNodeProps } from '../../behavior';
import { BadgeLocation, LabelPosition, Node } from '../../types';
import DefaultGroupCollapsed from './DefaultGroupCollapsed';
import { CollapsibleGroupProps } from './types';

type DefaultGroupProps = {
  className?: string;
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
  labelIcon?: string;
  labelIconPadding?: number;
  badge?: string;
  badgeColor?: string;
  badgeTextColor?: string;
  badgeBorderColor?: string;
  badgeClassName?: string;
  badgeLocation?: BadgeLocation;
} & Partial<CollapsibleGroupProps & WithSelectionProps & WithDndDropProps & WithDragNodeProps & WithContextMenuProps>;

const DefaultGroup: React.FunctionComponent<DefaultGroupProps> = ({
  className,
  element,
  onCollapseChange,
  ...rest
}) => {
  const handleCollapse = (group: Node, collapsed: boolean): void => {
    if (collapsed && rest.collapsedWidth !== undefined && rest.collapsedHeight !== undefined) {
      group.setBounds(group.getBounds().setSize(rest.collapsedWidth, rest.collapsedHeight));
    }
    group.setCollapsed(collapsed);
    onCollapseChange && onCollapseChange(group, collapsed);
  };

  if (element.isCollapsed()) {
    return (
      <DefaultGroupCollapsed className={className} element={element} onCollapseChange={handleCollapse} {...rest} />
    );
  }
  return <DefaultGroupExpanded className={className} element={element} onCollapseChange={handleCollapse} {...rest} />;
};

export default observer(DefaultGroup);
