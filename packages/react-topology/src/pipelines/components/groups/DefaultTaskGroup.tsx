import * as React from 'react';
import { observer } from 'mobx-react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Topology/topology-components';
import CollapseIcon from '@patternfly/react-icons/dist/esm/icons/compress-alt-icon';
import NodeLabel from '../../../components/nodes/labels/NodeLabel';
import { Layer } from '../../../components/layers';
import { GROUPS_LAYER } from '../../../const';
import { maxPadding, useCombineRefs, useHover } from '../../../utils';
import { BadgeLocation, isGraph, LabelPosition, Node, NodeStyle } from '../../../types';
import {
  useDragNode,
  WithContextMenuProps,
  WithDndDropProps,
  WithDragNodeProps,
  WithSelectionProps
} from '../../../behavior';
import { CollapsibleGroupProps } from '../../../components';

type DefaultTaskGroupProps = {
  className?: string;
  element: Node;
  droppable?: boolean;
  canDrop?: boolean;
  dropTarget?: boolean;
  dragging?: boolean;
  hover?: boolean;
  label?: string; // Defaults to element.getLabel()
  secondaryLabel?: string;
  showLabel?: boolean; // Defaults to true
  truncateLength?: number; // Defaults to 13
  badge?: string;
  badgeColor?: string;
  badgeTextColor?: string;
  badgeBorderColor?: string;
  badgeClassName?: string;
  badgeLocation?: BadgeLocation;
  labelOffset?: number; // Space between the label and the group
  labelIconClass?: string; // Icon to show in label
  labelIcon?: string;
  labelIconPadding?: number;
} & Partial<CollapsibleGroupProps & WithDragNodeProps & WithSelectionProps & WithDndDropProps & WithContextMenuProps>;

const DefaultTaskGroup: React.FunctionComponent<DefaultTaskGroupProps> = ({
  className,
  element,
  collapsible,
  selected,
  onSelect,
  hover,
  label,
  secondaryLabel,
  showLabel = true,
  truncateLength,
  canDrop,
  dropTarget,
  onContextMenu,
  contextMenuOpen,
  dragging,
  dragNodeRef,
  badge,
  badgeColor,
  badgeTextColor,
  badgeBorderColor,
  badgeClassName,
  badgeLocation,
  labelOffset = 17,
  labelIconClass,
  labelIcon,
  labelIconPadding,
  onCollapseChange
}) => {
  const [hovered, hoverRef] = useHover();
  const [labelHover, labelHoverRef] = useHover();
  const dragLabelRef = useDragNode()[1];
  const refs = useCombineRefs<SVGPathElement>(hoverRef, dragNodeRef);
  const isHover = hover !== undefined ? hover : hovered;
  const labelPosition = element.getLabelPosition();

  let parent = element.getParent();
  let altGroup = false;
  while (!isGraph(parent)) {
    altGroup = !altGroup;
    parent = parent.getParent();
  }

  const children = element.getNodes().filter(c => c.isVisible());

  // cast to number and coerce
  const padding = maxPadding(element.getStyle<NodeStyle>().padding ?? 17);

  const { minX, minY, maxX, maxY } = children.reduce(
    (acc, child) => {
      const bounds = child.getBounds();
      return {
        minX: Math.min(acc.minX, bounds.x - padding),
        minY: Math.min(acc.minY, bounds.y - padding),
        maxX: Math.max(acc.maxX, bounds.x + bounds.width + padding),
        maxY: Math.max(acc.maxY, bounds.y + bounds.height + padding)
      };
    },
    { minX: Infinity, minY: Infinity, maxX: 0, maxY: 0 }
  );

  const [labelX, labelY] = React.useMemo(() => {
    if (!showLabel || !(label || element.getLabel())) {
      return [0, 0];
    }
    switch (labelPosition) {
      case LabelPosition.right:
        return [maxX + labelOffset, minY + (maxY - minY) / 2];
      case LabelPosition.bottom:
      default:
        return [minX + (maxX - minX) / 2, maxY + labelOffset];
    }
  }, [element, label, labelOffset, labelPosition, maxX, maxY, minX, minY, showLabel]);

  if (children.length === 0) {
    return null;
  }

  const groupClassName = css(
    styles.topologyGroup,
    className,
    altGroup && 'pf-m-alt-group',
    canDrop && 'pf-m-highlight',
    dragging && 'pf-m-dragging',
    selected && 'pf-m-selected'
  );
  const innerGroupClassName = css(
    styles.topologyGroup,
    className,
    altGroup && 'pf-m-alt-group',
    canDrop && 'pf-m-highlight',
    dragging && 'pf-m-dragging',
    selected && 'pf-m-selected',
    (isHover || labelHover) && 'pf-m-hover',
    canDrop && dropTarget && 'pf-m-drop-target'
  );

  return (
    <g ref={labelHoverRef} onContextMenu={onContextMenu} onClick={onSelect} className={groupClassName}>
      <Layer id={GROUPS_LAYER}>
        <g ref={refs} onContextMenu={onContextMenu} onClick={onSelect} className={innerGroupClassName}>
          <rect x={minX} y={minY} width={maxX - minX} height={maxY - minY} className={styles.topologyGroupBackground} />
        </g>
      </Layer>
      {showLabel && (label || element.getLabel()) && (
        <NodeLabel
          className={styles.topologyGroupLabel}
          x={labelX}
          y={labelY}
          position={labelPosition}
          paddingX={8}
          paddingY={5}
          dragRef={dragNodeRef ? dragLabelRef : undefined}
          status={element.getNodeStatus()}
          secondaryLabel={secondaryLabel}
          truncateLength={truncateLength}
          badge={badge}
          badgeColor={badgeColor}
          badgeTextColor={badgeTextColor}
          badgeBorderColor={badgeBorderColor}
          badgeClassName={badgeClassName}
          badgeLocation={badgeLocation}
          labelIconClass={labelIconClass}
          labelIcon={labelIcon}
          labelIconPadding={labelIconPadding}
          onContextMenu={onContextMenu}
          contextMenuOpen={contextMenuOpen}
          hover={isHover || labelHover}
          actionIcon={collapsible ? <CollapseIcon /> : undefined}
          onActionIconClick={() => onCollapseChange(element, true)}
        >
          {label || element.getLabel()}
        </NodeLabel>
      )}
    </g>
  );
};

export default observer(DefaultTaskGroup);
