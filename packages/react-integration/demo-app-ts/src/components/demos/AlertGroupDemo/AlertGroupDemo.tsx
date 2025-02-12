import { Component } from 'react';
import {
  Alert,
  AlertGroup,
  AlertVariant,
  AlertActionCloseButton,
  Button,
  InputGroup,
  InputGroupItem
} from '@patternfly/react-core';

interface AlertDemoAlert {
  title: string;
  variant: keyof typeof AlertVariant;
  key: number | string;
}

interface AlertGroupDemoState {
  alerts: AlertDemoAlert[];
  timer: number;
}

export class AlertGroupDemo extends Component<{}, AlertGroupDemoState> {
  static displayName = 'AlertGroupDemo';
  stopAsyncAlerts: () => void;
  removeAlert: (key: number | string) => void;

  constructor(props: {}, removeAlert: (key: number | string) => void) {
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
      this.setState({ alerts: [...incomingAlerts, ...this.state.alerts] });
    };
    const getUniqueId = () => new Date().getTime();
    this.removeAlert = (key: React.Key) => {
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
      <>
        <InputGroup style={{ marginBottom: '16px' }}>
          <InputGroupItem>
            <Button variant="secondary" onClick={startAsyncAlerts} type="button">
              Start Async Alerts
            </Button>
          </InputGroupItem>
          <InputGroupItem>
            <Button variant="secondary" onClick={this.stopAsyncAlerts} type="button">
              Stop Async Alerts
            </Button>
          </InputGroupItem>
        </InputGroup>
        <AlertGroup hasAnimations={false} isToast>
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
      </>
    );
  }
}

AlertGroupDemo.displayName = 'AlertGroupDemo';
