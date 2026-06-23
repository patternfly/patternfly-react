import { Fragment } from 'react';
import { Alert } from '@patternfly/react-core';
import RhUiUsersFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-users-fill-icon';
import RhUiContainerFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-container-fill-icon';
import DatabaseIcon from '@patternfly/react-icons/dist/esm/icons/database-icon';
import RhUiServerStackFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-server-stack-fill-icon';
import LaptopIcon from '@patternfly/react-icons/dist/esm/icons/laptop-icon';

export const AlertCustomIcons: React.FunctionComponent = () => (
  <Fragment>
    <Alert customIcon={<RhUiUsersFillIcon />} title="Default alert title" />
    <Alert customIcon={<RhUiContainerFillIcon />} variant="info" title="Info alert title" />
    <Alert customIcon={<DatabaseIcon />} variant="success" title="Success alert title" />
    <Alert customIcon={<RhUiServerStackFillIcon />} variant="warning" title="Warning alert title" />
    <Alert customIcon={<LaptopIcon />} variant="danger" title="Danger alert title" />
  </Fragment>
);
