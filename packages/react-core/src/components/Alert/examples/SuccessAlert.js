import React from 'react';
import { Alert, Button } from '@patternfly/react-core';
import getContainerProps from './common/getContainerProps';

class SuccessAlert extends React.Component {
  static title = 'Success Alert';
  static getContainerProps = getContainerProps;

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
