import React from 'react';
import { Card, CardTitle, CardBody } from '@patternfly/react-core';

export const CardWithNoFooter: React.FunctionComponent<React.PropsWithChildren<unknown>> = () => (
  <Card>
    <CardTitle>Header</CardTitle>
    <CardBody>This card has no footer</CardBody>
  </Card>
);
