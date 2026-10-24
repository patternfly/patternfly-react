import { Fragment } from 'react';
import { Icon } from '@patternfly/react-core';
import RhUiAddCircleFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-add-circle-fill-icon';

export const HeadingIconSizes: React.FunctionComponent = () => (
  <Fragment>
    <Icon size="headingSm">
      <RhUiAddCircleFillIcon />
    </Icon>{' '}
    <Icon size="headingMd">
      <RhUiAddCircleFillIcon />
    </Icon>{' '}
    <Icon size="headingLg">
      <RhUiAddCircleFillIcon />
    </Icon>{' '}
    <Icon size="headingXl">
      <RhUiAddCircleFillIcon />
    </Icon>{' '}
    <Icon size="heading_2xl">
      <RhUiAddCircleFillIcon />
    </Icon>{' '}
    <Icon size="heading_3xl">
      <RhUiAddCircleFillIcon />
    </Icon>
  </Fragment>
);
