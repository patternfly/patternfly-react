import React from 'react';
import { Card, CardHeader, CardBody, CardFooter } from '../index';

class SimpleCard extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>Header</CardHeader>
        <CardBody>Body</CardBody>
        <CardFooter>Footer</CardFooter>
      </Card>
    );
  }
}

export default SimpleCard;
