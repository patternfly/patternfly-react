import { Fragment } from 'react';
import { MenuToggle } from '@patternfly/react-core';

export const MenuToggleVariantStyles: React.FunctionComponent = () => (
  <Fragment>
    <MenuToggle variant="primary">Collapsed</MenuToggle>{' '}
    <MenuToggle variant="primary" isExpanded>
      Expanded
    </MenuToggle>{' '}
    <MenuToggle variant="primary" isDisabled>
      Disabled
    </MenuToggle>
  </Fragment>
);
