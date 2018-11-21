import React from 'react';
import { Alert, Button } from '@patternfly/react-core';

class SuccessAlert extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Alert variant="success" title="Success Alert Title">
          This is a description of the notification content.
        </Alert>

        <Alert variant="success" title="Success Alert Title" action={<Button variant="secondary">Action</Button>} />

        <Alert variant="success" title="Success Alert Title" />
      </React.Fragment>
    );
  }
}

export default SuccessAlert;
