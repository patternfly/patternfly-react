import { FunctionComponent } from 'react';
import { Card, CardBody } from '@patternfly/react-core';

export const CardWithOnlyBodySection: FunctionComponent = () => (
  <Card>
    <CardBody>Body</CardBody>
  </Card>
);
