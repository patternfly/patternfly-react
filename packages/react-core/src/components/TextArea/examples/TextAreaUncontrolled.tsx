import React from 'react';
import { TextArea } from '@patternfly/react-core';

export const TextAreaUncontrolled: React.FunctionComponent = () => (
  <TextArea defaultValue="default value" aria-label="uncontrolled text area example" />
);
