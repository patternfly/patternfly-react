import { FunctionComponent } from 'react';
import { Card, CardTitle, CardBody } from '@patternfly/react-core';

export const CardWithNoFooter: FunctionComponent = () => (
  <Card>
    <CardTitle>Title</CardTitle>
    <CardBody>This card has no footer</CardBody>
  </Card>
);
