import React from 'react';
import { Card, CardTitle, CardBody } from '@patternfly/react-core';

export const CardWithNoFooter: React.FunctionComponent = () => (
  <Card>
    <CardTitle>Title</CardTitle>
    <CardBody>This card has no footer</CardBody>
  </Card>
);
