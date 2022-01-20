import React from 'react';
import { Backdrop, Spinner, Bullseye } from '@patternfly/react-core';

export const BackdropSpinner: React.FunctionComponent = () => (
  <Backdrop>
    <Bullseye>
      <Spinner />
    </Bullseye>
  </Backdrop>
);
