import { Fragment } from 'react/jsx-runtime';
import { MenuToggle } from '@patternfly/react-core';

export const MenuToggleSettings: React.FunctionComponent = () => (
  <Fragment>
    <MenuToggle aria-haspopup={false} isSettings>
      Settings
    </MenuToggle>{' '}
    <MenuToggle aria-haspopup={false} isSettings variant="plain" aria-label="Settings" />
  </Fragment>
);
