import React from 'react';
import { Card, CardHeader, CardBody, CardFooter } from '@patternfly/react-core';

class SimpleCard extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>Card Header</CardHeader>
        <CardBody>Card Body</CardBody>
        <CardFooter>Card Footer</CardFooter>
      </Card>
    );
  }
}

export default SimpleCard;
