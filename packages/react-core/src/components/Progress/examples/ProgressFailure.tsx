import { Progress, ProgressVariant } from '@rh-felt/react-core';

export const ProgressFailure: React.FunctionComponent = () => (
  <Progress value={33} title="Title" variant={ProgressVariant.danger} />
);
