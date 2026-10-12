import { Fragment } from 'react';
import { Icon } from '@rh-felt/react-core';
import RhUiErrorFillIcon from '@rh-felt/react-icons/dist/esm/icons/rh-ui-error-fill-icon';
import RhUiWarningFillIcon from '@rh-felt/react-icons/dist/esm/icons/rh-ui-warning-fill-icon';
import RhUiCheckCircleFillIcon from '@rh-felt/react-icons/dist/esm/icons/rh-ui-check-circle-fill-icon';
import RhUiInformationFillIcon from '@rh-felt/react-icons/dist/esm/icons/rh-ui-information-fill-icon';
import RhUiNotificationFillIcon from '@rh-felt/react-icons/dist/esm/icons/rh-ui-notification-fill-icon';

export const IconStatus: React.FunctionComponent = () => (
  <Fragment>
    <Icon status="danger">
      <RhUiErrorFillIcon />
    </Icon>{' '}
    <Icon status="warning">
      <RhUiWarningFillIcon />
    </Icon>{' '}
    <Icon status="success">
      <RhUiCheckCircleFillIcon />
    </Icon>{' '}
    <Icon status="info">
      <RhUiInformationFillIcon />
    </Icon>{' '}
    <Icon status="custom">
      <RhUiNotificationFillIcon />
    </Icon>
  </Fragment>
);
