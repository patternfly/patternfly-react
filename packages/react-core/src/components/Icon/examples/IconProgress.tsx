import React from 'react';
import { Icon, Spinner } from '@patternfly/react-core';
import CheckCircleIcon from '@patternfly/react-icons/dist/esm/icons/check-circle-icon';

export const IconProgress: React.FunctionComponent = () => (
  <React.Fragment>
    <Icon isInProgress progressIcon={<Spinner size="md" isSVG aria-label="Loading..." />} containerSize="md">
      <CheckCircleIcon />
    </Icon>
    <Icon progressIcon={<Spinner size="md" isSVG aria-label="Loading..." />} containerSize="md">
      <CheckCircleIcon />
    </Icon>
  </React.Fragment>
);
