import { Alert, Button } from '@patternfly/react-core';
import React from 'react';

interface AlertDefaultTimeoutDemoState {
  title: string;
}

export class AlertDefaultTimeoutDemo extends React.Component<{}, AlertDefaultTimeoutDemoState> {
  static displayName = 'AlertDefaultTimeoutDemo';
  constructor(props: {}) {
    super(props);
    this.state = { title: '' };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  onClick = () => this.setState({ title: 'default timeout' });

  render() {
    const { title } = this.state;
    return (
      <React.Fragment>
        <Button id="default-button" onClick={this.onClick}>
          Open Alert
        </Button>
        {title && (
          <Alert id="alert-default-timeout" title={title} timeout={true}>
            8 second timeout by default
          </Alert>
        )}
      </React.Fragment>
    );
  }
}
