import React from 'react';
import { Card, CardHeader, CardBody, CardFooter } from '@patternfly/react-core';

export class CardDemo extends React.Component {
  render() {
    return (
      <Card isHoverable={true}>
        <CardHeader>Header</CardHeader>
        <CardBody>Body</CardBody>
        <CardFooter>Footer</CardFooter>
      </Card>
    )
  }
}