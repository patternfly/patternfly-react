---
id: Avatar
section: components
cssPrefix: pf-v5-c-avatar
propComponents: ['Avatar']
---

import avatarImg from '../../assets/avatarImg.svg';
import avatarImgDark from '../../assets/avatarImgDark.svg';
import './example.css';

## Examples

### Basic

```ts
import React from 'react';
import { Avatar } from '@patternfly/react-core';
import avatarImg from '../../assets/avatarImg.svg';

<Avatar src={avatarImg} alt="avatar" />;
```

### Size variations

```ts
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
```

### Bordered - light

```ts
import React from 'react';
import { Avatar } from '@patternfly/react-core';
import avatarImg from '../../assets/avatarImg.svg';

<Avatar src={avatarImg} alt="avatar" border="light" />;
```

### Bordered - dark

```ts
import React from 'react';
import { Avatar } from '@patternfly/react-core';
import avatarImgDark from '../../assets/avatarImgDark.svg';

<Avatar src={avatarImgDark} alt="avatar" border="dark" />;
```
