import React from 'react';
import { Icon } from '@patternfly/react-core';
import LongArrowAltDownIcon from '@patternfly/react-icons/dist/esm/icons/long-arrow-alt-down-icon';
import AngleRightIcon from '@patternfly/react-icons/dist/esm/icons/angle-right-icon';
import AngleDownIcon from '@patternfly/react-icons/dist/esm/icons/angle-down-icon';
import CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';

export const IconBasic: React.FunctionComponent = () => (
  <React.Fragment>
    <Icon>
      <LongArrowAltDownIcon />
    </Icon>
    <Icon>
      <AngleRightIcon />
    </Icon>
    <Icon>
      <AngleDownIcon />
    </Icon>
    <Icon>
      <CogIcon />
    </Icon>
  </React.Fragment>
);
