---
id: Release notes
section: developer-resources
---

## 2022.11 release notes (2022-08-31)
- [@patternfly/react-catalog-view-extension@4.86.7](https://www.npmjs.com/package/@patternfly/react-catalog-view-extension/v/4.86.7)
- [@patternfly/react-charts@6.88.7](https://www.npmjs.com/package/@patternfly/react-charts/v/6.88.7)
- [@patternfly/react-code-editor@4.76.7](https://www.npmjs.com/package/@patternfly/react-code-editor/v/4.76.7)
- [@patternfly/react-core@4.235.7](https://www.npmjs.com/package/@patternfly/react-core/v/4.235.7)
- [@patternfly/react-icons@4.86.7](https://www.npmjs.com/package/@patternfly/react-icons/v/4.86.7)
- [@patternfly/react-inline-edit-extension@4.80.7](https://www.npmjs.com/package/@patternfly/react-inline-edit-extension/v/4.80.7)
- [@patternfly/react-log-viewer@4.80.7](https://www.npmjs.com/package/@patternfly/react-log-viewer/v/4.80.7)
- [@patternfly/react-styles@4.85.7](https://www.npmjs.com/package/@patternfly/react-styles/v/4.85.7)
- [@patternfly/react-table@4.104.7](https://www.npmjs.com/package/@patternfly/react-table/v/4.104.7)
- [@patternfly/react-tokens@4.87.7](https://www.npmjs.com/package/@patternfly/react-tokens/v/4.87.7)
- [@patternfly/react-topology@4.82.7](https://www.npmjs.com/package/@patternfly/react-topology/v/4.82.7)
- [@patternfly/react-virtualized-extension@4.82.7](https://www.npmjs.com/package/@patternfly/react-virtualized-extension/v/4.82.7)

### Components
- **Button:**
  - Added content to button examples ([#7607](https://github.com/patternfly/patternfly-react/pull/7607))
- **Card:**
  - Added content to card examples ([#7725](https://github.com/patternfly/patternfly-react/pull/7725))
- **Expandable section:**
  - Added truncated variant ([#7852](https://github.com/patternfly/patternfly-react/pull/7852))
- **Label:**
  - Adjusted editable keyboard behavior ([#7828](https://github.com/patternfly/patternfly-react/pull/7828))
- **Login page:**
  - Added `headerUtilities` prop for language selector example ([#7793](https://github.com/patternfly/patternfly-react/pull/7793))
- **Navigation:**
  - Converted examples to TypeScript ([#7597](https://github.com/patternfly/patternfly-react/pull/7597))
- **Notification drawer:**
  - Converted examples to TypeScript ([#7656](https://github.com/patternfly/patternfly-react/pull/7656))
- **Number input:**
  - Added status validated icons ([#7806](https://github.com/patternfly/patternfly-react/pull/7806))
  - Fixed to manage null value ([#7898](https://github.com/patternfly/patternfly-react/pull/7898))
  - Fixed to prevent errors when `onChange` is passed via `inputProps` ([#7908](https://github.com/patternfly/patternfly-react/pull/7908))
- **Page:**
  - Added aria label prop to page sub-components explicitly ([#7822](https://github.com/patternfly/patternfly-react/pull/7822))
  - Updated `onPageResize` default prop ([#7811](https://github.com/patternfly/patternfly-react/pull/7811))
- **Popover:**
  - Converted examples to TypeScript ([#7770](https://github.com/patternfly/patternfly-react/pull/7770))
- **Progress:**
  - Converted examples to TypeScript ([#7837](https://github.com/patternfly/patternfly-react/pull/7837))
- **Search input:**
  - Converted examples to TypeScript ([#7859](https://github.com/patternfly/patternfly-react/pull/7859))
- **Select:**
  - Applied aria-describedby to correct element ([#7790](https://github.com/patternfly/patternfly-react/pull/7790))
  - Applied focus styling to the "create" option ([#7800](https://github.com/patternfly/patternfly-react/pull/7800))
- **Tabs:**
  - Added tests for overflow tab behavior ([#7819](https://github.com/patternfly/patternfly-react/pull/7819))
- **Time picker:**
  - Cleaned up menu append to feature ([#7865](https://github.com/patternfly/patternfly-react/pull/7865))
- **Timestamp:**
  - Created new component ([#7815](https://github.com/patternfly/patternfly-react/pull/7815))
- **Wizard:**
  - Created composable next version of the wizard with enhancements ([#7703](https://github.com/patternfly/patternfly-react/pull/7703))

### Charts
- Added id prop to fix docs a11y violations ([#7808](https://github.com/patternfly/patternfly-react/pull/7808))

### Table
- Added sticky toolbar with table demo ([#7850](https://github.com/patternfly/patternfly-react/pull/7850))
- Updated expandable table data ([#7838](https://github.com/patternfly/patternfly-react/pull/7838))
- Updated sticky header table data ([#7851](https://github.com/patternfly/patternfly-react/pull/7851))
- Added victory-cursor-container dependency ([#7803](https://github.com/patternfly/patternfly-react/pull/7803))

### Other
- **Chore:**
  - Allowed for 'next' and 'deprecated' react-core sub-paths ([#7824](https://github.com/patternfly/patternfly-react/pull/7824))
  - Corrected types for demo application ([#7827](https://github.com/patternfly/patternfly-react/pull/7827))
  - Corrected types for examples ([#7821](https://github.com/patternfly/patternfly-react/pull/7821))
  - Fixed react-core to export all contents of dist directory ([#7883](https://github.com/patternfly/patternfly-react/pull/7883))
  - Fixed syntax errors on surge ([#7897](https://github.com/patternfly/patternfly-react/pull/7897))
  - Removed conditional usage of React hooks ([#7907](https://github.com/patternfly/patternfly-react/pull/7907))
- **Dependencies:**
  - Reverted rollup dependency bump ([#7881](https://github.com/patternfly/patternfly-react/pull/7881))
  - Bumped rollup versions to latest ([#7853](https://github.com/patternfly/patternfly-react/pull/7853))
  - Update dependency @patternfly/documentation-framework to v1.2.2 ([#7870](https://github.com/patternfly/patternfly-react/pull/7870))
  - Updated surge dependency ([#7848](https://github.com/patternfly/patternfly-react/pull/7848))
  - Bump rimraf version to latest ([#7854](https://github.com/patternfly/patternfly-react/pull/7854))
  - Update to React router v5 for the demo app ([#7826](https://github.com/patternfly/patternfly-react/pull/7826))

## 2022.10 release notes (2022-08-04)
- [@patternfly/react-catalog-view-extension@4.82.8](https://www.npmjs.com/package/@patternfly/react-catalog-view-extension/v/4.82.8)
- [@patternfly/react-charts@6.84.8](https://www.npmjs.com/package/@patternfly/react-charts/v/6.84.8)
- [@patternfly/react-code-editor@4.72.8](https://www.npmjs.com/package/@patternfly/react-code-editor/v/4.72.8)
- [@patternfly/react-core@4.231.8](https://www.npmjs.com/package/@patternfly/react-core/v/4.231.8)
- [@patternfly/react-icons@4.82.8](https://www.npmjs.com/package/@patternfly/react-icons/v/4.82.8)
- [@patternfly/react-inline-edit-extension@4.76.8](https://www.npmjs.com/package/@patternfly/react-inline-edit-extension/v/4.76.8)
- [@patternfly/react-log-viewer@4.76.8](https://www.npmjs.com/package/@patternfly/react-log-viewer/v/4.76.8)
- [@patternfly/react-styles@4.81.8](https://www.npmjs.com/package/@patternfly/react-styles/v/4.81.8)
- [@patternfly/react-table@4.100.8](https://www.npmjs.com/package/@patternfly/react-table/v/4.100.8)
- [@patternfly/react-tokens@4.83.8](https://www.npmjs.com/package/@patternfly/react-tokens/v/4.83.8)
- [@patternfly/react-topology@4.78.8](https://www.npmjs.com/package/@patternfly/react-topology/v/4.78.8)
- [@patternfly/react-virtualized-extension@4.78.8](https://www.npmjs.com/package/@patternfly/react-virtualized-extension/v/4.78.8)

### Components
- **Accordion:**
  - Updated tests to new standards ([#7645](https://github.com/patternfly/patternfly-react/pull/7645))
- **Action list:**
  - Updated tests to new standards ([#7669](https://github.com/patternfly/patternfly-react/pull/7669))
- **Alert:**
  - Added default aria-label back ([#7816](https://github.com/patternfly/patternfly-react/pull/7816))
- **Button:**
  - Fixed progress animation in example code ([#7716](https://github.com/patternfly/patternfly-react/pull/7716))
- **Calendar month:**
  - Added `onMonthChange` callback ([#7611](https://github.com/patternfly/patternfly-react/pull/7611))
  - Fixed aria labels for inaccurate dates outside of the selected month ([#7720](https://github.com/patternfly/patternfly-react/pull/7720))
  - Fixed first day of month not showing when week start is set to Monday ([#7679](https://github.com/patternfly/patternfly-react/pull/7679))
- **Code editor:**
  - Removed monaco-editor-webpack-plugin as peer dependency ([#7629](https://github.com/patternfly/patternfly-react/pull/7629))
- **Context selector:**
  - Updated prop type of `toggleText` ([#7651](https://github.com/patternfly/patternfly-react/pull/7651))
- **Data list:**
  - Removed multiple select support ([#7752](https://github.com/patternfly/patternfly-react/pull/7752))
  - Fixed error when using `isChecked` prop ([#7635](https://github.com/patternfly/patternfly-react/pull/7635))
- **Description list:**
  - Added display and card support ([#7713](https://github.com/patternfly/patternfly-react/pull/7713))
- **Drag and drop:**
  - Exported type so it can be used by implementations ([#7641](https://github.com/patternfly/patternfly-react/pull/7641))
- **Dropdown:**
  - Added secondary styling to split action button ([#7746](https://github.com/patternfly/patternfly-react/pull/7746))
  - Deprecated `isHovered` prop ([#7721](https://github.com/patternfly/patternfly-react/pull/7721))
- **Dual list selector:**
  - Added composable structure and component descriptions ([#7603](https://github.com/patternfly/patternfly-react/pull/7603))
- **Hint:**
  - Revamped React testing library tests ([#7626](https://github.com/patternfly/patternfly-react/pull/7626))
- **Login page:**
  - Converted examples to TypeScript ([#7615](https://github.com/patternfly/patternfly-react/pull/7615))
- **Menu:**
  - Added support for focused menu item([#6903](https://github.com/patternfly/patternfly-react/pull/6903))
  - Fixed so flyout variants work with voice over navigation ([#7772](https://github.com/patternfly/patternfly-react/pull/7772))
  - Fixed so keyboard navigation works checkbox variant ([#7743](https://github.com/patternfly/patternfly-react/pull/7743))
  - Converted examples to TypeScript ([#7627](https://github.com/patternfly/patternfly-react/pull/7627))
- **Menu toggle:**
  - Added support for type ahead toggle and added demo for composable  type ahead select ([#6903](https://github.com/patternfly/patternfly-react/pull/6903))
  - Added split button variant ([#7748](https://github.com/patternfly/patternfly-react/pull/7748))
  - Undid type change causing errors ([#7797](https://github.com/patternfly/patternfly-react/pull/7797))
  - Updated base type to include div attributes as well ([#7798](https://github.com/patternfly/patternfly-react/pull/7798))
- **Modal:**
  - Converted examples to TypeScript ([#7579](https://github.com/patternfly/patternfly-react/pull/7579))
- **Multiple file upload:**
  - Added composable structure and component descriptions ([#7603](https://github.com/patternfly/patternfly-react/pull/7603))
- **Navigation:**
  - Fixed so flyout variants work with voice over navigation ([#7772](https://github.com/patternfly/patternfly-react/pull/7772))
- **Notification badge:**
  - Converted examples to TypeScript ([#7636](https://github.com/patternfly/patternfly-react/pull/7636))
- **Notification drawer:**
  - Cleaned up demo imports ([#7724](https://github.com/patternfly/patternfly-react/pull/7724))
- **Number input:**
  - Fixed so leading zeros are removed from inputs ([#7544](https://github.com/patternfly/patternfly-react/pull/7544))
- **Page:**
  - Added support for vertical breakpoints, add sticky breadcrumb demo ([#7764](https://github.com/patternfly/patternfly-react/pull/7764))
  - Converted examples to TypeScript ([#7735](https://github.com/patternfly/patternfly-react/pull/7735))
  - Fixed group section example keyboard accessibility ([#7712](https://github.com/patternfly/patternfly-react/pull/7712))
- **Pagination:**
  - Fixed per-page selection handling in examples ([#7739](https://github.com/patternfly/patternfly-react/pull/7739))
  - Converted examples to TypeScript ([#7750](https://github.com/patternfly/patternfly-react/pull/7750))
- **Progress stepper:**
  - Added examples to show alignment modifiers working together ([#7727](https://github.com/patternfly/patternfly-react/pull/7727))
- **Radio:**
  - Converted examples to TypeScript ([#7708](https://github.com/patternfly/patternfly-react/pull/7708))
- **Search input:**
  - Updated to use popper to control the popup in advanced search ([#7621](https://github.com/patternfly/patternfly-react/pull/7621))
- **Select:**
  - Removed variant check from update logic ([#7741](https://github.com/patternfly/patternfly-react/pull/7741))
  - Fixed so update logic only applies to type ahead ([#7632](https://github.com/patternfly/patternfly-react/pull/7632))
- **Spinner:**
  - Converted examples to TypeScript ([#7768](https://github.com/patternfly/patternfly-react/pull/7768))
- **Switch:**
  - Fixed `aria-labelledby` to update with change ([#7557](https://github.com/patternfly/patternfly-react/pull/7557))
  - Converted examples to TypeScript ([#7771](https://github.com/patternfly/patternfly-react/pull/7771))
- **Tabs:**
  - Added horizontal overflow option ([#7742](https://github.com/patternfly/patternfly-react/pull/7742))
- **Tree view:**
  - Added generic HTML element type for `onCheck` ([#7705](https://github.com/patternfly/patternfly-react/pull/7705))
  - Allowed selection without expansion ([#7714](https://github.com/patternfly/patternfly-react/pull/7714))
- **Truncate:**
  - Revamped component unit test  ([#7686](https://github.com/patternfly/patternfly-react/pull/7686))
- **Wizard:**
  - Added callback for when a particular step is changed ([#7598](https://github.com/patternfly/patternfly-react/pull/7598))
  - Added support for an optional step in the wizard ([#7569](https://github.com/patternfly/patternfly-react/pull/7569))
  - Updated to keep `currentStep` state aligned with `startAtStep` prop ([#7749](https://github.com/patternfly/patternfly-react/pull/7749))

### Charts
- Added interface descriptions ([#7640](https://github.com/patternfly/patternfly-react/pull/7640))
- Cleaned up a11y violations in documentation ([#7682](https://github.com/patternfly/patternfly-react/pull/7682))
- Cleaned up examples unused imports ([#7668](https://github.com/patternfly/patternfly-react/pull/7668))
- Fixed style prop for `ChartLegendTooltip` ([#7666](https://github.com/patternfly/patternfly-react/pull/7666))
- Added resize observer examples ([#7587](https://github.com/patternfly/patternfly-react/pull/7587))
- Added basic scatter example ([#7588](https://github.com/patternfly/patternfly-react/pull/7588))
- Removed unique id generation for labels and axis ticks ([#7794](https://github.com/patternfly/patternfly-react/pull/7794))

### Log viewer
- Fixed to render correctly when there is '\n' in the string array ([#7681](https://github.com/patternfly/patternfly-react/pull/7681))

#### Table
- Cleaned up a11y violations in table documentation ([#7580](https://github.com/patternfly/patternfly-react/pull/7580))
- Updated hoverable example to single select ([#7732](https://github.com/patternfly/patternfly-react/pull/7732))

### Topology
- Added topology pipeline support ([#7609](https://github.com/patternfly/patternfly-react/pull/7609))
- Added pipelines support for badges/icons variable task node width ([#7697](https://github.com/patternfly/patternfly-react/pull/7697))

### Other
- **Chore:**
  - Cleaned up documentation a11y violations ([#7582](https://github.com/patternfly/patternfly-react/pull/7582))
  - Enabled dark theme switch in workspace ([#7644](https://github.com/patternfly/patternfly-react/pull/7644))
  - Fixed conditional call of useMemo hook when getting OUIAId ([#7625](https://github.com/patternfly/patternfly-react/pull/7625))
  - Fixed various a11y violations in examples ([#7604](https://github.com/patternfly/patternfly-react/pull/7604))
  - Fixed various a11y violations in examples ([#7619](https://github.com/patternfly/patternfly-react/pull/7619))
  - Updated documentation framework ([#7631](https://github.com/patternfly/patternfly-react/pull/7631))
- **Demos:**
  - Used new raised card variant in primary details demo, add bulk select ([#7658](https://github.com/patternfly/patternfly-react/pull/7658))
- **Dependencies:**
  - Updated dependency @patternfly/documentation-framework to v1.1.9 ([#7717](https://github.com/patternfly/patternfly-react/pull/7717))
  - Updated dependency @patternfly/patternfly to v4.206.2 ([#7783](https://github.com/patternfly/patternfly-react/pull/7783))
  - Updated TypeScript dependencies ([#7671](https://github.com/patternfly/patternfly-react/pull/7671))
  - Replaced react-measure with react-resize-detector ([#7706](https://github.com/patternfly/patternfly-react/pull/7706))
  - Reverted replacing react-measure with react-resize-detector ([#7809](https://github.com/patternfly/patternfly-react/pull/7809))

## 2022.08 release notes (2022-06-29)
- [@patternfly/react-catalog-view-extension@4.75.1](https://www.npmjs.com/package/@patternfly/react-catalog-view-extension/v/4.75.1)
- [@patternfly/react-charts@6.77.1](https://www.npmjs.com/package/@patternfly/react-charts/v/6.77.1)
- [@patternfly/react-code-editor@4.65.1](https://www.npmjs.com/package/@patternfly/react-code-editor/v/4.65.1)
- [@patternfly/react-core@4.224.1](https://www.npmjs.com/package/@patternfly/react-core/v/4.224.1)
- [@patternfly/react-icons@4.75.1](https://www.npmjs.com/package/@patternfly/react-icons/v/4.75.1)
- [@patternfly/react-inline-edit-extension@4.69.1](https://www.npmjs.com/package/@patternfly/react-inline-edit-extension/v/4.69.1)
- [@patternfly/react-log-viewer@4.69.1](https://www.npmjs.com/package/@patternfly/react-log-viewer/v/4.69.1)
- [@patternfly/react-styles@4.74.1](https://www.npmjs.com/package/@patternfly/react-styles/v/4.74.1)
- [@patternfly/react-table@4.93.1](https://www.npmjs.com/package/@patternfly/react-table/v/4.93.1)
- [@patternfly/react-tokens@4.76.1](https://www.npmjs.com/package/@patternfly/react-tokens/v/4.76.1)
- [@patternfly/react-topology@4.71.1](https://www.npmjs.com/package/@patternfly/react-topology/v/4.71.1)
- [@patternfly/react-virtualized-extension@4.71.1](https://www.npmjs.com/package/@patternfly/react-virtualized-extension/v/4.71.1)

### Components
- **Calendar month:**
  - Updated to match PatternFly core ([#7503](https://github.com/patternfly/patternfly-react/pull/7503))
- **Date picker:**
  - Enabled date picker in a modal ([#7416](https://github.com/patternfly/patternfly-react/pull/7416))
- **Drawer:**
  - Fixed type error on resize ([#7531](https://github.com/patternfly/patternfly-react/pull/7531))
- **Dropdown:**
  - Tooltip examples are not accessible on dropdown items ([#7524](https://github.com/patternfly/patternfly-react/pull/7524))
- **Dual list selector:**
  - Converted examples to TypeScript ([#7458](https://github.com/patternfly/patternfly-react/pull/7458))
- **Empty State:**
  - Converted empty state demos to TypeScript ([#7496](https://github.com/patternfly/patternfly-react/pull/7496))
- **Expandable section:**
  - Converted examples to TypeScript ([#7506](https://github.com/patternfly/patternfly-react/pull/7506))
- **File upload:**
  - Converted examples to TypeScript/functional components ([#7514](https://github.com/patternfly/patternfly-react/pull/7514))
- **Form:**
  - Added functionality for form group roles ([#7516](https://github.com/patternfly/patternfly-react/pull/7516))
  - Converted examples to TypeScript/functional components ([#7521](https://github.com/patternfly/patternfly-react/pull/7521))
- **Form select:**
  - Converted examples to TypeScript ([#7489](https://github.com/patternfly/patternfly-react/pull/7489))
- **Helper text:**
  - Converted helper text examples to TypeScript ([#7488](https://github.com/patternfly/patternfly-react/pull/7488))
- **Hint:**
  - Converted hint examples to TypeScript ([#7487](https://github.com/patternfly/patternfly-react/pull/7487))
- **Input group:**
  - Converted examples to TypeScript ([#7493](https://github.com/patternfly/patternfly-react/pull/7493))
- **Jump links:**
  - Added jump links with drawer demo ([#7520](https://github.com/patternfly/patternfly-react/pull/7520))
  - Converted examples to TypeScript ([#7551](https://github.com/patternfly/patternfly-react/pull/7551))
- **Label:**
  - Added gold color for label ([#7528](https://github.com/patternfly/patternfly-react/pull/7528))
  - Converted label demos to TypeScript ([#7543](https://github.com/patternfly/patternfly-react/pull/7543))
- **Label group:**
  - Added editable label examples ([#7515](https://github.com/patternfly/patternfly-react/pull/7515))
  - Converted examples to TypeScript ([#7558](https://github.com/patternfly/patternfly-react/pull/7558))
- **List:**
  - Converted all examples to TypeScript ([#7550](https://github.com/patternfly/patternfly-react/pull/7550))
- **Overflow menu:**
  - Updated to use `position` and `isFlipEnabled` props correctly in documentation ([#7545](https://github.com/patternfly/patternfly-react/pull/7545))
- **Progress stepper:**
  - Added support for keyboard interactions ([#7532](https://github.com/patternfly/patternfly-react/pull/7532))
- **Select:**
  - Added check for updates in grouped select options ([#7530](https://github.com/patternfly/patternfly-react/pull/7530))
  - Updated to retain focus on correct checkbox after view more clicked ([#7505](https://github.com/patternfly/patternfly-react/pull/7505))
  - Updated logic for checking for updated children to only apply to typeahead variants ([#7632](https://github.com/patternfly/patternfly-react/pull/7632))
- **Tabs:**
  - Updated insets example to make more sense ([#7480](https://github.com/patternfly/patternfly-react/pull/7480))
- **Wizard:**
  - Added support for additional information panel (drawer) ([#7323](https://github.com/patternfly/patternfly-react/pull/7323))
  - Wrapped Wizard modal example in page ([#7502](https://github.com/patternfly/patternfly-react/pull/7502))

### Access console extension
- Added SUSE instruction for virt-viewer ([#7445](https://github.com/patternfly/patternfly-react/pull/7445))

### Charts
- Added support for patterns ([#7390](https://github.com/patternfly/patternfly-react/pull/7390))
- Simplified pattern visibility ([#7542](https://github.com/patternfly/patternfly-react/pull/7542))

### Table
- Updated to account for added columns with expandable ([#7529](https://github.com/patternfly/patternfly-react/pull/7529))
- Added nested sticky header support ([#7595](https://github.com/patternfly/patternfly-react/pull/7595))
- Fixed filterable table demo icon text spacing ([#7477](https://github.com/patternfly/patternfly-react/pull/7477))
- Updated expandable examples to set column widths ([#7513](https://github.com/patternfly/patternfly-react/pull/7513))

### Topology
- Fixed group position when it has no children ([#7573](https://github.com/patternfly/patternfly-react/pull/7573))

### Other
- **Chore:**
  - Added additional type-casts for React nodes ([#7402](https://github.com/patternfly/patternfly-react/pull/7402)) 
- **Demos:**
  - Updated card view demo to remove highlight on selected cards (used checkboxes only) and to include mixed state (-) check indicator ([#7562](https://github.com/patternfly/patternfly-react/pull/7562))
  - Align demo dashboard header with core ([#7518](https://github.com/patternfly/patternfly-react/pull/7518))
- **Dependencies:**
  - Update dependency theme-patternfly-org to v0.11.68 ([#7593](https://github.com/patternfly/patternfly-react/pull/7593))
  - Bumped patternfly-a11y and fixed virtualized table violations ([#7510](https://github.com/patternfly/patternfly-react/pull/7510))

## 2022.07 release notes (2022-06-02)
- [@patternfly/react-catalog-view-extension@4.72.3](https://www.npmjs.com/package/@patternfly/react-catalog-view-extension/v/4.72.3)
- [@patternfly/react-charts@6.74.3](https://www.npmjs.com/package/@patternfly/react-charts/v/6.74.3)
- [@patternfly/react-code-editor@4.62.3](https://www.npmjs.com/package/@patternfly/react-code-editor/v/4.62.3)
- [@patternfly/react-core@4.221.3](https://www.npmjs.com/package/@patternfly/react-core/v/4.221.3)
- [@patternfly/react-icons@4.72.3](https://www.npmjs.com/package/@patternfly/react-icons/v/4.72.3)
- [@patternfly/react-inline-edit-extension@4.66.3](https://www.npmjs.com/package/@patternfly/react-inline-edit-extension/v/4.66.3)
- [@patternfly/react-log-viewer@4.66.3](https://www.npmjs.com/package/@patternfly/react-log-viewer/v/4.66.3)
- [@patternfly/react-styles@4.71.3](https://www.npmjs.com/package/@patternfly/react-styles/v/4.71.3)
- [@patternfly/react-table@4.90.3](https://www.npmjs.com/package/@patternfly/react-table/v/4.90.3)
- [@patternfly/react-tokens@4.73.3](https://www.npmjs.com/package/@patternfly/react-tokens/v/4.73.3)
- [@patternfly/react-topology@4.68.3](https://www.npmjs.com/package/@patternfly/react-topology/v/4.68.3)
- [@patternfly/react-virtualized-extension@4.68.3](https://www.npmjs.com/package/@patternfly/react-virtualized-extension/v/4.68.3)

### Components
- **Application launcher:**
  - Exposed `menuAppendTo` in prop docs ([#7435](https://github.com/patternfly/patternfly-react/pull/7435))
- **Banner:**
  - Added screen reader text ([#7377](https://github.com/patternfly/patternfly-react/pull/7377))
- **Chip:**
  - Added custom `maxWidth` prop ([#7387](https://github.com/patternfly/patternfly-react/pull/7387))
- **Code editor:**
  - Enabled external updating of editor value on file upload ([#7450](https://github.com/patternfly/patternfly-react/pull/7450))
- **Context selector:**
  - Fixed so popper menu flips correctly ([#7434](https://github.com/patternfly/patternfly-react/pull/7434))
- **Data list:**
  - Improved a11y for selectable data list items ([#7474](https://github.com/patternfly/patternfly-react/pull/7474))
- **Dropdown:**
  - Converted examples to TypeScript ([#7388](https://github.com/patternfly/patternfly-react/pull/7388))
  - Fixed so popper menu flips correctly ([#7434](https://github.com/patternfly/patternfly-react/pull/7434))
  - Exposed `menuAppendTo` in prop docs ([#7435](https://github.com/patternfly/patternfly-react/pull/7435))
- **Expandable section:**
  - Added example with custom component ([#7464](https://github.com/patternfly/patternfly-react/pull/7464))
- **File upload:**
  - Forwarded more props to the text area ([#7401](https://github.com/patternfly/patternfly-react/pull/7401))
- **Helper text:**
  - Added screen reader text for dynamic variant ([#7426](https://github.com/patternfly/patternfly-react/pull/7426))
- **Menu:**
  - Added support for checkbox menu ([#7368](https://github.com/patternfly/patternfly-react/pull/7368))
  - Updated `appendTo` in demos ([#7417](https://github.com/patternfly/patternfly-react/pull/7417))
- **Modal:**
  - Fixed tooltip visibility on modal open ([#7411](https://github.com/patternfly/patternfly-react/pull/7411))
- **Options menu:**
  - Exposed `menuAppendTo` in prop docs ([#7435](https://github.com/patternfly/patternfly-react/pull/7435))
- **Popper:**
  - Added mouse events for popper content ([#7399](https://github.com/patternfly/patternfly-react/pull/7399))
- **Search input:**
  - Updated to use panel instead of card in composable advanced search demo ([#7431](https://github.com/patternfly/patternfly-react/pull/7431))
  - Updated to use text input group instead native HTML elements ([#7414](https://github.com/patternfly/patternfly-react/pull/7414))
- **Select:**
  - Updated to allow enter to create when there is a single option ([#7444](https://github.com/patternfly/patternfly-react/pull/7444))
  - Fixed so aria-describedby is added properly ([#7456](https://github.com/patternfly/patternfly-react/pull/7456))
  - Fixed so popper menu flips correctly ([#7434](https://github.com/patternfly/patternfly-react/pull/7434))
  - Exposed `menuAppendTo` in prop docs ([#7435](https://github.com/patternfly/patternfly-react/pull/7435))
- **Slider:**
  - Added support for aria-labelledby ad aria-describedby ([#7408](https://github.com/patternfly/patternfly-react/pull/7408))
  - Updated to add support for slider with no linear data ([#7463](https://github.com/patternfly/patternfly-react/pull/7463))
- **Switch:**
  - Fixed uncontrolled examples ([#7418](https://github.com/patternfly/patternfly-react/pull/7418))
  - Fixed so `isReversed` variant supports check icon ([#7333](https://github.com/patternfly/patternfly-react/pull/7333))
- **Text area:**
  - Used correct type for text area ref ([#7397](https://github.com/patternfly/patternfly-react/pull/7397))

### Charts
- Added `@public` and `@private` annotations ([#7413](https://github.com/patternfly/patternfly-react/pull/7413))

### React tokens
- Excluded dark theme blocks ([#7470](https://github.com/patternfly/patternfly-react/pull/7470))

### Table
- Added compound expandable fullscreen demo ([#7366](https://github.com/patternfly/patternfly-react/pull/7366))
- Added full screen demo for compact variant ([#7338](https://github.com/patternfly/patternfly-react/pull/7338))
- Added full screen demo for error state ([#7443](https://github.com/patternfly/patternfly-react/pull/7443))
- Added full screen empty state demo ([#7371](https://github.com/patternfly/patternfly-react/pull/7371))
- Added full screen loading state demo ([#7370](https://github.com/patternfly/patternfly-react/pull/7370))
- Added full screen demo for sticky first column ([#7451](https://github.com/patternfly/patternfly-react/pull/7451))
- Improved a11y for selectable table rows ([#7447](https://github.com/patternfly/patternfly-react/pull/7447))
- Removed duplicate import from md file ([#7442](https://github.com/patternfly/patternfly-react/pull/7442))
- Updated sortable demo to align with core ([#7292](https://github.com/patternfly/patternfly-react/pull/7292))

### Topology
- Added node scaling on hover at low details scale level ([#7437](https://github.com/patternfly/patternfly-react/pull/7437))

### Other
- **Chore:**
  - Removed dark theme stylesheet from react-docs([#7485](https://github.com/patternfly/patternfly-react/pull/7485))
- **Dep:**
  - Upgraded focus trap dependency and added tabbable option to fix breaking testing ([#7448](https://github.com/patternfly/patternfly-react/pull/7448))
  - Updated dependency theme-patternfly-org to v0.11.43 ([#7400](https://github.com/patternfly/patternfly-react/pull/7400))
  - Updated react testing library to v2.1.5 ([#7428](https://github.com/patternfly/patternfly-react/pull/7428))

## 2022.06 release notes (2022-05-12)
- [@patternfly/react-catalog-view-extension@4.65.1](https://www.npmjs.com/package/@patternfly/react-catalog-view-extension/v/4.65.1)
- [@patternfly/react-charts@6.67.1](https://www.npmjs.com/package/@patternfly/react-charts/v/6.67.1)
- [@patternfly/react-code-editor@4.55.1](https://www.npmjs.com/package/@patternfly/react-code-editor/v/4.55.1)
- [@patternfly/react-core@4.214.1](https://www.npmjs.com/package/@patternfly/react-core/v/4.214.1)
- [@patternfly/react-icons@4.65.1](https://www.npmjs.com/package/@patternfly/react-icons/v/4.65.1)
- [@patternfly/react-inline-edit-extension@4.59.1](https://www.npmjs.com/package/@patternfly/react-inline-edit-extension/v/4.59.1)
- [@patternfly/react-log-viewer@4.59.1](https://www.npmjs.com/package/@patternfly/react-log-viewer/v/4.59.1)
- [@patternfly/react-styles@4.64.1](https://www.npmjs.com/package/@patternfly/react-styles/v/4.64.1)
- [@patternfly/react-table@4.83.1](https://www.npmjs.com/package/@patternfly/react-table/v/4.83.1)
- [@patternfly/react-tokens@4.66.1](https://www.npmjs.com/package/@patternfly/react-tokens/v/4.66.1)
- [@patternfly/react-topology@4.61.1](https://www.npmjs.com/package/@patternfly/react-topology/v/4.61.1)
- [@patternfly/react-virtualized-extension@4.61.1](https://www.npmjs.com/package/@patternfly/react-virtualized-extension/v/4.61.1)

### Components
- **Alert group:**
  - Converted examples to TypeScript/functional components ([#7273](https://github.com/patternfly/patternfly-react/pull/7273))
- **Card:**
  - Updated to indicate card selectivity and status if using a screen reader ([#7144](https://github.com/patternfly/patternfly-react/pull/7144))
- **Clipboard copy:**
  - Fixed so dynamic tooltip updates get announced ([#7335](https://github.com/patternfly/patternfly-react/pull/7335))
  - Updated types used for tooltip positioning ([#7295](https://github.com/patternfly/patternfly-react/pull/7295))
- **Code block:**
  - Added class to code component ([#7281](https://github.com/patternfly/patternfly-react/pull/7281))
- **Data list:**
  - Removed primary button from expandable demo ([#7279](https://github.com/patternfly/patternfly-react/pull/7279))
- **Date time picker:**
  - Converted demo to TypeScript ([#7268](https://github.com/patternfly/patternfly-react/pull/7268))
  - Updated date placeholder ([#7266](https://github.com/patternfly/patternfly-react/pull/7266))
- **Divider:**
  - Added support for switching orientation at various breakpoints ([#7285](https://github.com/patternfly/patternfly-react/pull/7285))
- **Drag and drop:**
  - Converted examples to TypeScript ([#7244](https://github.com/patternfly/patternfly-react/pull/7244))
- **Drawer:**
  - Converted examples to TypeScript ([#7329](https://github.com/patternfly/patternfly-react/pull/7329))
- **Dropdown:**
  - Reverted expose menuAppendTo in Dropdown prop docs ([#7395](https://github.com/patternfly/patternfly-react/pull/7395))
- **Menu:**
  - Added support for tree view menu keyboard handling ([#7334](https://github.com/patternfly/patternfly-react/pull/7334))
- **Modal:**
  - Added example preserving a11y when content overflows ([#7293](https://github.com/patternfly/patternfly-react/pull/7293))
- **Page:**
  - Added tabindex to components with `hasOverflowScroll` set ([#7274](https://github.com/patternfly/patternfly-react/pull/7274))
  - Updated centered example to match Core ([#7269](https://github.com/patternfly/patternfly-react/pull/7269))
- **Popper:**
  - Updated Popper modifiers when child DOM changes ([#7385](https://github.com/patternfly/patternfly-react/pull/7385))
- **Tabs:**
  - Added secondary border-bottom variation, updated demos ([#7311](https://github.com/patternfly/patternfly-react/pull/7311))
  - Added support to allow dynamic close and add ([#7297](https://github.com/patternfly/patternfly-react/pull/7297))
  - Made close handler optional ([#7405](https://github.com/patternfly/patternfly-react/pull/7405))
  - Updated key to not use index ([#7276](https://github.com/patternfly/patternfly-react/pull/7276))
- **Tooltip:**
  - Made ref variant announced by assistive technology ([#7332](https://github.com/patternfly/patternfly-react/pull/7332))
- **Wizard:**
  - Added `WizardStep` to documentation ([#7299](https://github.com/patternfly/patternfly-react/pull/7299))
  - Fixed id not being applied to wizard step ([#7349](https://github.com/patternfly/patternfly-react/pull/7349))

### Catalog extension
- Added a little bit of spacing between title and items ([#7060](https://github.com/patternfly/patternfly-react/pull/7060))

### Charts
- Added style for tooltip cursor ([#7361](https://github.com/patternfly/patternfly-react/pull/7361))
- Added PatternFly dark theme support ([#7310](https://github.com/patternfly/patternfly-react/pull/7310))
- Added support for customizing tooltip border for dark theme ([#7393](https://github.com/patternfly/patternfly-react/pull/7393))
- Deprecated themeVariant prop for light/dark themes ([#7372](https://github.com/patternfly/patternfly-react/pull/7372))
- Updated variables to include a fallback value for charts ([#7374](https://github.com/patternfly/patternfly-react/pull/7374))

### Log viewer
- Updated to clear ANSI cache when resetting the log window ([#7355](https://github.com/patternfly/patternfly-react/pull/7355))

### Table
- Added full screen demo for basic/bulk select ([#7264](https://github.com/patternfly/patternfly-react/pull/7264))
- Added expandable table demo ([#7277](https://github.com/patternfly/patternfly-react/pull/7277))
- Fixed broken link in example docs ([#7296](https://github.com/patternfly/patternfly-react/pull/7296))

### Topology
- Added `ColaGroupsLayout` ([#7308](https://github.com/patternfly/patternfly-react/pull/7308))
- Fixed error when a group has no visible children ([#7304](https://github.com/patternfly/patternfly-react/pull/7304))
- Reverted BaseLayout startLayout method back to protected. ([#7407](https://github.com/patternfly/patternfly-react/pull/7407))
- Added support for topology dark theme ([#7294](https://github.com/patternfly/patternfly-react/pull/7294))
- Topology dark theme follow-on ([#7364](https://github.com/patternfly/patternfly-react/pull/7364))

### Other
- **Chore:**
  - Added correct types for class components using context API ([#7282](https://github.com/patternfly/patternfly-react/pull/7282))
  - Added missing `children` prop in several places ([#7363](https://github.com/patternfly/patternfly-react/pull/7363))
  - Added setup to always include jest-dom extended matchers and cleanup ([#7240](https://github.com/patternfly/patternfly-react/pull/7240))
  - Updated react-docs to use workspace version of React for documentation ([#7217](https://github.com/patternfly/patternfly-react/pull/7217))
- **Dependencies:**
  - Update dependency theme-patternfly-org to v0.11.38 ([#7381](https://github.com/patternfly/patternfly-react/pull/7381))
- **Documentation:**
  - Cleanup dead link ([#7270](https://github.com/patternfly/patternfly-react/pull/7270))

## 2022.05 release notes (2022-04-22)
- [@patternfly/react-catalog-view-extension@4.57.2](https://www.npmjs.com/package/@patternfly/react-catalog-view-extension/v/4.57.2)
- [@patternfly/react-charts@6.59.2](https://www.npmjs.com/package/@patternfly/react-charts/v/6.59.2)
- [@patternfly/react-code-editor@4.47.2](https://www.npmjs.com/package/@patternfly/react-code-editor/v/4.47.2)
- [@patternfly/react-core@4.206.2](https://www.npmjs.com/package/@patternfly/react-core/v/4.206.2)
- [@patternfly/react-icons@4.57.2](https://www.npmjs.com/package/@patternfly/react-icons/v/4.57.2)
- [@patternfly/react-inline-edit-extension@4.51.2](https://www.npmjs.com/package/@patternfly/react-inline-edit-extension/v/4.51.2)
- [@patternfly/react-log-viewer@4.51.2](https://www.npmjs.com/package/@patternfly/react-log-viewer/v/4.51.2)
- [@patternfly/react-styles@4.56.2](https://www.npmjs.com/package/@patternfly/react-styles/v/4.56.2)
- [@patternfly/react-table@4.75.2](https://www.npmjs.com/package/@patternfly/react-table/v/4.75.2)
- [@patternfly/react-tokens@4.58.2](https://www.npmjs.com/package/@patternfly/react-tokens/v/4.58.2)
- [@patternfly/react-topology@4.53.2](https://www.npmjs.com/package/@patternfly/react-topology/v/4.53.2)
- [@patternfly/react-virtualized-extension@4.53.2](https://www.npmjs.com/package/@patternfly/react-virtualized-extension/v/4.53.2)

### Components
- **Brand:**
  - Updated to allow picture with child elements and breakpoints, added example/test ([#7176](https://github.com/patternfly/patternfly-react/pull/7176))
- **Calendar month:**
  - Added date range example ([#7082](https://github.com/patternfly/patternfly-react/pull/7082))
- **Code editor:**
  - Converted examples to TypeScript/functional components ([#7101](https://github.com/patternfly/patternfly-react/pull/7101))
- **Context selector:**
  - Converted examples to TypeScript/functional components ([#7114](https://github.com/patternfly/patternfly-react/pull/7114))
  - Fixed listener handling when using popper ([#7165](https://github.com/patternfly/patternfly-react/pull/7165))
- **Data list:**
  - Converted examples to TypeScript ([#7154](https://github.com/patternfly/patternfly-react/pull/7154))
  - Assigned checked prop to correct attribute ([#7163](https://github.com/patternfly/patternfly-react/pull/7163))
  - Reverted checked prop ([#7284](https://github.com/patternfly/patternfly-react/pull/7284))
- **Date picker:**
  - Converted examples to TypeScript ([#7160](https://github.com/patternfly/patternfly-react/pull/7160))
- **Description list:**
  - Converted examples to TypeScript ([#7147](https://github.com/patternfly/patternfly-react/pull/7147))
- **Divider:**
  - Converted examples to TypeScript ([#7149](https://github.com/patternfly/patternfly-react/pull/7149))
- **Dropdown:**
  - Exposed `menuAppendTo` in dropdown prop documentation ([#7173](https://github.com/patternfly/patternfly-react/pull/7173))
- **Dual list selector:**
  - Updated merged copy logic for tree variant ([#7191](https://github.com/patternfly/patternfly-react/pull/7191))
- **Form:**
  - Added `maxWidth` prop ([#7253](https://github.com/patternfly/patternfly-react/pull/7253))
- **Helper text:**
  - Added React demos ([#7250](https://github.com/patternfly/patternfly-react/pull/7250))
- **Jump links:**
  - Added aria current to active jump link item ([#7172](https://github.com/patternfly/patternfly-react/pull/7172))
- **Menu toggle:**
  - Added full width modifier ([#7232](https://github.com/patternfly/patternfly-react/pull/7232))
- **Number input:**
  - Fixed bug with custom increment/decrement and thresholds ([#7159](https://github.com/patternfly/patternfly-react/pull/7159))
- **Pagination:**
  - Made items per page text in toggle clickable ([#7192](https://github.com/patternfly/patternfly-react/pull/7192))
- **Progress stepper:**
  - Updated to use render prop for popover ([#7190](https://github.com/patternfly/patternfly-react/pull/7190))
  - Added aria label to progress step ([#7172](https://github.com/patternfly/patternfly-react/pull/7172))
- **Select:**
  - Added `onBlur` callback to select toggle ([#7198](https://github.com/patternfly/patternfly-react/pull/7198))
  - Added test for footer and `menuAppendTo` interaction ([#7207](https://github.com/patternfly/patternfly-react/pull/7207))
  - Fixed to prevent footer clicks from toggling ([#7193](https://github.com/patternfly/patternfly-react/pull/7193))
- **Switch:**
  - Added check with label functionality and demo ([#7229](https://github.com/patternfly/patternfly-react/pull/7229))
- **Tabs:**
  - Added nested, un-indented demo ([#7194](https://github.com/patternfly/patternfly-react/pull/7194))
  - Added tables and tabs auto width tabs demo ([#7183](https://github.com/patternfly/patternfly-react/pull/7183))
  - Added tab role, and tablist role ([#7172](https://github.com/patternfly/patternfly-react/pull/7172))
- **Text input group:**
  - Updated testing suite to new standards ([#7169](https://github.com/patternfly/patternfly-react/pull/7169))
- **Toolbar:**
  - Updated to use search input instead of input group in documentation ([#7242](https://github.com/patternfly/patternfly-react/pull/7242))
- **Wizard:**
  - Added description component type ([#7197](https://github.com/patternfly/patternfly-react/pull/7197))

### Catalog view extension
- Updated colors to use dark theme friendly css vars ([#7215](https://github.com/patternfly/patternfly-react/pull/7215))

### React styles 
- Added support for esm import and export ([#7084](https://github.com/patternfly/patternfly-react/pull/7084))

### Table
- Cleaned up unused imports for input group ([#7249](https://github.com/patternfly/patternfly-react/pull/7249))
- Fixed broken link in documentation ([#7202](https://github.com/patternfly/patternfly-react/pull/7202))
- Increased clickable area of tree table checkboxes ([#7170](https://github.com/patternfly/patternfly-react/pull/7170))

### Topology
- Added breadth first layout to the topology component ([#7138](https://github.com/patternfly/patternfly-react/pull/7138))
- Fixed drop target highlight, group label position on drag ([#7222](https://github.com/patternfly/patternfly-react/pull/7222))
- Fixed edge style on hover of a selected edge ([#7137](https://github.com/patternfly/patternfly-react/pull/7137))

### Other
- **Chore:**
  - Added correct types to instances of useCallback ([#7216](https://github.com/patternfly/patternfly-react/pull/7216))
  - Automatically detect React version in ESLint ([#7218](https://github.com/patternfly/patternfly-react/pull/7218))
  - Migrated tests to to React testing library ([#7044](https://github.com/patternfly/patternfly-react/pull/7044))
  - Migrated tests to to React testing library ([#7055](https://github.com/patternfly/patternfly-react/pull/7055))
  - Migrated tests to to React testing library ([#7063](https://github.com/patternfly/patternfly-react/pull/7063))
  - Removed duplicate generated snapshots ([#7057](https://github.com/patternfly/patternfly-react/pull/7057))
  - Replaced deprecated `SFC` type with `FunctionComponent` ([#7195](https://github.com/patternfly/patternfly-react/pull/7195))
- **Demo application:**
  - Reordered css imports to load in dark theme correctly ([#7224](https://github.com/patternfly/patternfly-react/pull/7224))
- **Dependencies:**
  - Updated dependency theme-patternfly-org to v0.11.22 ([#7257](https://github.com/patternfly/patternfly-react/pull/7257))
- **Documentation:**
  - Added code editor webpack plugin instructions ([#7133](https://github.com/patternfly/patternfly-react/pull/7133))

## 2022.04 release notes (2022-04-07)
- [@patternfly/react-catalog-view-extension@4.53.16](https://www.npmjs.com/package/@patternfly/react-catalog-view-extension/v/4.53.16)
- [@patternfly/react-charts@6.55.16](https://www.npmjs.com/package/@patternfly/react-charts/v/6.55.16)
- [@patternfly/react-code-editor@4.43.16](https://www.npmjs.com/package/@patternfly/react-code-editor/v/4.43.16)
- [@patternfly/react-core@4.202.16](https://www.npmjs.com/package/@patternfly/react-core/v/4.202.16)
- [@patternfly/react-icons@4.53.16](https://www.npmjs.com/package/@patternfly/react-icons/v/4.53.16)
- [@patternfly/react-inline-edit-extension@4.47.16](https://www.npmjs.com/package/@patternfly/react-inline-edit-extension/v/4.47.16)
- [@patternfly/react-log-viewer@4.47.16](https://www.npmjs.com/package/@patternfly/react-log-viewer/v/4.47.16)
- [@patternfly/react-styles@4.52.16](https://www.npmjs.com/package/@patternfly/react-styles/v/4.52.16)
- [@patternfly/react-table@4.71.16](https://www.npmjs.com/package/@patternfly/react-table/v/4.71.16)
- [@patternfly/react-tokens@4.54.16](https://www.npmjs.com/package/@patternfly/react-tokens/v/4.54.16)
- [@patternfly/react-topology@4.49.16](https://www.npmjs.com/package/@patternfly/react-topology/v/4.49.16)
- [@patternfly/react-virtualized-extension@4.49.16](https://www.npmjs.com/package/@patternfly/react-virtualized-extension/v/4.49.16)

### Components
- **Avatar:**
  - Added new size prop and demo ([#7047](https://github.com/patternfly/patternfly-react/pull/7047))
- **Calendar month:**
  - Made date prop optional ([#7077](https://github.com/patternfly/patternfly-react/pull/7077))
  - Resolved regression for selecting a date ([#7130](https://github.com/patternfly/patternfly-react/pull/7130))
- **Card:**
  - Documented `CardActions` properties ([#7119](https://github.com/patternfly/patternfly-react/pull/7119))
- **Checkbox:**
  - Converted examples to TypeScript/functional components ([#7036](https://github.com/patternfly/patternfly-react/pull/7036))
- **Chip:**
  - Converted examples to TypeScript/functional components ([#7038](https://github.com/patternfly/patternfly-react/pull/7038))
- **Chip group:**
  - Added chip props back to the chip group page ([#7049](https://github.com/patternfly/patternfly-react/pull/7049))
  - Converted examples to TypeScript/functional components ([#7040](https://github.com/patternfly/patternfly-react/pull/7040))
- **Clipboard copy:**
  - Converted examples to TypeScript/functional components ([#7073](https://github.com/patternfly/patternfly-react/pull/7073))
- **Code block:**
  - Converted examples to TypeScript/Functional components ([#7086](https://github.com/patternfly/patternfly-react/pull/7086))
- **Code editor:**
  - Added support for size to fit height ([#7033](https://github.com/patternfly/patternfly-react/pull/7033))
- **Description list:**
  - Updated to support setting width of term column ([#7061](https://github.com/patternfly/patternfly-react/pull/7061))
- **Drawer:**
  - Updated resizable drawer to make it more accessible ([#7118](https://github.com/patternfly/patternfly-react/pull/7118))
  - Fixed drawer regression ([#7179](https://github.com/patternfly/patternfly-react/pull/7179))
- **Dropdown:**
  - Updated examples to show different appends ([#7095](https://github.com/patternfly/patternfly-react/pull/7095))
- **Flex layout:**
  - Fixed spacing for xl example ([#7081](https://github.com/patternfly/patternfly-react/pull/7081))
- **Form select:**
  - Added isIconSprite prop ([#7052](https://github.com/patternfly/patternfly-react/pull/7052))
- **Menu:**
  - Removed rogue scrollbar from drilldown menus ([#7070](https://github.com/patternfly/patternfly-react/pull/7070))
- **Menu toggle:**
  - Updated examples to match core ([#7089](https://github.com/patternfly/patternfly-react/pull/7089))
- **Select:**
  - Added flag to not reset on select, added event to toggle callback ([#7093](https://github.com/patternfly/patternfly-react/pull/7093))
  - Updated examples to show different appends ([#7087](https://github.com/patternfly/patternfly-react/pull/7087))
  - Made fixes to view more feature ([#7107](https://github.com/patternfly/patternfly-react/pull/7107))
- **Text area:**
  - Added isIconSprite prop ([#7052](https://github.com/patternfly/patternfly-react/pull/7052))
- **Text input:**
  - Added isIconSprite prop ([#7052](https://github.com/patternfly/patternfly-react/pull/7052))
  - Fixed newline interpolation of text input values ([#6935](https://github.com/patternfly/patternfly-react/pull/6935))
- **Time picker:**
  - Re-added ability to append to document body ([#7043](https://github.com/patternfly/patternfly-react/pull/7043))
- **Tooltip:**
  - Fixed horizontal scroll bar causing misaligned tooltip ([#7062](https://github.com/patternfly/patternfly-react/pull/7062))

### Table
- Added z-index documentation, fixed old `rowIndex` callback ([#7068](https://github.com/patternfly/patternfly-react/pull/7068))
- Made new `canCollapseAll` on collapsable rows opt-in ([#7071](https://github.com/patternfly/patternfly-react/pull/7071))

### Topology
- Added concentric layout to topology component ([#7053](https://github.com/patternfly/patternfly-react/pull/7053))
- Made topology updates found necessary for console topology upgrade ([#7028](https://github.com/patternfly/patternfly-react/pull/7028))
- Reverted topology class name changes ([#7187](https://github.com/patternfly/patternfly-react/pull/7187))

### Other
- **Chore:**
  - Updated issue template to match patternfly/patternfly ([#7111](https://github.com/patternfly/patternfly-react/pull/7111))
  - Migrated tests to React testing library ([#7020](https://github.com/patternfly/patternfly-react/pull/7020))
  - Migrated tests to React testing library ([#7032](https://github.com/patternfly/patternfly-react/pull/7032))
  - Migrated tests to React testing library ([#7031](https://github.com/patternfly/patternfly-react/pull/7031))
- **Dependencies:** 
  - Update dependency theme-patternfly-org to v0.11.9 ([#7125](https://github.com/patternfly/patternfly-react/pull/7125))
- **Documentation:**
  - Linked react testing library documentation in getting started guide ([#7110](https://github.com/patternfly/patternfly-react/pull/7110))

## 2022.03 release notes (2022-03-09)
- [@patternfly/react-catalog-view-extension@4.49.19](https://www.npmjs.com/package/@patternfly/react-catalog-view-extension/v/4.49.19)
- [@patternfly/react-charts@6.51.19](https://www.npmjs.com/package/@patternfly/react-charts/v/6.51.19)
- [@patternfly/react-code-editor@4.39.19](https://www.npmjs.com/package/@patternfly/react-code-editor/v/4.39.19)
- [@patternfly/react-core@4.198.19](https://www.npmjs.com/package/@patternfly/react-core/v/4.198.19)
- [@patternfly/react-icons@4.49.19](https://www.npmjs.com/package/@patternfly/react-icons/v/4.49.19)
- [@patternfly/react-inline-edit-extension@4.43.19](https://www.npmjs.com/package/@patternfly/react-inline-edit-extension/v/4.43.19)
- [@patternfly/react-log-viewer@4.43.19](https://www.npmjs.com/package/@patternfly/react-log-viewer/v/4.43.19)
- [@patternfly/react-styles@4.48.19](https://www.npmjs.com/package/@patternfly/react-styles/v/4.48.19)
- [@patternfly/react-table@4.67.19](https://www.npmjs.com/package/@patternfly/react-table/v/4.67.19)
- [@patternfly/react-tokens@4.50.19](https://www.npmjs.com/package/@patternfly/react-tokens/v/4.50.19)
- [@patternfly/react-topology@4.45.19](https://www.npmjs.com/package/@patternfly/react-topology/v/4.45.19)
- [@patternfly/react-virtualized-extension@4.45.19](https://www.npmjs.com/package/@patternfly/react-virtualized-extension/v/4.45.19)

### Components
- **Alert group:**
  -  Added alert group overflow support ([#6953](https://github.com/patternfly/patternfly-react/pull/6953))
- **Card:**
  - Converted examples to TypeScript and functional components ([#6954](https://github.com/patternfly/patternfly-react/pull/6954))
- **Chip:**
  - Separated chip and chip group docs ([#6981](https://github.com/patternfly/patternfly-react/pull/6981))
- **Clipboard copy:**
  - Fixed rendering comma issue in some situations ([#6971](https://github.com/patternfly/patternfly-react/pull/6971))
- **Code editor:**
  - Updated to allow for keyboard shortcut menu and added example ([#6989](https://github.com/patternfly/patternfly-react/pull/6989))
- **Flex layout:**
  - Fixed wrong property usage in an example ([#6980](https://github.com/patternfly/patternfly-react/pull/6980))
- **Form:**
  - Fixed 'filed' type in 'field group' docs ([#6988](https://github.com/patternfly/patternfly-react/pull/6988))
- **Label:**
  - Added support for editable label tooltip ([#6917](https://github.com/patternfly/patternfly-react/pull/6917))
- **Menu:**
  - Fixed so screen reader correctly announces on view more ([#6986](https://github.com/patternfly/patternfly-react/pull/6986))
  - Added a new date select demo to the composable menu demos page ([#6962](https://github.com/patternfly/patternfly-react/pull/6962))
- **Multiple file upload:**
  - Made followup updates from original pull request ([#6976](https://github.com/patternfly/patternfly-react/pull/6976))
- **Navigation:**
  - Made navigation group titles optional ([#6994](https://github.com/patternfly/patternfly-react/pull/6994))
- **Notification drawer:**
  - Updated so drawer receives focus after opening ([#6963](https://github.com/patternfly/patternfly-react/pull/6963))
- **Number input:**
  - Added demo to show how to support min/max ([#6949](https://github.com/patternfly/patternfly-react/pull/6949))
- **Select:**
  - Fixed to prevent double enter and cover additional on close cases ([#6966](https://github.com/patternfly/patternfly-react/pull/6966))
- **Tabs:**
  - Made tooltips more accessible ([#6940](https://github.com/patternfly/patternfly-react/pull/6940))
- **Tile:**
  - Added aria-selected to indicate selection state ([#6877](https://github.com/patternfly/patternfly-react/pull/6877))
- **Time picker:**
  - Removed unused `TimeOption` component and select dependencies ([#6970](https://github.com/patternfly/patternfly-react/pull/6970))
- **Toolbar:**
  - Updated to allow custom chip group content ([#6955](https://github.com/patternfly/patternfly-react/pull/6955))
  - Updated test ([#6995](https://github.com/patternfly/patternfly-react/pull/6995))

### Table
- Added table example with overflow menu action ([#6979](https://github.com/patternfly/patternfly-react/pull/6979))

### Topology
- Added basic grid layout to topology component ([#6974](https://github.com/patternfly/patternfly-react/pull/6974))
- Added mechanism to hide details at different zoom levels ([#6958](https://github.com/patternfly/patternfly-react/pull/6958))

### Other
- **Chore:**
  - Updated a11y tests, fixed a11y errors, turned on a11y coverage ([#6730](https://github.com/patternfly/patternfly-react/pull/6730))
  - Added dark theme option to integration demo app ([#6957](https://github.com/patternfly/patternfly-react/pull/6957))
  - Added React Testing Library packages, updated simple enzyme tests ([#6921](https://github.com/patternfly/patternfly-react/pull/6921))
- **Demos**
  - Made updates to use question circle icon instead of help icon in masthead demos ([#6932](https://github.com/patternfly/patternfly-react/pull/6932))
- **Deps:** 
  - Updated dependency theme-patternfly-org to v0.11.3 ([#7009](https://github.com/patternfly/patternfly-react/pull/7009))

## 2022.02 release notes (2022-02-22)
- [@patternfly/react-catalog-view-extension@4.49.5](https://www.npmjs.com/package/@patternfly/react-catalog-view-extension/v/4.49.5)
- [@patternfly/react-charts@6.51.5](https://www.npmjs.com/package/@patternfly/react-charts/v/6.51.5)
- [@patternfly/react-code-editor@4.39.5](https://www.npmjs.com/package/@patternfly/react-code-editor/v/4.39.5)
- [@patternfly/react-core@4.198.5](https://www.npmjs.com/package/@patternfly/react-core/v/4.198.5)
- [@patternfly/react-icons@4.49.5](https://www.npmjs.com/package/@patternfly/react-icons/v/4.49.5)
- [@patternfly/react-inline-edit-extension@4.43.5](https://www.npmjs.com/package/@patternfly/react-inline-edit-extension/v/4.43.5)
- [@patternfly/react-log-viewer@4.43.5](https://www.npmjs.com/package/@patternfly/react-log-viewer/v/4.43.5)
- [@patternfly/react-styles@4.48.5](https://www.npmjs.com/package/@patternfly/react-styles/v/4.48.5)
- [@patternfly/react-table@4.67.5](https://www.npmjs.com/package/@patternfly/react-table/v/4.67.5)
- [@patternfly/react-tokens@4.50.5](https://www.npmjs.com/package/@patternfly/react-tokens/v/4.50.5)
- [@patternfly/react-topology@4.45.5](https://www.npmjs.com/package/@patternfly/react-topology/v/4.45.5)
- [@patternfly/react-virtualized-extension@4.45.5](https://www.npmjs.com/package/@patternfly/react-virtualized-extension/v/4.45.5)

### Components
- **Button:**
  - Added icon only variant for progress button ([#6832](https://github.com/patternfly/patternfly-react/pull/6832))
- **Calendar month:**
  - Converted examples to TypeScript ([#6916](https://github.com/patternfly/patternfly-react/pull/6916))
- **Card:** 
  - Updated header alignment with select in demos ([#6909](https://github.com/patternfly/patternfly-react/pull/6909))
- **Charts:**
  - Updated bar chart example ([#6883](https://github.com/patternfly/patternfly-react/pull/6883))
- **Code editor:**
  - Updated to compare props and state to prevent re-renders ([#6847](https://github.com/patternfly/patternfly-react/pull/6847))
- **Description list:**
  - Added icon variant ([#6851](https://github.com/patternfly/patternfly-react/pull/6851))
- **Label:**
  - Updated editable label structure to increase click area ([#6918](https://github.com/patternfly/patternfly-react/pull/6918))
- **Menu:** 
  - Updated to account for initial drill in state ([#6870](https://github.com/patternfly/patternfly-react/pull/6870))
  - Updated to allow drilldown menu functions ([#6872](https://github.com/patternfly/patternfly-react/pull/6872))
- **Menu toggle:**
  - Added full height variation ([#6869](https://github.com/patternfly/patternfly-react/pull/6869))
- **Multiple file Upload:**
  - Added multiple file upload component ([#6906](https://github.com/patternfly/patternfly-react/pull/6906))
- **Navigation:**
  - Added navigation drilldown example and demo ([#6875](https://github.com/patternfly/patternfly-react/pull/6875))
- **Number input:**
  -  Fixed to import input group component instead ([#6850](https://github.com/patternfly/patternfly-react/pull/6850))
- **Overflow menu:**
  - Updated to ignore menu being covered in integration tests ([#6852](https://github.com/patternfly/patternfly-react/pull/6852))
- **Page:**
  - Added center alignment for page sections ([#6893](https://github.com/patternfly/patternfly-react/pull/6893))
- **Primary detail:**
  - Replaced hardcoded class with `usePageInsets` ([#6880](https://github.com/patternfly/patternfly-react/pull/6880))
- **Progress:**
  - Fixed so that NaN is not returned when max and value are zero ([#6867](https://github.com/patternfly/patternfly-react/pull/6867))
- **Select:**
  - Fixed to allow un-favorite using keyboard ([#6931](https://github.com/patternfly/patternfly-react/pull/6931))
  - Fixed so that view more button click does not close the menu in React 16 ([#6922](https://github.com/patternfly/patternfly-react/pull/6922))
  - Fixed Footer keyboard bugs ([#6844](https://github.com/patternfly/patternfly-react/pull/6844))
  - Removed logic from default `inputAutoComplete` ([#6873](https://github.com/patternfly/patternfly-react/pull/6873))
- **Text input group:**
  - Added ability to do typehead with text input group, added to autocomplete demo ([#6868](https://github.com/patternfly/patternfly-react/pull/6868))
- **Time picker:** 
  - Updated to apply `includeSeconds` when making options ([#6865](https://github.com/patternfly/patternfly-react/pull/6865))
  - Removed automatic validation from `onChange` event ([#6884](https://github.com/patternfly/patternfly-react/pull/6884))
- **Tooltip:**
  - Added diagonal tooltip positioning ([#6887](https://github.com/patternfly/patternfly-react/pull/6887))
- **Toolbar:**
  - Updated toolbar examples and demos to use search input ([#6728](https://github.com/patternfly/patternfly-react/pull/6728))
  - Fixed documentation build error ([#6937](https://github.com/patternfly/patternfly-react/pull/6937))

  ### Catalog view extension
  - Updated so `VerticalTabsTab` takes a custom base component ([#6901](https://github.com/patternfly/patternfly-react/pull/6901))

### Table
- **Table:**
  - Added striping ([#6886](https://github.com/patternfly/patternfly-react/pull/6886))
  - Moved expand/collapse all from toolbar to table header in demo ([#6914](https://github.com/patternfly/patternfly-react/pull/6914))
  - Updated to use `colgroup` and nested `cols` in composable table ([#6724](https://github.com/patternfly/patternfly-react/pull/6724))

### Topology
  - Added topology component styles ([#6839](https://github.com/patternfly/patternfly-react/pull/6839))
  - Reverted removal of NodeShape.circle, allowed for either circle or ellipse ([#6960](https://github.com/patternfly/patternfly-react/pull/6960))

### Other
- **Chore:**
  - Enabled windows to hot refresh with changes on md files ([#6856](https://github.com/patternfly/patternfly-react/pull/6856))
- **Demo:**
  - Fixed filterable empty state table demo to remove checkbox when no rows ([#6898](https://github.com/patternfly/patternfly-react/pull/6898))
- **Deps:**
  - Updated dependency theme-patternfly-org to v0.10.3 ([#6941](https://github.com/patternfly/patternfly-react/pull/6941))
  - Bumped Victory dependency for performance improvements ([#6915](https://github.com/patternfly/patternfly-react/pull/6915))
- **Docs:**
  - Added details to upgrade guide ([#6911](https://github.com/patternfly/patternfly-react/pull/6911))
  
## 2022.01 release notes (2022-01-25)
- [@patternfly/react-catalog-view-extension@4.43.14](https://www.npmjs.com/package/@patternfly/react-catalog-view-extension/v/4.43.14)
- [@patternfly/react-charts@6.45.14](https://www.npmjs.com/package/@patternfly/react-charts/v/6.45.14)
- [@patternfly/react-code-editor@4.33.14](https://www.npmjs.com/package/@patternfly/react-code-editor/v/4.33.14)
- [@patternfly/react-core@4.192.14](https://www.npmjs.com/package/@patternfly/react-core/v/4.192.14)
- [@patternfly/react-icons@4.43.14](https://www.npmjs.com/package/@patternfly/react-icons/v/4.43.14)
- [@patternfly/react-inline-edit-extension@4.37.14](https://www.npmjs.com/package/@patternfly/react-inline-edit-extension/v/4.37.14)
- [@patternfly/react-log-viewer@4.37.14](https://www.npmjs.com/package/@patternfly/react-log-viewer/v/4.37.14)
- [@patternfly/react-styles@4.42.14](https://www.npmjs.com/package/@patternfly/react-styles/v/4.42.14)
- [@patternfly/react-table@4.61.14](https://www.npmjs.com/package/@patternfly/react-table/v/4.61.14)
- [@patternfly/react-tokens@4.44.14](https://www.npmjs.com/package/@patternfly/react-tokens/v/4.44.14)
- [@patternfly/react-topology@4.39.14](https://www.npmjs.com/package/@patternfly/react-topology/v/4.39.14)
- [@patternfly/react-virtualized-extension@4.39.14](https://www.npmjs.com/package/@patternfly/react-virtualized-extension/v/4.39.14)

### Components
- **About modal:**
  - Converted examples to TypeScript/functional components ([#6714](https://github.com/patternfly/patternfly-react/pull/6714))
- **Accordion:**
  - Converted examples to Typescript/functional components ([#6716](https://github.com/patternfly/patternfly-react/pull/6716))
- **Action list:**
  - Converted examples to Typescript/functional components ([#6718](https://github.com/patternfly/patternfly-react/pull/6718))
- **Application launcher:**
  - Converted examples to Typescript ([#6834](https://github.com/patternfly/patternfly-react/pull/6834))
- **Backdrop:**
  - Converted examples to typescript ([#6791](https://github.com/patternfly/patternfly-react/pull/6791))
- **Background image:**
  - Converted examples to typescript ([#6791](https://github.com/patternfly/patternfly-react/pull/6791))
- **Back to top:**
  - Converted examples to typescript ([#6791](https://github.com/patternfly/patternfly-react/pull/6791))
- **Badge:**
  - Converted examples to typescript ([#6791](https://github.com/patternfly/patternfly-react/pull/6791))
- **Banner:**
  - Converted examples to typescript ([#6791](https://github.com/patternfly/patternfly-react/pull/6791))
- **Brand:**
  - Converted examples to typescript ([#6791](https://github.com/patternfly/patternfly-react/pull/6791))
- **Breadcrumb:**
  - Converted examples to typescript ([#6791](https://github.com/patternfly/patternfly-react/pull/6791))
- **Button:**
  - Added demo for progress button completion state ([#6738](https://github.com/patternfly/patternfly-react/pull/6738))
  - Converted examples to Typescript ([#6796](https://github.com/patternfly/patternfly-react/pull/6796))
- **Clipboard copy:**
  - Fixed to clear timer on unmount ([#6708](https://github.com/patternfly/patternfly-react/pull/6708))
- **DataList:**
  - Added better comments for `isChecked` and `checked` props ([#6803](https://github.com/patternfly/patternfly-react/pull/6803))
- **Date picker:**
  - Updated empty state validation and added onblur event ([#6822](https://github.com/patternfly/patternfly-react/pull/6822))
- **Description list:**
  - Added option to fill columns first ([#6736](https://github.com/patternfly/patternfly-react/pull/6736))
- **Dropdown:**
  - Added plain-text variant support ([#6721](https://github.com/patternfly/patternfly-react/pull/6721))
- **Expandable section:**
  - Added indented variation ([#6763](https://github.com/patternfly/patternfly-react/pull/6763))
- **Jump links:**
  - Fixed scrollspy breakpoints are incorrect if offset prop changes ([#6750](https://github.com/patternfly/patternfly-react/pull/6750))
  - Updated jump links demo to allow for horizontal display ([#6731](https://github.com/patternfly/patternfly-react/pull/6731))
- **Label:**
  - Made editable label more screen reader accessible ([#6472](https://github.com/patternfly/patternfly-react/pull/6472))
- **Menu:**
  - Added composable dropdown demo, converted all composable menu demos to typescript ([#6807](https://github.com/patternfly/patternfly-react/pull/6807))
- **Modal:**
  - Added optional OUIA id for close button ([#6732](https://github.com/patternfly/patternfly-react/pull/6732))
  - Updated modal with form example ([#6813](https://github.com/patternfly/patternfly-react/pull/6813))
- **Number input:**
  - Updated to call onMinus/onPlus on arrow-up/down key press ([#6764](https://github.com/patternfly/patternfly-react/pull/6764))
- **Overflow menu:**
  - Updated to pass `HTMLDivElements` props to group and control divs ([#6674](https://github.com/patternfly/patternfly-react/pull/6674))
- **Page:**
  - Added resize observer and Toolbar/PageHeaderTools responsiveness based on page width ([#6827](https://github.com/patternfly/patternfly-react/pull/6827))
- **Pagination:**
  - Updated to allow setting plural title in navigation ([#6712](https://github.com/patternfly/patternfly-react/pull/6712))
- **Select:**
  - Changed typeahead autocomplete when input is user ([#6846](https://github.com/patternfly/patternfly-react/pull/6846))
  - Fixed select crash ([#6678](https://github.com/patternfly/patternfly-react/pull/6678))
  - Fixed dot next to the spinner in grouped view more variant ([#6831](https://github.com/patternfly/patternfly-react/pull/6831))
  - Fixed footer keyboard bugs ([#6844](https://github.com/patternfly/patternfly-react/pull/6844))
  - Updated typeahead select children when any option attribute changes ([#6747](https://github.com/patternfly/patternfly-react/pull/6747))
- **Slider:**
  - Added option to add tooltip over thumb ([#6624](https://github.com/patternfly/patternfly-react/pull/6624))
- **Tabs:**
  - Added demo for Tabs within Modals ([#6777](https://github.com/patternfly/patternfly-react/pull/6777))
  - Added gray tabs demo (patternfly#6810) ([#6811](https://github.com/patternfly/patternfly-react/pull/6811))
  - Updated to allow href navigation from tabs ([#6755](https://github.com/patternfly/patternfly-react/pull/6755))
  - Updated to enable tabs scroll button for small window ([#6784](https://github.com/patternfly/patternfly-react/pull/6784))
  - Added table demo ([#6692](https://github.com/patternfly/patternfly-react/pull/6692))
- **Text input group:**
  - Addressed various issues ([#6774](https://github.com/patternfly/patternfly-react/pull/6774))
  - Converted examples and demos to Typescript ([#6704](https://github.com/patternfly/patternfly-react/pull/6704))
- **Time picker:**
  - Added min/max time constraints ([#6681](https://github.com/patternfly/patternfly-react/pull/6681))
  - Updated to allow for seconds via new prop ([#6769](https://github.com/patternfly/patternfly-react/pull/6769))
  - Updated to auto-set direction based on space ([#6825](https://github.com/patternfly/patternfly-react/pull/6825))
- **Toggle group:**
  - Added support for disabling all items under the parent ([#6700](https://github.com/patternfly/patternfly-react/pull/6700))
- **Toolbar:**
  - Added demo with sticky toolbar ([#6729](https://github.com/patternfly/patternfly-react/pull/6729))
  - Added support for customizing text in ToolbarChipGroupContent ([#6694](https://github.com/patternfly/patternfly-react/pull/6694))
- **Truncate:**
  - Added truncate component ([#6713](https://github.com/patternfly/patternfly-react/pull/6713))

### Log viewer
- Updated text selection behavior ([#6746](https://github.com/patternfly/patternfly-react/pull/6746))
- Fixed the issue that scrollbar could compress the content of the logs ([#6702](https://github.com/patternfly/patternfly-react/pull/6702))
- Removed footer classname ([#6759](https://github.com/patternfly/patternfly-react/pull/6759))

### Table
- Added table nested in a table example ([#6727](https://github.com/patternfly/patternfly-react/pull/6727))
- Updated to allow a generic to be passed for cell props ([#6691](https://github.com/patternfly/patternfly-react/pull/6691))
- Fixed action example ([#6800](https://github.com/patternfly/patternfly-react/pull/6800))
- Updated to narrow logic for preventing event default on key down ([#6744](https://github.com/patternfly/patternfly-react/pull/6744))
- Updated clickable area for checks and radios ([#6754](https://github.com/patternfly/patternfly-react/pull/6754))
- Fixed row index in tree table examples ([#6830](https://github.com/patternfly/patternfly-react/pull/6830))

### Topology
- Fixed state update on an unmounted component ([#6779](https://github.com/patternfly/patternfly-react/pull/6779))
- Updated screen reader className to latest in TopologyControlBar ([#6739](https://github.com/patternfly/patternfly-react/pull/6739))
- Added component display names to topology HOC/wrappers ([#6829](https://github.com/patternfly/patternfly-react/pull/6829))
- Updated to not trigger mobx update when node dimension or position doesn't change ([#6801](https://github.com/patternfly/patternfly-react/pull/6801))

### Other
- **Chore:**
  - Promoted beta components ([#6808](https://github.com/patternfly/patternfly-react/pull/6808))
  - fixed overflow menu integration test by ignoring menu being covered in tests ([#6852](https://github.com/patternfly/patternfly-react/pull/6852))
- **Demos:**
  - Added a password generator demo ([#6725](https://github.com/patternfly/patternfly-react/pull/6725))
- **Dependencies:**
  - Updated dependency theme-patternfly-org to v0.9.6 ([#6821](https://github.com/patternfly/patternfly-react/pull/6821))
- **Documentation:**
  - Fixed broken theme-patternfly-org link ([#6726](https://github.com/patternfly/patternfly-react/pull/6726))
  - Added note to contributing guidelines for windows users using lint ([#6812](https://github.com/patternfly/patternfly-react/pull/6812))

## 2021.16 release notes (2021-12-13)
- [@patternfly/react-catalog-view-extension@4.32.1](https://www.npmjs.com/package/@patternfly/react-catalog-view-extension/v/4.32.1)
- [@patternfly/react-charts@6.34.1](https://www.npmjs.com/package/@patternfly/react-charts/v/6.34.1)
- [@patternfly/react-code-editor@4.22.1](https://www.npmjs.com/package/@patternfly/react-code-editor/v/4.22.1)
- [@patternfly/react-core@4.181.1](https://www.npmjs.com/package/@patternfly/react-core/v/4.181.1)
- [@patternfly/react-icons@4.32.1](https://www.npmjs.com/package/@patternfly/react-icons/v/4.32.1)
- [@patternfly/react-inline-edit-extension@4.26.1](https://www.npmjs.com/package/@patternfly/react-inline-edit-extension/v/4.26.1)
- [@patternfly/react-log-viewer@4.26.1](https://www.npmjs.com/package/@patternfly/react-log-viewer/v/4.26.1)
- [@patternfly/react-styles@4.31.1](https://www.npmjs.com/package/@patternfly/react-styles/v/4.31.1)
- [@patternfly/react-table@4.50.1](https://www.npmjs.com/package/@patternfly/react-table/v/4.50.1)
- [@patternfly/react-tokens@4.33.1](https://www.npmjs.com/package/@patternfly/react-tokens/v/4.33.1)
- [@patternfly/react-topology@4.28.1](https://www.npmjs.com/package/@patternfly/react-topology/v/4.28.1)
- [@patternfly/react-virtualized-extension@4.28.1](https://www.npmjs.com/package/@patternfly/react-virtualized-extension/v/4.28.1)

### Components
- **Action list:**
  - Added support for classname ([#6647](https://github.com/patternfly/patternfly-react/pull/6647))
- **Alert:**
  -  Allowed all heading levels for title ([#6628](https://github.com/patternfly/patternfly-react/pull/6628))
- **Alert:**
  - Converted examples to functional with typescript ([#6634](https://github.com/patternfly/patternfly-react/pull/6634))
- **Card:**
  - Added disabled card and cleaned up props ([#6659](https://github.com/patternfly/patternfly-react/pull/6659))
  -  Updated card demos to use select instead of dropdown ([#6639](https://github.com/patternfly/patternfly-react/pull/6639))
- **Context selector:**
  - Added support for focus trap to be made inactive ([#6638](https://github.com/patternfly/patternfly-react/pull/6638))
- **Date picker:**
  - Updated to allow date picker users to open the calendar programatically ([#6632](https://github.com/patternfly/patternfly-react/pull/6632))
- **Drag drop:**
  - Fixed to not overwrite children class with droppable class ([#6672](https://github.com/patternfly/patternfly-react/pull/6672))
- **Dropdown:**
  - Added toggle variants ([#6651](https://github.com/patternfly/patternfly-react/pull/6651))
- **Dual list selector:**
  - Added composable tree example ([#6652](https://github.com/patternfly/patternfly-react/pull/6652))
- **Menu toggle:**
  - Added plain with text variant ([#6627](https://github.com/patternfly/patternfly-react/pull/6627))
- **Pagination:**
  - Updated `toggleTemplate` description to include `ofWord` prop ([#6622](https://github.com/patternfly/patternfly-react/pull/6622))
- **Popover:**
  - Added alert variants ([#6664](https://github.com/patternfly/patternfly-react/pull/6664))
  - Forwarded focus to close button with voice over click ([#6660](https://github.com/patternfly/patternfly-react/pull/6660))
- **Select:**
  - Added ability to persist filtered children state ([#6670](https://github.com/patternfly/patternfly-react/pull/6670))
  - Fixed no autocomplete for typeahead select ([#6623](https://github.com/patternfly/patternfly-react/pull/6623))
- **Slider:**
  - Fixed examples with custom steps and input ([#6662](https://github.com/patternfly/patternfly-react/pull/6662))
  - Aded input resizing ([#6612](https://github.com/patternfly/patternfly-react/pull/6612))
- **Tabs:**
  - Added nested Tabs demo ([#6645](https://github.com/patternfly/patternfly-react/pull/6645))
- **Text input group:**
  - Added auto-complete search demo ([#6661](https://github.com/patternfly/patternfly-react/pull/6661))
- **Tile:**
  - Fixed selecting tile in tile demo ([#6653](https://github.com/patternfly/patternfly-react/pull/6653))
- **Toolbar:**
  - Fixed toolbar links under props in jump links ([#6675](https://github.com/patternfly/patternfly-react/pull/6675))

### Table
- Rewrote examples using TypeScript, hooks. Row data decoupled from PF structure. Deduplicated state ([#6168](https://github.com/patternfly/patternfly-react/pull/6168))

### Other
- **Chore:** 
  - Made OUIA counter update for node/SSR/NextJS ([#6668](https://github.com/patternfly/patternfly-react/pull/6668))
  - Updated react and react-dom types ([#6583](https://github.com/patternfly/patternfly-react/pull/6583))
  - Updated to use JSDoc comments for all deprecations ([#6613](https://github.com/patternfly/patternfly-react/pull/6613))
- **Deps:** Update dependency theme-patternfly-org to v0.8.12 ([#6640](https://github.com/patternfly/patternfly-react/pull/6640))

## 2021.15 release notes (2021-11-17)
- [@patternfly/react-catalog-view-extension@4.26.4](https://www.npmjs.com/package/@patternfly/react-catalog-view-extension/v/4.26.4)
- [@patternfly/react-charts@6.28.4](https://www.npmjs.com/package/@patternfly/react-charts/v/6.28.4)
- [@patternfly/react-code-editor@4.16.4](https://www.npmjs.com/package/@patternfly/react-code-editor/v/4.16.4)
- [@patternfly/react-core@4.175.4](https://www.npmjs.com/package/@patternfly/react-core/v/4.175.4)
- [@patternfly/react-icons@4.26.4](https://www.npmjs.com/package/@patternfly/react-icons/v/4.26.4)
- [@patternfly/react-inline-edit-extension@4.20.4](https://www.npmjs.com/package/@patternfly/react-inline-edit-extension/v/4.20.4)
- [@patternfly/react-log-viewer@4.20.4](https://www.npmjs.com/package/@patternfly/react-log-viewer/v/4.20.4)
- [@patternfly/react-styles@4.25.4](https://www.npmjs.com/package/@patternfly/react-styles/v/4.25.4)
- [@patternfly/react-table@4.44.4](https://www.npmjs.com/package/@patternfly/react-table/v/4.44.4)
- [@patternfly/react-tokens@4.27.4](https://www.npmjs.com/package/@patternfly/react-tokens/v/4.27.4)
- [@patternfly/react-topology@4.22.4](https://www.npmjs.com/package/@patternfly/react-topology/v/4.22.4)
- [@patternfly/react-virtualized-extension@4.22.4](https://www.npmjs.com/package/@patternfly/react-virtualized-extension/v/4.22.4)

### Components
- **About modal:**
  - Updated to allow disabling FocusTrap ([#6509](https://github.com/patternfly/patternfly-react/pull/6509))
- **Banner:**
  - Updated to forward props ([#6511](https://github.com/patternfly/patternfly-react/pull/6511))
- **Card:**
  - Added hoverable, selectable and selected-raised variant ([#6565](https://github.com/patternfly/patternfly-react/pull/6565))
- **Context selector:**
  - Added support for context selector items as links ([#6554](https://github.com/patternfly/patternfly-react/pull/6554))
- **Dropdown:**
  - Forward custom props for DropdownGroup component to the DOM ([#6521](https://github.com/patternfly/patternfly-react/pull/6521))
- **Dual list selector:**
  - Fixed to account for duplicate folders ([#6499](https://github.com/patternfly/patternfly-react/pull/6499))
- **File upload:**
  - Improved events in the file upload ([#6139](https://github.com/patternfly/patternfly-react/pull/6139))
  - Downgraded react-dropzone back to 9.0.0 to avoid a breaking type change, fixed behavior regressions ([#6610](https://github.com/patternfly/patternfly-react/pull/6610))
- **Jump links:** 
  - Fixed to always set clicked item as active ([#6542](https://github.com/patternfly/patternfly-react/pull/6542))
- **Menu:**
  - Fixed to stop passing disableHover to DrilldownMenu DOM ([#6571](https://github.com/patternfly/patternfly-react/pull/6571))
  - Fixed to allow maxMenuHeight with scrollable ([#6608](https://github.com/patternfly/patternfly-react/pull/6608))
- **Modal:**
  - Added example of modal with form ([#6557](https://github.com/patternfly/patternfly-react/pull/6557))
- **Navigation:**
  - Added example for third level nested expansion ([#6564](https://github.com/patternfly/patternfly-react/pull/6564))
  - Fixed nav flyout in page bug ([#6562](https://github.com/patternfly/patternfly-react/pull/6562))
- **Pagination:**
  - Fixed to allow ofWord to be used in the PaginationOptionsMenu for the word `of` for localization purposes ([#6500](https://github.com/patternfly/patternfly-react/pull/6500))
  - Added indeterminate count ([#6556](https://github.com/patternfly/patternfly-react/pull/6556))
- **Panel:**
  - Added panel component ([#6570](https://github.com/patternfly/patternfly-react/pull/6570))
- **Popover:**
  - Fixed to allow user to change heading level ([#6549](https://github.com/patternfly/patternfly-react/pull/6549))
- **Text input:**
  - Fixed to use resizeObserver to trigger trimLeft calculation ([#6529](https://github.com/patternfly/patternfly-react/pull/6529))
- **Text input group:** 
  - Updated examples to use revised onChange prop ([#6588](https://github.com/patternfly/patternfly-react/pull/6588))
  - Added text input group demo ([#6581](https://github.com/patternfly/patternfly-react/pull/6581))
  - Added requested text input group props ([#6563](https://github.com/patternfly/patternfly-react/pull/6563))
- **Tooltip:**
  - Fixed positioning issue with dynamic tooltip content ([#6598](https://github.com/patternfly/patternfly-react/pull/6598))

### Access console extension
- Updated to use object type select options values in order to not mix displayed text with the option keys ([#6496](https://github.com/patternfly/patternfly-react/pull/6496))

### Charts
- Added resize observer and examples ([#6528](https://github.com/patternfly/patternfly-react/pull/6528))

### Code editor
- Added resize observer to code editor ([#6547](https://github.com/patternfly/patternfly-react/pull/6547))
- Improved type-safety for onChange prop ([#6535](https://github.com/patternfly/patternfly-react/pull/6535))
- Enhanced type correctness of code editor ([#6579](https://github.com/patternfly/patternfly-react/pull/6579))

### Log viewer
- Added support ANSI color ([#6519](https://github.com/patternfly/patternfly-react/pull/6519))
- Added support for wrap text ([#6576](https://github.com/patternfly/patternfly-react/pull/6576))
- Updated search function ([#6592](https://github.com/patternfly/patternfly-react/pull/6592))

### Table
- Added sticky columns and nested headers to composable table([#6538](https://github.com/patternfly/patternfly-react/pull/6538))
- Added support to set default sort direction ([#6544](https://github.com/patternfly/patternfly-react/pull/6544))

### Topology
- Added option to hide topology connector menu on drag end ([#6522](https://github.com/patternfly/patternfly-react/pull/6522))

### Other
- **Demos:**
  - Added date/time picker demo ([#6545](https://github.com/patternfly/patternfly-react/pull/6545))
- **Deps:**
  - Update dependency theme-patternfly-org to v0.8.7 ([#6584](https://github.com/patternfly/patternfly-react/pull/6584))

## 2021.14 release notes (2021-10-26)
- [@patternfly/react-catalog-view-extension@4.19.8](https://www.npmjs.com/package/@patternfly/react-catalog-view-extension/v/4.19.8)
- [@patternfly/react-charts@6.21.8](https://www.npmjs.com/package/@patternfly/react-charts/v/6.21.8)
- [@patternfly/react-code-editor@4.9.8](https://www.npmjs.com/package/@patternfly/react-code-editor/v/4.9.8)
- [@patternfly/react-core@4.168.8](https://www.npmjs.com/package/@patternfly/react-core/v/4.168.8)
- [@patternfly/react-icons@4.19.8](https://www.npmjs.com/package/@patternfly/react-icons/v/4.19.8)
- [@patternfly/react-inline-edit-extension@4.13.8](https://www.npmjs.com/package/@patternfly/react-inline-edit-extension/v/4.13.8)
- [@patternfly/react-log-viewer@4.13.8](https://www.npmjs.com/package/@patternfly/react-log-viewer/v/4.13.8)
- [@patternfly/react-styles@4.18.8](https://www.npmjs.com/package/@patternfly/react-styles/v/4.18.8)
- [@patternfly/react-table@4.37.8](https://www.npmjs.com/package/@patternfly/react-table/v/4.37.8)
- [@patternfly/react-tokens@4.20.8](https://www.npmjs.com/package/@patternfly/react-tokens/v/4.20.8)
- [@patternfly/react-topology@4.15.8](https://www.npmjs.com/package/@patternfly/react-topology/v/4.15.8)
- [@patternfly/react-virtualized-extension@4.15.8](https://www.npmjs.com/package/@patternfly/react-virtualized-extension/v/4.15.8)

### Components
- **Card:**
  - Added accordion and trend demos ([#6451](https://github.com/patternfly/patternfly-react/pull/6451))
  - Updated horizontal grid card demo ([#6448](https://github.com/patternfly/patternfly-react/pull/6448))
- **Description list:**
  - Updated DescriptionListGroup to forward props to DOM ([#6466](https://github.com/patternfly/patternfly-react/pull/6466))
- **Dropdown:**
  - Added event to onToggle prop definition of KebabToggle ([#6490](https://github.com/patternfly/patternfly-react/pull/6490))
- **Dual list selector:**
  - Updated to account for duplicate folders ([#6499](https://github.com/patternfly/patternfly-react/pull/6499))
  - Added disabled flag ([#6442](https://github.com/patternfly/patternfly-react/pull/6442))
- **Form select:**
  - Fixed format for FormSelectOption isPlaceholder doc text ([#6427](https://github.com/patternfly/patternfly-react/pull/6427))
- **Label:**
  - Added compact label ([#6448](https://github.com/patternfly/patternfly-react/pull/6448))
  - Updated label's close button aria-label ([#6475](https://github.com/patternfly/patternfly-react/pull/6475))
- **Menu:**
  - Added isPlain and isScrollable props ([#6440](https://github.com/patternfly/patternfly-react/pull/6440))
- **Modal:**
  - Cleaned up jest tests ([#6489](https://github.com/patternfly/patternfly-react/pull/6489))
- **Progress:**
  - Added demos ([#6479](https://github.com/patternfly/patternfly-react/pull/6479))
  - Updated to allow node titles ([#6470](https://github.com/patternfly/patternfly-react/pull/6470))
- **Progress stepper:** 
  - Added help text flag ([#6439](https://github.com/patternfly/patternfly-react/pull/6439))
- **Select:**
  - Added placeholder style ([#6469](https://github.com/patternfly/patternfly-react/pull/6469))
  - Updated to allow multi-typeahead create with custom options ([#6467](https://github.com/patternfly/patternfly-react/pull/6467))
  - Made SelectOptionProp optional  ([#6503](https://github.com/patternfly/patternfly-react/pull/6503))
- **Tabs:**
  - Added support for tab content body with padding, added tabs open and secondary tabs demos ([#6484](https://github.com/patternfly/patternfly-react/pull/6484))
- **Text input group:**
  - Added text input group component ([#6482](https://github.com/patternfly/patternfly-react/pull/6482))
- **Toolbar:**
  - Added sticky top modifier to toolbar ([#6447](https://github.com/patternfly/patternfly-react/pull/6447))
- **Tree view:**
  - Added memoization and test demo ([#6362](https://github.com/patternfly/patternfly-react/pull/6362))
- **Wizard:**
  - Changed wizard toggle and wizard toggle item to span tags ([#6428](https://github.com/patternfly/patternfly-react/pull/6428))
  - Updated docs for using WizardContextConsumer ([#6492](https://github.com/patternfly/patternfly-react/pull/6492))

### Access console extension
-  Updated to accept random children in AccessConsole component ([#6374](https://github.com/patternfly/patternfly-react/pull/6374))

### Log viewer extension
- Fixed resizing problem ([#6459](https://github.com/patternfly/patternfly-react/pull/6459))

### React tokens
- Added check for no matching var to avoid infinite loop ([#6502](https://github.com/patternfly/patternfly-react/pull/6502))
- Fixed some values by reading variables last ([#6418](https://github.com/patternfly/patternfly-react/pull/6418))

### Table
- Updated to account for `disableSelection` in `areAllRowsSelected` method of legacy table ([#6437](https://github.com/patternfly/patternfly-react/pull/6437))
- Fixed table docs missing import ([#6438](https://github.com/patternfly/patternfly-react/pull/6438))

### Other
- **Chore**
  - Promoted beta components, cleaned up unused imports ([#6491](https://github.com/patternfly/patternfly-react/pull/6491))
  - Added .eslintignore items and bumped linting packages ([#6420](https://github.com/patternfly/patternfly-react/pull/6420))
  - Added transformer package ([#6507](https://github.com/patternfly/patternfly-react/pull/6507))
  - Published transformer in patternfly org ([#6506](https://github.com/patternfly/patternfly-react/pull/6506))
  - Changed transformer cjs package to private ([#6515](https://github.com/patternfly/patternfly-react/pull/6515))
  - Moved to GitHub actions ([#6399](https://github.com/patternfly/patternfly-react/pull/6399))
- **Deps:**
  - Updated dependency theme-patternfly-org to v0.7.13 ([#6486](https://github.com/patternfly/patternfly-react/pull/6486))
  - Updated jest to v27 ([#6457](https://github.com/patternfly/patternfly-react/pull/6457))
- **Docs:**
  - Updated react-core readme ([#6505](https://github.com/patternfly/patternfly-react/pull/6505))

### PF3
- **Chore:**
Replaced recompose with react-recompose ([#6429](https://github.com/patternfly/patternfly-react/pull/6429))

## 2021.13 release notes (2021-10-13)
- [@patternfly/react-catalog-view-extension@4.13.18](https://www.npmjs.com/package/@patternfly/react-catalog-view-extension/v/4.13.18)
- [@patternfly/react-charts@6.15.32](https://www.npmjs.com/package/@patternfly/react-charts/v/6.15.32)
- [@patternfly/react-code-editor@4.3.85](https://www.npmjs.com/package/@patternfly/react-code-editor/v/4.3.85)
- [@patternfly/react-core@4.162.3](https://www.npmjs.com/package/@patternfly/react-core/v/4.162.3)
- [@patternfly/react-icons@4.13.1](https://www.npmjs.com/package/@patternfly/react-icons/v/4.13.1)
- [@patternfly/react-inline-edit-extension@4.7.109](https://www.npmjs.com/package/@patternfly/react-inline-edit-extension/v/4.7.109)
- [@patternfly/react-log-viewer@4.7.21](https://www.npmjs.com/package/@patternfly/react-log-viewer/v/4.7.21)
- [@patternfly/react-styles@4.12.5](https://www.npmjs.com/package/@patternfly/react-styles/v/4.12.5)
- [@patternfly/react-table@4.31.8](https://www.npmjs.com/package/@patternfly/react-table/v/4.31.8)
- [@patternfly/react-tokens@4.14.1](https://www.npmjs.com/package/@patternfly/react-tokens/v/4.14.1)
- [@patternfly/react-topology@4.9.104](https://www.npmjs.com/package/@patternfly/react-topology/v/4.9.104)
- [@patternfly/react-virtualized-extension@4.9.74](https://www.npmjs.com/package/@patternfly/react-virtualized-extension/v/4.9.74)

### Components
- **Card:**
  - Added utilization card demos ([#6307](https://github.com/patternfly/patternfly-react/pull/6307))
  - Added nested card demo ([#6391](https://github.com/patternfly/patternfly-react/pull/6391))
- **Drag and drop:**
  - Consumed core classes ([#6377](https://github.com/patternfly/patternfly-react/pull/6377))
  - Removed React.createPortal, added noWrap ([#6328](https://github.com/patternfly/patternfly-react/pull/6328))
- **Drawer:**
  - Removed duplicate example from drawer (#6348) ([#6397](https://github.com/patternfly/patternfly-react/pull/6397))
- **Dual list selector:**
  - Introduced composable example and drag/drop demo ([#6369](https://github.com/patternfly/patternfly-react/pull/6369))
- **Grid layout:**
  - Fixed tests for size offsets of GridItem ([#6373](https://github.com/patternfly/patternfly-react/pull/6373))
- **Jump links:**
  - Added toggle text ([#6347](https://github.com/patternfly/patternfly-react/pull/6347))
- **Menu:**
  - Added options menu demo using menu ([#6380](https://github.com/patternfly/patternfly-react/pull/6380))
- **Navigation:**
  - Added flyout with menu components ([#6416](https://github.com/patternfly/patternfly-react/pull/6416))
  - Added flyout onMouseOver logic ([#6325](https://github.com/patternfly/patternfly-react/pull/6325))
- **Page:**
  - Updated examples and demos to use masthead ([#6388](https://github.com/patternfly/patternfly-react/pull/6388))
  - Updated horizontal nav example to not be forced stacked ([#6402](https://github.com/patternfly/patternfly-react/pull/6402))
- **Progress stepper:**
  - Added progress stepper component ([#6339](https://github.com/patternfly/patternfly-react/pull/6339))
- **Select:**
  - Added support for right aligned menu ([#6395](https://github.com/patternfly/patternfly-react/pull/6395))
  - Removed unused checkbox import ([#6389](https://github.com/patternfly/patternfly-react/pull/6389))
- **Sidebar:**
  - Fixed sidebar docs ([#6313](https://github.com/patternfly/patternfly-react/pull/6313))
  - Added tabindex to scrollable examples ([#6378](https://github.com/patternfly/patternfly-react/pull/6378))
- **TreeView:**
  - Fixed so isExpanded overrides defaultExpanded ([#6326](https://github.com/patternfly/patternfly-react/pull/6326))
  - Fixed to allow onSelect to prevent the default behavior of toggling node collapse ([#6351](https://github.com/patternfly/patternfly-react/pull/6351))
- **Tabs:**
  - Added support for expandable vertical tabs ([#6342](https://github.com/patternfly/patternfly-react/pull/6342))
- **Wizard:**
  - Updated aria-current on wizard steps ([#6392](https://github.com/patternfly/patternfly-react/pull/6392))

### Catalog view extension 
- Replaced node-sass to allow building on node16 ([#6398](https://github.com/patternfly/patternfly-react/pull/6398))

### Charts
- Added custom labels example for bullet chart ([#6356](https://github.com/patternfly/patternfly-react/pull/6356))
- Added custom stroke color example ([#6354](https://github.com/patternfly/patternfly-react/pull/6354))

### Log viewer extension
- Fixed to accurately estimate row height ([#6387](https://github.com/patternfly/patternfly-react/pull/6387))
- Improved log viewer performance ([#6358](https://github.com/patternfly/patternfly-react/pull/6358))

### Table
- Added toolbar sort demos ([#6353](https://github.com/patternfly/patternfly-react/pull/6353))
- Fixed various bugs ([#6338](https://github.com/patternfly/patternfly-react/pull/6338))

### Tokens
- Parsed var(--pf, initialValue) ([#6408](https://github.com/patternfly/patternfly-react/pull/6408))

### Other
- **Chore:**
  - Pruned integration tests ([#6345](https://github.com/patternfly/patternfly-react/pull/6345))
  - Improved cypress performance ([#6340](https://github.com/patternfly/patternfly-react/pull/6340))
- **Deps:**
  - Updated dependency theme-patternfly-org to v0.7.8 ([#6403](https://github.com/patternfly/patternfly-react/pull/6403))

## 2021.12 release notes (2021-09-15)
- [@patternfly/react-catalog-view-extension@4.12.74](https://www.npmjs.com/package/@patternfly/react-catalog-view-extension/v/4.12.74)
- [@patternfly/react-charts@6.15.23](https://www.npmjs.com/package/@patternfly/react-charts/v/6.15.23)
- [@patternfly/react-code-editor@4.3.61](https://www.npmjs.com/package/@patternfly/react-code-editor/v/4.3.61)
- [@patternfly/react-core@4.157.3](https://www.npmjs.com/package/@patternfly/react-core/v/4.157.3)
- [@patternfly/react-icons@4.11.17](https://www.npmjs.com/package/@patternfly/react-icons/v/4.11.17)
- [@patternfly/react-inline-edit-extension@4.7.84](https://www.npmjs.com/package/@patternfly/react-inline-edit-extension/v/4.7.84)
- [@patternfly/react-log-viewer@4.6.14](https://www.npmjs.com/package/@patternfly/react-log-viewer/v/4.6.14)
- [@patternfly/react-styles@4.11.16](https://www.npmjs.com/package/@patternfly/react-styles/v/4.11.16)
- [@patternfly/react-table@4.30.3](https://www.npmjs.com/package/@patternfly/react-table/v/4.30.3)
- [@patternfly/react-tokens@4.12.18](https://www.npmjs.com/package/@patternfly/react-tokens/v/4.12.18)
- [@patternfly/react-topology@4.9.80](https://www.npmjs.com/package/@patternfly/react-topology/v/4.9.80)
- [@patternfly/react-virtualized-extension@4.9.49](https://www.npmjs.com/package/@patternfly/react-virtualized-extension/v/4.9.49)

### Components
- **Alert:**
  - Added plain variant, added expandable inline ([#6236](https://github.com/patternfly/patternfly-react/pull/6236))
- **Avatar:**
  - Converted examples to typescript ([#6228](https://github.com/patternfly/patternfly-react/pull/6228))
- **Back to top:**
  - Introduced back to top component and demos ([#6282](https://github.com/patternfly/patternfly-react/pull/6282))
- **Calendar month:**
  - Made useEffect respect validators ([#6315](https://github.com/patternfly/patternfly-react/pull/6315))
- **Card:**
  - Added demos for log and event views ([#6289](https://github.com/patternfly/patternfly-react/pull/6289))
  - Added aggregate status, status tabbed and status demos ([#6206](https://github.com/patternfly/patternfly-react/pull/6206))
- **Code editor:**
  - Replaced hardcoded text with props, updated microcopy ([#6241](https://github.com/patternfly/patternfly-react/pull/6241))
- **Date picker:**
  - Updated date picker microcopy ([#6263](https://github.com/patternfly/patternfly-react/pull/6263))
- **Description list:**
  - Added compact and fluid modifiers ([#6260](https://github.com/patternfly/patternfly-react/pull/6260))
- **Drag and drop:**
  - Started work towards adding drag and drop component ([#6258](https://github.com/patternfly/patternfly-react/pull/6258))
- **Dual list selector:** 
  - Added support for list item row ([#6294](https://github.com/patternfly/patternfly-react/pull/6294))
  - Added arguments to onOptionsSelect (#6224) ([#6225](https://github.com/patternfly/patternfly-react/pull/6225))
- **Flex layout:**
  - Added component property to flex layout and subitems. ([#6270](https://github.com/patternfly/patternfly-react/pull/6270))
- **Gallery layout:**
  - Added component property to gallery layout and subitems. ([#6270](https://github.com/patternfly/patternfly-react/pull/6270))
- **Grid layout:**
  - Added component property to grid layout and subitems. ([#6270](https://github.com/patternfly/patternfly-react/pull/6270))
- **Menu:**
  - Added context selector demo using menu ([#6283](https://github.com/patternfly/patternfly-react/pull/6283))
- **Search input:**
  - Added autocomplete search input demo ([#6305](https://github.com/patternfly/patternfly-react/pull/6305))
- **Select:**
  - Fixed select field dropdown showing the create option even when there's no input ([#6248](https://github.com/patternfly/patternfly-react/pull/6248))
  - Added aria-label to toggle ([#6271](https://github.com/patternfly/patternfly-react/pull/6271))
- **Slider:**
  - Fixed customSteps spacing to respect min/max ([#6231](https://github.com/patternfly/patternfly-react/pull/6231))
  - Updated slider to respect min/max constraints ([#6232](https://github.com/patternfly/patternfly-react/pull/6232))
- **Spinner:**
  - Fixed spinner tests to check all component sizes ([#6269](https://github.com/patternfly/patternfly-react/pull/6269))
- **Tabs:**
  - Added support for disabled state tabs ([#6261](https://github.com/patternfly/patternfly-react/pull/6261))

### Log viewer extension
- Added onScroll and footer props ([#6238](https://github.com/patternfly/patternfly-react/pull/6238))
- Added required dependency ([#6216](https://github.com/patternfly/patternfly-react/pull/6216))

### Table
- Added hoverable and selectable rows ([#6233](https://github.com/patternfly/patternfly-react/pull/6233))
- Added missing styles import ([#6259](https://github.com/patternfly/patternfly-react/pull/6259))
- Fixed broken links in table's empty state demo ([#6276](https://github.com/patternfly/patternfly-react/pull/6276))

### Other
- **Chore:** 
  - Removed unneeded peer dependency in code editor ([#6239](https://github.com/patternfly/patternfly-react/pull/6239))
- **Demos**
  - Added search input demo for composable search with form ([#6279](https://github.com/patternfly/patternfly-react/pull/6279))
  - Refactored demos to use masthead ([#6274](https://github.com/patternfly/patternfly-react/pull/6274))
  - Fixed wrapper nav to have hrefs ([#6297](https://github.com/patternfly/patternfly-react/pull/6297))
- **Deps:**
  - Updated dependency theme-patternfly-org to v0.6.40 ([#6309](https://github.com/patternfly/patternfly-react/pull/6309))
- **Docs:**
  - Corrected some copy-pasted prop comments ([#6285](https://github.com/patternfly/patternfly-react/pull/6285))
  - Added yarn build before test in contributing docs ([#6273](https://github.com/patternfly/patternfly-react/pull/6273))

## 2021.11 release notes (2021-08-25)
- [@patternfly/react-catalog-view-extension@4.12.56](https://www.npmjs.com/package/@patternfly/react-catalog-view-extension/v/4.12.56)
- [@patternfly/react-charts@6.15.20](https://www.npmjs.com/package/@patternfly/react-charts/v/6.15.20)
- [@patternfly/react-code-editor@4.3.42](https://www.npmjs.com/package/@patternfly/react-code-editor/v/4.3.42)
- [@patternfly/react-core@4.152.4](https://www.npmjs.com/package/@patternfly/react-core/v/4.152.4)
- [@patternfly/react-icons@4.11.14](https://www.npmjs.com/package/@patternfly/react-icons/v/4.11.14)
- [@patternfly/react-inline-edit-extension@4.7.65](https://www.npmjs.com/package/@patternfly/react-inline-edit-extension/v/4.7.65)
- [@patternfly/react-log-viewer@4.5.4](https://www.npmjs.com/package/@patternfly/react-log-viewer/v/4.5.4)
- [@patternfly/react-styles@4.11.13](https://www.npmjs.com/package/@patternfly/react-styles/v/4.11.13)
- [@patternfly/react-table@4.29.58](https://www.npmjs.com/package/@patternfly/react-table/v/4.29.58)
- [@patternfly/react-tokens@4.12.15](https://www.npmjs.com/package/@patternfly/react-tokens/v/4.12.15)
- [@patternfly/react-topology@4.9.62](https://www.npmjs.com/package/@patternfly/react-topology/v/4.9.62)
- [@patternfly/react-virtualized-extension@4.9.31](https://www.npmjs.com/package/@patternfly/react-virtualized-extension/v/4.9.31)

### Components
- **Avatar:**
  - Updated example image to match core ([#6137](https://github.com/patternfly/patternfly-react/pull/6137))
- **Card:**
  - Added horizontal split and details demos ([#6193](https://github.com/patternfly/patternfly-react/pull/6193))
- **Context selector:**
  - Added plain variant ([#6141](https://github.com/patternfly/patternfly-react/pull/6141))
- **Dual list selector:**
  - Fixed to respect initial chosen options, allow checking of sub folders, and reset selected states when options are moved via add/remove all ([#6180](https://github.com/patternfly/patternfly-react/pull/6180))
- **Helper text:**
  - Updated default icons for success/error ([#6130](https://github.com/patternfly/patternfly-react/pull/6130))
- **Jump links:**
  - Improved performance ([#6128](https://github.com/patternfly/patternfly-react/pull/6128))
- **Masthead:**
  - Added masthead component ([#6170](https://github.com/patternfly/patternfly-react/pull/6170))
- **Menu:**
  - Added application launcher demo ([#6175](https://github.com/patternfly/patternfly-react/pull/6175))
  - Fixed menu crash if current menuRef value is not found. ([#6152](https://github.com/patternfly/patternfly-react/pull/6152))
- **Navigation:**
  - Added horizontal sub navigation variant ([#6149](https://github.com/patternfly/patternfly-react/pull/6149))
- **Number input:**
  - Fixed to only call 'onPlus' and 'onMinus' if set ([#6197](https://github.com/patternfly/patternfly-react/pull/6197))
- **Popover:**
  - Updated to call setVisible before animation ([#6104](https://github.com/patternfly/patternfly-react/pull/6104))
  - Added support for diagonal positions ([#6155](https://github.com/patternfly/patternfly-react/pull/6155))
- **Search input:**
  - Added support for submit button ([#6178](https://github.com/patternfly/patternfly-react/pull/6178))
  - Updated to submit the search when hitting enter in the main input field ([#6145](https://github.com/patternfly/patternfly-react/pull/6145))
- **Select:**
  - Fixed typeahead children check ([#6176](https://github.com/patternfly/patternfly-react/pull/6176))
  - Omit isLastOptionBeforeFooter from props ([#6147](https://github.com/patternfly/patternfly-react/pull/6147))
- **Time picker:**
  - Fixed 0 & 00 are no longer valid hour values in 12 hour time. Updated onChange handler to return flag indicating if current time value is valid. ([#6134](https://github.com/patternfly/patternfly-react/pull/6134))
- **Toolbar:**
  - Updated to use categoryName.key as filter counter index ([#6143](https://github.com/patternfly/patternfly-react/pull/6143))
  - Added props for customizing ChipGroup text to ToolbarFilter ([#6138](https://github.com/patternfly/patternfly-react/pull/6138))
- **Tree view:**
  - Added guides and compact variants ([#6172](https://github.com/patternfly/patternfly-react/pull/6172))
  - Updated to consume toolbar ([#6133](https://github.com/patternfly/patternfly-react/pull/6133))
  - Updated to react to default expansion state change ([#6100](https://github.com/patternfly/patternfly-react/pull/6100))
- **Tabs:**
  - Exposed href to allow links in vertical tabs ([#6072](https://github.com/patternfly/patternfly-react/pull/6072))

### Icons
- Fixed icons types ([#6215](https://github.com/patternfly/patternfly-react/pull/6215))

### Log viewer extension
- Refactored the component to get rid of the gaps between items ([#6201](https://github.com/patternfly/patternfly-react/pull/6201))
- Removed unused props ([#6186](https://github.com/patternfly/patternfly-react/pull/6186))

### Table
- Updated keyboard interactions ([#6171](https://github.com/patternfly/patternfly-react/pull/6171))
- Updated composable selectable example to use shift + select ([#6188](https://github.com/patternfly/patternfly-react/pull/6188))
- Added ThSortType to documentation ([#6203](https://github.com/patternfly/patternfly-react/pull/6203))

### Tokens
- Fixed icons types ([#6215](https://github.com/patternfly/patternfly-react/pull/6215))

### Other
- **Chore**
  - Upgraded to TypeScript 4 ([#6192](https://github.com/patternfly/patternfly-react/pull/6192))
  - Promoted beta components  ([#6182](https://github.com/patternfly/patternfly-react/pull/6182))
  - Fixed ts-lint errors ([#6113](https://github.com/patternfly/patternfly-react/pull/6113))
- **Deps:**
  - Updated dependency @patternfly/patternfly-a11y to v4 ([#6125](https://github.com/patternfly/patternfly-react/pull/6125))
  - Updated dependency theme-patternfly-org to v0.6.21 ([#6177](https://github.com/patternfly/patternfly-react/pull/6177))
- **Docs:**
  - Updated example microcopy ([#6196](https://github.com/patternfly/patternfly-react/pull/6196))

## 2021.10 release notes (2021-08-04)
- [@patternfly/react-catalog-view-extension@4.12.36](https://www.npmjs.com/package/@patternfly/react-catalog-view-extension/v/4.12.36)
- [@patternfly/react-charts@6.15.14](https://www.npmjs.com/package/@patternfly/react-charts/v/6.15.14)
- [@patternfly/react-code-editor@4.3.22](https://www.npmjs.com/package/@patternfly/react-code-editor/v/4.3.22)
- [@patternfly/react-core@4.147.0](https://www.npmjs.com/package/@patternfly/react-core/v/4.147.0)
- [@patternfly/react-icons@4.11.8](https://www.npmjs.com/package/@patternfly/react-icons/v/4.11.8)
- [@patternfly/react-inline-edit-extension@4.7.44](https://www.npmjs.com/package/@patternfly/react-inline-edit-extension/v/4.7.44)
- [@patternfly/react-log-viewer@4.4.0](https://www.npmjs.com/package/@patternfly/react-log-viewer/v/4.4.0)
- [@patternfly/react-styles@4.11.8](https://www.npmjs.com/package/@patternfly/react-styles/v/4.11.8)
- [@patternfly/react-table@4.29.37](https://www.npmjs.com/package/@patternfly/react-table/v/4.29.37)
- [@patternfly/react-tokens@4.12.9](https://www.npmjs.com/package/@patternfly/react-tokens/v/4.12.9)
- [@patternfly/react-topology@4.9.42](https://www.npmjs.com/package/@patternfly/react-topology/v/4.9.42)
- [@patternfly/react-virtualized-extension@4.9.11](https://www.npmjs.com/package/@patternfly/react-virtualized-extension/v/4.9.11)

### Components
- **Accordion:**
  - Added support for bordered, display large and multiple body content ([#6085](https://github.com/patternfly/patternfly-react/pull/6085))
- **Alert group:**
  - Made dynamic alerts more accessible ([#5946](https://github.com/patternfly/patternfly-react/pull/5946))
- **Avatar:**
  - Added border prop ([#6040](https://github.com/patternfly/patternfly-react/pull/6040))
- **Button:**
  - Updated to allow router link component ([#6061](https://github.com/patternfly/patternfly-react/pull/6061))
- **Checkbox:**
  - Fixed warning about ouiaSafe property ([#6055](https://github.com/patternfly/patternfly-react/pull/6055))
  - Added OUIA props ([#5949](https://github.com/patternfly/patternfly-react/pull/5949))
- **Code editor:**
  - Added support for more languages ([#6006](https://github.com/patternfly/patternfly-react/pull/6006))
  - Added showEditor prop ([#6022](https://github.com/patternfly/patternfly-react/pull/6022))
  - Updated to allow passing options and overrideServices ([#6035](https://github.com/patternfly/patternfly-react/pull/6035))
  - Updated to show toolbar if there are custom controls ([#6025](https://github.com/patternfly/patternfly-react/pull/6025))
- **Context selector:**
  - Updated to hide internal prop ([#5986](https://github.com/patternfly/patternfly-react/pull/5986))
- **Date picker:**
  - Changed default parse format to y-m-d from y(-m)?(-d)? ([#6039](https://github.com/patternfly/patternfly-react/pull/6039))
  - Cleared parse error on type ([#6066](https://github.com/patternfly/patternfly-react/pull/6066))
- **Dual list selector:**
  - Fixed button order ([#5983](https://github.com/patternfly/patternfly-react/pull/5983))
- **Expandable section:**
  - Added props to support disclosure variation ([#6078](https://github.com/patternfly/patternfly-react/pull/6078))
- **Form:**
  - Added form group label info ([#6053](https://github.com/patternfly/patternfly-react/pull/6053))
- **Label:**
  - Added editable label ([#6065](https://github.com/patternfly/patternfly-react/pull/6065))
- **Menu:**
  - Addded context menu flyout support ([#5789](https://github.com/patternfly/patternfly-react/pull/5789))
- **Navigation:**
  - Updated incorrect prop descriptions ([#5980](https://github.com/patternfly/patternfly-react/pull/5980))
- **Notification drawer:**
  -  Fixed to show close button when onClose provided ([#6071](https://github.com/patternfly/patternfly-react/pull/6071))
- **Page:**
  - Added tabs page section variant ([#6028](https://github.com/patternfly/patternfly-react/pull/6028))
- **Pagination:**
  - Exported interfaces in md file so prop descriptions are documented ([#5985](https://github.com/patternfly/patternfly-react/pull/5985))
- **Search input:**
  - Updated to allow passing custom form elements after the attributes ([#6043](https://github.com/patternfly/patternfly-react/pull/6043))
  - Allow hasWordAttrLabel to be React.ReactNode as well ([#6037](https://github.com/patternfly/patternfly-react/pull/6037))
- **Select:**
  - Updated to check children have props before comparing them ([#6052](https://github.com/patternfly/patternfly-react/pull/6052))
  - Updated to check the values of the children for possible changes on componentDidUpdate ([#5973](https://github.com/patternfly/patternfly-react/pull/5973))
  - Fixed keyboard handling for view more button and footer ([#6095](https://github.com/patternfly/patternfly-react/pull/6095))
  - Fixed to ignore arrow keys when typeahead options are empty ([#5958](https://github.com/patternfly/patternfly-react/pull/5958))
  - Made type improvements on onFilter ([#6073](https://github.com/patternfly/patternfly-react/pull/6073))
- **Sidebar:**
  - Fixed custom className override ([#6094](https://github.com/patternfly/patternfly-react/pull/6094))
- **Slider:**
  - Fixed to respect props in useCallback ([#5969](https://github.com/patternfly/patternfly-react/pull/5969))
- **Switch:**
  - Added isReversed prop/layout ([#6080](https://github.com/patternfly/patternfly-react/pull/6080))
- **Tabs:**
  - Added support for page insets ([#6087](https://github.com/patternfly/patternfly-react/pull/6087))
- **Text input:**
  - Fixed warning about ouiaSafe property ([#6060](https://github.com/patternfly/patternfly-react/pull/6060))
  - Added OUIA props ([#5945](https://github.com/patternfly/patternfly-react/pull/5945))
- **Time picker:**
  - Applied proper styles on popper container ([#5960](https://github.com/patternfly/patternfly-react/pull/5960))
  - Fixed onInputChange always being set to valid ([#5982](https://github.com/patternfly/patternfly-react/pull/5982))
- **Title:**
  - Added OUIA props ([#5943](https://github.com/patternfly/patternfly-react/pull/5943))
- **Toolbar:**
  - Added OUIA props ([#5951](https://github.com/patternfly/patternfly-react/pull/5951))
- **Tooltip:**
  - Cleaned up timeouts on unmount to prevent warning([#5991](https://github.com/patternfly/patternfly-react/pull/5991))
- **Tree view:**
  - Cleaned up docs ([#6068](https://github.com/patternfly/patternfly-react/pull/6068))
  - Fixed console warning about uncontrolled inputs when checkbox swaps between determinate/indeterminate ([#6041](https://github.com/patternfly/patternfly-react/pull/6041))

### Access console extension
- Persist rfc instance in VncConsole ([#6012](https://github.com/patternfly/patternfly-react/pull/6012))

### Charts
- Fixed donut chart showing a gap ([#6084](https://github.com/patternfly/patternfly-react/pull/6084))
- Updated Victory tooltip performance ([#6049](https://github.com/patternfly/patternfly-react/pull/6049))

### Log viewer extension
- Added dark theme ([#6044](https://github.com/patternfly/patternfly-react/pull/6044))
- Fix to not overestimate size for empty lines ([#6033](https://github.com/patternfly/patternfly-react/pull/6033))
- Moved log viewer to extensions ([#6011](https://github.com/patternfly/patternfly-react/pull/6011))

### Table
- Updated to avoid Object constructor ([#5999](https://github.com/patternfly/patternfly-react/pull/5999))
- Cleaned up and expanded table docs ([#5984](https://github.com/patternfly/patternfly-react/pull/5984))
- Made more table doc updates ([#6077](https://github.com/patternfly/patternfly-react/pull/6077))

### Other
- **Chore:**
  - Added keyboard handling helper ([#5972](https://github.com/patternfly/patternfly-react/pull/5972))
  - Changed useLayoutEffect to useIsomorphicLayoutEffect ([#5954](https://github.com/patternfly/patternfly-react/pull/5954))
  - Removed beta component console warnings from promoted components ([#5990](https://github.com/patternfly/patternfly-react/pull/5990))
- **Demos:**
  - Added password strength demo ([#6053](https://github.com/patternfly/patternfly-react/pull/6053))
- **Docs:** 
  - Fixed broken link in tokens readme ([#5938](https://github.com/patternfly/patternfly-react/pull/5938))
  - Moved some repeated demo code to wrapper ([#5978](https://github.com/patternfly/patternfly-react/pull/5978))
  - Updated references of master to main in the contribution guide ([#5975](https://github.com/patternfly/patternfly-react/pull/5975))
- **Deps:**
  - Updated dependency theme-patternfly-org to v0.6.6 ([#6103](https://github.com/patternfly/patternfly-react/pull/6103))
  - Removed PatternFly 3 as a dependency from react-catalog-view-extension ([#5987](https://github.com/patternfly/patternfly-react/pull/5987))

## 2021.08 release notes (2021-06-22)
- [@patternfly/react-catalog-view-extension@4.12.0](https://www.npmjs.com/package/@patternfly/react-catalog-view-extension/v/4.12.0)
- [@patternfly/react-charts@6.15.3](https://www.npmjs.com/package/@patternfly/react-charts/v/6.15.3)
- [@patternfly/react-code-editor@4.2.92](https://www.npmjs.com/package/@patternfly/react-code-editor/v/4.2.92)
- [@patternfly/react-core@4.135.0](https://www.npmjs.com/package/@patternfly/react-core/v/4.135.0)
- [@patternfly/react-icons@4.11.0](https://www.npmjs.com/package/@patternfly/react-icons/v/4.11.0)
- [@patternfly/react-inline-edit-extension@4.7.7](https://www.npmjs.com/package/@patternfly/react-inline-edit-extension/v/4.7.7)
- [@patternfly/react-log-viewer@4.2.0](https://www.npmjs.com/package/@patternfly/react-log-viewer/v/4.2.0)
- [@patternfly/react-styles@4.11.0](https://www.npmjs.com/package/@patternfly/react-styles/v/4.11.0)
- [@patternfly/react-table@4.29.0](https://www.npmjs.com/package/@patternfly/react-table/v/4.29.0)
- [@patternfly/react-tokens@4.12.0](https://www.npmjs.com/package/@patternfly/react-tokens/v/4.12.0)
- [@patternfly/react-topology@4.9.6](https://www.npmjs.com/package/@patternfly/react-topology/v/4.9.6)
- [@patternfly/react-virtualized-extension@4.8.38](https://www.npmjs.com/package/@patternfly/react-virtualized-extension/v/4.8.38)

### Components
- **Breadcrumb:**
  - Moved divider outside of header element ([#5870](https://github.com/patternfly/patternfly-react/pull/5870))
- **Card:**
  - Added horizontal card grid demo ([#5907](https://github.com/patternfly/patternfly-react/pull/5907))
  - Added support to remove offset from actions ([#5887](https://github.com/patternfly/patternfly-react/pull/5887))
- **Date picker:**
  - Updated to pass additional props to input ([#5848](https://github.com/patternfly/patternfly-react/pull/5848))
- **Description list:**
  - Added responsive layout breakpoint property ([#5885](https://github.com/patternfly/patternfly-react/pull/5885))
- **Dual list selector:**
  - Added tooltips to control buttons ([#5914](https://github.com/patternfly/patternfly-react/pull/5914))
  -  Updated so add/remove all respects filtering ([#5884](https://github.com/patternfly/patternfly-react/pull/5884))
- **Helper text:**
  - Added helper text component ([#5903](https://github.com/patternfly/patternfly-react/pull/5903))
- **Menu:**
  - Added scrollable support ([#5667](https://github.com/patternfly/patternfly-react/pull/5667))
  - Updated tabIndex when children change ([#5923](https://github.com/patternfly/patternfly-react/pull/5923))
- **Select:**
  - Added some safety accessors ([#5902](https://github.com/patternfly/patternfly-react/pull/5902))
- **Slider:**
  - Updated so scenarios that we show boundaries but not ticks don't pollute the DOM with steps ([#5878](https://github.com/patternfly/patternfly-react/pull/5878))
- **Split layout:**
  - Added prop to allow children to wrap ([#5892](https://github.com/patternfly/patternfly-react/pull/5892))
- **Text:**
  - Added support for visited link styling ([#5917](https://github.com/patternfly/patternfly-react/pull/5917))
  - Added OUIA props into text component ([#5881](https://github.com/patternfly/patternfly-react/pull/5881))
- **Time picker:**
  - Updated to pass additional props to input ([#5848](https://github.com/patternfly/patternfly-react/pull/5848))
  - Fixed the returned values of the onChange method. ([#5868](https://github.com/patternfly/patternfly-react/pull/5868))

### Charts
- Added left and right triangle legend symbols ([#5869](https://github.com/patternfly/patternfly-react/pull/5869))

### Log Viewer
- Made log viewer responsive and changed search result styling ([#5927](https://github.com/patternfly/patternfly-react/pull/5927))

### Table
- Added composable draggable table rows demo ([#5921](https://github.com/patternfly/patternfly-react/pull/5921))
- Updated so empty state cell does not have data-label ([#5886](https://github.com/patternfly/patternfly-react/pull/5886))

### Other
- **Chore:**
  - Promoted beta components ([#5929](https://github.com/patternfly/patternfly-react/pull/5929))
- **Docs:**
  - Updated docs so code editor peer dependencies are clearer ([#5919](https://github.com/patternfly/patternfly-react/pull/5919))

## 2021.07 release notes (2021-06-04)
- [@patternfly/react-catalog-view-extension@4.11.42](https://www.npmjs.com/package/@patternfly/react-catalog-view-extension/v/4.11.42)
- [@patternfly/react-charts@6.14.29](https://www.npmjs.com/package/@patternfly/react-charts/v/6.14.29)
- [@patternfly/react-code-editor@4.2.76](https://www.npmjs.com/package/@patternfly/react-code-editor/v/4.2.76)
- [@patternfly/react-core@4.128.2](https://www.npmjs.com/package/@patternfly/react-core/v/4.128.2)
- [@patternfly/react-icons@4.10.11](https://www.npmjs.com/package/@patternfly/react-icons/v/4.10.11)
- [@patternfly/react-inline-edit-extension@4.6.125](https://www.npmjs.com/package/@patternfly/react-inline-edit-extension/v/4.6.125)
- [@patternfly/react-log-viewer@4.1.19](https://www.npmjs.com/package/@patternfly/react-log-viewer/v/4.1.19)
- [@patternfly/react-styles/v/4.10.11](https://www.npmjs.com/package/@patternfly/react-styles/v/4.10.11)
- [@patternfly/react-table@4.27.24](https://www.npmjs.com/package/@patternfly/react-table/v/4.27.24)
- [@patternfly/react-tokens/v/4.11.12](https://www.npmjs.com/package/@patternfly/react-tokens/v/4.11.12)
- [@patternfly/react-topology@4.8.72](https://www.npmjs.com/package/@patternfly/react-topology/v/4.8.72)
- [@patternfly/react-virtualized-extension@4.8.23](https://www.npmjs.com/package/@patternfly/react-virtualized-extension/v/4.8.23)

### Components
- **Button:**
  - Added danger modifier to link/secondary buttons ([#5808](https://github.com/patternfly/patternfly-react/pull/5808))
- **Data list:**
  - Update draggable data list example to functional component ([#5783](https://github.com/patternfly/patternfly-react/pull/5783))
- **Description list:**
  - Added support for help text ([#5837](https://github.com/patternfly/patternfly-react/pull/5837))
- **Flex layout:**
  - Added ability to specify order ([#5274](https://github.com/patternfly/patternfly-react/pull/5274))
- **Grid layout:**
  - Added ability to specify order ([#5274](https://github.com/patternfly/patternfly-react/pull/5274))
- **Jump links:**
  - Added check for stale DOM node ([#5812](https://github.com/patternfly/patternfly-react/pull/5812))
- **List:**
  - Added icons, plain and bordered ([#5796](https://github.com/patternfly/patternfly-react/pull/5796))
- **Menu:**
  - Added drilldown composable menu demo back ([#5807](https://github.com/patternfly/patternfly-react/pull/5807))
  - Added footer and view more demo ([#5791](https://github.com/patternfly/patternfly-react/pull/5791))
  - Added filter tree demo ([#5824](https://github.com/patternfly/patternfly-react/pull/5824))
- **Search input:**
  - Updated to stop capturing browser focus on mount ([#5823](https://github.com/patternfly/patternfly-react/pull/5823))
- **Select:**
  - Allowed filtering in single variant ([#5793](https://github.com/patternfly/patternfly-react/pull/5793))
  - Fixed custom Filtering demo ([#5829](https://github.com/patternfly/patternfly-react/pull/5829))
- **Slider:**
  - Updated to make showBoundaries independent from showTicks prop ([#5740](https://github.com/patternfly/patternfly-react/pull/5740))
- **Tabs:**
  - Added support for uncontrolled tabs ([#5831](https://github.com/patternfly/patternfly-react/pull/5831))
- **Time picker:**
  - Updated to not spread validateTime ([#5850](https://github.com/patternfly/patternfly-react/pull/5850))
  - Updated to use exact match instead of includes ([#5841](https://github.com/patternfly/patternfly-react/pull/5841))
- **Tooltip:**
  - Changed default entry and exit delay ([#5746](https://github.com/patternfly/patternfly-react/pull/5746))
- **Wizard:**
  - Updated to allow for expandable nav items ([#5842](https://github.com/patternfly/patternfly-react/pull/5842))

### Charts
- Fix to ensure ChartPie uses non-negative default radius ([#5822](https://github.com/patternfly/patternfly-react/pull/5822))
- Added interactive legend example for pie chart ([#5795](https://github.com/patternfly/patternfly-react/pull/5795))
- Cleaned up interactive legend pie example ([#5798](https://github.com/patternfly/patternfly-react/pull/5798))

### Table
- Changed checkbox behavior in tree table examples ([#5827](https://github.com/patternfly/patternfly-react/pull/5827))
- Removed data-label from expanded row 0 ([#5844](https://github.com/patternfly/patternfly-react/pull/5844))

### Other
- **Chore:**
  - Updated component scaffolding ([#5777](https://github.com/patternfly/patternfly-react/pull/5777))
  - Fixed incorrect/missing import statements ([#5786](https://github.com/patternfly/patternfly-react/pull/5786))
- **Demos:**
  - Fixed card shadow on hover for primary details demo ([#5790](https://github.com/patternfly/patternfly-react/pull/5790))
- **Deps:** 
  - Updated dependency theme-patternfly-org to v0.4.78 ([#5778](https://github.com/patternfly/patternfly-react/pull/5778))

## 2021.06 release notes (2021-05-14)
- [@patternfly/react-catalog-view-extension@4.11.25](https://www.npmjs.com/package/@patternfly/react-catalog-view-extension/v/4.11.25)
- [@patternfly/react-charts@6.14.22](https://www.npmjs.com/package/@patternfly/react-charts/v/6.14.22)
- [@patternfly/react-code-editor@4.2.59](https://www.npmjs.com/package/@patternfly/react-code-editor/v/4.2.59)
- [@patternfly/react-core@4.121.1](https://www.npmjs.com/package/@patternfly/react-core/v/4.121.1)
- [@patternfly/react-icons@4.10.7](https://www.npmjs.com/package/@patternfly/react-icons/v/4.10.7)
- [@patternfly/react-inline-edit-extension@4.6.108](https://www.npmjs.com/package/@patternfly/react-inline-edit-extension/v/4.6.108)
- [@patternfly/react-log-viewer@4.1.2](https://www.npmjs.com/package/@patternfly/react-log-viewer/v/4.1.2)
- [@patternfly/react-styles/v/4.10.7](https://www.npmjs.com/package/@patternfly/react-styles/v/4.10.7)
- [@patternfly/react-table@4.27.7](https://www.npmjs.com/package/@patternfly/react-table/v/4.27.7)
- [@patternfly/react-tokens/v/4.11.8](https://www.npmjs.com/package/@patternfly/react-tokens/v/4.11.8)
- [@patternfly/react-topology@4.8.55](https://www.npmjs.com/package/@patternfly/react-topology/v/4.8.55)
- [@patternfly/react-virtualized-extension@4.8.6](https://www.npmjs.com/package/@patternfly/react-virtualized-extension/v/4.8.6)

### Components
- **Accordion:**
  - Updated to set button type, and updated prop extension ([#5688](https://github.com/patternfly/patternfly-react/pull/5688))
- **Application launcher:**
  - Added ApplicationLauncherContent to documentation ([#5719](https://github.com/patternfly/patternfly-react/pull/5719))
- **Card:**
  - Added isToggleRightAligned prop ([#5723](https://github.com/patternfly/patternfly-react/pull/5723))
- **Dropdown:** 
  - Fixed scrollbar click closing menu ([#5766](https://github.com/patternfly/patternfly-react/pull/5766))
  - Added alignment breakpoints, fix ref console warning ([#5734](https://github.com/patternfly/patternfly-react/pull/5734))
- **Dual list selector:**
  - Fixed bug with selecting single node in nested folder ([#5763](https://github.com/patternfly/patternfly-react/pull/5763))
- **Empty state:**
  - Updated empty state "no match found" example text ([#5715](https://github.com/patternfly/patternfly-react/pull/5715))
- **File upload:**
  - Fixed to allow user to override onClick ([#5689](https://github.com/patternfly/patternfly-react/pull/5689))
- **Gallery:**
  - Added min/max widths at breakpoints ([#5735](https://github.com/patternfly/patternfly-react/pull/5735))
- **Jump links:**
  - Added check for null scrollItems ([#5754](https://github.com/patternfly/patternfly-react/pull/5754))
- **Menu toggle:**
  - Added menu toggle component and composable menu POCs ([#5722](https://github.com/patternfly/patternfly-react/pull/5722))
- **Select:**
  - Added flag to accept input values even if not in menu ([#5751](https://github.com/patternfly/patternfly-react/pull/5751))
  - Fixed scrollbar click closing menu ([#5766](https://github.com/patternfly/patternfly-react/pull/5766))
  - Added footer and view more options ([#5736](https://github.com/patternfly/patternfly-react/pull/5736))
- **Slider:** 
  - Added showBoundaries property to the min/max slider variant ([#5710](https://github.com/patternfly/patternfly-react/pull/5710))
- **Toggle group:**
  - Removed dividers, light variation, added compact support ([#5762](https://github.com/patternfly/patternfly-react/pull/5762))
- **Toolbar:**
  - Added widths on breakpoints for toolbar items ([#5727](https://github.com/patternfly/patternfly-react/pull/5727))
- **Tree view:**
  - Changed key generation field for tree view ([#5730](https://github.com/patternfly/patternfly-react/pull/5730))

### Access console extension
- Updated to hide placeholder option after first selection ([#5693](https://github.com/patternfly/patternfly-react/pull/5693))

### Log viewer
- Added log viewer component ([#5657](https://github.com/patternfly/patternfly-react/pull/5657))
- Refactor toolbar functionality ([#5769](https://github.com/patternfly/patternfly-react/pull/5769))

### Table
- Updated to allow for more customizable Table actions ([#5744](https://github.com/patternfly/patternfly-react/pull/5744))
- Added a prop to forward additional props to select rowData ([#5770](https://github.com/patternfly/patternfly-react/pull/5770))

### Other
- **Chore:** 
  - Added delay to table sticky header integration test ([#5713](https://github.com/patternfly/patternfly-react/pull/5713))
  - Added check for canUseDOM before using DOM ([#5733](https://github.com/patternfly/patternfly-react/pull/5733))
- **Deps:**
  - Update dependency theme-patternfly-org to v0.4.59 ([#5706](https://github.com/patternfly/patternfly-react/pull/5706))
- **Docs:** 
  - Fixed example capitalization ([#5724](https://github.com/patternfly/patternfly-react/pull/5724))

## 2021.05 release notes (2021-04-21)
- [@patternfly/react-catalog-view-extension@4.11.7](https://www.npmjs.com/package/@patternfly/react-catalog-view-extension/v/4.11.7)
- [@patternfly/react-charts@6.14.17](https://www.npmjs.com/package/@patternfly/react-charts/v/6.14.17)
- [@patternfly/react-code-editor@4.2.41](https://www.npmjs.com/package/@patternfly/react-code-editor/v/4.2.41)
- [@patternfly/react-core@4.115.2](https://www.npmjs.com/package/@patternfly/react-core/v/4.115.2)
- [@patternfly/react-icons@4.10.2](https://www.npmjs.com/package/@patternfly/react-icons/v/4.10.2)
- [@patternfly/react-inline-edit-extension@4.6.88](https://www.npmjs.com/package/@patternfly/react-inline-edit-extension/v/4.6.88)
- [@patternfly/react-styles/v/4.10.2](https://www.npmjs.com/package/@patternfly/react-styles/v/4.10.2)
- [@patternfly/react-table@4.26.7](https://www.npmjs.com/package/@patternfly/react-table/v/4.26.7)
- [@patternfly/react-tokens/v/4.11.3](https://www.npmjs.com/package/@patternfly/react-tokens/v/4.11.3)
- [@patternfly/react-topology@4.8.37](https://www.npmjs.com/package/@patternfly/react-topology/v/4.8.37)
- [@patternfly/react-virtualized-extension@4.7.24](https://www.npmjs.com/package/@patternfly/react-virtualized-extension/v/4.7.24)

### Components
- **Card:** 
  - Added empty state to card demo ([#5605](https://github.com/patternfly/patternfly-react/pull/5605))
  - Added full-height and plain variation ([#5632](https://github.com/patternfly/patternfly-react/pull/5632))
  - Moved card view to demos section ([#5671](https://github.com/patternfly/patternfly-react/pull/5671))
- **Clipboard copy:** 
  - Added inline variant ([#5629](https://github.com/patternfly/patternfly-react/pull/5629))
- **Code editor:**
  - Fixed React peer dependency ([#5618](https://github.com/patternfly/patternfly-react/pull/5618))
- **Code block:**
  - Added code block component ([#5656](https://github.com/patternfly/patternfly-react/pull/5656))
- **Context selector:**
  - Updated footer button to inline ([#5676](https://github.com/patternfly/patternfly-react/pull/5676))
- **Date picker:**
  - Added date and time range demo ([#5666](https://github.com/patternfly/patternfly-react/pull/5666))
- **Expandable section:**
  - Added detached variant, updated tests ([#5643](https://github.com/patternfly/patternfly-react/pull/5643))
- **Form:**
  - Added stacked variant and section title ([#5621](https://github.com/patternfly/patternfly-react/pull/5621))
- **Navigation:**
  - Added missing pf-c-nav__list class to grouped nav items wrapper ([#5589](https://github.com/patternfly/patternfly-react/pull/5589))
- **Select:**
  - Added optional item count ([#5677](https://github.com/patternfly/patternfly-react/pull/5677))
  - Removed panel from select variants ([#5600](https://github.com/patternfly/patternfly-react/pull/5600))
  - Changed arguments of the onFilter callback ([#5631](https://github.com/patternfly/patternfly-react/pull/5631))
  - Added invalid state to select ([#5675](https://github.com/patternfly/patternfly-react/pull/5675))
- **Slider:**
  - Updated Slider API to be more like the range input API ([#5669](https://github.com/patternfly/patternfly-react/pull/5669))
- **Tree view:**
  - Added classname ([#5608](https://github.com/patternfly/patternfly-react/pull/5608))
- **Toolbar:**
  - Added ToolbarGroup to docs ([#5665](https://github.com/patternfly/patternfly-react/pull/5665))
  - Fixed to collapse expandable content when crossing breakpoint ([#5692](https://github.com/patternfly/patternfly-react/pull/5692))
- **Wizard:**
  - Disabled back button on first step for keyboard users ([#5623](https://github.com/patternfly/patternfly-react/pull/5623))

### Access console extension
- Updated to clear selection when the selected option is a placeholder ([#5678](https://github.com/patternfly/patternfly-react/pull/5678))

### Icons
- Removed star reexport ([#5662](https://github.com/patternfly/patternfly-react/pull/5662))

### Inline edit extension
- Removed unused dependency ([#5645](https://github.com/patternfly/patternfly-react/pull/5645))

### Tokens
- Removed star reexport ([#5662](https://github.com/patternfly/patternfly-react/pull/5662))
- Fixed duplicate entries ([#5697](https://github.com/patternfly/patternfly-react/pull/5697))

### Table
- Added optional icons to tree table rows, add responsive view ([#5672](https://github.com/patternfly/patternfly-react/pull/5672))
- Allow passing tooltipProps to TableText ([#5654](https://github.com/patternfly/patternfly-react/pull/5654))

### Virtualized extension
- Fixed render of demo data so the table cells don't repeat static text ([#5627](https://github.com/patternfly/patternfly-react/pull/5627))

## Other
- **Chore:** 
  - Added closeComment to Stalebot ([#5651](https://github.com/patternfly/patternfly-react/pull/5651))
  - Removed codecov ([#5683](https://github.com/patternfly/patternfly-react/pull/5683))
  - Added delay to table sticky header integration test ([#5713](https://github.com/patternfly/patternfly-react/pull/5713))
- **Deps:** 
  - Updated dependency theme-patternfly-org to v0.4.53 ([#5684](https://github.com/patternfly/patternfly-react/pull/5684))

## 2021.04 release notes (2021-04-01)
- [@patternfly/react-catalog-view-extension@4.10.29](https://www.npmjs.com/package/@patternfly/react-catalog-view-extension/v/4.10.29)
- [@patternfly/react-charts@6.14.11](https://www.npmjs.com/package/@patternfly/react-charts/v/6.14.11)
- [@patternfly/react-code-editor@4.2.18](https://www.npmjs.com/package/@patternfly/react-code-editor/v/4.2.18)
- [@patternfly/react-core@4.106.2](https://www.npmjs.com/package/@patternfly/react-core/v/4.106.2)
- [@patternfly/react-icons@4.9.9](https://www.npmjs.com/package/@patternfly/react-icons/v/4.9.9)
- [@patternfly/react-inline-edit-extension@4.6.65](https://www.npmjs.com/package/@patternfly/react-inline-edit-extension/v/4.6.65)
- [@patternfly/react-styles/v/4.9.4](https://www.npmjs.com/package/@patternfly/react-styles/v/4.9.4)
- [@patternfly/react-table@4.24.1](https://www.npmjs.com/package/@patternfly/react-table/v/4.24.1)
- [@patternfly/react-tokens/v/4.10.9](https://www.npmjs.com/package/@patternfly/react-tokens/v/4.10.9)
- [@patternfly/react-topology@4.8.15](https://www.npmjs.com/package/@patternfly/react-topology/v/4.8.15)
- [@patternfly/react-virtualized-extension@4.7.1](https://www.npmjs.com/package/@patternfly/react-virtualized-extension/v/4.7.1)

### Components
- **Alert:**
  - Fixed to not return false in useEffect ([#5575](https://github.com/patternfly/patternfly-react/pull/5575))
  - Updated to not timeout if isMouseOver ([#5566](https://github.com/patternfly/patternfly-react/pull/5566))
- **Application launcher:**
  - Made application launcher demo keyboard accessible ([#5550](https://github.com/patternfly/patternfly-react/pull/5550))
- **Background image:**
  - Updated to use useEffect for the id ([#5541](https://github.com/patternfly/patternfly-react/pull/5541))
- **Checkbox:**
  - Added support for custom body content ([#5559](https://github.com/patternfly/patternfly-react/pull/5559))
- **Code editor:**
  - Fixed flaky integration test ([#5531](https://github.com/patternfly/patternfly-react/pull/5531))
- **Drawer:**
  - Updated to not initially render DrawerPanelContent ([#5543](https://github.com/patternfly/patternfly-react/pull/5543))
- **Dropdown:**
  - Added badge toggle variant ([#5548](https://github.com/patternfly/patternfly-react/pull/5548))
- **Form:**
  - Added support for field groups ([#5569](https://github.com/patternfly/patternfly-react/pull/5569))
- **Jump links:**
  - Added className prop ([#5553](https://github.com/patternfly/patternfly-react/pull/5553))
- **Menu:**
  - Added Keyboard interaction support ([#5570](https://github.com/patternfly/patternfly-react/pull/5570))
- **Navigation:** 
  - Fixed so that the onExpand callback is fired ([#5595](https://github.com/patternfly/patternfly-react/pull/5595))
  - Updated NavItem so TabIndex is passed to cloned children ([#5562](https://github.com/patternfly/patternfly-react/pull/5562))
  - Updated to not call onExpand twice ([#5611](https://github.com/patternfly/patternfly-react/pull/5611))
- **Pagination:**
  - Added ofWord prop for localization and accessibility ([#5563](https://github.com/patternfly/patternfly-react/pull/5563))
- **Radio:**
  - Added support for custom body content ([#5559](https://github.com/patternfly/patternfly-react/pull/5559))
- **Slider:**
  - Added isDisabled property ([#5524](https://github.com/patternfly/patternfly-react/pull/5524))
- **Switch:**
  - Fixed error message regarding accessibility usage ([#5522](https://github.com/patternfly/patternfly-react/pull/5522))
- **Textarea:** 
  - Added auto resizing ([#5568](https://github.com/patternfly/patternfly-react/pull/5568))
- **Tooltip:**
  - Made icon example accessible ([#5588](https://github.com/patternfly/patternfly-react/pull/5588))

### Table
- Added tree table variant ([#5573](https://github.com/patternfly/patternfly-react/pull/5573))

### Topology
- Updated to allow applications to choose using resizable drawer for topology side bar ([#5572](https://github.com/patternfly/patternfly-react/pull/5572))
- Made fix for context sub menu placement ([#5546](https://github.com/patternfly/patternfly-react/pull/5546))
- Used drawer for topology side panel and allow resizing ([#5533](https://github.com/patternfly/patternfly-react/pull/5533))
- Used disabled background for control buttons when disabled ([#5538](https://github.com/patternfly/patternfly-react/pull/5538))

### Other
- **Deps:**
  - Updated dependency theme-patternfly-org to v0.4.33 ([#5587](https://github.com/patternfly/patternfly-react/pull/5587))
- **Docs:***
  - Added OUIA documentation ([#5511](https://github.com/patternfly/patternfly-react/pull/5511))

## 2021.03 release notes (2021-03-10)
- [@patternfly/react-catalog-view-extension@4.10.13](https://www.npmjs.com/package/@patternfly/react-catalog-view-extension/v/4.10.13)
- [@patternfly/react-charts@6.14.6](https://www.npmjs.com/package/@patternfly/react-charts/v/6.14.6)
- [@patternfly/react-code-editor@4.2.2](https://www.npmjs.com/package/@patternfly/react-code-editor/v/4.2.2)
- [@patternfly/react-core@4.101.3](https://www.npmjs.com/package/@patternfly/react-core/v/4.101.3)
- [@patternfly/react-icons@4.9.5](https://www.npmjs.com/package/@patternfly/react-icons/v/4.9.5)
- [@patternfly/react-inline-edit-extension@4.6.48](https://www.npmjs.com/package/@patternfly/react-inline-edit-extension/v/4.6.48)
- [@patternfly/react-styles@4.8.5](https://www.npmjs.com/package/@patternfly/react-styles/v/4.8.5)
- [@patternfly/react-table@4.23.14](https://www.npmjs.com/package/@patternfly/react-table/v/4.23.14)
- [@patternfly/react-tokens@4.10.5](https://www.npmjs.com/package/@patternfly/react-tokens/v/4.10.5)
- [@patternfly/react-topology@4.7.45](https://www.npmjs.com/package/@patternfly/react-topology/v/4.7.45)
- [@patternfly/react-virtualized-extension@4.6.46](https://www.npmjs.com/package/@patternfly/react-virtualized-extension/v/4.6.46)

### Components
- **Application launcher:** 
  - Enabled keyboard accessibility when using component prop ([#5492](https://github.com/patternfly/patternfly-react/pull/5492))
- **Calendar month:** 
  - Fixed selecting month in popover for React 17 ([#5517](https://github.com/patternfly/patternfly-react/pull/5517))
- **Code editor:** 
  - Made 'code' prop controlled ([#5465](https://github.com/patternfly/patternfly-react/pull/5465))
- **Checkbox:** 
  - Added standalone modifier when no label is provided ([#5513](https://github.com/patternfly/patternfly-react/pull/5513))
- **Data list:** 
  - Fixed dragging in firefox ([#5505](https://github.com/patternfly/patternfly-react/pull/5505))
- **Date picker:** 
  - Updated to only show non-whitespace error text ([#5487](https://github.com/patternfly/patternfly-react/pull/5487))
- **Drawer:** 
  - Added gray and white panel background variants ([#5479](https://github.com/patternfly/patternfly-react/pull/5479))
- **Dual list selector:**
  - Added onAvailableOptionsSelectInputChanged and onChosenOptionsSelectInputChanged ([#5469](https://github.com/patternfly/patternfly-react/pull/5469))
- **Form:**
  - Added grid form example ([#5495](https://github.com/patternfly/patternfly-react/pull/5495))
- **Input group:**
  - Added plain input group text variant ([#5478](https://github.com/patternfly/patternfly-react/pull/5478))
- **Login page:**
  - Enabled show or hide password ([#5481](https://github.com/patternfly/patternfly-react/pull/5481))
- **Menu:** 
  - Addded drilldown menu ([#5485](https://github.com/patternfly/patternfly-react/pull/5485))
- **Progress:**
  - Made proper usage of accessibility properties ([#5470](https://github.com/patternfly/patternfly-react/pull/5470))
- **Radio:**
  - Added standalone modifier when no label is provided ([#5513](https://github.com/patternfly/patternfly-react/pull/5513))
- **Search input:** 
  - Add isDisabled and cleaned up focus handling ([#5468](https://github.com/patternfly/patternfly-react/pull/5468))
  - Add searchInputMenuBody class ([#5518](https://github.com/patternfly/patternfly-react/pull/5518))
- **Time picker:**
  - Updated to use different am/pm suffixes ([#5504](https://github.com/patternfly/patternfly-react/pull/5504))
- **Tree view:** 
  - Added support for custom badge content ([#5512](https://github.com/patternfly/patternfly-react/pull/5512))
  - Added flag for expand/collapse all ([#5503](https://github.com/patternfly/patternfly-react/pull/5503))

### Other
- **Deps:** 
  - Removed unused dep ([#5507](https://github.com/patternfly/patternfly-react/pull/5507))

## 2021.02 release notes (2021-02-17)
- [@patternfly/react-catalog-view-extension@4.10.2](https://www.npmjs.com/package/@patternfly/react-catalog-view-extension/v/4.10.2)
- [@patternfly/react-charts@6.14.2](https://www.npmjs.com/package/@patternfly/react-charts/v/6.14.2)
- [@patternfly/react-code-editor@4.1.25](https://www.npmjs.com/package/@patternfly/react-code-editor/v/4.1.25)
- [@patternfly/react-core@4.97.2](https://www.npmjs.com/package/@patternfly/react-core/v/4.97.2)
- [@patternfly/react-icons@4.9.2](https://www.npmjs.com/package/@patternfly/react-icons/v/4.9.2)
- [@patternfly/react-inline-edit-extension@4.6.36](https://www.npmjs.com/package/@patternfly/react-inline-edit-extension/v/4.6.36)
- [@patternfly/react-styles@4.8.2](https://www.npmjs.com/package/@patternfly/react-styles/v/4.8.2)
- [@patternfly/react-table@4.23.2](https://www.npmjs.com/package/@patternfly/react-table/v/4.23.2)
- [@patternfly/react-tokens@4.10.2](https://www.npmjs.com/package/@patternfly/react-tokens/v/4.10.2)
- [@patternfly/react-topology@4.7.34](https://www.npmjs.com/package/@patternfly/react-topology/v/4.7.34)
- [@patternfly/react-virtualized-extension@4.6.35](https://www.npmjs.com/package/@patternfly/react-virtualized-extension/v/4.6.35)

### Components
- **Calendar month:**
  - Added `type="button"` to `CalendarMonth` to prevent page refresh ([#5440](https://github.com/patternfly/patternfly-react/pull/5440))
- **Card:**
  - Added pf-m-display-lg and pf-m-rounded ([#5389](https://github.com/patternfly/patternfly-react/pull/5389))
- **Code editor:**
  - Updated so copy to clipboard button can now be enabled solo ([#5411](https://github.com/patternfly/patternfly-react/pull/5411))
  - Fixed to display empty state if one is supplied ([#5413](https://github.com/patternfly/patternfly-react/pull/5413))
- **Data list:**
  - Used drag-over modifier instead of css style ([#5119](https://github.com/patternfly/patternfly-react/pull/5119))
- **Date picker:**
  - Fixed to not rely on toISOString ([#5369](https://github.com/patternfly/patternfly-react/pull/5369))
- **Drawer:**
  - Enabled touch controls for resizable drawer ([#5357](https://github.com/patternfly/patternfly-react/pull/5357))
  - Updated transitions and content mounting ([#5426](https://github.com/patternfly/patternfly-react/pull/5426))
- **Form select:**
  - Added support for placeholder styled option ([#5428](https://github.com/patternfly/patternfly-react/pull/5428))
- **Jump links:**
  - Added jumplinks subsections ([#5314](https://github.com/patternfly/patternfly-react/pull/5314))
- **Navigation:**
  - Added support for spreading props to the NavExpandable button ([#5438](https://github.com/patternfly/patternfly-react/pull/5438))
- **Progress:**
  - Added warning when title and aria-label are not present ([#5415](https://github.com/patternfly/patternfly-react/pull/5415))
- **Search input:**
  - Added advanced search feature ([#5454](https://github.com/patternfly/patternfly-react/pull/5454))
  - Added support to passing a ref ([#5215](https://github.com/patternfly/patternfly-react/pull/5215))
  - Added bar class ([#5425](https://github.com/patternfly/patternfly-react/pull/5425))
- **Select:**
  - Adjusted Select component so that it also works with children changes while it's mounted ([#5375](https://github.com/patternfly/patternfly-react/pull/5375))
  - Updated to not use focus trap when no tabbable children ([#5427](https://github.com/patternfly/patternfly-react/pull/5427))
  - Removed onFilter function from example with custom objects ([#5450](https://github.com/patternfly/patternfly-react/pull/5450))
- **Slider:**
  - Added touch support ([#5453](https://github.com/patternfly/patternfly-react/pull/5453))
- **Spinner:**
  - Added isSVG prop ([#5390](https://github.com/patternfly/patternfly-react/pull/5390))
- **Time picker:**
  - Fixed issue when clicking dropdown menu does not trigger onChange function ([#5399](https://github.com/patternfly/patternfly-react/pull/5399))
- **Tooltip:**
  - Updated to only add aria when tooltip is visible/in the DOM ([#5382](https://github.com/patternfly/patternfly-react/pull/5382))
- **TreeView:**
  - Added keyboard interactions ([#5439](https://github.com/patternfly/patternfly-react/pull/5439))
  - Fixed expand/collapse on filtering ([#5414](https://github.com/patternfly/patternfly-react/pull/5414))
- **Wizard:**
  - Added cancel button class ([#5391](https://github.com/patternfly/patternfly-react/pull/5391))

### Charts
- Fixed bar chart remaining muted with interactive legend ([#5378](https://github.com/patternfly/patternfly-react/pull/5378))

### Table
- Added decorators index file ([#5366](https://github.com/patternfly/patternfly-react/pull/5366))
- Updated column management demo to include label ([#5431](https://github.com/patternfly/patternfly-react/pull/5431))
- Added dataLabel property to composable table ([#5406](https://github.com/patternfly/patternfly-react/pull/5406))

### Topology
- Fixed if statement ([#5409](https://github.com/patternfly/patternfly-react/pull/5409))

### Virtualized extension
- Revert some changes to VirtualTableBody ([#5434](https://github.com/patternfly/patternfly-react/pull/5434))

### Other
- **Deps:**
  - Updated dependency theme-patternfly-org to v0.4.12 ([#5457](https://github.com/patternfly/patternfly-react/pull/5457))

## 2021.01 release notes (2021-01-27)
- [@patternfly/react-catalog-view-extension@4.9.15](https://www.npmjs.com/package/@patternfly/react-catalog-view-extension/v/4.9.15)
- [@patternfly/react-charts@6.13.8](https://www.npmjs.com/package/@patternfly/react-charts/v/6.13.8)
- [@patternfly/react-code-editor@4.1.4](https://www.npmjs.com/package/@patternfly/react-code-editor/v/4.1.4)
- [@patternfly/react-core@4.90.2](https://www.npmjs.com/package/@patternfly/react-core/v/4.90.2)
- [@patternfly/react-icons@4.8.4](https://www.npmjs.com/package/@patternfly/react-icons/v/4.8.4)
- [@patternfly/react-inline-edit-extension@4.6.15](https://www.npmjs.com/package/@patternfly/react-inline-edit-extension/v/4.6.15)
- [@patternfly/react-styles@4.7.29](https://www.npmjs.com/package/@patternfly/react-styles/v/4.7.29)
- [@patternfly/react-table@4.20.15](https://www.npmjs.com/package/@patternfly/react-table/v/4.20.15)
- [@patternfly/react-tokens@4.9.26](https://www.npmjs.com/package/@patternfly/react-tokens/v/4.9.26)
- [@patternfly/react-topology@4.7.15](https://www.npmjs.com/package/@patternfly/react-topology/v/4.7.15)
- [@patternfly/react-virtualized-extension@4.6.15](https://www.npmjs.com/package/@patternfly/react-virtualized-extension/v/4.6.15)

### Components
- **Alert** 
  - Cleaned up errors in tests ([#5302](https://github.com/patternfly/patternfly-react/pull/5302))
- **Application launcher:**
  - Used common favorites util, moved util to helpers ([#5267](https://github.com/patternfly/patternfly-react/pull/5267))
- **Breadcrumb:**
  - Added render prop to breadcrumb item ([#5189](https://github.com/patternfly/patternfly-react/pull/5189))
- **Calendar month:** 
  - Updated to rely on base styles from react-core/dist/styles/base.css ([#5251](https://github.com/patternfly/patternfly-react/pull/5251))
- **Checkbox:** 
  - Updated to show error message if id is missing ([#5292](https://github.com/patternfly/patternfly-react/pull/5292))
- **Chip group:**
  - Added event handler prop for overflow-chip click ([#5272](https://github.com/patternfly/patternfly-react/pull/5272))
- **Code editor:** 
  - Added new code editor component ([#5294](https://github.com/patternfly/patternfly-react/pull/5294))
- **Context selector:** 
  - Removed isHovered from item unit tests ([#5306](https://github.com/patternfly/patternfly-react/pull/5306))
- **Drawer:** 
  - Added resize callback ([#5319](https://github.com/patternfly/patternfly-react/pull/5319))
  - Fixed dragging problem on iframe when resizing drawer ([#5331](https://github.com/patternfly/patternfly-react/pull/5331))
  - Improved cursor responsiveness ([#5328](https://github.com/patternfly/patternfly-react/pull/5328))
  - Fixed initial width not respecting min/max widths ([#5313](https://github.com/patternfly/patternfly-react/pull/5313))
  - Fixed to stop panel content unmounting before collapse ([#5330](https://github.com/patternfly/patternfly-react/pull/5330))
- **Dual list selector:** 
  - Added type=button to DualListSelectorListItem button ([#5266](https://github.com/patternfly/patternfly-react/pull/5266))
  - Fixed to not pass custom handlers to root div ([#5308](https://github.com/patternfly/patternfly-react/pull/5308))
- **Empty state** 
  - Cleaned up errors in tests ([#5302](https://github.com/patternfly/patternfly-react/pull/5302))
- **Jump links:** 
  - Updated to allow hrefs with spaces ([#5223](https://github.com/patternfly/patternfly-react/pull/5223))
- **Menu:** 
  - Fixed sentence case for menu example ([#5262](https://github.com/patternfly/patternfly-react/pull/5262))
- **Navigation:** 
  - Made nav items keyboard and screen reader accessible ([#5312](https://github.com/patternfly/patternfly-react/pull/5312))
- **Number input:**
  - Renamed Touchspin to NumberInput ([#5338](https://github.com/patternfly/patternfly-react/pull/5338))
- **Popover:** 
  - Updated to hide Popover when its trigger is scrolled out of view ([#5318](https://github.com/patternfly/patternfly-react/pull/5318))
- **Radio:** 
  - Updated to show error message if id is missing ([#5292](https://github.com/patternfly/patternfly-react/pull/5292))
- **Search input:** 
  - Updated to hide clear button when onClear function is not set ([#5230](https://github.com/patternfly/patternfly-react/pull/5230))
- **Select:** 
  - Fixed crash when opened using enter with disabled options ([#5258](https://github.com/patternfly/patternfly-react/pull/5258))
  - Cleaned up errors in tests ([#5302](https://github.com/patternfly/patternfly-react/pull/5302))
- **Simple list:** 
  - Added uncontrolled Simple list support ([#5134](https://github.com/patternfly/patternfly-react/pull/5134))
- **Slider:** 
  - Added new slider component ([#5358](https://github.com/patternfly/patternfly-react/pull/5358))
- **Toggle group:** 
  - Fixed bug with ToggleGroupItem button being clicked in form in modal closing modal ([#5259](https://github.com/patternfly/patternfly-react/pull/5259))
- **Toolbar:** 
  - Added log viewer toolbar example ([#5196](https://github.com/patternfly/patternfly-react/pull/5196))
- **Wizard:** 
  - Updated to allow setting a custom width to the wizard modal ([#5256](https://github.com/patternfly/patternfly-react/pull/5256))

### Access console extension
- Some minor CSS improvements ([#5247](https://github.com/patternfly/patternfly-react/pull/5247))

### Charts
- Annotated Victory types for example docs ([#5315](https://github.com/patternfly/patternfly-react/pull/5315))
- Fixed chart legend tooltip shown with no data ([#5296](https://github.com/patternfly/patternfly-react/pull/5296))
- Fixed incorrect colorScale prop type ([#5303](https://github.com/patternfly/patternfly-react/pull/5303))
- Updated so theme font must use token value ([#5301](https://github.com/patternfly/patternfly-react/pull/5301))
- Fixed tooltip pointerLength error ([#5245](https://github.com/patternfly/patternfly-react/pull/5245))

### Table
- Updated to make empty state consistent across demos and examples ([#5298](https://github.com/patternfly/patternfly-react/pull/5298))
- Fixed scope axe issue ([#5253](https://github.com/patternfly/patternfly-react/pull/5253))

### Topology
- Adjusted topology node layout when new nodes are added ([#5249](https://github.com/patternfly/patternfly-react/pull/5249))
- Prevented context sub menus from overflowing viewport ([#5271](https://github.com/patternfly/patternfly-react/pull/5271))

### Other
- **Chore:** 
  - Added linting rule to disallow nested ternaries ([#5255](https://github.com/patternfly/patternfly-react/pull/5255))
- **Demos:** 
  - Enabled static drawer open on mobile view in primary detail demo ([#5311](https://github.com/patternfly/patternfly-react/pull/5311))
  - Added wizard demos to match core ([#5325](https://github.com/patternfly/patternfly-react/pull/5325))
- **Deps:**
  - Updated dependency theme-patternfly-org to v0.3.5 ([#5228](https://github.com/patternfly/patternfly-react/pull/5228))
  - Updated to use react 17 ([#5111](https://github.com/patternfly/patternfly-react/pull/5111))

## 2020.16 release notes (2020-12-11)
- [@patternfly/react-catalog-view-extension@4.8.126](https://www.npmjs.com/package/@patternfly/react-catalog-view-extension/v/4.8.126)
- [@patternfly/react-charts@6.12.12](https://www.npmjs.com/package/@patternfly/react-charts/v/6.12.12)
- [@patternfly/react-core@4.84.4](https://www.npmjs.com/package/@patternfly/react-core/v/4.84.4)
- [@patternfly/react-icons@4.7.22](https://www.npmjs.com/package/@patternfly/react-icons/v/4.7.22)
- [@patternfly/react-inline-edit-extension@4.5.187](https://www.npmjs.com/package/@patternfly/react-inline-edit-extension/v/4.5.187)
- [@patternfly/react-styles@4.7.22](https://www.npmjs.com/package/@patternfly/react-styles/v/4.7.22)
- [@patternfly/react-table@4.19.45](https://www.npmjs.com/package/@patternfly/react-table/v/4.19.45)
- [@patternfly/react-tokens@4.9.22](https://www.npmjs.com/package/@patternfly/react-tokens/v/4.9.22)
- [@patternfly/react-topology@4.6.91](https://www.npmjs.com/package/@patternfly/react-topology/v/4.6.91)
- [@patternfly/react-virtualized-extension@4.5.171](https://www.npmjs.com/package/@patternfly/react-virtualized-extension/v/4.5.171)

### Components
- **Alert:** 
  - Added support for custom icon ([#5140](https://github.com/patternfly/patternfly-react/pull/5140))
- **Application launcher:** 
  - Made options menu and application launcher accessible in JAWS ([#5136](https://github.com/patternfly/patternfly-react/pull/5136))
- **Calendar month:** 
  - Fixed to rely on base styles from react-core/dist/styles/base.css ([#5251](https://github.com/patternfly/patternfly-react/pull/5251))
- **Clipboard copy:**
  - Fixed arrow orientation for expanded clipboard copy ([#5191](https://github.com/patternfly/patternfly-react/pull/5191))
- **Date picker:** 
  - Fixed bugs and added range picker demo ([#5184](https://github.com/patternfly/patternfly-react/pull/5184))
  - Updated to Forward popover props ([#5160](https://github.com/patternfly/patternfly-react/pull/5160))
  - Removed date-fns and allow more customization ([#5161](https://github.com/patternfly/patternfly-react/pull/5161))
- **Description list:** 
  - Added support for auto fit ([#5113](https://github.com/patternfly/patternfly-react/pull/5113))
  - Changed autoMinFitModifier to autoFitMinModifier ([#5227](https://github.com/patternfly/patternfly-react/pull/5227))
- **Drawer:** 
  - Added splitter feature ([#5193](https://github.com/patternfly/patternfly-react/pull/5193))
- **Dual list selector:**
  - Added support for trees and checkboxes ([#5207](https://github.com/patternfly/patternfly-react/pull/5207))
- **Form:**
  - Tidied form examples ([#5172](https://github.com/patternfly/patternfly-react/pull/5172))
- **Jump links:**
  - Added offset prop ([#5233](https://github.com/patternfly/patternfly-react/pull/5233))
- **Menu:**
  - Added cypress tests and integration demos ([#5202](https://github.com/patternfly/patternfly-react/pull/5202))
  - Updated cypress tests ([#5225](https://github.com/patternfly/patternfly-react/pull/5225))
  - Updated to allow consumer to add search input/text input ([#5211](https://github.com/patternfly/patternfly-react/pull/5211))
- **Popover:**
  - Updated to allow close from content ([#5173](https://github.com/patternfly/patternfly-react/pull/5173))
- **Options menu:** 
  - Made options menu and application launcher accessible in JAWS ([#5136](https://github.com/patternfly/patternfly-react/pull/5136))
- **Text area:**
  - Added support for isDisabled ([#5107](https://github.com/patternfly/patternfly-react/pull/5107))
- **Text input:** 
  - Removed button and React.Fragment from the ref example ([#5176](https://github.com/patternfly/patternfly-react/pull/5176))
- **Time picker:** 
  - Added basic time picker ([#5216](https://github.com/patternfly/patternfly-react/pull/5216))
- **Tree view:** 
  - Fixed various bugs ([#5128](https://github.com/patternfly/patternfly-react/pull/5128))

### Access console extension
- Replaced novnc-core usage with the original @novnc/novnc ([#5208](https://github.com/patternfly/patternfly-react/pull/5208))

### Chart
- Replaced victory with victory-zoom-container ([#5179](https://github.com/patternfly/patternfly-react/pull/5179))
- Fixed interactive legend example tooltips ([#5204](https://github.com/patternfly/patternfly-react/pull/5204))
- Bumped victory and moved victory dependency to demo app ([#5178](https://github.com/patternfly/patternfly-react/pull/5178))
- Fixed tooltip pointer length error ([#5245](https://github.com/patternfly/patternfly-react/pull/5245))

### Table
- Added table favorites feature ([#5213](https://github.com/patternfly/patternfly-react/pull/5213))
- Added cypress tests for favorites ([#5222](https://github.com/patternfly/patternfly-react/pull/5222))

### Topology
- Adjusted topology node layout when new nodes are added ([#5249](https://github.com/patternfly/patternfly-react/pull/5249))

### Other
- **Chore:** 
  - Updated dependency theme-patternfly-org to v0.2.11 ([#5080](https://github.com/patternfly/patternfly-react/pull/5080))
  - Fixed @patternfly/react-icons/createIcon import issue ([#5163](https://github.com/patternfly/patternfly-react/pull/5163))
  - Moved react-datetime to react-core ([#5201](https://github.com/patternfly/patternfly-react/pull/5201))
  - Updated react-core copyStyles.js ([#5166](https://github.com/patternfly/patternfly-react/pull/5166))
  - Fixed focus trap dependency ([#5236](https://github.com/patternfly/patternfly-react/pull/5236))

## 2020.15 release notes (2020-11-17)
- [@patternfly/react-catalog-view-extension@4.8.105](https://www.npmjs.com/package/@patternfly/react-catalog-view-extension/v/4.8.105)
- [@patternfly/react-charts@6.12.2](https://www.npmjs.com/package/@patternfly/react-charts/v/6.12.2)
- [@patternfly/react-core@4.79.2](https://www.npmjs.com/package/@patternfly/react-core/v/4.79.2)
- [@patternfly/react-icons@4.7.18](https://www.npmjs.com/package/@patternfly/react-icons/v/4.7.18)
- [@patternfly/react-inline-edit-extension@4.5.166](https://www.npmjs.com/package/@patternfly/react-inline-edit-extension/v/4.5.166)
- [@patternfly/react-styles@4.7.16](https://www.npmjs.com/package/@patternfly/react-styles/v/4.7.16)
- [@patternfly/react-table@4.19.24](https://www.npmjs.com/package/@patternfly/react-table/v/4.19.24)
- [@patternfly/react-tokens@4.9.18](https://www.npmjs.com/package/@patternfly/react-tokens/v/4.9.18)
- [@patternfly/react-topology@4.6.69](https://www.npmjs.com/package/@patternfly/react-topology/v/4.6.69)
- [@patternfly/react-virtualized-extension@4.5.150](https://www.npmjs.com/package/@patternfly/react-virtualized-extension/v/4.5.150)

### Components
- **Action list:** 
  - Added action list component ([#5112](https://github.com/patternfly/patternfly-react/pull/5112))
- **Card:** 
  - Added expandable card, move tests ([#5093](https://github.com/patternfly/patternfly-react/pull/5093))
  - Added keyboard interaction a11y test, clean up docs ([#5082](https://github.com/patternfly/patternfly-react/pull/5082))
- **Checkbox:**
  - Fixed Typescript type for isChecked prop so it allows null (indeterminate) ([#5148](https://github.com/patternfly/patternfly-react/pull/5148))
- **Data list:** 
  - Fixed to respect isDisabled for dragging ([#5052](https://github.com/patternfly/patternfly-react/pull/5052))
- **Dual list selector:**
  - Added new component ([#5120](https://github.com/patternfly/patternfly-react/pull/5120))
- **Dropdown:**
  - Update disabled dropdown items for accessability ([#5044](https://github.com/patternfly/patternfly-react/pull/5044))
- **Form:** 
  - Added more tests around keyboard interactivity in forms ([#5083](https://github.com/patternfly/patternfly-react/pull/5083))
- **Jump links:**
  - Added jump links component ([#5089](https://github.com/patternfly/patternfly-react/pull/5089))
- **Menu:** 
  - Added new menu component ([#4847](https://github.com/patternfly/patternfly-react/pull/4847))
- **Modal:** 
  - Added/updated cypress tests for modal ([#5081](https://github.com/patternfly/patternfly-react/pull/5081))
- **Navigation:** 
  - Moved page html demos to navigation component ([#5109](https://github.com/patternfly/patternfly-react/pull/5109))
- **Page:** 
  - Moved page html demos to navigation component ([#5109](https://github.com/patternfly/patternfly-react/pull/5109))
- **Skeleton:** 
  - Updated skeleton examples ([#5072](https://github.com/patternfly/patternfly-react/pull/5072))
- **Splitter:** 
  - Removed splitter component ([#5105](https://github.com/patternfly/patternfly-react/pull/5105))
- **Tree view:**
  -  Added support for indeterminate checkboxes without requiring consumer to use refs ([#5150](https://github.com/patternfly/patternfly-react/pull/5150))
- **Toolbar:** 
  - Added flag to match page insets ([#5098](https://github.com/patternfly/patternfly-react/pull/5098))
  - Updated breakpoints and formatting examples. Created collapsed variant. ([#5123](https://github.com/patternfly/patternfly-react/pull/5123))
- **Touchspin:** 
  - Added touchspin component ([#5115](https://github.com/patternfly/patternfly-react/pull/5115))

### Access console extension
- Ported react-console from PF3 branch - move to typescript and utilize PF4 components ([#4907](https://github.com/patternfly/patternfly-react/pull/4907))
- Removed css imports ([#5147](https://github.com/patternfly/patternfly-react/pull/5147))

### Catalog view extension
- Fixed typings in filter side panel category item ([#5145](https://github.com/patternfly/patternfly-react/pull/5145))

### Date time
- **Date picker:** 
  - Add calendar component ([#5026](https://github.com/patternfly/patternfly-react/pull/5026))
- **Calendar month:** 
  - Handle undefined onToggle and add docs note ([#5143](https://github.com/patternfly/patternfly-react/pull/5143))

### Table 
- Added composable table components ([#4950](https://github.com/patternfly/patternfly-react/pull/4950))
- Added table info transform ([#5075](https://github.com/patternfly/patternfly-react/pull/5075))
- Fixed to set button type on compoundExpand transform button ([#5058](https://github.com/patternfly/patternfly-react/pull/5058))
- Fixed issues related to tables with an ID column ([#5152](https://github.com/patternfly/patternfly-react/pull/5152))

### Virtualized extension
- Added virtualized examples with composable components ([#5122](https://github.com/patternfly/patternfly-react/pull/5122))

### Other
- **Chore:**
  - Cleanup dependencies ([#5060](https://github.com/patternfly/patternfly-react/pull/5060))
  - Bumped Victory package ([#5116](https://github.com/patternfly/patternfly-react/pull/5116))
  - Fixed circular deps ([#5086](https://github.com/patternfly/patternfly-react/pull/5086))
  - Fixed example codesandbox ([#5065](https://github.com/patternfly/patternfly-react/pull/5065))
- **Demos:** 
  - Added sticky bottom pagination to the card demo ([#5000](https://github.com/patternfly/patternfly-react/pull/5000))
- **Docs:** 
  - Add missing fieldId prop in sample code ([#5059](https://github.com/patternfly/patternfly-react/pull/5059))
  - Update getting-started.md ([#5062](https://github.com/patternfly/patternfly-react/pull/5062))
  - Removed get started, add developer resources, moved release notes & upgrade guide ([#5091](https://github.com/patternfly/patternfly-react/pull/5091))


## 2020.14 release notes (2020-10-27)
- [@patternfly/react-catalog-view-extension@4.8.89](https://www.npmjs.com/package/@patternfly/react-catalog-view-extension/v/4.8.89)
- [@patternfly/react-charts@6.11.7](https://www.npmjs.com/package/@patternfly/react-charts/v/6.11.7)
- [@patternfly/react-core@4.75.2](https://www.npmjs.com/package/@patternfly/react-core/v/4.75.2)
- [@patternfly/react-icons@4.7.16](https://www.npmjs.com/package/@patternfly/react-icons/v/4.7.16)
- [@patternfly/react-inline-edit-extension@4.5.147](https://www.npmjs.com/package/@patternfly/react-inline-edit-extension/v/4.5.147)
- [@patternfly/react-styles@4.7.12](https://www.npmjs.com/package/@patternfly/react-styles/v/4.7.12)
- [@patternfly/react-table@4.19.5](https://www.npmjs.com/package/@patternfly/react-table/v/4.19.5)
- [@patternfly/react-tokens@4.9.16](https://www.npmjs.com/package/@patternfly/react-tokens/v/4.9.16)
- [@patternfly/react-topology@4.6.54](https://www.npmjs.com/package/@patternfly/react-topology/v/4.6.54)
- [@patternfly/react-virtualized-extension@4.5.134](https://www.npmjs.com/package/@patternfly/react-virtualized-extension/v/4.5.134)

### Components
- **Alert:** 
  - Added tooltips to truncated titles ([#5043](https://github.com/patternfly/patternfly-react/pull/5043))
  - Added support for callback on alert timeout ([#5014](https://github.com/patternfly/patternfly-react/pull/5014))
- **Backdrop:** 
  - Added backdrop examples ([#5009](https://github.com/patternfly/patternfly-react/pull/5009))
- **Button:** 
  - Fixed sandbox for button examples with tooltips ([#5033](https://github.com/patternfly/patternfly-react/pull/5033))
- **Context selector:** 
  - Added footer to selector ([#4976](https://github.com/patternfly/patternfly-react/pull/4976))
- **Data list:**
  - Added documentation for properties of DataListDragButton ([#5047](https://github.com/patternfly/patternfly-react/pull/5047))
  - Added expand/collapse all ([#5034](https://github.com/patternfly/patternfly-react/pull/5034))
  - Exposed grid modifiers as properties ([#4969](https://github.com/patternfly/patternfly-react/pull/4969))
  - Fixed to cancel moving for invalid drops ([#4996](https://github.com/patternfly/patternfly-react/pull/4996))
  - Converted DataListAction to functional component ([#4947](https://github.com/patternfly/patternfly-react/pull/4947))
- **Date picker:** 
  - Exposed date picker input ([#5011](https://github.com/patternfly/patternfly-react/pull/5011))
- **Dropdown:** 
  - Tested and update dropdown to work better in JAWS ([#4951](https://github.com/patternfly/patternfly-react/pull/4951))
- **Empty state:**
  - Added extra small variation ([#5012](https://github.com/patternfly/patternfly-react/pull/5012))
  - Removed duplicate example, use title case ([#4954](https://github.com/patternfly/patternfly-react/pull/4954))
- **Form:** 
  - Added FormAlert, isLimitWidth, and allowed helper text above field ([#5036](https://github.com/patternfly/patternfly-react/pull/5036))
  - Added FormSection component ([#4971](https://github.com/patternfly/patternfly-react/pull/4971))
- **Input group:** 
  - Updated to allow string children ([#4963](https://github.com/patternfly/patternfly-react/pull/4963))
- **Label:**
  - Added tooltip to truncated text ([#5007](https://github.com/patternfly/patternfly-react/pull/5007))
- **Label group:** 
  - Updated to always contain pf-c-label-group__main ([#4970](https://github.com/patternfly/patternfly-react/pull/4970))
- **Modal:** 
  - Added help section to the modal header ([#5002](https://github.com/patternfly/patternfly-react/pull/5002))
  - Removed duplicate pf-c-modal-box__title from ModalContent ([#4980](https://github.com/patternfly/patternfly-react/pull/4980))
  - Added alert variation ([#4939](https://github.com/patternfly/patternfly-react/pull/4939))
- **Navigation:** 
  - Fixed aria label not getting applied ([#4944](https://github.com/patternfly/patternfly-react/pull/4944))
  - Fixed selectors for dark background ([#4952](https://github.com/patternfly/patternfly-react/pull/4952))
  - Added OUIA props into NavExpandable ([#4930](https://github.com/patternfly/patternfly-react/pull/4930))
- **Notification drawer:** 
  - Added tooltips to truncated titles ([#5043](https://github.com/patternfly/patternfly-react/pull/5043))
- **Page:** 
  - Updated for page section enhancements ([#5025](https://github.com/patternfly/patternfly-react/pull/5025))
- **Pagination:** 
  - Added sticky modifier flag ([#4977](https://github.com/patternfly/patternfly-react/pull/4977))
- **Select:** 
  - Updated to display label and not value in typeahead ([#4916](https://github.com/patternfly/patternfly-react/pull/4916))
  - Fixed to skip the divider children in getDisplay ([#4998](https://github.com/patternfly/patternfly-react/pull/4998))
  - Updated to allow custom chip render props in the multi typeahead select ([#5031](https://github.com/patternfly/patternfly-react/pull/5031))
- **Skeleton:** 
  - Added screen reader text to skeleton ([#5032](https://github.com/patternfly/patternfly-react/pull/5032))
- **Splitter:** 
  - Added Splitter component ([#5051](https://github.com/patternfly/patternfly-react/pull/5051))
- **Tab:** 
  - Fixed so tab component properties show in the docs ([#4851](https://github.com/patternfly/patternfly-react/pull/4851))
- **Text area:** 
  - Added support for passing a ref ([#4953](https://github.com/patternfly/patternfly-react/pull/4953))
- **Toggle group:**
  - Added support for text and icon ([#4999](https://github.com/patternfly/patternfly-react/pull/4999))
- **Tree view:**
  - Replaced button wrapper around actions with a div ([#4967](https://github.com/patternfly/patternfly-react/pull/4967))
- **Wizard:** 
  - Updated to export WizardContext  ([#4933](https://github.com/patternfly/patternfly-react/pull/4933))

### Catalog view extension
- Fixed example css selectors ([#4966](https://github.com/patternfly/patternfly-react/pull/4966))

### Chart
- Fixed example button location ([#4993](https://github.com/patternfly/patternfly-react/pull/4993))
- Fixed legend example size ([#4995](https://github.com/patternfly/patternfly-react/pull/4995))
- Fixed stack chart example size ([#4994](https://github.com/patternfly/patternfly-react/pull/4994))
- Fixed legend tooltip example ([#5006](https://github.com/patternfly/patternfly-react/pull/5006))

### Table
- Fixed compound expandable data labels ([#5017](https://github.com/patternfly/patternfly-react/pull/5017))
- Updated demo to show expand/collapse all examples ([#5030](https://github.com/patternfly/patternfly-react/pull/5030))
- Reverted table type definitions ([#5158](https://github.com/patternfly/patternfly-react/pull/5158))

### Topology
- Added notification on graph position/scale/extent changes ([#5004](https://github.com/patternfly/patternfly-react/pull/5004))
- Updated to not update nodes on layout when fixed ([#4978](https://github.com/patternfly/patternfly-react/pull/4978))
- Fixed for issue when dragging nodes that get re-created ([#4975](https://github.com/patternfly/patternfly-react/pull/4975))

### Other
- **Chore:** 
  - Fixed linting errors in nav and modal demos ([#5015](https://github.com/patternfly/patternfly-react/pull/5015))
  - Added keyboard interactivity test for button ([#5037](https://github.com/patternfly/patternfly-react/pull/5037))
  - Added git hook for linting ([#5003](https://github.com/patternfly/patternfly-react/pull/5003))
  - Fixed typescript complaining about missing default export when importing React ([#4938](https://github.com/patternfly/patternfly-react/pull/4938))
- **Deps:**
  - Pinned dependency theme-patternfly-org to 0.1.25 ([#4986](https://github.com/patternfly/patternfly-react/pull/4986))
  - Locked tslib to 1.13.0 for consumers ([#4981](https://github.com/patternfly/patternfly-react/pull/4981))
  - Bumped Victory pkgs ([#4992](https://github.com/patternfly/patternfly-react/pull/4992))
- **Docs:** 
  - Bumped theme ([#4984](https://github.com/patternfly/patternfly-react/pull/4984))
  - Added virtualized extension back to site ([#4972](https://github.com/patternfly/patternfly-react/pull/4972))

## 2020.13 release notes (2020-10-06)
- [@patternfly/react-catalog-view-extension@4.8.60](https://www.npmjs.com/package/@patternfly/react-catalog-view-extension/v/4.8.60)
- [@patternfly/react-charts@6.10.4](https://www.npmjs.com/package/@patternfly/react-charts/v/6.10.4)
- [@patternfly/react-core@4.63.3](https://www.npmjs.com/package/@patternfly/react-core/v/4.63.3)
- [@patternfly/react-icons@4.7.11](https://www.npmjs.com/package/@patternfly/react-icons/v/4.7.11)
- [@patternfly/react-inline-edit-extension@4.5.117](https://www.npmjs.com/package/@patternfly/react-inline-edit-extension/v/4.5.117)
- [@patternfly/react-styles@4.7.8](https://www.npmjs.com/package/@patternfly/react-styles/v/4.7.8)
- [@patternfly/react-table@4.18.14](https://www.npmjs.com/package/@patternfly/react-table/v/4.18.14)
- [@patternfly/react-tokens@4.9.12](https://www.npmjs.com/package/@patternfly/react-tokens/v/4.9.12)
- [@patternfly/react-topology@4.6.25](https://www.npmjs.com/package/@patternfly/react-topology/v/4.6.25)
- [@patternfly/react-virtualized-extension@4.5.105](https://www.npmjs.com/package/@patternfly/react-virtualized-extension/v/4.5.105)

### Components
- **Button:** 
  - Added support for spinner in button ([#4837](https://github.com/patternfly/patternfly-react/pull/4837))
  - Added support for warning variant ([#4829](https://github.com/patternfly/patternfly-react/pull/4829))
  - Added support for inline link variation that acts like a link ([#4859](https://github.com/patternfly/patternfly-react/pull/4859))
- **Chip group:**
  - Added main div to chip group to fix close button wrapping ([#4873](https://github.com/patternfly/patternfly-react/pull/4873))
- **Data list:** 
  - Added draggable feature for basic list ([#4852](https://github.com/patternfly/patternfly-react/pull/4852))
  - Added support for text modifiers ([#4846](https://github.com/patternfly/patternfly-react/pull/4846))
  - Added ref to omit list ([#4948](https://github.com/patternfly/patternfly-react/pull/4948))
  - Updated aria of data list ([#4913](https://github.com/patternfly/patternfly-react/pull/4913))
- **Date picker:** 
  - Added basic date picker ([#4888](https://github.com/patternfly/patternfly-react/pull/4888))
- **Dropdown:** 
  - Fixed indeterminate warning in dropdown toggle checkbox([#4844](https://github.com/patternfly/patternfly-react/pull/4844))
  - Added more OUIA props into dropdown component ([#4754](https://github.com/patternfly/patternfly-react/pull/4754))
  - Deprecated the unused openOnEnter prop and removed unused isFocused and isHovered from the dropdown toggle ([#4843](https://github.com/patternfly/patternfly-react/pull/4843))
- **Label:** 
  - Added support for React router ([#4934](https://github.com/patternfly/patternfly-react/pull/4934))
- **Label group:** 
  - Added label group main div for categories ([#4923](https://github.com/patternfly/patternfly-react/pull/4923))
- **Modal:** 
  - Added top align to modal ([#4871](https://github.com/patternfly/patternfly-react/pull/4871))
- **Nav:**
  - Added OUIA support into nav item ([#4769](https://github.com/patternfly/patternfly-react/pull/4769))
- **Notification drawer:** 
  - Added default variation to notification items ([#4792](https://github.com/patternfly/patternfly-react/pull/4792))
  - Removed unused import ([#4843](https://github.com/patternfly/patternfly-react/pull/4843))
- **Page:** 
  - Replaced hasNoPadding property in the documentation example ([#4848](https://github.com/patternfly/patternfly-react/pull/4848))
  - Fixed handleMainClick function signature ([#4843](https://github.com/patternfly/patternfly-react/pull/4843))
- **Progress:** 
  - Added warning variant ([#4834](https://github.com/patternfly/patternfly-react/pull/4834))
  - Added truncation ([#4842](https://github.com/patternfly/patternfly-react/pull/4842))
- **Select:** 
  - Added support for divider in select ([#4772](https://github.com/patternfly/patternfly-react/pull/4772))
  - Cleaned up some typeahead behaviors ([#4864](https://github.com/patternfly/patternfly-react/pull/4864))
  - Fixed grouped Select generating invalid HTML ([#4919](https://github.com/patternfly/patternfly-react/pull/4919))
  - Added support to pass chip group props on typeaheadmulti variant ([#4855](https://github.com/patternfly/patternfly-react/pull/4855))
  - Updated to return the string value for select chips ([#4915](https://github.com/patternfly/patternfly-react/pull/4915))
  - Passed aria-label / aria-labelledby to the `<ul role="listbox">` to prevent axe issues ([#4931](https://github.com/patternfly/patternfly-react/pull/4931))
  - Updated to remove the clear button button when onClear function is not specified for typeahead ([#4887](https://github.com/patternfly/patternfly-react/pull/4887))
- **Tabs:** 
  - Added support for light scheme variant in Tabs && TabContent ([#4832](https://github.com/patternfly/patternfly-react/pull/4832))
  - Conditionally render aria-controls when mountOnEnter ([#4796](https://github.com/patternfly/patternfly-react/pull/4796))
- **Tooltip** 
  - Updated to export TooltipProps as a type to help babel ([#4854](https://github.com/patternfly/patternfly-react/pull/4854))

### Catalog view extension
- Added back catalogue items ([#4940](https://github.com/patternfly/patternfly-react/pull/4940))

### Charts
- Replaced or used exact lodash imports ([#4830](https://github.com/patternfly/patternfly-react/pull/4830))

### Icons
- Reverted support for svg alt tags ([#4935](https://github.com/patternfly/patternfly-react/pull/4935))

### Table
- Fixed expandable cell content always being on `<td>` ([#4899](https://github.com/patternfly/patternfly-react/pull/4899))
- Added support for single row radio select ([#4925](https://github.com/patternfly/patternfly-react/pull/4925))
- Replaced or used exact lodash imports ([#4830](https://github.com/patternfly/patternfly-react/pull/4830))

### Topology
- Fixed exports ([#4927](https://github.com/patternfly/patternfly-react/pull/4927))
- Fixed selector for cancelling dnd ([#4850](https://github.com/patternfly/patternfly-react/pull/4850))
- Updated to wrap drag event handlers in actions ([#4826](https://github.com/patternfly/patternfly-react/pull/4826))

### Other
- **Chore:** 
  - Configured Renovate ([#4889](https://github.com/patternfly/patternfly-react/pull/4889))
  - Fixed and re-added PatternFly a11y to CI ([#4879](https://github.com/patternfly/patternfly-react/pull/4879))
  - Removed most warnings generated when building the docs ([#4911](https://github.com/patternfly/patternfly-react/pull/4911))
  - Use new doc theme in workspace ([#4840](https://github.com/patternfly/patternfly-react/pull/4840))
  - Added transformer-cjs-imports ([#4910](https://github.com/patternfly/patternfly-react/pull/4910))
  - Upgrade react-hooks ([#4857](https://github.com/patternfly/patternfly-react/pull/4857))
  - Removed config from dependabot ([#4908](https://github.com/patternfly/patternfly-react/pull/4908))
  - Fixed build to use same patternfly versions ([#4928](https://github.com/patternfly/patternfly-react/pull/4928))
- **Demos:** 
  - Fixed component padding in primary detail demo ([#4808](https://github.com/patternfly/patternfly-react/pull/4808))
- **Demo app:** 
  - Replaced CRA with webpack and ts-loader ([#4877](https://github.com/patternfly/patternfly-react/pull/4877))
- **Deps:**
  - Pinned dependency @patternfly/patternfly-a11y to 2.0.10 ([#4895](https://github.com/patternfly/patternfly-react/pull/4895))
  - Updated dependency @patternfly/patternfly-a11y to v2.0.11 ([#4898](https://github.com/patternfly/patternfly-react/pull/4898))
  - Bumped security deps and regenerate lockfile ([#4794](https://github.com/patternfly/patternfly-react/pull/4794))
- **Docs:** 
  - Changed overview to get-started ([#4862](https://github.com/patternfly/patternfly-react/pull/4862))
  - Removed out of date links from the readme ([#4921](https://github.com/patternfly/patternfly-react/pull/4921))
  - Fixed broken links ([#4870](https://github.com/patternfly/patternfly-react/pull/4870))

### PF3
- **Vertical nav:**
  - Updates to not handle modified clicks on VerticalNav links ([#4747](https://github.com/patternfly/patternfly-react/pull/4747))

## 2020.12 release notes (2020-09-17)
- [@patternfly/react-catalog-view-extension@4.8.31](https://www.npmjs.com/package/@patternfly/react-catalog-view-extension/v/4.8.31)
- [@patternfly/react-charts@6.9.8](https://www.npmjs.com/package/@patternfly/react-charts/v/6.9.8)
- [@patternfly/react-core@4.50.2](https://www.npmjs.com/package/@patternfly/react-core/v/4.50.2)
- [@patternfly/react-icons@4.7.6](https://www.npmjs.com/package/@patternfly/react-icons/v/4.7.6)
- [@patternfly/react-inline-edit-extension@4.5.87](https://www.npmjs.com/package/@patternfly/react-inline-edit-extension/v/4.5.87)
- [@patternfly/react-styles@4.7.5](https://www.npmjs.com/package/@patternfly/react-styles/v/4.7.5)
- [@patternfly/react-table@4.16.20](https://www.npmjs.com/package/@patternfly/react-table/v/4.16.20)
- [@patternfly/react-tokens@4.9.8](https://www.npmjs.com/package/@patternfly/react-tokens/v/4.9.8)
- [@patternfly/react-topology@4.5.14](https://www.npmjs.com/package/@patternfly/react-topology/v/4.5.14)
- [@patternfly/react-virtualized-extension@4.5.76](https://www.npmjs.com/package/@patternfly/react-virtualized-extension/v/4.5.76)

### Components
- **Card:** 
  - Added ability to customize card title and support heading element ([#4761](https://github.com/patternfly/patternfly-react/pull/4761))
- **Chip Group:**
  - Added OUIA props into chip group ([#4749](https://github.com/patternfly/patternfly-react/pull/4749))
- **Drawer:** 
  - Added bottom panel variation ([#4771](https://github.com/patternfly/patternfly-react/pull/4771))
- **Dropdown:**
  - Fixed indeterminate warning in dropdown toggle checkbox ([#4844](https://github.com/patternfly/patternfly-react/pull/4844))
- **Label group:**
  - Added label group component ([#4775](https://github.com/patternfly/patternfly-react/pull/4775))
- **Nav:** 
  - Added href to nav examples ([#4789](https://github.com/patternfly/patternfly-react/pull/4789))
- **Notification drawer:** 
  - Added x close button to notification drawer ([#4739](https://github.com/patternfly/patternfly-react/pull/4739))
- **Page:** 
  - Hid PageSideBar onClick on mobile when isManagedSidebar is true ([#4781](https://github.com/patternfly/patternfly-react/pull/4781))
- **Popover:**
  - Added header cell information for tooltip/popover ([#4778](https://github.com/patternfly/patternfly-react/pull/4778))
- **Select:** 
  - Added support for favorites ([#4642](https://github.com/patternfly/patternfly-react/pull/4642))
- **Skeleton:** 
  - Added skeleton component ([#4755](https://github.com/patternfly/patternfly-react/pull/4755))
- **Tabs:**
  - Handled activeKey props and update with mountOnEnter on tabs ([#4806](https://github.com/patternfly/patternfly-react/pull/4806))
  - Updated TabButton and TabContent with OUIA ([#4743](https://github.com/patternfly/patternfly-react/pull/4743))
- **Tests:** 
  - Updated drawer snapshots ([#4814](https://github.com/patternfly/patternfly-react/pull/4814))
- **Toolbar:**
  - Added insets property ([#4757](https://github.com/patternfly/patternfly-react/pull/4757))
- **Tooltip:**
  - Added aria-labels to tooltip example checkboxes ([#4788](https://github.com/patternfly/patternfly-react/pull/4788))
  - Added header cell information for tooltip/popover ([#4778](https://github.com/patternfly/patternfly-react/pull/4778))

### Topology
  - Enabled saving current topology graph model ([#4690](https://github.com/patternfly/patternfly-react/pull/4690))
  - Wrapped drag event handlers in actions ([#4826](https://github.com/patternfly/patternfly-react/pull/4826))

### Other
- **Chore:** 
  - Used updated icons ([#4764](https://github.com/patternfly/patternfly-react/pull/4764))
  - Added better ouia defaults ([#4746](https://github.com/patternfly/patternfly-react/pull/4746))
- **Deps:** 
  - Bump prismjs from 1.17.1 to 1.21.0 ([#4675](https://github.com/patternfly/patternfly-react/pull/4675))
- **Docs:** 
  - Marked search input as beta ([#4774](https://github.com/patternfly/patternfly-react/pull/4774))
- **Demos:** 
  - Changed double dashes to single in examples in master detail demo ([#4804](https://github.com/patternfly/patternfly-react/pull/4804))

## 2020.11 release notes (2020-08-26)
- [@patternfly/react-catalog-view-extension@4.8.18](https://www.npmjs.com/package/@patternfly/react-catalog-view-extension/v/4.8.18)
- [@patternfly/react-charts@6.9.6](https://www.npmjs.com/package/@patternfly/react-charts/v/6.9.6)
- [@patternfly/react-core@4.47.0](https://www.npmjs.com/package/@patternfly/react-core/v/4.47.0)
- [@patternfly/react-icons@4.7.4](https://www.npmjs.com/package/@patternfly/react-icons/v/4.7.4)
- [@patternfly/react-inline-edit-extension@4.5.74](https://www.npmjs.com/package/@patternfly/react-inline-edit-extension/v/4.5.74)
- [@patternfly/react-styles@4.7.3](https://www.npmjs.com/package/@patternfly/react-styles/v/4.7.3)
- [@patternfly/react-table@4.16.7](https://www.npmjs.com/package/@patternfly/react-table/v/4.16.7)
- [@patternfly/react-tokens@4.9.6](https://www.npmjs.com/package/@patternfly/react-tokens/v/4.9.6)
- [@patternfly/react-topology@4.4.75](https://www.npmjs.com/package/@patternfly/react-topology/v/4.4.75)
- [@patternfly/react-virtualized-extension@4.5.63](https://www.npmjs.com/package/@patternfly/react-virtualized-extension/v/4.5.63)

### Components
- **Alert:**
  - Added support to truncate title ([#4399](https://github.com/patternfly/patternfly-react/pull/4399))
- **Label:**
  - Added no overflow prop ([#4680](https://github.com/patternfly/patternfly-react/pull/4680))
- **Modal:**
  - Added medium variant ([#4678](https://github.com/patternfly/patternfly-react/pull/4678))
- **Notification drawer:**
  - Added support to truncate title ([#4399](https://github.com/patternfly/patternfly-react/pull/4399))
  - Added formatHeaderText prop to support customize notification drawer header text ([#4684](https://github.com/patternfly/patternfly-react/pull/4684))
- **Page:**
  - Added width limit prop ([#4686](https://github.com/patternfly/patternfly-react/pull/4686))
  - Added missing tertiary nav demo, integration, and cypress test ([#4707](https://github.com/patternfly/patternfly-react/pull/4707))
- **Search input:**
  - Use title case id in docs ([#4725](https://github.com/patternfly/patternfly-react/pull/4725))
- **Tabs:**
  - Added classNames to tab ([#4578](https://github.com/patternfly/patternfly-react/pull/4578))
- **Text input:**
  - Added helper util for left trim ([#4691](https://github.com/patternfly/patternfly-react/pull/4691))
- **Tile:**
  - Added new tile component ([#4610](https://github.com/patternfly/patternfly-react/pull/4610))
- **Toggle group:**
  - Added new toggle group component ([#4702](https://github.com/patternfly/patternfly-react/pull/4702))
- **Tree view:**
  - Added new tree view component ([#4701](https://github.com/patternfly/patternfly-react/pull/4701))

### Catalog view extension
- **Catalog tile:** 
  - Added children prop ([#4674](https://github.com/patternfly/patternfly-react/pull/4674))

### Table
- Fixed table showing cell tooltips on non text cells ([#4689](https://github.com/patternfly/patternfly-react/pull/4689))

### Other
- **Demos:**
  - Renamed master detail demo to primary-detail ([#4703](https://github.com/patternfly/patternfly-react/pull/4703))

## 2020.10 release notes (2020-08-17)
- [@patternfly/react-catalog-view-extension@4.8.5](https://www.npmjs.com/package/@patternfly/react-catalog-view-extension/v/4.8.5)
- [@patternfly/react-charts@6.9.4](https://www.npmjs.com/package/@patternfly/react-charts/v/6.9.4)
- [@patternfly/react-core@4.40.4](https://www.npmjs.com/package/@patternfly/react-core/v/4.40.4)
- [@patternfly/react-icons@4.7.2](https://www.npmjs.com/package/@patternfly/react-icons/v/4.7.2)
- [@patternfly/react-inline-edit-extension@4.5.61](https://www.npmjs.com/package/@patternfly/react-inline-edit-extension/v/4.5.61)
- [@patternfly/react-styles@4.7.2](https://www.npmjs.com/package/@patternfly/react-styles/v/4.7.2)
- [@patternfly/react-table@4.15.5](https://www.npmjs.com/package/@patternfly/react-table/v/4.15.5)
- [@patternfly/react-tokens@4.9.4](https://www.npmjs.com/package/@patternfly/react-tokens/v/4.9.4)
- [@patternfly/react-topology@4.4.63](https://www.npmjs.com/package/@patternfly/react-topology/v/4.4.63)
- [@patternfly/react-virtualized-extension@4.5.51](https://www.npmjs.com/package/@patternfly/react-virtualized-extension/v/4.5.51)

### Components
- **Button:**
  - Added isLarge modifier prop (call to action) ([#4596](https://github.com/patternfly/patternfly-react/pull/4596))
- **Chip group:**
  - Added type button to overflow chip button ([#4608](https://github.com/patternfly/patternfly-react/pull/4608))
  - Changed TimesIcon to TimesCircleIcon in Chips ([#4550](https://github.com/patternfly/patternfly-react/pull/4550))
- **Description list:** 
  - Added new description list component ([#4586](https://github.com/patternfly/patternfly-react/pull/4586))
- **Clipboard copy:** 
  - Updated to maintain line breaks & spaces when copying text ([#4619](https://github.com/patternfly/patternfly-react/pull/4619))
- **Dropdown**
  - Updated dropdown with image example to use an avatar ([#4566](https://github.com/patternfly/patternfly-react/pull/4566))
- **Expandable section:** 
  - Made children optional ([#4621](https://github.com/patternfly/patternfly-react/pull/4621))
- **Hint:**
  - Added hint components ([#4595](https://github.com/patternfly/patternfly-react/pull/4595))
- **Modal:** 
  - Updated to ensure getElement does not return null ([#4544](https://github.com/patternfly/patternfly-react/pull/4544))
- **Nav expandable:**
  - Converted nav expandable to button ([#4512](https://github.com/patternfly/patternfly-react/pull/4512))
- **Notification badge:**
  - Added needs attention state and count ([#4516](https://github.com/patternfly/patternfly-react/pull/4516))
- **Notification drawer:**
  - Fixed accessibility issues and add accessibility test cases ([#4466](https://github.com/patternfly/patternfly-react/pull/4466))
- **Overflow menu:**
  - Updated to allow0 passing dropdown item props to overflow menu dropdown item ([#4536](https://github.com/patternfly/patternfly-react/pull/4536))
- **Page** 
  - Fixed breakpoint typo in PageHeaderToolsItem: ([#4634](https://github.com/patternfly/patternfly-react/pull/4634))
  - Used the correct type for the page context ([#4576](https://github.com/patternfly/patternfly-react/pull/4576))
- **Popover:** 
  - Added reference prop ([#4546](https://github.com/patternfly/patternfly-react/pull/4546))
  - Updated to propagate clicks ([#4585](https://github.com/patternfly/patternfly-react/pull/4585))
- **Search input:** 
  - Added new search input component ([#4588](https://github.com/patternfly/patternfly-react/pull/4588))
- **Select:** 
  - Fixed maximum call stack size exceeded in a read-only typeahead Select field when pressing enter ([#4616](https://github.com/patternfly/patternfly-react/pull/4616))
  - Fixed type error on undefined valueToCheck.toString ([#4603](https://github.com/patternfly/patternfly-react/pull/4603))
  - Allowed typeahead groups, fixed a few bugs around groups ([#4622](https://github.com/patternfly/patternfly-react/pull/4622))
  - Fixed space/enter closing typeahead variants incorrectly ([#4663](https://github.com/patternfly/patternfly-react/pull/4663))
  - Use width prop in select ([#4579](https://github.com/patternfly/patternfly-react/pull/4579))
- **Toolbar:** 
  - Changed spelling of visiblity prop to visibility([#4560](https://github.com/patternfly/patternfly-react/pull/4560))
  - Fixed so delete chip does not expects categoryKey as string ([#4553](https://github.com/patternfly/patternfly-react/pull/4553))
- **Tooltip:** 
  - Added reference prop ([#4546](https://github.com/patternfly/patternfly-react/pull/4546))
- **Wizard:** 
  - Made wizard nav items more easily discoverable ([#4425](https://github.com/patternfly/patternfly-react/pull/4425))

### Charts
  - Updated chart imports ([#4645](https://github.com/patternfly/patternfly-react/pull/4645))
  - Updated Victory packages to support OUIA props ([#4633](https://github.com/patternfly/patternfly-react/pull/4633))

### Table
  - Updated to custom properties for actions ([#4559](https://github.com/patternfly/patternfly-react/pull/4559))

### Tokens
  - Added component index ([#4572](https://github.com/patternfly/patternfly-react/pull/4572))
  - Fixed .d.ts typo ([#4669](https://github.com/patternfly/patternfly-react/pull/4669))

### Topology
  - Moved @types to the dependencies list ([#4569](https://github.com/patternfly/patternfly-react/pull/4569))
  - Re-parented nodes with invalid parents to graph ([#4629](https://github.com/patternfly/patternfly-react/pull/4629))

### Other
- **Chore:**
  - Fixed sentence case in 2020.09 notes ([#4571](https://github.com/patternfly/patternfly-react/pull/4571))
  - Bumped lodash to 4.17.19 ([#4580](https://github.com/patternfly/patternfly-react/pull/4580))
  - Replaced classnames with css function ([#4582](https://github.com/patternfly/patternfly-react/pull/4582))
- **Demos:** 
  - Fixed demo headers and imports ([#4607](https://github.com/patternfly/patternfly-react/pull/4607))
  - Added notification drawer demo ([#4640](https://github.com/patternfly/patternfly-react/pull/4640))
- **Docs:**
  - Updated to use h3s for titles ([#4570](https://github.com/patternfly/patternfly-react/pull/4570))
  - Added missing imports to React doc ([#4627](https://github.com/patternfly/patternfly-react/pull/4627))
  - Moved non-patternfly deps to devDeps in React docs ([#4584](https://github.com/patternfly/patternfly-react/pull/4584))
  - Fixed title syntax in react docs ([#4628](https://github.com/patternfly/patternfly-react/pull/4628))
  - Fixed typos in upgrade guide ([#4601](https://github.com/patternfly/patternfly-react/pull/4601))

## 2020.09 release notes (2020-07-17)
- [@patternfly/react-catalog-view-extension@4.5.1](https://www.npmjs.com/package/@patternfly/react-catalog-view-extension/v/4.5.1)
- [@patternfly/react-charts@6.6.0](https://www.npmjs.com/package/@patternfly/react-charts/v/6.6.0)
- [@patternfly/react-core@4.32.1](https://www.npmjs.com/package/@patternfly/react-core/v/4.32.1)
- [@patternfly/react-icons@4.5.0](https://www.npmjs.com/package/@patternfly/react-icons/v/4.5.0)
- [@patternfly/react-inline-edit-extension@4.5.28](https://www.npmjs.com/package/@patternfly/react-inline-edit-extension/v/4.5.28)
- [@patternfly/react-styles@4.5.0](https://www.npmjs.com/package/@patternfly/react-styles/v/4.5.0)
- [@patternfly/react-table@4.12.1](https://www.npmjs.com/package/@patternfly/react-table/v/4.12.1)
- [@patternfly/react-tokens@4.6.0](https://www.npmjs.com/package/@patternfly/react-tokens/v/4.6.0)
- [@patternfly/react-topology@4.4.30](https://www.npmjs.com/package/@patternfly/react-topology/v/4.4.30)
- [@patternfly/react-virtualized-extension@4.5.20](https://www.npmjs.com/package/@patternfly/react-virtualized-extension/v/4.5.20)

### Components
- **Alert:** 
  - Added alert timeout functionality ([#4510](https://github.com/patternfly/patternfly-react/pull/4510))
  - Added display name to the close action button ([#4426](https://github.com/patternfly/patternfly-react/pull/4426))
- **Button:** 
  - Added support for small variation ([#4433](https://github.com/patternfly/patternfly-react/pull/4433))
- **Data list:** 
  - Added support for action containers in data list ([#4488](https://github.com/patternfly/patternfly-react/pull/4488))
- **Drawer:** 
  - Renamed onMount to onExpand and add animation timeout ([#4508](https://github.com/patternfly/patternfly-react/pull/4508))
  - Fixed small mistake in the documentation for drawer ([#4473](https://github.com/patternfly/patternfly-react/pull/4473))
- **Drawer panel content:**
  - Update to not render children when hidden ([#4500](https://github.com/patternfly/patternfly-react/pull/4500))
- **Dropdown:** 
  - Added description to Dropdown item ([#4468](https://github.com/patternfly/patternfly-react/pull/4468))
  - Added support and documentation for styleChildren to dropdown item ([#4476](https://github.com/patternfly/patternfly-react/pull/4476))
  - Made the interactions in the demo more life-like ([#4492](https://github.com/patternfly/patternfly-react/pull/4492))
- **Expandable section:** 
  - Update to pass expandable value to onToggle ([#4427](https://github.com/patternfly/patternfly-react/pull/4427))
- **Form:**    
  - Added warning state ([#4554](https://github.com/patternfly/patternfly-react/pull/4554))
- **Form select:** 
  - Added warning state ([#4554](https://github.com/patternfly/patternfly-react/pull/4554))
- **Options menu:** 
  - Fixed accessibility bug in plain with text disabled part ([#4424](https://github.com/patternfly/patternfly-react/pull/4424))
- **Page header tools:**
  - Updated to make page header tools item visibility props optional ([#4486](https://github.com/patternfly/patternfly-react/pull/4486))
- **Popover:**
  - Rewrote tooltip/popover to use popper ([#4491](https://github.com/patternfly/patternfly-react/pull/4491))
  - Added tippyProps back so as not to cause breaking changes ([#4543](https://github.com/patternfly/patternfly-react/pull/4543))
  - Updates to house popper dependencies, added tippy back as a dependency ([#4565](https://github.com/patternfly/patternfly-react/pull/4565))
- **Select:** 
  - Added logic to handle SelectOptionObject in comparisons ([#4469](https://github.com/patternfly/patternfly-react/pull/4469))
  - Added option description property ([#4460](https://github.com/patternfly/patternfly-react/pull/4460))
  - Fixed typeahead button toggle propagation ([#4472](https://github.com/patternfly/patternfly-react/pull/4472))
  - Updated to handle missing select group label ([#4464](https://github.com/patternfly/patternfly-react/pull/4464))
  - Fixed option with description on active display only value ([#4503](https://github.com/patternfly/patternfly-react/pull/4503))
- **Text area:** 
  - Added warning state ([#4554](https://github.com/patternfly/patternfly-react/pull/4554))
- **Text input:** 
  - Added warning state ([#4554](https://github.com/patternfly/patternfly-react/pull/4554))
- **Toolbar:** 
  - Used alignment prop instead of align in ToolbarItem ([#4481](https://github.com/patternfly/patternfly-react/pull/4481))
  - Updated docs to use overflow menu components ([#4459](https://github.com/patternfly/patternfly-react/pull/4459))
- **Tooltip:**
  - Rewrote tooltip/popover to use popper ([#4491](https://github.com/patternfly/patternfly-react/pull/4491))
  - Added tippyProps back so as not to cause breaking changes ([#4543](https://github.com/patternfly/patternfly-react/pull/4543))
  - Updates to house popper dependencies, added tippy back as a dependency. Fixed pressing the enter key opens all tooltips on the page ([#4565](https://github.com/patternfly/patternfly-react/pull/4565))

### Table
  - Added sticky header prop and demo ([#4417](https://github.com/patternfly/patternfly-react/pull/4417))
  - Published prop type interfaces in docs ([#4461](https://github.com/patternfly/patternfly-react/pull/4461))

### Topology
  - Added lost support for custom menu items in withCreateConnector ([#4493](https://github.com/patternfly/patternfly-react/pull/4493))
  - Bumped mobx versions in react-topology ([#4442](https://github.com/patternfly/patternfly-react/pull/4442))
  - Corrected mobx dependencies ([#4487](https://github.com/patternfly/patternfly-react/pull/4487))
  - Created connector drag spec configuration ([#4529](https://github.com/patternfly/patternfly-react/pull/4529))

### Other
- **Chore:**
  - Added dependabot.yml ([#4484](https://github.com/patternfly/patternfly-react/pull/4484))
  - Added card OUIA attributes ([#4479](https://github.com/patternfly/patternfly-react/pull/4479))
  - Added radio OUIA attributes ([#4482](https://github.com/patternfly/patternfly-react/pull/4482))
  - Fixed build on windows ([#4475](https://github.com/patternfly/patternfly-react/pull/4475))
  - Updated tag from prerelease-v4 to prerelease ([#4539](https://github.com/patternfly/patternfly-react/pull/4539))
- **Demos:**
  - Updated docs to use overflow menu components in bulk select table, card view, master detail, pagination and table column management demos ([#4459](https://github.com/patternfly/patternfly-react/pull/4459))
- **Docs:** 
  - Removed theme="dark" from docs ([#4485](https://github.com/patternfly/patternfly-react/pull/4485))

## 2020.08 release notes (2020-06-24)
- [@patternfly/react-catalog-view-extension@4.4.8](https://www.npmjs.com/package/@patternfly/react-catalog-view-extension/v/4.4.8)
- [@patternfly/react-charts@6.5.4](https://www.npmjs.com/package/@patternfly/react-charts/v/6.5.4)
- [@patternfly/react-core@4.23.1](https://www.npmjs.com/package/@patternfly/react-core/v/4.23.1)
- [@patternfly/react-icons@4.4.2](https://www.npmjs.com/package/@patternfly/react-icons/v/4.4.2)
- [@patternfly/react-inline-edit-extension@4.5.7](https://www.npmjs.com/package/@patternfly/react-inline-edit-extension/v/4.5.7)
- [@patternfly/react-styles@4.4.2](https://www.npmjs.com/package/@patternfly/react-styles/v/4.4.2)
- [@patternfly/react-table@4.8.6](https://www.npmjs.com/package/@patternfly/react-table/v/4.8.6)
- [@patternfly/react-tokens@4.5.2](https://www.npmjs.com/package/@patternfly/react-tokens/v/4.5.2)
- [@patternfly/react-topology@4.4.8](https://www.npmjs.com/package/@patternfly/react-topology/v/4.4.8)
- [@patternfly/react-virtualized-extension@4.4.8](https://www.npmjs.com/package/@patternfly/react-virtualized-extension/v/4.4.8)

### Components
- **Application launcher:**
  - Updates for menuAppendTo prop in several components ([#4414](https://github.com/patternfly/patternfly-react/pull/4414))
- **Banner:** 
  - Added banner component ([#4408](https://github.com/patternfly/patternfly-react/pull/4408))
  - Added beta bete flag to docs ([#4439](https://github.com/patternfly/patternfly-react/pull/4439))
- **Breadcrumb:** 
  - Made temporary fix for spacing ([#4368](https://github.com/patternfly/patternfly-react/pull/4368))
  - Fixed console.warn when using a BreadcrumbItem component ([#4288](https://github.com/patternfly/patternfly-react/pull/4288))
- **Button:** 
  - Added isAriaDisabled prop ([#3801](https://github.com/patternfly/patternfly-react/pull/3801))
- **Context selector:**
  - Updates for menuAppendTo prop in several components ([#4414](https://github.com/patternfly/patternfly-react/pull/4414))
- **Divider:** 
  - Added support for insets to the divider ([#4410](https://github.com/patternfly/patternfly-react/pull/4410))
- **Drawer:**
  - Updated so opening drawer can send focus to the drawer ([#4328](https://github.com/patternfly/patternfly-react/pull/4328))
- **Dropdown:** 
  - Updated to allow dropdown to be appended to a higher DOM element ([#4348](https://github.com/patternfly/patternfly-react/pull/4348))
  - Fixed split button styling ([#4347](https://github.com/patternfly/patternfly-react/pull/4347))
  - Updated to use popper for dropdown and select when menu is appended to another element ([#4403](https://github.com/patternfly/patternfly-react/pull/4403))
- **Flex layout:**
  - Remove all references to FlexModifiers ([#4384](https://github.com/patternfly/patternfly-react/pull/4384))
- **Form:** 
  - Added .pf-c-form__group-control wrapper to .pf-c-form__actions ([#4405](https://github.com/patternfly/patternfly-react/pull/4405))
- **Modal:**
  - Added tooltip to truncated modal titles ([#4291](https://github.com/patternfly/patternfly-react/pull/4291))
  - Changed modal size in example to variant ([#4385](https://github.com/patternfly/patternfly-react/pull/4385))
- **Nav expandable:**
  - Added style.modifiers.expandable ([#4362](https://github.com/patternfly/patternfly-react/pull/4362))
- **Notification drawer:**
  - Added streamlined notification drawer example to docs ([#4312](https://github.com/patternfly/patternfly-react/pull/4312))
- **Options menu:**
  -  Fixed accessibility issue in plain with text ([#4352](https://github.com/patternfly/patternfly-react/pull/4352))
  - Updates for menuAppendTo prop in several components ([#4414](https://github.com/patternfly/patternfly-react/pull/4414))
- **Overflow menu:** 
  - Fixed accessibility issue on kebab toggle button ([#4353](https://github.com/patternfly/patternfly-react/pull/4353))
- **Page header tools:**
  - Ensured PageHeaderToolsGroup visibility mods are optional ([#4386](https://github.com/patternfly/patternfly-react/pull/4386))
- **Select:** 
  - Fixed filter clear button accessibility issue ([#4331](https://github.com/patternfly/patternfly-react/pull/4331))
  - Fixed panel issue ([#4340](https://github.com/patternfly/patternfly-react/pull/4340))
  - Replaced all uses of value as default id of SelectOption ([#4308](https://github.com/patternfly/patternfly-react/pull/4308))
  - Updated to use popper for dropdown and select when menu is appended to another element ([#4403](https://github.com/patternfly/patternfly-react/pull/4403))
- **Spinner:** 
  - Fixed className prop not getting applied properly ([#4380](https://github.com/patternfly/patternfly-react/pull/4380))
- **Title:**
  - Import TitleSizes in title example ([#4387](https://github.com/patternfly/patternfly-react/pull/4387))
- **Toolbar** 
  - Reverted show to breakpoint ([#4343](https://github.com/patternfly/patternfly-react/pull/4343))

### Charts
- Aligned legend tooltip with flyout edge ([#4398](https://github.com/patternfly/patternfly-react/pull/4398))
- Updated documentation. Replaced old DefinitelyTyped comments with links to victory types ([#4376](https://github.com/patternfly/patternfly-react/pull/4376))
- Added an example showing how to embed HTML in a chart tooltip ([#4379](https://github.com/patternfly/patternfly-react/pull/4379))
- Move dChartCursorTooltip to own directory ([#4381](https://github.com/patternfly/patternfly-react/pull/4381))
- Updated tooltip legend to use Victory's activePoints ([#4409](https://github.com/patternfly/patternfly-react/pull/4409))
- Added tooltip support for interactive legends ([#4402](https://github.com/patternfly/patternfly-react/pull/4402))
- Fixed line height for the labels shown with the chart's tooltip legend. ([#4419](https://github.com/patternfly/patternfly-react/pull/4419))
- Added support for a legend tooltip ([#4371](https://github.com/patternfly/patternfly-react/pull/4371))
- Updated chart tooltip legend ([#4375](https://github.com/patternfly/patternfly-react/pull/4375))
- Bumped Victory packages to version 34.3.12 ([#4438](https://github.com/patternfly/patternfly-react/pull/4438))

### Table
  - Added inline editable dropdown ([#4262](https://github.com/patternfly/patternfly-react/pull/4262))
  - Removed data-label from expanded rows ([#4307](https://github.com/patternfly/patternfly-react/pull/4307))
  - Specified button type to avoid unwanted form submits ([#4252](https://github.com/patternfly/patternfly-react/pull/4252))
  - Updated property name to avoid error ([#4320](https://github.com/patternfly/patternfly-react/pull/4320))

### Topology
- Added integration app examples for topology functionality ([#4315](https://github.com/patternfly/patternfly-react/pull/4315))
- Made APIs more react friendly with hooks ([#4342](https://github.com/patternfly/patternfly-react/pull/4342))
- Allowed a promise to be returned by the create connector callback ([#4390](https://github.com/patternfly/patternfly-react/pull/4390))
- Updated to sync with OpenShift Console ([#4317](https://github.com/patternfly/patternfly-react/pull/4317))

### Virtualized extension
- Add filterable demo, fix for filtering+scrolling ([#4389](https://github.com/patternfly/patternfly-react/pull/4389))

### Other
- **Chore:**
- Publish to prerelease tag to NPM ([#4355](https://github.com/patternfly/patternfly-react/pull/4355))
- Publish v3 branch to v3 tag to NPM ([#4354](https://github.com/patternfly/patternfly-react/pull/4354))
- Removed call for yarn clean:pf3 fro package.json ([#4356](https://github.com/patternfly/patternfly-react/pull/4356))
- Fixed no anonymous functions ([#4391](https://github.com/patternfly/patternfly-react/pull/4391))
- Updates from OUIA audit ([#4401](https://github.com/patternfly/patternfly-react/pull/4401))
- **Docs:**
  - Updated the git workflow in CONTRIBUTING.md ([#4319](https://github.com/patternfly/patternfly-react/pull/4319))
  - Added upgrade guide ([#4298](https://github.com/patternfly/patternfly-react/pull/4298))
  - Removed footer from docs ([#4327](https://github.com/patternfly/patternfly-react/pull/4327))
  - Removed training.md since it is moved to patternfly-org repo ([#4382](https://github.com/patternfly/patternfly-react/pull/4382))
  - Fixed broken links and references in README files caused by moving patternfly-3 packages to their own branch ([#4332](https://github.com/patternfly/patternfly-react/pull/4332))
- **Changelog:** 
  - Added bash script for git ([#4300](https://github.com/patternfly/patternfly-react/pull/4300))

## 2020.07 release notes (2020-06-05)
Packages released:
- [@patternfly/react-catalog-view-extension@4.3.12](https://www.npmjs.com/package/@patternfly/react-catalog-view-extension/v/4.3.12)
- [@patternfly/react-charts@6.3.9](https://www.npmjs.com/package/@patternfly/react-charts/v/6.3.9)
- [@patternfly/react-core@4.18.5](https://www.npmjs.com/package/@patternfly/react-core/v/4.18.5)
- [@patternfly/react-icons@4.3.5](https://www.npmjs.com/package/@patternfly/react-icons/v/4.3.5)
- [@patternfly/react-inline-edit-extension@4.4.14](https://www.npmjs.com/package/@patternfly/react-inline-edit-extension/v/4.4.14)
- [@patternfly/react-styles@4.3.4](https://www.npmjs.com/package/@patternfly/react-styles/v/4.3.4)
- [@patternfly/react-table@4.5.7](https://www.npmjs.com/package/@patternfly/react-table/v/4.5.7)
- [@patternfly/react-tokens@4.4.4](https://www.npmjs.com/package/@patternfly/react-tokens/v/4.4.4)
- [@patternfly/react-topology@4.3.13](https://www.npmjs.com/package/@patternfly/react-topology/v/4.3.13)
- [@patternfly/react-virtualized-extension@4.3.14](https://www.npmjs.com/package/@patternfly/react-virtualized-extension/v/4.3.14)

This is our major release. Checkout our [upgrade guide](/documentation/react/overview/upgrade-guide) for a list of breaking changes!

## 2020.06 release notes (2020-05-12)
Packages released:
- [@patternfly/react-catalog-view-extension@1.4.66](https://www.npmjs.com/package/@patternfly/react-catalog-view-extension/v/1.4.66)
- [@patternfly/react-charts@5.3.21](https://www.npmjs.com/package/@patternfly/react-charts/v/5.3.21)
- [@patternfly/react-core@3.158.1](https://www.npmjs.com/package/@patternfly/react-core/v/3.158.1)
- [@patternfly/react-icons@3.15.17](https://www.npmjs.com/package/@patternfly/react-icons/v/3.15.17)
- [@patternfly/react-inline-edit-extension@2.17.66](https://www.npmjs.com/package/@patternfly/react-inline-edit-extension/v/2.17.66)
- [@patternfly/react-styles@3.7.14](https://www.npmjs.com/package/@patternfly/react-styles/v/3.7.14)
- [@patternfly/react-table@2.28.47](https://www.npmjs.com/package/@patternfly/react-table/v/2.28.47)
- [@patternfly/react-tokens@2.8.14](https://www.npmjs.com/package/@patternfly/react-tokens/v/2.8.14)
- [@patternfly/react-topology@2.14.66](https://www.npmjs.com/package/@patternfly/react-topology/v/2.14.66)
- [@patternfly/react-virtualized-extension@1.4.67](https://www.npmjs.com/package/@patternfly/react-virtualized-extension/v/1.4.67)

### Components
- **Empty state:**  
  - Added xl empty state to demo app and integration tests. ([#4200](https://github.com/patternfly/patternfly-react/pull/4200))
- **Notification drawer:** 
  - Added new Notification Drawer Component ([#4137](https://github.com/patternfly/patternfly-react/pull/4137))
- **Page:**
  - Made tabIndex optional ([#4181](https://github.com/patternfly/patternfly-react/pull/4181))
- **Select:** 
  - Added placeholder text for inline filter ([#4185](https://github.com/patternfly/patternfly-react/pull/4185))
  - Added missing import to docs ([#4109](https://github.com/patternfly/patternfly-react/pull/4109))
  - Added "0" and "All" selected badging ([#4186](https://github.com/patternfly/patternfly-react/pull/4186))
- **Tabs:** 
  - Updated to Properly handle null Tab and TabContent ([#4211](https://github.com/patternfly/patternfly-react/pull/4211))
  - Added integration test for showing/hiding tab button ([#4205](https://github.com/patternfly/patternfly-react/pull/4205))
  - Updated to properly check children before setting hidden ([#4179](https://github.com/patternfly/patternfly-react/pull/4179))
  - Updated to allow hiding tab buttons ([#4196](https://github.com/patternfly/patternfly-react/pull/4196))

### Charts
- Fixed ChartDonut subTitleComponent being ignored in some cases([#4206](https://github.com/patternfly/patternfly-react/pull/4206))

### Other
- **Demos:**
  - Added master detail demo ([#4115](https://github.com/patternfly/patternfly-react/pull/4115))
- **Utilities:**
  - Fixed fillTemplate ie11 compatibility ([#4155](https://github.com/patternfly/patternfly-react/pull/4155))

## 2020.05 release notes (2020-04-21)
Packages released:
- [@patternfly/react-catalog-view-extension@1.4.58](https://www.npmjs.com/package/@patternfly/react-catalog-view-extension/v/1.4.58)
- [@patternfly/react-charts@5.3.19](https://www.npmjs.com/package/@patternfly/react-charts/v/5.3.19)
- [@patternfly/react-core@3.153.13](https://www.npmjs.com/package/@patternfly/react-core/v/3.153.13)
- [@patternfly/react-icons@3.15.16](https://www.npmjs.com/package/@patternfly/react-icons/v/3.15.16)
- [@patternfly/react-inline-edit-extension@2.17.58](https://www.npmjs.com/package/@patternfly/react-inline-edit-extension/v/2.17.58)
- [@patternfly/react-styles@3.7.13](https://www.npmjs.com/package/@patternfly/react-styles/v/3.7.13)
- [@patternfly/react-table@2.28.39](https://www.npmjs.com/package/@patternfly/react-table/v/2.28.39)
- [@patternfly/react-tokens@2.8.13](https://www.npmjs.com/package/@patternfly/react-tokens/v/2.8.13)
- [@patternfly/react-topology@2.14.58](https://www.npmjs.com/package/@patternfly/react-topology/v/2.14.58)
- [@patternfly/react-virtualized-extension@1.4.59](https://www.npmjs.com/package/@patternfly/react-virtualized-extension/v/1.4.59)

### Components
- **Data toolbar:** 
  - Added prop to enable removal of all chips in a filter category. ([#4060](https://github.com/patternfly/patternfly-react/pull/4060))
  - Fixed max depth  ([#4103](https://github.com/patternfly/patternfly-react/pull/4103))
- **Dropdown:** 
  - Fixed ref to show indeterminate checkbox in toggle ([#3990](https://github.com/patternfly/patternfly-react/pull/3990))
  - Updated to respect already passed props ([#4016](https://github.com/patternfly/patternfly-react/pull/4016))
- **Tooltip:** 
  - Fixed Codesandbox examples ([#4088](https://github.com/patternfly/patternfly-react/pull/4088))

### Other
- **Chore:** 
  - Removed promoted components from experimental index file ([#4029](https://github.com/patternfly/patternfly-react/pull/4029))

## 2020.04 release notes (2020-03-31)
Packages released:
- [@patternfly/react-catalog-view-extension@1.4.48](https://www.npmjs.com/package/@patternfly/react-catalog-view-extension/v/1.4.48)
- [@patternfly/react-charts@5.3.18](https://www.npmjs.com/package/@patternfly/react-charts/v/5.3.18)
- [@patternfly/react-core@3.153.3](https://www.npmjs.com/package/@patternfly/react-core/v/3.153.3)
- [@patternfly/react-icons@3.15.15](https://www.npmjs.com/package/@patternfly/react-icons/v/3.15.15)
- [@patternfly/react-inline-edit-extension@2.17.48](https://www.npmjs.com/package/@patternfly/react-inline-edit-extension/v/2.17.48)
- [@patternfly/react-styles@3.7.12](https://www.npmjs.com/package/@patternfly/react-styles/v/3.7.12)
- [@patternfly/react-table@2.28.29](https://www.npmjs.com/package/@patternfly/react-table/v/2.28.29)
- [@patternfly/react-tokens@2.8.12](https://www.npmjs.com/package/@patternfly/react-tokens/v/2.8.12)
- [@patternfly/react-topology@2.14.48](https://www.npmjs.com/package/@patternfly/react-topology/v/2.14.48)
- [@patternfly/react-virtualized-extension@1.4.49](https://www.npmjs.com/package/@patternfly/react-virtualized-extension/v/1.4.49)

### Components
- **About modal:**
  - Allowed custom aria-label for the close button ([#3877](https://github.com/patternfly/patternfly-react/pull/3877))
- **Alert:**
  - Used context to set label ([#3771](https://github.com/patternfly/patternfly-react/pull/3771))
- **Card:**
  - Added Card View to demos ([#3441](https://github.com/patternfly/patternfly-react/pull/3441))
  - Added wrapper to image to resize it properly ([#3642](https://github.com/patternfly/patternfly-react/pull/3642))
- **Drawer:**
  - Added width props, updated demo & integration test ([#3979](https://github.com/patternfly/patternfly-react/pull/3979))
- **Dropdown:**
  - Removed duplicate prop ([#3923](https://github.com/patternfly/patternfly-react/pull/3923))
  - Cleaned console errors in Dropdown.test.tsx ([#3861](https://github.com/patternfly/patternfly-react/pull/3861))
  - Supported router link as DropdownItems through component API ([#3995](https://github.com/patternfly/patternfly-react/pull/3995))
- **Empty state:**
  - Added support for extra-large empty state ([#3844](https://github.com/patternfly/patternfly-react/pull/3844))
- **Select:**
  - Fixed group select options in single variant ([#3838](https://github.com/patternfly/patternfly-react/pull/3838))
  - Allowed count badge to be hidden in checkbox select ([#3976](https://github.com/patternfly/patternfly-react/pull/3976))
  - Added logic for disabled default options for typeahead ([#3895](https://github.com/patternfly/patternfly-react/pull/3895))
### Table
  - Fixed forward ref types ([#3919](https://github.com/patternfly/patternfly-react/pull/3919))
  - Added column management demo ([#3942](https://github.com/patternfly/patternfly-react/pull/3942))

### Other
- **Docs:**
  - Released docs to NPM for patternfly-org ([#3941](https://github.com/patternfly/patternfly-react/pull/3941))
- **Build:**
  - Removed unused packages from repo ([#3916](https://github.com/patternfly/patternfly-react/pull/3916))
  - Created unified react-core dist ([#3971](https://github.com/patternfly/patternfly-react/pull/3971))
  - Created variables by file in react-tokens ([#3896](https://github.com/patternfly/patternfly-react/pull/3896))
- **Types:**
  - Fixed tippy types, remove copyTS ([#3940](https://github.com/patternfly/patternfly-react/pull/3940))
  - Added in-house focusTrap ([#3967](https://github.com/patternfly/patternfly-react/pull/3967))
  - Removed a few usages of prop-types ([#3968](https://github.com/patternfly/patternfly-react/pull/3968))

## 2020.03 release notes (2020-03-10)
Packages released:
- [@patternfly/react-catalog-view-extension: 1.4.29](https://www.npmjs.com/package/@patternfly/react-catalog-view-extension/v/1.4.29)
- [@patternfly/react-charts: 5.3.12](https://www.npmjs.com/package/@patternfly/react-charts/v/5.3.12)
- [@patternfly/react-core: 3.146.0](https://www.npmjs.com/package/@patternfly/react-core/v/3.146.0)
- [@patternfly/react-inline-edit-extension: 2.17.29](https://www.npmjs.com/package/@patternfly/react-inline-edit-extension/v/2.17.29)
- [@patternfly/react-styles: 3.7.8](https://www.npmjs.com/package/@patternfly/react-styles/v/3.7.8)
- [@patternfly/react-table: 2.28.10](https://www.npmjs.com/package/@patternfly/react-table/v/2.28.10)
- [@patternfly/react-tokens: 2.8.8](https://www.npmjs.com/package/@patternfly/react-tokens/v/2.8.8)
- [@patternfly/react-topology: 2.14.29](https://www.npmjs.com/package/@patternfly/react-topology/v/2.14.29)
- [@patternfly/react-virtualized-extension: 1.4.30](https://www.npmjs.com/package/@patternfly/react-virtualized-extension/v/1.4.30)
- [@patternfly/react-icons: 3.15.11](https://www.npmjs.com/package/@patternfly/react-icons/v/3.15.11)

### Components
- **Background image:** 
  - Removed width attr from background image filter element ([#3758](https://github.com/patternfly/patternfly-react/pull/3758))
- **Data toolbar:** 
  - Cleaned up beta warning for data toolbar ([#3755](https://github.com/patternfly/patternfly-react/pull/3755))
- **Drawer:**
  - Added console warning to Drawer beta component ([#3856](https://github.com/patternfly/patternfly-react/pull/3856))
  - Updated drawer for Master/Detail support ([#3884](https://github.com/patternfly/patternfly-react/pull/3884))
- **Dropdown**
  - Updated to Destructure bubbleEvent from props to avoid it passing to button el ([#3894](https://github.com/patternfly/patternfly-react/pull/3894)) 
- **Button:** 
  - Added link icon position for link buttons ([#3798](https://github.com/patternfly/patternfly-react/pull/3798))
- **Card:** 
  - Added selectable and selected variation ([#3587](https://github.com/patternfly/patternfly-react/pull/3587))
- **Chip group:** 
  - Added a tooltip to the Chipgroup label ([#3826](https://github.com/patternfly/patternfly-react/pull/3826))
- **Data list:** 
  - Added compact data list ([#3807](https://github.com/patternfly/patternfly-react/pull/3807))
- **Data toolbar:** 
  - Added support for key with categoryName. ([#3880](https://github.com/patternfly/patternfly-react/pull/3880))
- **Dropdown:** 
  - Fixed keyboard selection of toggle causing selection of parent ([#3816](https://github.com/patternfly/patternfly-react/pull/3816))
- **File upload:** 
  - Added new beta file upload component ([#3865](https://github.com/patternfly/patternfly-react/pull/3865))
- **Input group:** 
  - Updated docs to be more readable ([#3839](https://github.com/patternfly/patternfly-react/pull/3839))
- **Modal:** 
  - Added description property ([#3821](https://github.com/patternfly/patternfly-react/pull/3821))
  - Moved description to separate component ([#3897](https://github.com/patternfly/patternfly-react/pull/3897))
- **Pagination:** 
  - Updated to calculate navigation input according to last page ([#3534](https://github.com/patternfly/patternfly-react/pull/3534))
- **Select:** 
  - Added inline filtering to checkbox select ([#3843](https://github.com/patternfly/patternfly-react/pull/3843))
  - Fix panel checkbox labels ([#3820](https://github.com/patternfly/patternfly-react/pull/3820))
- **Switch:** 
  - Updated to avoid switch id override by props ([#3706](https://github.com/patternfly/patternfly-react/pull/3706))
- **Tabs:** 
  - Updated tabs with nav examples + add Tab component to props docs ([#3527](https://github.com/patternfly/patternfly-react/pull/3527))
- **Tooltip:** 
  - Removed TooltipContent from propComponents ([#3800](https://github.com/patternfly/patternfly-react/pull/3800))
- **Wizard:** 
  - Used patternfly-styles to set the no padding modifier ([#3871](https://github.com/patternfly/patternfly-react/pull/3871))

### Catalog view extension
- **Catalog tile:** 
  - Removed truncation and maxLength props ([#3830](https://github.com/patternfly/patternfly-react/pull/3830))

### Other
- **Chore:**
  - Added experimental exports ([#3775](https://github.com/patternfly/patternfly-react/pull/3775))
  - Wrapped layout examples to fix codesandbox ([#3818](https://github.com/patternfly/patternfly-react/pull/3818))
  - Tested prerelease workflow ([#3868](https://github.com/patternfly/patternfly-react/pull/3868))
  - Removed exenv and lodash ([#3882](https://github.com/patternfly/patternfly-react/pull/3882))
  - Added jest test generator ([#3828](https://github.com/patternfly/patternfly-react/pull/3828))
  - Added experimental/components directory ([#3764](https://github.com/patternfly/patternfly-react/pull/3764))
  - Improved promote script ([#3812](https://github.com/patternfly/patternfly-react/pull/3812))
  - Fixed react-docs version ([#3879](https://github.com/patternfly/patternfly-react/pull/3879))
  - Updated Gatsby theme for patternfly org ([#3813](https://github.com/patternfly/patternfly-react/pull/3813))
  - Updated versions in react-core for react-icons ([#3760](https://github.com/patternfly/patternfly-react/pull/3760))
  - Updated additional versions in react-core for react-icons ([#3761](https://github.com/patternfly/patternfly-react/pull/3761))
- **Docs:** 
  - Updated readme to match new guidelines ([#3837](https://github.com/patternfly/patternfly-react/pull/3837))
  - Added GDPR banner to all pages ([#3831](https://github.com/patternfly/patternfly-react/pull/3831))
  - Added page titles for react docs & react icons pages ([#3851](https://github.com/patternfly/patternfly-react/pull/3851))
  - Fixed typo in README ([#3769](https://github.com/patternfly/patternfly-react/pull/3769))
- **Linting:** 
  - Fixed eslint recommendations ([#3858](https://github.com/patternfly/patternfly-react/pull/3858))
  - Added linting to react styles ([#3723](https://github.com/patternfly/patternfly-react/pull/3723))
  - Added linting react tokens ([#3725](https://github.com/patternfly/patternfly-react/pull/3725))
- **Ouia:** 
  - Updated to not omit ouiaContext ([#3872](https://github.com/patternfly/patternfly-react/pull/3872))

### Virtualized extension
- Resolved linter errors ([#3726](https://github.com/patternfly/patternfly-react/pull/3726))

### PF3
- **Chore:**
  - Enabled releasing patternfly 3 ([#3863](https://github.com/patternfly/patternfly-react/pull/3863))
  - Removed patternfly-3 packages ([#3852](https://github.com/patternfly/patternfly-react/pull/3852))
  - Created patternfly-3 branch ([#3846](https://github.com/patternfly/patternfly-react/pull/3846))

## 2020.02 release notes (2020-02-18)
Packages released:
- [@patternfly/react-catalog-view-extension: 1.4.11](https://www.npmjs.com/package/@patternfly/react-catalog-view-extension/v/1.4.11)
- [@patternfly/react-charts: 5.3.5](https://www.npmjs.com/package/@patternfly/react-charts/v/5.3.5)
- [@patternfly/react-core: 3.140.11](https://www.npmjs.com/package/@patternfly/react-core/v/3.140.11)
- [@patternfly/react-inline-edit-extension: 2.17.11](https://www.npmjs.com/package/@patternfly/react-inline-edit-extension/v/2.17.11)
- [@patternfly/react-styles: 3.7.4](https://www.npmjs.com/package/@patternfly/react-styles/v/3.7.4)
- [@patternfly/react-table: 2.27.11](https://www.npmjs.com/package/@patternfly/react-table/v/2.27.11)
- [@patternfly/react-tokens: 2.8.4](https://www.npmjs.com/package/@patternfly/react-tokens/v/2.8.4)
- [@patternfly/react-topology: 2.14.11](https://www.npmjs.com/package/@patternfly/react-topology/v/2.14.11)
- [@patternfly/react-virtualized-extension: 1.4.12](https://www.npmjs.com/package/@patternfly/react-virtualized-extension/v/1.4.12)
- [@patternfly/react-icons: 3.15.3](https://www.npmjs.com/package/@patternfly/react-icons/v/3.15.3)


### Components
- **Context selector:** 
  - Updated signature for context selector ([#3697](https://github.com/patternfly/patternfly-react/pull/3697))
- **Data toolbar:** 
  - Updated html structure to match core ([#3701](https://github.com/patternfly/patternfly-react/pull/3710))
- **Popover:** 
  - Added min-width override property ([#3601](https://github.com/patternfly/patternfly-react/pull/3601))
- **Radio:**
  - Added support for optional description ([#3621](https://github.com/patternfly/patternfly-react/pull/3621))
- **Select:**
  - Handled undefined default for checkbox select ([#3711](https://github.com/patternfly/patternfly-react/pull/3711))
- **Simple list:** 
  - Added Simple list component ([#3645](https://github.com/patternfly/patternfly-react/pull/3645))
- **Wizard:** 
  - Added type to wizard context ([#3572](https://github.com/patternfly/patternfly-react/pull/3572))

### Catalog view extension
- **Catalog tile:** 
  - Adjusted max width of header image ([#3628](https://github.com/patternfly/patternfly-react/pull/3628))
  - Reduced padding between badge and logo ([#3644](https://github.com/patternfly/patternfly-react/pull/3644))
  - Fixed styles that stopped working ([#3635](https://github.com/patternfly/patternfly-react/pull/3635))
  - Fixed linting errors ([#3714](https://github.com/patternfly/patternfly-react/pull/3714))

### Table
- Added inline edit to table ([#3058](https://github.com/patternfly/patternfly-react/issues/3058))
- Reverted IHeaderRow interface change ([#3746](https://github.com/patternfly/patternfly-react/pull/3746))
- Fixed that column functions are not always equal ([#3612](https://github.com/patternfly/patternfly-react/pull/3612))
- Added support for truncated column headers ([#3729](https://github.com/patternfly/patternfly-react/pull/3729))

### Other
- **Build:**
  - Updated CircleCi config for pricing ([#3654](https://github.com/patternfly/patternfly-react/pull/3654))
  - Made change to use machine instance ([#3712](https://github.com/patternfly/patternfly-react/pull/3712))
  - Fixed typo, added md lint to CircleCi ([#3692](https://github.com/patternfly/patternfly-react/pull/3692))
- **Chore:** 
  - Phrased non production components as beta ([#3663](https://github.com/patternfly/patternfly-react/pull/3663))
  - Linted React topology ([#3721](https://github.com/patternfly/patternfly-react/pull/3721))
  - For icons made change to use absolute import paths ([#3517](https://github.com/patternfly/patternfly-react/pull/3517))
  - Fixed broken link in issue template ([#3634](https://github.com/patternfly/patternfly-react/pull/3634))
- **Ci:** 
  - Parallelized tests and run in PRs ([#3627](https://github.com/patternfly/patternfly-react/pull/3627))
- **Demos:** 
  - Fixed the TextInput type in filter table demo ([#3652](https://github.com/patternfly/patternfly-react/pull/3652))
- **Docs:** 
  - Updated table property descriptions ([#3745](https://github.com/patternfly/patternfly-react/pull/3745))
  - Updated node version in readme ([#3741](https://github.com/patternfly/patternfly-react/pull/3741))
  - Bumped Gatsby ([#3657](https://github.com/patternfly/patternfly-react/pull/3657))
  - Merged branch gatsby-theme-patternfly-org ([#3651](https://github.com/patternfly/patternfly-react/pull/3651))
  - Merged patternfly-org branch ([#3619](https://github.com/patternfly/patternfly-react/pull/3619))
- **Linting:** 
  - Eslint react-table ([#3693](https://github.com/patternfly/patternfly-react/pull/3693))
  - Fixed linting errors ([#3717](https://github.com/patternfly/patternfly-react/pull/3713))
  - Resolved existing linting errors ([#3715](https://github.com/patternfly/patternfly-react/pull/3715))
  - Added react-hooks to eslint-plugin-patternfly-react ([#3636](https://github.com/patternfly/patternfly-react/pull/3636))
  - Fixed linting errors ([#3713](https://github.com/patternfly/patternfly-react/pull/3713))

### PF3
- **Slider:**
  - Added limit for lowest possible value of slider ([#3660](https://github.com/patternfly/patternfly-react/pull/3660)) 
  

## 2020.01 release notes (2020-01-28)
Packages released:
- [@patternfly/react-catalog-view-extension@1.2.5](https://www.npmjs.com/package/@patternfly/react-catalog-view-extension/v/1.2.5)
- [@patternfly/react-charts@5.2.21](https://www.npmjs.com/package/@patternfly/react-charts/v/5.2.21)
- [@patternfly/react-core@3.134.2](https://www.npmjs.com/package/@patternfly/react-core/v/3.134.2)
- [@patternfly/react-inline-edit-extension@2.15.6](https://www.npmjs.com/package/@patternfly/react-inline-edit-extension/v/2.15.6)
- [@patternfly/react-styles@3.6.26](https://www.npmjs.com/package/@patternfly/react-styles/v/3.6.26)
- [@patternfly/react-table@2.25.6](https://www.npmjs.com/package/@patternfly/react-table/v/2.25.6)
- [@patternfly/react-tokens@2.7.25](https://www.npmjs.com/package/@patternfly/react-tokens/v/2.7.25)
- [@patternfly/react-topology@2.12.5](https://www.npmjs.com/package/@patternfly/react-topology/v/2.12.5)
- [@patternfly/react-virtualized-extension@1.3.93](https://www.npmjs.com/package/@patternfly/react-virtualized-extension/v/1.3.93)
- [@patternfly/react-icons@3.14.39](https://www.npmjs.com/package/@patternfly/react-icons/v/3.14.39)

### Components
- **About modal:** 
  - Added type safety to default props ([#3536](https://github.com/patternfly/patternfly-react/pull/3536))
- **Alert:** 
  - Accessibility updates to alert for toast alerts ([#3519](https://github.com/patternfly/patternfly-react/pull/3519))
  - Fixed integration test regression ([#3594](https://github.com/patternfly/patternfly-react/pull/3594))
- **Alert group:**
    - Added alert group component ([#3531](https://github.com/patternfly/patternfly-react/pull/3531))
- **Chip group:**
  - Added closable chip group ([#3455](https://github.com/patternfly/patternfly-react/pull/3455))
- **Clipboard copy:** 
  - Set type of copy and toggle buttons to 'button' ([#3444](https://github.com/patternfly/patternfly-react/pull/3444))
- **Data list:** 
  - Properly assigned selectable and selected classes ([#3447](https://github.com/patternfly/patternfly-react/pull/3447))
  - Removed hook ([#3434](https://github.com/patternfly/patternfly-react/pull/3434))
  - Reverted React.Component back to React.FunctionComponent ([#3431](https://github.com/patternfly/patternfly-react/pull/3431))
- **Data toolbar:** 
  - Added and removed some modifiers to match core ([#3422](https://github.com/patternfly/patternfly-react/pull/3422))
  - Reverted promotion of DataToolbar from experimental ([#3580](https://github.com/patternfly/patternfly-react/pull/3580))
  - Updated example to not exclude previous filtered items ([#3571](https://github.com/patternfly/patternfly-react/pull/3571))
- **Divider:** 
  - Promote Divider from experimental ([#3516](https://github.com/patternfly/patternfly-react/pull/3516))
- **Dropdown:**
  - Set a random id for dropdown item if id is not given ([#3555](https://github.com/patternfly/patternfly-react/pull/3555))
- **Flex layout:** Allowed string literals to be used for FlexItem modifiers ([#3544](https://github.com/patternfly/patternfly-react/pull/3544))
- **Overflow menu:** 
  - Promote OverflowMenu from experimental ([#3516](https://github.com/patternfly/patternfly-react/pull/3516))
- **Page:** 
  - Add ability to customize screen reader label ([#3433](https://github.com/patternfly/patternfly-react/pull/3433))
- **Page header:** 
  - Removed redundant role="banner" attribute ([#3499](https://github.com/patternfly/patternfly-react/pull/3499))
- **Page layout:** 
  - Fixed page layout imports for use with code sandbox.([#3461](https://github.com/patternfly/patternfly-react/pull/3461))
- **Pagination:**
  - Disabled navigation input if page is equal to zero ([#3472](https://github.com/patternfly/patternfly-react/pull/3472))
- **Select:** 
  - Add the type prop to the select toggle button ([#3495](https://github.com/patternfly/patternfly-react/pull/3495))
  - Allowed custom option data comparison ([#3491](https://github.com/patternfly/patternfly-react/pull/3491))
  - Updated so clear button appears with any type ahead input ([#3502](https://github.com/patternfly/patternfly-react/pull/3502))
  - Set a unique id to the select toggle type ahead input ([#3529](https://github.com/patternfly/patternfly-react/pull/3529))
- **Spinner:** 
  - Promote Spinner from experimental ([#3516](https://github.com/patternfly/patternfly-react/pull/3516))

### Catalog view extension
- **Catalog tile:** 
  - Removed truncation fade and fixed length ([#3378](https://github.com/patternfly/patternfly-react/pull/3378))

### Table
  - Fixed issue [#3559](https://github.com/patternfly/patternfly-react/issues/3559), for table we now default to a div instead of anchor([#3567](https://github.com/patternfly/patternfly-react/pull/3567))
  - Made IAction onClick optional ([#3558](https://github.com/patternfly/patternfly-react/pull/3558))
  - Fixed ActionsColumn import path for DropdownSeparator ([#3578](https://github.com/patternfly/patternfly-react/pull/3578))

### Other
- **Ci:** 
  - Stopped caching stale doc builds ([#3582](https://github.com/patternfly/patternfly-react/pull/3582))
  - Added coverage reporting for cypress tests ([#3295](https://github.com/patternfly/patternfly-react/pull/3295))
- **Chore:** 
  - Used absolute import paths for react core in pf4 packages. ([#3525](https://github.com/patternfly/patternfly-react/pull/3525))
  - Fixed homepage URL ([#3522](https://github.com/patternfly/patternfly-react/pull/3522))
  - Removed listing of icons while under construction ([#3485](https://github.com/patternfly/patternfly-react/pull/3485))
  - Use direct paths to react-icons in production build ([#3448](https://github.com/patternfly/patternfly-react/pull/3448))
- **Demos:** 
  - Upped version of gatsby-theme-patternfly-org ([#3562](https://github.com/patternfly/patternfly-react/pull/3562))
- **Docs:** 
  - Added a link to icons docs ([#3430](https://github.com/patternfly/patternfly-react/pull/3430))
- **Extensions:** 
  - Moved extensions to 'Extensions' in side nav category ([#3453](https://github.com/patternfly/patternfly-react/pull/3453))
- **Integration:**
  - Fixed selector in table simple actions ([#3584](https://github.com/patternfly/patternfly-react/pull/3584))
- **Linting:**
  - Made Eslint fixes for *.md file ([#3493](https://github.com/patternfly/patternfly-react/pull/3493))
  - Made initial eslint fixes for react-core-style-system *.md file ([#3505](https://github.com/patternfly/patternfly-react/pull/3505))
  - Made minor updates to TopologyView package, missing imports ([#3510](https://github.com/patternfly/patternfly-react/pull/3510))
  - Made minor updates to VirtualizedTable examples ([#3513](https://github.com/patternfly/patternfly-react/pull/3513))
  - Made minor updates to react-table package ([#3509](https://github.com/patternfly/patternfly-react/pull/3509))
  - Turned on errors for markdown code block linting ([#3515](https://github.com/patternfly/patternfly-react/pull/3515))
  - Added linting for md charts 3486 ([#3496](https://github.com/patternfly/patternfly-react/pull/3496))
  - Added linting for md code blocks 3469 ([#3474](https://github.com/patternfly/patternfly-react/pull/3474))
  - Fix linting for md react core example md files 3486 ([#3500](https://github.com/patternfly/patternfly-react/pull/3500))
  - Updated *.md files in demos and verified they were working in code sandbox as well ([#3504](https://github.com/patternfly/patternfly-react/pull/3504))

### PF3
  - **Date and time picker:** 
    - Use toLocaleTimeString to fix year 2020 bug ([#3506](https://github.com/patternfly/patternfly-react/pull/3506))
    - Updated test snapshot due to new year ([#3450](https://github.com/patternfly/patternfly-react/pull/3450))
  - **React console:** 
    - Added `additionalButtons` prop to VncConsole ([#3465](https://github.com/patternfly/patternfly-react/pull/3465))
  - **Slider** 
    - Added onFormatChange handler ([#3477](https://github.com/patternfly/patternfly-react/pull/3477))

## 2019.11 release notes (2019-12-18)
Packages released:
- [@patternfly/react-catalog-view-extension@1.1.60](https://www.npmjs.com/package/@patternfly/react-catalog-view-extension/v/1.1.60)
- [@patternfly/react-charts@5.2.9](https://www.npmjs.com/package/@patternfly/react-charts/v/5.2.9)
- [@patternfly/react-core@3.129.3](https://www.npmjs.com/package/@patternfly/react-core/v/3.129.3)
- [@patternfly/react-inline-edit-extension@2.14.20](https://www.npmjs.com/package/@patternfly/react-inline-edit-extension/v/2.14.20)
- [@patternfly/react-styles@3.6.15](https://www.npmjs.com/package/@patternfly/react-styles/v/3.6.15)
- [@patternfly/react-table@2.24.64](https://www.npmjs.com/package/@patternfly/react-table/v/2.24.64)
- [@patternfly/react-tokens@2.7.14](https://www.npmjs.com/package/@patternfly/react-tokens/v/2.7.14)
- [@patternfly/react-topology@2.11.48](https://www.npmjs.com/package/@patternfly/react-topology/v/2.11.48)
- [@patternfly/react-virtualized-extension@1.3.61](https://www.npmjs.com/package/@patternfly/react-virtualized-extension/v/1.3.61)
- [@patternfly/react-icons@3.14.28](https://www.npmjs.com/package/@patternfly/react-icons/v/3.14.28)

### Charts
  - Updated interpolation examples to use monotoneX ([#3372](https://github.com/patternfly/patternfly-react/pull/3372))
  - Update threshold props ([#3414](https://github.com/patternfly/patternfly-react/pull/3414))

### Components
- **Application launcher:** 
  - Application launcher enhancements ([#3371](https://github.com/patternfly/patternfly-react/pull/3371))
- **Breadcrumb:** 
  - Set breadcrumb, nav and title texts to sentence case ([#3387](https://github.com/patternfly/patternfly-react/pull/3387))
- **Data list:** 
  - Removed duplicate import from the docs ([#3362](https://github.com/patternfly/patternfly-react/pull/3362))
  - Added selectable variant ([#3404](https://github.com/patternfly/patternfly-react/pull/3404))
- **Dropdown:** 
  - Updated component to use input rather than PF checkbox ([#3391](https://github.com/patternfly/patternfly-react/pull/3391))
- **Empty state icon:** 
  - Marked deprecated props ([#3375](https://github.com/patternfly/patternfly-react/pull/3375))
- **Filter side panel:** 
  - Passed remaining props to checkbox component ([#3374](https://github.com/patternfly/patternfly-react/pull/3374))
- **List:** 
  - Added the ordered variant ([#3363](https://github.com/patternfly/patternfly-react/pull/3363))
- **Nav:**
  - Removed basic nav example, switched to default variant,  updated PF masthead logo ([#3262](https://github.com/patternfly/patternfly-react/pull/3262))
- **Options menu:** 
  - Added support for groups and titles ([#3360](https://github.com/patternfly/patternfly-react/pull/3360))
- **Page layout:** 
  - Removed basic nav example, switched to default variant,  updated PF masthead logo ([#3262](https://github.com/patternfly/patternfly-react/pull/3262))
  - Set breadcrumb, nav and title texts to sentence case ([#3387](https://github.com/patternfly/patternfly-react/pull/3387))
- **Pagination:** 
  - Added optional offset prop ([#3383](https://github.com/patternfly/patternfly-react/pull/3383))
  - Automated pagination and overflow logic ([#3182](https://github.com/patternfly/patternfly-react/pull/3182))
  - Fixed prev arrows are active with 0 rows ([#3384](https://github.com/patternfly/patternfly-react/pull/3384))
- **Popover:** 
  - Made text selectable ([#3376](https://github.com/patternfly/patternfly-react/pull/3376))
- **Progress:** 
  - Fixed typo ([#3346](https://github.com/patternfly/patternfly-react/pull/3346))
- **Select:** 
  - Made integration tests pass ([#3359](https://github.com/patternfly/patternfly-react/pull/3359))
- **Text input:** 
  - Added support for passing a ref ([#3168](https://github.com/patternfly/patternfly-react/pull/3168))

### Table
- Fixed the ActionColumn to allow a link in the actions menu ([#3402](https://github.com/patternfly/patternfly-react/pull/3402))
- Renamed visible/hiddenOn2Xl to visible/hiddenOn_2xl ([#3365](https://github.com/patternfly/patternfly-react/pull/3365))

### Other
- **Build:** 
  - Used patternfly-a11y ([#3339](https://github.com/patternfly/patternfly-react/pull/3339))
  - Updates build to not cache stale doc build ([#3424](https://github.com/patternfly/patternfly-react/pull/3424))
- **Chore:** 
  - Updated tippy.js dependency ([#3370](https://github.com/patternfly/patternfly-react/pull/3370))
  - Fixed broken Katacoda tutorial links ([#3408](https://github.com/patternfly/patternfly-react/pull/3408))
- **Demo:** 
  -  Added various table state demos ([#3352](https://github.com/patternfly/patternfly-react/pull/3352))
- **Docs:**  
  - Documented CJS tree shaking solution for icons and react-core ([#3410](https://github.com/patternfly/patternfly-react/pull/3410))
- **Workspace:** 
  - Upgraded gatsby and org theme ([#3386](https://github.com/patternfly/patternfly-react/pull/3386))

### PF3
- **React console:** 
  - Added spacing between VncAction buttons ([#3345](https://github.com/patternfly/patternfly-react/pull/3345))
- **Custom modal dialog:** 
  - Updated CustomModalDialog to match changes to original react-bootstrap ModalDialog ([#3409](https://github.com/patternfly/patternfly-react/pull/3409))

## 2019.10 release notes (2019-11-25)
Packages released:
- [@patternfly/react-catalog-view-extension@1.1.38](https://www.npmjs.com/package/@patternfly/react-catalog-view-extension/v/1.1.38)
- [@patternfly/react-charts@5.2.2](https://www.npmjs.com/package/@patternfly/react-charts/v/5.2.2)
- [@patternfly/react-core@3.124.1](https://www.npmjs.com/package/@patternfly/react-core/v/3.124.1)
- [@patternfly/react-inline-edit-extension@2.13.9](https://www.npmjs.com/package/@patternfly/react-inline-edit-extension/v/2.13.9)
- [@patternfly/react-styles@3.6.11](https://www.npmjs.com/package/@patternfly/react-styles/v/3.6.11)
- [@patternfly/react-table@2.24.41](https://www.npmjs.com/package/@patternfly/react-table/v/2.24.41)
- [@patternfly/react-tokens@2.7.10](https://www.npmjs.com/package/@patternfly/react-tokens/v/2.7.10)
- [@patternfly/react-topology@2.11.27](https://www.npmjs.com/package/@patternfly/react-topology/v/2.11.27)
- [@patternfly/react-virtualized-extension@1.3.40](https://www.npmjs.com/package/@patternfly/react-virtualized-extension/v/1.3.40)
- [@patternfly/react-icons@3.14.23](https://www.npmjs.com/package/@patternfly/react-icons/v/3.14.23)

### Charts
- Put back the secondary title when showing percentage in the Donut Chart([#3299](https://github.com/patternfly/patternfly-react/pull/3299))
- Added Interactive legend example ([#3253](https://github.com/patternfly/patternfly-react/pull/3253))

### Components
- **About modal:**
   - Removed appendTo from props passed to div ([#3239](https://github.com/patternfly/patternfly-react/pull/3239))
- **Accordion:**  
  - Added a prop to allow the box shadow to be removed ([#3309](https://github.com/patternfly/patternfly-react/pull/3309))
- **Button:**  
  - Added support for setting tab index unless not button and disabled ([#3240](https://github.com/patternfly/patternfly-react/pull/3240))
- **Data toolbar:**  
  - Moved and wrapped chips in expandable content ([#3319](https://github.com/patternfly/patternfly-react/pull/3319))
- **Dropdown:**  
  - Added split button action variant ([#3307](https://github.com/patternfly/patternfly-react/pull/3307))
  - Updated keyboard interaction ([#3293](https://github.com/patternfly/patternfly-react/pull/3293))
- **Flex:**
  - In breakpointMods, set the breakpoint as optional and added enums  ([#3258](https://github.com/patternfly/patternfly-react/pull/3258))
  - Fixed typo in align and justify modifiers ([#3328](https://github.com/patternfly/patternfly-react/pull/3328))
- **Form:** 
  - Added validated variant to form inputs ([#3220](https://github.com/patternfly/patternfly-react/pull/3220))
- **Options menu:**
  - Removed the `<i>` element around selected item svg ([#3238](https://github.com/patternfly/patternfly-react/pull/3238))
- **Pagination:**
  - Fixed previous page navigation issues with 1 row per page ([#3297](https://github.com/patternfly/patternfly-react/pull/3297))
- **Select:**
  - Fixed displaying pre-selected input ([#3305](https://github.com/patternfly/patternfly-react/pull/3305))
  - Added the ability to have custom content in the select menu ([#3333](https://github.com/patternfly/patternfly-react/pull/3333))
  - Removed `<form>` from typeahead and checkbox selects ([#3298](https://github.com/patternfly/patternfly-react/pull/3298))
- **Wizard:**
  - Removed appendTo from props passed to div ([#3239](https://github.com/patternfly/patternfly-react/pull/3239))

### Catalog view extension
- **Chore:**
    - Added @patternfly/react-catalog-view-extension package to release promotion script ([#3260](https://github.com/patternfly/patternfly-react/pull/3260))
    - Removed unused packages ([#3332](https://github.com/patternfly/patternfly-react/pull/3332))
    - fixed checbox margin on filter side panel ([#3287](https://github.com/patternfly/patternfly-react/pull/3287))
    - fixed @types errors when using the extension ([#3284](https://github.com/patternfly/patternfly-react/pull/3284))
    - Removed unused dev dependencies from package.json ([#3275](https://github.com/patternfly/patternfly-react/pull/3275))
    - Added check for sass changes ([#3271](https://github.com/patternfly/patternfly-react/pull/3271))
- **Catalog tile:**  
    - Removed unneeded selector ([#3331](https://github.com/patternfly/patternfly-react/pull/3331))
    - Edited target selector ([#3291](https://github.com/patternfly/patternfly-react/pull/3291))
    - Removed margin and fixed hidden text ([#3285](https://github.com/patternfly/patternfly-react/pull/3285))
    - Updated scss and add class to image ([#3282](https://github.com/patternfly/patternfly-react/pull/3282))
- **Properties side panel:**
  - Aligned sass file with correct styles for properties panel ([#3236](https://github.com/patternfly/patternfly-react/pull/3236))

### Table
- Added types, examples, and demo for onRowClick ([#3265](https://github.com/patternfly/patternfly-react/pull/3265))
- Fixed types for table transforms ([#3203](https://github.com/patternfly/patternfly-react/pull/3203))

### Topology
- Set topology container to take full height of the view ([#3314](https://github.com/patternfly/patternfly-react/pull/3314))

### Other
- **Chore:** 
  - Updated gatsby-browser.js ([#3313](https://github.com/patternfly/patternfly-react/pull/3313))
  - Added use of node 10, more resources for doc build ([#3278](https://github.com/patternfly/patternfly-react/pull/3278))
  - Added new package to promotion script ([#3260](https://github.com/patternfly/patternfly-react/pull/3260))
  - Updated github templates ([#3261](https://github.com/patternfly/patternfly-react/pull/3261))
  - Upgraded react-bootstrap to fix React deprecated lifecycle method warnings ([#3249](https://github.com/patternfly/patternfly-react/pull/3249))
- **Demo:**  
  - Updated Pagination Table demo to add Spinner and empty state ([#3294](https://github.com/patternfly/patternfly-react/pull/3294))
- **Demo-app-ts:**  
  - Increased strict checks for react-integration ([#3222](https://github.com/patternfly/patternfly-react/pull/3222))
- **Docs:**  
  - Bumped gatsby-theme-patternfly-org  ([#3269](https://github.com/patternfly/patternfly-react/pull/3269))
  - fix(README.md) ([#3254](https://github.com/patternfly/patternfly-react/pull/3254))

### PF3
  - **Date and time picker:** 
    - Properly imported formatTime to DateTimePicker ([#3303](https://github.com/patternfly/patternfly-react/pull/3303))

## 2019.09 release notes (2019-11-01)
Packages released:
- [@patternfly/react-catalog-view-extension@1.1.5](https://www.npmjs.com/package/@patternfly/react-catalog-view-extension/v/1.1.5)
- [@patternfly/react-charts@5.1.5](https://www.npmjs.com/package/@patternfly/react-charts/v/5.1.5)
- [@patternfly/react-core@3.120.5](https://www.npmjs.com/package/@patternfly/react-core/v/3.120.5)
- [@patternfly/react-inline-edit-extension@2.12.17](https://www.npmjs.com/package/@patternfly/react-inline-edit-extension/v/2.12.17)
- [@patternfly/react-styles@3.6.5](https://www.npmjs.com/package/@patternfly/react-styles/v/3.6.5)
- [@patternfly/react-table@2.24.17](https://www.npmjs.com/package/@patternfly/react-table/v/2.24.17)
- [@patternfly/react-tokens@2.7.5](https://www.npmjs.com/package/@patternfly/react-tokens/v/2.7.5)
- [@patternfly/react-topology@2.11.5](https://www.npmjs.com/package/@patternfly/react-topology/v/2.11.5)
- [@patternfly/react-virtualized-extension@1.3.17](https://www.npmjs.com/package/@patternfly/react-virtualized-extension/v/1.3.17)
- [@patternfly/react-icons@3.14.18](https://www.npmjs.com/package/@patternfly/react-icons/v/3.14.18)

### Charts
- Added legend examples ([#3093](https://github.com/patternfly/patternfly-react/pull/3093))
- Added chart scatter examples ([#3086](https://github.com/patternfly/patternfly-react/pull/3086))
- Updated ChartThreshold to use pf-core variable ([#3085](https://github.com/patternfly/patternfly-react/pull/3085))
- Updates to use markdown links ([#3072](https://github.com/patternfly/patternfly-react/pull/3072))
- Simplified legend tooltip example ([#3069](https://github.com/patternfly/patternfly-react/pull/3069))
- Added Responsive legend ([#3067](https://github.com/patternfly/patternfly-react/pull/3067))
- Added tooltip examples ([#3061](https://github.com/patternfly/patternfly-react/pull/3061))
- Added props to ChartLabel ([#3028](https://github.com/patternfly/patternfly-react/pull/3028))
- Fixed ChartThreshold props ([#3024](https://github.com/patternfly/patternfly-react/pull/3024))
- Added custom theme example ([#3023](https://github.com/patternfly/patternfly-react/pull/3023))
- Moved ChartThreshold to its own example ([#3019](https://github.com/patternfly/patternfly-react/pull/3019))

### Components
- **About Modal:**
  - Append component to an element in DOM ([#3102](https://github.com/patternfly/patternfly-react/pull/3102))
- **Application launcher:**
  - Fix unit tests ([#3107](https://github.com/patternfly/patternfly-react/pull/3107))
- **Button:**
  - Component type accepts react-router Link ([#3077](https://github.com/patternfly/patternfly-react/pull/3077))
  - Added an example of a link button with anchor component ([#3034](https://github.com/patternfly/patternfly-react/pull/3034))
- **Chip:**
  - Added OUIA compatibility to Chip component ([#2995](https://github.com/patternfly/patternfly-react/pull/2995))
- **Copy to clipboard:**
  - Wrapped pre inside the expand element ([#3169](https://github.com/patternfly/patternfly-react/pull/3169))
- **Data toolbar:** 
  - Implemented changes to match PF-Core ([#3144](https://github.com/patternfly/patternfly-react/pull/3144))
  - Add unit and integration tests ([#3201](https://github.com/patternfly/patternfly-react/pull/3201))
- **Divider:**
  - Added divider component ([#3125](https://github.com/patternfly/patternfly-react/pull/3125))
- **Dropdown:**
  - Added OUIA compatibility for Dropdown ([#3135](https://github.com/patternfly/patternfly-react/pull/3135))
  - Fix unit tests ([#3107](https://github.com/patternfly/patternfly-react/pull/3107))
- **Empty state:**
  - Removed debug message from tests ([#3161](https://github.com/patternfly/patternfly-react/pull/3161))
- **Expandable:**
  - Allowed for dynamic toggle text in uncontrolled version ([#3068](https://github.com/patternfly/patternfly-react/pull/3068))
- **Login form:**
  - Pass 'remember me' state to isChecked ([#3056](https://github.com/patternfly/patternfly-react/pull/3056))
- **Options menu:**
  - Fix unit tests and options menu([#3107](https://github.com/patternfly/patternfly-react/pull/3107)) 
- **Overflow menu:**
   - Removed unnecessary class names ([#3204](https://github.com/patternfly/patternfly-react/pull/3204))
- **Radio:**
  - Pass checked either from isChecked or checked ([#3066](https://github.com/patternfly/patternfly-react/pull/3066))
  - Fix console error ([#3138](https://github.com/patternfly/patternfly-react/pull/3138))
  - Group radio inputs in docs (axe-core) ([#2684](https://github.com/patternfly/patternfly-react/pull/2684))
- **React catalog view extension:**
  - Added catalog view extension and three components ([#3145](https://github.com/patternfly/patternfly-react/pull/3145))
- **Select:**
  - Updated prop description for selections ([#3183](https://github.com/patternfly/patternfly-react/pull/3183))
  - Set onFilter to null to run the default filter ([#3158](https://github.com/patternfly/patternfly-react/pull/3158))
  - Added plain modifier to toggle button ([#3140](https://github.com/patternfly/patternfly-react/pull/3140))
  - Use props children if custom on filter used ([#3123](https://github.com/patternfly/patternfly-react/pull/3123))
  - Modifying selection outside Select component now works ([#3096](https://github.com/patternfly/patternfly-react/pull/3096))
  - Allow custom component as select option ([#3060](https://github.com/patternfly/patternfly-react/pull/3060))
  - Added OUIA compatibility to Select component ([#2996](https://github.com/patternfly/patternfly-react/pull/2996))
- **Spinner:**
  - Fixed alert type in docs ([#3063](https://github.com/patternfly/patternfly-react/pull/3063))
- **Switch:**
  - reverted defaultChecked to checked ([#3037](https://github.com/patternfly/patternfly-react/pull/3037))
- **Tabs:**
  - Move TabButton to new file ([#3033](https://github.com/patternfly/patternfly-react/pull/3033))
- **Text area:**
  - Added a prop to allow limiting the  resize orientation of the Text are ([#3180](https://github.com/patternfly/patternfly-react/pull/3180))
- **Tooltip:**
  - Allow tooltip text to be left-aligned ([#3053](https://github.com/patternfly/patternfly-react/pull/3053))
- **Virtualized extension**
  - Added jest test ([#2761](https://github.com/patternfly/patternfly-react/pull/2761))
- **Wizard:**
  - Append component to an element in DOM ([#3102](https://github.com/patternfly/patternfly-react/pull/3102)

### Table
- Added custom row wrapper example for table  ([#3160](https://github.com/patternfly/patternfly-react/pull/3160))
- Set height auto modifier on table row ([#3133](https://github.com/patternfly/patternfly-react/pull/3133))
- Added support for custom dataLabel prop on table header ([#3040](https://github.com/patternfly/patternfly-react/pull/3040))
- Disable header controls with empty table ([#3008](https://github.com/patternfly/patternfly-react/pull/3008))
- Added OUIA compatibility to Table component ([#2964](https://github.com/patternfly/patternfly-react/pull/2964))

### Other
- **Chore:** 
  - Add issue template ([#2804](https://github.com/patternfly/patternfly-react/pull/2804))
  - Surrounded OUIA check with a try catch ([#3178](https://github.com/patternfly/patternfly-react/pull/3178))
  - Use consumer context if specified for OUIA ([#3149](https://github.com/patternfly/patternfly-react/pull/3148))
  - Updated webpack config to output source maps ([#3115](https://github.com/patternfly/patternfly-react/pull/3115))
  - Fix warnings about use of deprecated lifecycle methods ([#3098](https://github.com/patternfly/patternfly-react/pull/3098))
  - Added eslint-plugin-react-hooks ([#3083](https://github.com/patternfly/patternfly-react/pull/3083))
  - Properly use this.setState in components ([#3075](https://github.com/patternfly/patternfly-react/pull/3075))
  - Fixed sentence case for component titles ([#3054](https://github.com/patternfly/patternfly-react/pull/3054))
  - Added tslint-plugin-prettier and apply code formatting ([#2810](https://github.com/patternfly/patternfly-react/pull/2810))
- **Demo:**
  - Added bulk select demo with table and toolbar ([#3082](https://github.com/patternfly/patternfly-react/pull/3082))
  - Added table filter demo ([#3127](https://github.com/patternfly/patternfly-react/pull/3127))
- **Docs:**
   - Use gatsby-theme-patternfly-org  ([#3146](https://github.com/patternfly/patternfly-react/pull/3146))
   - Fixed regressions from gatsby-theme-patternfly-org ([#3164](https://github.com/patternfly/patternfly-react/pull/3164))

### PF3
- **Serial console:**
  - Use xterm v4 ([#3030](https://github.com/patternfly/patternfly-react/pull/3030))
- **Cards:**
  - Refactored sub-component references ([#2935](https://github.com/patternfly/patternfly-react/pull/2935))
  
## 2019.08 release notes (2019-10-01)
Packages released:
- [@patternfly/react-charts@5.0.13](https://www.npmjs.com/package/@patternfly/react-charts/v/5.0.13)
- [@patternfly/react-core@3.112.3](https://www.npmjs.com/package/@patternfly/react-core/v/3.112.3)
- [@patternfly/react-inline-edit-extension@2.11.70](https://www.npmjs.com/package/@patternfly/react-inline-edit-extension/v/2.11.70)
- [@patternfly/react-styles@3.5.27](https://www.npmjs.com/package/@patternfly/react-styles/v/3.5.27)
- [@patternfly/react-table@2.22.19](https://www.npmjs.com/package/@patternfly/react-table/v/2.22.19)
- [@patternfly/react-tokens@2.6.31](https://www.npmjs.com/package/@patternfly/react-tokens/v/2.6.31)
- [@patternfly/react-topology@2.8.65](https://www.npmjs.com/package/@patternfly/react-topology/v/2.8.65)
- [@patternfly/react-virtualized-extension@1.2.55](https://www.npmjs.com/package/@patternfly/react-virtualized-extension/v/1.2.55)
- [@patternfly/react-icons@3.14.7](https://www.npmjs.com/package/@patternfly/react-icons/v/3.14.7)

### Charts
- (BREAKING CHANGE) Updated Victory to 30.0.0
  - Replace `labels={(d) => x: ${d.x}}` with `labels={({ datum }) => x: ${datum.x}}`
  - **ChartPie:**
    - Removed `pieHeight` & `pieWidth` props -- use `padding` prop
    - Adjusted padding from 8px to 20px
  - **ChartDonut:**
    - Removed `donutHeight` & `donutWidth`  props -- use `padding` prop
    - Adjusted padding from 8px to 20px
  - **ChartDonutUtilization:**
    - Removed `donutHeight` & `donutWidth` props -- use `padding` prop
    - Adjusted padding from 8px to 20px
  - **ChartDonutThreshold:**
    - Removed `donutHeight` & `donutWidth` props -- use `padding` prop
    - Adjusted padding from 8px to 20px
  - **ChartBullet:**
    - Removed `bulletHeight` & `bulletWidth`  props -- use `bulletSize` prop
  - **ChartContainer:**
    - Renamed the `VictoryContainer` CSS selector as `pf-c-chart` for specificity
  - See the [Github tag notes](https://github.com/patternfly/patternfly-react/releases/tag/%40patternfly%2Freact-charts%405.0.0) or [#2883](https://github.com/patternfly/patternfly-react/pull/2883) for additional details
- Added missing style and responsive props to ChartVoronoiContainer ([#2977](https://github.com/patternfly/patternfly-react/pull/2977))
- Updated chart tutorial paths ([#2962](https://github.com/patternfly/patternfly-react/pull/2962))
- Eliminate the "missing key prop" warning seen in the browser console for ChartPie ([#2943](https://github.com/patternfly/patternfly-react/pull/2943))
- Slightly modified how chart containers are cloned and added examples. This ensures charts can be wrapped with the Tippy tooltip component as an alternate way of providing custom tooltips. ([#3048](https://github.com/patternfly/patternfly-react/pull/3048))
- **Area Chart:** 
  - Added stacked area chart demo and test ([#2896](https://github.com/patternfly/patternfly-react/pull/2896))
  - Added Horizontal indicator example ([#2796](https://github.com/patternfly/patternfly-react/pull/2796)) 
- **Sparkline:** Added line border to ChartArea and move sparkline ([#2887](https://github.com/patternfly/patternfly-react/pull/2887))
- **Donut chart:** Added simple fix for the donut chart tutorial link ([#2940](https://github.com/patternfly/patternfly-react/pull/2940))

### Components
- **App launcher:** Made dropdown/app launcher work better with router components ([#3011](https://github.com/patternfly/patternfly-react/pull/3011))
- **Button:** 
  - Added control variant to button ([#2983](https://github.com/patternfly/patternfly-react/pull/2983))
  - Set the disable modifier when component is not button ([#2683](https://github.com/patternfly/patternfly-react/pull/2683))
- **Dropdown:** Disabled button now only applies disabled attribute ([#2989](https://github.com/patternfly/patternfly-react/pull/2989))
- **Chip group:** 
  - Allowed chip group toolbar item to handle single chip ([#2882](https://github.com/patternfly/patternfly-react/pull/2882))
  - ChipGroupToolbarItem component was not propagating className despite having this prop in documentation and TS. This is a fix to ChipGroupToolbarItem className ([#2881](https://github.com/patternfly/patternfly-react/pull/2881))
  - Allowed variable number of chips to be displayed ([#2878](https://github.com/patternfly/patternfly-react/pull/2878))
- **Copy to clipboard:** 
  - Added prop for expanded by default ([#2923](https://github.com/patternfly/patternfly-react/pull/2923))
  - Added an example of copy clipboard with array of objects ([#2916](https://github.com/patternfly/patternfly-react/pull/2916))
- **Date and time picker component:** Added Date and time picker component ([#1420](https://github.com/patternfly/patternfly-react/pull/1420))
- **Data toolbar:** 
  - Added aria-haspopup to the toggle group ([#3012](https://github.com/patternfly/patternfly-react/pull/3012))
  - Added chip groups to toolbar ([#2888](https://github.com/patternfly/patternfly-react/issues/2888))
- **Dropdown split button:** Added 3rd state to split button ([#2842](https://github.com/patternfly/patternfly-react/pull/2842))
- **Empty state:** Made it possible to support primary and icon as div elements ([#2957](https://github.com/patternfly/patternfly-react/pull/2957))
- **Expandable:** The controlled version of Expandable was not reacting to changes made to the isExpanded prop after initial creation. This PR fixed the issue. ([#2955](https://github.com/patternfly/patternfly-react/pull/2955))
- **Flex:** Added support for flex layout, tests, etc. ([#2985](https://github.com/patternfly/patternfly-react/pull/2985))
- **LoginPage:** Add attributes to the submit button ([#2682](https://github.com/patternfly/patternfly-react/pull/2682))
- **Modal:**
  - Simplified disabling of FocusTrap ([#2862](https://github.com/patternfly/patternfly-react/pull/2862))
  - Changed the cancel button variant to link ([#2979](https://github.com/patternfly/patternfly-react/pull/2979))
- **Nav:** HorizontalNavMenuItem: Fixed onItemClick PropType  ([#2984](https://github.com/patternfly/patternfly-react/pull/2984))
- **Overflow:** Introduced overflow component ([#2819](https://github.com/patternfly/patternfly-react/issues/2819))
- **Pagination:** 
  - Added OUIA compatibility to Pagination component ([#2960](https://github.com/patternfly/patternfly-react/pull/2960))
  - Fixed styling discrepancy with HTML version ([#2904](https://github.com/patternfly/patternfly-react/pull/2904))
- **Select:** 
  - Added a maximum height property to select menu ([#2946](https://github.com/patternfly/patternfly-react/pull/2946))
  - Displayed selections data properly ([#2848](https://github.com/patternfly/patternfly-react/pull/2848))
  - Added props for hard coded strings ([#2993](https://github.com/patternfly/patternfly-react/pull/2993))
- **Switch:** Backward compatibility in case labelOff was not set, fixed the conditionals ([#2816](https://github.com/patternfly/patternfly-react/pull/2816))
- **Tab:** Added two new props: mountOnEnter and unmountOnExit ([#2902](https://github.com/patternfly/patternfly-react/pull/2902))
- **Wizard:** Added default function to onClose prop ([#2863](https://github.com/patternfly/patternfly-react/pull/2863))

### Table
- Fixed cell title warning ([#2967](https://github.com/patternfly/patternfly-react/pull/2967))
- Support height auto modifier in tr ([#2932](https://github.com/patternfly/patternfly-react/pull/2932))
- Added flag to hide select all ([#2926](https://github.com/patternfly/patternfly-react/pull/2926))
- Improved the documentation for Table component from react-table ([#3016](https://github.com/patternfly/patternfly-react/pull/3016))
- Added tables to integration test demos and wrote unit tests ([#2685](https://github.com/patternfly/patternfly-react/pull/2685))

### Other
- **Docs:** Fixed live edit caret color so it is visible ([#2899](https://github.com/patternfly/patternfly-react/pull/2899))
- **PF3**: Bumped PF3 deps including Storybook ([#2985](https://github.com/patternfly/patternfly-react/pull/2895))

## 2019.07 release notes (2019-09-10)
Packages released:
- [@patternfly/react-charts@4.9.10](https://www.npmjs.com/package/@patternfly/react-charts/v/4.9.10)
- [@patternfly/react-core@3.104.0](https://www.npmjs.com/package/@patternfly/react-core/v/3.104.0)
- [@patternfly/react-styles@3.5.22](https://www.npmjs.com/package/@patternfly/react-styles/v/3.5.22)
- [@patternfly/react-table@2.20.15](https://www.npmjs.com/package/@patternfly/react-table/v/2.20.15)
- [@patternfly/react-tokens@2.6.26](https://www.npmjs.com/package/@patternfly/react-tokens/v/2.6.26)
- [@patternfly/react-topology@2.8.34](https://www.npmjs.com/package/@patternfly/react-topology/v/2.8.34)
- [@patternfly/react-icons@3.14.2](https://www.npmjs.com/package/@patternfly/react-icons/v/3.14.2)
- [@patternfly/react-virtualized-extension@1.2.23](https://www.npmjs.com/package/@patternfly/react-virtualized-extension/v/1.2.23)
- [@patternfly/react-inline-edit-extension@2.11.35](https://www.npmjs.com/package/@patternfly/react-inline-edit-extension/v/2.11.35)

### Charts
- Adjusted legend position for axis label ([#2763](https://github.com/patternfly/patternfly-react/pull/2763))
- Added new symbol for dash/threshold ([#2884](https://github.com/patternfly/patternfly-react/pull/2884))
- **BulletChart:** Added new BulletChart type! ([#2708](https://github.com/patternfly/patternfly-react/pull/2708))
- **StackChart:** Added monthly vertical stack example ([#2625](https://github.com/patternfly/patternfly-react/pull/2625))

### Components
- **Accordion:** Allow JSX elements for content and toggle ([#2713](https://github.com/patternfly/patternfly-react/pull/2713))
- **BackgroundImage:** Fix bug on non-Chrome browsers regarding filter's width ([#2742](https://github.com/patternfly/patternfly-react/pull/2742))
- **ChipGroup:** Added defaultIsOpen prop to allow chip group to be initially expanded ([#2651](https://github.com/patternfly/patternfly-react/pull/2651))
- **ClipboardCopy:** Updated if children change ([#2849](https://github.com/patternfly/patternfly-react/pull/2849))
- **Drawer:** Expose DrawerContent components and remove panelContent prop ([#2733](https://github.com/patternfly/patternfly-react/pull/2733))
- **Dropdown:**
  - Added support for dropdown with primary button toggle ([#2857](https://github.com/patternfly/patternfly-react/pull/2857))
  - Allow custom dropdown items ([#2890](https://github.com/patternfly/patternfly-react/pull/2890))
- **EmptyState:** Fixed a bug where the correct size modifier wasn't being passed ([#2692](https://github.com/patternfly/patternfly-react/pull/2692))
- **Expandable:** Support uncontrolled expandable ([#2649](https://github.com/patternfly/patternfly-react/pull/2649))
- **FormGroup:** Fixed a bug where className was not being propogated for non-inline forms ([#2864](https://github.com/patternfly/patternfly-react/pull/2864))
- **LoginForm:** Username input field is now autofocused ([#2659](https://github.com/patternfly/patternfly-react/pull/2659))
- **Modal:**
  - Added isFooterLeftAligned prop ([#2835](https://github.com/patternfly/patternfly-react/pull/2835))
  - Added appendTo prop so component can render in element other than document.body ([#2802](https://github.com/patternfly/patternfly-react/pull/2802))
  - FocusTrap works with showClose being false ([#2774](https://github.com/patternfly/patternfly-react/pull/2774))
- **Nav:** Added dark theme modifier flag ([#2856](https://github.com/patternfly/patternfly-react/pull/2856))
- **OptionsMenu:** Now uses our Dropdown component and is consistent with it ([#2299](https://github.com/patternfly/patternfly-react/pull/2299))
- **Page:** Added dark theme modifier flag ([#2856](https://github.com/patternfly/patternfly-react/pull/2856))
- **Select:**
  - Allow creating new select items ([#2820](https://github.com/patternfly/patternfly-react/pull/2820))
  - Added support for toggle icon ([#2748](https://github.com/patternfly/patternfly-react/pull/2748))
  - Added direction prop ([#2611](https://github.com/patternfly/patternfly-react/pull/2611))
- **Spinner:** Added new experimental Spinner component! ([#2858](https://github.com/patternfly/patternfly-react/pull/2858))
- **Switch:** Changed checked property in DOM ([#2749](https://github.com/patternfly/patternfly-react/pull/2749))
- **Tab:** Allow JSX elements for Tab title ([#2681](https://github.com/patternfly/patternfly-react/pull/2681))
- **TextArea:** Support defaultValue attribute for uncontrolled TextArea ([#2712](https://github.com/patternfly/patternfly-react/pull/2712))
- **Toolbar:** Added new experimental Toolbar component! ([#2861](https://github.com/patternfly/patternfly-react/pull/2861))
- **Tooltip:**
  - Allow passing properties through to PopoverBase and hence tippy.js ([#2769](https://github.com/patternfly/patternfly-react/pull/2769))
  - Added the manual trigger option with the isVisible prop ([#2769](https://github.com/patternfly/patternfly-react/pull/2769))
- **Wizard:** Added support for in-page rendering ([#2830](https://github.com/patternfly/patternfly-react/pull/2830))

### Table
- Added new visibleOn and hiddenOn breakpoint ([#2676](https://github.com/patternfly/patternfly-react/pull/2676))

### Icons
- Added Path Missing Icon ([#2817](https://github.com/patternfly/patternfly-react/pull/2817))
- Added Azure and OpenStack icons ([#2827](https://github.com/patternfly/patternfly-react/pull/2827))
- Added Ansible Tower icon to custom icons definition ([#2735](https://github.com/patternfly/patternfly-react/pull/2735))
- Publish configs as well with icons ([#2701](https://github.com/patternfly/patternfly-react/pull/2701))

### Virtualized Extension
- Debounce resize event to fix inconsistent grid sizing ([#2754](https://github.com/patternfly/patternfly-react/pull/2754))

### PF3
- **AsyncTypeAheadSelect:** Forward ref for AsyncTypeAheadSelect ([#2760](https://github.com/patternfly/patternfly-react/pull/2760))
- **CatalogTile:**
  - Allow JSX element for CatalogTile's icon ([#2771](https://github.com/patternfly/patternfly-react/pull/2771))
  - Added iconAlt property to use for alt text for icon image ([#2715](https://github.com/patternfly/patternfly-react/pull/2715))
- **DatePicker:** Added new date picker components ([#1873](https://github.com/patternfly/patternfly-react/pull/1873))
- **HorizontalNavMenu:** Allow HorizontalNavMenuItem's title to be a node ([#2825](https://github.com/patternfly/patternfly-react/pull/2825))

## 2019.06 release notes (2019-08-13)
Packages released:
- [@patternfly/react-charts@4.7.9](https://www.npmjs.com/package/@patternfly/react-charts/v/4.7.9)
- [@patternfly/react-core@3.87.3](https://www.npmjs.com/package/@patternfly/react-core/v/3.87.3)
- [@patternfly/react-styles@3.5.13](https://www.npmjs.com/package/@patternfly/react-styles/v/3.5.13)
- [@patternfly/react-table@2.17.5](https://www.npmjs.com/package/@patternfly/react-table/v/2.17.5)
- [@patternfly/react-tokens@2.6.16](https://www.npmjs.com/package/@patternfly/react-tokens/v/2.6.16)
- [@patternfly/react-topology@2.7.31](https://www.npmjs.com/package/@patternfly/react-topology/v/2.7.31)
- [@patternfly/react-icons@3.10.14](https://www.npmjs.com/package/@patternfly/react-icons/v/3.10.14)
- [@patternfly/react-virtualized-extension@1.1.117](https://www.npmjs.com/package/@patternfly/react-virtualized-extension/v/1.1.117)
- [@patternfly/react-inline-edit-extension@2.10.5](https://www.npmjs.com/package/@patternfly/react-inline-edit-extension/v/2.10.5)

### Charts
- Used vars to enable Red Hat fonts. When the pf-m-redhat-font selector is added to the page, the Red Hat font is expected to be used instead of the default Overpass font. This change ensures that charts and its labels use the Red Hat font as expected
([#2584](https://github.com/patternfly/patternfly-react/pull/2584))
- The donut threshold chart used to generate a 'width must be a non-negative' warning when donutWidth values are zero. This change ensures the dynamic chart size is never less than zero  ([#2590](https://github.com/patternfly/patternfly-react/pull/2590))
- Fixed missing fill and stroke colors for area and line charts. Set area.style.data.fill to first color scale value in colorTheme function. Set line.style.data.stroke to first color scale value in colorTheme function ([#2626](https://github.com/patternfly/patternfly-react/pull/2626))


### Components
- **Accordion:** Added the html structure of Accordion to React  ([#2422](https://github.com/patternfly/patternfly-react/pull/2422))
- **Alert:** Added default variant for Alert  ([#2648](https://github.com/patternfly/patternfly-react/pull/2648))
- **Button:** Added 'reset' to types ([#2622](https://github.com/patternfly/patternfly-react/pull/2622))
- **Checkbox** Updated ids so none repeat. Prevents inconsistent checking behavior when labels are clicked for uncontrolled vs. controlled
examples  ([#2663](https://github.com/patternfly/patternfly-react/pull/2663))
- **Drawer:** Added the drawer component to experimental  ([#2633](https://github.com/patternfly/patternfly-react/pull/2633))
- **Dropdown:**
  - Automatically focus first dropdown item when DropdownMenu mounts  ([#2355](https://github.com/patternfly/patternfly-react/pull/2355))
  - This PR adds an aria-label to the "icon only" example of Dropdown  ([#2517](https://github.com/patternfly/patternfly-react/pull/2517))
  - Fixed missing event passthrough on internal onSelect callback ([#2657](https://github.com/patternfly/patternfly-react/pull/2657))
- **Form:** Updated Form demo to use check over radio
([#2567](https://github.com/patternfly/patternfly-react/pull/2567))
- **Modal:** Allows for custom header and/or footer in Modal component Added the showClose prop, defaulted to true. Set to false to hide the close button  ([#2120](https://github.com/patternfly/patternfly-react/pull/2120))
- **Page:**
  - Skip to content should point to primary content container ([#2519](https://github.com/patternfly/patternfly-react/pull/2519))
  - Change the defaultManagedSidebarOpen prop name for consistency ([#2664](https://github.com/patternfly/patternfly-react/pull/2664))
- **Pagination:**
  - When there is 0 items or negative number for pagination show 0th page out of 0 and disable paginating  ([#2558](https://github.com/patternfly/patternfly-react/pull/2558))
  - Added a demo of table integrated with pagination ([#2601](https://github.com/patternfly/patternfly-react/pull/2601))
  - Fixed pagination to update page count ([#2639](https://github.com/patternfly/patternfly-react/pull/2639))
  - Added disabled flag for whole component ([#2586](https://github.com/patternfly/patternfly-react/pull/2586))
- **Select:**  
  - Select menu now has consistent, open behavior on empty text input field  ([#2572](https://github.com/patternfly/patternfly-react/pull/2572))
  - Added a custom callback for the filtering function used in typeahead variants. This replaces the current search entirely, so the function must handle filtering the list of children/options and return the filtered results for the internal state to update
([#2434](https://github.com/patternfly/patternfly-react/pull/2434))
  - Added isPlain variation/prop to Select.tsx, snapshot tests, and integration ([#2588](https://github.com/patternfly/patternfly-react/pull/2588))
  - This enhancement allows a user to now pass in a user defined object to store additional data besides just the string value to a select option. The object must have a toString function that is
responsible for returning the the localized string ([#2612](https://github.com/patternfly/patternfly-react/pull/2612))
  - Disabled focus trap on checkbox select with no children. Focus Trap throws exception if no children to ref. In order to avoid this error, render the component with no Focus Trap when no children is passed  ([#2647](https://github.com/patternfly/patternfly-react/pull/2647))
  - Added disabled flag to select ([#2678](https://github.com/patternfly/patternfly-react/pull/2678))
- **Switch:** Added aria-labelledby to input
([#2468](https://github.com/patternfly/patternfly-react/pull/2468))
- **Topology:** Fixed paddings for topology control bar buttons. Removed css settings that override the paddings for the topology control bar buttons  ([#2635](https://github.com/patternfly/patternfly-react/pull/2635))

### Table
- Added the wrap modifier to react-table through transforms  ([#2615](https://github.com/patternfly/patternfly-react/pull/2615))
- Replaced lodash-es with lodash  ([#2641](https://github.com/patternfly/patternfly-react/pull/2641))

### TypeScript conversion
- **Dropdown:** ([#2502](https://github.com/patternfly/patternfly-react/pull/2502))

### Docs
- Made name column not wrap
([#2583](https://github.com/patternfly/patternfly-react/pull/2502))
- Small adjustment for Stack layout. Updated the doc to correctly read that isFilled is related to the vertical space occupied, not horizontal  ([#2605](https://github.com/patternfly/patternfly-react/pull/2605))
- Link to react-tokens page was broken. Updated to point to the Global CSS Variables page ([#2453](https://github.com/patternfly/patternfly-react/pull/2453))
- Added extension notes to Gatsby docs to improve the Gatsby doc for table extensions and add disclaimer about extension status ([#2637](https://github.com/patternfly/patternfly-react/pull/2637))
- Fixed accessibility issues in Accordion, ClipboardCopy, and DataList ([#2634](https://github.com/patternfly/patternfly-react/pull/2634))


### Other
- **Chore:**
  - Added curl command after release ([#2547](https://github.com/patternfly/patternfly-react/pull/2547))
  - Invalidate all packages if yarn.lock changes ([#2548](https://github.com/patternfly/patternfly-react/pull/2548))
  - Updated release notes to use uls ([#2604](https://github.com/patternfly/patternfly-react/pull/2604))

## 2019.05 release notes (2019-07-24)
Packages released:
- [@patternfly/react-charts@4.7.1](https://www.npmjs.com/package/@patternfly/react-charts/v/4.7.1)
- [@patternfly/react-core@3.75.2](https://www.npmjs.com/package/@patternfly/react-core/v/3.75.2)
- [@patternfly/react-styles@3.5.7](https://www.npmjs.com/package/@patternfly/react-styles/v/3.5.7)
- [@patternfly/react-table@.14.23](https://www.npmjs.com/package/@patternfly/react-table/v/2.14.23)
- [@patternfly/react-tokens@2.6.13](https://www.npmjs.com/package/@patternfly/react-tokens/v/2.6.13)
- [@patternfly/react-topology@2.6.20](https://www.npmjs.com/package/@patternfly/react-topology/v/2.7.2)
- [@patternfly/react-icons@3.10.14](https://www.npmjs.com/package/@patternfly/react-icons/v/3.10.14)
- [@patternfly/react-virtualized-extension@1.1.82](https://www.npmjs.com/package/@patternfly/react-virtualized-extension/v/1.1.82)
- [@patternfly/react-inline-edit-extension@2.9.49](https://www.npmjs.com/package/@patternfly/react-inline-edit-extension/v/2.9.49)
### Charts ([@patternfly/react-charts@4.7.1](https://www.npmjs.com/package/@patternfly/react-charts/v/4.7.1))
- Fixed runtime errors related to theme padding ([#2430](https://github.com/patternfly/patternfly-react/pull/2430))
- Added charts to react-integration tests ([#2354](https://github.com/patternfly/patternfly-react/pull/2354))
- Updated chart theme to use pf-core variables ([#2439](https://github.com/patternfly/patternfly-react/pull/2439))
- Removed invalid pf-core var ([#2463](https://github.com/patternfly/patternfly-react/pull/2463))
- Adjusted pf-core vars & added tooltip examples ([#2497](https://github.com/patternfly/patternfly-react/pull/2497))
- Updated pf-core vars ([#2480](https://github.com/patternfly/patternfly-react/pull/2480))
- Provided an accessible title and description ([#2500](https://github.com/patternfly/patternfly-react/pull/2500))
- Added bottom-left legend position ([#2442](https://github.com/patternfly/patternfly-react/pull/2442))
- Tweaked aria title for area chart ([#2510](https://github.com/patternfly/patternfly-react/pull/2510))
- Replaced prop `titleComponent` by `subTitleComponent` on donut charts ([#2488](https://github.com/patternfly/patternfly-react/pull/2488))
- Added individual padding vars for donut charts ([#2529](https://github.com/patternfly/patternfly-react/pull/2529))
- Added new mutil-color theme for ordered charts ([#2552](https://github.com/patternfly/patternfly-react/pull/2552))
- Added fixed point notation into percentage donut charts ([#2375](https://github.com/patternfly/patternfly-react/pull/2375))
- Used vars to enable Red Hat fonts ([#2584](https://github.com/patternfly/patternfly-react/pull/2584))
### Components ([@patternfly/react-core@3.75.2](https://www.npmjs.com/package/@patternfly/react-core/v/3.75.2))
- **About modal:** AboutModal and Modal both now trap focus in the browser ([#2428](https://github.com/patternfly/patternfly-react/pull/2428))
- **Accordion:** Added prop to heading level of parent component ([#2290](https://github.com/patternfly/patternfly-react/pull/2290))
- **Application launcher:** Allowed custom icon for application launcher toggle ([#2492](https://github.com/patternfly/patternfly-react/pull/2492))
- **Badge:**
  - Temporarily disabled problematic badges ([#2530](https://github.com/patternfly/patternfly-react/pull/2530))
  - Added space between badges in the examples ([#2556](https://github.com/patternfly/patternfly-react/pull/2556))
- **Breadcrumb switcher:** Fixed Autocomplete camelCase ([#2457](https://github.com/patternfly/patternfly-react/pull/2457))
- **Datalist:** Added hidden and visible breakpoints ([#2251](https://github.com/patternfly/patternfly-react/pull/2251))
- **Dropdown:** Provided option to not autofocus on first item ([#2473](https://github.com/patternfly/patternfly-react/pull/2473))
- **Empty state:** Updated EmptyStateBody to use div instead of p ([#2499](https://github.com/patternfly/patternfly-react/pull/2499))
- **Experimental features:** Added POC for experimental button and badge ([#2363](https://github.com/patternfly/patternfly-react/pull/2363))
- **Gallery:** Converted gallery to TypeScript ([#2432](https://github.com/patternfly/patternfly-react/pull/2432))
- **Login page:** Removed ariaLabel from checkbox ([#2455](https://github.com/patternfly/patternfly-react/pull/2455))
- **Modal:** Modal now traps screen reader focus ([#2406](https://github.com/patternfly/patternfly-react/pull/2406))
- **Options menu:** Updated examples to trigger select on the whole item ([#2513](https://github.com/patternfly/patternfly-react/pull/2513))
- **Pagination:**
  - Dropdown closes on click outside of menu area ([#2235](https://github.com/patternfly/patternfly-react/pull/2235))
  - Added ability to allow users to enter numbers into the input field ([#2417](https://github.com/patternfly/patternfly-react/pull/2417))
- **Select:**
  - Removed ariaLabel from grouped checkbox select ([#2456](https://github.com/patternfly/patternfly-react/pull/2456))
  - Added optional display via children to option ([#2419](https://github.com/patternfly/patternfly-react/pull/2419))
  - Updated typeahead filtered list when children change ([#2518](https://github.com/patternfly/patternfly-react/pull/2518))
- **Switch:** Added OUIA compatibility to Switch ([#2304](https://github.com/patternfly/patternfly-react/pull/2304))
- **Tabs:**
  - Allowed eventKey to accept a string ([#2493](https://github.com/patternfly/patternfly-react/pull/2493))
  - Implemented overflow styles for secondary tabs ([#2512](https://github.com/patternfly/patternfly-react/pull/2512))
- **Tooltip:** Added support for aria prop from Tippy library ([#2539](https://github.com/patternfly/patternfly-react/pull/2539))
### TypeScript conversion
- Bullseye ([#2427](https://github.com/patternfly/patternfly-react/pull/2427))
- Gallery ([#2432](https://github.com/patternfly/patternfly-react/pull/2432))
- Grid ([#2443](https://github.com/patternfly/patternfly-react/pull/2443))
- Level ([#2450](https://github.com/patternfly/patternfly-react/pull/2450))
- Pagination ([#2256](https://github.com/patternfly/patternfly-react/pull/2256))
- Split ([#2466](https://github.com/patternfly/patternfly-react/pull/2466))
- Stack ([#2412](https://github.com/patternfly/patternfly-react/pull/2412))
- Switch ([#2311](https://github.com/patternfly/patternfly-react/pull/2311))
- Toolbar ([#2475](https://github.com/patternfly/patternfly-react/pull/2475))
### Table ([@patternfly/react-table@2.14.23](https://www.npmjs.com/package/@patternfly/react-table/v/2.14.23))
- Checked empty array in areAllRowsSelected ([#2527](https://github.com/patternfly/patternfly-react/pull/2527))
- Added exports for compoundExpand ([#2554](https://github.com/patternfly/patternfly-react/pull/2554))
### Styles ([@patternfly/react-styles@3.5.7](https://www.npmjs.com/package/@patternfly/react-styles/v/3.5.7))
- Added pickProperties to react-styles utils exports ([#2481](https://github.com/patternfly/patternfly-react/pull/2481))
### Docs
- Updated link to react-tokens page in the readme ([#2453](https://github.com/patternfly/patternfly-react/pull/2453))
### Other
- **Build:**
  - Added PR comment on publishing to NPM ([#2433](https://github.com/patternfly/patternfly-react/pull/2433))
  - Added Windows support ([#2471](https://github.com/patternfly/patternfly-react/pull/2471))
- **Chore:**
  - Removed tippy-react dependency ([#2505](https://github.com/patternfly/patternfly-react/pull/2505))
  - Updated react-docs to use Red Hat font ([#2563](https://github.com/patternfly/patternfly-react/pull/2563))
- **Unit tests:** Fixed keyHandler tests in util.test.js ([#2489](https://github.com/patternfly/patternfly-react/pull/2489))

## 2019.04 release notes (2019-07-02)
Packages released:
- [@patternfly/react-core@3.58.1](https://www.npmjs.com/package/@patternfly/react-core/v/3.58.1)
- [@patternfly/react-inline-edit-extension@2.9.12](https://www.npmjs.com/package/@patternfly/react-inline-edit-extension/v/2.9.12)
- [@patternfly/react-table@2.13.43](https://www.npmjs.com/package/@patternfly/react-table/v/2.13.43)
- [@patternfly/react-topology@2.4.21](https://www.npmjs.com/package/@patternfly/react-topology/v/2.4.21)
- [@patternfly/react-virtualized-extension@1.1.45](https://www.npmjs.com/package/@patternfly/react-virtualized-extension/v/1.1.45)
- [@patternfly/react-charts@4.4.7](https://www.npmjs.com/package/@patternfly/react-charts/v/4.4.7)
- [@patternfly/react-styles@3.4.6](https://www.npmjs.com/package/@patternfly/react-styles/v/3.4.6)
- [@patternfly/react-tokens@2.6.5](https://www.npmjs.com/package/@patternfly/react-tokens/v/2.6.5)
### Charts ([@patternfly/react-charts@4.4.7](https://www.npmjs.com/package/@patternfly/react-charts/v/4.4.7))
- Added sparkline example and interpolation to area examples ([#2373](https://github.com/patternfly/patternfly-react/pull/2373))
- Fixed themes for bar chart default colors ([#2112)](https://github.com/patternfly/patternfly-react/pull/2112)
- DonutThreshold: No longer show static threshold donut tooltips by default ([#2270](https://github.com/patternfly/patternfly-react/pull/2270))
- Added support for legends and grids ([#2324](https://github.com/patternfly/patternfly-react/pull/2324))
### Components ([@patternfly/react-core@3.58.1](https://www.npmjs.com/package/@patternfly/react-core/v/3.58.1))
- **About modal:** Changed strapline element to paragraph ([#2376](https://github.com/patternfly/patternfly-react/pull/2376))
- **Breadcrumb switcher:** Disabled autocomplete ([#2407](https://github.com/patternfly/patternfly-react/pull/2407))
- **Card:** Addedcompacted card variation ([#2399](https://github.com/patternfly/patternfly-react/pull/2399))
- **Checkbox:** Added 3rd state to checkbox controlled by consumer ([#2252](https://github.com/patternfly/patternfly-react/pull/2252))
- **Chip group:** Added heading level prop to toolbar chip group label ([#2278](https://github.com/patternfly/patternfly-react/pull/2278))
- **Data list:** Added DataListRow to imports ([#2353](https://github.com/patternfly/patternfly-react/pull/2353))
- **Dropdown:** Automatically focused first dropdown item when DropdownMenu ([#2355](https://github.com/patternfly/patternfly-react/pull/2355))
- **Expandable:** Added button type to the expandable component ([#2340](https://github.com/patternfly/patternfly-react/pull/2340))
- **Label:** Added TypeScript flag to the label docs ([#2343](https://github.com/patternfly/patternfly-react/pull/2343))
- **Notification badge:** Added the notification badge component ([#2342)](https://github.com/patternfly/patternfly-react/pull/2342)
- **Options menu:** Added disabled modifier to the toggle ([#2401](https://github.com/patternfly/patternfly-react/pull/2401))
- **Page:** Added page section main nav type variant ([#2268](https://github.com/patternfly/patternfly-react/pull/2268))
- **Radio:** Fixed warning from undefined starting params ([#2292](https://github.com/patternfly/patternfly-react/pull/2292))
- **Form:**
  - Updated text in form component ([#2352](https://github.com/patternfly/patternfly-react/pull/2352))
  - Wrapped form label text in new element ([#2322](https://github.com/patternfly/patternfly-react/pull/2332))
- **Grid:**
  - Removed size props from ...props ([#2404](https://github.com/patternfly/patternfly-react/pull/2404))
  - Updated grid layout to support new 2xl breakpoint ([#2305](https://github.com/patternfly/patternfly-react/pull/2305))
- **Tabs:**
  - Fixed TypeScript errors and revert `TabContainer` to a component ([#2402](https://github.com/patternfly/patternfly-react/pull/2402))
  - Remove comment from code ([#2351](https://github.com/patternfly/patternfly-react/pull/2351))
  - Made variant prop optional ([#2348](https://github.com/patternfly/patternfly-react/pull/2348))
### TypeScript conversion
- Copy to clipboard ([#2131](https://github.com/patternfly/patternfly-react/pull/2131))
- Progress ([#2307](https://github.com/patternfly/patternfly-react/pull/2307))
- Select ([#2201](https://github.com/patternfly/patternfly-react/pull/2201))
- Input group ([#2220](https://github.com/patternfly/patternfly-react/pull/2220))

## 2019.03 release notes (2019-06-11)
Packages released:
- [@patternfly/react-charts@4.1.5](https://www.npmjs.com/package/@patternfly/react-charts/v/4.1.5)
- [@patternfly/react-core@3.38.1](https://www.npmjs.com/package/@patternfly/react-core/v/3.38.1)
- [@patternfly/react-inline-edit-extension@2.7.7](https://www.npmjs.com/package/@patternfly/react-inline-edit-extension/v/2.7.7)
- [@patternfly/react-styles@3.3.3](https://www.npmjs.com/package/@patternfly/react-styles/v/3.3.3)
- [@patternfly/react-table@2.11.1](https://www.npmjs.com/package/@patternfly/react-table/v/2.11.1)
- [@patternfly/react-tokens@2.5.5](https://www.npmjs.com/package/@patternfly/react-tokens/v/2.5.5)
### Charts ([@patternfly/react-charts@4.1.5](https://www.npmjs.com/package/@patternfly/react-charts/v/4.1.5))
- Major bump react-charts ([#2143](https://github.com/patternfly/patternfly-react/pull/2143))
- Changed default Chart padding property to show axis
- Refactored ChartTheme colors and utils for donut utilization theme
- ChartLegend now defaults to be responsive
- Aligned label vertically and added donutHeight/Width defaults ([#2193](https://github.com/patternfly/patternfly-react/pull/2193))
- Added examples on how to use VictoryZoomContainer ([#1879](https://github.com/patternfly/patternfly-react/pull/1879))
- Apply defaults to custom legend ([#2194](https://github.com/patternfly/patternfly-react/issues/2194))
- Chart & ChartStack to use ReactNode as children type ([#2155](https://github.com/patternfly/patternfly-react/pull/2155))
- Remove ChartThemeDefinition export from index.ts ([#2149](https://github.com/patternfly/patternfly-react/pull/2149))
### Components ([@patternfly/react-core@3.38.1](https://www.npmjs.com/package/@patternfly/react-core/v/3.38.1))
- **About modal:** Support isOpen initially set true in about modal. This ensures the about modal container exists on initial load if `isOpen` is passed `true` with children contents initially ([#2153](https://github.com/patternfly/patternfly-react/pull/2153))
- **Navigation:** On NavItems, Maintain className passed to custom NavItems. Keeps classNames set on the child of a custom NavItem ([#2134](https://github.com/patternfly/patternfly-react/pull/2134))
- **Pagination:** When empty array is sent to pagination now no per page is visible. It is now possible with Per page option to hide by passing empty array of per page options ([#2175](https://github.com/patternfly/patternfly-react/pull/2175))
- **Select:** Added keyboard interaction to typeahead variants, other variants remained unchanged. Enter, with select closed, toggles open the menu. Focus should now remains on input. Arrow up and down navigates the options with a focus styling. Enter, with select opened, selects the highlighted item ([#2013](https://github.com/patternfly/patternfly-react/pull/2013))
- **Tabs:** Fixed tabs ref proptype ([#2158](https://github.com/patternfly/patternfly-react/pull/2158))
### Table ([@patternfly/react-table@2.11.1](https://www.npmjs.com/package/@patternfly/react-table/v/2.11.1))
- Added React-Virtualized PF4 tables ([#2011](https://github.com/patternfly/patternfly-react/pull/2011))
- Exported RowWrapper implementation ([#2118](https://github.com/patternfly/patternfly-react/pull/2118))
- Some props of IRow should not required Makes following props of `IRow` to optional isOpen parent props ([#2196](https://github.com/patternfly/patternfly-react/pull/2196))
- Fixed error Unknown event handler property `onCollapse`. Removed `rows` and `onCollapse` from `...props` ([#2195](https://github.com/patternfly/patternfly-react/pull/2195))
- Added support for .pf-m-grid-2xl breakpoint. Added breakpoint to list of available breakpoints and updated snapshot ([#2206](https://github.com/patternfly/patternfly-react/pull/2206))
- Reverted bodywrapper conversion to stateless-function ([#2161](https://github.com/patternfly/patternfly-react/pull/2161))
### Topology (@patternfly/react-topology)
- Added @patternfly/react-topology package ([#2170](https://github.com/patternfly/patternfly-react/pull/2170))
- Fixed esm output and converted react-virtualized-extension to TS ([#2190](https://github.com/patternfly/patternfly-react/pull/2190))
### Styles ([@patternfly/react-styles@3.3.3](https://www.npmjs.com/package/@patternfly/react-styles/v/3.3.3))
- Changed all the React css imports and added types for them. Instead of using a babel plugin to generate the JS at compile time for our CSS-in-JS solution, we statically generate it beforehand in react-styles ([#2085](https://github.com/patternfly/patternfly-react/pull/2085))
- Bumped jsdom ([#2080](https://github.com/patternfly/patternfly-react/pull/2080))
- Added sideeffects to react-styles ([#2207](https://github.com/patternfly/patternfly-react/pull/2207))
### TypeScript conversion
- Backdrop ([#2105](https://github.com/patternfly/patternfly-react/pull/2105))
- Background image ([#2070](https://github.com/patternfly/patternfly-react/pull/2070))
- Options menu ([#2002](https://github.com/patternfly/patternfly-react/pull/2002))
- Text input ([#1914](https://github.com/patternfly/patternfly-react/pull/1914))

## 2019.02 release notes (2019-06-05)
Packages released:
- [@patternfly/react-charts@3.6.4](https://www.npmjs.com/package/@patternfly/react-charts/v/3.6.4)
- [@patternfly/react-core@3.34.2](https://www.npmjs.com/package/@patternfly/react-core/v/3.34.2)
- [@patternfly/react-inline-edit-extension@2.5.2](https://www.npmjs.com/package/@patternfly/react-inline-edit-extension/v/2.5.2)
- [@patternfly/react-styles@3.2.3](https://www.npmjs.com/package/@patternfly/react-styles/v/3.2.3)
- [@patternfly/react-table@2.9.2](https://www.npmjs.com/package/@patternfly/react-table/v/2.9.2)
- [@patternfly/react-tokens@2.5.3](https://www.npmjs.com/package/@patternfly/react-tokens/v/2.5.3)
### Components ([@patternfly/react-core@3.34.2](https://www.npmjs.com/package/@patternfly/react-core/v/3.34.2))
- **About Modal:** Provided a way to set the background using props ([#1940](https://github.com/patternfly/patternfly-react/pull/1940))
- **Accordion:** Added accordion component ([#1511](https://github.com/patternfly/patternfly-react/pull/1511))
- **Background Image:** Fixed background image spacing issue ([#1923](https://github.com/patternfly/patternfly-react/pull/1923))
- **Card:** Added card is-hoverable modifier prop ([#1852](https://github.com/patternfly/patternfly-react/pull/1852))
- **Checkbox:** Set checked value correctly ([#1929](https://github.com/patternfly/patternfly-react/pull/1929))
- **Copy to Clipboard:** Fixed docs ([#1821](https://github.com/patternfly/patternfly-react/pull/1821))
  - Changed doc text ([#1823](https://github.com/patternfly/patternfly-react/pull/1823))
  - Removed textarea from clipboard copy ([#1840](https://github.com/patternfly/patternfly-react/pull/1840))
- **Dropdown:** Renamed toggle export ([#1861](https://github.com/patternfly/patternfly-react/pull/1861))
- **Grid:** Added missing props in d.ts ([#1749](https://github.com/patternfly/patternfly-react/pull/1749))
- **Icons:** Added font awesome brands icons([#1669](https://github.com/patternfly/patternfly-react/pull/1669))
- **Popover:**
  - Updated Popover max width. We made maxWidth optional ([#2110](https://github.com/patternfly/patternfly-react/pull/2110))
  - Enabled highlighting and selecting text in popover ([#1757](https://github.com/patternfly/patternfly-react/pull/1757))
  - Handled on enter focusing when options are disabled ([#2025](https://github.com/patternfly/patternfly-react/pull/2025))
  - Changed PopoverPosition from a const to an enum. This allows users to specify their choice of a string or object property for the position property value on Popover component. Also adds a test that exercises this method to ensure it doesn't regress going forward ([#2113](https://github.com/patternfly/patternfly-react/pull/2113))
- **Select:**
  - Updated the SelectProps interface to avoid a type error when importing react-core into a TypeScript application. I also removed some unnecessary code in a couple of the demo's I followed recently. Copying the code as is was creating an error. I think they were safe deletions but worth double checking ([#2107](https://github.com/patternfly/patternfly-react/pull/2107))
  - Fixed ListGroupItem import ([#1867](https://github.com/patternfly/patternfly-react/pull/1867))
  - Added user personalized icon in Select component ([#1768](https://github.com/patternfly/patternfly-react/pull/1768))
### Charts [@patternfly/react-charts@3.6.4](https://www.npmjs.com/package/@patternfly/react-charts/v/3.6.4)
- Introduced Donut utilization chart and thresholds ([#2064](https://github.com/patternfly/patternfly-react/pull/2064))
- Added example styles ([#1889](https://github.com/patternfly/patternfly-react/pull/1889))
- Fixed chart font stack to use PatternFly core sans-serif font stack ([#1865](https://github.com/patternfly/patternfly-react/pull/1865))
- Refactored themes for bar chart default colors ([#2112](https://github.com/patternfly/patternfly-react/pull/2112))
- Added default for component props ([#2103](https://github.com/patternfly/patternfly-react/pull/2103))
### Docs
- Use frontmatter for what props to show in docs ([#2072](https://github.com/patternfly/patternfly-react/pull/2072))
- If you add new imports to your MDX file, rerun yarn develop which now clears the gatsby-mdx cache and lets you be on your merry way ([#2059](https://github.com/patternfly/patternfly-react/pull/2059))
- Hide inherited TypeScript props ([#1866](https://github.com/patternfly/patternfly-react/pull/1866))
- Use MDX for docs ([#1753](https://github.com/patternfly/patternfly-react/pull/1753))
- Reverted bodywrapper conversion to stateless-function ([#2161](https://github.com/patternfly/patternfly-react/pull/2161))
### TypeScript conversion
Packages released:
We are in the process of converting all components to TypeScript to provide better types for consumers. The following components have been converted:
- Alert ([#1978](https://github.com/patternfly/patternfly-react/pull/1978))
- Badge ([#2048](https://github.com/patternfly/patternfly-react/pull/2048))
- Breadcrumb ([#1723](https://github.com/patternfly/patternfly-react/pull/1723))
- Button ([#1903](https://github.com/patternfly/patternfly-react/pull/1903))
- Brand ([#1918](https://github.com/patternfly/patternfly-react/pull/1918))
- Card ([#1885](https://github.com/patternfly/patternfly-react/pull/1885))
- Charts ([#2081](https://github.com/patternfly/patternfly-react/pull/2081))
- Empty State ([#1917](https://github.com/patternfly/patternfly-react/pull/1917))
- Label ([#1896](https://github.com/patternfly/patternfly-react/pull/1896))
- List ([#1946](https://github.com/patternfly/patternfly-react/pull/1946))
- Login Page ([#1967](https://github.com/patternfly/patternfly-react/pull/1967))
- Modal ([#1942](https://github.com/patternfly/patternfly-react/pull/1942))
- Popover ([#2023](https://github.com/patternfly/patternfly-react/pull/2023))
- Radio ([#1945](https://github.com/patternfly/patternfly-react/pull/1945))
- Text ([#1907](https://github.com/patternfly/patternfly-react/pull/1907))

## 2019.01 release notes (2019-05-02)
We don't have notes for this release yet.
