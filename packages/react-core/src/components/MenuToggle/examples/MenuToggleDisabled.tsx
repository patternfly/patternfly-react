import { MenuToggle } from '@patternfly/react-core';

export const MenuToggleDisabled: React.FunctionComponent = () => (
  <MenuToggle aria-haspopup={false} isDisabled>
    Disabled
  </MenuToggle>
);
