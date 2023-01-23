import * as React from 'react';
import { observer } from 'mobx-react';
import {
  WithCreateConnectorProps,
  Dimensions,
  Node,
  WithContextMenuProps,
  WithDragNodeProps,
  WithSelectionProps,
  WithDndDragProps,
  WithDndDropProps,
  ShapeProps,
  useAnchor,
  EllipseAnchor,
  action
} from '@patternfly/react-topology';
import DemoDefaultNode from './DemoDefaultNode';

type CustomCircleNodeProps = {
  element: Node;
  droppable?: boolean;
  canDrop?: boolean;
} & WithSelectionProps &
  WithDragNodeProps &
  WithDndDragProps &
  WithDndDropProps &
  WithCreateConnectorProps &
  WithContextMenuProps;

const CustomCircle: React.FunctionComponent<ShapeProps> = ({ element, className }) => {
  useAnchor(EllipseAnchor);
  React.useEffect(() => {
    // init height
    action(() => element.setDimensions(new Dimensions(40, 40)))();
  }, [element]);
  const r = element.getDimensions().width / 2;
  return (
    <circle
      className={className}
      cx={r}
      cy={r}
      r={r}
      onClick={() => {
        const size = element.getDimensions().width === 40 ? 80 : 40;
        action(() => element.setDimensions(new Dimensions(size, size)))();
      }}
    />
  );
};

const CustomCircleNode: React.FunctionComponent<CustomCircleNodeProps> = props => (
  <DemoDefaultNode getCustomShape={() => CustomCircle} {...props} />
);

export default observer(CustomCircleNode);
