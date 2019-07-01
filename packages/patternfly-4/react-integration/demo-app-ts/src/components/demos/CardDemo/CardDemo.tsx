import React from 'react';
import { Card, CardHeader, CardBody, CardFooter } from '@patternfly/react-core';

export class CardDemo extends React.Component {
  render() {
    return (
      <React.Fragment> 
        <Card isHoverable>
          <CardHeader>Header</CardHeader>
          <CardBody>Body</CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
        <br></br> 
        <Card isCompact>
          <CardHeader>Header</CardHeader>
          <CardBody>Body</CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
      </React.Fragment>
    )
  }
}