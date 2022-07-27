import React from 'react';
import { Radio } from '@patternfly/react-core';

export const RadioWithDescription: React.FunctionComponent = () => (
  <Radio
    id="radio-with-description"
    label="Radio with description example"
    name="radio-7"
    description="Single-tenant cloud service hosted and managed by Red Hat that offers high-availability enterprise-grade clusters in a virtual private cloud on AWS or GCP."
  />
);
