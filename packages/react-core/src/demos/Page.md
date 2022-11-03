---
id: Page
section: components
---

import BellIcon from '@patternfly/react-icons/dist/esm/icons/bell-icon';
import CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';
import HelpIcon from '@patternfly/react-icons/dist/esm/icons/help-icon';
import QuestionCircleIcon from '@patternfly/react-icons/dist/esm/icons/question-circle-icon';
import imgBrand from '@patternfly/react-core/src/demos/examples/pfColorLogo.svg';
import imgAvatar from '@patternfly/react-core/src/components/Avatar/examples/avatarImg.svg';
import BarsIcon from '@patternfly/react-icons/dist/esm/icons/bars-icon';
import AttentionBellIcon from '@patternfly/react-icons/dist/esm/icons/attention-bell-icon';
import LightbulbIcon from '@patternfly/react-icons/dist/esm/icons/lightbulb-icon';

- All examples set the `isManagedSidebar` prop on the Page component to have the sidebar automatically close for smaller screen widths. You can also manually control this behavior by not adding the `isManagedSidebar` prop and instead:

  1. Add an onNavToggle callback to PageHeader
  2. Pass a boolean into the isNavOpen prop to PageSidebar

- To make the page take up the full height, it is recommended to set the height of all ancestor elements up to the page component to `100%`

## Layouts

This demonstrates a variety of navigation patterns in the context of a full page layout. These can be used as a basis for choosing the most appropriate page template for your application.

### Sticky section group

```ts file='./examples/Page/PageStickySectionGroup.tsx' isFullscreen
```

### Sticky section group (alternate syntax)

```ts  file='./examples/Page/PageStickySectionGroupAlternate.tsx' isFullscreen
```

### Sticky section group (using PageHeader)

This demo is provided becuase PageHeader and PageHeaderTools are still in use; however, going forward Masthead and Toolbar should be used to make headers rather than PageHeader and PageHeaderTools.

```ts file='./examples/Page/PageStickySectionGroupUsingPageHeader.tsx' isFullscreen
```

### Sticky section breadcrumb (with breakpoints)

```ts file='./examples/Page/PageStickySectionBreadcrumb.tsx' isFullscreen
```
