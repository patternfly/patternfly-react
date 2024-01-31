import React from 'react';
import { Card, CardTitle, CardBody, CardFooter } from '@patternfly/react-core';

export const CardSecondary: React.FunctionComponent = () => (
  <Card ouiaId="SecondaryCard" variant="secondary">
    <CardTitle>Title</CardTitle>
    <CardBody>Body</CardBody>
    <CardFooter>Footer</CardFooter>
  </Card>
);
