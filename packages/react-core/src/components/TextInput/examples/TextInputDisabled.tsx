import React from 'react';
import { TextInput } from '@patternfly/react-core';

export const TextInputBasic: React.FunctionComponent = () => (
  <TextInput value="disabled text input example" type="text" aria-label="disabled text input example" isDisabled />
);
