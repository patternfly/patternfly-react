import { Progress, ProgressVariant } from '@rh-felt/react-core';

export const ProgressSuccess: React.FunctionComponent = () => (
  <Progress value={100} title="Title" variant={ProgressVariant.success} />
);
