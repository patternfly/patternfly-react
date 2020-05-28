---
title: Upgrade guide
section: overview
---

Hey Fliers, we've been busy for the past 12 weeks keeping up with changes to PatternFly's HTML and CSS. We've replaced `babel` with `tsc` as our compiler of choice, removed [prop-types](https://www.npmjs.com/package/prop-types) in favor of using our `.d.ts` types which are supported in most editors. This upgrade guide details **what** was broken and **how** to fix it. We've included links to the pull requests in case you want to follow a trail of **why** a change was made.

## Global
- We no longer support UMD builds for individual packages. Consider using our [react-core.umd.js bundle](https://unpkg.com/@patternfly/react-core@3/dist/umd/react-core.umd.js) instead. [(#4076)](https://github.com/patternfly/patternfly-react/pull/4076)
- We no longer define `propTypes` for our components. Consider using our Typescript types under each packages' `dist/js` folder instead. [(#4076)](https://github.com/patternfly/patternfly-react/pull/4076)
- We have updated our React peer dependencies so that our packages now can possibly use hooks, which requires `react@^16.8.0` instead of `react@^16.4.0`. We recommend upgrading your version of React if it is below 16.8.0.

## React core
- Major changes include removing the `Toolbar` layout in favor of a new `PageHeaderTools` component. `DataToolbar` has been renamed `Toolbar`. `Expandable` has been renamed `ExpandableSection`.

### About modal
- **AboutModalContainer**:
  - Removed prop `ariaLabelledbyId` in favor of `aboutModalBoxHeaderId`
  - Removed prop `ariaDescribedById` in favor of `aboutModalBoxContentId`

### Accordion
- Removed prop `noBoxShadow`. If a shadow is needed, the accordion can be placed in a card, or a shadow can be applied either using CSS or a box-shadow utility class. [(#4022)](https://github.com/patternfly/patternfly-react/pull/4022)

### Alert
- Changed default variant to `default`. To maintain current default behavior, set the `variant` property to `info`.[(#3903)](https://github.com/patternfly/patternfly-react/pull/3903). 
- If you were previously using the `action` prop for the close button, use the `actionClose` prop instead [(#4190)](https://github.com/patternfly/patternfly-react/pull/4190) 
- If you were previously using the `action` prop for a link button, use the `actionLinks` prop instead [(#4190)](https://github.com/patternfly/patternfly-react/pull/4190)

### Application launcher
- Removed deprecated prop `dropdownItems`.  the prop `items` should be used instead [(#3929)](https://github.com/patternfly/patternfly-react/pull/3929)

### Background image
- Replaced `[BackgroundImageSrc.{sm,xs2x,sm,sm2x,lg}]` with strings `'sm' | 'xs2x' | 'sm' | 'sm2x' | 'lg'` [(#3886)](https://github.com/patternfly/patternfly-react/pull/3886)
- Removed always ignored `[BackgroundImageSrc.filter]` for new `filter` prop of type `ReactNode` [(#3886)](https://github.com/patternfly/patternfly-react/pull/3886)

### Button
- Removed props `isHover` and `isFocus` props, all instances of them should be removed from your application. [(#4116)](https://github.com/patternfly/patternfly-react/pull/4116)

### Card
- **CardHeader:**
  - Renamed to CardTitle [(#4170)](https://github.com/patternfly/patternfly-react/pull/4170)
- **CardHeadMain:**
  - Renamed to CardHeaderMain [(#4170)](https://github.com/patternfly/patternfly-react/pull/4170)
- **CardHead**:
  - Renamed to CardHeader [(#4170)](https://github.com/patternfly/patternfly-react/pull/4170)


### Chip group
- **Chip:**
  - The overflow chip no longer contains a button. To specify a overflow chip as a button do use `<Chip component='button' isOverflowChip>Chip</Chip>` [(#4246)](https://github.com/patternfly/patternfly-react/pull/4246)
- **ChipGroup** :
  - Removed prop `withToolbar`. Use the `categoryName` prop instead to add a chip group with a category. [(#4246)](https://github.com/patternfly/patternfly-react/pull/4246)
  - Removed prop `headingLevel`. The category name has internally been switched to a `<span>`. [(#4246)](https://github.com/patternfly/patternfly-react/pull/4246)
- **ChipGroupToolbarItem**: This component has been removed. Use `<ChipGroup categoryName="name">` instead.  All props that were on the `<ChipGroupToolbarItem>` have been added to `<ChipGroup>`. To use the new API, props to `<ChipGroup>` from `<ChipGroupToolbarItem>`. [(#4246)](https://github.com/patternfly/patternfly-react/pull/4246)


### Context selector
- **ContextSelectorItem:** 
  - Removed prop `isHover`. All instances of it should be removed from your application. [(#4116)](https://github.com/patternfly/patternfly-react/pull/4116)
- **ContextSelectorToggle:** 
  - Removed props `isHovered` and `isFocused`. All instances of them should be removed from your application. [(#4116)](https://github.com/patternfly/patternfly-react/pull/4116)

### Data list
- Renamed `noPadding` to `hasNoPadding`. [(#4133)](https://github.com/patternfly/patternfly-react/pull/4133)

### Divider
- Removed promoted component from experimental index file. Change import path from  `import { Divider } from '@patternfly/react-core/dist/esm/experimental';` to `'import { Divider } from '@patternfly/react-core/dist/esm/components';` [(#4029)](https://github.com/patternfly/patternfly-react/pull/4029). 


### Drawer
- Renamed `noPadding` to `hasNoPadding`. [(#4133)](https://github.com/patternfly/patternfly-react/pull/4133)
- Removed import path `'@patternfly/react-core/dist/js/experimental'`. The import path `'@patternfly/react-core'` should be used instead. [(#4176)](https://github.com/patternfly/patternfly-react/pull/4176)

### Dropdown
- **Dropdown:**
  - Removed props `isHover` and `isFocus` from Toggle, KebabToggle, and DropdownToggle. All instances of them should be removed from your application. [(#4116)](https://github.com/patternfly/patternfly-react/pull/4116)
  - Removed prop `variant`. If you were using `variant="icon"` before, use the new prop `icon` instead. [(#4147)](https://github.com/patternfly/patternfly-react/pull/4147)
**DropdownToggle**:
  - Removed prop `ariaHasPopup` in favor of `aria-haspopup`
  - Renamed `iconComponent` to `toggleIndicator` [(#4038)](https://github.com/patternfly/patternfly-react/pull/4038)
**DropdownItemIcon**:
  - This component has been removed in favor of `<DropdownItem icon={<Icon />} />` [(#4147)](https://github.com/patternfly/patternfly-react/pull/4147)

### Empty state
- **EmptyState**
  - Changed the default width to `full` instead of `large`.  To maintain the previous default behaviour, set the `variant` prop to large. e.g `<EmptyState variant={EmptyStateVariant.large}> ...</EmptyState>` [(#3933)](https://github.com/patternfly/patternfly-react/pull/3933) 
  - Variant `small` has been updated to `sm` [(#3933)](https://github.com/patternfly/patternfly-react/pull/3933)
  - Variant `large` has been updated to `lg` [(#3933)](https://github.com/patternfly/patternfly-react/pull/3933)
- **EmptyStateIcon:**
  - Removed deprecated `size` and `title` from  IconProps.

### Expandable section (formerly Expandable)
- Renamed component to `ExpandableSection`, all instances in your application should be renamed. [(#4116)](https://github.com/patternfly/patternfly-react/pull/4116)
- Removed props `isFocus` and `isHovered` from ExpandableSection, all instances of them should be removed from your application. [(#4116)](https://github.com/patternfly/patternfly-react/pull/4116)

### Form select
- Removed `isValid` prop, `validated` prop should be used instead. To set a the input to invalid, set `validated` prop to `error` or the  enum value `ValidatedOptions.error`. [(#3975)](https://github.com/patternfly/patternfly-react/pull/3975)

### Gallery
- Removed prop `gutter` in favor of `hasGutter` [(#4014)](https://github.com/patternfly/patternfly-react/pull/4014)

### Grid
- Removed prop `gutter` in favor of `hasGutter` [(#4014)](https://github.com/patternfly/patternfly-react/pull/4014)

### Label
- Removed prop `isCompact` from Label, all instances of it should be removed from your application. [(#4116)](https://github.com/patternfly/patternfly-react/pull/4116)
- Default color changed to grey. Design also adjusted. [(#4165)](https://github.com/patternfly/patternfly-react/pull/4165)

### Level
- Removed prop `gutter` in favor of `hasGutter` [(#4014)](https://github.com/patternfly/patternfly-react/pull/4014)

### Login page
- **LoginForm:**
  - Removed prop `rememberMeAriaLabel` [(#3924)](https://github.com/patternfly/patternfly-react/pull/3924)

### Modal
- **Modal**
  - Collapsed the `isLarge` and `isSmall` properties into a single `variant` property. To maintain the current behavior, set the `variant` property to `large` or `small`, or use the newly added `ModalVariant` enum as `ModalVariant.large` or `ModalVariant.small`. [(#3920)](https://github.com/patternfly/patternfly-react/pull/3920)
  - Removed prop `ariaDescribedById` in favor of `modalContentAriaDescribedById` [(#3924)](https://github.com/patternfly/patternfly-react/pull/3924)
  - Removed prop `isFooterLeftAligned `. This prop is now always enabled and cannot be opted-out of. [(#4017)](https://github.com/patternfly/patternfly-react/pull/4017)
  - Removed prop `hideTitle`. To hide the Modal header, do not pass a title prop, a description prop, or a header prop. If there is no title or header passed, please provide an `aria-label` prop to the Modal component to make it accessible. [(#4140)](https://github.com/patternfly/patternfly-react/pull/4140)
- **ModalContent:**
  - Removed prop `ariaDescribedById` in favor of `modalBoxAriaDescribedById`
- **ModalFooter:**
  - Removed prop `isLeftAligned` [(#4017)](https://github.com/patternfly/patternfly-react/pull/4017)

### Nav
- **Nav:** 
  - Changed default theme to dark. Use `theme="light"` if you wish to use the light variant. [(#4116)](https://github.com/patternfly/patternfly-react/pull/4116)
- **NavList:** 
  - Removed prop `variant`. Pass `variant="horizontal"` or `variant="tertiary"` to `Nav` instead. [(#4225)](https://github.com/patternfly/patternfly-react/pull/4225)

### Options menu
- **OptionsMenu:**
  - Removed prop `ariaLabelMenu`.
- **OptionsMenuItemGroup:**
  - Removed prop `ariaLabel` in favor of `aria-label`
- **OptionsMenuToggleWithText**:
  - Removed prop `ariaHasPopup` in favor of `aria-haspopup`
  - Removed props `isFocused` and `isHovered`, all instances of them should be removed from your application. [(#4116)](https://github.com/patternfly/patternfly-react/pull/4116)
- **OptionsMenuToggle:** 
  - Removed props `isFocused` and `isHovered`, all instances of them should be removed from your application. [(#4116)](https://github.com/patternfly/patternfly-react/pull/4116)

### Page
- **Page:**
  - Made mainContainerId a required property for skip to content component [(#3904)](https://github.com/patternfly/patternfly-react/pull/3904)
  - Changed default theme to dark. Use `theme="light"` if you wish to use the light variant. [(#4116)](https://github.com/patternfly/patternfly-react/pull/4116)
  - Renamed `noPadding` to `hasNoPadding`. [(#4133)](https://github.com/patternfly/patternfly-react/pull/4133)
- **PageSection:**
  - Removed prop `noPaddingMobile` from PageSection in favor of `hasNoPaddingOn={PageSectionBreakpoints[]}` [(#4133)](https://github.com/patternfly/patternfly-react/pull/4133)
  - Added `hasPaddingOn` and `hasNoPaddingOn` properties to PageSection, accounting for page size breakpoints. Breakpoints are defined in the `PageSectionBreakpoints` enum. [(#4133)](https://github.com/patternfly/patternfly-react/pull/4133)
- **PageHeader**:
  - Removed prop `avatar`. Add the avatar to the `PageHeaderTools` component instead (which is passed into `PageHeader` via the `headerTools` prop. [(#4223)](https://github.com/patternfly/patternfly-react/pull/4223)
  - Removed prop `toolbar`. Use the `headerTools` prop instead. Also, if you previously used the `Toolbar`, `ToolbarGroup`, or `ToolbarItem` components for the header, replace them with the `PageHeaderTools`, `PageHeaderToolsGroup`, and `PageHeaderToolsItem` components. [(#4223)](https://github.com/patternfly/patternfly-react/pull/4223)

### Pagination
- Removed obsolete 'left' and 'right' variants. These should be replaced with 'top' (default) or 'bottom'. [(#4202)](https://github.com/patternfly/patternfly-react/pull/4202)

### Popover
- **PopoverHeader:** 
  - Title now has a default size of medium instead of extra large [(#4030)](https://github.com/patternfly/patternfly-react/pull/4030)

### Progress
- **Progress:** 
  - Removed deprecated `ProgressVariant.info` that adds no styling. Do not pass this prop or pass `null` instead. [(#3886)](https://github.com/patternfly/patternfly-react/pull/3886)
- **ProgressBar:**
  - Removed prop `ariaProps` in favor of `progressBarAriaProps` [(#3924)](https://github.com/patternfly/patternfly-react/pull/3924)
- **ProgressContainer:**
  - Removed prop `ariaProps` in favor of `progressBarAriaProps` [(#3924)](https://github.com/patternfly/patternfly-react/pull/3924)

### Select
- **Select**:
  - Removed prop `ariaLabelledBy` in favor of `aria-labelledby` [(#3924)](https://github.com/patternfly/patternfly-react/pull/3924)
  - Removed prop `ariaLabelTypeAhead` in favor of `typeAheadAriaLabel` [(#3924)](https://github.com/patternfly/patternfly-react/pull/3924)
  - Removed prop `ariaLabelClear` in favor of `clearSelectionsAriaLabel` [(#3924)](https://github.com/patternfly/patternfly-react/pull/3924)
  - Removed prop `ariaLabelToggle` in favor of `toggleAriaLabel` [(#3924)](https://github.com/patternfly/patternfly-react/pull/3924)
  - Removed prop `ariaLabelRemove` in favor of `RemovedelectionAriaLabel` [(#3924)](https://github.com/patternfly/patternfly-react/pull/3924)
  - Renamed `isExpanded` property to `isOpen` [(#3945)](https://github.com/patternfly/patternfly-react/pull/3945)
  - Removed deprecated `CheckboxSelect` and `CheckboxSelectOption` in favor of `variant="checkbox"`
- **SelectOption:** 
  - Removed prop `isFocus`, all instances of it should be removed from your application. [(#4116)](https://github.com/patternfly/patternfly-react/pull/4116)
- **SelectToggle**
  - Removed prop `ariaLabelledBy` in favor of `aria-labelledby` [(#3924)](https://github.com/patternfly/patternfly-react/pull/3924)
  - Removed prop `ariaLabelToggle` in favor of `aria-label` [(#3924)](https://github.com/patternfly/patternfly-react/pull/3924)
  - Removed props `isFocus` and `isHovered`, all instances of them should be removed from your application. [(#4116)](https://github.com/patternfly/patternfly-react/pull/4116)

### Skip to content
- Removed `component` prop in favor of always using an anchor tag, all instances of it should be removed from your application. [(#4116)](https://github.com/patternfly/patternfly-react/pull/4116)

### Split
- Removed prop `gutter` in favor of `hasGutter` [(#4014)](https://github.com/patternfly/patternfly-react/pull/4014)

### Stack
- Removed prop `gutter` in favor of `hasGutter` [(#4014)](https://github.com/patternfly/patternfly-react/pull/4014)

### Tabs
- **Tab:**
  - The title should be wrapped with `<TabTitleText>` for proper styling.  If you would like to place an Icon in the Tab, it should be wrapped with `<TabTitleIcon>` for proper styling. [(#4146)](https://github.com/patternfly/patternfly-react/pull/4146)
- **Tabs**:
  - Changed prop `variant` for consistency. You will need to update all instances of `variant` prop to `component` [(#4146)](https://github.com/patternfly/patternfly-react/pull/4146)
  - Changed `TabVariant` enum Name to `TabComponent` for consistent naming.  You will now need to update all instances of `TabVariant` to `TabComponent`. [(#4146)](https://github.com/patternfly/patternfly-react/pull/4146)

### Table
- Updated onSelect type from `(event: React.ChangeEvent<HTMLInputElement>) => void` to `(event: React.FormEvent<HTMLInputElement>) => void` [(#3296)](https://github.com/patternfly/patternfly-react/pull/3296)
- Removed `cellHeightAuto` transformer. All instances of it should be removed from your application. [(#4170)](https://github.com/patternfly/patternfly-react/pull/4170)
- `cellWidth('max')` has been replaced with `cellWidth(100)` [(#4170)](https://github.com/patternfly/patternfly-react/pull/4170)

### Text input
- Removed `isValid` prop, `validated` prop should be used instead. To set a the input to invalid, set `validated` prop to `error` or the  enum value `ValidatedOptions.error`. [(#3975)](https://github.com/patternfly/patternfly-react/pull/3975)

### Text area
- Removed `isValid` prop, `validated` prop should be used instead. To set a the input to invalid, set `validated` prop to `error` or the  enum value `ValidatedOptions.error`. [(#3975)](https://github.com/patternfly/patternfly-react/pull/3975)

### Title
- Make `headingLevel` required and remove default of `h2` to improve accessibility [(#3922)](https://github.com/patternfly/patternfly-react/pull/3922)
- Removes enum `TitleLevel`. Use one of the string values `h1`, `h2`, `h3`, `h4`, `h5`, or `h6` instead.
- Heading levels should be set contextually and and always be increasing or decreasing by 1 when read top-to-bottom in the DOM.
- Rename enum `TitleSize` to `TitleSizes` [(#3922)](https://github.com/patternfly/patternfly-react/pull/3922)
- Removes invalid values `xs` and `sm` for `size` prop. Use size `md` instead.

### Toolbar (formerly DataToolbar)
- The old Toolbar component that is normally used in the PageHeader has been removed in favor of `PageHeaderTools`. [(#4223)](https://github.com/patternfly/patternfly-react/pull/4223)
- Removed separator variant, all instances of it should be removed from your application. [(#4116)](https://github.com/patternfly/patternfly-react/pull/4116)

### Wizard
- **Wizard**
  - Removed prop `ariaLabelNav` in favor of `navAriaLabel` [(#3924)](https://github.com/patternfly/patternfly-react/pull/3924)
  - Removed prop `ariaLabelCloseButton` in favor of `closeButtonAriaLabel` [(#3924)](https://github.com/patternfly/patternfly-react/pull/3924)
  - Removed props `isFullHeight` and `isFullWidth`, all instances of them should be removed from your application. [(#4116)](https://github.com/patternfly/patternfly-react/pull/4116)
  - Renamed prop `hasBodyPadding` to `hasNoBodyPadding`. [(#4136)](https://github.com/patternfly/patternfly-react/pull/4136)
  - Removed `inPage` prop. By default the Wizard will be displayed in page, filling its parent container. If the consumer passes a managed `isOpen` flag, then the Wizard will be displayed in a modal. [(#4140)](https://github.com/patternfly/patternfly-react/pull/4140)
- **WizardBody:** 
  - Renamed `hasBodyPadding` to `hasNoBodyPadding`. [(#4136)](https://github.com/patternfly/patternfly-react/pull/4136)
- **WizardHeader:**
  - Removed prop `ariaLabelCloseButton` in favor of `closeButtonAriaLabel` [(#3924)](https://github.com/patternfly/patternfly-react/pull/3924)
- **WizardNav**:
  - Removed prop `ariaLabel` in favor of `aria-label` [(#3924)](https://github.com/patternfly/patternfly-react/pull/3924)
  - Removed prop `isCompactNav`, all instances of it should be removed from your application. [(#4142)](https://github.com/patternfly/patternfly-react/pull/4142)

- **WizardNavItem:**
  - Renamed prop `text` to `content`. The type of the prop has been changed to `React.ReactNode` to allow for flexibility. [(#4063)](https://github.com/patternfly/patternfly-react/pull/4063)

## React charts
- Updated Victory to package versions to 34.x. [(#3974)](https://github.com/patternfly/patternfly-react/pull/3974)
- Removed the `@types/victory` dependency and updated the PatternFly charts to use the types introduced with Victory 34.x. [(#4138)](https://github.com/patternfly/patternfly-react/pull/4138)
- Updated label prop types to sync with Victory 34.x. [(#4152)](https://github.com/patternfly/patternfly-react/pull/4152)
- Use `containerComponent={<VictoryZoomComponent />}` with Chart instead of `allowZoom`. [(#4278)](https://github.com/patternfly/patternfly-react/pull/4278)
- Use `containerComponent={<VictoryZoomComponent />}` with ChartGroup instead of `allowZoom`. [(#4278)](https://github.com/patternfly/patternfly-react/pull/4278)

## React icons
- Updated types.
- Removed `OutlinedFontAwesomeLogoFullIcon`. [(#3978)](https://github.com/patternfly/patternfly-react/pull/3978)

## React inline edit extension
- Many types have been added and amended while converting this project to TS. [(#4073)](https://github.com/patternfly/patternfly-react/pull/4073)

## React styles
- No longer reexports functions from `emotion` [(#3886)](https://github.com/patternfly/patternfly-react/pull/3886)
- Remove all exports except for the `css` function and CSS-in-JS stylesheets in the `css` folder [(#3886)](https://github.com/patternfly/patternfly-react/pull/3886)

## React tokens
- The tokens `global_BackgroundColor_150`, and `global_BackgroundColor_300` have been removed (see associated [Core PR](https://github.com/patternfly/patternfly/pull/2818)). At the discretion of design use `global_BackgroundColor_200` with its new value `#f0f0f0` instead.
- Some of our tokens have had their values updated to be correct. [(#4058)](https://github.com/patternfly/patternfly-react/pull/4058)
- New files with a different structure have been added to the index. [(#4058)](https://github.com/patternfly/patternfly-react/pull/4058)
