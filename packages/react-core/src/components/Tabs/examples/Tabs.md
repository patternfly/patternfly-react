---
id: Tabs
section: components
cssPrefix: pf-v6-c-tabs
propComponents: ['Tabs', 'Tab', 'TabContent', 'TabTitleText', 'TabTitleIcon', 'horizontalOverflowObject', 'TabAction']
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

## Examples

### Default tabs

A `<Tabs>` component contains multiple `<Tab>` components that may be used to navigate between sets of content within a page.

You can adjust a tab in the following ways: 

- To label a tab with text, pass a `<TabTitleText>` component into the `title` property of a `<Tab>`.
- To disable a tab, use the `isDisabled` property. Tabs using `isDisabled` are not perceivable or operable by users navigating via assistive technologies. 
- To disable a tab, but keep it perceivable to assistive technology users, use the `isAriaDisabled` property. If a disabled tab has a tooltip, use this property instead of `isDisabled`.
- To add a tooltip to an aria-disabled tab, use the `tooltip` property. 

Tabs can be styled as 'default' or 'boxed': 

- Default tabs do not have any borders and use a bottom line to distinguish between a selected tab, a hovered tab, and an inactive tab. 
- Boxed tabs are outlined to emphasize the area that a tab spans. To preview boxed tabs in the following examples, select the 'isBox' checkbox, which sets the `isBox` property to true.

```ts file="./TabsDefault.tsx"
```

### Boxed secondary tabs

To change the background color of boxed tabs or the tab content, use the `variant` property. 

Toggle the tab color by selecting the 'Tabs secondary variant' checkbox in the following example.

```ts file="./TabsBoxSecondary.tsx"
```

### Vertical tabs

Vertical tabs are placed on the left-hand side of a page or container and may appear in both 'default' and 'boxed' tab variations.

To style tabs vertically, use the `isVertical` property. 

```ts file="./TabsVertical.tsx"
```

### Vertical expandable tabs

Vertical tabs can be made expandable to save space. Users can select the caret to expand a menu and switch between tabs. 

Expandable tabs can be enabled at different breakpoints. The following example passes `expandable={{ default: 'expandable', md: 'nonExpandable', lg: 'expandable' }}` into the `<Tabs>` component.

To flag vertical tabs when they're expanded, use the `isExpanded` property.

```ts file="./TabsVerticalExpandable.tsx"
```

### Vertical expandable uncontrolled

To flag the default expanded state for uncontrolled tabs, use the `defaultIsExpanded` property.

```ts file="./TabsVerticalExpandableUncontrolled.tsx"
```

### Default overflow tabs

By default, overflow is applied when there are too many tabs for the width of the container they are in. This overflow can be navigated by side-scrolling within the tabs section, or by selecting the left and right arrows. 

```ts file="./TabsDefaultOverflow.tsx"
```

### Horizontal overflow tabs

Horizontal overflow can be used instead of the default application. To navigate horizontal overflow tabs users can select the last tab, labeled “more”, to see the overflowed content. 

To enable horizontal overflow, use the `isOverflowHorizontal` property.

In the following example, select the 'Show overflowing tab count' checkbox to add a count of overflow items to the final “more” tab.

```ts file="./TabsHorizontalOverflow.tsx"
```

### With tooltip react ref

When using a React ref to link a tooltip to a tab component via the `reference` property, you should avoid manually passing in a value of "off" to the `aria-live` property. Doing so may cause the tooltip to become less accessible to assistive technologies.

The tooltip should also have the `id` property passed in. The value of `id` should be passed into the tab's `aria-describedby` property. This ensures a tooltip used with a React ref will be announced by the JAWS and NVDA screen readers.

```ts file="./TabsTooltipReactRef.tsx"
```

### Uncontrolled tabs

To allow the `<Tabs>` component to manage setting the active tab and displaying correct content itself, use uncontrolled tabs, as shown in the following example. 


```ts file="./TabsUncontrolled.tsx"
```

### With adjusted inset

To adjust the inset of tabs and visually separate them more, use the `inset` property. You can set the inset to "insetNone", "insetSm", "insetMd", "insetLg", "insetXl", or "inset2xl" at "default", "sm", "md", "lg, "xl, and "2xl" breakpoints.

```ts file="./TabsInset.tsx"
```

### With page insets

To adjust the left padding of tabs, use the `usePageInsets` property. This property aligns the tabs padding with the default padding of the page section, which makes it easier to align tabs with page section content.

```ts file="./TabsPageInsets.tsx"
```

### With icons and text

You can render different content in the `title` property of a tab to add icons and text. 

To add an icon to a tab, pass a `<TabTitleIcon>` component that contains the icon of your choice into the `title`. To use an icon alongside styled text, keep the text in the `<TabTitleText>` component.

```ts file="./TabsIconAndText.tsx"
```

### Subtabs

Use subtabs within other components, like modals. Subtabs have less visually prominent styling. 

To apply subtab styling to tabs, use the `isSubtab` property. 

```ts file="./TabsSubtabs.tsx"
```

### Filled tabs with icons

To allow tabs to fill the available width of the page section, use the `isFilled` property. 

```ts file="./TabsFilledWithIcons.tsx"
```

### Tabs linked to nav elements

To let tabs link to nav elements, pass `{TabsComponent.nav}` into the `component` property. 

Nav tabs should use the `href` property to link the tab to the URL of another page or page section. A tab with an `href` will render as an `<a>` instead of a `<button>`. 

```ts file="./TabsNav.tsx"
```

### Subtabs linked to nav elements

Subtabs can also link to nav elements. 

```ts file="./TabsNavSubtab.tsx"
```

### With separate content

If a `<TabContent>` component is defined outside of a `<Tabs>` component, use the `tabContentRef` and `tabContentId` properties 

```ts file="./TabsSeparateContent.tsx"
```

### With tab content with body and padding

To add a content body to a `<TabContent>` component, pass a `<TabContentBody>`. To add padding to the body section, use the `hasPadding` property. 

```ts file="./TabsContentWithBodyPadding.tsx"
```

### Children mounting on click

To mount tab children (add to the DOM) when a tab is clicked, use the `mountOnEnter` property. 

Note that this property does not create the tab children until the tab is clicked, so they are not preloaded into the DOM.

```ts file="./TabsChildrenMounting.tsx"
```

### Unmounting invisible children

To unmount tab children (remove from the DOM) when they are no longer visible, use the `unmountOnExit` property.

```ts file="./TabsUnmountingInvisibleChildren.tsx"
```

### Toggled tab content

You may control tabs from outside of the tabs component. For example, select the "Hide tab 2" button below to make "Tab item  2" invisible.

The tab its content should only be mounted when the tab is visible. 

```ts file="./TabsToggledSeparateContent.tsx"
```

### Dynamic tabs

To enable closeable tabs, pass the `onClose` property to the `<Tabs>` component. To enable a button that adds new tabs, pass the `onAdd` property to `<Tabs>`. 

```ts file="./TabsDynamic.tsx"
```

### With help action popover

You may add a help action to a tab to provide users with additional context in a popover. 

To render an action beside the tab content, use the `actions` property of a `<Tab>`. Pass a popover and a `<TabsAction>` component into the `actions` property. 

```ts file="./TabsHelp.tsx"
```

### With help and close actions

To add multiple actions to a tab, create a `<TabAction>` component for each action. 

The following example passes in both help popover and close actions.

```ts file="./TabsHelpAndClose.tsx"
```
