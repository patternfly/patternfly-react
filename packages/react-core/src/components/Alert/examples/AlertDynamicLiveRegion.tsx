import { Fragment, useState } from 'react';
import { Alert, AlertGroup, AlertVariant, Flex, FlexItem } from '@patternfly/react-core';
import buttonStyles from '@patternfly/react-styles/css/components/Button/button';

interface AlertInfo {
  title: string;
  variant: AlertVariant;
  key: number;
}

export const DynamicLiveRegionAlert: React.FunctionComponent = () => {
  const [alerts, setAlerts] = useState<AlertInfo[]>([]);
  const getUniqueId: () => number = () => new Date().getTime();
  const btnClasses = [buttonStyles.button, buttonStyles.modifiers.secondary].join(' ');

  const addAlert = (alertInfo: AlertInfo) => {
    setAlerts((prevAlertInfo) => [alertInfo, ...prevAlertInfo]);
  };

  const addSuccessAlert = () => {
    addAlert({
      title: 'Single success alert',
      variant: AlertVariant.success,
      key: getUniqueId()
    });
  };
  const addInfoAlert = () => {
    addAlert({
      title: 'Single info alert',
      variant: AlertVariant.info,
      key: getUniqueId()
    });
  };
  const addDangerAlert = () => {
    addAlert({
      title: 'Single danger alert',
      variant: AlertVariant.danger,
      key: getUniqueId()
    });
  };

  return (
    <Fragment>
      <Flex gap={{ default: 'gapXs' }} style={{ marginBottom: '16px' }}>
        <FlexItem>
          <button onClick={addSuccessAlert} type="button" className={btnClasses}>
            Add single success alert
          </button>
        </FlexItem>
        <FlexItem>
          <button onClick={addInfoAlert} type="button" className={btnClasses}>
            Add single info alert
          </button>
        </FlexItem>
        <FlexItem>
          <button onClick={addDangerAlert} type="button" className={btnClasses}>
            Add single danger alert
          </button>
        </FlexItem>
      </Flex>
      <AlertGroup hasAnimations isLiveRegion aria-live="polite" aria-relevant="additions text" aria-atomic="false">
        {alerts.map(({ title, variant, key }) => (
          <Alert variant={variant} title={title} key={key} />
        ))}
      </AlertGroup>
    </Fragment>
  );
};
