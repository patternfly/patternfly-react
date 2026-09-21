import { Fragment } from 'react';
import { MenuToggle } from '@patternfly/react-core';

export const MenuTogglePlainTextLabel: React.FunctionComponent = () => (
  <Fragment>
    <MenuToggle aria-haspopup={false} variant="plainText" isDisabled aria-label="Disabled plain menu toggle">
      Disabled
    </MenuToggle>{' '}
    <MenuToggle aria-haspopup={false} variant="plainText" aria-label="Plain menu toggle">
      Custom text
    </MenuToggle>{' '}
    <MenuToggle aria-haspopup={false} variant="plainText" isExpanded aria-label="Expanded plain menu toggle">
      Custom text (expanded)
    </MenuToggle>
  </Fragment>
);
