import { JumpLinks, JumpLinksItem } from '@patternfly/react-core';

export const JumpLinksVerticalWithLabel: React.FunctionComponent = () => (
  <JumpLinks isVertical label="Jump to vertical example sections with labels">
    <JumpLinksItem href="#">Inactive section</JumpLinksItem>
    <JumpLinksItem href="#" isActive>
      Active section
    </JumpLinksItem>
    <JumpLinksItem href="#">Inactive section</JumpLinksItem>
  </JumpLinks>
);
