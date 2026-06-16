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

### With image

Pass in the `src` property to apply an image for the avatar.

An avatar requires an `alt` prop for accessibility, and should generally be the name of the user. To hide the avatar from the accessibility tree, pass an empty string `""`. This can be useful when the avatar is more decorative in nature or context is provided by other means near where the avatar is rendered, such as within a menu toggle that displays a user's name next to the avatar.

```ts file="./AvatarBasic.tsx"

```

### Bordered

A border can be applied by passing the `isBordered` property. This can help make the avatar stand out against its surroundings and background.

```ts file="./AvatarBordered.tsx"

```

### Size variations

An avatar can be rendered at different sizes by passing the `size` property. The available sizes are: "sm", "md", "lg", and "xl".

```ts file="./AvatarSizeVariations.tsx"

```

### With initials

An avatar can display initials instead of an image by using the `initials` property. It's recommended to pass only a single initial to ensure the text fits inside of the avatar. When the `initials` property is used, the `alt` property applies an `aria-label` to provide an accessible name for the avatar, and you should follow the same guidelines in the [with image example](#with-image).

When using initials, you can also pass the `color` property to apply different background colors to the avatar. The available colors are: "red", "orangered", "orange", "yellow", "green", "teal", "blue", "purple", and "gray". The following example shows initials being used with a non-color avatar as well as each colorful variation.

```ts file="./AvatarInitials.tsx"

```

### With children

Custom content such as an icon or `svg` element can be passed as `children` to the avatar. Similar to the [with initials example](#with-initials), an avatar with `children` passed can be given a colorful background via the `color` property and should follow the same guildelines regarding the `alt` property as the [with image example](#with-image).

```ts file="./AvatarWithChildren.tsx"

```
