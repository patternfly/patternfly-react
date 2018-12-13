import React from 'react';
import { Alert, Button } from '@patternfly/react-core';

class DangerAlert extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Alert variant="danger" title="Danger notification title">
          Danger notification description. <a href="#">This is a link.</a>
        </Alert>
        <Alert
          variant="danger"
          title="Danger notification title"
          action={<Button variant="secondary">Button</Button>}
        />
        <Alert variant="danger" title="Danger notification title" />
      </React.Fragment>
    );
  }
}

export default DangerAlert;
