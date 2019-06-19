@patternfly/react-core@3.34.2
@redallen redallen released this 14 days ago · 100 commits to master since this release

3.34.2 (2019-06-05)
This release is part of PatternFly 4 - RC2 - it contains the following improvements/fixes:

Components

About Modal: Provided a way to set the background using props (#1940)
Accordion: Added accordion component (#1511)
Background Image: Fixed background image spacing issue (#1923)
Card: Added card is-hoverable modifier prop (#1852)
Charts:
Introduced Donut utilization chart and thresholds (#2064)
Added example styles (#1889)
Fixed chart font stack to use PatternFly core sans-serif font stack (#1865)
Refactored themes for bar chart default colors (#2112)
Added default for component props (#2103)
TypeScript conversion (#2125)
Checkbox: Set checked value correctly(#1929)
Copy to Clipboard:
Fixed docs (#1821)
Changed doc text (#1823)
Removed textarea from clipboard copy (#1840)
Dropdown: Renamed toggle export (#1861)
Grid: Added missing props in d.ts (#1749)
Icons: Added font awesome brands icons(#1669)
Popover:
Updated Popover max width. We made maxWidth optional (#2110)
Enabled highlighting and selecting text in popover (#1757)
Handled on enter focusing when options are disabled (#2025)
Changed PopoverPosition from a const to an enum. This allows users to specify their choice of a string or object property for the position property value on Popover component. Also adds a test that exercises this method to ensure it doesn't regress going forward. (#2113)
Select:
Updated the SelectProps interface to avoid a type error when importing react-core into a TypeScript application. I also removed some unnecessary code in a couple of the demo's I followed recently. Copying the code as is was creating an error. I think they were safe deletions but worth double checking. (#2107)
Fixed ListGroupItem import (#1867)
Added user personalized icon in Select component (#1768)
TypeScript Conversions

Alert (#1978)
Badge (#2048)
Breadcrumb (#1723)
Button (#1903)
Brand (#1918)
Card (#1885)
Charts (#2081)
Empty State (#1917)
Label (#1896)
List (#1946)
Login Page (#1967)
Modal (#1942)
Popover (#2023)
Radio (#1945)
Text (#1907)
Docs:

Used frontmatter for what props to show in docs (#2072)
If you add new imports to your MDX file, rerun yarn develop which now clears the gatsby-mdx cache and lets you be on your merry way (#2059)
Hid inherited typescript props (#1866)
Used mxd for docs (#1753)
Reverted bodywrapper conversion to stateless-function (#2161)
