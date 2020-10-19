import { Alert, Button } from '@patternfly/react-core';
import React from 'react';

interface AlertCustomTimeoutDemoState {
  isOpenAlert: boolean;
}

export class AlertCustomTimeoutDemo extends React.Component<{}, AlertCustomTimeoutDemoState> {
  static displayName = 'AlertCustomTimeoutDemo';
  constructor(props: {}) {
    super(props);
    this.state = { isOpenAlert: false };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  onClick = () => this.setState({ isOpenAlert: true });
  onTimeout = () => alert('Timeout!');

  render() {
    const { isOpenAlert } = this.state;
    return (
      <React.Fragment>
        <Button id="custom-button" onClick={this.onClick}>
          Open Alert
        </Button>
        {isOpenAlert && (
          <Alert onTimeout={this.onTimeout} id="alert-custom-timeout" title="custom timeout" timeout={16000}>
            custom 16 second timeout
          </Alert>
        )}
      </React.Fragment>
    );
  }
}
