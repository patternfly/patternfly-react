import { Fragment } from 'react';
import { MenuToggle, Avatar } from '@patternfly/react-core';
import imgAvatar from '@patternfly/react-core/src/components/assets/avatarImg.svg';

export const MenuToggleAvatarText: React.FunctionComponent = () => (
  <Fragment>
    <MenuToggle aria-haspopup={false} icon={<Avatar src={imgAvatar} alt="avatar" size="sm" />}>
      Ned Username
    </MenuToggle>{' '}
    <MenuToggle aria-haspopup={false} icon={<Avatar src={imgAvatar} alt="avatar" size="sm" />} isExpanded>
      Ned Username
    </MenuToggle>{' '}
    <MenuToggle aria-haspopup={false} icon={<Avatar src={imgAvatar} alt="avatar" size="sm" />} isDisabled>
      Ned Username
    </MenuToggle>
  </Fragment>
);
