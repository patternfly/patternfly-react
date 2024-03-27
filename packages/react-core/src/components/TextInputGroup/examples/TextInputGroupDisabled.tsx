import { FunctionComponent } from 'react';
import { TextInputGroup, TextInputGroupMain } from '@patternfly/react-core';

export const TextInputGroupDisabled: FunctionComponent = () => (
  <TextInputGroup isDisabled>
    <TextInputGroupMain value="Disabled" type="text" aria-label="Disabled text input group example input" />
  </TextInputGroup>
);
