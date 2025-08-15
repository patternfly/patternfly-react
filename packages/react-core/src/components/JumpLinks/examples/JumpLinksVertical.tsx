import { JumpLinks, JumpLinksItem } from '@patternfly/react-core';

export const JumpLinksVertical: React.FunctionComponent = () => (
  <JumpLinks isVertical aria-label="Jump to vertical example sections">
    <JumpLinksItem href="#">Inactive section</JumpLinksItem>
    <JumpLinksItem href="#" isActive>
      Active section
    </JumpLinksItem>
    <JumpLinksItem href="#">Inactive section</JumpLinksItem>
  </JumpLinks>
);
