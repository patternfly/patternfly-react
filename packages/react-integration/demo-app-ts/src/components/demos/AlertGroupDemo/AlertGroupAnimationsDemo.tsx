import React from 'react';
import { Alert, AlertProps, AlertGroup, AlertActionCloseButton, Button, Flex, FlexItem } from '@patternfly/react-core';

export const AlertGroupAnimationsDemo: React.FunctionComponent = () => {
  const [alerts, setAlerts] = React.useState<Partial<AlertProps>[]>([]);

  const getUniqueId = () => new Date().getTime();
  const addAlert = () => {
    setAlerts((prevAlerts) => [{ title: 'Toast alert with animation', key: getUniqueId() }, ...prevAlerts]);
  };
  const removeAlert = (key: React.Key) => {
    setAlerts((prevAlerts) => [...prevAlerts.filter((alert) => alert.key !== key)]);
  };

  return (
    <React.Fragment>
      <Flex>
        <FlexItem>
          <Button id="add-alert-button" onClick={addAlert} variant="secondary">
            Add alert
          </Button>
        </FlexItem>
      </Flex>
      <AlertGroup hasAnimations isToast isLiveRegion>
        {alerts.map(({ key, title }) => (
          <Alert
            id="animated-alert"
            title={title}
            actionClose={
              <AlertActionCloseButton
                id="alert-close-button"
                title={title as string}
                variantLabel={`Custom toast alert`}
                onClose={() => removeAlert(key as React.Key)}
              />
            }
            key={key}
          />
        ))}
      </AlertGroup>
    </React.Fragment>
  );
};
