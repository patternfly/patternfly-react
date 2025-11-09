import { Fragment } from 'react';
import { MenuToggle, Badge } from '@patternfly/react-core';

export const MenuToggleBadge: React.FunctionComponent = () => (
  <Fragment>
    <MenuToggle badge={<Badge>4 selected</Badge>}>Count</MenuToggle>
    <MenuToggle variant="plainText" badge={<Badge screenReaderText="additional items">4</Badge>} />
  </Fragment>
);
