import React from 'react';
import { Spinner } from '@patternfly/react-core';

export const SpinnerSizeVariations: React.FunctionComponent = () => (
  <React.Fragment>
    <Spinner size="sm" aria-label="Contents of the small example" />
    <Spinner size="md" aria-label="Contents of the medium example" />
    <Spinner size="lg" aria-label="Contents of the large example" />
    <Spinner size="xl" aria-label="Contents of the extra large example" />
  </React.Fragment>
);
