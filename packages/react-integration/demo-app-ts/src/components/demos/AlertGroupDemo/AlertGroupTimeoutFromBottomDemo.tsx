import React from 'react';
import { Alert, AlertActionLink, AlertGroup, Button } from '@patternfly/react-core';

export const AlertGroupTimeoutFromBottomDemo: React.FunctionComponent = () => {
  const [alerts, setAlerts] = React.useState<React.ReactNode[]>([]);
  const [count, setCount] = React.useState(0);
  const onClick = () => {
    const timeout = 3000;
    setAlerts(prevAlerts => [
      <Alert
        title={`Alert no. ${count}`}
        timeout={timeout}
        actionLinks={
          <React.Fragment>
            <AlertActionLink>View details</AlertActionLink>
            <AlertActionLink>Ignore</AlertActionLink>
          </React.Fragment>
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
    <React.Fragment>
      <Button variant="secondary" onClick={onClick}>
        Add alert
      </Button>
      <AlertGroup>{alerts}</AlertGroup>
    </React.Fragment>
  );
};

AlertGroupTimeoutFromBottomDemo.displayName = 'AlertGroupTimeoutFromBottomDemo';
