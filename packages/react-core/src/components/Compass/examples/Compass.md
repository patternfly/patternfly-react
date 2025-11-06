---
id: Compass
cssPrefix: pf-v6-c-compass
section: components
beta: true
propComponents: ['Compass', 'CompassHeader', 'CompassContent', 'CompassHero', 'CompassMainHeader', 'CompassPanel']
---

import './compass.css';
import { useRef, useState } from 'react';
import PlayIcon from '@patternfly/react-icons/dist/esm/icons/play-icon';
import OutlinedPlusSquare from '@patternfly/react-icons/dist/esm/icons/outlined-plus-square-icon';
import OutlinedCopy from '@patternfly/react-icons/dist/esm/icons/outlined-copy-icon';
import OutlinedQuestionCircleIcon from '@patternfly/react-icons/dist/esm/icons/outlined-question-circle-icon';

## Examples

### Basic

In a basic compass layout, content can be passed to the following props to populate areas of the page:

- `header`: content rendered in the top of the page. This will typically be a `CompassHeader` component to break the header into 3 areas consisting of a logo or brand, middle navigation, and profile.
- `sidebarStart`: content rendered in the left side or start side of the page
- `main`: content rendered in the center of the page. This will typically consist of a `CompassMainHeader` or `CompassHero`, along with a `CompassContent` filled with one or more `CompassPanel` components.
- `sidebarEnd`: content rendered in the right side or end side of the page
- `footer`: content rendered in the bottom of the page

The background image of the `Compass` and `CompassHero` may be customized by using their respective `backgroundSrcLight` and `backgroundSrcDark` props. The `CompassHero` also allows customization of a color gradient across its container by using the `gradientLight` and `gradientDark` props.

```ts file="CompassBasic.tsx"

```

### Demo

When building a compass layout, there several useful variants and props exposed on other Patternfly components:

- `isPlain` on both [DataList](/components/data-list#plain) and [Table](/components/table#table-plain). This flag will set a transparent background for these components, allow the glass effect in a wrapping `CompassPanel` to appear as the background.
- `isVertical` on [ActionList](/components/action-list#vertical-action-list). This flag sets the orientation on `ActionList` to support vertical icon lists for the sidebars.
- `isNav` on [Tabs](/components/tabs#tabs-used-for-site-navigation). This flag enables a new styling of `Tabs` to be used as a top site navigation.
- `isCircle` on [Button](/components/button#circle-buttons) and [MenuToggle](/components/menus/menu-toggle#plain-circle-toggle). This flag sets a border radius on the `Button` and `MenuToggle`, allowing buttons and plain icon menu toggles to be circular and typical menu toggles to be a pill shape.
- `isPill` on [Drawer](/components/drawer#pill). This flag sets a border radius and inset on the `Drawer`, giving it a more floating look.
- `subtitle` on [CardTitle](/components/card#card-with-subtitle). This prop allows a smaller text description to be set in a `Card`'s title easily.
- `isThinking` or `pf-v6-m-thinking` on CompassPanel and [MessageBar](/patternfly-ai/chatbot/ui/#message-bar-with-ai-indicator-styles). This prop, or class name, may be set to turn on a pusling color animation around the component.
- `hasAiIndicator` or `pf-v6-m-ai-indicator` on [MessageBar](/patternfly-ai/chatbot/ui/#message-bar-with-ai-indicator-styles). This prop, or class name, may be set to enable a gradient border around the component.

```ts isFullscreen file="CompassDemo.tsx"

```
