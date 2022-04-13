import React from 'react';
import { Card, CardBody } from '@patternfly/react-core';

export const CardWithOnlyBodySection: React.FunctionComponent<React.PropsWithChildren<unknown>> = () => (
  <Card>
    <CardBody>Body</CardBody>
  </Card>
);
