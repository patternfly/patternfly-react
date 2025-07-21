---
id: Motion
section: design-foundations
source: demo
---

import { Fragment, useRef, useState, useEffect, useCallback } from 'react';

import BellIcon from '@patternfly/react-icons/dist/esm/icons/bell-icon';
import CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';
import BarsIcon from '@patternfly/react-icons/dist/js/icons/bars-icon';
import HelpIcon from '@patternfly/react-icons/dist/esm/icons/help-icon';
import PowerOffIcon from '@patternfly/react-icons/dist/esm/icons/power-off-icon';
import QuestionCircleIcon from '@patternfly/react-icons/dist/esm/icons/question-circle-icon';
import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';
import imgAvatar from '@patternfly/react-core/src/components/assets/avatarImg.svg';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';
import pfLogo from '@patternfly/react-core/src/demos/assets/PF-HorizontalLogo-Color.svg';
import MultiContentCard from "@patternfly/react-component-groups/dist/dynamic/MultiContentCard";
import { ArrowRightIcon, LockIcon, PortIcon, CubeIcon, AutomationIcon, ExclamationCircleIcon, CheckCircleIcon, ExclamationTriangleIcon, HamburgerIcon, TimesIcon} from '@patternfly/react-icons';
import { createUseStyles } from 'react-jss';
import clsx from 'clsx';
import UnpluggedIcon from '@patternfly/react-icons/dist/esm/icons/unplugged-icon';
import l_gallery_GridTemplateColumns_min from '@patternfly/react-tokens/dist/esm/l_gallery_GridTemplateColumns_min';
import {applicationsData} from './examples/ResourceTableData.jsx';
import SkeletonTable from "@patternfly/react-component-groups/dist/dynamic/SkeletonTable";
import t_global_text_color_subtle from '@patternfly/react-tokens/dist/esm/t_global_text_color_subtle';
import { AnimationsOverview } from '@patternfly/react-core/dist/esm/demos/Animations/AnimationsOverview';
import { AnimationsNotificationsDrawer } from '@patternfly/react-core/dist/esm/demos/Animations/AnimationsNotificationsDrawer';
import { AnimationsHeaderToolbar } from '@patternfly/react-core/dist/esm/demos/Animations/AnimationsHeaderToolbar';
import { AnimationsStartTourModal } from '@patternfly/react-core/dist/esm/demos/Animations/AnimationsStartTourModal';
import { AnimationsEndTourModal } from '@patternfly/react-core/dist/esm/demos/Animations/AnimationsEndTourModal';
import { AnimationsCreateDatabaseForm } from '@patternfly/react-core/dist/esm/demos/Animations/AnimationsCreateDatabaseForm';
import { GuidedTourProvider, useGuidedTour } from '@patternfly/react-core/dist/esm/demos/Animations/GuidedTourContext';
import BoltIcon from '@patternfly/react-icons/dist/esm/icons/bolt-icon';
import { Table, Thead, Tbody, Tr, Th, Td, ExpandableRowContent } from '@patternfly/react-table';
import PendingIcon from '@patternfly/react-icons/dist/esm/icons/pending-icon';
import CheckIcon from '@patternfly/react-icons/dist/esm/icons/check-icon';
import InfoIcon from '@patternfly/react-icons/dist/esm/icons/info-icon';
import ResourcesFullIcon from '@patternfly/react-icons/dist/esm/icons/resources-full-icon';
import openshiftLogo from '../assets/Summit-collage-depoying-openshift-product-icon-RH.png'




## Demos

The following demo highlights the current state of [our ongoing effort to animate PatternFly components](https://github.com/orgs/patternfly/projects/7/views/66).

To see how components like alerts, navigation, and forms can now use motion to provide clear feedback and improve usability, you can explore this demo and interact with various UI elements. We will continue to update this demo as additional animation support is added.

Currently, this demo includes animations for:

* Alerts.
* Tabs.
* The notification badge and notification drawer.
* The hamburger/navigation menu icon.
* The masthead settings icon.
* Expandable navigation items.
* Skeleton loader in a table.
* Button clicks.
* Validation failure in forms.

### Animations

```js file="./examples/Animations.tsx" isFullscreen
```
