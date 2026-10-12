import { Progress, ProgressSize } from '@rh-felt/react-core';

export const ProgressSmall: React.FunctionComponent = () => (
  <Progress value={33} title="Title" size={ProgressSize.sm} />
);
