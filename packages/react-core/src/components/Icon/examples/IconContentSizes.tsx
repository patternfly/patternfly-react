import { Fragment } from 'react';
import { Icon } from '@patternfly/react-core';
import RhUiAddCircleFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-add-circle-fill-icon';

export const IconContentSizes: React.FunctionComponent = () => (
  <Fragment>
    <Icon size="3xl" iconSize="lg">
      <RhUiAddCircleFillIcon />
    </Icon>{' '}
    <Icon size="3xl" iconSize="xl">
      <RhUiAddCircleFillIcon />
    </Icon>{' '}
    <Icon size="3xl" iconSize="2xl">
      <RhUiAddCircleFillIcon />
    </Icon>{' '}
    <Icon size="3xl">
      <RhUiAddCircleFillIcon />
    </Icon>
  </Fragment>
);
