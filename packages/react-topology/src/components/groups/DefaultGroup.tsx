import * as React from 'react';
import { observer } from 'mobx-react';
import DefaultGroupExpanded from './DefaultGroupExpanded';
import { WithContextMenuProps, WithDndDropProps, WithSelectionProps } from '../../behavior';
import { Node } from '../../types';
import { WithBadgeProps, WithCollapsibleGroupProps, WithLabelProps } from '../../utils';
import DefaultGroupCollapsed from './DefaultGroupCollapsed';

type DefaultGroupProps = {
  element: Node;
  droppable?: boolean;
  canDrop?: boolean;
  dropTarget?: boolean;
  dragging?: boolean;
  dragRegroupable?: boolean;
  hover?: boolean;
} & WithSelectionProps &
  WithLabelProps &
  WithBadgeProps &
  WithDndDropProps &
  WithContextMenuProps &
  WithCollapsibleGroupProps;

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
