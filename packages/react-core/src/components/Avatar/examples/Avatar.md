---
id: Avatar
section: components
cssPrefix: pf-c-avatar
propComponents: ['Avatar']
---

import avatarImg from './avatarImg.svg';
import avatarImgDark from './avatarImgDark.svg';
import './example.css';

## Examples
### Basic
```ts
import React from 'react';
import { Avatar } from '@patternfly/react-core';
import avatarImg from './avatarImg.svg';

<Avatar src={avatarImg} alt="avatar" />
```

### Bordered - light
```ts
import React from 'react';
import { Avatar } from '@patternfly/react-core';
import avatarImg from './img_avatar.svg';

<Avatar src={avatarImg} alt="avatar" border="light" />
```

### Bordered - dark
```ts
import React from 'react';
import { Avatar } from '@patternfly/react-core';
import avatarImgDark from './img_avatar-dark.svg';

<Avatar src={avatarImgDark} alt="avatar" border="dark" />
```

