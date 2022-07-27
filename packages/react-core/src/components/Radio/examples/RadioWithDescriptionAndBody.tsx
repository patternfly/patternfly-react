import React from 'react';
import { Radio } from '@patternfly/react-core';

export const RadioWithDescriptionAndBody: React.FunctionComponent = () => (
  <Radio
    id="radio-description-body"
    label="Radio with description and body"
    description="Single-tenant cloud service hosted and managed by Red Hat that offers high-availability enterprise-grade clusters in a virtual private cloud on AWS or GCP."
    body="This is where custom content goes."
    name="radio-8"
  />
);
