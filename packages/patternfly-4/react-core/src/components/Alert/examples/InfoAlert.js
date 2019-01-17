import React from 'react';
import { Alert, Button } from '@patternfly/react-core';

class InfoAlert extends React.Component {
  state = { alertOneVisible: true, alertTwoVisible: true };
  hideAlertOne = () => this.setState({ alertOneVisible: false });
  hideAlertTwo = () => this.setState({ alertTwoVisible: false });

  render() {
    const { alertOneVisible, alertTwoVisible } = this.state;
    return (
      <React.Fragment>
        {alertOneVisible && (
          <Alert variant="info" title="Info notification title" onClose={this.hideAlertOne}>
            Info notification description. <a href="#">This is a link.</a>
          </Alert>
        )}
        {alertTwoVisible && <Alert variant="info" title="Info notification title" onClose={this.hideAlertTwo} />}
        <Alert variant="info" title="Info notification title" action={<Button variant="link">Action Button</Button>} />
        <Alert variant="info" title="Info notification title" />
      </React.Fragment>
    );
  }
}

export default InfoAlert;
