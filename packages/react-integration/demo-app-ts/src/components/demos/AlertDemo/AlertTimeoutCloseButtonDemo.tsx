import { Alert, Button, AlertActionCloseButton } from '@patternfly/react-core';
import React from 'react';

interface AlertTimeoutCloseButtonDemoState {
  isOpenAlert: boolean;
}

export class AlertTimeoutCloseButtonDemo extends React.Component<{}, AlertTimeoutCloseButtonDemoState> {
  static displayName = 'AlertTimeoutCloseButtonDemo';
  constructor(props: {}) {
    super(props);
    this.state = { isOpenAlert: false };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  onClick = () => this.setState({ isOpenAlert: true });

  onCloseClick = () => this.setState({ isOpenAlert: false });

  render() {
    const { isOpenAlert } = this.state;
    return (
      <React.Fragment>
        <Button id="close-button-alert-button" onClick={this.onClick}>
          Open Alert
        </Button>
        {isOpenAlert && (
          <Alert
            id="close-button-alert"
            title="Alert close button"
            timeout={100000}
            actionClose={<AlertActionCloseButton id="test-close-button" onClose={this.onCloseClick} />}
          >
            Alert with close button and timeout
          </Alert>
        )}
      </React.Fragment>
    );
  }
}
