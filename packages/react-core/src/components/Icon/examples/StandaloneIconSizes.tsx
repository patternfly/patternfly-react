import { Fragment } from 'react';
import { Icon } from '@patternfly/react-core';
import RhUiAddCircleFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-add-circle-fill-icon';

export const StandaloneIconSizes: React.FunctionComponent = () => (
  <Fragment>
    <Icon size="sm">
      <RhUiAddCircleFillIcon />
    </Icon>{' '}
    <Icon size="md">
      <RhUiAddCircleFillIcon />
    </Icon>{' '}
    <Icon size="lg">
      <RhUiAddCircleFillIcon />
    </Icon>{' '}
    <Icon size="xl">
      <RhUiAddCircleFillIcon />
    </Icon>{' '}
    <Icon size="2xl">
      <RhUiAddCircleFillIcon />
    </Icon>{' '}
    <Icon size="3xl">
      <RhUiAddCircleFillIcon />
    </Icon>
  </Fragment>
);
