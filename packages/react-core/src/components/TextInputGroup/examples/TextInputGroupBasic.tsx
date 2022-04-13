import React from 'react';
import { TextInputGroup, TextInputGroupMain } from '@patternfly/react-core';

export const TextInputGroupBasic: React.FunctionComponent<React.PropsWithChildren<unknown>> = () => (
  <TextInputGroup>
    <TextInputGroupMain />
  </TextInputGroup>
);
