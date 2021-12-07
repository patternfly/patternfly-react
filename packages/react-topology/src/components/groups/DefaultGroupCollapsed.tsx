import * as React from 'react';
import { observer } from 'mobx-react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Topology/topology-components';
import ExpandIcon from '@patternfly/react-icons/dist/esm/icons/expand-alt-icon';
import { Layer } from '../layers';
import {
  createSvgIdUrl,
  LabelPosition,
  useCombineRefs,
  useHover,
  useSize,
  WithBadgeProps,
  WithCollapsibleGroupProps,
  WithLabelProps
} from '../../utils';
import { Node } from '../../types';
import { useDragNode, useSvgAnchor, WithContextMenuProps, WithDndDropProps, WithSelectionProps } from '../../behavior';
import { Ellipse } from '../nodes/shapes';
import NodeLabel from '../nodes/labels/NodeLabel';
import { NODE_SHADOW_FILTER_ID_HOVER } from '../nodes/NodeShadows';
import LabelBadge from '../nodes/labels/LabelBadge';

type DefaultGroupCollapsedProps = {
  element: Node;
  droppable?: boolean;
  canDrop?: boolean;
  dropTarget?: boolean;
  dragging?: boolean;
  hover?: boolean;
} & WithSelectionProps &
  WithLabelProps &
  WithCollapsibleGroupProps &
  WithBadgeProps &
  WithDndDropProps &
  WithContextMenuProps;

const DefaultGroupCollapsed: React.FC<DefaultGroupCollapsedProps> = ({
  element,
  collapsible,
  selected,
  onSelect,
  children,
  hover,
  collapsedWidth,
  collapsedHeight,
  getCollapsedShape,
  onCollapseChange,
  collapsedShadowOffset = 8,
  dndDropRef,
  canDrop,
  dropTarget,
  onContextMenu,
  contextMenuOpen,
  dragging,
  labelPosition,
  badge,
  badgeColor,
  badgeTextColor,
  badgeBorderColor,
  badgeClassName,
  badgeLocation
}) => {
  const [hovered, hoverRef] = useHover();
  const [labelHover, labelHoverRef] = useHover();
  const dragNodeRef = useDragNode()[1];
  const dragLabelRef = useDragNode()[1];
  const refs = useCombineRefs<SVGPathElement>(hoverRef, dragNodeRef);
  const isHover = hover !== undefined ? hover : hovered;
  const [shapeSize, shapeRef] = useSize([collapsedWidth, collapsedHeight]);
  const anchorRef = useSvgAnchor();
  const shapeAnchorRef = useCombineRefs(shapeRef, anchorRef);
  const childCount = element.getAllNodeChildren().length;
  const [badgeSize, badgeRef] = useSize([childCount]);

  const groupClassName = css(
    styles.topologyGroup,
    canDrop && 'pf-m-highlight',
    dragging && 'pf-m-dragging',
    selected && 'pf-m-selected'
  );

  const ShapeComponent = getCollapsedShape ? getCollapsedShape(element) : Ellipse;
  const filter = isHover || dragging || dropTarget ? createSvgIdUrl(NODE_SHADOW_FILTER_ID_HOVER) : undefined;

  return (
    <g
      key={`${element.getId()}-collapsed`}
      ref={labelHoverRef}
      onContextMenu={onContextMenu}
      onClick={onSelect}
      className={groupClassName}
    >
      <Layer id="groups">
        <g ref={refs} onClick={onSelect}>
          {ShapeComponent && (
            <>
              <g transform={`translate(${collapsedShadowOffset * 2}, 0)`}>
                <ShapeComponent
                  className={css(styles.topologyNodeBackground, 'pf-m-disabled')}
                  element={element}
                  width={collapsedWidth}
                  height={collapsedHeight}
                />
              </g>
              <g transform={`translate(${collapsedShadowOffset}, 0)`}>
                <ShapeComponent
                  className={css(styles.topologyNodeBackground, 'pf-m-disabled')}
                  element={element}
                  width={collapsedWidth}
                  height={collapsedHeight}
                />
              </g>
              <ShapeComponent
                className={css(styles.topologyNodeBackground)}
                element={element}
                width={collapsedWidth}
                height={collapsedHeight}
                dndDropRef={dndDropRef}
                anchorRef={shapeAnchorRef}
                filter={filter}
              />
            </>
          )}
        </g>
      </Layer>
      {shapeSize && childCount && (
        <LabelBadge
          className={styles.topologyGroupCollapsedBadge}
          ref={badgeRef}
          x={shapeSize.width - 8}
          y={(shapeSize.width - (badgeSize?.height ?? 0)) / 2}
          badge={`${childCount}`}
          badgeColor={badgeColor}
          badgeTextColor={badgeTextColor}
          badgeBorderColor={badgeBorderColor}
        />
      )}
      <NodeLabel
        className={styles.topologyGroupLabel}
        x={labelPosition === LabelPosition.right ? collapsedWidth + 8 : collapsedWidth / 2}
        y={labelPosition === LabelPosition.right ? collapsedHeight / 2 : collapsedHeight + 6}
        paddingX={8}
        paddingY={5}
        dragRef={dragLabelRef}
        status={status}
        badge={badge}
        badgeColor={badgeColor}
        badgeTextColor={badgeTextColor}
        badgeBorderColor={badgeBorderColor}
        badgeClassName={badgeClassName}
        badgeLocation={badgeLocation}
        onContextMenu={onContextMenu}
        contextMenuOpen={contextMenuOpen}
        hover={isHover || labelHover}
        actionIcon={collapsible ? <ExpandIcon /> : undefined}
        onActionIconClick={() => onCollapseChange(element, false)}
      >
        {element.getLabel()}
      </NodeLabel>
      {children}
    </g>
  );
};

export default observer(DefaultGroupCollapsed);
