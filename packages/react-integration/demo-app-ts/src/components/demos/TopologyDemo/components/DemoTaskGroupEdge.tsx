import * as React from 'react';
import { observer } from 'mobx-react';
import { Edge, TaskEdge } from '@patternfly/react-topology';

export const GROUPED_PIPELINE_NODE_SEPARATION_HORIZONTAL = 200;

interface DemoTaskEdgeProps {
  element: Edge;
}

const DemoTaskGroupEdge: React.FunctionComponent<DemoTaskEdgeProps> = props => (
  <TaskEdge nodeSeparation={GROUPED_PIPELINE_NODE_SEPARATION_HORIZONTAL} {...props} />
);

export default observer(DemoTaskGroupEdge);
