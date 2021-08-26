---
id: Alert group
section: components
cssPrefix: pf-c-alert-group
propComponents: ['Alert', 'AlertGroup', 'AlertActionCloseButton', 'AlertActionLink']
---

## Examples
### Static alert group
These alerts appear on page load and are discoverable from within the normal page content flow, and will not be announced individually/explicitly to assistive technology.
```js
import React from 'react';
import { Alert, AlertGroup } from '@patternfly/react-core';

class StaticAlertGroup extends React.Component {
  render() {
    return (
      <React.Fragment>
        <AlertGroup>
          <Alert title="Success alert" variant="success" isInline />
          <Alert title="Info alert" variant="info" isInline/>
        </AlertGroup>
      </React.Fragment>
    );
  }
}
```

### Toast alert group
Alerts asynchronously appended into dynamic AlertGroups with `isLiveRegion` will be announced to assistive technology at the moment the change happens, following the strategy used for aria-atomic, which defaults to false. This means only changes of type "addition" will be announced.
```js
import React from 'react';
import { Alert, AlertGroup, AlertActionCloseButton, AlertVariant, InputGroup } from '@patternfly/react-core';
class ToastAlertGroup extends React.Component {
  constructor() {
    super();
    this.state = { alerts: [] };
    this.addAlert = (title, variant, key) => {
      this.setState({
        alerts: [ ...this.state.alerts, { title: title, variant: variant, key }]
      });
    };
    this.removeAlert = key => {
      this.setState({ alerts: [...this.state.alerts.filter(el => el.key !== key)] });
    };
  }
  render() {
    const btnClasses = ['pf-c-button', 'pf-m-secondary'].join(' ');
    const getUniqueId = () => (new Date().getTime());
    const addSuccessAlert = () => { this.addAlert('Toast success alert', 'success', getUniqueId()) };
    const addDangerAlert = () => { this.addAlert('Toast danger alert', 'danger', getUniqueId()) };
    const addInfoAlert = () => { this.addAlert('Toast info alert', 'info', getUniqueId()) };
    return (
      <React.Fragment>
        <InputGroup style={{ marginBottom: '16px' }}>
          <button onClick={addSuccessAlert} type="button" className={btnClasses}>Add toast success alert</button>
          <button onClick={addDangerAlert} type="button" className={btnClasses}>Add toast danger alert</button>
          <button onClick={addInfoAlert} type="button" className={btnClasses}>Add toast info alert</button>
        </InputGroup>
        <AlertGroup isToast isLiveRegion>
          {this.state.alerts.map(({key, variant, title}) => (
            <Alert
              variant={AlertVariant[variant]}
              title={title}
              actionClose={
                <AlertActionCloseButton
                  title={title}
                  variantLabel={`${variant} alert`}
                  onClose={() => this.removeAlert(key)}
                />
              }
              key={key} />
          ))}
        </AlertGroup>
      </React.Fragment>
    );
  }
}
```

### Singular dynamic alert group
This alert will appear in the page, most likely in response to a user action.
```js
import React from 'react';
import { Alert, AlertGroup, AlertVariant, AlertActionCloseButton, InputGroup } from '@patternfly/react-core';
class SingularAdditiveAlertGroup extends React.Component {
  constructor() {
    super();
    this.state = {
      alerts: []
    }
  }
  render() {
    const addAlert = (title, variant, key) => {
      this.setState({ alerts: [...this.state.alerts, { title: title, variant: variant, key }] });
    };
    const btnClasses = ['pf-c-button', 'pf-m-secondary'].join(' ');
    const getUniqueId = () => (new Date().getTime());
    const addSuccessAlert = () => { addAlert('Single success alert', 'success', getUniqueId()) };
    const addDangerAlert = () => { addAlert('Single danger alert', 'danger', getUniqueId()) };
    const addInfoAlert = () => { addAlert('Single info alert', 'info', getUniqueId()) };
    this.removeAlert = key => {
      this.setState({ alerts: [...this.state.alerts.filter(el => el.key !== key)] });
    };
    return (
      <React.Fragment>
        <InputGroup style={{ marginBottom: '16px' }}>
          <button onClick={addSuccessAlert} type="button" className={btnClasses}>Add single success alert</button>
          <button onClick={addDangerAlert} type="button" className={btnClasses}>Add single danger alert</button>
          <button onClick={addInfoAlert} type="button" className={btnClasses}>Add single info alert</button>
        </InputGroup>
        <AlertGroup isLiveRegion>
          {this.state.alerts.map(({ title, variant, key }) => (
            <Alert
              isInline
              variant={AlertVariant[variant]}
              title={title}
              key={key}
              actionClose={
                <AlertActionCloseButton
                  title={title}
                  variantLabel={`${variant} alert`}
                  onClose={() => this.removeAlert(key)}
                />
              }/>
          ))}
        </AlertGroup>
      </React.Fragment>
    );
  }
}
```

