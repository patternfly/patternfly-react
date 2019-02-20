import React from 'react';
import { Avatar } from '../index.ts';
import avatarImg from './img_avatar.svg';

class SimpleAvatar extends React.Component {
  render() {
    return <Avatar src={avatarImg} alt="avatar" />;
  }
}

export default SimpleAvatar;
