import { Progress, ProgressVariant } from '@rh-felt/react-core';

export const ProgressWarning: React.FunctionComponent = () => (
  <Progress value={90} title="Title" variant={ProgressVariant.warning} />
);
