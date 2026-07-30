---
id: Avatar
section: components
cssPrefix: pf-v6-c-avatar
propComponents: ['Avatar']
---

import './avatar.css';
import { Fragment } from 'react';
import avatarImg from '../../assets/img_avatar-light.svg';
import RhUiAiChatbotIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-ai-chatbot-icon';

## Examples

### Basic usage

Pass in the `src` property to apply an image for the avatar, or pass `children` for custom content such as icons or svg elements.

```ts file="./AvatarBasic.tsx"

```

### Color modifiers

Color modifiers add visual interest and automatically include a border. The available colors are: "red," "orangered," "orange," "yellow," "green," "teal," "blue," "purple," and "gray".

```ts file="./AvatarColorModifiers.tsx"

```

### With initials

An avatar can display initials by using the `initials` property. It's recommended to pass only a single initial to ensure the text fits inside of the avatar.

```ts file="./AvatarInitials.tsx"

```

### Bordered

A border can be applied by passing the `isBordered` property to a non-colorful avatar.

```ts file="./AvatarBordered.tsx"

```

### Size variations

An avatar can be rendered at different sizes by passing the `size` property. The available sizes are: "sm," "md" (the default size), "lg," and "xl".

```ts file="./AvatarSizeVariations.tsx"

```
