import { Alert, AlertActionCloseButton, Button } from '@patternfly/react-core';
import React from 'react';

interface AlertDemoState {
  alertOneVisible: boolean;
  alertTwoVisible: boolean;
}

export class AlertDemo extends React.Component<null, AlertDemoState> {
  constructor(props: {}) {
    super(props as null);
    this.state = { alertOneVisible: true, alertTwoVisible: true };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  hideAlertOne = () => this.setState({ alertOneVisible: false });
  hideAlertTwo = () => this.setState({ alertTwoVisible: false });

  render() {
    const { alertOneVisible, alertTwoVisible } = this.state;
    return (
      <React.Fragment>
        {alertOneVisible && (
          <Alert
            id="info-alert"
            variant="info"
            title="Info alert title"
            action={<AlertActionCloseButton id="test-button-1" onClose={this.hideAlertOne} />}
          >
            Info alert description. <a href="#">This is a link.</a>
          </Alert>
        )}
        {alertTwoVisible && (
          <Alert
            isLiveRegion
            id="info-alert"
            variant="info"
            title="Info alert title"
            action={<AlertActionCloseButton id="test-button-2" onClose={this.hideAlertTwo} />}
          >
            Info alert description. <a href="#">This is a link.</a>
          </Alert>
        )}
        <Alert id="default-alert" title="Default alert title" isInline>
          Info alert description
        </Alert>
        <Alert
          id="custom-action-alert"
          title="Custom action alert"
          action={({ variantLabel, title }) => (
            <Button id="custom-action-alert-button" variant="secondary">
              {variantLabel} {title}
            </Button>
          )}
        />
      </React.Fragment>
    );
  }
}
