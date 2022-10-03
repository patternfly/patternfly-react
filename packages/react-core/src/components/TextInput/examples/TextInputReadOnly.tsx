import React from 'react';
import { TextInput } from '@patternfly/react-core';

export const TextInputReadOnly: React.FunctionComponent = () => (
  <TextInput value="read only text input example" type="text" isReadOnly aria-label="readonly input example" />
);
