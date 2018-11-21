import React from 'react';
import { Alert, Button } from '@patternfly/react-core';

class DangerAlert extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Alert variant="danger" title="Danger Alert Title">
          This is a description of the notification content.
        </Alert>

        <Alert variant="danger" title="Danger Alert Title" action={<Button variant="secondary">Action</Button>} />

        <Alert variant="danger" title="Danger Alert Title" />
      </React.Fragment>
    );
  }
}

export default DangerAlert;
