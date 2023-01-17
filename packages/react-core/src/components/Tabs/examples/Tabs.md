---
id: Tabs
section: components
cssPrefix: pf-c-tabs
propComponents: ['Tabs', 'Tab', TabAction, 'TabContent', 'TabTitleText', 'TabTitleIcon', 'horizontalOverflowObject']
ouia: true
---

import UsersIcon from '@patternfly/react-icons/dist/esm/icons/users-icon';
import BoxIcon from '@patternfly/react-icons/dist/esm/icons/box-icon';
import DatabaseIcon from '@patternfly/react-icons/dist/esm/icons/database-icon';
import ServerIcon from '@patternfly/react-icons/dist/esm/icons/server-icon';
import LaptopIcon from '@patternfly/react-icons/dist/esm/icons/laptop-icon';
import ProjectDiagramIcon from '@patternfly/react-icons/dist/esm/icons/project-diagram-icon';
import HelpIcon from '@patternfly/react-icons/dist/esm/icons/help-icon';
import TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';

Most tab variations are available as open (default) or box style tabs. Select the 'isBox' checkbox to preview an example with box styled tabs.
The Tabs items background can be also toggled with 'Tab light variation' checkbox.
Similarly the 'Tab content light variation' checkbox affects the TabContent background.

## Examples

### Default

When passing in a Tooltip component to the Tab component, the Tooltip can also be passed in directly to the `tooltip` prop.

```ts file="./TabsDefault.tsx"
```

### With tooltip react ref

When using a React ref to link a Tooltip to a Tab component via the `reference` prop, you should avoid manually passing in a value of "off" to the `aria-live` prop. Doing so may lead to the tooltip becoming less accessible to assistive technologies.

The tooltip should also have the `id` prop passed in. The value given to this prop should then be passed into the tab's `aria-describedby` prop. This ensures a tooltip used with a React ref will be announced by the JAWS and NVDA screen readers.

```ts file="./TabsTooltipReactRef.tsx"
```

### Uncontrolled

```ts file="./TabsUncontrolled.tsx"
```

### Box light variation

```ts file="./TabsBoxLight.tsx"
```

### Default overflow

```ts file="./TabsDefaultOverflow.tsx"
```

### Horizontal overflow

```ts file="./TabsHorizontalOverflow.tsx" isBeta
```

### Vertical

```ts file="./TabsVertical.tsx"
```

### Vertical expandable

```ts file="./TabsVerticalExpandable.tsx"
```

### Vertical expandable uncontrolled

```ts file="./TabsVerticalExpandableUncontrolled.tsx"
```

### Inset

```ts file="./TabsInset.tsx"
```

### Page Insets

```ts file="./TabsPageInsets.tsx"
```

### Icons and text

```ts file="./TabsIconAndText.tsx"
```

### Tabs with sub tabs

```ts file="./TabsSubtabs.tsx"
```

### Filled

```ts file="TabsFilled.tsx"
```

### Filled with icons

```ts file="./TabsFilledWithIcons.tsx"
```

### Using the nav element

```ts file="./TabsNav.tsx"
```

### Sub nav using the nav element

```ts file="./TabsNavSecondary.tsx"
```

### Separate content

```ts file="./TabsSeparateContent.tsx"
```

### Tab content with body and padding

```ts file="./TabsContentWithBodyPadding.tsx"
```

### Children mounting on click

```ts file="./TabsChildrenMounting.tsx"
```

### Unmounting invisible children

```ts file="./TabsUnmountingInvisibleChildren.tsx"
```

### Toggled separate content

```ts file="./TabsToggledSeparateContent.tsx"
```

### Dynamic

To enable closeable tabs, pass the `onClose` property to `Tabs`, and to enable the add button, pass the `onAdd` property to `Tabs`. Aria labels may be controlled manually by passing `closeButtonAriaLabel` to `Tab` and `addButtonAriaLabel` to `Tabs`.

```ts file="./TabsDynamic.tsx" 
```

### Help action

```ts file="./TabsHelp.tsx"
```

### Help and close actions

```ts file="./TabsHelpAndClose.tsx"
```
