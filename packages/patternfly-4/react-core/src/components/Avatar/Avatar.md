---
title: 'Avatar'
cssPrefix: 'pf-c-avatar'
typescript: true
---

## Simple avatar

import { Avatar } from '@patternfly/react-core';
import avatarImg from './examples/avatarImg.svg';

```js
import React from 'react';
import { Avatar } from '@patternfly/react-core';
import avatarImg from './examples/avatarImg.svg';

class SimpleAvatar extends React.Component {
  render() {
    return <Avatar src={avatarImg} alt="avatar" />;
  }
}
```
