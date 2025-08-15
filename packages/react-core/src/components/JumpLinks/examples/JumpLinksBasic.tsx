import { JumpLinks, JumpLinksItem } from '@patternfly/react-core';

export const JumpLinksBasic: React.FunctionComponent = () => (
  <JumpLinks aria-label="Jump to basic example sections">
    <JumpLinksItem href="#">Inactive section</JumpLinksItem>
    <JumpLinksItem href="#" isActive>
      Active section
    </JumpLinksItem>
    <JumpLinksItem href="#">Inactive section</JumpLinksItem>
  </JumpLinks>
);
