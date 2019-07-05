# PatternFly-React Albatross (2019-07-02)
These releases are part of the PatternFly 4 - Albatross milestone:
 - @patternfly/react-core@3.58.1
 - @patternfly/react-inline-edit-extension@2.9.12
 - @patternfly/react-table@2.13.43
 - @patternfly/react-topology@2.4.21
 - @patternfly/react-virtualized-extension@1.1.45
 - @patternfly/react-charts@4.4.7
 - @patternfly/react-styles@3.4.6
 - @patternfly/react-tokens@2.6.5

**Charts (@patternfly/react-charts@4.4.7):**
*   Added sparkline example and interpolation to area examples ([#2373](https://github.com/patternfly/patternfly-react/pull/2373))
*   Fixed themes for bar chart default colors ([#2112)](https://github.com/patternfly/patternfly-react/pull/2112)
*   DonutThreshold): No longer show static threshold donut tooltips by default.([#2270](https://github.com/patternfly/patternfly-react/pull/2270))
*   Added support for legends and grids ([#2324](https://github.com/patternfly/patternfly-react/pull/2324))

**Components (@patternfly/react-core@3.58.1):**
*   **About modal:** changed strapline element to paragraph ([#2376](https://github.com/patternfly/patternfly-react/pull/2376))
*   **Breadcrumb switcher:** Disabled autocomplete ([#2407](https://github.com/patternfly/patternfly-react/pull/2407))
*   **Card:** Add compacted card variation ([#2399](https://github.com/patternfly/patternfly-react/pull/2399))
*   **Checkbox:** Added 3rd state to checkbox controlled by consumer ([#2252](https://github.com/patternfly/patternfly-react/pull/2252))
*   **Chip group:** Added heading level prop to toolbar chip group label ([#2278](https://github.com/patternfly/patternfly-react/pull/2278))
*   **Data list:** Added DataListRow to imports ([#2353](https://github.com/patternfly/patternfly-react/pull/2353))
*   **Dropdown:** Automatically focused first dropdown item when DropdownMenu ([#2355](https://github.com/patternfly/patternfly-react/pull/2355))
*   **Expandable:** Added button type to the expandable component ([#2340](https://github.com/patternfly/patternfly-react/pull/2340))
*   **Label:** added TypeScript flag to the label docs ([#2343](https://github.com/patternfly/patternfly-react/pull/2343))
*   **Notification badge:** Added the notification badge component ([#2342)](https://github.com/patternfly/patternfly-react/pull/2342)
*   **Options menu:** Added disabled modifier to the toggle ([#2401](https://github.com/patternfly/patternfly-react/pull/2401))
*   **Page:** Added page section main nav type variant ([#2268](https://github.com/patternfly/patternfly-react/pull/2268))
*   **Radio**: Fixed warning from undefined starting params ([#2292](https://github.com/patternfly/patternfly-react/pull/2292))
*   **Form:**
    *   Updated text in form component ([#2352](https://github.com/patternfly/patternfly-react/pull/2352))
    *   Wrapped form label text in new element ([#2322](https://github.com/patternfly/patternfly-react/pull/2332))
*   **Grid:**
    *   Removed size props from {...props} ([#2404](https://github.com/patternfly/patternfly-react/pull/2404))
    *   Updated grid layout to support new 2xl breakpoint ([#2305](https://github.com/patternfly/patternfly-react/pull/2305))
*   **Tabs:**
    *   Fixed TypeScript errors and revert `TabContainer` to a component ([#2402](https://github.com/patternfly/patternfly-react/pull/2402))
    *   Remove comment from code ([#2351](https://github.com/patternfly/patternfly-react/pull/2351))
    *   Made variant prop optional ([#2348](https://github.com/patternfly/patternfly-react/pull/2348))

**TypeScript conversion**
*   Copy to clipboard ([#2131](https://github.com/patternfly/patternfly-react/pull/2131))
*   Progress ([#2307](https://github.com/patternfly/patternfly-react/pull/2307))
*   Select ([#2201](https://github.com/patternfly/patternfly-react/pull/2201))
*   Input group: ([#2220](https://github.com/patternfly/patternfly-react/pull/2220))


# PatternFly-React RC2.1 (2019-06-11)
These releases are part of PatternFly 4 - RC2.1:
- @patternfly/react-charts@4.1.5
- @patternfly/react-core@3.38.1
- @patternfly/react-inline-edit-extension@2.7.7
- @patternfly/react-styles@3.3.3
- @patternfly/react-table@2.11.1
- @patternfly/react-tokens@2.5.5

**Breaking Changes**

**Charts (@patternfly/react-charts@4.1.5):**
*   Major bump react-charts ([#2143](https://github.com/patternfly/patternfly-react/pull/2143))
*   Changed default Chart padding property to show axis
*   Refactored ChartTheme colors and utils for donut utilization theme
*   ChartLegend now defaults to be responsive
*   Aligned label vertically and added donutHeight/Width defaults ([#2193](https://github.com/patternfly/patternfly-react/pull/2193))
*   Added examples on how to use VictoryZoomContainer. ([#1879](https://github.com/patternfly/patternfly-react/pull/1879))
*   Apply defaults to custom legend ([#2194](https://github.com/patternfly/patternfly-react/issues/2194))
*   Chart & ChartStack to use ReactNode as children type ([#2155](https://github.com/patternfly/patternfly-react/pull/2155))
*   Remove ChartThemeDefinition export from index.ts ([#2149](https://github.com/patternfly/patternfly-react/pull/2149))

**Components (@patternfly/react-core@3.38.1):**
*   **About modal:** Support isOpen initially set true in about modal. This ensures the about modal container exists on initial load if `isOpen` is passed `true` with children contents initially **(**[#2153](https://github.com/patternfly/patternfly-react/pull/2153))
*   **Navigation:**  On NavItems, Maintain className passed to custom NavItems. Keeps classNames set on the child of a custom NavItem. ([#2134](https://github.com/patternfly/patternfly-react/pull/2134))
*   **Pagination:** When empty array is sent to pagination now no per page is visible. It is now possible with Per page option to hide by passing empty array of per page options. ([#2175](https://github.com/patternfly/patternfly-react/pull/2175))
*   **Select:** Added keyboard interaction to typeahead variants, other variants remained unchanged. Enter, with select closed, toggles open the menu. Focus should now remains on input. Arrow up and down navigates the options with a focus styling. Enter, with select opened, selects the highlighted item. ([#2013](https://github.com/patternfly/patternfly-react/pull/2013))
*   **Tabs:** fixed tabs ref proptype ([#2158](https://github.com/patternfly/patternfly-react/pull/2158))

**Table (@patternfly/react-table@2.11.1):**
*   Added React-Virtualized PF4 tables ([#2011](https://github.com/patternfly/patternfly-react/pull/2011))
*   Exported RowWrapper implementation. When using react table in TypeScript project there was no way to import `RowWrapper` implementation. This PR fixed this problem by exporting `RowWrapperProps` as interface and `RowWrapper` as implementation. ([#2118](https://github.com/patternfly/patternfly-react/pull/2118))
*   Some props of IRow should not required Makes following props of `IRow` to optional isOpen parent props ([#2196](https://github.com/patternfly/patternfly-react/pull/2196))
*   Fixed error Unknown event handler property `onCollapse`. Removed `rows` and `onCollapse` from `..props `The recently collapse changes added some unknown props of table. Just remove it from <code>..props </code>[(#2195](https://github.com/patternfly/patternfly-react/pull/2195))
*   Added support for .pf-m-grid-2xl breakpoint. Added breakpoint to list of available breakpoints and updated snapshot. ([#2206](https://github.com/patternfly/patternfly-react/pull/2206))

**Topology (@patternfly/react-topology):**
*   Added @patternfly/react-topology package  ([#2170](https://github.com/patternfly/patternfly-react/pull/2170))


**Infrastructure:**
*   **Build:**
    *   perf(wooden-tree): major bump wooden-tree ([#2058](https://github.com/patternfly/patternfly-react/pull/2058))
    *   fixed esm output and convert react-virtualized-extension to TS ([#2190](https://github.com/patternfly/patternfly-react/pull/2190))
    *   Bump @patternfly/patternfly versions to 2.12.5 ([#2184](https://github.com/patternfly/patternfly-react/pull/2184))
*   **Chore:**
    *   Added "shx" package to root dev dependencies since it is used in the root npm scripts ([#2128](https://github.com/patternfly/patternfly-react/pull/2128))
    *   fixed travis cache config. Fixed build on master by caching react-virtualized-extension. Also, cached react-topology which is coming soon. [(#2186](https://github.com/patternfly/patternfly-react/pull/2186))
    *   fix stale config ([#2123](https://github.com/patternfly/patternfly-react/pull/2123))
*   **Stalebot:**
    *   fixed stalebot config to include issues. [This bot](https://github.com/probot/stale) should help us close nearly half of our current issues.  ([#2123](https://github.com/patternfly/patternfly-react/pull/2123))
    *   update stale bot configuration and package sideeffects ([#2177](https://github.com/patternfly/patternfly-react/pull/2177))
*   **Wrapper:** reverted bodywrapper conversion to stateless-function ([#2161](https://github.com/patternfly/patternfly-react/pull/2161))

**TypeScript conversion**
*   Backdrop ([#2105](https://github.com/patternfly/patternfly-react/pull/2105))
*   Background image ([#2070](https://github.com/patternfly/patternfly-react/pull/2070))
*   Options menu ([#2002](https://github.com/patternfly/patternfly-react/pull/2002))
*   Text input ([#1914](https://github.com/patternfly/patternfly-react/pull/1914))

**React styles**
*   Changed all the React css imports and added types for them. Instead of using a babel plugin to generate the JS at compile time for our CSS-in-JS solution, we statically generated it beforehand in react-styles. ([#2085](https://github.com/patternfly/patternfly-react/pull/2085))
*   chore(react-styles): bump jsdom ([#2080](https://github.com/patternfly/patternfly-react/pull/2080))
*   added sideeffects to react-styles ([#2207](https://github.com/patternfly/patternfly-react/pull/2207))

# PatternFly-React RC2 (2019-06-05)
These releases are part of PatternFly 4 - RC2:
- @patternfly/react-charts@3.6.4
- @patternfly/react-core@3.34.2
- @patternfly/react-inline-edit-extension@2.5.2
- @patternfly/react-styles@3.2.3
- @patternfly/react-table@2.9.2
- @patternfly/react-tokens@2.5.3

RC2 contains the following improvements/fixes:

## Components
### About Modal
- Provided a way to set the background using props (#1940)
### Accordion
- Added accordion component (#1511)
### Background Image
- Fixed background image spacing issue (#1923)
### Card
- Added card is-hoverable modifier prop (#1852)
### Checkbox
- Set checked value correctly (#1929)
### Copy to Clipboard:
- Fixed docs (#1821)
- Changed doc text (#1823)
- Removed textarea from clipboard copy (#1840)
### Dropdown
- Renamed toggle export (#1861)
### Grid
- Added missing props in d.ts (#1749)
### Icons
- Added font awesome brands icons(#1669)
### Popover:
- Updated Popover max width. We made maxWidth optional (#2110)
- Enabled highlighting and selecting text in popover (#1757)
- Handled on enter focusing when options are disabled (#2025)
- Changed PopoverPosition from a const to an enum. This allows users to specify their choice of a string or object property for the position property value on Popover component. Also adds a test that exercises this method to ensure it doesn't regress going forward. (#2113)
### Select
- Updated the SelectProps interface to avoid a type error when importing react-core into a TypeScript application. I also removed some unnecessary code in a couple of the demo's I followed recently. Copying the code as is was creating an error. I think they were safe deletions but worth double checking. (#2107)
- Fixed ListGroupItem import (#1867)
- Added user personalized icon in Select component (#1768)
## Charts
- Introduced Donut utilization chart and thresholds (#2064)
- Added example styles (#1889)
- Fixed chart font stack to use PatternFly core sans-serif font stack (#1865)
- Refactored themes for bar chart default colors (#2112)
- Added default for component props (#2103)

## Docs
- Use frontmatter for what props to show in docs (#2072)
- If you add new imports to your MDX file, rerun yarn develop which now clears the gatsby-mdx cache and lets you be on your merry way (#2059)
- Hide inherited TypeScript props (#1866)
- Use mdx for docs (#1753)
- Reverted bodywrapper conversion to stateless-function (#2161)

## TypeScript Conversions
We are in the process of converting all components to TypeScript to provide better types to consumers. The following components have been converted:
- Alert (#1978)
- Badge (#2048)
- Breadcrumb (#1723)
- Button (#1903)
- Brand (#1918)
- Card (#1885)
- Charts (#2081)
- Empty State (#1917)
- Label (#1896)
- List (#1946)
- Login Page (#1967)
- Modal (#1942)
- Popover (#2023)
- Radio (#1945)
- Text (#1907)
