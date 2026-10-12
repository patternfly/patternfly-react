import { Progress, ProgressMeasureLocation } from '@rh-felt/react-core';

export const ProgressOutside: React.FunctionComponent = () => (
  <Progress value={33} title="Title" measureLocation={ProgressMeasureLocation.outside} />
);
