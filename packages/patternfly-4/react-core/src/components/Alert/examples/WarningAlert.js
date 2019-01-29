import React from 'react';
import { Alert, AlertActionLink, AlertActionCloseButton } from '@patternfly/react-core';

class WarningAlert extends React.Component {
  state = { alertOneVisible: true, alertTwoVisible: true };
  hideAlertOne = () => this.setState({ alertOneVisible: false });
  hideAlertTwo = () => this.setState({ alertTwoVisible: false });

  render() {
    const { alertOneVisible, alertTwoVisible } = this.state;
    return (
      <React.Fragment>
        {alertOneVisible && (
          <Alert
            variant="warning"
            title="Warning notification title"
            action={<AlertActionCloseButton onClose={this.hideAlertOne} />}
          >
            Warning notification description. <a href="#">This is a link.</a>
          </Alert>
        )}
        {alertTwoVisible && (
          <Alert
            variant="warning"
            title="Warning notification title"
            action={<AlertActionCloseButton onClose={this.hideAlertTwo} />}
          />
        )}
        <Alert
          variant="warning"
          title="Warning notification title"
          action={<AlertActionLink>Action Button</AlertActionLink>}
        />
        <Alert variant="warning" title="Warning notification title" />
      </React.Fragment>
    );
  }
}

export default WarningAlert;
