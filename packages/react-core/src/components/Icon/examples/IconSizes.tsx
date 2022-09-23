import React from 'react';
import { Icon } from '@patternfly/react-core';
import PlusCircleIcon from '@patternfly/react-icons/dist/esm/icons/plus-circle-icon';

export const IconSizes: React.FunctionComponent = () => (
  <React.Fragment>
    <Icon containerSize="sm">
      <PlusCircleIcon />
    </Icon>
    <Icon containerSize="md">
      <PlusCircleIcon />
    </Icon>
    <Icon containerSize="lg">
      <PlusCircleIcon />
    </Icon>
    <Icon containerSize="xl">
      <PlusCircleIcon />
    </Icon>
  </React.Fragment>
);
