import { Fragment } from 'react';
import { Alert } from '@patternfly/react-core';
import UsersIcon from '@patternfly/react-icons/dist/esm/icons/users-icon';
import BoxIcon from '@patternfly/react-icons/dist/esm/icons/box-icon';
import DatabaseIcon from '@patternfly/react-icons/dist/esm/icons/database-icon';
import ServerIcon from '@patternfly/react-icons/dist/esm/icons/server-icon';
import LaptopIcon from '@patternfly/react-icons/dist/esm/icons/laptop-icon';

export const AlertCustomIcons: React.FunctionComponent = () => (
  <Fragment>
    <Alert customIcon={<UsersIcon />} title="Default alert title" />
    <Alert customIcon={<BoxIcon />} variant="info" title="Info alert title" />
    <Alert customIcon={<DatabaseIcon />} variant="success" title="Success alert title" />
    <Alert customIcon={<ServerIcon />} variant="warning" title="Warning alert title" />
    <Alert customIcon={<LaptopIcon />} variant="danger" title="Danger alert title" />
  </Fragment>
);
