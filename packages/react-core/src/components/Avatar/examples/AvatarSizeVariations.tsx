import React from 'react';
import { Avatar } from '@patternfly/react-core';
import avatarImg from '../../assets/avatarImg.svg';

<React.Fragment>
  Small
  <br />
  <Avatar src={avatarImg} alt="avatar" size="sm" />
  <br />
  Medium
  <br />
  <Avatar src={avatarImg} alt="avatar" size="md" />
  <br />
  Large
  <br />
  <Avatar src={avatarImg} alt="avatar" size="lg" />
  <br />
  Extra Large
  <br />
  <Avatar src={avatarImg} alt="avatar" size="xl" />
</React.Fragment>;
