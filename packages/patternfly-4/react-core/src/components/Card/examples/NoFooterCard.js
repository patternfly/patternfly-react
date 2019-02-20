import React from 'react';
import { Card, CardHeader, CardBody } from '../index';

class NoFooterCard extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>Header</CardHeader>
        <CardBody>This card has no footer</CardBody>
      </Card>
    );
  }
}

export default NoFooterCard;
