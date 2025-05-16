---
id: Right-to-left
section: patterns
---

import { Fragment, useEffect, useState } from 'react';
import translationsEn from "./examples/translations.en.json";
import translationsHe from "./examples/translations.he.json";
import AlignRightIcon from '@patternfly/react-icons/dist/esm/icons/align-right-icon';
import ToolsIcon from '@patternfly/react-icons/dist/esm/icons/tools-icon';
import ClockIcon from '@patternfly/react-icons/dist/esm/icons/clock-icon';
import WalkingIcon from '@patternfly/react-icons/dist/esm/icons/walking-icon';
import pfLogo from '@patternfly/react-core/src/demos/assets/PF-HorizontalLogo-Color.svg';
import BarsIcon from '@patternfly/react-icons/dist/esm/icons/bars-icon';
import CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';
import QuestionCircleIcon from '@patternfly/react-icons/dist/esm/icons/question-circle-icon';
import HelpIcon from '@patternfly/react-icons/dist/esm/icons/help-icon';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';
import HandPaperIcon from '@patternfly/react-icons/dist/esm/icons/hand-paper-icon';
import imgAvatar from '@patternfly/react-core/src/components/assets/avatarImg.svg';
import { rows } from '@patternfly/react-core/dist/esm/demos/sampleData2';

import './examples/PaginatedTable.css';

## Demos

This demonstrates how the UI adapts to the writing mode of the page.

### Paginated table

```js file="./examples/PaginatedTable.tsx" isFullscreen

```
