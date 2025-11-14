import { Fragment, useState } from 'react';
import { Alert, AlertActionLink, AlertGroup, Button } from '@patternfly/react-core';

export const AlertTimeout: React.FunctionComponent = () => {
  const [alerts, setAlerts] = useState<React.ReactNode[]>([]);
  const [newAlertKey, setNewAlertKey] = useState<number>(0);

  const onClick = () => {
    const timeout = 8000;
    setNewAlertKey((key) => key + 1);
    setAlerts((prevAlerts) => [
      <Alert
        title="Default timeout Alert"
        timeout={timeout}
        actionLinks={
          <Fragment>
            <AlertActionLink component="a" href="#">
              View details
            </AlertActionLink>
            <AlertActionLink // eslint-disable-next-line no-console
              onClick={() => console.log('Clicked on Ignore')}
            >
              Ignore
            </AlertActionLink>
          </Fragment>
        }
        key={newAlertKey}
      >
        This alert will dismiss after {`${timeout / 1000} seconds`}
      </Alert>,
      ...prevAlerts
    ]);
  };

  return (
    <Fragment>
      <Button variant="secondary" onClick={onClick}>
        Add alert
      </Button>
      <AlertGroup hasAnimations isLiveRegion>
        {alerts}
      </AlertGroup>
    </Fragment>
  );
};
