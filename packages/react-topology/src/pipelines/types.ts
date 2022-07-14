import { NodeModel } from '../types';

export enum RunStatus {
  Succeeded = 'Succeeded',
  Failed = 'Failed',
  Running = 'Running',
  InProgress = 'InProgress',
  FailedToStart = 'FailedToStart',
  Skipped = 'Skipped',
  Cancelled = 'Cancelled',
  Pending = 'Pending',
  Idle = 'Idle'
}

export enum WhenStatus {
  Met = 'Met',
  Unmet = 'Unmet',
  Pending = 'Pending',
  InProgress = 'InProgress'
}

export type PipelineNodeModel = NodeModel & {
  runAfterTasks?: string[];
};
