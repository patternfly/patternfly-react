import React from 'react';
import { Skeleton } from '@patternfly/react-core';

export const SkeletonPercentageWidth: React.FunctionComponent = () => (
  <React.Fragment>
    <Skeleton width="25%" screenreaderText="Loading contents" />
    <br />
    <Skeleton width="33%" />
    <br />
    <Skeleton width="50%" />
    <br />
    <Skeleton width="66%" />
    <br />
    <Skeleton width="75%" />
    <br />
    <Skeleton />
  </React.Fragment>
);
