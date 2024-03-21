/* eslint-disable patternfly-react/no-anonymous-functions */
import { ReactText, Component, Fragment } from 'react';
import {
  Alert,
  AlertGroup,
  AlertVariant,
  AlertActionCloseButton,
  InputGroup,
  InputGroupItem
} from '@patternfly/react-core';
import { css } from '@patternfly/react-styles';
import buttonStyles from '@patternfly/react-styles/css/components/Button/button';

interface AlertDemoAlert {
  title: string;
  variant: keyof typeof AlertVariant;
  key: ReactText;
}

interface AlertGroupDemoState {
  alerts: AlertDemoAlert[];
  timer: number;
}

export class AlertGroupDemo extends Component<{}, AlertGroupDemoState> {
  static displayName = 'AlertGroupDemo';
  stopAsyncAlerts: () => void;
  removeAlert: (key: ReactText) => void;

  constructor(props: {}, removeAlert: (key: ReactText) => void) {
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
    const btnClasses = css(buttonStyles.button, buttonStyles.modifiers.secondary);
    this.removeAlert = (key: ReactText) => {
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
      <Fragment>
        <InputGroup style={{ marginBottom: '16px' }}>
          <InputGroupItem>
            <button onClick={startAsyncAlerts} type="button" className={btnClasses}>
              Start Async Alerts
            </button>
          </InputGroupItem>
          <InputGroupItem>
            <button onClick={this.stopAsyncAlerts} type="button" className={btnClasses}>
              Stop Async Alerts
            </button>
          </InputGroupItem>
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
      </Fragment>
    );
  }
}

AlertGroupDemo.displayName = 'AlertGroupDemo';
