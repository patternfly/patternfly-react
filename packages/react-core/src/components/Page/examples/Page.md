---
id: Page
section: components
cssPrefix: pf-v5-c-page
propComponents:
  [
    'Page',
    'PageSidebar',
    'PageSidebarBody',
    'PageSection',
    'PageGroup',
    'PageBreadcrumb',
    'PageNavigation',
    'PageToggleButton'
  ]
---

import BarsIcon from '@patternfly/react-icons/dist/js/icons/bars-icon';
import './page.css';

## Examples

### Basic page components

A page will typically contain the following components:

- A `<Page>` with a `header` that often contains a [masthead](/components/masthead)
  - Mastheads contain the `<PageToggleButton>`, a `<MastheadMain>` that contains a `<MastheadBrand>`, and the page's header toolbar within `<MastheadContent>`.
- 1 or more `<PageSidebarBody>` components inside `<PageSidebar>` for vertical navigation or other sidebar content
- 1 or more `<PageSection>` components

### Vertical navigation

To add a vertical sidebar to a `<Page>`, pass a `<PageSidebar>` component into the `sidebar` property. To render navigation in the sidebar, pass a `<PageSidebarBody>` component to `<PageSidebar>`.

The `isSidebarOpen` property helps facilitate the opening and closing of the sidebar and should be 'true' when the sidebar is visible.

```ts file="./PageVerticalNav.tsx"

```

### Multiple sidebar body

You can have multiple `<PageSidebarBody>` components inside the `<PageSidebar>` for more customization. You can modify the `<PageSidebarBody>` further by passing the following properties:

- `usePageInsets` will modify the component's insets to match page insets
- `isFilled={true}` will cause the component to grow to fill the available vertical space
- `isFilled={false}` will cause the component to **not** grow to fill the available vertical space

By default, the last `<PageSidebarBody>` will grow to fill the available vertical space. This can be changed by passing `isFilled={false}` as demonstrated in the following example.

```ts file="./PageMultipleSidebarBody.tsx"

```

### Horizontal navigation

To add horizontal navigation to the top of a `<Page>`, add the navigation inside of a `<ToolbarItem>` in the `<Toolbar>` that is passed to the `<MastheadContent>` of the `<Masthead>`.

```ts file="./PageHorizontalNav.tsx"

```

### Tertiary navigation (deprecated)

[Horizontal sub-navigation](/components/navigation#horizontal-subnav) is now recommended instead of tertiary-level navigation.

Tertiary navigation allows you to add an additional navigation menu alongside vertical or horizontal navigation. To create tertiary navigation, use the `tertiaryNav` property. The following example passes `tertiaryNav="Navigation"` into a `<Page>` component.

```ts file="./PageTertiaryNav.tsx" isDeprecated

```

### Uncontrolled navigation

When the `isManagedSidebar` property is true, it manages the sidebar open/close state, removing the need to pass both `isSidebarOpen` into the `<PageSidebar>` and `onSidebarToggle` into the `<PageToggleButton>`.

```ts file="./PageUncontrolledNav.tsx"

```

### Filled page sections

By default, the last page section is "filled", meaning it fills the available vertical space of a page.

To change the default behavior, use the `isFilled` property. To make other page sections "filled", set `isFilled` equal to "true". To disable the last page section from being "filled", set `isFilled` equal to "false".

```ts file="./PageWithOrWithoutFill.tsx"

```

### Main section padding

To adjust the padding of a `<PageSection>`, you can pass in different values to the `padding` property. These values should be aligned to a specific breakpoint: 'default', 'sm', 'md', 'lg', 'xl', and '2xl'. Each breakpoint passed into the property should be given a value of either ‘padding’ or ‘noPadding’.

As the page's viewport width increases, breakpoints inherit the padding behavior of the previous breakpoint. For example, padding that is set on 'lg' also applies to 'xl' and '2xl'.

To remove padding entirely, pass 'noPadding' to the `default` breakpoint. For example, the second section in this example passes in `padding={{ default: 'noPadding' }}`. Since no specific breakpoints are mentioned, every breakpoint will have 'noPadding'.

To add padding at specific breakpoints, pass in "padding" at those breakpoints. For example, the third section in this example passes in `padding={{ default: 'noPadding', md: 'padding' }}`. At 'md', 'lg', 'xl', and '2xl' breakpoints, the default value will be overwritten, and padding will be added.

To remove padding at specific breakpoints, pass in 'noPadding' at those breakpoints. For example, the fourth section in this example passes in `padding={{ md: 'noPadding' }}`, which means that 'md', 'lg' 'xl', and '2xl' breakpoints will have `noPadding`.

```ts file="./PageMainSectionPadding.tsx"

```

### Group section

To group page content sections, add 1 or more `<PageGroup>` components to a `<Page>`.

The following example adds a group containing `<PageNavigation>`, `<PageBreadcrumb>`, and `<PageSection>` components.

To add additional components and information to a group, you may use the following properties:

- To indicate that a breadcrumb should be in a group, use `isBreadcrumbGrouped`.
- To indicate that tertiary navigation should be in a group, use `isTertiaryNavGrouped`.
- To specify additional group content, use `additionalGroupedContent`.

```ts file="./PageGroupSection.tsx"

```

### Centered section

By default, a page section spans the width of the page. To reduce the width of a section, use the `isWidthLimited` property. To center align width-limited page sections, use the `isCenterAligned` property. When the main content area of a page is wider than the value of a centered, width-limited page section's `--pf-v5-c-page--section--m-limit-width--MaxWidth` custom property, the section will automatically be centered.

The content in this example is placed in a card to better illustrate how the section behaves when it is centered, but a card is not required to center a page section.

```ts file="./PageCenteredSection.tsx"

```
