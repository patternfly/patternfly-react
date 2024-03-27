import { FunctionComponent } from 'react';
import { TextArea } from '@patternfly/react-core';

export const TextAreaUncontrolled: FunctionComponent = () => (
  <TextArea defaultValue="default value" aria-label="uncontrolled text area example" />
);
