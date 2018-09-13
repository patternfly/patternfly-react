import React from 'react';
import { Avatar } from '@patternfly/react-core';
import avatarImg from '../../../../../react-docs/src/assets/img_avatar.png';

class SimpleAvatar extends React.Component {
  static title = 'Simple Avatar';

  render() {
    return <Avatar src={avatarImg} alt="avatar" />;
  }
}

export default SimpleAvatar;
