import { FunctionComponent, Fragment } from 'react';
import { Icon } from '@patternfly/react-core';
import PlusCircleIcon from '@patternfly/react-icons/dist/esm/icons/plus-circle-icon';

export const IconSizes: FunctionComponent = () => (
  <Fragment>
    <Icon size="sm">
      <PlusCircleIcon />
    </Icon>
    <Icon size="md">
      <PlusCircleIcon />
    </Icon>
    <Icon size="lg">
      <PlusCircleIcon />
    </Icon>
    <Icon size="xl">
      <PlusCircleIcon />
    </Icon>
  </Fragment>
);
