import React from 'react';
import { JumpLinks, JumpLinksItem } from '@patternfly/react-core';

export const JumpLinksVertical: React.FunctionComponent = () => (
  <JumpLinks isVertical>
    <JumpLinksItem href="#">Inactive section</JumpLinksItem>
    <JumpLinksItem href="#" isActive>
      Active section
    </JumpLinksItem>
    <JumpLinksItem href="#">Inactive section</JumpLinksItem>
  </JumpLinks>
);
