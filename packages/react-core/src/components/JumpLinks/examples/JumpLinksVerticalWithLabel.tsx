import { JumpLinks, JumpLinksItem } from '@patternfly/react-core';

export const JumpLinksVerticalWithLabel: React.FunctionComponent = () => (
  <JumpLinks isVertical label="Jump to vertical section">
    <JumpLinksItem href="#">Inactive section</JumpLinksItem>
    <JumpLinksItem href="#" isActive>
      Active section
    </JumpLinksItem>
    <JumpLinksItem href="#">Inactive section</JumpLinksItem>
  </JumpLinks>
);
