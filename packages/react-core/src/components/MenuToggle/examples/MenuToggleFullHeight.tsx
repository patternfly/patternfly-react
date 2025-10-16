import { MenuToggle } from '@patternfly/react-core';

export const MenuToggleFullHeight: React.FunctionComponent = () => (
  <div style={{ height: '80px' }}>
    <MenuToggle isFullHeight aria-label="Full height menu toggle">
      Full height
    </MenuToggle>
  </div>
);
