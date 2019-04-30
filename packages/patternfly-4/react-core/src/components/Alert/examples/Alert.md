---
title: 'Alert'
cssPrefix: 'pf-c-alert'
---
import { Alert, AlertActionLink, AlertActionCloseButton } from '@patternfly/react-core';
import './alert.scss';

## Info alert
```js
import React from 'react';
import { Alert, AlertActionLink, AlertActionCloseButton } from '@patternfly/react-core';

class InfoAlert extends React.Component {
  constructor(props) {
    super(props);
    super(props)
    this.state = { alertOneVisible: true, alertTwoVisible: true };
    this.hideAlertOne = () => this.setState({ alertOneVisible: false });
    this.hideAlertTwo = () => this.setState({ alertTwoVisible: false });
  }
  
  render() {
    const { alertOneVisible, alertTwoVisible } = this.state;
    return (
      <React.Fragment>
        {alertOneVisible && (
          <Alert
            variant="info"
            title="Info alert title"
            action={<AlertActionCloseButton onClose={this.hideAlertOne} />}
          >
            Info alert description. <a href="#">This is a link.</a>
          </Alert>
        )}
        {alertTwoVisible && (
          <Alert
            variant="info"
            title="Info alert title"
            action={<AlertActionCloseButton onClose={this.hideAlertTwo} />}
          />
        )}
        <Alert variant="info" title="Info alert title" action={<AlertActionLink>Action Button</AlertActionLink>} />
        <Alert variant="info" title="Info alert title" />
      </React.Fragment>
    );
  }
}
```

## Success alert
```js
import React from 'react';
import { Alert, AlertActionLink, AlertActionCloseButton } from '@patternfly/react-core';

class SuccessAlert extends React.Component {
  constructor(props) {
    super(props);
    super(props)
    this.state = { alertOneVisible: true, alertTwoVisible: true };
    this.hideAlertOne = () => this.setState({ alertOneVisible: false });
    this.hideAlertTwo = () => this.setState({ alertTwoVisible: false });
  }
  render() {
    const { alertOneVisible, alertTwoVisible } = this.state;
    return (
      <React.Fragment>
        {alertOneVisible && (
          <Alert
            variant="success"
            title="Success alert title"
            action={<AlertActionCloseButton onClose={this.hideAlertOne} />}
          >
            Success alert description. <a href="#">This is a link.</a>
          </Alert>
        )}
        {alertTwoVisible && (
          <Alert
            variant="success"
            title="Success alert title"
            action={<AlertActionCloseButton onClose={this.hideAlertTwo} />}
          />
        )}
        <Alert
          variant="success"
          title="Success alert title"
          action={<AlertActionLink>Action Button</AlertActionLink>}
        />
        <Alert variant="success" title="Success alert title" />
      </React.Fragment>
    );
  }
}
```

## Warning alert
```js
import React from 'react';
import { Alert, AlertActionLink, AlertActionCloseButton } from '@patternfly/react-core';

class WarningAlert extends React.Component {
  constructor(props) {
    super(props);
    super(props)
    this.state = { alertOneVisible: true, alertTwoVisible: true };
    this.hideAlertOne = () => this.setState({ alertOneVisible: false });
    this.hideAlertTwo = () => this.setState({ alertTwoVisible: false });
  }
  render() {
    const { alertOneVisible, alertTwoVisible } = this.state;
    return (
      <React.Fragment>
        {alertOneVisible && (
          <Alert
            variant="warning"
            title="Warning alert title"
            action={<AlertActionCloseButton onClose={this.hideAlertOne} />}
          >
            Warning alert description. <a href="#">This is a link.</a>
          </Alert>
        )}
        {alertTwoVisible && (
          <Alert
            variant="warning"
            title="Warning alert title"
            action={<AlertActionCloseButton onClose={this.hideAlertTwo} />}
          />
        )}
        <Alert
          variant="warning"
          title="Warning alert title"
          action={<AlertActionLink>Action Button</AlertActionLink>}
        />
        <Alert variant="warning" title="Warning alert title" />
      </React.Fragment>
    );
  }
}
```

## Danger alert
```js
import React from 'react';
import { Alert, AlertActionLink, AlertActionCloseButton } from '@patternfly/react-core';

class DangerAlert extends React.Component {
  constructor(props) {
    super(props);
    super(props)
    this.state = { alertOneVisible: true, alertTwoVisible: true };
    this.hideAlertOne = () => this.setState({ alertOneVisible: false });
    this.hideAlertTwo = () => this.setState({ alertTwoVisible: false });
  }
  render() {
    const { alertOneVisible, alertTwoVisible } = this.state;
    return (
      <React.Fragment>
        {alertOneVisible && (
          <Alert
            variant="danger"
            title="Danger alert title"
            action={<AlertActionCloseButton action={<AlertActionCloseButton onClose={this.hideAlertOne} />} />}
          >
            Danger alert description. <a href="#">This is a link.</a>
          </Alert>
        )}
        {alertTwoVisible && (
          <Alert
            variant="danger"
            title="Danger alert title"
            action={<AlertActionCloseButton onClose={this.hideAlertTwo} />}
          />
        )}
        <Alert variant="danger" title="Danger alert title" action={<AlertActionLink>Action Button</AlertActionLink>} />
        <Alert variant="danger" title="Danger alert title" />
      </React.Fragment>
    );
  }
}
```
