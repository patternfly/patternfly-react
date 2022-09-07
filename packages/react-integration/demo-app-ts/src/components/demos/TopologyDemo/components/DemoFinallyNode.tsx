import * as React from 'react';
import { observer } from 'mobx-react';
import {
  DEFAULT_LAYER,
  FinallyNode,
  Layer,
  Node,
  ScaleDetailsLevel,
  TOP_LAYER,
  useDetailsLevel,
  useHover,
  WithContextMenuProps,
  WithSelectionProps
} from '@patternfly/react-topology';

type DemoFinallyNodeProps = {
  element: Node;
} & WithContextMenuProps &
  WithSelectionProps;

const DemoFinallyNode: React.FunctionComponent<DemoFinallyNodeProps> = ({ ...props }) => {
  const [hover, hoverRef] = useHover();
  const detailsLevel = useDetailsLevel();

  return (
    <Layer id={detailsLevel !== ScaleDetailsLevel.high && hover ? TOP_LAYER : DEFAULT_LAYER}>
      <g ref={hoverRef}>
        <FinallyNode scaleNode={hover && detailsLevel !== ScaleDetailsLevel.high} hideDetailsAtMedium {...props} />
      </g>
    </Layer>
  );
};

export default observer(DemoFinallyNode);
