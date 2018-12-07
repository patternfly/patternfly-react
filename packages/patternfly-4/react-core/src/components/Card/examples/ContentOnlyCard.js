import React from 'react';
import { Card, CardHeader, CardBody, CardFooter } from '@patternfly/react-core';

class ContentOnlyCard extends React.Component {
  render() {
    return (
      <Card>
        <CardBody>Body</CardBody>
      </Card>
    );
  }
}

export default ContentOnlyCard;
