import { Fragment } from 'react';
import { MenuToggle, Badge } from '@patternfly/react-core';

export const MenuToggleBadge: React.FunctionComponent = () => (
  <Fragment>
    <MenuToggle aria-haspopup={false} badge={<Badge>4 selected</Badge>}>
      Count
    </MenuToggle>
    <MenuToggle
      aria-haspopup={false}
      variant="plainText"
      badge={<Badge screenReaderText="additional items">4</Badge>}
    />
  </Fragment>
);
