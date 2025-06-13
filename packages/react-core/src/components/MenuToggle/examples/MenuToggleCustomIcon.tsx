import { Fragment } from 'react';
import { MenuToggle } from '@patternfly/react-core';
import PlusIcon from '@patternfly/react-icons/dist/esm/icons/plus-icon';

export const MenuToggleCustomIcon: React.FC = () => (
  <Fragment>
    <MenuToggle icon={<PlusIcon />} variant="primary">
      Icon
    </MenuToggle>{' '}
    <MenuToggle icon={<PlusIcon />} variant="secondary">
      Icon
    </MenuToggle>{' '}
    <MenuToggle icon={<PlusIcon />} variant="secondary" isDisabled>
      Icon
    </MenuToggle>
  </Fragment>
);
