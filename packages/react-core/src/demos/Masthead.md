---
id: Masthead
section: components
---

import BarsIcon from '@patternfly/react-icons/dist/esm/icons/bars-icon';
import BellIcon from '@patternfly/react-icons/dist/esm/icons/bell-icon';
import CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';
import HelpIcon from '@patternfly/react-icons/dist/esm/icons/help-icon';
import QuestionCircleIcon from '@patternfly/react-icons/dist/esm/icons/question-circle-icon';
import imgAvatar from '@patternfly/react-core/src/components/Avatar/examples/avatarImg.svg';

## Demos

### Masthead with utilities and user dropdown menu

Many mastheads contain utilities which collapse into a dropdown at smaller viewport widths. These utilities could include a notification badge to open and close a notification drawer, a link to app or user settings, a help icon which could launch quick starts or link to other resources, and many other utilities. In this demo, the notification badge does not collapse down into the mobile menu so that it is always visible even at narrower viewport widths.

```ts file='./examples/Masthead/MastheadWithUtilitiesAndUserDropdownMenu.tsx' isFullscreen
```
