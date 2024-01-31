import React from 'react';
import { Icon } from '@patternfly/react-core';
import PlusCircleIcon from '@patternfly/react-icons/dist/esm/icons/plus-circle-icon';

export const HeadingIconSizes: React.FunctionComponent = () => (
  <React.Fragment>
    <Icon size="headingSm">
      <PlusCircleIcon />
    </Icon>
    <Icon size="headingMd">
      <PlusCircleIcon />
    </Icon>
    <Icon size="headingLg">
      <PlusCircleIcon />
    </Icon>
    <Icon size="headingXl">
      <PlusCircleIcon />
    </Icon>
    <Icon size="heading_2xl">
      <PlusCircleIcon />
    </Icon>
    <Icon size="heading_3xl">
      <PlusCircleIcon />
    </Icon>
  </React.Fragment>
);
