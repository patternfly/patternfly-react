import { Progress, ProgressMeasureLocation } from '@rh-felt/react-core';

export const ProgressWithoutMeasure: React.FunctionComponent = () => (
  <Progress value={33} title="Title" measureLocation={ProgressMeasureLocation.none} />
);
