import { Skeleton } from '@patternfly/react-core';

export const SkeletonPercentageHeight: React.FunctionComponent = () => (
  <div style={{ height: '400px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
    <Skeleton height="25%" width="15%" screenreaderText="Loading percentage height content" />
    <Skeleton height="33%" width="15%" />
    <Skeleton height="50%" width="15%" />
    <Skeleton height="66%" width="15%" />
    <Skeleton height="75%" width="15%" />
    <Skeleton height="100%" width="15%" />
  </div>
);
