---
id: Page
section: components
---

import { useState, useRef, useEffect } from 'react';
import RhUiNotificationFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-notification-fill-icon';
import RhUiSettingsFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-settings-fill-icon';
import RhUiQuestionMarkCircleIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-question-mark-circle-icon';
import RhUiQuestionMarkCircleFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-question-mark-circle-fill-icon';
import imgAvatar from '@patternfly/react-core/src/components/assets/avatarImg.svg';
import RhUiMenuBarsIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-menu-bars-icon';
import LightbulbIcon from '@patternfly/react-icons/dist/esm/icons/lightbulb-icon';
import RhUiEllipsisVerticalFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-ellipsis-vertical-fill-icon';
import RhUiContainerIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-container-icon';
import RhUiCloudFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-cloud-fill-icon';
import RhUiPortIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-port-icon';
import RhUiAutomationIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-automation-icon';
import RhUiConnectedIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-connected-icon';
import RhUiArrowRightIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-arrow-right-icon';
import RhUiAddCircleFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-add-circle-fill-icon';
import RhUiTrashFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-trash-fill-icon';
import RhUiThumbnailViewSmallFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-thumbnail-view-small-fill-icon';
import pfLogo from '@patternfly/react-core/src/demos/assets/PF-HorizontalLogo-Color.svg';
import pfIcon from '@patternfly/react-core/src/demos/assets/PF-IconLogo.svg';
import activeMQIcon from '@patternfly/react-core/src/demos/assets/activemq-core_200x150.png';
import avroIcon from '@patternfly/react-core/src/demos/assets/camel-avro_200x150.png';
import dropBoxIcon from '@patternfly/react-core/src/demos/assets/camel-dropbox_200x150.png';
import infinispanIcon from '@patternfly/react-core/src/demos/assets/camel-infinispan_200x150.png';
import saxonIcon from '@patternfly/react-core/src/demos/assets/camel-saxon_200x150.png';
import sparkIcon from '@patternfly/react-core/src/demos/assets/camel-spark_200x150.png';
import swaggerIcon from '@patternfly/react-core/src/demos/assets/camel-swagger-java_200x150.png';
import azureIcon from '@patternfly/react-core/src/demos/assets/FuseConnector_Icons_AzureServices.png';
import restIcon from '@patternfly/react-core/src/demos/assets/FuseConnector_Icons_REST.png';
import { data } from '@patternfly/react-core/src/demos/CardView/examples/CardViewData.jsx';

- All examples set the `isManagedSidebar` prop on the Page component to have the sidebar automatically close for smaller screen widths. You can also manually control this behavior by not adding the `isManagedSidebar` prop and instead:
  1. Add an onNavToggle callback to PageHeader
  2. Pass a boolean into the isNavOpen prop to PageSidebar

## Layouts

This demonstrates a variety of navigation patterns in the context of a full page layout. These can be used as a basis for choosing the most appropriate page template for your application.

### Sticky section group

```ts file='./examples/Page/PageStickySectionGroup.tsx' isFullscreen

```

### Sticky section group (alternate syntax)

```ts file='./examples/Page/PageStickySectionGroupAlternate.tsx' isFullscreen

```

### Sticky section breadcrumb (with breakpoints)

```ts file='./examples/Page/PageStickySectionBreadcrumb.tsx' isFullscreen

```

### Context selector/perspective switcher in sidebar

When adding a context selector/perspective switcher in a `PageSidebar`, you must manually control the open state of the `PageSidebar` as well as ensure any interactive menu toggles or buttons cannot receive focus. This demo adds a `tabIndex` of `-1` when the sidebar is not expanded to achieve this.

```ts file='./examples/Page/PageContextSelector.tsx' isFullscreen

```

### Plain

```ts file='./examples/Page/PagePlain.tsx' isFullscreen

```
