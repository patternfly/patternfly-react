import React from 'react';
import { Alert, Button } from '@patternfly/react-core';
import getContainerProps from './common/getContainerProps';

class InfoAlert extends React.Component {
  static title = 'Info Alert';
  static getContainerProps = getContainerProps;

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
