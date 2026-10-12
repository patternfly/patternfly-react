import { Fragment } from 'react';
import { Icon } from '@rh-felt/react-core';
import RhUiAddCircleFillIcon from '@rh-felt/react-icons/dist/esm/icons/rh-ui-add-circle-fill-icon';

export const BodyIconSizes: React.FunctionComponent = () => (
  <Fragment>
    <Icon size="bodySm">
      <RhUiAddCircleFillIcon />
    </Icon>{' '}
    <Icon size="bodyDefault">
      <RhUiAddCircleFillIcon />
    </Icon>{' '}
    <Icon size="bodyLg">
      <RhUiAddCircleFillIcon />
    </Icon>
  </Fragment>
);
