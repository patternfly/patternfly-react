import { Fragment } from 'react';
import { Icon } from '@patternfly/react-core';
import PlusCircleIcon from '@patternfly/react-icons/dist/esm/icons/plus-circle-icon';

export const IconContentSizes: React.FunctionComponent = () => (
  <Fragment>
    <Icon size="3xl" iconSize="lg">
      <PlusCircleIcon />
    </Icon>{' '}
    <Icon size="3xl" iconSize="xl">
      <PlusCircleIcon />
    </Icon>{' '}
    <Icon size="3xl" iconSize="2xl">
      <PlusCircleIcon />
    </Icon>{' '}
    <Icon size="3xl">
      <PlusCircleIcon />
    </Icon>
  </Fragment>
);
