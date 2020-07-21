import { Alert, Button } from '@patternfly/react-core';
import React from 'react';

interface AlertDefaultTimeoutDemoState {
  isOpenAlert: boolean;
}

export class AlertDefaultTimeoutDemo extends React.Component<{}, AlertDefaultTimeoutDemoState> {
  static displayName = 'AlertDefaultTimeoutDemo';
  constructor(props: {}) {
    super(props);
    this.state = { isOpenAlert: false };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  onClick = () => this.setState({ isOpenAlert: true });

  render() {
    const { isOpenAlert } = this.state;
    return (
      <React.Fragment>
        <Button id="default-button" onClick={this.onClick}>
          Open Alert
        </Button>
        {isOpenAlert && (
          <Alert id="alert-default-timeout" title="default timeout" timeout={true}>
            8 second timeout by default
          </Alert>
        )}
      </React.Fragment>
    );
  }
}
