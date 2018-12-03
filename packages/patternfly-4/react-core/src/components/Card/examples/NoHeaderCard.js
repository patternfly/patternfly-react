import React from 'react';
import { Card, CardHeader, CardBody, CardFooter } from '@patternfly/react-core';

class NoHeaderCard extends React.Component {
  render() {
    return (
      <Card>
        <CardBody>This card has no header</CardBody>
        <CardFooter>Footer</CardFooter>
      </Card>
    );
  }
}

export default NoHeaderCard;
