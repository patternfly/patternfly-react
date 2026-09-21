import { Fragment } from 'react';
import { MenuToggle } from '@patternfly/react-core';

export const MenuToggleVariantStyles: React.FunctionComponent = () => (
  <Fragment>
    <MenuToggle aria-haspopup={false} variant="primary">
      Collapsed
    </MenuToggle>{' '}
    <MenuToggle aria-haspopup={false} variant="primary" isExpanded>
      Expanded
    </MenuToggle>{' '}
    <MenuToggle aria-haspopup={false} variant="primary" isDisabled>
      Disabled
    </MenuToggle>
  </Fragment>
);
