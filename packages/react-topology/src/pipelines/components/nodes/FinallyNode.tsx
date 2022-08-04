import * as React from 'react';
import TaskNode, { TaskNodeProps } from './TaskNode';

const FinallyNode: React.FC<TaskNodeProps> = props => (
  <TaskNode whenOffset={0} whenSize={0} truncateLength={22} {...props} />
);

export default FinallyNode;
