---
id: Navigation
section: components
cssPrefix: pf-c-nav
propComponents: ['Nav', 'NavList', 'NavGroup', 'NavItem', 'NavItemSeparator', 'NavExpandable']
ouia: true
---

import './nav.css';

## Examples

### Default

```ts file="./NavDefault.tsx"
```

### Grouped

The following example shows two navigation groups, each with a `title` prop passed into the nav group component. To keep nav groups accessible an `aria-label` must be passed in if the `title` prop is not passed in.

```ts file="./NavGrouped.tsx"
```

### Expandable

```ts file="./NavExpandable.tsx"
```

### Expandable third level

```ts file="./NavExpandableThirdLevel.tsx"
```

### Mixed

```ts file="./NavMixed.tsx"
```

### Horizontal (only in PageHeader)

```ts file="./NavHorizontalPageHeader.tsx"
```

### Horizontal subnav

```ts file="./NavHorizontalSubNav.tsx"
```

### Legacy tertiary

```ts file="./NavLegacyTertiary.tsx"
```

### Flyout

A flyout should be a `Menu` component. Press `space` or `right arrow` to open a flyout using the keyboard, use the arrow keys to navigate between flyout items, and press `escape` or `left arrow` to close a flyout.

```ts file="./NavFlyout.tsx" isBeta
```

### Drilldown

```ts isBeta file="./NavDrilldown.tsx"
```
