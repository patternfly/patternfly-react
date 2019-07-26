
# 2019.04 release notes (2019-07-24)

These releases are part of the PatternFly 2019.04 milestone:
- @patternfly/react-charts@4.7.1
- @patternfly/react-core@3.75.2
- @patternfly/react-styles@3.5.7
- @patternfly/react-table@2.14.23
- @patternfly/react-tokens@2.6.13
- @patternfly/react-topology@2.6.20
- @patternfly/react-icons@3.10.14
- @patternfly/react-virtualized-extension@1.1.82
- @patternfly/react-inline-edit-extension@2.9.49

**About modal**: AboutModal and Modal both now trap focus in the browser. ([#2428](https://github.com/patternfly/patternfly-react/pull/2428))

**Accordion**: Added prop to heading level of parent component ([#2290](https://github.com/patternfly/patternfly-react/pull/2290))

**Application launcher**: Allowed custom icon for application launcher toggle ([#2492](https://github.com/patternfly/patternfly-react/pull/2492))
    
**Badges**
-   Temporarily disabled problematic badges ([#2530](https://github.com/patternfly/patternfly-react/pull/2530))    
-   Added space between badges in the examples ([#2556](https://github.com/patternfly/patternfly-react/pull/2556))
    
**Breadcrumb switcher:** Fixed Autocomplete camelCase ([#2457](https://github.com/patternfly/patternfly-react/pull/2457))

**Build**
-   We hashed the folder name before we recursively call hashDir again.  ([#2377)](https://github.com/patternfly/patternfly-react/pull/2377)    
-   Added PR comment on publish ([#2433](https://github.com/patternfly/patternfly-react/pull/2433))    
-   Added check for breaking change to lint ([#2462](https://github.com/patternfly/patternfly-react/pull/2462))   
-   Made a few fixes were necessary for Windows support. ([#2471](https://github.com/patternfly/patternfly-react/pull/2471))
    
**Charts**
-   Fixed runtime errors related to theme padding ([#2430](https://github.com/patternfly/patternfly-react/pull/2430))    
-   Added charts to react-integration tests ([#2354](https://github.com/patternfly/patternfly-react/pull/2354))    
-   Updated chart theme to use pf-core variables ([#2439](https://github.com/patternfly/patternfly-react/pull/2439))    
-   Removed invalid pf-core var ([#2463](https://github.com/patternfly/patternfly-react/pull/2463))    
-   Adjusted pf-core vars & added tooltip examples ([#2497](https://github.com/patternfly/patternfly-react/pull/2497))    
-   Updated pf-core vars ([#2480](https://github.com/patternfly/patternfly-react/pull/2480))   
-   Provided an accessible title and description ([#2500](https://github.com/patternfly/patternfly-react/pull/2500))    
-   Added bottom-left legend position ([#2442](https://github.com/patternfly/patternfly-react/pull/2442))    
-   Tweaked aria title for area chart ([#2510](https://github.com/patternfly/patternfly-react/pull/2510))    
-   Replaced prop `titleComponent` by `subTitleComponent` on donut charts ([#2488](https://github.com/patternfly/patternfly-react/pull/2488))
-   Added individual padding vars for donut charts ([#2529](https://github.com/patternfly/patternfly-react/pull/2529))  
-   Added new mutil-color theme for ordered charts ([#2552](https://github.com/patternfly/patternfly-react/pull/2552))    
-   Added fixed point notation into percentage donut charts ([#2375](https://github.com/patternfly/patternfly-react/pull/2375))
-   Used vars to enable Red Hat fonts ([#2584](https://github.com/patternfly/patternfly-react/pull/2584))
    
**Chore**
-   Updated release notes for milestone  ([#2448](https://github.com/patternfly/patternfly-react/pull/2448)) 
-   Removed tippy-react dependency ([#2505](https://github.com/patternfly/patternfly-react/pull/2505))
-   Updated react-docs to use Red Hat font ([#2563](https://github.com/patternfly/patternfly-react/pull/2563))
  
**Datalist:** Added hidden and visible breakpoints ([#2251](https://github.com/patternfly/patternfly-react/pull/2251))

**Docs:** Updated link to react-tokens page in the readme ([#2453](https://github.com/patternfly/patternfly-react/pull/2453))

**Dropdown:** Provided option to not autofocus on first item ([#2473](https://github.com/patternfly/patternfly-react/pull/2473))

**Empty state:** Updated EmptyStateBody to use div instead of p ([#2499](https://github.com/patternfly/patternfly-react/pull/2499))

**Experimental features:** Added POC for experimental button and badge ([#2363](https://github.com/patternfly/patternfly-react/pull/2363))

**Gallery:** Converted gallery to typescript ([#2432](https://github.com/patternfly/patternfly-react/pull/2432))

**Login page:** Removed ariaLabel from checkbox ([#2455](https://github.com/patternfly/patternfly-react/pull/2455))

**Modal:** Modal now traps screen reader focus ([#2406](https://github.com/patternfly/patternfly-react/pull/2406))

**Options menu:** Updated examples to trigger select on the whole item ([#2513](https://github.com/patternfly/patternfly-react/pull/2513))

**Pagination**
-   Dropdown closes on click outside of menu area ([#2235](https://github.com/patternfly/patternfly-react/pull/2235))  
-   Added ability to allow users to enter numbers into the input field ([#2417](https://github.com/patternfly/patternfly-react/pull/2417))
    
**Select**
-   Removed ariaLabel from grouped checkbox select ([#2456](https://github.com/patternfly/patternfly-react/pull/2456))  
-   Added optional display via children to option ([#2419](https://github.com/patternfly/patternfly-react/pull/2419)) 
-   Updated typeahead filtered list when children change ([#2518](https://github.com/patternfly/patternfly-react/pull/2518))
    
**Styles:** Added pickProperties to react-styles utils exports ([#2481](https://github.com/patternfly/patternfly-react/pull/2481))

**Switch:** Added OUIA compatibility to Switch ([#2304](https://github.com/patternfly/patternfly-react/pull/2304))

**Table**
-   Checked empty array in areAllRowsSelected ([#2527](https://github.com/patternfly/patternfly-react/pull/2527))
-   Added exports for compoundExpand ([#2554](https://github.com/patternfly/patternfly-react/pull/2554))
    
**Tabs**
-   Allowed eventKey to accept a string ([#2493](https://github.com/patternfly/patternfly-react/pull/2493)) 
-   Implemented overflow styles for secondary tabs ([#2512](https://github.com/patternfly/patternfly-react/pull/2512))

**Tooltip:** Added support for aria prop from Tippy library ([#2539](https://github.com/patternfly/patternfly-react/pull/2539))

**Typescript**
-   Bullseye ([#2427](https://github.com/patternfly/patternfly-react/pull/2427)) 
- Gallery ([#2432](https://github.com/patternfly/patternfly-react/pull/2432))
-   Grid ([#2443](https://github.com/patternfly/patternfly-react/pull/2443))    
-   Level ([#2450](https://github.com/patternfly/patternfly-react/pull/2450))
-   Pagination ([#2256](https://github.com/patternfly/patternfly-react/pull/2256))  
-   Split ([#2466](https://github.com/patternfly/patternfly-react/pull/2466))
-   Stack ([#2412](https://github.com/patternfly/patternfly-react/pull/2412))
-   Switch ([#2311](https://github.com/patternfly/patternfly-react/pull/2311))
-   Toolbar ([#2475](https://github.com/patternfly/patternfly-react/pull/2475))
    
**Unit tests**: Fixed keyHandler tests in util.test.js -- tests are now passing. ([#2489](https://github.com/patternfly/patternfly-react/pull/2489))

# 2019.03 release notes - (2019-07-02)  
 - [@patternfly/react-core@3.58.1](https://www.npmjs.com/package/@patternfly/react-core)  
 - [@patternfly/react-inline-edit-extension@2.9.12](https://www.npmjs.com/package/@patternfly/react-inline-edit-extension)  
 - [@patternfly/react-table@2.13.43](https://www.npmjs.com/package/@patternfly/react-table)  
 - [@patternfly/react-topology@2.4.21](https://www.npmjs.com/package/@patternfly/react-topology)  
 - [@patternfly/react-virtualized-extension@1.1.45](https://www.npmjs.com/package/@patternfly/react-virtualized-extension)  
 - [@patternfly/react-charts@4.4.7](https://www.npmjs.com/package/@patternfly/react-charts)  
 - [@patternfly/react-styles@3.4.6](https://www.npmjs.com/package/@patternfly/react-styles)  
 - [@patternfly/react-tokens@2.6.5](https://www.npmjs.com/package/@patternfly/react-tokens)  
## Charts (@patternfly/react-charts@4.4.7)  
* Added sparkline example and interpolation to area examples ([#2373](https://github.com/patternfly/patternfly-react/pull/2373))  
* Fixed themes for bar chart default colors ([#2112)](https://github.com/patternfly/patternfly-react/pull/2112)  
* DonutThreshold: No longer show static threshold donut tooltips by default ([#2270](https://github.com/patternfly/patternfly-react/pull/2270))  
* Added support for legends and grids ([#2324](https://github.com/patternfly/patternfly-react/pull/2324))  
## Components (@patternfly/react-core@3.58.1)  
### About modal  
* Changed strapline element to paragraph ([#2376](https://github.com/patternfly/patternfly-react/pull/2376))  
### Breadcrumb switcher  
* Disabled autocomplete ([#2407](https://github.com/patternfly/patternfly-react/pull/2407))  
### Card  
* Add compacted card variation ([#2399](https://github.com/patternfly/patternfly-react/pull/2399))  
### Checkbox  
* Added 3rd state to checkbox controlled by consumer ([#2252](https://github.com/patternfly/patternfly-react/pull/2252))  
### Chip group  
* Added heading level prop to toolbar chip group label ([#2278](https://github.com/patternfly/patternfly-react/pull/2278))  
### Data list  
* Added DataListRow to imports ([#2353](https://github.com/patternfly/patternfly-react/pull/2353))  
### Dropdown  
* Automatically focused first dropdown item when DropdownMenu ([#2355](https://github.com/patternfly/patternfly-react/pull/2355))  
### Expandable  
* Added button type to the expandable component ([#2340](https://github.com/patternfly/patternfly-react/pull/2340))  
### Label  
* added TypeScript flag to the label docs ([#2343](https://github.com/patternfly/patternfly-react/pull/2343))  
### Notification badge  
* Added the notification badge component ([#2342)](https://github.com/patternfly/patternfly-react/pull/2342)  
### Options menu  
* Added disabled modifier to the toggle ([#2401](https://github.com/patternfly/patternfly-react/pull/2401))  
### Page  
* Added page section main nav type variant ([#2268](https://github.com/patternfly/patternfly-react/pull/2268))  
### Radio  
* Fixed warning from undefined starting params ([#2292](https://github.com/patternfly/patternfly-react/pull/2292))  
### Form  
* Updated text in form component ([#2352](https://github.com/patternfly/patternfly-react/pull/2352))  
* Wrapped form label text in new element ([#2322](https://github.com/patternfly/patternfly-react/pull/2332))  
### Grid  
* Removed size props from {...props} ([#2404](https://github.com/patternfly/patternfly-react/pull/2404))  
* Updated grid layout to support new 2xl breakpoint ([#2305](https://github.com/patternfly/patternfly-react/pull/2305))  
### Tabs  
* Fixed TypeScript errors and revert `TabContainer` to a component ([#2402](https://github.com/patternfly/patternfly-react/pull/2402))  
* Remove comment from code ([#2351](https://github.com/patternfly/patternfly-react/pull/2351))  
* Made variant prop optional ([#2348](https://github.com/patternfly/patternfly-react/pull/2348))  
## TypeScript conversion  
* Copy to clipboard ([#2131](https://github.com/patternfly/patternfly-react/pull/2131))  
* Progress ([#2307](https://github.com/patternfly/patternfly-react/pull/2307))  
* Select ([#2201](https://github.com/patternfly/patternfly-react/pull/2201))  
* Input group ([#2220](https://github.com/patternfly/patternfly-react/pull/2220))  
  
# 2019.02 release notes - (2019-06-11)  
 - [@patternfly/react-charts@4.1.5](https://www.npmjs.com/package/@patternfly/react-charts)  
 - [@patternfly/react-core@3.38.1](https://www.npmjs.com/package/@patternfly/react-core)  
 - [@patternfly/react-inline-edit-extension@2.7.7](https://www.npmjs.com/package/@patternfly/react-inline-edit-extension)  
 - [@patternfly/react-styles@3.3.3](https://www.npmjs.com/package/@patternfly/react-styles)  
 - [@patternfly/react-table@2.11.1](https://www.npmjs.com/package/@patternfly/react-table)  
 - [@patternfly/react-tokens@2.5.5](https://www.npmjs.com/package/@patternfly/react-tokens)  
## Charts (@patternfly/react-charts@4.1.5)  
* Major bump react-charts ([#2143](https://github.com/patternfly/patternfly-react/pull/2143))  
* Changed default Chart padding property to show axis  
* Refactored ChartTheme colors and utils for donut utilization theme  
* ChartLegend now defaults to be responsive  
* Aligned label vertically and added donutHeight/Width defaults ([#2193](https://github.com/patternfly/patternfly-react/pull/2193))  
* Added examples on how to use VictoryZoomContainer ([#1879](https://github.com/patternfly/patternfly-react/pull/1879))  
* Apply defaults to custom legend ([#2194](https://github.com/patternfly/patternfly-react/issues/2194))  
* Chart & ChartStack to use ReactNode as children type ([#2155](https://github.com/patternfly/patternfly-react/pull/2155))  
* Remove ChartThemeDefinition export from index.ts ([#2149](https://github.com/patternfly/patternfly-react/pull/2149))  
## Components (@patternfly/react-core@3.38.1)  
### About modal  
* Support isOpen initially set true in about modal. This ensures the about modal container exists on initial load if `isOpen` is passed `true` with children contents initially ([#2153](https://github.com/patternfly/patternfly-react/pull/2153))  
### Navigation  
* On NavItems, Maintain className passed to custom NavItems. Keeps classNames set on the child of a custom NavItem ([#2134](https://github.com/patternfly/patternfly-react/pull/2134))  
### Pagination  
* When empty array is sent to pagination now no per page is visible. It is now possible with Per page option to hide by passing empty array of per page options ([#2175](https://github.com/patternfly/patternfly-react/pull/2175))  
### Select  
* Added keyboard interaction to typeahead variants, other variants remained unchanged. Enter, with select closed, toggles open the menu. Focus should now remains on input. Arrow up and down navigates the options with a focus styling. Enter, with select opened, selects the highlighted item ([#2013](https://github.com/patternfly/patternfly-react/pull/2013))  
### Tabs  
* Fixed tabs ref proptype ([#2158](https://github.com/patternfly/patternfly-react/pull/2158))  
## Table (@patternfly/react-table@2.11.1)  
* Added React-Virtualized PF4 tables ([#2011](https://github.com/patternfly/patternfly-react/pull/2011))  
* Exported RowWrapper implementation ([#2118](https://github.com/patternfly/patternfly-react/pull/2118))  
* Some props of IRow should not required Makes following props of `IRow` to optional isOpen parent props ([#2196](https://github.com/patternfly/patternfly-react/pull/2196))  
* Fixed error Unknown event handler property `onCollapse`. Removed `rows` and `onCollapse` from `...props` ([#2195](https://github.com/patternfly/patternfly-react/pull/2195))  
* Added support for .pf-m-grid-2xl breakpoint. Added breakpoint to list of available breakpoints and updated snapshot ([#2206](https://github.com/patternfly/patternfly-react/pull/2206))  
* Reverted bodywrapper conversion to stateless-function ([#2161](https://github.com/patternfly/patternfly-react/pull/2161))  
## Topology (@patternfly/react-topology)  
* Added @patternfly/react-topology package ([#2170](https://github.com/patternfly/patternfly-react/pull/2170))  
* Fixed esm output and converted react-virtualized-extension to TS ([#2190](https://github.com/patternfly/patternfly-react/pull/2190))  
## Styles (@patternfly/react-styles@3.3.3)  
* Changed all the React css imports and added types for them. Instead of using a babel plugin to generate the JS at compile time for our CSS-in-JS solution, we statically generate it beforehand in react-styles ([#2085](https://github.com/patternfly/patternfly-react/pull/2085))  
* Bumped jsdom ([#2080](https://github.com/patternfly/patternfly-react/pull/2080))  
* Added sideeffects to react-styles ([#2207](https://github.com/patternfly/patternfly-react/pull/2207))  
## TypeScript conversions  
* Backdrop ([#2105](https://github.com/patternfly/patternfly-react/pull/2105))  
* Background image ([#2070](https://github.com/patternfly/patternfly-react/pull/2070))  
* Options menu ([#2002](https://github.com/patternfly/patternfly-react/pull/2002))  
* Text input ([#1914](https://github.com/patternfly/patternfly-react/pull/1914))  
  
# 2019.01 release notes - RC2 (2019-06-05)  
 - [@patternfly/react-charts@3.6.4](https://www.npmjs.com/package/@patternfly/react-charts)  
 - [@patternfly/react-core@3.34.2](https://www.npmjs.com/package/@patternfly/react-core)  
 - [@patternfly/react-inline-edit-extension@2.5.2](https://www.npmjs.com/package/@patternfly/react-inline-edit-extension)  
 - [@patternfly/react-styles@3.2.3](https://www.npmjs.com/package/@patternfly/react-styles)  
 - [@patternfly/react-table@2.9.2](https://www.npmjs.com/package/@patternfly/react-table)  
 - [@patternfly/react-tokens@2.5.3](https://www.npmjs.com/package/@patternfly/react-tokens)  
## Components  
### About Modal  
* Provided a way to set the background using props ([#1940](https://github.com/patternfly/patternfly-react/pull/1940))  
### Accordion  
* Added accordion component ([#1511](https://github.com/patternfly/patternfly-react/pull/1511))  
### Background Image  
* Fixed background image spacing issue ([#1923](https://github.com/patternfly/patternfly-react/pull/1923))  
### Card  
* Added card is-hoverable modifier prop ([#1852](https://github.com/patternfly/patternfly-react/pull/1852))  
### Checkbox  
* Set checked value correctly ([#1929](https://github.com/patternfly/patternfly-react/pull/1929))  
### Copy to Clipboard  
* Fixed docs ([#1821](https://github.com/patternfly/patternfly-react/pull/1821))  
* Changed doc text ([#1823](https://github.com/patternfly/patternfly-react/pull/1823))  
* Removed textarea from clipboard copy ([#1840](https://github.com/patternfly/patternfly-react/pull/1840))  
### Dropdown  
* Renamed toggle export ([#1861](https://github.com/patternfly/patternfly-react/pull/1861))  
### Grid  
* Added missing props in d.ts ([#1749](https://github.com/patternfly/patternfly-react/pull/1749))  
### Icons  
* Added font awesome brands icons([#1669](https://github.com/patternfly/patternfly-react/pull/1669))  
### Popover  
* Updated Popover max width. We made maxWidth optional ([#2110](https://github.com/patternfly/patternfly-react/pull/2110))  
* Enabled highlighting and selecting text in popover ([#1757](https://github.com/patternfly/patternfly-react/pull/1757))  
* Handled on enter focusing when options are disabled ([#2025](https://github.com/patternfly/patternfly-react/pull/2025))  
* Changed PopoverPosition from a const to an enum. This allows users to specify their choice of a string or object property for the position property value on Popover component. Also adds a test that exercises this method to ensure it doesn't regress going forward ([#2113](https://github.com/patternfly/patternfly-react/pull/2113))  
### Select  
* Updated the SelectProps interface to avoid a type error when importing react-core into a TypeScript application. I also removed some unnecessary code in a couple of the demo's I followed recently. Copying the code as is was creating an error. I think they were safe deletions but worth double checking ([#2107](https://github.com/patternfly/patternfly-react/pull/2107))  
* Fixed ListGroupItem import ([#1867](https://github.com/patternfly/patternfly-react/pull/1867))  
* Added user personalized icon in Select component ([#1768](https://github.com/patternfly/patternfly-react/pull/1768))  
## Charts  
* Introduced Donut utilization chart and thresholds ([#2064](https://github.com/patternfly/patternfly-react/pull/2064))  
* Added example styles ([#1889](https://github.com/patternfly/patternfly-react/pull/1889))  
* Fixed chart font stack to use PatternFly core sans-serif font stack ([#1865](https://github.com/patternfly/patternfly-react/pull/1865))  
* Refactored themes for bar chart default colors ([#2112](https://github.com/patternfly/patternfly-react/pull/2112))  
* Added default for component props ([#2103](https://github.com/patternfly/patternfly-react/pull/2103))  
## Docs  
* Use frontmatter for what props to show in docs ([#2072](https://github.com/patternfly/patternfly-react/pull/2072))  
* If you add new imports to your MDX file, rerun yarn develop which now clears the gatsby-mdx cache and lets you be on your merry way ([#2059](https://github.com/patternfly/patternfly-react/pull/2059))  
* Hide inherited TypeScript props ([#1866](https://github.com/patternfly/patternfly-react/pull/1866))  
* Use MDX for docs ([#1753](https://github.com/patternfly/patternfly-react/pull/1753))  
* Reverted bodywrapper conversion to stateless-function ([#2161](https://github.com/patternfly/patternfly-react/pull/2161))  
## TypeScript Conversions  
We are in the process of converting all components to TypeScript to provide better types for consumers. The following components have been converted:  
* Alert ([#1978](https://github.com/patternfly/patternfly-react/pull/1978))  
* Badge ([#2048](https://github.com/patternfly/patternfly-react/pull/2048))  
* Breadcrumb ([#1723](https://github.com/patternfly/patternfly-react/pull/1723))  
* Button ([#1903](https://github.com/patternfly/patternfly-react/pull/1903))  
* Brand ([#1918](https://github.com/patternfly/patternfly-react/pull/1918))  
* Card ([#1885](https://github.com/patternfly/patternfly-react/pull/1885))  
* Charts ([#2081](https://github.com/patternfly/patternfly-react/pull/2081))  
* Empty State ([#1917](https://github.com/patternfly/patternfly-react/pull/1917))  
* Label ([#1896](https://github.com/patternfly/patternfly-react/pull/1896))  
* List ([#1946](https://github.com/patternfly/patternfly-react/pull/1946))  
* Login Page ([#1967](https://github.com/patternfly/patternfly-react/pull/1967))  
* Modal ([#1942](https://github.com/patternfly/patternfly-react/pull/1942))  
* Popover ([#2023](https://github.com/patternfly/patternfly-react/pull/2023))  
* Radio ([#1945](https://github.com/patternfly/patternfly-react/pull/1945))  
* Text ([#1907](https://github.com/patternfly/patternfly-react/pull/1907))
