---
id: RTL
section: patterns
---
import {
  Checkbox,
  Label,
  PageSection,
  ToolbarExpandIconWrapper,
  ToolbarContent,
  Toolbar,
  ToolbarItem,
  SearchInput,
  Masthead,
  MastheadToggle,
  MastheadMain,
  MastheadContent,
  SkipToContent,
  Breadcrumb,
  BreadcrumbItem,
  Page,
  PageSectionVariants,
  TextContent,
  Text,
  Divider
} from '@patternfly/react-core';

import DashboardWrapper from '@patternfly/react-core/src/demos/examples/DashboardWrapper';
import { rows, columns } from '@patternfly/react-table/src/docs/demos/table-demos/sampleData';
import translationsEn from "./examples/translations.en.json";
import translationsHe from "./examples/translations.he.json";
import AlignRightIcon from '@patternfly/react-icons/dist/esm/icons/align-right-icon';
import WalkingIcon from '@patternfly/react-icons/dist/esm/icons/walking-icon';
import FilterIcon from '@patternfly/react-icons/dist/esm/icons/filter-icon';
import SortAmountDownIcon from '@patternfly/react-icons/dist/esm/icons/sort-amount-down-icon';

## Demos

This demonstrates how the UI adapts to the writing mode of the page.

### Table column management

```js file="./examples/TableColumnManagement.jsx" isFullscreen
```
