import { Fragment, useState } from 'react';
import {
  Alert,
  AlertProps,
  AlertGroup,
  AlertActionCloseButton,
  AlertVariant,
  InputGroup,
  InputGroupItem
} from '@patternfly/react-core';
import buttonStyles from '@patternfly/react-styles/css/components/Button/button';

export const AlertGroupSingularDynamicOverflow: React.FunctionComponent = () => {
  const [alerts, setAlerts] = useState<Partial<AlertProps>[]>([]);
  const [overflowMessage, setOverflowMessage] = useState<string>('');

  const maxDisplayed = 4;

  const getOverflowMessage = (alertsNumber: number) => {
    const overflow = alertsNumber - maxDisplayed;
    if (overflow > 0) {
      return `View ${overflow} more alerts`;
    }
    return '';
  };

  const addAlert = (title: string, variant: AlertProps['variant'], key: React.Key) => {
    setAlerts((prevAlerts) => [{ title, variant, key }, ...prevAlerts]);
    setOverflowMessage(getOverflowMessage(alerts.length + 1));
  };

  const removeAlert = (key: React.Key) => {
    const newAlerts = alerts.filter((alert) => alert.key !== key);
    setAlerts(newAlerts);
    setOverflowMessage(getOverflowMessage(newAlerts.length));
  };

  const btnClasses = [buttonStyles.button, buttonStyles.modifiers.secondary].join(' ');

  const getUniqueId = () => new Date().getTime();

  const addSuccessAlert = () => {
    addAlert('Success alert', 'success', getUniqueId());
  };

  const addDangerAlert = () => {
    addAlert('Danger alert', 'danger', getUniqueId());
  };

  const addInfoAlert = () => {
    addAlert('Info alert', 'info', getUniqueId());
  };

  const onOverflowClick = () => {
    // eslint-disable-next-line no-console
    console.log('Overflow message clicked');
  };

  return (
    <Fragment>
      <InputGroup style={{ marginBottom: '16px' }}>
        <InputGroupItem>
          <button onClick={addSuccessAlert} type="button" className={btnClasses}>
            Add single success alert
          </button>
        </InputGroupItem>
        <InputGroupItem>
          <button onClick={addDangerAlert} type="button" className={btnClasses}>
            Add single danger alert
          </button>
        </InputGroupItem>
        <InputGroupItem>
          <button onClick={addInfoAlert} type="button" className={btnClasses}>
            Add single info alert
          </button>
        </InputGroupItem>
      </InputGroup>
      <AlertGroup hasAnimations isLiveRegion onOverflowClick={onOverflowClick} overflowMessage={overflowMessage}>
        {alerts.slice(0, maxDisplayed).map(({ key, variant, title }) => (
          <Alert
            isInline
            variant={AlertVariant[variant]}
            title={title}
            actionClose={
              <AlertActionCloseButton
                title={title as string}
                variantLabel={`${variant} alert`}
                onClose={() => removeAlert(key)}
              />
            }
            key={key}
          />
        ))}
      </AlertGroup>
    </Fragment>
  );
};
