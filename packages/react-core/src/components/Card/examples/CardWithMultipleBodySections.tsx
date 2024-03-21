import { FunctionComponent } from 'react';
import { Card, CardTitle, CardBody, CardFooter } from '@patternfly/react-core';

export const CardWithMultipleBodySections: FunctionComponent = () => (
  <Card>
    <CardTitle>Title</CardTitle>
    <CardBody>Body</CardBody>
    <CardBody>Body</CardBody>
    <CardBody>Body</CardBody>
    <CardFooter>Footer</CardFooter>
  </Card>
);
