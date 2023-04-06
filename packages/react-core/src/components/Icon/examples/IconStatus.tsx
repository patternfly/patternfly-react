import React from 'react';
import { Icon } from '@patternfly/react-core';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';
import ExclamationTriangleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-triangle-icon';
import CheckCircleIcon from '@patternfly/react-icons/dist/esm/icons/check-circle-icon';
import InfoCircleIcon from '@patternfly/react-icons/dist/esm/icons/info-circle-icon';
import BellIcon from '@patternfly/react-icons/dist/esm/icons/bell-icon';

export const IconStatus: React.FunctionComponent = () => (
  <React.Fragment>
    <Icon status="danger">
      <ExclamationCircleIcon />
    </Icon>
    <Icon status="warning">
      <ExclamationTriangleIcon />
    </Icon>
    <Icon status="success">
      <CheckCircleIcon />
    </Icon>
    <Icon status="info">
      <InfoCircleIcon />
    </Icon>
    <Icon status="default">
      <BellIcon />
    </Icon>
  </React.Fragment>
);
