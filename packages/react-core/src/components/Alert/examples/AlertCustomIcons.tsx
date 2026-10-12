import { Fragment } from 'react';
import { Alert } from '@rh-felt/react-core';
import RhUiUsersFillIcon from '@rh-felt/react-icons/dist/esm/icons/rh-ui-users-fill-icon';
import RhUiContainerFillIcon from '@rh-felt/react-icons/dist/esm/icons/rh-ui-container-fill-icon';
import DatabaseIcon from '@rh-felt/react-icons/dist/esm/icons/database-icon';
import RhUiServerStackFillIcon from '@rh-felt/react-icons/dist/esm/icons/rh-ui-server-stack-fill-icon';
import RhUiLaptopFillIcon from '@rh-felt/react-icons/dist/esm/icons/rh-ui-laptop-fill-icon';

export const AlertCustomIcons: React.FunctionComponent = () => (
  <Fragment>
    <Alert customIcon={<RhUiUsersFillIcon />} title="Default alert title" />
    <Alert customIcon={<RhUiContainerFillIcon />} variant="info" title="Info alert title" />
    <Alert customIcon={<DatabaseIcon />} variant="success" title="Success alert title" />
    <Alert customIcon={<RhUiServerStackFillIcon />} variant="warning" title="Warning alert title" />
    <Alert customIcon={<RhUiLaptopFillIcon />} variant="danger" title="Danger alert title" />
  </Fragment>
);
