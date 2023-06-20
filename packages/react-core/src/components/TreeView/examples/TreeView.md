---
id: Tree view
section: components
cssPrefix: pf-v5-c-tree-view
propComponents: ['TreeView', 'TreeViewDataItem', 'TreeViewSearch']
---

import { FolderIcon, FolderOpenIcon, EllipsisVIcon, ClipboardIcon, HamburgerIcon } from '@patternfly/react-icons';

## Examples

### Default

```ts file='./TreeViewDefault.tsx'

```

### With separate selection and expansion

The `hasSelectableNodes` modifier will separate the expansion and selection behaviors, allowing a parent node to be selected or deselected without toggling its expansion.

```ts file='./TreeViewSelectionExpansion.tsx'

```

### With search

```ts file='./TreeViewWithSearch.tsx'

```

### With checkboxes

```ts file='./TreeViewWithCheckboxes.tsx'

```

### With icons

```ts file='./TreeViewWithIcons.tsx'

```

### With badges

```ts file='./TreeViewWithBadges.tsx'

```

### With custom badges

```ts file='./TreeViewWithCustomBadges.tsx'

```

### With action items

```ts file='./TreeViewWithActionItems.tsx'

```

### Guides

```ts file='./TreeViewGuides.tsx'

```

### Compact

```ts file='./TreeViewCompact.tsx'

```

### Compact, no background

```ts file='./TreeViewCompactNoBackground.tsx'

```

### With memoization

Turning on memoization with the `useMemo` property helps prevent unnecessary re-renders for large data sets. With this flag active, `activeItems` must pass in an array of nodes along the selected item's path to update properly.

```ts file='./TreeViewWithMemoization.tsx'

```
