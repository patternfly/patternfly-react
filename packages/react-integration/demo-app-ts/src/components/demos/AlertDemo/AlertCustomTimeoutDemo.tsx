import { Alert, Button } from '@patternfly/react-core';
import React from 'react';

interface AlertCustomTimeoutDemoState {
  title: string;
}

export class AlertCustomTimeoutDemo extends React.Component<{}, AlertCustomTimeoutDemoState> {
  static displayName = 'AlertCustomTimeoutDemo';
  constructor(props: {}) {
    super(props);
    this.state = {
      title: ''
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  onClick = () => this.setState({ title: 'custom timeout' });
  onTimeout = () => alert('Timeout!');

  render() {
    const { title } = this.state;
    return (
      <React.Fragment>
        <Button id="custom-button" onClick={this.onClick}>
          Open Alert
        </Button>
        {title && (
          <Alert onTimeout={this.onTimeout} id="alert-custom-timeout" title={title} timeout={16000}>
            custom 16 second timeout
          </Alert>
        )}
      </React.Fragment>
    );
  }
}
