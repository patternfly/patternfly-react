import { Progress, ProgressSize } from '@rh-felt/react-core';

export const ProgressLarge: React.FunctionComponent = () => (
  <Progress value={33} title="Title" size={ProgressSize.lg} />
);
