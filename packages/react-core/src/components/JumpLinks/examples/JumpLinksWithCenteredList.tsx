import { JumpLinks, JumpLinksItem } from '@patternfly/react-core';

export const JumpLinksWithCenteredList: React.FunctionComponent = () => (
  <JumpLinks isCentered aria-label="Centered example">
    <JumpLinksItem href="#">Inactive section</JumpLinksItem>
    <JumpLinksItem href="#" isActive>
      Active section
    </JumpLinksItem>
    <JumpLinksItem href="#">Inactive section</JumpLinksItem>
  </JumpLinks>
);
