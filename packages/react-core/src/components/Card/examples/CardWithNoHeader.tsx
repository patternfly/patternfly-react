import { FunctionComponent } from 'react';
import { Card, CardBody, CardFooter } from '@patternfly/react-core';

export const CardWithNoHeader: FunctionComponent = () => (
  <Card>
    <CardBody>This card has no title </CardBody>
    <CardFooter>Footer</CardFooter>
  </Card>
);
