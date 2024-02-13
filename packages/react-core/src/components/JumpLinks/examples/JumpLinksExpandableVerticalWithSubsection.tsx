import React from 'react';
import { JumpLinks, JumpLinksItem, JumpLinksList } from '@patternfly/react-core';

export const JumpLinksExpandableVerticalWithSubsection: React.FunctionComponent = () => (
  <JumpLinks isVertical label="Jump to section" expandable={{ default: 'expandable' }}>
    <JumpLinksItem href="#">Inactive section</JumpLinksItem>
    <JumpLinksItem href="#">
      Section with active subsection
      <JumpLinksList>
        <JumpLinksItem href="#" isActive>
          Active subsection
        </JumpLinksItem>
        <JumpLinksItem href="#">Inactive subsection</JumpLinksItem>
        <JumpLinksItem href="#">Inactive subsection</JumpLinksItem>
      </JumpLinksList>
    </JumpLinksItem>
    <JumpLinksItem href="#">Inactive section</JumpLinksItem>
    <JumpLinksItem href="#">Inactive section</JumpLinksItem>
  </JumpLinks>
);
