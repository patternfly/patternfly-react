import { Fragment } from 'react/jsx-runtime';
import { MenuToggle } from '@patternfly/react-core';

export const MenuToggleSettings: React.FunctionComponent = () => (
  <Fragment>
    <MenuToggle isSettings>Settings</MenuToggle> <MenuToggle isSettings variant="plain" aria-label="Settings" />
  </Fragment>
);
