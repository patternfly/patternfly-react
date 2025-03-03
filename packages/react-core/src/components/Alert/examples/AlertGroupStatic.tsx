import { Fragment } from 'react';
import { Alert, AlertGroup } from '@patternfly/react-core';

export const AlertGroupStatic: React.FunctionComponent = () => (
  <Fragment>
    <AlertGroup>
      <Alert title="Success alert" variant="success" isInline />
      <Alert title="Info alert" variant="info" isInline />
    </AlertGroup>
  </Fragment>
);
