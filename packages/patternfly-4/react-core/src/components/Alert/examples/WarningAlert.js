import React from 'react';
import { Alert, Button } from '@patternfly/react-core';

class WarningAlert extends React.Component {
  state = { alertOneVisible: true, alertTwoVisible: true };
  hideAlertOne = () => this.setState({ alertOneVisible: false });
  hideAlertTwo = () => this.setState({ alertTwoVisible: false });

  render() {
    const { alertOneVisible, alertTwoVisible } = this.state;
    return (
      <React.Fragment>
        {alertOneVisible && (
          <Alert variant="warning" title="Warning notification title" onClose={this.hideAlertOne}>
            Warning notification description. <a href="#">This is a link.</a>
          </Alert>
        )}
        {alertTwoVisible && <Alert variant="warning" title="Warning notification title" onClose={this.hideAlertTwo} />}
        <Alert
          variant="warning"
          title="Warning notification title"
          action={<Button variant="link">Action Button</Button>}
        />
        <Alert variant="warning" title="Warning notification title" />
      </React.Fragment>
    );
  }
}

export default WarningAlert;
