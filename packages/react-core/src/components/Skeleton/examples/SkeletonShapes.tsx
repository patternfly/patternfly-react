import { Fragment } from 'react';
import { Skeleton } from '@patternfly/react-core';

export const SkeletonShapes: React.FunctionComponent = () => (
  <Fragment>
    Small circle
    <Skeleton shape="circle" width="15%" screenreaderText="Loading circle content" />
    <br />
    Medium circle
    <Skeleton shape="circle" width="30%" />
    <br />
    Large circle
    <Skeleton shape="circle" width="50%" />
    <br />
    Small square
    <Skeleton shape="square" width="15%" screenreaderText="Loading square content" />
    <br />
    Medium square
    <Skeleton shape="square" width="30%" />
    <br />
    Large square
    <Skeleton shape="square" width="50%" />
    <br />
    Small rectangle
    <div style={{ height: '200px' }}>
      <Skeleton height="50%" width="50%" screenreaderText="Loading rectangle content" />
    </div>
    <br />
    Medium rectangle
    <div style={{ height: '200px' }}>
      <Skeleton height="75%" width="75%" />
    </div>
    <br />
    Large rectangle
    <div style={{ height: '200px' }}>
      <Skeleton height="100%" />
    </div>
  </Fragment>
);
