import React from 'react';
import { Skeleton } from '@patternfly/react-core';

export const SkeletonPercentageHeight: React.FunctionComponent = () => (
  <div style={{ height: '400px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
    <Skeleton height="25%" width="15%" screenreaderText="Loaded 25% of content" />
    <Skeleton height="33%" width="15%" screenreaderText="Loaded 33% of content" />
    <Skeleton height="50%" width="15%" screenreaderText="Loaded 50% of content" />
    <Skeleton height="66%" width="15%" screenreaderText="Loaded 66% of content" />
    <Skeleton height="75%" width="15%" screenreaderText="Loaded 75% of content" />
    <Skeleton height="100%" width="15%" screenreaderText="Loaded 100% of content" />
  </div>
);
