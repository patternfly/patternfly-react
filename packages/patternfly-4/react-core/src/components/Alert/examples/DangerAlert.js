import React from 'react';
import { Alert, Button } from '@patternfly/react-core';

class DangerAlert extends React.Component {
  state = { alertOneVisible: true, alertTwoVisible: true };
  hideAlertOne = () => this.setState({ alertOneVisible: false });
  hideAlertTwo = () => this.setState({ alertTwoVisible: false });

  render() {
    const { alertOneVisible, alertTwoVisible } = this.state;
    return (
      <React.Fragment>
        {alertOneVisible && (
          <Alert variant="danger" title="Danger notification title" onClose={this.hideAlertOne}>
            Danger notification description. <a href="#">This is a link.</a>
          </Alert>
        )}
        {alertTwoVisible && <Alert variant="danger" title="Danger notification title" onClose={this.hideAlertTwo} />}
        <Alert
          variant="danger"
          title="Danger notification title"
          action={<Button variant="link">Action Button</Button>}
        />
        <Alert variant="danger" title="Danger notification title" />
      </React.Fragment>
    );
  }
}

export default DangerAlert;
