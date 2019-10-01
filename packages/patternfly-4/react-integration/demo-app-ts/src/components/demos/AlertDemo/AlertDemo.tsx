import { Alert, AlertActionCloseButton } from '@patternfly/react-core';
import React from 'react';

interface AlertDemoState {
  alertOneVisible: boolean;
}

export class AlertDemo extends React.Component<null, AlertDemoState> {
  constructor(props) {
    super(props);
    this.state = { alertOneVisible: true };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  hideAlertOne = () => this.setState({ alertOneVisible: false });

  render() {
    const { alertOneVisible } = this.state;
    return (
      <React.Fragment>
        {alertOneVisible && (
          <Alert
            id="info-alert"
            variant="info"
            title="Info alert title"
            action={<AlertActionCloseButton id="test-button" onClose={this.hideAlertOne} />}
          >
            Info alert description. <a href="#">This is a link.</a>
          </Alert>
        )}
        <Alert id="default-alert" variant="default" title="Default alert title" isInline>
          Info alert description
        </Alert>
      </React.Fragment>
    );
  }
}
