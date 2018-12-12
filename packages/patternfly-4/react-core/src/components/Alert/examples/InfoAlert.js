import React from 'react';
import { Alert, Button } from '@patternfly/react-core';

class InfoAlert extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Alert variant="info" title="Info notification title">
          Info notification description. <a href="#">This is a link.</a>
        </Alert>
        <Alert variant="info" title="Info notification title" action={<Button variant="secondary">Button</Button>} />
        <Alert variant="info" title="Info notification title" />
      </React.Fragment>
    );
  }
}

export default InfoAlert;
