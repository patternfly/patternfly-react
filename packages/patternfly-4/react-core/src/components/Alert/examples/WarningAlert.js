import React from 'react';
import { Alert, Button } from '@patternfly/react-core';

class WarningAlert extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Alert variant="warning" title="Warning Alert Title">
          This is a description of the notification content.
        </Alert>

        <Alert variant="warning" title="Warning Alert Title" action={<Button variant="secondary">Action</Button>} />

        <Alert variant="warning" title="Warning Alert Title" />
      </React.Fragment>
    );
  }
}

export default WarningAlert;
