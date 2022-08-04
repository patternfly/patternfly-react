import * as React from 'react';
import { observer } from 'mobx-react';
import { Edge } from '../../../types';
import { integralShapePath } from '../../utils/draw-utils';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Topology/topology-components';

interface TaskEdgeProps {
  element: Edge;
  className?: string;
}

const TaskEdge: React.FunctionComponent<TaskEdgeProps> = ({ element, className }) => {
  const startPoint = element.getStartPoint();
  const endPoint = element.getEndPoint();
  const groupClassName = css(styles.topologyEdge, className);
  const startIndent: number = element.getData()?.indent || 0;

  return (
    <g data-test-id="task-handler" className={groupClassName} fillOpacity={0}>
      <path
        d={integralShapePath(startPoint, endPoint, startIndent)}
        transform="translate(0.5,0.5)"
        shapeRendering="geometricPrecision"
      />
    </g>
  );
};

export default observer(TaskEdge);
