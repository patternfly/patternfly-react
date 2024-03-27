---
id: Table
section: components
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
Divider,
Avatar,
Brand,
Button,
ButtonVariant,
Dropdown,
DropdownGroup,
DropdownItem,
DropdownList,
MastheadBrand,
MenuToggle,
ToolbarGroup,
PageToggleButton,
Nav,
NavItem,
NavList,
PageSidebar,
PageSidebarBody,
} from '@patternfly/react-core';
import { Table as TableDeprecated, TableHeader, TableBody } from '@patternfly/react-table/deprecated';
import CheckIcon from '@patternfly/react-icons/dist/esm/icons/check-icon';
import CloneIcon from '@patternfly/react-icons/dist/esm/icons/clone-icon';
import CodeIcon from '@patternfly/react-icons/dist/esm/icons/code-icon';
import CodeBranchIcon from '@patternfly/react-icons/dist/esm/icons/code-branch-icon';
import CubeIcon from '@patternfly/react-icons/dist/esm/icons/cube-icon';
import EditIcon from '@patternfly/react-icons/dist/esm/icons/edit-icon';
import FilterIcon from '@patternfly/react-icons/dist/esm/icons/filter-icon';
import SortAmountDownIcon from '@patternfly/react-icons/dist/esm/icons/sort-amount-down-icon';
import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';
import SyncIcon from '@patternfly/react-icons/dist/esm/icons/sync-icon';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';
import CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';
import HelpIcon from '@patternfly/react-icons/dist/esm/icons/help-icon';
import QuestionCircleIcon from '@patternfly/react-icons/dist/esm/icons/question-circle-icon';
import globalDangerColor200 from '@patternfly/react-tokens/dist/esm/global_danger_color_200';
import AngleDownIcon from '@patternfly/react-icons/dist/esm/icons/angle-down-icon';
import AngleRightIcon from '@patternfly/react-icons/dist/esm/icons/angle-right-icon';
import BarsIcon from '@patternfly/react-icons/dist/esm/icons/bars-icon';
import AttentionBellIcon from '@patternfly/react-icons/dist/esm/icons/attention-bell-icon';
import BlueprintIcon from '@patternfly/react-icons/dist/esm/icons/blueprint-icon';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';
import { DashboardWrapper } from '@patternfly/react-table/dist/esm/demos/DashboardWrapper';
import { rows, columns } from '@patternfly/react-table/dist/esm/demos/sampleData';
import spacing from '@patternfly/react-styles/css/utilities/Spacing/spacing';
import BellIcon from '@patternfly/react-icons/dist/esm/icons/bell-icon';

## Demos

### Bulk select

```js isFullscreen file="./examples/TableBulkSelect.tsx"

```

### Expand/collapse all

```js isFullscreen file="./examples/TableExpandCollapseAll.tsx"

```

### Compact

```js isFullscreen file="./examples/TableCompact.tsx"

```

### Compound expansion

```js isFullscreen file="./examples/TableCompoundExpansion.tsx"

```

### Column management

```js isFullscreen file="./examples/TableColumnManagement.tsx"

```

### Column management with draggable

```js isDeprecated isFullscreen file="./examples/TableColumnManagementWithDraggable.tsx"

```

### Filterable

```js isFullscreen file="./examples/TableFilterable.tsx"

```

### Sortable - responsive

```js isFullscreen file="./examples/TableSortableResponsive.tsx"

```

### Automatic pagination

The below example illustrates the `isLastFullPageShown` prop, which makes the following changes when the user sets the number of items to display per page to an amount that exceeds the remaining amount of data:

- The component automatically changes the page back to the last full page of results, rather than defaulting to the final page of results.

To demonstrate this, navigate to the last page of data below using the `>>` navigation arrows, then use the dropdown selector to change the view to 5 per page.

- The default behavior would show the last page of results, which would only contain the last two rows (rows 11 - 12).
- The `isLastFullPageShown` prop navigates you back to the previous page which does contain a full page of 5 rows (rows 6 - 10).

```js isFullscreen file="./examples/TableAutomaticPagination.tsx"

```

### Static bottom pagination on mobile

```js isFullscreen file="./examples/TableStaticBottomPagination.tsx"

```

### Sticky header

```js isFullscreen file="./examples/TableStickyHeader.tsx"

```

### Sticky first column

```js isFullscreen file="./examples/TableStickyFirstColumn.tsx"

```

### Sticky columns and header with toolbar

A toolbar may be added above a sticky table either inside or outside the `OuterScrollContainer`.

```js isFullscreen file="../components/Table/examples/TableStickyColumnsAndHeader.tsx"

```

## Empty states

These examples demonstrate the use of an [Empty State component](/components/empty-state) inside of a [Table](/components/table). Empty states are useful in a table when a filter returns no results, while data is loading, or when any type of error or exception condition occurs.

### Empty

```js isFullscreen file="./examples/TableEmptyStateDefault.tsx"

```

### Loading

```js isFullscreen file="./examples/TableEmptyStateLoading.tsx"

```

### Error

```js isFullscreen file="./examples/TableEmptyStateError.tsx"

```
