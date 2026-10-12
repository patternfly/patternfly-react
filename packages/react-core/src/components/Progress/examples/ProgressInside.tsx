import { Progress, ProgressMeasureLocation } from '@rh-felt/react-core';

export const ProgressInside: React.FunctionComponent = () => (
  <Progress value={33} title="Title" measureLocation={ProgressMeasureLocation.inside} />
);
