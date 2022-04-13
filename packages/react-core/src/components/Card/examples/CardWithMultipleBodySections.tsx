import React from 'react';
import { Card, CardTitle, CardBody, CardFooter } from '@patternfly/react-core';

export const CardWithMultipleBodySections: React.FunctionComponent<React.PropsWithChildren<unknown>> = () => (
  <Card>
    <CardTitle>Header</CardTitle>
    <CardBody>Body</CardBody>
    <CardBody>Body</CardBody>
    <CardBody>Body</CardBody>
    <CardFooter>Footer</CardFooter>
  </Card>
);
