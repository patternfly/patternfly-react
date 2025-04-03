import { Fragment } from 'react';
import { Skeleton } from '@patternfly/react-core';

export const SkeletonPercentageWidth: React.FunctionComponent = () => (
  <Fragment>
    <Skeleton width="25%" screenreaderText="Loading percentage width content" />
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
  </Fragment>
);
