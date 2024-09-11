---
id: Drawer
cssPrefix: pf-v6-c-drawer
propComponents:
  [
    Drawer,
    DrawerSection,
    DrawerContent,
    DrawerContentBody,
    DrawerPanelContent,
    DrawerHead,
    DrawerActions,
    DrawerCloseButton,
    DrawerPanelDescription,
    DrawerPanelBody,
    DrawerPanelFocusTrapObject
  ]
section: components
---

import accessibility from '@patternfly/react-styles/css/utilities/Accessibility/accessibility';

## Examples

### Basic

```ts file="./DrawerBasic.tsx"

```

### Panel at end

```ts file="./DrawerPanelEnd.tsx"

```

### Panel at start

```ts file="./DrawerPanelStart.tsx"

```

### Panel on bottom

```ts file="./DrawerPanelBottom.tsx"

```

### Basic inline

```ts file="./DrawerBasicInline.tsx"

```

### Inline panel at end

```ts file="./DrawerInlinePanelEnd.tsx"

```

### Inline panel at start

```ts file="./DrawerInlinePanelStart.tsx"

```

### Stacked content body elements

```ts file="./DrawerStackedContentBodyElements.tsx"

```

### Modified content padding

```ts file="DrawerModifiedContentPadding.tsx"

```

### Modified panel padding

```ts file="DrawerModifiedPanelPadding.tsx"

```

### Additional section above drawer content

```ts file="DrawerAdditionalSectionAboveContent.tsx"

```

### Static drawer

**Note:** For mobile viewports, all drawer variants behave the same way. At the `md` breakpoint, or where `.pf-m-static{-on-[lg, xl, 2xl]}` is applied, the `static drawer` variant’s `close button` is automatically hidden because the drawer panel doesn’t close by design.

```ts file="DrawerStatic.tsx"

```

### Breakpoint

```ts file="DrawerBreakpoint.tsx"

```

### Resizable at end

```ts file="DrawerResizableAtEnd.tsx"

```

### Resizable at start

```ts file="DrawerResizableAtStart.tsx"

```

### Resizable on bottom

```ts file="DrawerResizableOnBottom.tsx"

```

### Resizable on inline

```ts file="DrawerResizableOnInline.tsx"

```

### Panel with secondary background

```ts file="DrawerSecondaryBackground.tsx"

```

### With focus trap

When a [focus trap](/accessibility/product-development-guide#trapping-focus) is enabled on an element, a user will only be able to interact with the contents of that element until the focus trap is closed or deactivated.

To enable and customize a focus trap on a drawer panel, apply the `focusTrap` property to the `<DrawerPanelContent>` component. Enabling a focus trap with `focusTrap.enabled` will also automatically place focus on the first focusable element when the drawer panel expands, and return focus to the previously focused element when it collapses.

To customize which element receives focus when the drawer panel expands, use the `focusTrap.elementToFocusOnExpand` property.

```ts file="./DrawerFocusTrap.tsx"

```
