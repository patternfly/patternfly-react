import React from 'react';
import { Alert, Button } from '@patternfly/react-core';

class WarningAlert extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Alert variant="warning" title="Warning notification title">
          Warning notification description. <a href="#">This is a link.</a>
        </Alert>
        <Alert
          variant="warning"
          title="Warning notification title"
          action={<Button variant="secondary">Button</Button>}
        />
        <Alert variant="warning" title="Warning notification title" />
      </React.Fragment>
    );
  }
}

export default WarningAlert;