### Multiple dynamic alert group
These alerts will appear in the page, most likely in response to a user action.
```js
import React from 'react';
import { Alert, AlertGroup, AlertVariant, AlertActionCloseButton, InputGroup } from '@patternfly/react-core';
class MultipleAdditiveAlertGroup extends React.Component {
  constructor() {
    super();
    this.state = {
      alerts: []
    }
  }
  render() {
    const addAlerts = (incomingAlerts) => {
      this.setState({ alerts: [...this.state.alerts, ...incomingAlerts] });
    };
    const getUniqueId = () => (
      (String.fromCharCode(65 + Math.floor(Math.random() * 26))+ Date.now())
    );
    const btnClasses = ['pf-c-button', 'pf-m-secondary'].join(' ');
    const addAlertCollection = () => {
      addAlerts([
        { title: 'First alert notification.', variant: 'success', key: getUniqueId() },
        { title: 'Second alert notification.', variant: 'warning', key: getUniqueId() },
        { title: 'Third alert notification.', variant: 'danger', key: getUniqueId() }
      ])
    };
    this.removeAlert = key => {
      this.setState({ alerts: [...this.state.alerts.filter(el => el.key !== key)] });
    };
    return (
      <React.Fragment>
        <InputGroup style={{ marginBottom: '16px' }}>
          <button onClick={addAlertCollection} type="button" className={btnClasses}>Add alert collection</button>
        </InputGroup>
        <AlertGroup isToast isLiveRegion>
          {this.state.alerts.map(({ title, variant, key, action }) => (
            <Alert
              variant={AlertVariant[variant]}
              title={title}
              key={key}
              actionClose={
                <AlertActionCloseButton
                  title={title}
                  variantLabel={`${variant} alert`}
                  onClose={() => this.removeAlert(key)}
                />
              }/>
          ))}
        </AlertGroup>
      </React.Fragment>
    );
  }
}
```

### Async alert group
This shows how an alert could be triggered by an asynchronous event in the application. Note how you can customize how the alert will be announced to assistive technology. See the alert group accessibility tab for more information.
```js
import React from 'react';
import { Alert, AlertGroup, AlertActionCloseButton, AlertVariant, InputGroup } from '@patternfly/react-core';
class AsyncAdditiveAlertGroup extends React.Component {
  constructor() {
    super();
    this.state = {
      alerts: [],
      timer: null
    }
    this.stopAsyncAlerts = () => { clearInterval(this.state.timer); }
  }
  componentWillUnmount() { this.stopAsyncAlerts(); }
  render() {
    const addAlerts = (incomingAlerts) => { this.setState({ alerts: [...this.state.alerts, ...incomingAlerts] }); };
    const getUniqueId = () => (new Date().getTime());
    const btnClasses = ['pf-c-button', 'pf-m-secondary'].join(' ');
    this.removeAlert = key => {
      this.setState({ alerts: [...this.state.alerts.filter(el => el.key !== key)] });
    };
    const startAsyncAlerts = () => {
      let timerValue = setInterval(() => {
        addAlerts([
          {
            title: `Async notification ${this.state.alerts.length + 1} was added to the queue.`,
            variant: 'danger',
            key: getUniqueId()
          }
        ])
      }, 4500);
      this.setState({timer: timerValue});
    };
    return (
      <React.Fragment>
        <InputGroup style={{ marginBottom: '16px' }}>
          <button onClick={startAsyncAlerts} type="button" className={btnClasses}>Start async alerts</button>
          <button onClick={this.stopAsyncAlerts} type="button" className={btnClasses}>Stop async alerts</button>
        </InputGroup>
        <AlertGroup isToast isLiveRegion aria-live="assertive">
          {this.state.alerts.map(({ title, variant, key }) => (
            <Alert
              variant={AlertVariant[variant]}
              title={title}
              key={key}
              actionClose={
                <AlertActionCloseButton
                  title={title}
                  variantLabel={`${variant} alert`}
                  onClose={() => this.removeAlert(key)}
                />
              }/>
          ))}
        </AlertGroup>
      </React.Fragment>
    );
  }
}
```
