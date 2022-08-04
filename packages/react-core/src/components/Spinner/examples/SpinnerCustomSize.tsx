import React from 'react';
import { Spinner } from '@patternfly/react-core';

export const SpinnerCustomSize: React.FunctionComponent = () => (
  <Spinner isSVG diameter="80px" aria-label="Contents of the custom size example" />
);
