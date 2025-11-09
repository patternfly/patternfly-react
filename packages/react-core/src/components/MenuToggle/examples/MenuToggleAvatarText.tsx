import { Fragment } from 'react';
import { MenuToggle, Avatar } from '@patternfly/react-core';
import imgAvatar from '@patternfly/react-core/src/components/assets/avatarImg.svg';

export const MenuToggleAvatarText: React.FunctionComponent = () => (
  <Fragment>
    <MenuToggle icon={<Avatar src={imgAvatar} alt="avatar" />}>Ned Username</MenuToggle>{' '}
    <MenuToggle icon={<Avatar src={imgAvatar} alt="avatar" />} isExpanded>
      Ned Username
    </MenuToggle>{' '}
    <MenuToggle icon={<Avatar src={imgAvatar} alt="avatar" />} isDisabled>
      Ned Username
    </MenuToggle>
  </Fragment>
);
