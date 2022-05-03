import * as React from 'react';
import {
  Decorator,
  DEFAULT_DECORATOR_RADIUS,
  DefaultNode,
  getDefaultShapeDecoratorCenter,
  Node,
  NodeShape,
  NodeStatus,
  observer,
  ScaleDetailsLevel,
  ShapeProps,
  TopologyQuadrant,
  WithContextMenuProps,
  WithDragNodeProps,
  WithSelectionProps
} from '@patternfly/react-topology';
import DefaultIcon from '@patternfly/react-icons/dist/esm/icons/builder-image-icon';
import AlternateIcon from '@patternfly/react-icons/dist/esm/icons/regions-icon';
import FolderOpenIcon from '@patternfly/react-icons/dist/esm/icons/folder-open-icon';
import BlueprintIcon from '@patternfly/react-icons/dist/esm/icons/blueprint-icon';
import PauseCircle from '@patternfly/react-icons/dist/esm/icons/pause-circle-icon';
import Thumbtack from '@patternfly/react-icons/dist/esm/icons/thumbtack-icon';
import useDetailsLevel from '@patternfly/react-topology/dist/esm/hooks/useDetailsLevel';
import { SVGIconProps } from '@patternfly/react-icons/dist/esm/createIcon';

export enum DataTypes {
  Default,
  Alternate
}
const ICON_PADDING = 20;

type StyleNodeProps = {
  element: Node;
  getCustomShape?: (node: Node) => React.FunctionComponent<ShapeProps>;
  getShapeDecoratorCenter?: (quadrant: TopologyQuadrant, node: Node) => { x: number; y: number };
  showLabel?: boolean; // Defaults to true
  labelIcon?: React.ComponentClass<SVGIconProps>;
  showStatusDecorator?: boolean; // Defaults to false
  regrouping?: boolean;
  dragging?: boolean;
} & WithContextMenuProps &
  WithDragNodeProps &
  WithSelectionProps;

const getTypeIcon = (dataType?: DataTypes): any => {
  switch (dataType) {
    case DataTypes.Alternate:
      return AlternateIcon;
    default:
      return DefaultIcon;
  }
};

const renderIcon = (data: { dataType?: DataTypes }, element: Node): React.ReactNode => {
  const { width, height } = element.getDimensions();
  const shape = element.getNodeShape();
  const iconSize =
    (shape === NodeShape.trapezoid ? width : Math.min(width, height)) -
    (shape === NodeShape.stadium ? 5 : ICON_PADDING) * 2;
  const Component = getTypeIcon(data.dataType);

  return (
    <g transform={`translate(${(width - iconSize) / 2}, ${(height - iconSize) / 2})`}>
      <Component style={{ color: '#393F44' }} width={iconSize} height={iconSize} />
    </g>
  );
};

const renderDecorator = (
  element: Node,
  quadrant: TopologyQuadrant,
  icon: React.ReactNode,
  getShapeDecoratorCenter?: (
    quadrant: TopologyQuadrant,
    node: Node,
    radius?: number
  ) => {
    x: number;
    y: number;
  }
): React.ReactNode => {
  const { x, y } = getShapeDecoratorCenter
    ? getShapeDecoratorCenter(quadrant, element)
    : getDefaultShapeDecoratorCenter(quadrant, element);

  return <Decorator x={x} y={y} radius={DEFAULT_DECORATOR_RADIUS} showBackground icon={icon} />;
};

const renderDecorators = (
  element: Node,
  data: { showDecorators?: boolean },
  getShapeDecoratorCenter?: (
    quadrant: TopologyQuadrant,
    node: Node
  ) => {
    x: number;
    y: number;
  }
): React.ReactNode => {
  if (!data.showDecorators) {
    return null;
  }
  const nodeStatus = element.getNodeStatus();
  return (
    <>
      {!nodeStatus || nodeStatus === NodeStatus.default
        ? renderDecorator(element, TopologyQuadrant.upperLeft, <FolderOpenIcon />, getShapeDecoratorCenter)
        : null}
      {renderDecorator(element, TopologyQuadrant.upperRight, <BlueprintIcon />, getShapeDecoratorCenter)}
      {renderDecorator(element, TopologyQuadrant.lowerLeft, <PauseCircle />, getShapeDecoratorCenter)}
      {renderDecorator(element, TopologyQuadrant.lowerRight, <Thumbtack />, getShapeDecoratorCenter)}
    </>
  );
};

const StyleNode: React.FunctionComponent<StyleNodeProps> = ({
  element,
  onContextMenu,
  contextMenuOpen,
  showLabel,
  dragging,
  regrouping,
  ...rest
}) => {
  const data = element.getData();
  const detailsLevel = useDetailsLevel();

  const passedData = React.useMemo(() => {
    const newData = { ...data };
    Object.keys(newData).forEach(key => {
      if (newData[key] === undefined) {
        delete newData[key];
      }
    });
    return newData;
  }, [data]);

  const LabelIcon = passedData.labelIcon;
  return (
    <DefaultNode
      element={element}
      {...rest}
      {...passedData}
      dragging={dragging}
      regrouping={regrouping}
      showLabel={detailsLevel === ScaleDetailsLevel.high && showLabel}
      showStatusBackground={detailsLevel === ScaleDetailsLevel.low}
      showStatusDecorator={detailsLevel === ScaleDetailsLevel.high && passedData.showStatusDecorator}
      onContextMenu={data.showContextMenu ? onContextMenu : undefined}
      contextMenuOpen={contextMenuOpen}
      labelIcon={LabelIcon && <LabelIcon noVerticalAlign />}
      attachments={
        detailsLevel === ScaleDetailsLevel.high && renderDecorators(element, passedData, rest.getShapeDecoratorCenter)
      }
    >
      {detailsLevel !== ScaleDetailsLevel.low && renderIcon(passedData, element)}
    </DefaultNode>
  );
};

export default observer(StyleNode);
