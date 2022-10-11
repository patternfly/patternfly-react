import React from 'react';
import { Banner } from '@patternfly/react-core';
import CheckCircleIcon from '@patternfly/react-icons/dist/esm/icons/check-circle-icon';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';
import ExclamationTriangleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-triangle-icon';
import InfoCircleIcon from '@patternfly/react-icons/dist/esm/icons/info-circle-icon';
import BellIcon from '@patternfly/react-icons/dist/esm/icons/bell-icon';

export const BannerStatus: React.FunctionComponent = () => (
  <>
    <Banner>
      <BellIcon /> Default banner
    </Banner>
    <br />
    <Banner variant="info">
      <InfoCircleIcon /> Info banner
    </Banner>
    <br />
    <Banner variant="danger">
      <ExclamationCircleIcon /> Danger banner
    </Banner>
    <br />
    <Banner variant="success">
      <CheckCircleIcon /> Success banner
    </Banner>
    <br />
    <Banner variant="warning">
      <ExclamationTriangleIcon /> Warning banner
    </Banner>
  </>
);
