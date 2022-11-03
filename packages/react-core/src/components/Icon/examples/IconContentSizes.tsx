import React from 'react';
import { Icon } from '@patternfly/react-core';
import PlusCircleIcon from '@patternfly/react-icons/dist/esm/icons/plus-circle-icon';

export const IconContentSizes: React.FunctionComponent = () => (
  <React.Fragment>
    <Icon size="xl" iconSize="sm">
      <PlusCircleIcon />
    </Icon>
    <Icon size="xl" iconSize="md">
      <PlusCircleIcon />
    </Icon>
    <Icon size="xl" iconSize="lg">
      <PlusCircleIcon />
    </Icon>
    <Icon size="xl">
      <PlusCircleIcon />
    </Icon>
  </React.Fragment>
);
