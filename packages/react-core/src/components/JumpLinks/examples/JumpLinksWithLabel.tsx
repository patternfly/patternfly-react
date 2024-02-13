import React from 'react';
import { JumpLinks, JumpLinksItem } from '@patternfly/react-core';

export const JumpLinksWithLabel: React.FunctionComponent = () => (
  <>
    <JumpLinks label="Jump to section">
      <JumpLinksItem href="#">Inactive section</JumpLinksItem>
      <JumpLinksItem href="#" isActive>
        Active section
      </JumpLinksItem>
      <JumpLinksItem href="#">Inactive section</JumpLinksItem>
    </JumpLinks>
    <JumpLinks isCentered label="Jump to section">
      <JumpLinksItem href="#">Inactive section</JumpLinksItem>
      <JumpLinksItem href="#" isActive>
        Active section
      </JumpLinksItem>
      <JumpLinksItem href="#">Inactive section</JumpLinksItem>
    </JumpLinks>
  </>
);
