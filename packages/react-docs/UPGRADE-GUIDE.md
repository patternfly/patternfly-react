---
id: PatternFly 5  Upgrade guide
section: developer-resources
---

This upgrade guide details our upgrade from PatternFly v4 to v5. The following release notes detail changes made to PatternFly’s React and HTML libraries, from major releases 2023.02 to 2023.06.

Some of these changes will break your existing implementation and require you to upgrade your code. This guide details what was broken and how to fix it. To learn why a change was made, visit the linked GitHub pull request.

## Global

- React 18
- Updated outdated dependencies ([#5377](https://github.com/patternfly/patternfly/pull/5377))
- Code mods

## Website fixes

- Fixed unexpected background colors ([#5379](https://github.com/patternfly/patternfly/pull/5379))
- Fixed visibility issue for nested drilldown ([#5375](https://github.com/patternfly/patternfly/pull/5375))
- Updated tooltip's arrow size and shadow to match dark theme ([#5359](https://github.com/patternfly/patternfly/pull/5359))
- Fixed `<ul>` and `<ol>` elements with missing markers ([#5357](https://github.com/patternfly/patternfly/pull/5357))
- Removed outdated, breaking styles from _common.scss ([#5339](https://github.com/patternfly/patternfly/pull/5339))

## Icons

- Moved svg classes to _icons.scss ([#5220](https://github.com/patternfly/patternfly/pull/5220))

### Fonts

- Removed support for Overpass font ([#5169](https://github.com/patternfly/patternfly/pull/5169))

## React core  

- Updated components using a plain checkbox or radio input to instead  use the `.pf-m-standalone` variation of the checkbox/radio instead ([#5355](https://github.com/patternfly/patternfly/pull/5355))
- Removed `visibility` CSS across components where it was unnecessary ([#5209](https://github.com/patternfly/patternfly/pull/5209))

### About modal 

- Updated to be a regular block element that is placed inside of the existing modal component ([#5216](https://github.com/patternfly/patternfly/pull/5216))

### Accordian 

- Updated variable names ([#5180](https://github.com/patternfly/patternfly/pull/5180))

### Card

- Improved card header implementation and makes `.pf-c-card__header-main` required when there is a `.pf-c-card__header`. Added gap spacing. ([#5280](https://github.com/patternfly/patternfly/pull/5280))

### Check 

- Updated description and body to fill available page section width ([#5233](https://github.com/patternfly/patternfly/pull/5233))

### Chip

- Removed legacy examples and add support for the `__main` element ([#5356](https://github.com/patternfly/patternfly/pull/5356))
- Replaced margins in examples with gap spacing ([#5293](https://github.com/patternfly/patternfly/pull/5293))

### Code block

- Fixed class references ([#5349](https://github.com/patternfly/patternfly/pull/5349))

### Empty state 

- Updated examples' code and CSS variables ([#5307](https://github.com/patternfly/patternfly/pull/5307))


### Label

- Removed close button from editable active example ([#5354](https://github.com/patternfly/patternfly/pull/5354))
- Replaced margins in examples with gap spacing ([#5296](https://github.com/patternfly/patternfly/pull/5296))

### Notification drawer

- Updated body element to fill vertical space ([#5214](https://github.com/patternfly/patternfly/pull/5214))

### Popover 

- Updated background color, border, and shadow styles to align with dark theme ([#5318](https://github.com/patternfly/patternfly/pull/5318))

### Radio 

- Updated description and body to fill available page section width ([#5233](https://github.com/patternfly/patternfly/pull/5233))

### Skip to content

- Moved the class `.pf-c-skip-to-content` from the primary button to a `<div>` that wraps the primary button ([#5153](https://github.com/patternfly/patternfly/pull/5153))

### Tabs

- Added a bottom border to secondary tabs and cleaned up CSS modifiers ([#5171](https://github.com/patternfly/patternfly/pull/5171))

### Toolbar 

- Changed `.pf-c-toolbar__group` default vertical alignment from center to baseline and added modifier classes to switch between baseline and center alignment for self groups, children groups, and self items
 ([#5201](https://github.com/patternfly/patternfly/pull/5201))

### Tooltip

- Updated background color, border, and shadow styles to align with dark theme ([#5318](https://github.com/patternfly/patternfly/pull/5318))

### Wizard 

- Removed style that was breaking drawer example ([#5322]https://github.com/patternfly/patternfly/pull/5322)
- Reordered footer buttons ([#5148](https://github.com/patternfly/patternfly/pull/5148))
