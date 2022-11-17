---
id: Page
section: components
cssPrefix: pf-c-page
propComponents:
  [
    'Page',
    'PageHeader',
    'PageHeaderTools',
    'PageHeaderToolsGroup',
    'PageHeaderToolsItem',
    'PageSidebar',
    'PageSection',
    'PageGroup',
    'PageBreadcrumb',
    'PageNavigation',
    'PageToggleButton',
  ]
---

import BarsIcon from '@patternfly/react-icons/dist/js/icons/bars-icon';
import './page.css';

## Examples

### Basic page components

A page will typically contain the following components: 

- A `<Page>` with a `header` that often contains a masthead, a `<PageSidebar>`, and one or more `<PageSection>` components. 
-[Mastheads](/components/masthead) contain the `<PageToggleButton>`, a `<MastheadMain>` that contains a `<MastheadBrand>`, and the page's header toolbar within `<MastheadContent>`. 

### Vertical navigation

To add vertical side navigation to a `<Page>`, pass a `<PageSidebar>` component into the `sidebar` property. To render navigation in the `<PageSidebar>`, use the `nav` property. 

The `isNavOpen` property helps facilitate the opening and closing of the sidebar and should be 'true' when the navigation sidebar is visible. 

```ts file="./PageVerticalNav.tsx"
```

### Legacy vertical navigation

This example shows the legacy implementation of a page's vertical navigation. Our updated recommendation advises you to use a masthead and toolbar to make headers, rather than `<PageHeader>` and `<PageHeaderTools>` as shown in the following example.

```ts file="./PageVerticalNavUsingPageHeaderComponent.tsx"
```

### Horizontal navigation

To add horizontal top navigation to a `<Page>`, each navigation item should be set as a `<ToolbarItem>` in the `<Toolbar>` that is passed to the `<Masthead>`.

```ts file="./PageHorizontalNav.tsx"
```

### Tertiary navigation

To add a tertiary navigation component to a page, use the `tertiaryNav` property. The following example passes a string of ‘Navigation’ to `tertiaryNav`, but you can pass fully built-out components, such as navigation.

In this example, `<Masthead>` sets the `display` property equal to `"{{ default: 'stack' }}"` to stack the masthead items and also passes in `"inset={{ default: 'insetXs' }}"` to adjust the inset padding.

```ts file="./PageTertiaryNav.tsx"
```

### Uncontrolled nav

When the `isManagedSidebar` property is true, it manages the sidebar open/close state, removing the need to pass both `isNavOpen` into the `<PageSidebar>` and `onNavToggle` into the `<PageHeader>`.

```ts file="./PageUncontrolledNav.tsx"
```

### Filled page sections

To make a `<PageSection>` fill the available vertical space of the page, set the `isFilled` property equal to true.

By default, the last page section sets `isFilled` equal to true.

```ts file="./PageWithOrWithoutFill.tsx"
```

### Main section padding

To adjust the padding of a `<PageSection>`, you can pass in different values to the `padding` property. These value should be aligned to various breakpoints, including 'default', 'sm', 'md', 'lg', 'xl', '2xl'. 

To remove padding, pass 'noPadding' into `padding`. For example, the second section in this example passes in `padding={{ default: 'noPadding' }}`. Since no specific breakpoints are mentioned, every breakpoint will have 'noPadding'.

To add padding on specific breakpoints, specify the value for those breakpoints. For example, the third section in this example passes in `padding={{ default: 'noPadding', md: 'padding', lg: 'padding' }}`. On 'md' and 'lg' breakpoints, the default value will be overwritten, and padding will be added.

To remove padding at specific breakpoints, pass in 'noPadding' at those breakpoints. For example, the fourth section in this example passes in `padding={{ md: 'noPadding' }}`, which means that 'md' is the only breakpoint that will remove padding.

```ts file="./PageMainSectionPadding.tsx"
```

### Group section

To group page content sections, add one or more `<PageGroup>` components to a `<Page>`. 

The following example adds a group containing both the `<PageNavigation>` and a section of content.

```ts file="./PageGroupSection.tsx"
```

### Centered section

When a width-limited page section is wider than the value of --pf-c-page--section--m-limit-width--MaxWidth, the section will be centered in the main section.

The content in this example is placed in a card to better illustrate how the section behaves when it is centered. A card is not required to center a page section.

```ts file="./PageCenteredSection.tsx"
```