import React from 'react';
import { Alert, AlertActionLink, AlertActionCloseButton } from '@patternfly/react-core';

class DangerAlert extends React.Component {
  state = { alertOneVisible: true, alertTwoVisible: true };
  hideAlertOne = () => this.setState({ alertOneVisible: false });
  hideAlertTwo = () => this.setState({ alertTwoVisible: false });

  render() {
    const { alertOneVisible, alertTwoVisible } = this.state;
    return (
      <React.Fragment>
        {alertOneVisible && (
          <Alert
            variant="danger"
            title="Danger notification title"
            action={<AlertActionCloseButton action={<AlertActionCloseButton onClose={this.hideAlertOne} />} />}
          >
            Danger notification description. <a href="#">This is a link.</a>
          </Alert>
        )}
        {alertTwoVisible && (
          <Alert
            variant="danger"
            title="Danger notification title"
            action={<AlertActionCloseButton onClose={this.hideAlertTwo} />}
          />
        )}
        <Alert
          variant="danger"
          title="Danger notification title"
          action={<AlertActionLink>Action Button</AlertActionLink>}
        />
        ><Alert variant="danger" title="Danger notification title" />
      </React.Fragment>
    );
  }
}

export default DangerAlert;
