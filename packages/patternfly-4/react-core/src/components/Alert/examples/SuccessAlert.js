import React from 'react';
import { Alert, Button } from '@patternfly/react-core';

class SuccessAlert extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Alert variant="success" title="Success notification title">
          Success notification description. <a href="#">This is a link.</a>
        </Alert>
        <Alert
          variant="success"
          title="Success notification title"
          action={<Button variant="secondary">Button</Button>}
        />
        <Alert variant="success" title="Success notification title" />
      </React.Fragment>
    );
  }
}

export default SuccessAlert;
