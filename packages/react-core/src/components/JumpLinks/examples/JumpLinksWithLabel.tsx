import { JumpLinks, JumpLinksItem } from '@patternfly/react-core';

export const JumpLinksWithLabel: React.FunctionComponent = () => (
  <>
    <JumpLinks label="Jump to first section in jump links with label example">
      <JumpLinksItem href="#">Inactive section</JumpLinksItem>
      <JumpLinksItem href="#" isActive>
        Active section
      </JumpLinksItem>
      <JumpLinksItem href="#">Inactive section</JumpLinksItem>
    </JumpLinks>
    <JumpLinks isCentered label="Jump to second section in jump links with label example">
      <JumpLinksItem href="#">Inactive section</JumpLinksItem>
      <JumpLinksItem href="#" isActive>
        Active section
      </JumpLinksItem>
      <JumpLinksItem href="#">Inactive section</JumpLinksItem>
    </JumpLinks>
  </>
);
