import React from 'react';
import { Alert, AlertGroup, AlertVariant, AlertActionCloseButton, InputGroup } from '@patternfly/react-core';

interface AlertGroupDemoState {
  alerts: {
    title: string;
    variant: string;
    key: any;
  }[];
  timer: number;
}

export class AlertGroupDemo extends React.Component<null, AlertGroupDemoState> {
  stopAsyncAlerts: () => void;
  removeAlert: (key: any) => void;

  constructor(props) {
    super(props);
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
    this.removeAlert = (key: any) => {
      this.setState({ alerts: [...this.state.alerts.filter((el: any) => el.key !== key)] });
    };
    const startAsyncAlerts = () => {
      let timerValue = setInterval(() => {
        addAlerts([
          {
            title: `Async Notification ${this.state.alerts.length + 1} was added to the queue.`,
            variant: 'info',
            key: getUniqueId()
          }
        ])
      }, 1500);
      this.setState({timer: timerValue as any});
    };
    return (
      <React.Fragment>
        <InputGroup style={{ marginBottom: '16px' }}>
          <button onClick={startAsyncAlerts} type="button" className={btnClasses}>Start Async Alerts</button>
          <button onClick={this.stopAsyncAlerts} type="button" className={btnClasses}>Stop Async Alerts</button>
        </InputGroup>
        <AlertGroup isToast>
          {this.state.alerts.map(({ title, variant, key }) => (
            <Alert
              isToast={false}
              variant={AlertVariant[variant]}
              title={title}
              key={key} 
              action={
                <AlertActionCloseButton
                  onClose={() => this.removeAlert(key)}
                  id="test-button"
                />
              }/>
          ))}
        </AlertGroup>
      </React.Fragment>
    );
  }
}