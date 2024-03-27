import { type FunctionComponent, useState, Fragment, type ReactNode } from 'react';
import { Alert, AlertActionLink, AlertGroup, Button } from '@patternfly/react-core';

export const AlertGroupTimeoutFromBottomDemo: FunctionComponent = () => {
  const [alerts, setAlerts] = useState<ReactNode[]>([]);
  const [count, setCount] = useState(0);
  const onClick = () => {
    const timeout = 3000;
    setAlerts((prevAlerts) => [
      <Alert
        title={`Alert no. ${count}`}
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
        key={`Alert no. ${count}`}
        id={`Alert no. ${count}`}
      >
        This alert will dismiss after {`${timeout / 1000} seconds`}
      </Alert>,
      ...prevAlerts
    ]);
    setCount(count + 1);
  };

  return (
    <Fragment>
      <Button variant="secondary" onClick={onClick}>
        Add alert
      </Button>
      <AlertGroup>{alerts}</AlertGroup>
    </Fragment>
  );
};

AlertGroupTimeoutFromBottomDemo.displayName = 'AlertGroupTimeoutFromBottomDemo';
