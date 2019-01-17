import React from 'react';
import { Alert, Button } from '@patternfly/react-core';

class SuccessAlert extends React.Component {
  state = { alertOneVisible: true, alertTwoVisible: true };
  hideAlertOne = () => this.setState({ alertOneVisible: false });
  hideAlertTwo = () => this.setState({ alertTwoVisible: false });

  render() {
    const { alertOneVisible, alertTwoVisible } = this.state;
    return (
      <React.Fragment>
        {alertOneVisible && (
          <Alert variant="success" title="Success notification title" onClose={this.hideAlertOne}>
            Success notification description. <a href="#">This is a link.</a>
          </Alert>
        )}
        {alertTwoVisible && <Alert variant="success" title="Success notification title" onClose={this.hideAlertTwo} />}
        <Alert
          variant="success"
          title="Success notification title"
          action={<Button variant="link">Action Button</Button>}
        />
        <Alert variant="success" title="Success notification title" />
      </React.Fragment>
    );
  }
}

export default SuccessAlert;
