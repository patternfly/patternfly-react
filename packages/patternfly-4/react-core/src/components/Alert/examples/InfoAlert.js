import React from 'react';
import { Alert, Button } from '@patternfly/react-core';

class InfoAlert extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Alert variant="info" title="Info Alert Title">
          This is a description of the notification content.
        </Alert>

        <Alert variant="info" title="Info Alert Title" action={<Button variant="secondary">Action</Button>} />

        <Alert variant="info" title="Info Alert Title" />
      </React.Fragment>
    );
  }
}

export default InfoAlert;
