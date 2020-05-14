import React from 'react';
import { Alert, AlertGroup, AlertVariant, AlertActionCloseButton, InputGroup } from '@patternfly/react-core';

interface AlertDemoAlert {
  title: string;
  variant: keyof typeof AlertVariant;
  key: React.ReactText;
}

interface AlertGroupDemoState {
  alerts: AlertDemoAlert[];
  timer: number;
}

export class AlertGroupDemo extends React.Component<{}, AlertGroupDemoState> {
  stopAsyncAlerts: () => void;
  removeAlert: (key: React.ReactText) => void;

  constructor(props: {}, removeAlert: (key: React.ReactText) => void) {
    super(props);
    this.state = {
      alerts: [],
      timer: 0
    };
    this.stopAsyncAlerts = () => {
      clearInterval(this.state.timer);
    };
    this.removeAlert = removeAlert;
  }
  componentWillUnmount() {
    this.stopAsyncAlerts();
  }
  render() {
    const addAlerts = (incomingAlerts: AlertGroupDemoState['alerts']) => {
      this.setState({ alerts: [...this.state.alerts, ...incomingAlerts] });
    };
    const getUniqueId = () => new Date().getTime();
    const btnClasses = ['pf-c-button', 'pf-m-secondary'].join(' ');
    this.removeAlert = (key: React.ReactText) => {
      this.setState({ alerts: [...this.state.alerts.filter((el: AlertDemoAlert) => el.key !== key)] });
    };
    const startAsyncAlerts = () => {
      const timerValue = window.setInterval(() => {
        addAlerts([
          {
            title: `Async Notification ${this.state.alerts.length + 1} was added to the queue.`,
            variant: 'info',
            key: getUniqueId()
          }
        ]);
      }, 1500);
      this.setState({ timer: timerValue });
    };
    return (
      <React.Fragment>
        <InputGroup style={{ marginBottom: '16px' }}>
          <button onClick={startAsyncAlerts} type="button" className={btnClasses}>
            Start Async Alerts
          </button>
          <button onClick={this.stopAsyncAlerts} type="button" className={btnClasses}>
            Stop Async Alerts
          </button>
        </InputGroup>
        <AlertGroup isToast>
          {this.state.alerts.map(({ title, variant, key }) => (
            <Alert
              isLiveRegion
              variant={AlertVariant[variant]}
              title={title}
              key={key}
              actionClose={<AlertActionCloseButton onClose={() => this.removeAlert(key)} id="test-button" />}
            />
          ))}
        </AlertGroup>
      </React.Fragment>
    );
  }
}
