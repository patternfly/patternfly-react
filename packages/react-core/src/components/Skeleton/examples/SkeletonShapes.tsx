import React from 'react';
import { Skeleton } from '@patternfly/react-core';

export const SkeletonShapes: React.FunctionComponent = () => (
  <React.Fragment>
    Small circle
    <Skeleton shape="circle" width="15%" screenreaderText="Loading small circle contents" />
    <br />
    Medium circle
    <Skeleton shape="circle" width="30%" screenreaderText="Loading medium circle contents" />
    <br />
    Large circle
    <Skeleton shape="circle" width="50%" screenreaderText="Loading large circle contents" />
    <br />
    Small square
    <Skeleton shape="square" width="15%" screenreaderText="Loading small square contents" />
    <br />
    Medium square
    <Skeleton shape="square" width="30%" screenreaderText="Loading medium square contents" />
    <br />
    Large square
    <Skeleton shape="square" width="50%" screenreaderText="Loading large square contents" />
    <br />
    Small rectangle
    <div style={{ height: '200px' }}>
      <Skeleton height="50%" width="50%" screenreaderText="Loading small rectangle contents" />
    </div>
    <br />
    Medium rectangle
    <div style={{ height: '200px' }}>
      <Skeleton height="75%" width="75%" screenreaderText="Loading medium rectangle contents" />
    </div>
    <br />
    Large rectangle
    <div style={{ height: '200px' }}>
      <Skeleton height="100%" screenreaderText="Loading large rectangle contents" />
    </div>
  </React.Fragment>
);
