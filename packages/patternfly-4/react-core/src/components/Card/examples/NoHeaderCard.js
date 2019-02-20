import React from 'react';
import { Card, CardBody, CardFooter } from '../index';

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
