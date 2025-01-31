import React from 'react';
import { Alert, AlertProps, AlertGroup, AlertActionCloseButton, Button, Flex, FlexItem } from '@patternfly/react-core';

export const AlertGroupAnimations: React.FunctionComponent = () => {
  const [toastAlerts, setToastAlerts] = React.useState<Partial<AlertProps>[]>([]);
  const [inlineAlerts, setInlineAlerts] = React.useState<Partial<AlertProps>[]>([]);

  const addAlert = (title: string, key: React.Key, isToast: boolean) => {
    const setAlerts = isToast ? setToastAlerts : setInlineAlerts;
    setAlerts((prevAlerts) => [{ title, key }, ...prevAlerts]);
  };

  const removeAlert = (key: React.Key, isToast: boolean) => {
    const setAlerts = isToast ? setToastAlerts : setInlineAlerts;
    setAlerts((prevAlerts) => [...prevAlerts.filter((alert) => alert.key !== key)]);
  };

  const getUniqueId = () => new Date().getTime();

  const addToastAlert = () => {
    addAlert('Toast alert withs animation', getUniqueId(), true);
  };

  const addInlineAlert = () => {
    addAlert('Inline alert with animation', getUniqueId(), false);
  };

  return (
    <React.Fragment>
      <Flex direction={{ default: 'column' }}>
        <Flex>
          <FlexItem>
            <Button onClick={addInlineAlert} variant="secondary">
              Add inline alert
            </Button>
          </FlexItem>
          <FlexItem>
            <Button onClick={addToastAlert} variant="secondary">
              Add toast alert
            </Button>
          </FlexItem>
        </Flex>
        <AlertGroup hasAnimations isLiveRegion>
          {inlineAlerts.map(({ key, title }) => (
            <Alert
              title={title}
              actionClose={
                <AlertActionCloseButton
                  title={title as string}
                  variantLabel={`Custom inline alert`}
                  onClose={() => removeAlert(key as React.Key, false)}
                />
              }
              key={key}
            />
          ))}
        </AlertGroup>
        <AlertGroup hasAnimations isToast isLiveRegion>
          {toastAlerts.map(({ key, title }) => (
            <Alert
              title={title}
              actionClose={
                <AlertActionCloseButton
                  title={title as string}
                  variantLabel={`Custom toast alert`}
                  onClose={() => removeAlert(key as React.Key, true)}
                />
              }
              key={key}
            />
          ))}
        </AlertGroup>
      </Flex>
    </React.Fragment>
  );
};
