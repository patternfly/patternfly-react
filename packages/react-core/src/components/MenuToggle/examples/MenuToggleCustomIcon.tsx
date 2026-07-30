import { Fragment } from 'react';
import { MenuToggle } from '@patternfly/react-core';
import RhUiAddIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-add-icon';

export const MenuToggleCustomIcon: React.FC = () => (
  <Fragment>
    <MenuToggle icon={<RhUiAddIcon />} variant="primary">
      Icon
    </MenuToggle>{' '}
    <MenuToggle icon={<RhUiAddIcon />} variant="secondary">
      Icon
    </MenuToggle>{' '}
    <MenuToggle icon={<RhUiAddIcon />} variant="secondary" isDisabled>
      Icon
    </MenuToggle>
  </Fragment>
);
