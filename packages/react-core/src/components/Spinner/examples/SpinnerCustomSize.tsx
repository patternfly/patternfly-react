import { FunctionComponent } from 'react';
import { Spinner } from '@patternfly/react-core';

export const SpinnerCustomSize: FunctionComponent = () => (
  <Spinner diameter="80px" aria-label="Contents of the custom size example" />
);
