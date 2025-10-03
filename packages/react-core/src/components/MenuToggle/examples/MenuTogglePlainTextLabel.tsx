import { Fragment } from 'react';
import { MenuToggle } from '@patternfly/react-core';

export const MenuTogglePlainTextLabel: React.FunctionComponent = () => (
  <Fragment>
    <MenuToggle variant="plainText" isDisabled aria-label="Disabled plain menu toggle">
      Disabled
    </MenuToggle>{' '}
    <MenuToggle variant="plainText" aria-label="Plain menu toggle">
      Custom text
    </MenuToggle>{' '}
    <MenuToggle variant="plainText" isExpanded aria-label="Expanded plain menu toggle">
      Custom text (expanded)
    </MenuToggle>
  </Fragment>
);
