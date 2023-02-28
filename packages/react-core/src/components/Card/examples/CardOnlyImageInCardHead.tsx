import React from 'react';
import { Brand, Card, CardBody, CardFooter, CardHeader, CardTitle } from '@patternfly/react-core';
import pfLogo from './pfLogo.svg';

export const CardOnlyImageInCardHead: React.FunctionComponent = () => (
  <Card>
    <CardHeader>
      <Brand src={pfLogo} alt="PatternFly logo" style={{ height: '50px' }} />
    </CardHeader>
    <CardTitle>Title</CardTitle>
    <CardBody>Body</CardBody>
    <CardFooter>Footer</CardFooter>
  </Card>
);
