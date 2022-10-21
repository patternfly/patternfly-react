import * as React from 'react';
import { observer } from 'mobx-react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Topology/topology-components';
import { Edge } from '../../../types';
import { integralShapePath } from '../../utils';

interface TaskEdgeProps {
  element: Edge;
  className?: string;
  nodeSeparation?: number;
}

const TaskEdge: React.FunctionComponent<TaskEdgeProps> = ({ element, className, nodeSeparation }) => {
  const startPoint = element.getStartPoint();
  const endPoint = element.getEndPoint();
  const groupClassName = css(styles.topologyEdge, className);
  const startIndent: number = element.getData()?.indent || 0;

  return (
    <g data-test-id="task-handler" className={groupClassName} fillOpacity={0}>
      <path
        d={integralShapePath(startPoint, endPoint, startIndent, nodeSeparation)}
        transform="translate(0.5,0.5)"
        shapeRendering="geometricPrecision"
      />
    </g>
  );
};

export default observer(TaskEdge);
