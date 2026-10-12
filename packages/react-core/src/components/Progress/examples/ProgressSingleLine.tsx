import { Progress, ProgressMeasureLocation } from '@rh-felt/react-core';

export const ProgressSingleLine: React.FunctionComponent = () => (
  <Progress value={33} measureLocation={ProgressMeasureLocation.outside} aria-label="Title" />
);
