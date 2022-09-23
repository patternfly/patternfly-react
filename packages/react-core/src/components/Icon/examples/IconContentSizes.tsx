import React from 'react';
import { Icon } from '@patternfly/react-core';
import PlusCircleIcon from '@patternfly/react-icons/dist/esm/icons/plus-circle-icon';

export const IconContentSizes: React.FunctionComponent = () => (
  <React.Fragment>
    <Icon isInline containerSize="xl" contentSize="sm">
      <PlusCircleIcon />
    </Icon>
    <Icon isInline containerSize="xl" contentSize="md">
      <PlusCircleIcon />
    </Icon>
    <Icon isInline containerSize="xl" contentSize="lg">
      <PlusCircleIcon />
    </Icon>
    <Icon isInline containerSize="xl" contentSize="xl">
      <PlusCircleIcon />
    </Icon>
  </React.Fragment>
);
