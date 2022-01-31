import * as React from 'react';
import {
  DEFAULT_DECORATOR_RADIUS,
  Decorator,
  DefaultNode,
  getDefaultShapeDecoratorCenter,
  Node,
  NodeShape,
  NodeStatus,
  observer,
  TopologyQuadrant,
  WithContextMenuProps,
  WithDragNodeProps,
  WithSelectionProps,
  ShapeProps
} from '@patternfly/react-topology';
import DefaultIcon from '@patternfly/react-icons/dist/esm/icons/builder-image-icon';
import AlternateIcon from '@patternfly/react-icons/dist/esm/icons/regions-icon';
import FolderOpenIcon from '@patternfly/react-icons/dist/esm/icons/folder-open-icon';
import BlueprintIcon from '@patternfly/react-icons/dist/esm/icons/blueprint-icon';
import PauseCircle from '@patternfly/react-icons/dist/esm/icons/pause-circle-icon';
import Thumbtack from '@patternfly/react-icons/dist/esm/icons/thumbtack-icon';

export enum DataTypes {
  Default,
  Alternate
}
const ICON_PADDING = 20;

type StyleNodeProps = {
  element: Node;
  getCustomShape?: (node: Node) => React.FC<ShapeProps>;
  getShapeDecoratorCenter?: (quadrant: TopologyQuadrant, node: Node, radius?: number) => { x: number; y: number };
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
    node: Node,
    radius?: number
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

const StyleNode: React.FC<StyleNodeProps> = ({ element, onContextMenu, contextMenuOpen, ...rest }) => {
  const data = element.getData();

  const passedData = React.useMemo(() => {
    const newData = { ...data };
    Object.keys(newData).forEach(key => {
      if (newData[key] === undefined) {
        delete newData[key];
      }
    });
    return newData;
  }, [data]);

  return (
    <DefaultNode
      element={element}
      {...rest}
      {...passedData}
      onContextMenu={data.showContextMenu ? onContextMenu : undefined}
      contextMenuOpen={contextMenuOpen}
      attachments={renderDecorators(element, passedData, rest.getShapeDecoratorCenter)}
    >
      {renderIcon(passedData, element)}
    </DefaultNode>
  );
};

export default observer(StyleNode);
