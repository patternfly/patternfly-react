import { Alert, AlertProps, AlertActionCloseButton, AlertActionLink, AlertVariant } from '@patternfly/react-core';
import React, { Component } from 'react';
export class AlertDemo extends Component {
  myAlertProps: AlertProps = {
    action: <AlertActionCloseButton />,
    title: 'Success notification title',
    variant: AlertVariant.success
  };

  render() {
    return (
      <React.Fragment>
        <Alert variant={this.myAlertProps.variant} title={this.myAlertProps.title} action={this.myAlertProps.action}>
          Success notification description. <a href="#">This is a link.</a>
        </Alert>

        <Alert variant={this.myAlertProps.variant} title={this.myAlertProps.title} action={this.myAlertProps.action} />

        <Alert
          variant={this.myAlertProps.variant}
          title={this.myAlertProps.title}
          action={<AlertActionLink>Action Button</AlertActionLink>}
        />
        <Alert variant={this.myAlertProps.variant} title={this.myAlertProps.title} />
      </React.Fragment>
    );
  }
}

export default AlertDemo;
