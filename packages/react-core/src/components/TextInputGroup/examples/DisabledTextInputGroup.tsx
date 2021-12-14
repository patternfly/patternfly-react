import React from 'react';
import { TextInputGroup, TextInputGroupMain } from '@patternfly/react-core';

export const DisabledTextInputGroup: React.FunctionComponent = () => (
  <TextInputGroup isDisabled>
    <TextInputGroupMain value="Disabled" type="text" aria-label="Disabled text input group example input" />
  </TextInputGroup>
);
