import { Fragment } from 'react';
import { Icon } from '@patternfly/react-core';
import RhUiErrorFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-error-fill-icon';
import RhUiWarningFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-warning-fill-icon';
import RhUiCheckCircleFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-check-circle-fill-icon';
import RhUiInformationFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-information-fill-icon';
import RhUiNotificationFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-notification-fill-icon';

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
