import React from 'react';
import { Skeleton } from '@patternfly/react-core';

export const SkeletonPercentageWidth: React.FunctionComponent = () => (
  <React.Fragment>
    <Skeleton width="25%" screenreaderText="Loaded 25% of content" />
    <br />
    <Skeleton width="33%" screenreaderText="Loaded 33% of content" />
    <br />
    <Skeleton width="50%" screenreaderText="Loaded 50% of content" />
    <br />
    <Skeleton width="66%" screenreaderText="Loaded 66% of content" />
    <br />
    <Skeleton width="75%" screenreaderText="Loaded 75% of content" />
    <br />
    <Skeleton />
  </React.Fragment>
);
