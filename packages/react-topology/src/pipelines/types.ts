import { NodeModel } from '../types';

export enum RunStatus {
  Succeeded = 'Succeeded',
  Failed = 'Failed',
  Running = 'Running',
  'In Progress' = 'In Progress',
  FailedToStart = 'FailedToStart',
  Skipped = 'Skipped',
  Cancelled = 'Cancelled',
  Pending = 'Pending',
  Idle = 'Idle'
}

export enum WhenStatus {
  Met = 'Met',
  Unmet = 'Unmet'
}

export type PipelineNodeModel = NodeModel & {
  runAfterTasks?: string[];
};
