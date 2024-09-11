---
id: Toggle group
section: components
cssPrefix: pf-v6-c-toggle-group
propComponents: ['ToggleGroup', 'ToggleGroupItem']
---
import './toggleGroup.css';

import { ToggleGroup, ToggleGroupItem, Button, Stack, StackItem } from '@patternfly/react-core';
import UndoIcon from '@patternfly/react-icons/dist/esm/icons/undo-icon';
import CopyIcon from '@patternfly/react-icons/dist/esm/icons/copy-icon';
import ShareSquareIcon from '@patternfly/react-icons/dist/esm/icons/share-square-icon';

## Examples

### Single select toggle group

A single select toggle group allows users to toggle between multiple items.

To indicate whether a `<ToggleGroupItem>` is selected or not, use the `isSelected` property.

```ts file="./ToggleGroupDefaultSingle.tsx"
```

### Multi select toggle group

A multi select toggle group allows users to select multiple items at once.

When a toggle item is disabled it cannot be selected. Click the "Disable all" button in the following example to see this in action.

```ts file="./ToggleGroupDefaultMultiple.tsx"
```

### With icons

You can use a recognizable icon as a toggle item label.

To do this, pass an imported icon to the `icon` property of a `<ToggleGroupItem>`.

```ts file="./ToggleGroupIcon.tsx"
```

### With text and icons

Adding text to a toggle item with an icon helps clarify the button's function.

To do this, pass a descriptive label to the `text` property of a `<ToggleGroupItem>`.

When passing both `text` and `icon` properties to a `<ToggleGroupItem>`, you can also pass in `iconPosition` to determine whether the icon is rendered at the start or end of the item.

```ts file="./ToggleGroupTextIcon.tsx"
```

### Compact toggle group

When space in a UI is limited, you can use a compact toggle group. 

To apply compact styling to a `<ToggleGroup>`, use `isCompact`.

```ts file="./ToggleGroupCompact.tsx"
```
