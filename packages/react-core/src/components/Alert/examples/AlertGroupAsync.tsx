import { Fragment, useState } from 'react';
import {
  Alert,
  AlertProps,
  AlertGroup,
  AlertActionCloseButton,
  AlertVariant,
  InputGroup,
  InputGroupItem,
  useInterval
} from '@patternfly/react-core';
import buttonStyles from '@patternfly/react-styles/css/components/Button/button';

export const AlertGroupAsync: React.FunctionComponent = () => {
  const [alerts, setAlerts] = useState<Partial<AlertProps>[]>([]);
  const [isRunning, setIsRunning] = useState(false);

  const btnClasses = [buttonStyles.button, buttonStyles.modifiers.secondary].join(' ');

  const getUniqueId = () => new Date().getTime();

  const addAlert = () => {
    setAlerts((prevAlerts) => [
      {
        title: `Async notification ${prevAlerts.length + 1} was added to the queue.`,
        variant: 'danger',
        key: getUniqueId()
      },
      ...prevAlerts
    ]);
  };

  const removeAlert = (key: React.Key) => {
    setAlerts((prevAlerts) => [...prevAlerts.filter((alert) => alert.key !== key)]);
  };

  const startAsyncAlerts = () => {
    setIsRunning(true);
  };

  const stopAsyncAlerts = () => {
    setIsRunning(false);
  };

  useInterval(addAlert, isRunning ? 4500 : null);

  return (
    <Fragment>
      <InputGroup style={{ marginBottom: '16px' }}>
        <InputGroupItem>
          <button onClick={startAsyncAlerts} type="button" className={btnClasses}>
            Start async alerts
          </button>
        </InputGroupItem>
        <InputGroupItem>
          <button onClick={stopAsyncAlerts} type="button" className={btnClasses}>
            Stop async alerts
          </button>
        </InputGroupItem>
      </InputGroup>
      <AlertGroup hasAnimations isToast isLiveRegion aria-live="assertive">
        {alerts.map(({ title, variant, key }) => (
          <Alert
            variant={AlertVariant[variant]}
            title={title}
            key={key}
            actionClose={
              <AlertActionCloseButton
                title={title as string}
                variantLabel={`${variant} alert`}
                onClose={() => removeAlert(key)}
              />
            }
          />
        ))}
      </AlertGroup>
    </Fragment>
  );
};
