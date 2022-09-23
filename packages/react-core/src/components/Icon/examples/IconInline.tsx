import React from 'react';
import { Icon } from '@patternfly/react-core';
import PlusCircleIcon from '@patternfly/react-icons/dist/esm/icons/plus-circle-icon';

export const IconInline: React.FunctionComponent = () => (
  <React.Fragment>
    An inline
    <Icon isInline>
      <PlusCircleIcon />
    </Icon>
    plus icon.
  </React.Fragment>
);
