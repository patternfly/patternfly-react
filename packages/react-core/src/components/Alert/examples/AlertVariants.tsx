import { Fragment } from 'react';
import { Alert } from '@patternfly/react-core';

export const AlertVariants: React.FunctionComponent = () => (
  <Fragment>
    <Alert title="Custom alert title" ouiaId="CustomAlert" />
    <Alert variant="info" title="Info alert title" ouiaId="InfoAlert" />
    <Alert variant="success" title="Success alert title" ouiaId="SuccessAlert" />
    <Alert variant="warning" title="Warning alert title" ouiaId="WarningAlert" />
    <Alert variant="danger" title="Danger alert title" ouiaId="DangerAlert" />
  </Fragment>
);
