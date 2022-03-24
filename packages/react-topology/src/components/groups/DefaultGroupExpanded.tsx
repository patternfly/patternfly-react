import * as React from 'react';
import { observer } from 'mobx-react';
import { polygonHull } from 'd3-polygon';
import * as _ from 'lodash';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Topology/topology-components';
import CollapseIcon from '@patternfly/react-icons/dist/esm/icons/compress-alt-icon';
import NodeLabel from '../nodes/labels/NodeLabel';
import { Layer } from '../layers';
import { GROUPS_LAYER } from '../../const';
import { hullPath, maxPadding, useCombineRefs, useHover } from '../../utils';
import { BadgeLocation, isGraph, Node, NodeShape, NodeStyle, PointTuple } from '../../types';
import { useDragNode, useSvgAnchor, WithContextMenuProps, WithDndDropProps, WithSelectionProps } from '../../behavior';
import { CollapsibleGroupProps } from './types';

type DefaultGroupExpandedProps = {
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
} & CollapsibleGroupProps &
  WithSelectionProps &
  WithDndDropProps &
  WithContextMenuProps;

type PointWithSize = [number, number, number];

// Return the point whose Y is the largest value.
// If multiple points are found, compute the center X between them
// export for testing only
export function computeLabelLocation(points: PointWithSize[]): PointWithSize {
  let lowPoints: PointWithSize[];
  const threshold = 5;

  _.forEach(points, p => {
    const delta = !lowPoints ? Infinity : Math.round(p[1]) - Math.round(lowPoints[0][1]);
    if (delta > threshold) {
      lowPoints = [p];
    } else if (Math.abs(delta) <= threshold) {
      lowPoints.push(p);
    }
  });
  return [
    (_.minBy(lowPoints, p => p[0])[0] + _.maxBy(lowPoints, p => p[0])[0]) / 2,
    lowPoints[0][1],
    // use the max size value
    _.maxBy(lowPoints, p => p[2])[2]
  ];
}

const DefaultGroupExpanded: React.FC<DefaultGroupExpandedProps> = ({
  element,
  collapsible,
  selected,
  onSelect,
  hover,
  label,
  secondaryLabel,
  showLabel,
  truncateLength,
  dndDropRef,
  droppable,
  canDrop,
  dropTarget,
  onContextMenu,
  contextMenuOpen,
  dragging,
  badge,
  badgeColor,
  badgeTextColor,
  badgeBorderColor,
  badgeClassName,
  badgeLocation,
  onCollapseChange
}) => {
  const [hovered, hoverRef] = useHover();
  const [labelHover, labelHoverRef] = useHover();
  const [locations, setLocations] = React.useState<{ labelLocation: PointWithSize; path: string }>();
  const dragNodeRef = useDragNode()[1];
  const dragLabelRef = useDragNode()[1];
  const refs = useCombineRefs<SVGPathElement>(hoverRef, dragNodeRef);
  const isHover = hover !== undefined ? hover : hovered;
  const anchorRef = useSvgAnchor();
  const outlineRef = useCombineRefs(dndDropRef, anchorRef);
  const children = element.getNodes().filter(c => c.isVisible());
  const prevPoints = React.useRef<(PointWithSize | PointTuple)[]>();

  let parent = element.getParent();
  let altGroup = false;
  while (!isGraph(parent)) {
    altGroup = !altGroup;
    parent = parent.getParent();
  }

  // cast to number and coerce
  const padding = maxPadding(element.getStyle<NodeStyle>().padding ?? 17);
  const hullPadding = React.useCallback((point: PointWithSize | PointTuple) => (point[2] || 0) + padding, [padding]);

  const points: (PointWithSize | PointTuple)[] = React.useMemo(() => {
    const newPoints: (PointWithSize | PointTuple)[] = [];
    _.forEach(children, c => {
      if (c.getNodeShape() === NodeShape.ellipse || c.getNodeShape() === NodeShape.circle) {
        const bounds = c.getBounds();
        const { width, height } = bounds;
        const { x, y } = bounds.getCenter();
        const radius = Math.max(width, height) / 2;
        newPoints.push([x, y, radius] as PointWithSize);
      } else {
        // add all 4 corners
        const { width, height, x, y } = c.getBounds();
        newPoints.push([x, y, 0] as PointWithSize);
        newPoints.push([x + width, y, 0] as PointWithSize);
        newPoints.push([x, y + height, 0] as PointWithSize);
        newPoints.push([x + width, y + height, 0] as PointWithSize);
      }
    });
    if (!_.isEqual(prevPoints.current, newPoints)) {
      prevPoints.current = newPoints;
      return newPoints;
    }
    return prevPoints.current;
  }, [children]);

  React.useEffect(() => {
    const hullPoints: (PointWithSize | PointTuple)[] =
      points.length > 2 ? polygonHull(points as PointTuple[]) : (points as PointTuple[]);
    if (!hullPoints) {
      return;
    }

    // change the box only when not dragging
    setLocations(prev => ({
      labelLocation: computeLabelLocation(hullPoints as PointWithSize[]),
      path: droppable ? prev.path : hullPath(hullPoints as PointTuple[], hullPadding)
    }));
    // Don't update when droppable changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [points, hullPadding]);

  if (!children.length || !locations?.path) {
    return null;
  }

  const groupClassName = css(
    styles.topologyGroup,
    altGroup && 'pf-m-alt-group',
    canDrop && 'pf-m-highlight',
    dragging && 'pf-m-dragging',
    selected && 'pf-m-selected'
  );
  const innerGroupClassName = css(
    styles.topologyGroup,
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
          <path ref={outlineRef} className={styles.topologyGroupBackground} d={locations.path} />
        </g>
      </Layer>
      {showLabel && (
        <NodeLabel
          className={styles.topologyGroupLabel}
          x={locations.labelLocation[0]}
          y={locations.labelLocation[1] + hullPadding(locations.labelLocation) + 24}
          paddingX={8}
          paddingY={5}
          dragRef={dragLabelRef}
          status={element.getNodeStatus()}
          secondaryLabel={secondaryLabel}
          truncateLength={truncateLength}
          badge={badge}
          badgeColor={badgeColor}
          badgeTextColor={badgeTextColor}
          badgeBorderColor={badgeBorderColor}
          badgeClassName={badgeClassName}
          badgeLocation={badgeLocation}
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

export default observer(DefaultGroupExpanded);
