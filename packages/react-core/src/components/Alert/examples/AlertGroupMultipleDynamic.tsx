import React from 'react';
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

export const AlertGroupMultipleDynamic: React.FunctionComponent = () => {
  const [alerts, setAlerts] = React.useState<Partial<AlertProps>[]>([]);

  const addAlerts = (incomingAlerts: Partial<AlertProps>[]) => {
    setAlerts((prevAlerts) => [...prevAlerts, ...incomingAlerts]);
  };

  const removeAlert = (key: React.Key) => {
    setAlerts((prevAlerts) => [...prevAlerts.filter((alert) => alert.key !== key)]);
  };

  const btnClasses = [buttonStyles.button, buttonStyles.modifiers.secondary].join(' ');

  const getUniqueId = () => String.fromCharCode(65 + Math.floor(Math.random() * 26)) + Date.now();

  const addAlertCollection = () => {
    addAlerts([
      { title: 'First alert notification.', variant: 'success', key: getUniqueId() },
      { title: 'Second alert notification.', variant: 'warning', key: getUniqueId() },
      { title: 'Third alert notification.', variant: 'danger', key: getUniqueId() }
    ]);
  };

  return (
    <React.Fragment>
      <InputGroup style={{ marginBottom: '16px' }}>
        <InputGroupItem>
          <button onClick={addAlertCollection} type="button" className={btnClasses}>
            Add alert collection
          </button>
        </InputGroupItem>
      </InputGroup>
      <AlertGroup isToast isLiveRegion>
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
    </React.Fragment>
  );
};
