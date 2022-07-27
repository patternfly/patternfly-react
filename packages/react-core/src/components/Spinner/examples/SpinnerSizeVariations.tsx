import React from 'react';
import { Spinner } from '@patternfly/react-core';

export const SpinnerSizeVariations: React.FunctionComponent = () => (
  <React.Fragment>
    <Spinner isSVG size="sm" aria-label="Contents of the small example" />
    <Spinner isSVG size="md" aria-label="Contents of the medium example" />
    <Spinner isSVG size="lg" aria-label="Contents of the large example" />
    <Spinner isSVG size="xl" aria-label="Contents of the extra large example" />
  </React.Fragment>
);
