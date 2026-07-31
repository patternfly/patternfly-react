import { Fragment } from 'react';
import { MenuToggle } from '@patternfly/react-core';
import RhUiAddIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-add-icon';

export const MenuToggleCustomIcon: React.FC = () => (
  <Fragment>
    <MenuToggle aria-haspopup={false} icon={<RhUiAddIcon />} variant="primary">
      Icon
    </MenuToggle>{' '}
    <MenuToggle aria-haspopup={false} icon={<RhUiAddIcon />} variant="secondary">
      Icon
    </MenuToggle>{' '}
    <MenuToggle aria-haspopup={false} icon={<RhUiAddIcon />} variant="secondary" isDisabled>
      Icon
    </MenuToggle>
  </Fragment>
);
