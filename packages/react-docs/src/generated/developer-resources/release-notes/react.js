import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Release notes",
  "section": "developer-resources",
  "source": "react",
  "slug": "/developer-resources/release-notes/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-docs/RELEASE-NOTES.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"2022.07-release-notes-2022-06-02","size":"h2","className":"ws-title ws-h2"}}>
      {`2022.07 release notes (2022-06-02)`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-catalog-view-extension/v/4.72.3"}}>
          {`@patternfly/react-catalog-view-extension@4.72.3`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-charts/v/6.74.3"}}>
          {`@patternfly/react-charts@6.74.3`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-code-editor/v/4.62.3"}}>
          {`@patternfly/react-code-editor@4.62.3`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-core/v/4.221.3"}}>
          {`@patternfly/react-core@4.221.3`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-icons/v/4.72.3"}}>
          {`@patternfly/react-icons@4.72.3`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-inline-edit-extension/v/4.66.3"}}>
          {`@patternfly/react-inline-edit-extension@4.66.3`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-log-viewer/v/4.66.3"}}>
          {`@patternfly/react-log-viewer@4.66.3`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-styles/v/4.71.3"}}>
          {`@patternfly/react-styles@4.71.3`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-table/v/4.90.3"}}>
          {`@patternfly/react-table@4.90.3`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-tokens/v/4.73.3"}}>
          {`@patternfly/react-tokens@4.73.3`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-topology/v/4.68.3"}}>
          {`@patternfly/react-topology@4.68.3`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-virtualized-extension/v/4.68.3"}}>
          {`@patternfly/react-virtualized-extension@4.68.3`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"components","size":"h3","className":"ws-title ws-h3"}}>
      {`Components`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Application launcher:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Exposed `}
            <code {...{"className":"ws-code"}}>
              {`menuAppendTo`}
            </code>
            {` in prop docs (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7435"}}>
              {`#7435`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Banner:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added screen reader text (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7377"}}>
              {`#7377`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Chip:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added custom `}
            <code {...{"className":"ws-code"}}>
              {`maxWidth`}
            </code>
            {` prop (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7387"}}>
              {`#7387`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Code editor:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Enabled external updating of editor value on file upload (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7450"}}>
              {`#7450`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Context selector:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed so popper menu flips correctly (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7434"}}>
              {`#7434`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Data list:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Improved a11y for selectable data list items (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7474"}}>
              {`#7474`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Dropdown:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Converted examples to TypeScript (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7388"}}>
              {`#7388`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed so popper menu flips correctly (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7434"}}>
              {`#7434`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Exposed `}
            <code {...{"className":"ws-code"}}>
              {`menuAppendTo`}
            </code>
            {` in prop docs (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7435"}}>
              {`#7435`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Expandable section:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added example with custom component (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7464"}}>
              {`#7464`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`File upload:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Forwarded more props to the text area (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7401"}}>
              {`#7401`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Helper text:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added screen reader text for dynamic variant (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7426"}}>
              {`#7426`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Menu:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added support for checkbox menu (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7368"}}>
              {`#7368`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated `}
            <code {...{"className":"ws-code"}}>
              {`appendTo`}
            </code>
            {` in demos (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7417"}}>
              {`#7417`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Modal:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed tooltip visibility on modal open (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7411"}}>
              {`#7411`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Options menu:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Exposed `}
            <code {...{"className":"ws-code"}}>
              {`menuAppendTo`}
            </code>
            {` in prop docs (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7435"}}>
              {`#7435`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Popper:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added mouse events for popper content (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7399"}}>
              {`#7399`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Search input:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated to use panel instead of card in composable advanced search demo (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7431"}}>
              {`#7431`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated to use text input group instead native HTML elements (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7414"}}>
              {`#7414`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Select:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated to allow enter to create when there is a single option (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7444"}}>
              {`#7444`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed so aria-describedby is added properly (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7456"}}>
              {`#7456`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed so popper menu flips correctly (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7434"}}>
              {`#7434`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Exposed `}
            <code {...{"className":"ws-code"}}>
              {`menuAppendTo`}
            </code>
            {` in prop docs (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7435"}}>
              {`#7435`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Slider:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added support for aria-labelledby ad aria-describedby (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7408"}}>
              {`#7408`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated to add support for slider with no linear data (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7463"}}>
              {`#7463`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Switch:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed uncontrolled examples (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7418"}}>
              {`#7418`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed so `}
            <code {...{"className":"ws-code"}}>
              {`isReversed`}
            </code>
            {` variant supports check icon (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7333"}}>
              {`#7333`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Text area:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Used correct type for text area ref (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7397"}}>
              {`#7397`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"charts","size":"h3","className":"ws-title ws-h3"}}>
      {`Charts`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Added `}
        <code {...{"className":"ws-code"}}>
          {`@public`}
        </code>
        {` and `}
        <code {...{"className":"ws-code"}}>
          {`@private`}
        </code>
        {` annotations (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7413"}}>
          {`#7413`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"react-tokens","size":"h3","className":"ws-title ws-h3"}}>
      {`React tokens`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Excluded dark theme blocks (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7470"}}>
          {`#7470`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"table","size":"h3","className":"ws-title ws-h3"}}>
      {`Table`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Added compound expandable fullscreen demo (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7366"}}>
          {`#7366`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Added full screen demo for compact variant (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7338"}}>
          {`#7338`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Added full screen demo for error state (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7443"}}>
          {`#7443`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Added full screen empty state demo (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7371"}}>
          {`#7371`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Added full screen loading state demo (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7370"}}>
          {`#7370`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Added full screen demo for sticky first column (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7451"}}>
          {`#7451`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Improved a11y for selectable table rows (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7447"}}>
          {`#7447`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Removed duplicate import from md file (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7442"}}>
          {`#7442`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Updated sortable demo to align with core (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7292"}}>
          {`#7292`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"topology","size":"h3","className":"ws-title ws-h3"}}>
      {`Topology`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Added node scaling on hover at low details scale level (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7437"}}>
          {`#7437`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"other","size":"h3","className":"ws-title ws-h3"}}>
      {`Other`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Chore:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Removed dark theme stylesheet from react-docs(`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7485"}}>
              {`#7485`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Dep:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Upgraded focus trap dependency and added tabbable option to fix breaking testing (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7448"}}>
              {`#7448`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated dependency theme-patternfly-org to v0.11.43 (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7400"}}>
              {`#7400`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated react testing library to v2.1.5 (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7428"}}>
              {`#7428`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"2022.06-release-notes-2022-05-12","size":"h2","className":"ws-title ws-h2"}}>
      {`2022.06 release notes (2022-05-12)`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-catalog-view-extension/v/4.65.1"}}>
          {`@patternfly/react-catalog-view-extension@4.65.1`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-charts/v/6.67.1"}}>
          {`@patternfly/react-charts@6.67.1`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-code-editor/v/4.55.1"}}>
          {`@patternfly/react-code-editor@4.55.1`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-core/v/4.214.1"}}>
          {`@patternfly/react-core@4.214.1`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-icons/v/4.65.1"}}>
          {`@patternfly/react-icons@4.65.1`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-inline-edit-extension/v/4.59.1"}}>
          {`@patternfly/react-inline-edit-extension@4.59.1`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-log-viewer/v/4.59.1"}}>
          {`@patternfly/react-log-viewer@4.59.1`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-styles/v/4.64.1"}}>
          {`@patternfly/react-styles@4.64.1`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-table/v/4.83.1"}}>
          {`@patternfly/react-table@4.83.1`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-tokens/v/4.66.1"}}>
          {`@patternfly/react-tokens@4.66.1`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-topology/v/4.61.1"}}>
          {`@patternfly/react-topology@4.61.1`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-virtualized-extension/v/4.61.1"}}>
          {`@patternfly/react-virtualized-extension@4.61.1`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"components-0","size":"h3","className":"ws-title ws-h3"}}>
      {`Components`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Alert group:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Converted examples to TypeScript/functional components (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7273"}}>
              {`#7273`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Card:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated to indicate card selectivity and status if using a screen reader (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7144"}}>
              {`#7144`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Clipboard copy:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed so dynamic tooltip updates get announced (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7335"}}>
              {`#7335`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated types used for tooltip positioning (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7295"}}>
              {`#7295`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Code block:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added class to code component (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7281"}}>
              {`#7281`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Data list:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Removed primary button from expandable demo (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7279"}}>
              {`#7279`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Date time picker:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Converted demo to TypeScript (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7268"}}>
              {`#7268`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated date placeholder (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7266"}}>
              {`#7266`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Divider:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added support for switching orientation at various breakpoints (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7285"}}>
              {`#7285`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Drag and drop:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Converted examples to TypeScript (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7244"}}>
              {`#7244`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Drawer:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Converted examples to TypeScript (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7329"}}>
              {`#7329`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Dropdown:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Reverted expose menuAppendTo in Dropdown prop docs (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7395"}}>
              {`#7395`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Menu:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added support for tree view menu keyboard handling (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7334"}}>
              {`#7334`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Modal:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added example preserving a11y when content overflows (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7293"}}>
              {`#7293`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Page:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added tabindex to components with `}
            <code {...{"className":"ws-code"}}>
              {`hasOverflowScroll`}
            </code>
            {` set (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7274"}}>
              {`#7274`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated centered example to match Core (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7269"}}>
              {`#7269`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Popper:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated Popper modifiers when child DOM changes (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7385"}}>
              {`#7385`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Tabs:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added secondary border-bottom variation, updated demos (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7311"}}>
              {`#7311`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added support to allow dynamic close and add (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7297"}}>
              {`#7297`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Made close handler optional (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7405"}}>
              {`#7405`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated key to not use index (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7276"}}>
              {`#7276`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Tooltip:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Made ref variant announced by assistive technology (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7332"}}>
              {`#7332`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Wizard:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added `}
            <code {...{"className":"ws-code"}}>
              {`WizardStep`}
            </code>
            {` to documentation (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7299"}}>
              {`#7299`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed id not being applied to wizard step (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7349"}}>
              {`#7349`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"catalog-extension","size":"h3","className":"ws-title ws-h3"}}>
      {`Catalog extension`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Added a little bit of spacing between title and items (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7060"}}>
          {`#7060`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"charts-0","size":"h3","className":"ws-title ws-h3"}}>
      {`Charts`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Added style for tooltip cursor (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7361"}}>
          {`#7361`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Added PatternFly dark theme support (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7310"}}>
          {`#7310`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Added support for customizing tooltip border for dark theme (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7393"}}>
          {`#7393`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Deprecated themeVariant prop for light/dark themes (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7372"}}>
          {`#7372`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Updated variables to include a fallback value for charts (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7374"}}>
          {`#7374`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"log-viewer","size":"h3","className":"ws-title ws-h3"}}>
      {`Log viewer`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Updated to clear ANSI cache when resetting the log window (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7355"}}>
          {`#7355`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"table-0","size":"h3","className":"ws-title ws-h3"}}>
      {`Table`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Added full screen demo for basic/bulk select (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7264"}}>
          {`#7264`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Added expandable table demo (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7277"}}>
          {`#7277`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Fixed broken link in example docs (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7296"}}>
          {`#7296`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"topology-0","size":"h3","className":"ws-title ws-h3"}}>
      {`Topology`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Added `}
        <code {...{"className":"ws-code"}}>
          {`ColaGroupsLayout`}
        </code>
        {` (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7308"}}>
          {`#7308`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Fixed error when a group has no visible children (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7304"}}>
          {`#7304`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Reverted BaseLayout startLayout method back to protected. (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7407"}}>
          {`#7407`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Added support for topology dark theme (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7294"}}>
          {`#7294`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Topology dark theme follow-on (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7364"}}>
          {`#7364`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"other-0","size":"h3","className":"ws-title ws-h3"}}>
      {`Other`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Chore:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added correct types for class components using context API (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7282"}}>
              {`#7282`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added missing `}
            <code {...{"className":"ws-code"}}>
              {`children`}
            </code>
            {` prop in several places (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7363"}}>
              {`#7363`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added setup to always include jest-dom extended matchers and cleanup (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7240"}}>
              {`#7240`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated react-docs to use workspace version of React for documentation (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7217"}}>
              {`#7217`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Dependencies:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Update dependency theme-patternfly-org to v0.11.38 (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7381"}}>
              {`#7381`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Documentation:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Cleanup dead link (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7270"}}>
              {`#7270`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"2022.05-release-notes-2022-04-22","size":"h2","className":"ws-title ws-h2"}}>
      {`2022.05 release notes (2022-04-22)`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-catalog-view-extension/v/4.57.2"}}>
          {`@patternfly/react-catalog-view-extension@4.57.2`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-charts/v/6.59.2"}}>
          {`@patternfly/react-charts@6.59.2`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-code-editor/v/4.47.2"}}>
          {`@patternfly/react-code-editor@4.47.2`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-core/v/4.206.2"}}>
          {`@patternfly/react-core@4.206.2`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-icons/v/4.57.2"}}>
          {`@patternfly/react-icons@4.57.2`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-inline-edit-extension/v/4.51.2"}}>
          {`@patternfly/react-inline-edit-extension@4.51.2`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-log-viewer/v/4.51.2"}}>
          {`@patternfly/react-log-viewer@4.51.2`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-styles/v/4.56.2"}}>
          {`@patternfly/react-styles@4.56.2`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-table/v/4.75.2"}}>
          {`@patternfly/react-table@4.75.2`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-tokens/v/4.58.2"}}>
          {`@patternfly/react-tokens@4.58.2`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-topology/v/4.53.2"}}>
          {`@patternfly/react-topology@4.53.2`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-virtualized-extension/v/4.53.2"}}>
          {`@patternfly/react-virtualized-extension@4.53.2`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"components-1","size":"h3","className":"ws-title ws-h3"}}>
      {`Components`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Brand:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated to allow picture with child elements and breakpoints, added example/test (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7176"}}>
              {`#7176`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Calendar month:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added date range example (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7082"}}>
              {`#7082`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Code editor:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Converted examples to TypeScript/functional components (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7101"}}>
              {`#7101`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Context selector:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Converted examples to TypeScript/functional components (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7114"}}>
              {`#7114`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed listener handling when using popper (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7165"}}>
              {`#7165`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Data list:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Converted examples to TypeScript (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7154"}}>
              {`#7154`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Assigned checked prop to correct attribute (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7163"}}>
              {`#7163`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Reverted checked prop (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7284"}}>
              {`#7284`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Date picker:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Converted examples to TypeScript (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7160"}}>
              {`#7160`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Description list:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Converted examples to TypeScript (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7147"}}>
              {`#7147`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Divider:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Converted examples to TypeScript (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7149"}}>
              {`#7149`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Dropdown:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Exposed `}
            <code {...{"className":"ws-code"}}>
              {`menuAppendTo`}
            </code>
            {` in dropdown prop documentation (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7173"}}>
              {`#7173`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Dual list selector:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated merged copy logic for tree variant (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7191"}}>
              {`#7191`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Form:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added `}
            <code {...{"className":"ws-code"}}>
              {`maxWidth`}
            </code>
            {` prop (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7253"}}>
              {`#7253`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Helper text:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added React demos (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7250"}}>
              {`#7250`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Jump links:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added aria current to active jump link item (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7172"}}>
              {`#7172`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Menu toggle:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added full width modifier (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7232"}}>
              {`#7232`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Number input:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed bug with custom increment/decrement and thresholds (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7159"}}>
              {`#7159`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Pagination:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Made items per page text in toggle clickable (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7192"}}>
              {`#7192`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Progress stepper:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated to use render prop for popover (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7190"}}>
              {`#7190`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added aria label to progress step (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7172"}}>
              {`#7172`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Select:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added `}
            <code {...{"className":"ws-code"}}>
              {`onBlur`}
            </code>
            {` callback to select toggle (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7198"}}>
              {`#7198`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added test for footer and `}
            <code {...{"className":"ws-code"}}>
              {`menuAppendTo`}
            </code>
            {` interaction (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7207"}}>
              {`#7207`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed to prevent footer clicks from toggling (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7193"}}>
              {`#7193`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Switch:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added check with label functionality and demo (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7229"}}>
              {`#7229`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Tabs:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added nested, un-indented demo (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7194"}}>
              {`#7194`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added tables and tabs auto width tabs demo (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7183"}}>
              {`#7183`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added tab role, and tablist role (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7172"}}>
              {`#7172`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Text input group:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated testing suite to new standards (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7169"}}>
              {`#7169`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Toolbar:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated to use search input instead of input group in documentation (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7242"}}>
              {`#7242`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Wizard:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added description component type (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7197"}}>
              {`#7197`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"catalog-view-extension","size":"h3","className":"ws-title ws-h3"}}>
      {`Catalog view extension`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Updated colors to use dark theme friendly css vars (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7215"}}>
          {`#7215`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"react-styles","size":"h3","className":"ws-title ws-h3"}}>
      {`React styles`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Added support for esm import and export (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7084"}}>
          {`#7084`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"table-1","size":"h3","className":"ws-title ws-h3"}}>
      {`Table`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Cleaned up unused imports for input group (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7249"}}>
          {`#7249`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Fixed broken link in documentation (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7202"}}>
          {`#7202`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Increased clickable area of tree table checkboxes (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7170"}}>
          {`#7170`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"topology-1","size":"h3","className":"ws-title ws-h3"}}>
      {`Topology`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Added breadth first layout to the topology component (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7138"}}>
          {`#7138`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Fixed drop target highlight, group label position on drag (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7222"}}>
          {`#7222`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Fixed edge style on hover of a selected edge (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7137"}}>
          {`#7137`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"other-1","size":"h3","className":"ws-title ws-h3"}}>
      {`Other`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Chore:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added correct types to instances of useCallback (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7216"}}>
              {`#7216`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Automatically detect React version in ESLint (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7218"}}>
              {`#7218`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Migrated tests to to React testing library (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7044"}}>
              {`#7044`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Migrated tests to to React testing library (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7055"}}>
              {`#7055`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Migrated tests to to React testing library (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7063"}}>
              {`#7063`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Removed duplicate generated snapshots (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7057"}}>
              {`#7057`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Replaced deprecated `}
            <code {...{"className":"ws-code"}}>
              {`SFC`}
            </code>
            {` type with `}
            <code {...{"className":"ws-code"}}>
              {`FunctionComponent`}
            </code>
            {` (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7195"}}>
              {`#7195`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Demo application:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Reordered css imports to load in dark theme correctly (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7224"}}>
              {`#7224`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Dependencies:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated dependency theme-patternfly-org to v0.11.22 (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7257"}}>
              {`#7257`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Documentation:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added code editor webpack plugin instructions (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7133"}}>
              {`#7133`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"2022.04-release-notes-2022-04-07","size":"h2","className":"ws-title ws-h2"}}>
      {`2022.04 release notes (2022-04-07)`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-catalog-view-extension/v/4.53.16"}}>
          {`@patternfly/react-catalog-view-extension@4.53.16`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-charts/v/6.55.16"}}>
          {`@patternfly/react-charts@6.55.16`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-code-editor/v/4.43.16"}}>
          {`@patternfly/react-code-editor@4.43.16`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-core/v/4.202.16"}}>
          {`@patternfly/react-core@4.202.16`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-icons/v/4.53.16"}}>
          {`@patternfly/react-icons@4.53.16`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-inline-edit-extension/v/4.47.16"}}>
          {`@patternfly/react-inline-edit-extension@4.47.16`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-log-viewer/v/4.47.16"}}>
          {`@patternfly/react-log-viewer@4.47.16`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-styles/v/4.52.16"}}>
          {`@patternfly/react-styles@4.52.16`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-table/v/4.71.16"}}>
          {`@patternfly/react-table@4.71.16`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-tokens/v/4.54.16"}}>
          {`@patternfly/react-tokens@4.54.16`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-topology/v/4.49.16"}}>
          {`@patternfly/react-topology@4.49.16`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-virtualized-extension/v/4.49.16"}}>
          {`@patternfly/react-virtualized-extension@4.49.16`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"components-2","size":"h3","className":"ws-title ws-h3"}}>
      {`Components`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Avatar:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added new size prop and demo (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7047"}}>
              {`#7047`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Calendar month:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Made date prop optional (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7077"}}>
              {`#7077`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Resolved regression for selecting a date (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7130"}}>
              {`#7130`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Card:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Documented `}
            <code {...{"className":"ws-code"}}>
              {`CardActions`}
            </code>
            {` properties (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7119"}}>
              {`#7119`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Checkbox:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Converted examples to TypeScript/functional components (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7036"}}>
              {`#7036`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Chip:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Converted examples to TypeScript/functional components (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7038"}}>
              {`#7038`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Chip group:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added chip props back to the chip group page (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7049"}}>
              {`#7049`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Converted examples to TypeScript/functional components (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7040"}}>
              {`#7040`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Clipboard copy:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Converted examples to TypeScript/functional components (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7073"}}>
              {`#7073`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Code block:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Converted examples to TypeScript/Functional components (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7086"}}>
              {`#7086`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Code editor:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added support for size to fit height (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7033"}}>
              {`#7033`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Description list:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated to support setting width of term column (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7061"}}>
              {`#7061`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Drawer:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated resizable drawer to make it more accessible (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7118"}}>
              {`#7118`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed drawer regression (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7179"}}>
              {`#7179`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Dropdown:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated examples to show different appends (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7095"}}>
              {`#7095`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Flex layout:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed spacing for xl example (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7081"}}>
              {`#7081`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Form select:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added isIconSprite prop (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7052"}}>
              {`#7052`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Menu:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Removed rogue scrollbar from drilldown menus (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7070"}}>
              {`#7070`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Menu toggle:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated examples to match core (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7089"}}>
              {`#7089`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Select:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added flag to not reset on select, added event to toggle callback (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7093"}}>
              {`#7093`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated examples to show different appends (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7087"}}>
              {`#7087`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Made fixes to view more feature (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7107"}}>
              {`#7107`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Text area:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added isIconSprite prop (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7052"}}>
              {`#7052`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Text input:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added isIconSprite prop (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7052"}}>
              {`#7052`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed newline interpolation of text input values (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6935"}}>
              {`#6935`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Time picker:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Re-added ability to append to document body (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7043"}}>
              {`#7043`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Tooltip:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed horizontal scroll bar causing misaligned tooltip (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7062"}}>
              {`#7062`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"table-2","size":"h3","className":"ws-title ws-h3"}}>
      {`Table`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Added z-index documentation, fixed old `}
        <code {...{"className":"ws-code"}}>
          {`rowIndex`}
        </code>
        {` callback (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7068"}}>
          {`#7068`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Made new `}
        <code {...{"className":"ws-code"}}>
          {`canCollapseAll`}
        </code>
        {` on collapsable rows opt-in (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7071"}}>
          {`#7071`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"topology-2","size":"h3","className":"ws-title ws-h3"}}>
      {`Topology`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Added concentric layout to topology component (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7053"}}>
          {`#7053`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Made topology updates found necessary for console topology upgrade (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7028"}}>
          {`#7028`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Reverted topology class name changes (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7187"}}>
          {`#7187`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"other-2","size":"h3","className":"ws-title ws-h3"}}>
      {`Other`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Chore:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated issue template to match patternfly/patternfly (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7111"}}>
              {`#7111`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Migrated tests to React testing library (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7020"}}>
              {`#7020`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Migrated tests to React testing library (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7032"}}>
              {`#7032`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Migrated tests to React testing library (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7031"}}>
              {`#7031`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Dependencies:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Update dependency theme-patternfly-org to v0.11.9 (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7125"}}>
              {`#7125`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Documentation:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Linked react testing library documentation in getting started guide (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7110"}}>
              {`#7110`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"2022.03-release-notes-2022-03-09","size":"h2","className":"ws-title ws-h2"}}>
      {`2022.03 release notes (2022-03-09)`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-catalog-view-extension/v/4.49.19"}}>
          {`@patternfly/react-catalog-view-extension@4.49.19`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-charts/v/6.51.19"}}>
          {`@patternfly/react-charts@6.51.19`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-code-editor/v/4.39.19"}}>
          {`@patternfly/react-code-editor@4.39.19`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-core/v/4.198.19"}}>
          {`@patternfly/react-core@4.198.19`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-icons/v/4.49.19"}}>
          {`@patternfly/react-icons@4.49.19`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-inline-edit-extension/v/4.43.19"}}>
          {`@patternfly/react-inline-edit-extension@4.43.19`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-log-viewer/v/4.43.19"}}>
          {`@patternfly/react-log-viewer@4.43.19`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-styles/v/4.48.19"}}>
          {`@patternfly/react-styles@4.48.19`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-table/v/4.67.19"}}>
          {`@patternfly/react-table@4.67.19`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-tokens/v/4.50.19"}}>
          {`@patternfly/react-tokens@4.50.19`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-topology/v/4.45.19"}}>
          {`@patternfly/react-topology@4.45.19`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-virtualized-extension/v/4.45.19"}}>
          {`@patternfly/react-virtualized-extension@4.45.19`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"components-3","size":"h3","className":"ws-title ws-h3"}}>
      {`Components`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Alert group:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added alert group overflow support (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6953"}}>
              {`#6953`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Card:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Converted examples to TypeScript and functional components (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6954"}}>
              {`#6954`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Chip:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Separated chip and chip group docs (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6981"}}>
              {`#6981`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Clipboard copy:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed rendering comma issue in some situations (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6971"}}>
              {`#6971`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Code editor:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated to allow for keyboard shortcut menu and added example (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6989"}}>
              {`#6989`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Flex layout:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed wrong property usage in an example (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6980"}}>
              {`#6980`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Form:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed 'filed' type in 'field group' docs (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6988"}}>
              {`#6988`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Label:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added support for editable label tooltip (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6917"}}>
              {`#6917`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Menu:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed so screen reader correctly announces on view more (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6986"}}>
              {`#6986`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added a new date select demo to the composable menu demos page (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6962"}}>
              {`#6962`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Multiple file upload:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Made followup updates from original pull request (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6976"}}>
              {`#6976`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Navigation:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Made navigation group titles optional (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6994"}}>
              {`#6994`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Notification drawer:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated so drawer receives focus after opening (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6963"}}>
              {`#6963`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Number input:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added demo to show how to support min/max (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6949"}}>
              {`#6949`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Select:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed to prevent double enter and cover additional on close cases (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6966"}}>
              {`#6966`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Tabs:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Made tooltips more accessible (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6940"}}>
              {`#6940`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Tile:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added aria-selected to indicate selection state (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6877"}}>
              {`#6877`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Time picker:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Removed unused `}
            <code {...{"className":"ws-code"}}>
              {`TimeOption`}
            </code>
            {` component and select dependencies (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6970"}}>
              {`#6970`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Toolbar:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated to allow custom chip group content (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6955"}}>
              {`#6955`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated test (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6995"}}>
              {`#6995`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"table-3","size":"h3","className":"ws-title ws-h3"}}>
      {`Table`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Added table example with overflow menu action (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6979"}}>
          {`#6979`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"topology-3","size":"h3","className":"ws-title ws-h3"}}>
      {`Topology`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Added basic grid layout to topology component (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6974"}}>
          {`#6974`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Added mechanism to hide details at different zoom levels (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6958"}}>
          {`#6958`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"other-3","size":"h3","className":"ws-title ws-h3"}}>
      {`Other`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Chore:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated a11y tests, fixed a11y errors, turned on a11y coverage (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6730"}}>
              {`#6730`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added dark theme option to integration demo app (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6957"}}>
              {`#6957`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added React Testing Library packages, updated simple enzyme tests (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6921"}}>
              {`#6921`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Demos`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Made updates to use question circle icon instead of help icon in masthead demos (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6932"}}>
              {`#6932`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Deps:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated dependency theme-patternfly-org to v0.11.3 (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/7009"}}>
              {`#7009`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"2022.02-release-notes-2022-02-22","size":"h2","className":"ws-title ws-h2"}}>
      {`2022.02 release notes (2022-02-22)`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-catalog-view-extension/v/4.49.5"}}>
          {`@patternfly/react-catalog-view-extension@4.49.5`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-charts/v/6.51.5"}}>
          {`@patternfly/react-charts@6.51.5`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-code-editor/v/4.39.5"}}>
          {`@patternfly/react-code-editor@4.39.5`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-core/v/4.198.5"}}>
          {`@patternfly/react-core@4.198.5`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-icons/v/4.49.5"}}>
          {`@patternfly/react-icons@4.49.5`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-inline-edit-extension/v/4.43.5"}}>
          {`@patternfly/react-inline-edit-extension@4.43.5`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-log-viewer/v/4.43.5"}}>
          {`@patternfly/react-log-viewer@4.43.5`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-styles/v/4.48.5"}}>
          {`@patternfly/react-styles@4.48.5`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-table/v/4.67.5"}}>
          {`@patternfly/react-table@4.67.5`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-tokens/v/4.50.5"}}>
          {`@patternfly/react-tokens@4.50.5`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-topology/v/4.45.5"}}>
          {`@patternfly/react-topology@4.45.5`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-virtualized-extension/v/4.45.5"}}>
          {`@patternfly/react-virtualized-extension@4.45.5`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"components-4","size":"h3","className":"ws-title ws-h3"}}>
      {`Components`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Button:`}
          </strong>
        </p>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added icon only variant for progress button (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6832"}}>
              {`#6832`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Calendar month:`}
          </strong>
        </p>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Converted examples to TypeScript (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6916"}}>
              {`#6916`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Card:`}
          </strong>
        </p>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated header alignment with select in demos (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6909"}}>
              {`#6909`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Charts:`}
          </strong>
        </p>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated bar chart example (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6883"}}>
              {`#6883`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Code editor:`}
          </strong>
        </p>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated to compare props and state to prevent re-renders (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6847"}}>
              {`#6847`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Description list:`}
          </strong>
        </p>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added icon variant (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6851"}}>
              {`#6851`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Label:`}
          </strong>
        </p>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated editable label structure to increase click area (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6918"}}>
              {`#6918`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Menu:`}
          </strong>
        </p>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated to account for initial drill in state (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6870"}}>
              {`#6870`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated to allow drilldown menu functions (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6872"}}>
              {`#6872`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Menu toggle:`}
          </strong>
        </p>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added full height variation (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6869"}}>
              {`#6869`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Multiple file Upload:`}
          </strong>
        </p>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added multiple file upload component (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6906"}}>
              {`#6906`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Navigation:`}
          </strong>
        </p>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added navigation drilldown example and demo (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6875"}}>
              {`#6875`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Number input:`}
          </strong>
        </p>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed to import input group component instead (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6850"}}>
              {`#6850`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Overflow menu:`}
          </strong>
        </p>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated to ignore menu being covered in integration tests (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6852"}}>
              {`#6852`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Page:`}
          </strong>
        </p>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added center alignment for page sections (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6893"}}>
              {`#6893`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Primary detail:`}
          </strong>
        </p>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Replaced hardcoded class with `}
            <code {...{"className":"ws-code"}}>
              {`usePageInsets`}
            </code>
            {` (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6880"}}>
              {`#6880`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Progress:`}
          </strong>
        </p>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed so that NaN is not returned when max and value are zero (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6867"}}>
              {`#6867`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Select:`}
          </strong>
        </p>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed to allow un-favorite using keyboard (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6931"}}>
              {`#6931`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed so that view more button click does not close the menu in React 16 (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6922"}}>
              {`#6922`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed Footer keyboard bugs (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6844"}}>
              {`#6844`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Removed logic from default `}
            <code {...{"className":"ws-code"}}>
              {`inputAutoComplete`}
            </code>
            {` (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6873"}}>
              {`#6873`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Text input group:`}
          </strong>
        </p>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added ability to do typehead with text input group, added to autocomplete demo (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6868"}}>
              {`#6868`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Time picker:`}
          </strong>
        </p>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated to apply `}
            <code {...{"className":"ws-code"}}>
              {`includeSeconds`}
            </code>
            {` when making options (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6865"}}>
              {`#6865`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Removed automatic validation from `}
            <code {...{"className":"ws-code"}}>
              {`onChange`}
            </code>
            {` event (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6884"}}>
              {`#6884`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Tooltip:`}
          </strong>
        </p>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added diagonal tooltip positioning (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6887"}}>
              {`#6887`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Toolbar:`}
          </strong>
        </p>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated toolbar examples and demos to use search input (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6728"}}>
              {`#6728`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed documentation build error (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6937"}}>
              {`#6937`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
        <AutoLinkHeader {...{"id":"catalog-view-extension-0","size":"h3","className":"ws-title ws-h3"}}>
          {`Catalog view extension`}
        </AutoLinkHeader>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated so `}
            <code {...{"className":"ws-code"}}>
              {`VerticalTabsTab`}
            </code>
            {` takes a custom base component (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6901"}}>
              {`#6901`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"table-4","size":"h3","className":"ws-title ws-h3"}}>
      {`Table`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Table:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added striping (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6886"}}>
              {`#6886`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Moved expand/collapse all from toolbar to table header in demo (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6914"}}>
              {`#6914`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated to use `}
            <code {...{"className":"ws-code"}}>
              {`colgroup`}
            </code>
            {` and nested `}
            <code {...{"className":"ws-code"}}>
              {`cols`}
            </code>
            {` in composable table (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6724"}}>
              {`#6724`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"topology-4","size":"h3","className":"ws-title ws-h3"}}>
      {`Topology`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Added topology component styles (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6839"}}>
          {`#6839`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Reverted removal of NodeShape.circle, allowed for either circle or ellipse (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6960"}}>
          {`#6960`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"other-4","size":"h3","className":"ws-title ws-h3"}}>
      {`Other`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Chore:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Enabled windows to hot refresh with changes on md files (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6856"}}>
              {`#6856`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Demo:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed filterable empty state table demo to remove checkbox when no rows (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6898"}}>
              {`#6898`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Deps:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated dependency theme-patternfly-org to v0.10.3 (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6941"}}>
              {`#6941`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Bumped Victory dependency for performance improvements (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6915"}}>
              {`#6915`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Docs:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added details to upgrade guide (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6911"}}>
              {`#6911`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"2022.01-release-notes-2022-01-25","size":"h2","className":"ws-title ws-h2"}}>
      {`2022.01 release notes (2022-01-25)`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-catalog-view-extension/v/4.43.14"}}>
          {`@patternfly/react-catalog-view-extension@4.43.14`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-charts/v/6.45.14"}}>
          {`@patternfly/react-charts@6.45.14`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-code-editor/v/4.33.14"}}>
          {`@patternfly/react-code-editor@4.33.14`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-core/v/4.192.14"}}>
          {`@patternfly/react-core@4.192.14`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-icons/v/4.43.14"}}>
          {`@patternfly/react-icons@4.43.14`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-inline-edit-extension/v/4.37.14"}}>
          {`@patternfly/react-inline-edit-extension@4.37.14`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-log-viewer/v/4.37.14"}}>
          {`@patternfly/react-log-viewer@4.37.14`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-styles/v/4.42.14"}}>
          {`@patternfly/react-styles@4.42.14`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-table/v/4.61.14"}}>
          {`@patternfly/react-table@4.61.14`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-tokens/v/4.44.14"}}>
          {`@patternfly/react-tokens@4.44.14`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-topology/v/4.39.14"}}>
          {`@patternfly/react-topology@4.39.14`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-virtualized-extension/v/4.39.14"}}>
          {`@patternfly/react-virtualized-extension@4.39.14`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"components-5","size":"h3","className":"ws-title ws-h3"}}>
      {`Components`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`About modal:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Converted examples to TypeScript/functional components (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6714"}}>
              {`#6714`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Accordion:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Converted examples to Typescript/functional components (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6716"}}>
              {`#6716`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Action list:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Converted examples to Typescript/functional components (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6718"}}>
              {`#6718`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Application launcher:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Converted examples to Typescript (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6834"}}>
              {`#6834`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Backdrop:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Converted examples to typescript (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6791"}}>
              {`#6791`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Background image:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Converted examples to typescript (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6791"}}>
              {`#6791`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Back to top:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Converted examples to typescript (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6791"}}>
              {`#6791`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Badge:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Converted examples to typescript (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6791"}}>
              {`#6791`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Banner:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Converted examples to typescript (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6791"}}>
              {`#6791`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Brand:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Converted examples to typescript (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6791"}}>
              {`#6791`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Breadcrumb:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Converted examples to typescript (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6791"}}>
              {`#6791`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Button:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added demo for progress button completion state (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6738"}}>
              {`#6738`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Converted examples to Typescript (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6796"}}>
              {`#6796`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Clipboard copy:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed to clear timer on unmount (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6708"}}>
              {`#6708`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`DataList:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added better comments for `}
            <code {...{"className":"ws-code"}}>
              {`isChecked`}
            </code>
            {` and `}
            <code {...{"className":"ws-code"}}>
              {`checked`}
            </code>
            {` props (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6803"}}>
              {`#6803`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Date picker:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated empty state validation and added onblur event (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6822"}}>
              {`#6822`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Description list:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added option to fill columns first (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6736"}}>
              {`#6736`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Dropdown:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added plain-text variant support (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6721"}}>
              {`#6721`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Expandable section:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added indented variation (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6763"}}>
              {`#6763`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Jump links:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed scrollspy breakpoints are incorrect if offset prop changes (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6750"}}>
              {`#6750`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated jump links demo to allow for horizontal display (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6731"}}>
              {`#6731`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Label:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Made editable label more screen reader accessible (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6472"}}>
              {`#6472`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Menu:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added composable dropdown demo, converted all composable menu demos to typescript (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6807"}}>
              {`#6807`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Modal:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added optional OUIA id for close button (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6732"}}>
              {`#6732`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated modal with form example (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6813"}}>
              {`#6813`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Number input:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated to call onMinus/onPlus on arrow-up/down key press (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6764"}}>
              {`#6764`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Overflow menu:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated to pass `}
            <code {...{"className":"ws-code"}}>
              {`HTMLDivElements`}
            </code>
            {` props to group and control divs (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6674"}}>
              {`#6674`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Page:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added resize observer and Toolbar/PageHeaderTools responsiveness based on page width (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6827"}}>
              {`#6827`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Pagination:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated to allow setting plural title in navigation (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6712"}}>
              {`#6712`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Select:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Changed typeahead autocomplete when input is user (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6846"}}>
              {`#6846`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed select crash (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6678"}}>
              {`#6678`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed dot next to the spinner in grouped view more variant (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6831"}}>
              {`#6831`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed footer keyboard bugs (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6844"}}>
              {`#6844`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated typeahead select children when any option attribute changes (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6747"}}>
              {`#6747`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Slider:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added option to add tooltip over thumb (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6624"}}>
              {`#6624`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Tabs:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added demo for Tabs within Modals (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6777"}}>
              {`#6777`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added gray tabs demo (patternfly#6810) (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6811"}}>
              {`#6811`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated to allow href navigation from tabs (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6755"}}>
              {`#6755`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated to enable tabs scroll button for small window (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6784"}}>
              {`#6784`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added table demo (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6692"}}>
              {`#6692`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Text input group:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Addressed various issues (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6774"}}>
              {`#6774`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Converted examples and demos to Typescript (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6704"}}>
              {`#6704`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Time picker:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added min/max time constraints (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6681"}}>
              {`#6681`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated to allow for seconds via new prop (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6769"}}>
              {`#6769`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated to auto-set direction based on space (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6825"}}>
              {`#6825`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Toggle group:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added support for disabling all items under the parent (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6700"}}>
              {`#6700`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Toolbar:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added demo with sticky toolbar (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6729"}}>
              {`#6729`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added support for customizing text in ToolbarChipGroupContent (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6694"}}>
              {`#6694`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Truncate:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added truncate component (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6713"}}>
              {`#6713`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"log-viewer-0","size":"h3","className":"ws-title ws-h3"}}>
      {`Log viewer`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Updated text selection behavior (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6746"}}>
          {`#6746`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Fixed the issue that scrollbar could compress the content of the logs (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6702"}}>
          {`#6702`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Removed footer classname (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6759"}}>
          {`#6759`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"table-5","size":"h3","className":"ws-title ws-h3"}}>
      {`Table`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Added table nested in a table example (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6727"}}>
          {`#6727`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Updated to allow a generic to be passed for cell props (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6691"}}>
          {`#6691`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Fixed action example (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6800"}}>
          {`#6800`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Updated to narrow logic for preventing event default on key down (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6744"}}>
          {`#6744`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Updated clickable area for checks and radios (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6754"}}>
          {`#6754`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Fixed row index in tree table examples (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6830"}}>
          {`#6830`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"topology-5","size":"h3","className":"ws-title ws-h3"}}>
      {`Topology`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Fixed state update on an unmounted component (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6779"}}>
          {`#6779`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Updated screen reader className to latest in TopologyControlBar (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6739"}}>
          {`#6739`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Added component display names to topology HOC/wrappers (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6829"}}>
          {`#6829`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Updated to not trigger mobx update when node dimension or position doesn't change (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6801"}}>
          {`#6801`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"other-5","size":"h3","className":"ws-title ws-h3"}}>
      {`Other`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Chore:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Promoted beta components (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6808"}}>
              {`#6808`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`fixed overflow menu integration test by ignoring menu being covered in tests (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6852"}}>
              {`#6852`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Demos:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added a password generator demo (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6725"}}>
              {`#6725`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Dependencies:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated dependency theme-patternfly-org to v0.9.6 (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6821"}}>
              {`#6821`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Documentation:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed broken theme-patternfly-org link (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6726"}}>
              {`#6726`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added note to contributing guidelines for windows users using lint (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6812"}}>
              {`#6812`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"2021.16-release-notes-2021-12-13","size":"h2","className":"ws-title ws-h2"}}>
      {`2021.16 release notes (2021-12-13)`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-catalog-view-extension/v/4.32.1"}}>
          {`@patternfly/react-catalog-view-extension@4.32.1`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-charts/v/6.34.1"}}>
          {`@patternfly/react-charts@6.34.1`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-code-editor/v/4.22.1"}}>
          {`@patternfly/react-code-editor@4.22.1`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-core/v/4.181.1"}}>
          {`@patternfly/react-core@4.181.1`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-icons/v/4.32.1"}}>
          {`@patternfly/react-icons@4.32.1`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-inline-edit-extension/v/4.26.1"}}>
          {`@patternfly/react-inline-edit-extension@4.26.1`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-log-viewer/v/4.26.1"}}>
          {`@patternfly/react-log-viewer@4.26.1`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-styles/v/4.31.1"}}>
          {`@patternfly/react-styles@4.31.1`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-table/v/4.50.1"}}>
          {`@patternfly/react-table@4.50.1`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-tokens/v/4.33.1"}}>
          {`@patternfly/react-tokens@4.33.1`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-topology/v/4.28.1"}}>
          {`@patternfly/react-topology@4.28.1`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-virtualized-extension/v/4.28.1"}}>
          {`@patternfly/react-virtualized-extension@4.28.1`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"components-6","size":"h3","className":"ws-title ws-h3"}}>
      {`Components`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Action list:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added support for classname (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6647"}}>
              {`#6647`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Alert:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Allowed all heading levels for title (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6628"}}>
              {`#6628`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Alert:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Converted examples to functional with typescript (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6634"}}>
              {`#6634`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Card:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added disabled card and cleaned up props (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6659"}}>
              {`#6659`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated card demos to use select instead of dropdown (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6639"}}>
              {`#6639`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Context selector:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added support for focus trap to be made inactive (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6638"}}>
              {`#6638`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Date picker:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated to allow date picker users to open the calendar programatically (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6632"}}>
              {`#6632`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Drag drop:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed to not overwrite children class with droppable class (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6672"}}>
              {`#6672`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Dropdown:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added toggle variants (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6651"}}>
              {`#6651`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Dual list selector:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added composable tree example (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6652"}}>
              {`#6652`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Menu toggle:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added plain with text variant (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6627"}}>
              {`#6627`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Pagination:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated `}
            <code {...{"className":"ws-code"}}>
              {`toggleTemplate`}
            </code>
            {` description to include `}
            <code {...{"className":"ws-code"}}>
              {`ofWord`}
            </code>
            {` prop (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6622"}}>
              {`#6622`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Popover:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added alert variants (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6664"}}>
              {`#6664`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Forwarded focus to close button with voice over click (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6660"}}>
              {`#6660`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Select:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added ability to persist filtered children state (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6670"}}>
              {`#6670`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed no autocomplete for typeahead select (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6623"}}>
              {`#6623`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Slider:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed examples with custom steps and input (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6662"}}>
              {`#6662`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Aded input resizing (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6612"}}>
              {`#6612`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Tabs:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added nested Tabs demo (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6645"}}>
              {`#6645`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Text input group:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added auto-complete search demo (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6661"}}>
              {`#6661`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Tile:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed selecting tile in tile demo (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6653"}}>
              {`#6653`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Toolbar:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed toolbar links under props in jump links (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6675"}}>
              {`#6675`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"table-6","size":"h3","className":"ws-title ws-h3"}}>
      {`Table`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Rewrote examples using TypeScript, hooks. Row data decoupled from PF structure. Deduplicated state (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6168"}}>
          {`#6168`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"other-6","size":"h3","className":"ws-title ws-h3"}}>
      {`Other`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Chore:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Made OUIA counter update for node/SSR/NextJS (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6668"}}>
              {`#6668`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated react and react-dom types (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6583"}}>
              {`#6583`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated to use JSDoc comments for all deprecations (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6613"}}>
              {`#6613`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Deps:`}
        </strong>
        {` Update dependency theme-patternfly-org to v0.8.12 (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6640"}}>
          {`#6640`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"2021.15-release-notes-2021-11-17","size":"h2","className":"ws-title ws-h2"}}>
      {`2021.15 release notes (2021-11-17)`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-catalog-view-extension/v/4.26.4"}}>
          {`@patternfly/react-catalog-view-extension@4.26.4`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-charts/v/6.28.4"}}>
          {`@patternfly/react-charts@6.28.4`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-code-editor/v/4.16.4"}}>
          {`@patternfly/react-code-editor@4.16.4`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-core/v/4.175.4"}}>
          {`@patternfly/react-core@4.175.4`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-icons/v/4.26.4"}}>
          {`@patternfly/react-icons@4.26.4`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-inline-edit-extension/v/4.20.4"}}>
          {`@patternfly/react-inline-edit-extension@4.20.4`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-log-viewer/v/4.20.4"}}>
          {`@patternfly/react-log-viewer@4.20.4`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-styles/v/4.25.4"}}>
          {`@patternfly/react-styles@4.25.4`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-table/v/4.44.4"}}>
          {`@patternfly/react-table@4.44.4`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-tokens/v/4.27.4"}}>
          {`@patternfly/react-tokens@4.27.4`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-topology/v/4.22.4"}}>
          {`@patternfly/react-topology@4.22.4`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-virtualized-extension/v/4.22.4"}}>
          {`@patternfly/react-virtualized-extension@4.22.4`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"components-7","size":"h3","className":"ws-title ws-h3"}}>
      {`Components`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`About modal:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated to allow disabling FocusTrap (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6509"}}>
              {`#6509`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Banner:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated to forward props (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6511"}}>
              {`#6511`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Card:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added hoverable, selectable and selected-raised variant (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6565"}}>
              {`#6565`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Context selector:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added support for context selector items as links (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6554"}}>
              {`#6554`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Dropdown:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Forward custom props for DropdownGroup component to the DOM (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6521"}}>
              {`#6521`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Dual list selector:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed to account for duplicate folders (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6499"}}>
              {`#6499`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`File upload:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Improved events in the file upload (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6139"}}>
              {`#6139`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Downgraded react-dropzone back to 9.0.0 to avoid a breaking type change, fixed behavior regressions (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6610"}}>
              {`#6610`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Jump links:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed to always set clicked item as active (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6542"}}>
              {`#6542`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Menu:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed to stop passing disableHover to DrilldownMenu DOM (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6571"}}>
              {`#6571`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed to allow maxMenuHeight with scrollable (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6608"}}>
              {`#6608`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Modal:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added example of modal with form (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6557"}}>
              {`#6557`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Navigation:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added example for third level nested expansion (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6564"}}>
              {`#6564`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed nav flyout in page bug (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6562"}}>
              {`#6562`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Pagination:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed to allow ofWord to be used in the PaginationOptionsMenu for the word `}
            <code {...{"className":"ws-code"}}>
              {`of`}
            </code>
            {` for localization purposes (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6500"}}>
              {`#6500`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added indeterminate count (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6556"}}>
              {`#6556`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Panel:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added panel component (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6570"}}>
              {`#6570`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Popover:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed to allow user to change heading level (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6549"}}>
              {`#6549`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Text input:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed to use resizeObserver to trigger trimLeft calculation (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6529"}}>
              {`#6529`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Text input group:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated examples to use revised onChange prop (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6588"}}>
              {`#6588`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added text input group demo (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6581"}}>
              {`#6581`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added requested text input group props (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6563"}}>
              {`#6563`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Tooltip:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed positioning issue with dynamic tooltip content (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6598"}}>
              {`#6598`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"access-console-extension","size":"h3","className":"ws-title ws-h3"}}>
      {`Access console extension`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Updated to use object type select options values in order to not mix displayed text with the option keys (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6496"}}>
          {`#6496`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"charts-1","size":"h3","className":"ws-title ws-h3"}}>
      {`Charts`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Added resize observer and examples (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6528"}}>
          {`#6528`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"code-editor","size":"h3","className":"ws-title ws-h3"}}>
      {`Code editor`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Added resize observer to code editor (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6547"}}>
          {`#6547`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Improved type-safety for onChange prop (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6535"}}>
          {`#6535`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Enhanced type correctness of code editor (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6579"}}>
          {`#6579`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"log-viewer-1","size":"h3","className":"ws-title ws-h3"}}>
      {`Log viewer`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Added support ANSI color (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6519"}}>
          {`#6519`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Added support for wrap text (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6576"}}>
          {`#6576`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Updated search function (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6592"}}>
          {`#6592`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"table-7","size":"h3","className":"ws-title ws-h3"}}>
      {`Table`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Added sticky columns and nested headers to composable table(`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6538"}}>
          {`#6538`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Added support to set default sort direction (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6544"}}>
          {`#6544`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"topology-6","size":"h3","className":"ws-title ws-h3"}}>
      {`Topology`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Added option to hide topology connector menu on drag end (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6522"}}>
          {`#6522`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"other-7","size":"h3","className":"ws-title ws-h3"}}>
      {`Other`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Demos:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added date/time picker demo (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6545"}}>
              {`#6545`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Deps:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Update dependency theme-patternfly-org to v0.8.7 (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6584"}}>
              {`#6584`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"2021.14-release-notes-2021-10-26","size":"h2","className":"ws-title ws-h2"}}>
      {`2021.14 release notes (2021-10-26)`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-catalog-view-extension/v/4.19.8"}}>
          {`@patternfly/react-catalog-view-extension@4.19.8`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-charts/v/6.21.8"}}>
          {`@patternfly/react-charts@6.21.8`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-code-editor/v/4.9.8"}}>
          {`@patternfly/react-code-editor@4.9.8`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-core/v/4.168.8"}}>
          {`@patternfly/react-core@4.168.8`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-icons/v/4.19.8"}}>
          {`@patternfly/react-icons@4.19.8`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-inline-edit-extension/v/4.13.8"}}>
          {`@patternfly/react-inline-edit-extension@4.13.8`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-log-viewer/v/4.13.8"}}>
          {`@patternfly/react-log-viewer@4.13.8`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-styles/v/4.18.8"}}>
          {`@patternfly/react-styles@4.18.8`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-table/v/4.37.8"}}>
          {`@patternfly/react-table@4.37.8`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-tokens/v/4.20.8"}}>
          {`@patternfly/react-tokens@4.20.8`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-topology/v/4.15.8"}}>
          {`@patternfly/react-topology@4.15.8`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-virtualized-extension/v/4.15.8"}}>
          {`@patternfly/react-virtualized-extension@4.15.8`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"components-8","size":"h3","className":"ws-title ws-h3"}}>
      {`Components`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Card:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added accordion and trend demos (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6451"}}>
              {`#6451`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated horizontal grid card demo (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6448"}}>
              {`#6448`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Description list:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated DescriptionListGroup to forward props to DOM (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6466"}}>
              {`#6466`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Dropdown:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added event to onToggle prop definition of KebabToggle (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6490"}}>
              {`#6490`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Dual list selector:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated to account for duplicate folders (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6499"}}>
              {`#6499`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added disabled flag (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6442"}}>
              {`#6442`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Form select:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed format for FormSelectOption isPlaceholder doc text (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6427"}}>
              {`#6427`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Label:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added compact label (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6448"}}>
              {`#6448`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated label's close button aria-label (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6475"}}>
              {`#6475`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Menu:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added isPlain and isScrollable props (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6440"}}>
              {`#6440`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Modal:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Cleaned up jest tests (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6489"}}>
              {`#6489`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Progress:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added demos (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6479"}}>
              {`#6479`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated to allow node titles (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6470"}}>
              {`#6470`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Progress stepper:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added help text flag (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6439"}}>
              {`#6439`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Select:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added placeholder style (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6469"}}>
              {`#6469`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated to allow multi-typeahead create with custom options (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6467"}}>
              {`#6467`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Made SelectOptionProp optional  (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6503"}}>
              {`#6503`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Tabs:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added support for tab content body with padding, added tabs open and secondary tabs demos (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6484"}}>
              {`#6484`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Text input group:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added text input group component (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6482"}}>
              {`#6482`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Toolbar:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added sticky top modifier to toolbar (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6447"}}>
              {`#6447`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Tree view:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added memoization and test demo (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6362"}}>
              {`#6362`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Wizard:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Changed wizard toggle and wizard toggle item to span tags (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6428"}}>
              {`#6428`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated docs for using WizardContextConsumer (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6492"}}>
              {`#6492`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"access-console-extension-0","size":"h3","className":"ws-title ws-h3"}}>
      {`Access console extension`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Updated to accept random children in AccessConsole component (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6374"}}>
          {`#6374`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"log-viewer-extension","size":"h3","className":"ws-title ws-h3"}}>
      {`Log viewer extension`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Fixed resizing problem (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6459"}}>
          {`#6459`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"react-tokens-0","size":"h3","className":"ws-title ws-h3"}}>
      {`React tokens`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Added check for no matching var to avoid infinite loop (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6502"}}>
          {`#6502`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Fixed some values by reading variables last (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6418"}}>
          {`#6418`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"table-8","size":"h3","className":"ws-title ws-h3"}}>
      {`Table`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Updated to account for `}
        <code {...{"className":"ws-code"}}>
          {`disableSelection`}
        </code>
        {` in `}
        <code {...{"className":"ws-code"}}>
          {`areAllRowsSelected`}
        </code>
        {` method of legacy table (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6437"}}>
          {`#6437`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Fixed table docs missing import (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6438"}}>
          {`#6438`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"other-8","size":"h3","className":"ws-title ws-h3"}}>
      {`Other`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Chore`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Promoted beta components, cleaned up unused imports (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6491"}}>
              {`#6491`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added .eslintignore items and bumped linting packages (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6420"}}>
              {`#6420`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added transformer package (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6507"}}>
              {`#6507`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Published transformer in patternfly org (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6506"}}>
              {`#6506`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Changed transformer cjs package to private (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6515"}}>
              {`#6515`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Moved to GitHub actions (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6399"}}>
              {`#6399`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Deps:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated dependency theme-patternfly-org to v0.7.13 (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6486"}}>
              {`#6486`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated jest to v27 (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6457"}}>
              {`#6457`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Docs:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated react-core readme (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6505"}}>
              {`#6505`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"pf3","size":"h3","className":"ws-title ws-h3"}}>
      {`PF3`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Chore:`}
        </strong>
        {`
Replaced recompose with react-recompose (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6429"}}>
          {`#6429`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"2021.13-release-notes-2021-10-13","size":"h2","className":"ws-title ws-h2"}}>
      {`2021.13 release notes (2021-10-13)`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-catalog-view-extension/v/4.13.18"}}>
          {`@patternfly/react-catalog-view-extension@4.13.18`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-charts/v/6.15.32"}}>
          {`@patternfly/react-charts@6.15.32`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-code-editor/v/4.3.85"}}>
          {`@patternfly/react-code-editor@4.3.85`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-core/v/4.162.3"}}>
          {`@patternfly/react-core@4.162.3`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-icons/v/4.13.1"}}>
          {`@patternfly/react-icons@4.13.1`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-inline-edit-extension/v/4.7.109"}}>
          {`@patternfly/react-inline-edit-extension@4.7.109`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-log-viewer/v/4.7.21"}}>
          {`@patternfly/react-log-viewer@4.7.21`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-styles/v/4.12.5"}}>
          {`@patternfly/react-styles@4.12.5`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-table/v/4.31.8"}}>
          {`@patternfly/react-table@4.31.8`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-tokens/v/4.14.1"}}>
          {`@patternfly/react-tokens@4.14.1`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-topology/v/4.9.104"}}>
          {`@patternfly/react-topology@4.9.104`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-virtualized-extension/v/4.9.74"}}>
          {`@patternfly/react-virtualized-extension@4.9.74`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"components-9","size":"h3","className":"ws-title ws-h3"}}>
      {`Components`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Card:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added utilization card demos (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6307"}}>
              {`#6307`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added nested card demo (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6391"}}>
              {`#6391`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Drag and drop:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Consumed core classes (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6377"}}>
              {`#6377`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Removed React.createPortal, added noWrap (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6328"}}>
              {`#6328`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Drawer:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Removed duplicate example from drawer (#6348) (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6397"}}>
              {`#6397`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Dual list selector:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Introduced composable example and drag/drop demo (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6369"}}>
              {`#6369`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Grid layout:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed tests for size offsets of GridItem (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6373"}}>
              {`#6373`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Jump links:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added toggle text (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6347"}}>
              {`#6347`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Menu:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added options menu demo using menu (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6380"}}>
              {`#6380`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Navigation:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added flyout with menu components (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6416"}}>
              {`#6416`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added flyout onMouseOver logic (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6325"}}>
              {`#6325`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Page:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated examples and demos to use masthead (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6388"}}>
              {`#6388`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated horizontal nav example to not be forced stacked (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6402"}}>
              {`#6402`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Progress stepper:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added progress stepper component (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6339"}}>
              {`#6339`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Select:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added support for right aligned menu (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6395"}}>
              {`#6395`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Removed unused checkbox import (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6389"}}>
              {`#6389`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Sidebar:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed sidebar docs (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6313"}}>
              {`#6313`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added tabindex to scrollable examples (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6378"}}>
              {`#6378`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`TreeView:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed so isExpanded overrides defaultExpanded (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6326"}}>
              {`#6326`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed to allow onSelect to prevent the default behavior of toggling node collapse (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6351"}}>
              {`#6351`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Tabs:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added support for expandable vertical tabs (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6342"}}>
              {`#6342`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Wizard:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated aria-current on wizard steps (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6392"}}>
              {`#6392`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"catalog-view-extension-1","size":"h3","className":"ws-title ws-h3"}}>
      {`Catalog view extension`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Replaced node-sass to allow building on node16 (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6398"}}>
          {`#6398`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"charts-2","size":"h3","className":"ws-title ws-h3"}}>
      {`Charts`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Added custom labels example for bullet chart (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6356"}}>
          {`#6356`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Added custom stroke color example (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6354"}}>
          {`#6354`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"log-viewer-extension-0","size":"h3","className":"ws-title ws-h3"}}>
      {`Log viewer extension`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Fixed to accurately estimate row height (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6387"}}>
          {`#6387`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Improved log viewer performance (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6358"}}>
          {`#6358`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"table-9","size":"h3","className":"ws-title ws-h3"}}>
      {`Table`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Added toolbar sort demos (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6353"}}>
          {`#6353`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Fixed various bugs (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6338"}}>
          {`#6338`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"tokens","size":"h3","className":"ws-title ws-h3"}}>
      {`Tokens`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Parsed var(--pf, initialValue) (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6408"}}>
          {`#6408`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"other-9","size":"h3","className":"ws-title ws-h3"}}>
      {`Other`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Chore:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Pruned integration tests (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6345"}}>
              {`#6345`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Improved cypress performance (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6340"}}>
              {`#6340`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Deps:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated dependency theme-patternfly-org to v0.7.8 (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6403"}}>
              {`#6403`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"2021.12-release-notes-2021-09-15","size":"h2","className":"ws-title ws-h2"}}>
      {`2021.12 release notes (2021-09-15)`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-catalog-view-extension/v/4.12.74"}}>
          {`@patternfly/react-catalog-view-extension@4.12.74`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-charts/v/6.15.23"}}>
          {`@patternfly/react-charts@6.15.23`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-code-editor/v/4.3.61"}}>
          {`@patternfly/react-code-editor@4.3.61`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-core/v/4.157.3"}}>
          {`@patternfly/react-core@4.157.3`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-icons/v/4.11.17"}}>
          {`@patternfly/react-icons@4.11.17`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-inline-edit-extension/v/4.7.84"}}>
          {`@patternfly/react-inline-edit-extension@4.7.84`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-log-viewer/v/4.6.14"}}>
          {`@patternfly/react-log-viewer@4.6.14`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-styles/v/4.11.16"}}>
          {`@patternfly/react-styles@4.11.16`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-table/v/4.30.3"}}>
          {`@patternfly/react-table@4.30.3`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-tokens/v/4.12.18"}}>
          {`@patternfly/react-tokens@4.12.18`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-topology/v/4.9.80"}}>
          {`@patternfly/react-topology@4.9.80`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-virtualized-extension/v/4.9.49"}}>
          {`@patternfly/react-virtualized-extension@4.9.49`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"components-10","size":"h3","className":"ws-title ws-h3"}}>
      {`Components`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Alert:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added plain variant, added expandable inline (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6236"}}>
              {`#6236`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Avatar:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Converted examples to typescript (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6228"}}>
              {`#6228`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Back to top:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Introduced back to top component and demos (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6282"}}>
              {`#6282`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Calendar month:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Made useEffect respect validators (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6315"}}>
              {`#6315`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Card:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added demos for log and event views (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6289"}}>
              {`#6289`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added aggregate status, status tabbed and status demos (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6206"}}>
              {`#6206`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Code editor:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Replaced hardcoded text with props, updated microcopy (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6241"}}>
              {`#6241`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Date picker:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated date picker microcopy (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6263"}}>
              {`#6263`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Description list:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added compact and fluid modifiers (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6260"}}>
              {`#6260`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Drag and drop:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Started work towards adding drag and drop component (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6258"}}>
              {`#6258`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Dual list selector:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added support for list item row (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6294"}}>
              {`#6294`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added arguments to onOptionsSelect (#6224) (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6225"}}>
              {`#6225`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Flex layout:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added component property to flex layout and subitems. (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6270"}}>
              {`#6270`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Gallery layout:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added component property to gallery layout and subitems. (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6270"}}>
              {`#6270`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Grid layout:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added component property to grid layout and subitems. (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6270"}}>
              {`#6270`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Menu:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added context selector demo using menu (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6283"}}>
              {`#6283`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Search input:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added autocomplete search input demo (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6305"}}>
              {`#6305`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Select:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed select field dropdown showing the create option even when there's no input (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6248"}}>
              {`#6248`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added aria-label to toggle (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6271"}}>
              {`#6271`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Slider:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed customSteps spacing to respect min/max (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6231"}}>
              {`#6231`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated slider to respect min/max constraints (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6232"}}>
              {`#6232`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Spinner:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed spinner tests to check all component sizes (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6269"}}>
              {`#6269`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Tabs:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added support for disabled state tabs (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6261"}}>
              {`#6261`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"log-viewer-extension-1","size":"h3","className":"ws-title ws-h3"}}>
      {`Log viewer extension`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Added onScroll and footer props (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6238"}}>
          {`#6238`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Added required dependency (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6216"}}>
          {`#6216`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"table-10","size":"h3","className":"ws-title ws-h3"}}>
      {`Table`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Added hoverable and selectable rows (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6233"}}>
          {`#6233`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Added missing styles import (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6259"}}>
          {`#6259`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Fixed broken links in table's empty state demo (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6276"}}>
          {`#6276`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"other-10","size":"h3","className":"ws-title ws-h3"}}>
      {`Other`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Chore:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Removed unneeded peer dependency in code editor (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6239"}}>
              {`#6239`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Demos`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added search input demo for composable search with form (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6279"}}>
              {`#6279`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Refactored demos to use masthead (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6274"}}>
              {`#6274`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed wrapper nav to have hrefs (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6297"}}>
              {`#6297`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Deps:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated dependency theme-patternfly-org to v0.6.40 (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6309"}}>
              {`#6309`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Docs:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Corrected some copy-pasted prop comments (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6285"}}>
              {`#6285`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added yarn build before test in contributing docs (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6273"}}>
              {`#6273`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"2021.11-release-notes-2021-08-25","size":"h2","className":"ws-title ws-h2"}}>
      {`2021.11 release notes (2021-08-25)`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-catalog-view-extension/v/4.12.56"}}>
          {`@patternfly/react-catalog-view-extension@4.12.56`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-charts/v/6.15.20"}}>
          {`@patternfly/react-charts@6.15.20`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-code-editor/v/4.3.42"}}>
          {`@patternfly/react-code-editor@4.3.42`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-core/v/4.152.4"}}>
          {`@patternfly/react-core@4.152.4`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-icons/v/4.11.14"}}>
          {`@patternfly/react-icons@4.11.14`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-inline-edit-extension/v/4.7.65"}}>
          {`@patternfly/react-inline-edit-extension@4.7.65`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-log-viewer/v/4.5.4"}}>
          {`@patternfly/react-log-viewer@4.5.4`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-styles/v/4.11.13"}}>
          {`@patternfly/react-styles@4.11.13`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-table/v/4.29.58"}}>
          {`@patternfly/react-table@4.29.58`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-tokens/v/4.12.15"}}>
          {`@patternfly/react-tokens@4.12.15`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-topology/v/4.9.62"}}>
          {`@patternfly/react-topology@4.9.62`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-virtualized-extension/v/4.9.31"}}>
          {`@patternfly/react-virtualized-extension@4.9.31`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"components-11","size":"h3","className":"ws-title ws-h3"}}>
      {`Components`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Avatar:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated example image to match core (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6137"}}>
              {`#6137`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Card:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added horizontal split and details demos (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6193"}}>
              {`#6193`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Context selector:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added plain variant (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6141"}}>
              {`#6141`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Dual list selector:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed to respect initial chosen options, allow checking of sub folders, and reset selected states when options are moved via add/remove all (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6180"}}>
              {`#6180`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Helper text:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated default icons for success/error (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6130"}}>
              {`#6130`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Jump links:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Improved performance (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6128"}}>
              {`#6128`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Masthead:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added masthead component (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6170"}}>
              {`#6170`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Menu:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added application launcher demo (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6175"}}>
              {`#6175`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed menu crash if current menuRef value is not found. (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6152"}}>
              {`#6152`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Navigation:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added horizontal sub navigation variant (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6149"}}>
              {`#6149`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Number input:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed to only call 'onPlus' and 'onMinus' if set (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6197"}}>
              {`#6197`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Popover:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated to call setVisible before animation (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6104"}}>
              {`#6104`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added support for diagonal positions (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6155"}}>
              {`#6155`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Search input:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added support for submit button (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6178"}}>
              {`#6178`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated to submit the search when hitting enter in the main input field (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6145"}}>
              {`#6145`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Select:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed typeahead children check (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6176"}}>
              {`#6176`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Omit isLastOptionBeforeFooter from props (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6147"}}>
              {`#6147`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Time picker:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed 0 & 00 are no longer valid hour values in 12 hour time. Updated onChange handler to return flag indicating if current time value is valid. (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6134"}}>
              {`#6134`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Toolbar:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated to use categoryName.key as filter counter index (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6143"}}>
              {`#6143`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added props for customizing ChipGroup text to ToolbarFilter (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6138"}}>
              {`#6138`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Tree view:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added guides and compact variants (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6172"}}>
              {`#6172`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated to consume toolbar (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6133"}}>
              {`#6133`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated to react to default expansion state change (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6100"}}>
              {`#6100`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Tabs:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Exposed href to allow links in vertical tabs (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6072"}}>
              {`#6072`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"icons","size":"h3","className":"ws-title ws-h3"}}>
      {`Icons`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Fixed icons types (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6215"}}>
          {`#6215`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"log-viewer-extension-2","size":"h3","className":"ws-title ws-h3"}}>
      {`Log viewer extension`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Refactored the component to get rid of the gaps between items (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6201"}}>
          {`#6201`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Removed unused props (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6186"}}>
          {`#6186`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"table-11","size":"h3","className":"ws-title ws-h3"}}>
      {`Table`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Updated keyboard interactions (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6171"}}>
          {`#6171`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Updated composable selectable example to use shift + select (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6188"}}>
          {`#6188`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Added ThSortType to documentation (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6203"}}>
          {`#6203`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"tokens-0","size":"h3","className":"ws-title ws-h3"}}>
      {`Tokens`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Fixed icons types (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6215"}}>
          {`#6215`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"other-11","size":"h3","className":"ws-title ws-h3"}}>
      {`Other`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Chore`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Upgraded to TypeScript 4 (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6192"}}>
              {`#6192`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Promoted beta components  (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6182"}}>
              {`#6182`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed ts-lint errors (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6113"}}>
              {`#6113`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Deps:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated dependency @patternfly/patternfly-a11y to v4 (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6125"}}>
              {`#6125`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated dependency theme-patternfly-org to v0.6.21 (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6177"}}>
              {`#6177`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Docs:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated example microcopy (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6196"}}>
              {`#6196`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"2021.10-release-notes-2021-08-04","size":"h2","className":"ws-title ws-h2"}}>
      {`2021.10 release notes (2021-08-04)`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-catalog-view-extension/v/4.12.36"}}>
          {`@patternfly/react-catalog-view-extension@4.12.36`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-charts/v/6.15.14"}}>
          {`@patternfly/react-charts@6.15.14`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-code-editor/v/4.3.22"}}>
          {`@patternfly/react-code-editor@4.3.22`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-core/v/4.147.0"}}>
          {`@patternfly/react-core@4.147.0`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-icons/v/4.11.8"}}>
          {`@patternfly/react-icons@4.11.8`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-inline-edit-extension/v/4.7.44"}}>
          {`@patternfly/react-inline-edit-extension@4.7.44`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-log-viewer/v/4.4.0"}}>
          {`@patternfly/react-log-viewer@4.4.0`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-styles/v/4.11.8"}}>
          {`@patternfly/react-styles@4.11.8`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-table/v/4.29.37"}}>
          {`@patternfly/react-table@4.29.37`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-tokens/v/4.12.9"}}>
          {`@patternfly/react-tokens@4.12.9`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-topology/v/4.9.42"}}>
          {`@patternfly/react-topology@4.9.42`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-virtualized-extension/v/4.9.11"}}>
          {`@patternfly/react-virtualized-extension@4.9.11`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"components-12","size":"h3","className":"ws-title ws-h3"}}>
      {`Components`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Accordion:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added support for bordered, display large and multiple body content (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6085"}}>
              {`#6085`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Alert group:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Made dynamic alerts more accessible (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5946"}}>
              {`#5946`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Avatar:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added border prop (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6040"}}>
              {`#6040`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Button:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated to allow router link component (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6061"}}>
              {`#6061`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Checkbox:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed warning about ouiaSafe property (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6055"}}>
              {`#6055`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added OUIA props (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5949"}}>
              {`#5949`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Code editor:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added support for more languages (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6006"}}>
              {`#6006`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added showEditor prop (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6022"}}>
              {`#6022`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated to allow passing options and overrideServices (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6035"}}>
              {`#6035`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated to show toolbar if there are custom controls (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6025"}}>
              {`#6025`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Context selector:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated to hide internal prop (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5986"}}>
              {`#5986`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Date picker:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Changed default parse format to y-m-d from y(-m)?(-d)? (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6039"}}>
              {`#6039`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Cleared parse error on type (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6066"}}>
              {`#6066`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Dual list selector:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed button order (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5983"}}>
              {`#5983`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Expandable section:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added props to support disclosure variation (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6078"}}>
              {`#6078`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Form:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added form group label info (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6053"}}>
              {`#6053`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Label:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added editable label (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6065"}}>
              {`#6065`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Menu:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Addded context menu flyout support (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5789"}}>
              {`#5789`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Navigation:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated incorrect prop descriptions (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5980"}}>
              {`#5980`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Notification drawer:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed to show close button when onClose provided (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6071"}}>
              {`#6071`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Page:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added tabs page section variant (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6028"}}>
              {`#6028`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Pagination:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Exported interfaces in md file so prop descriptions are documented (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5985"}}>
              {`#5985`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Search input:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated to allow passing custom form elements after the attributes (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6043"}}>
              {`#6043`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Allow hasWordAttrLabel to be React.ReactNode as well (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6037"}}>
              {`#6037`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Select:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated to check children have props before comparing them (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6052"}}>
              {`#6052`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated to check the values of the children for possible changes on componentDidUpdate (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5973"}}>
              {`#5973`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed keyboard handling for view more button and footer (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6095"}}>
              {`#6095`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed to ignore arrow keys when typeahead options are empty (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5958"}}>
              {`#5958`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Made type improvements on onFilter (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6073"}}>
              {`#6073`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Sidebar:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed custom className override (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6094"}}>
              {`#6094`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Slider:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed to respect props in useCallback (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5969"}}>
              {`#5969`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Switch:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added isReversed prop/layout (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6080"}}>
              {`#6080`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Tabs:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added support for page insets (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6087"}}>
              {`#6087`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Text input:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed warning about ouiaSafe property (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6060"}}>
              {`#6060`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added OUIA props (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5945"}}>
              {`#5945`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Time picker:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Applied proper styles on popper container (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5960"}}>
              {`#5960`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed onInputChange always being set to valid (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5982"}}>
              {`#5982`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Title:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added OUIA props (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5943"}}>
              {`#5943`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Toolbar:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added OUIA props (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5951"}}>
              {`#5951`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Tooltip:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Cleaned up timeouts on unmount to prevent warning(`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5991"}}>
              {`#5991`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Tree view:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Cleaned up docs (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6068"}}>
              {`#6068`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed console warning about uncontrolled inputs when checkbox swaps between determinate/indeterminate (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6041"}}>
              {`#6041`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"access-console-extension-1","size":"h3","className":"ws-title ws-h3"}}>
      {`Access console extension`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Persist rfc instance in VncConsole (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6012"}}>
          {`#6012`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"charts-3","size":"h3","className":"ws-title ws-h3"}}>
      {`Charts`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Fixed donut chart showing a gap (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6084"}}>
          {`#6084`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Updated Victory tooltip performance (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6049"}}>
          {`#6049`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"log-viewer-extension-3","size":"h3","className":"ws-title ws-h3"}}>
      {`Log viewer extension`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Added dark theme (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6044"}}>
          {`#6044`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Fix to not overestimate size for empty lines (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6033"}}>
          {`#6033`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Moved log viewer to extensions (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6011"}}>
          {`#6011`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"table-12","size":"h3","className":"ws-title ws-h3"}}>
      {`Table`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Updated to avoid Object constructor (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5999"}}>
          {`#5999`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Cleaned up and expanded table docs (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5984"}}>
          {`#5984`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Made more table doc updates (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6077"}}>
          {`#6077`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"other-12","size":"h3","className":"ws-title ws-h3"}}>
      {`Other`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Chore:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added keyboard handling helper (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5972"}}>
              {`#5972`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Changed useLayoutEffect to useIsomorphicLayoutEffect (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5954"}}>
              {`#5954`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Removed beta component console warnings from promoted components (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5990"}}>
              {`#5990`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Demos:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added password strength demo (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6053"}}>
              {`#6053`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Docs:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed broken link in tokens readme (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5938"}}>
              {`#5938`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Moved some repeated demo code to wrapper (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5978"}}>
              {`#5978`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated references of master to main in the contribution guide (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5975"}}>
              {`#5975`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Deps:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated dependency theme-patternfly-org to v0.6.6 (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/6103"}}>
              {`#6103`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Removed PatternFly 3 as a dependency from react-catalog-view-extension (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5987"}}>
              {`#5987`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"2021.08-release-notes-2021-06-22","size":"h2","className":"ws-title ws-h2"}}>
      {`2021.08 release notes (2021-06-22)`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-catalog-view-extension/v/4.12.0"}}>
          {`@patternfly/react-catalog-view-extension@4.12.0`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-charts/v/6.15.3"}}>
          {`@patternfly/react-charts@6.15.3`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-code-editor/v/4.2.92"}}>
          {`@patternfly/react-code-editor@4.2.92`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-core/v/4.135.0"}}>
          {`@patternfly/react-core@4.135.0`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-icons/v/4.11.0"}}>
          {`@patternfly/react-icons@4.11.0`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-inline-edit-extension/v/4.7.7"}}>
          {`@patternfly/react-inline-edit-extension@4.7.7`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-log-viewer/v/4.2.0"}}>
          {`@patternfly/react-log-viewer@4.2.0`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-styles/v/4.11.0"}}>
          {`@patternfly/react-styles@4.11.0`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-table/v/4.29.0"}}>
          {`@patternfly/react-table@4.29.0`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-tokens/v/4.12.0"}}>
          {`@patternfly/react-tokens@4.12.0`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-topology/v/4.9.6"}}>
          {`@patternfly/react-topology@4.9.6`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-virtualized-extension/v/4.8.38"}}>
          {`@patternfly/react-virtualized-extension@4.8.38`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"components-13","size":"h3","className":"ws-title ws-h3"}}>
      {`Components`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Breadcrumb:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Moved divider outside of header element (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5870"}}>
              {`#5870`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Card:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added horizontal card grid demo (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5907"}}>
              {`#5907`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added support to remove offset from actions (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5887"}}>
              {`#5887`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Date picker:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated to pass additional props to input (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5848"}}>
              {`#5848`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Description list:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added responsive layout breakpoint property (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5885"}}>
              {`#5885`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Dual list selector:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added tooltips to control buttons (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5914"}}>
              {`#5914`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated so add/remove all respects filtering (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5884"}}>
              {`#5884`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Helper text:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added helper text component (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5903"}}>
              {`#5903`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Menu:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added scrollable support (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5667"}}>
              {`#5667`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated tabIndex when children change (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5923"}}>
              {`#5923`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Select:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added some safety accessors (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5902"}}>
              {`#5902`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Slider:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated so scenarios that we show boundaries but not ticks don't pollute the DOM with steps (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5878"}}>
              {`#5878`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Split layout:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added prop to allow children to wrap (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5892"}}>
              {`#5892`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Text:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added support for visited link styling (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5917"}}>
              {`#5917`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added OUIA props into text component (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5881"}}>
              {`#5881`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Time picker:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated to pass additional props to input (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5848"}}>
              {`#5848`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed the returned values of the onChange method. (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5868"}}>
              {`#5868`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"charts-4","size":"h3","className":"ws-title ws-h3"}}>
      {`Charts`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Added left and right triangle legend symbols (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5869"}}>
          {`#5869`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"log-viewer-2","size":"h3","className":"ws-title ws-h3"}}>
      {`Log Viewer`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Made log viewer responsive and changed search result styling (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5927"}}>
          {`#5927`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"table-13","size":"h3","className":"ws-title ws-h3"}}>
      {`Table`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Added composable draggable table rows demo (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5921"}}>
          {`#5921`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Updated so empty state cell does not have data-label (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5886"}}>
          {`#5886`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"other-13","size":"h3","className":"ws-title ws-h3"}}>
      {`Other`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Chore:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Promoted beta components (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5929"}}>
              {`#5929`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Docs:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated docs so code editor peer dependencies are clearer (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5919"}}>
              {`#5919`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"2021.07-release-notes-2021-06-04","size":"h2","className":"ws-title ws-h2"}}>
      {`2021.07 release notes (2021-06-04)`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-catalog-view-extension/v/4.11.42"}}>
          {`@patternfly/react-catalog-view-extension@4.11.42`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-charts/v/6.14.29"}}>
          {`@patternfly/react-charts@6.14.29`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-code-editor/v/4.2.76"}}>
          {`@patternfly/react-code-editor@4.2.76`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-core/v/4.128.2"}}>
          {`@patternfly/react-core@4.128.2`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-icons/v/4.10.11"}}>
          {`@patternfly/react-icons@4.10.11`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-inline-edit-extension/v/4.6.125"}}>
          {`@patternfly/react-inline-edit-extension@4.6.125`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-log-viewer/v/4.1.19"}}>
          {`@patternfly/react-log-viewer@4.1.19`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-styles/v/4.10.11"}}>
          {`@patternfly/react-styles/v/4.10.11`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-table/v/4.27.24"}}>
          {`@patternfly/react-table@4.27.24`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-tokens/v/4.11.12"}}>
          {`@patternfly/react-tokens/v/4.11.12`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-topology/v/4.8.72"}}>
          {`@patternfly/react-topology@4.8.72`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-virtualized-extension/v/4.8.23"}}>
          {`@patternfly/react-virtualized-extension@4.8.23`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"components-14","size":"h3","className":"ws-title ws-h3"}}>
      {`Components`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Button:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added danger modifier to link/secondary buttons (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5808"}}>
              {`#5808`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Data list:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Update draggable data list example to functional component (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5783"}}>
              {`#5783`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Description list:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added support for help text (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5837"}}>
              {`#5837`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Flex layout:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added ability to specify order (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5274"}}>
              {`#5274`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Grid layout:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added ability to specify order (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5274"}}>
              {`#5274`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Jump links:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added check for stale DOM node (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5812"}}>
              {`#5812`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`List:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added icons, plain and bordered (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5796"}}>
              {`#5796`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Menu:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added drilldown composable menu demo back (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5807"}}>
              {`#5807`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added footer and view more demo (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5791"}}>
              {`#5791`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added filter tree demo (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5824"}}>
              {`#5824`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Search input:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated to stop capturing browser focus on mount (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5823"}}>
              {`#5823`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Select:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Allowed filtering in single variant (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5793"}}>
              {`#5793`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed custom Filtering demo (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5829"}}>
              {`#5829`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Slider:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated to make showBoundaries independent from showTicks prop (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5740"}}>
              {`#5740`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Tabs:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added support for uncontrolled tabs (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5831"}}>
              {`#5831`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Time picker:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated to not spread validateTime (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5850"}}>
              {`#5850`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated to use exact match instead of includes (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5841"}}>
              {`#5841`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Tooltip:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Changed default entry and exit delay (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5746"}}>
              {`#5746`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Wizard:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated to allow for expandable nav items (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5842"}}>
              {`#5842`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"charts-5","size":"h3","className":"ws-title ws-h3"}}>
      {`Charts`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Fix to ensure ChartPie uses non-negative default radius (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5822"}}>
          {`#5822`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Added interactive legend example for pie chart (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5795"}}>
          {`#5795`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Cleaned up interactive legend pie example (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5798"}}>
          {`#5798`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"table-14","size":"h3","className":"ws-title ws-h3"}}>
      {`Table`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Changed checkbox behavior in tree table examples (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5827"}}>
          {`#5827`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Removed data-label from expanded row 0 (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5844"}}>
          {`#5844`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"other-14","size":"h3","className":"ws-title ws-h3"}}>
      {`Other`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Chore:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated component scaffolding (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5777"}}>
              {`#5777`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed incorrect/missing import statements (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5786"}}>
              {`#5786`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Demos:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed card shadow on hover for primary details demo (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5790"}}>
              {`#5790`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Deps:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated dependency theme-patternfly-org to v0.4.78 (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5778"}}>
              {`#5778`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"2021.06-release-notes-2021-05-14","size":"h2","className":"ws-title ws-h2"}}>
      {`2021.06 release notes (2021-05-14)`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-catalog-view-extension/v/4.11.25"}}>
          {`@patternfly/react-catalog-view-extension@4.11.25`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-charts/v/6.14.22"}}>
          {`@patternfly/react-charts@6.14.22`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-code-editor/v/4.2.59"}}>
          {`@patternfly/react-code-editor@4.2.59`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-core/v/4.121.1"}}>
          {`@patternfly/react-core@4.121.1`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-icons/v/4.10.7"}}>
          {`@patternfly/react-icons@4.10.7`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-inline-edit-extension/v/4.6.108"}}>
          {`@patternfly/react-inline-edit-extension@4.6.108`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-log-viewer/v/4.1.2"}}>
          {`@patternfly/react-log-viewer@4.1.2`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-styles/v/4.10.7"}}>
          {`@patternfly/react-styles/v/4.10.7`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-table/v/4.27.7"}}>
          {`@patternfly/react-table@4.27.7`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-tokens/v/4.11.8"}}>
          {`@patternfly/react-tokens/v/4.11.8`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-topology/v/4.8.55"}}>
          {`@patternfly/react-topology@4.8.55`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-virtualized-extension/v/4.8.6"}}>
          {`@patternfly/react-virtualized-extension@4.8.6`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"components-15","size":"h3","className":"ws-title ws-h3"}}>
      {`Components`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Accordion:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated to set button type, and updated prop extension (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5688"}}>
              {`#5688`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Application launcher:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added ApplicationLauncherContent to documentation (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5719"}}>
              {`#5719`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Card:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added isToggleRightAligned prop (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5723"}}>
              {`#5723`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Dropdown:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed scrollbar click closing menu (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5766"}}>
              {`#5766`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added alignment breakpoints, fix ref console warning (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5734"}}>
              {`#5734`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Dual list selector:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed bug with selecting single node in nested folder (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5763"}}>
              {`#5763`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Empty state:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated empty state "no match found" example text (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5715"}}>
              {`#5715`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`File upload:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed to allow user to override onClick (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5689"}}>
              {`#5689`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Gallery:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added min/max widths at breakpoints (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5735"}}>
              {`#5735`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Jump links:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added check for null scrollItems (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5754"}}>
              {`#5754`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Menu toggle:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added menu toggle component and composable menu POCs (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5722"}}>
              {`#5722`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Select:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added flag to accept input values even if not in menu (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5751"}}>
              {`#5751`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed scrollbar click closing menu (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5766"}}>
              {`#5766`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added footer and view more options (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5736"}}>
              {`#5736`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Slider:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added showBoundaries property to the min/max slider variant (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5710"}}>
              {`#5710`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Toggle group:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Removed dividers, light variation, added compact support (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5762"}}>
              {`#5762`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Toolbar:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added widths on breakpoints for toolbar items (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5727"}}>
              {`#5727`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Tree view:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Changed key generation field for tree view (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5730"}}>
              {`#5730`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"access-console-extension-2","size":"h3","className":"ws-title ws-h3"}}>
      {`Access console extension`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Updated to hide placeholder option after first selection (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5693"}}>
          {`#5693`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"log-viewer-3","size":"h3","className":"ws-title ws-h3"}}>
      {`Log viewer`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Added log viewer component (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5657"}}>
          {`#5657`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Refactor toolbar functionality (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5769"}}>
          {`#5769`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"table-15","size":"h3","className":"ws-title ws-h3"}}>
      {`Table`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Updated to allow for more customizable Table actions (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5744"}}>
          {`#5744`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Added a prop to forward additional props to select rowData (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5770"}}>
          {`#5770`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"other-15","size":"h3","className":"ws-title ws-h3"}}>
      {`Other`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Chore:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added delay to table sticky header integration test (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5713"}}>
              {`#5713`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added check for canUseDOM before using DOM (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5733"}}>
              {`#5733`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Deps:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Update dependency theme-patternfly-org to v0.4.59 (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5706"}}>
              {`#5706`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Docs:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed example capitalization (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5724"}}>
              {`#5724`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"2021.05-release-notes-2021-04-21","size":"h2","className":"ws-title ws-h2"}}>
      {`2021.05 release notes (2021-04-21)`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-catalog-view-extension/v/4.11.7"}}>
          {`@patternfly/react-catalog-view-extension@4.11.7`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-charts/v/6.14.17"}}>
          {`@patternfly/react-charts@6.14.17`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-code-editor/v/4.2.41"}}>
          {`@patternfly/react-code-editor@4.2.41`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-core/v/4.115.2"}}>
          {`@patternfly/react-core@4.115.2`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-icons/v/4.10.2"}}>
          {`@patternfly/react-icons@4.10.2`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-inline-edit-extension/v/4.6.88"}}>
          {`@patternfly/react-inline-edit-extension@4.6.88`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-styles/v/4.10.2"}}>
          {`@patternfly/react-styles/v/4.10.2`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-table/v/4.26.7"}}>
          {`@patternfly/react-table@4.26.7`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-tokens/v/4.11.3"}}>
          {`@patternfly/react-tokens/v/4.11.3`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-topology/v/4.8.37"}}>
          {`@patternfly/react-topology@4.8.37`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-virtualized-extension/v/4.7.24"}}>
          {`@patternfly/react-virtualized-extension@4.7.24`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"components-16","size":"h3","className":"ws-title ws-h3"}}>
      {`Components`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Card:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added empty state to card demo (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5605"}}>
              {`#5605`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added full-height and plain variation (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5632"}}>
              {`#5632`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Moved card view to demos section (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5671"}}>
              {`#5671`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Clipboard copy:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added inline variant (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5629"}}>
              {`#5629`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Code editor:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed React peer dependency (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5618"}}>
              {`#5618`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Code block:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added code block component (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5656"}}>
              {`#5656`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Context selector:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated footer button to inline (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5676"}}>
              {`#5676`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Date picker:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added date and time range demo (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5666"}}>
              {`#5666`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Expandable section:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added detached variant, updated tests (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5643"}}>
              {`#5643`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Form:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added stacked variant and section title (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5621"}}>
              {`#5621`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Navigation:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added missing pf-c-nav__list class to grouped nav items wrapper (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5589"}}>
              {`#5589`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Select:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added optional item count (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5677"}}>
              {`#5677`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Removed panel from select variants (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5600"}}>
              {`#5600`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Changed arguments of the onFilter callback (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5631"}}>
              {`#5631`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added invalid state to select (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5675"}}>
              {`#5675`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Slider:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated Slider API to be more like the range input API (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5669"}}>
              {`#5669`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Tree view:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added classname (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5608"}}>
              {`#5608`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Toolbar:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added ToolbarGroup to docs (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5665"}}>
              {`#5665`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed to collapse expandable content when crossing breakpoint (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5692"}}>
              {`#5692`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Wizard:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Disabled back button on first step for keyboard users (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5623"}}>
              {`#5623`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"access-console-extension-3","size":"h3","className":"ws-title ws-h3"}}>
      {`Access console extension`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Updated to clear selection when the selected option is a placeholder (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5678"}}>
          {`#5678`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"icons-0","size":"h3","className":"ws-title ws-h3"}}>
      {`Icons`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Removed star reexport (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5662"}}>
          {`#5662`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"inline-edit-extension","size":"h3","className":"ws-title ws-h3"}}>
      {`Inline edit extension`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Removed unused dependency (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5645"}}>
          {`#5645`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"tokens-1","size":"h3","className":"ws-title ws-h3"}}>
      {`Tokens`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Removed star reexport (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5662"}}>
          {`#5662`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Fixed duplicate entries (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5697"}}>
          {`#5697`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"table-16","size":"h3","className":"ws-title ws-h3"}}>
      {`Table`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Added optional icons to tree table rows, add responsive view (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5672"}}>
          {`#5672`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Allow passing tooltipProps to TableText (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5654"}}>
          {`#5654`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"virtualized-extension","size":"h3","className":"ws-title ws-h3"}}>
      {`Virtualized extension`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Fixed render of demo data so the table cells don't repeat static text (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5627"}}>
          {`#5627`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"other-16","size":"h2","className":"ws-title ws-h2"}}>
      {`Other`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Chore:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added closeComment to Stalebot (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5651"}}>
              {`#5651`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Removed codecov (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5683"}}>
              {`#5683`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added delay to table sticky header integration test (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5713"}}>
              {`#5713`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Deps:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated dependency theme-patternfly-org to v0.4.53 (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5684"}}>
              {`#5684`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"2021.04-release-notes-2021-04-01","size":"h2","className":"ws-title ws-h2"}}>
      {`2021.04 release notes (2021-04-01)`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-catalog-view-extension/v/4.10.29"}}>
          {`@patternfly/react-catalog-view-extension@4.10.29`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-charts/v/6.14.11"}}>
          {`@patternfly/react-charts@6.14.11`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-code-editor/v/4.2.18"}}>
          {`@patternfly/react-code-editor@4.2.18`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-core/v/4.106.2"}}>
          {`@patternfly/react-core@4.106.2`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-icons/v/4.9.9"}}>
          {`@patternfly/react-icons@4.9.9`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-inline-edit-extension/v/4.6.65"}}>
          {`@patternfly/react-inline-edit-extension@4.6.65`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-styles/v/4.9.4"}}>
          {`@patternfly/react-styles/v/4.9.4`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-table/v/4.24.1"}}>
          {`@patternfly/react-table@4.24.1`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-tokens/v/4.10.9"}}>
          {`@patternfly/react-tokens/v/4.10.9`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-topology/v/4.8.15"}}>
          {`@patternfly/react-topology@4.8.15`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-virtualized-extension/v/4.7.1"}}>
          {`@patternfly/react-virtualized-extension@4.7.1`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"components-17","size":"h3","className":"ws-title ws-h3"}}>
      {`Components`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Alert:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed to not return false in useEffect (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5575"}}>
              {`#5575`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated to not timeout if isMouseOver (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5566"}}>
              {`#5566`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Application launcher:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Made application launcher demo keyboard accessible (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5550"}}>
              {`#5550`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Background image:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated to use useEffect for the id (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5541"}}>
              {`#5541`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Checkbox:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added support for custom body content (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5559"}}>
              {`#5559`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Code editor:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed flaky integration test (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5531"}}>
              {`#5531`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Drawer:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated to not initially render DrawerPanelContent (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5543"}}>
              {`#5543`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Dropdown:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added badge toggle variant (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5548"}}>
              {`#5548`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Form:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added support for field groups (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5569"}}>
              {`#5569`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Jump links:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added className prop (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5553"}}>
              {`#5553`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Menu:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added Keyboard interaction support (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5570"}}>
              {`#5570`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Navigation:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed so that the onExpand callback is fired (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5595"}}>
              {`#5595`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated NavItem so TabIndex is passed to cloned children (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5562"}}>
              {`#5562`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated to not call onExpand twice (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5611"}}>
              {`#5611`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Pagination:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added ofWord prop for localization and accessibility (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5563"}}>
              {`#5563`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Radio:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added support for custom body content (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5559"}}>
              {`#5559`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Slider:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added isDisabled property (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5524"}}>
              {`#5524`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Switch:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed error message regarding accessibility usage (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5522"}}>
              {`#5522`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Textarea:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added auto resizing (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5568"}}>
              {`#5568`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Tooltip:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Made icon example accessible (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5588"}}>
              {`#5588`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"table-17","size":"h3","className":"ws-title ws-h3"}}>
      {`Table`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Added tree table variant (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5573"}}>
          {`#5573`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"topology-7","size":"h3","className":"ws-title ws-h3"}}>
      {`Topology`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Updated to allow applications to choose using resizable drawer for topology side bar (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5572"}}>
          {`#5572`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Made fix for context sub menu placement (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5546"}}>
          {`#5546`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Used drawer for topology side panel and allow resizing (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5533"}}>
          {`#5533`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Used disabled background for control buttons when disabled (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5538"}}>
          {`#5538`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"other-17","size":"h3","className":"ws-title ws-h3"}}>
      {`Other`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Deps:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated dependency theme-patternfly-org to v0.4.33 (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5587"}}>
              {`#5587`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Docs:*`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added OUIA documentation (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5511"}}>
              {`#5511`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"2021.03-release-notes-2021-03-10","size":"h2","className":"ws-title ws-h2"}}>
      {`2021.03 release notes (2021-03-10)`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-catalog-view-extension/v/4.10.13"}}>
          {`@patternfly/react-catalog-view-extension@4.10.13`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-charts/v/6.14.6"}}>
          {`@patternfly/react-charts@6.14.6`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-code-editor/v/4.2.2"}}>
          {`@patternfly/react-code-editor@4.2.2`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-core/v/4.101.3"}}>
          {`@patternfly/react-core@4.101.3`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-icons/v/4.9.5"}}>
          {`@patternfly/react-icons@4.9.5`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-inline-edit-extension/v/4.6.48"}}>
          {`@patternfly/react-inline-edit-extension@4.6.48`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-styles/v/4.8.5"}}>
          {`@patternfly/react-styles@4.8.5`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-table/v/4.23.14"}}>
          {`@patternfly/react-table@4.23.14`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-tokens/v/4.10.5"}}>
          {`@patternfly/react-tokens@4.10.5`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-topology/v/4.7.45"}}>
          {`@patternfly/react-topology@4.7.45`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-virtualized-extension/v/4.6.46"}}>
          {`@patternfly/react-virtualized-extension@4.6.46`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"components-18","size":"h3","className":"ws-title ws-h3"}}>
      {`Components`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Application launcher:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Enabled keyboard accessibility when using component prop (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5492"}}>
              {`#5492`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Calendar month:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed selecting month in popover for React 17 (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5517"}}>
              {`#5517`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Code editor:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Made 'code' prop controlled (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5465"}}>
              {`#5465`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Checkbox:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added standalone modifier when no label is provided (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5513"}}>
              {`#5513`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Data list:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed dragging in firefox (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5505"}}>
              {`#5505`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Date picker:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated to only show non-whitespace error text (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5487"}}>
              {`#5487`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Drawer:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added gray and white panel background variants (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5479"}}>
              {`#5479`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Dual list selector:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added onAvailableOptionsSelectInputChanged and onChosenOptionsSelectInputChanged (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5469"}}>
              {`#5469`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Form:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added grid form example (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5495"}}>
              {`#5495`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Input group:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added plain input group text variant (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5478"}}>
              {`#5478`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Login page:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Enabled show or hide password (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5481"}}>
              {`#5481`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Menu:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Addded drilldown menu (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5485"}}>
              {`#5485`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Progress:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Made proper usage of accessibility properties (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5470"}}>
              {`#5470`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Radio:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added standalone modifier when no label is provided (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5513"}}>
              {`#5513`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Search input:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Add isDisabled and cleaned up focus handling (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5468"}}>
              {`#5468`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Add searchInputMenuBody class (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5518"}}>
              {`#5518`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Time picker:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated to use different am/pm suffixes (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5504"}}>
              {`#5504`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Tree view:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added support for custom badge content (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5512"}}>
              {`#5512`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added flag for expand/collapse all (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5503"}}>
              {`#5503`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"other-18","size":"h3","className":"ws-title ws-h3"}}>
      {`Other`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Deps:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Removed unused dep (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5507"}}>
              {`#5507`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"2021.02-release-notes-2021-02-17","size":"h2","className":"ws-title ws-h2"}}>
      {`2021.02 release notes (2021-02-17)`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-catalog-view-extension/v/4.10.2"}}>
          {`@patternfly/react-catalog-view-extension@4.10.2`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-charts/v/6.14.2"}}>
          {`@patternfly/react-charts@6.14.2`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-code-editor/v/4.1.25"}}>
          {`@patternfly/react-code-editor@4.1.25`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-core/v/4.97.2"}}>
          {`@patternfly/react-core@4.97.2`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-icons/v/4.9.2"}}>
          {`@patternfly/react-icons@4.9.2`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-inline-edit-extension/v/4.6.36"}}>
          {`@patternfly/react-inline-edit-extension@4.6.36`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-styles/v/4.8.2"}}>
          {`@patternfly/react-styles@4.8.2`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-table/v/4.23.2"}}>
          {`@patternfly/react-table@4.23.2`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-tokens/v/4.10.2"}}>
          {`@patternfly/react-tokens@4.10.2`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-topology/v/4.7.34"}}>
          {`@patternfly/react-topology@4.7.34`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-virtualized-extension/v/4.6.35"}}>
          {`@patternfly/react-virtualized-extension@4.6.35`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"components-19","size":"h3","className":"ws-title ws-h3"}}>
      {`Components`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Calendar month:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added `}
            <code {...{"className":"ws-code"}}>
              {`type="button"`}
            </code>
            {` to `}
            <code {...{"className":"ws-code"}}>
              {`CalendarMonth`}
            </code>
            {` to prevent page refresh (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5440"}}>
              {`#5440`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Card:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added pf-m-display-lg and pf-m-rounded (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5389"}}>
              {`#5389`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Code editor:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated so copy to clipboard button can now be enabled solo (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5411"}}>
              {`#5411`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed to display empty state if one is supplied (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5413"}}>
              {`#5413`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Data list:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Used drag-over modifier instead of css style (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5119"}}>
              {`#5119`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Date picker:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed to not rely on toISOString (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5369"}}>
              {`#5369`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Drawer:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Enabled touch controls for resizable drawer (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5357"}}>
              {`#5357`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated transitions and content mounting (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5426"}}>
              {`#5426`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Form select:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added support for placeholder styled option (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5428"}}>
              {`#5428`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Jump links:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added jumplinks subsections (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5314"}}>
              {`#5314`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Navigation:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added support for spreading props to the NavExpandable button (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5438"}}>
              {`#5438`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Progress:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added warning when title and aria-label are not present (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5415"}}>
              {`#5415`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Search input:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added advanced search feature (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5454"}}>
              {`#5454`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added support to passing a ref (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5215"}}>
              {`#5215`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added bar class (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5425"}}>
              {`#5425`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Select:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Adjusted Select component so that it also works with children changes while it's mounted (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5375"}}>
              {`#5375`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated to not use focus trap when no tabbable children (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5427"}}>
              {`#5427`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Removed onFilter function from example with custom objects (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5450"}}>
              {`#5450`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Slider:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added touch support (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5453"}}>
              {`#5453`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Spinner:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added isSVG prop (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5390"}}>
              {`#5390`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Time picker:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed issue when clicking dropdown menu does not trigger onChange function (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5399"}}>
              {`#5399`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Tooltip:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated to only add aria when tooltip is visible/in the DOM (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5382"}}>
              {`#5382`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`TreeView:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added keyboard interactions (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5439"}}>
              {`#5439`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed expand/collapse on filtering (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5414"}}>
              {`#5414`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Wizard:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added cancel button class (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5391"}}>
              {`#5391`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"charts-6","size":"h3","className":"ws-title ws-h3"}}>
      {`Charts`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Fixed bar chart remaining muted with interactive legend (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5378"}}>
          {`#5378`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"table-18","size":"h3","className":"ws-title ws-h3"}}>
      {`Table`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Added decorators index file (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5366"}}>
          {`#5366`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Updated column management demo to include label (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5431"}}>
          {`#5431`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Added dataLabel property to composable table (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5406"}}>
          {`#5406`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"topology-8","size":"h3","className":"ws-title ws-h3"}}>
      {`Topology`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Fixed if statement (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5409"}}>
          {`#5409`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"virtualized-extension-0","size":"h3","className":"ws-title ws-h3"}}>
      {`Virtualized extension`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Revert some changes to VirtualTableBody (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5434"}}>
          {`#5434`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"other-19","size":"h3","className":"ws-title ws-h3"}}>
      {`Other`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Deps:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated dependency theme-patternfly-org to v0.4.12 (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5457"}}>
              {`#5457`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"2021.01-release-notes-2021-01-27","size":"h2","className":"ws-title ws-h2"}}>
      {`2021.01 release notes (2021-01-27)`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-catalog-view-extension/v/4.9.15"}}>
          {`@patternfly/react-catalog-view-extension@4.9.15`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-charts/v/6.13.8"}}>
          {`@patternfly/react-charts@6.13.8`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-code-editor/v/4.1.4"}}>
          {`@patternfly/react-code-editor@4.1.4`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-core/v/4.90.2"}}>
          {`@patternfly/react-core@4.90.2`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-icons/v/4.8.4"}}>
          {`@patternfly/react-icons@4.8.4`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-inline-edit-extension/v/4.6.15"}}>
          {`@patternfly/react-inline-edit-extension@4.6.15`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-styles/v/4.7.29"}}>
          {`@patternfly/react-styles@4.7.29`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-table/v/4.20.15"}}>
          {`@patternfly/react-table@4.20.15`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-tokens/v/4.9.26"}}>
          {`@patternfly/react-tokens@4.9.26`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-topology/v/4.7.15"}}>
          {`@patternfly/react-topology@4.7.15`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-virtualized-extension/v/4.6.15"}}>
          {`@patternfly/react-virtualized-extension@4.6.15`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"components-20","size":"h3","className":"ws-title ws-h3"}}>
      {`Components`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Alert`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Cleaned up errors in tests (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5302"}}>
              {`#5302`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Application launcher:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Used common favorites util, moved util to helpers (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5267"}}>
              {`#5267`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Breadcrumb:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added render prop to breadcrumb item (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5189"}}>
              {`#5189`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Calendar month:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated to rely on base styles from react-core/dist/styles/base.css (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5251"}}>
              {`#5251`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Checkbox:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated to show error message if id is missing (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5292"}}>
              {`#5292`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Chip group:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added event handler prop for overflow-chip click (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5272"}}>
              {`#5272`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Code editor:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added new code editor component (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5294"}}>
              {`#5294`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Context selector:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Removed isHovered from item unit tests (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5306"}}>
              {`#5306`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Drawer:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added resize callback (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5319"}}>
              {`#5319`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed dragging problem on iframe when resizing drawer (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5331"}}>
              {`#5331`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Improved cursor responsiveness (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5328"}}>
              {`#5328`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed initial width not respecting min/max widths (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5313"}}>
              {`#5313`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed to stop panel content unmounting before collapse (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5330"}}>
              {`#5330`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Dual list selector:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added type=button to DualListSelectorListItem button (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5266"}}>
              {`#5266`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed to not pass custom handlers to root div (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5308"}}>
              {`#5308`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Empty state`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Cleaned up errors in tests (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5302"}}>
              {`#5302`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Jump links:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated to allow hrefs with spaces (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5223"}}>
              {`#5223`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Menu:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed sentence case for menu example (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5262"}}>
              {`#5262`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Navigation:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Made nav items keyboard and screen reader accessible (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5312"}}>
              {`#5312`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Number input:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Renamed Touchspin to NumberInput (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5338"}}>
              {`#5338`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Popover:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated to hide Popover when its trigger is scrolled out of view (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5318"}}>
              {`#5318`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Radio:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated to show error message if id is missing (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5292"}}>
              {`#5292`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Search input:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated to hide clear button when onClear function is not set (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5230"}}>
              {`#5230`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Select:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed crash when opened using enter with disabled options (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5258"}}>
              {`#5258`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Cleaned up errors in tests (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5302"}}>
              {`#5302`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Simple list:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added uncontrolled Simple list support (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5134"}}>
              {`#5134`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Slider:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added new slider component (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5358"}}>
              {`#5358`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Toggle group:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed bug with ToggleGroupItem button being clicked in form in modal closing modal (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5259"}}>
              {`#5259`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Toolbar:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added log viewer toolbar example (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5196"}}>
              {`#5196`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Wizard:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated to allow setting a custom width to the wizard modal (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5256"}}>
              {`#5256`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"access-console-extension-4","size":"h3","className":"ws-title ws-h3"}}>
      {`Access console extension`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Some minor CSS improvements (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5247"}}>
          {`#5247`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"charts-7","size":"h3","className":"ws-title ws-h3"}}>
      {`Charts`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Annotated Victory types for example docs (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5315"}}>
          {`#5315`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Fixed chart legend tooltip shown with no data (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5296"}}>
          {`#5296`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Fixed incorrect colorScale prop type (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5303"}}>
          {`#5303`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Updated so theme font must use token value (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5301"}}>
          {`#5301`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Fixed tooltip pointerLength error (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5245"}}>
          {`#5245`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"table-19","size":"h3","className":"ws-title ws-h3"}}>
      {`Table`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Updated to make empty state consistent across demos and examples (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5298"}}>
          {`#5298`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Fixed scope axe issue (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5253"}}>
          {`#5253`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"topology-9","size":"h3","className":"ws-title ws-h3"}}>
      {`Topology`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Adjusted topology node layout when new nodes are added (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5249"}}>
          {`#5249`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Prevented context sub menus from overflowing viewport (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5271"}}>
          {`#5271`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"other-20","size":"h3","className":"ws-title ws-h3"}}>
      {`Other`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Chore:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added linting rule to disallow nested ternaries (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5255"}}>
              {`#5255`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Demos:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Enabled static drawer open on mobile view in primary detail demo (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5311"}}>
              {`#5311`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added wizard demos to match core (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5325"}}>
              {`#5325`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Deps:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated dependency theme-patternfly-org to v0.3.5 (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5228"}}>
              {`#5228`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated to use react 17 (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5111"}}>
              {`#5111`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"2020.16-release-notes-2020-12-11","size":"h2","className":"ws-title ws-h2"}}>
      {`2020.16 release notes (2020-12-11)`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-catalog-view-extension/v/4.8.126"}}>
          {`@patternfly/react-catalog-view-extension@4.8.126`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-charts/v/6.12.12"}}>
          {`@patternfly/react-charts@6.12.12`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-core/v/4.84.4"}}>
          {`@patternfly/react-core@4.84.4`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-icons/v/4.7.22"}}>
          {`@patternfly/react-icons@4.7.22`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-inline-edit-extension/v/4.5.187"}}>
          {`@patternfly/react-inline-edit-extension@4.5.187`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-styles/v/4.7.22"}}>
          {`@patternfly/react-styles@4.7.22`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-table/v/4.19.45"}}>
          {`@patternfly/react-table@4.19.45`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-tokens/v/4.9.22"}}>
          {`@patternfly/react-tokens@4.9.22`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-topology/v/4.6.91"}}>
          {`@patternfly/react-topology@4.6.91`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-virtualized-extension/v/4.5.171"}}>
          {`@patternfly/react-virtualized-extension@4.5.171`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"components-21","size":"h3","className":"ws-title ws-h3"}}>
      {`Components`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Alert:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added support for custom icon (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5140"}}>
              {`#5140`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Application launcher:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Made options menu and application launcher accessible in JAWS (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5136"}}>
              {`#5136`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Calendar month:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed to rely on base styles from react-core/dist/styles/base.css (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5251"}}>
              {`#5251`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Clipboard copy:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed arrow orientation for expanded clipboard copy (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5191"}}>
              {`#5191`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Date picker:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed bugs and added range picker demo (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5184"}}>
              {`#5184`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated to Forward popover props (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5160"}}>
              {`#5160`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Removed date-fns and allow more customization (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5161"}}>
              {`#5161`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Description list:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added support for auto fit (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5113"}}>
              {`#5113`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Changed autoMinFitModifier to autoFitMinModifier (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5227"}}>
              {`#5227`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Drawer:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added splitter feature (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5193"}}>
              {`#5193`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Dual list selector:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added support for trees and checkboxes (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5207"}}>
              {`#5207`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Form:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Tidied form examples (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5172"}}>
              {`#5172`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Jump links:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added offset prop (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5233"}}>
              {`#5233`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Menu:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added cypress tests and integration demos (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5202"}}>
              {`#5202`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated cypress tests (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5225"}}>
              {`#5225`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated to allow consumer to add search input/text input (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5211"}}>
              {`#5211`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Popover:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated to allow close from content (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5173"}}>
              {`#5173`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Options menu:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Made options menu and application launcher accessible in JAWS (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5136"}}>
              {`#5136`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Text area:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added support for isDisabled (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5107"}}>
              {`#5107`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Text input:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Removed button and React.Fragment from the ref example (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5176"}}>
              {`#5176`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Time picker:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added basic time picker (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5216"}}>
              {`#5216`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Tree view:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed various bugs (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5128"}}>
              {`#5128`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"access-console-extension-5","size":"h3","className":"ws-title ws-h3"}}>
      {`Access console extension`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Replaced novnc-core usage with the original @novnc/novnc (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5208"}}>
          {`#5208`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"chart","size":"h3","className":"ws-title ws-h3"}}>
      {`Chart`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Replaced victory with victory-zoom-container (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5179"}}>
          {`#5179`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Fixed interactive legend example tooltips (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5204"}}>
          {`#5204`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Bumped victory and moved victory dependency to demo app (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5178"}}>
          {`#5178`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Fixed tooltip pointer length error (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5245"}}>
          {`#5245`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"table-20","size":"h3","className":"ws-title ws-h3"}}>
      {`Table`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Added table favorites feature (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5213"}}>
          {`#5213`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Added cypress tests for favorites (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5222"}}>
          {`#5222`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"topology-10","size":"h3","className":"ws-title ws-h3"}}>
      {`Topology`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Adjusted topology node layout when new nodes are added (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5249"}}>
          {`#5249`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"other-21","size":"h3","className":"ws-title ws-h3"}}>
      {`Other`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Chore:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated dependency theme-patternfly-org to v0.2.11 (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5080"}}>
              {`#5080`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed @patternfly/react-icons/createIcon import issue (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5163"}}>
              {`#5163`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Moved react-datetime to react-core (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5201"}}>
              {`#5201`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated react-core copyStyles.js (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5166"}}>
              {`#5166`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed focus trap dependency (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5236"}}>
              {`#5236`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"2020.15-release-notes-2020-11-17","size":"h2","className":"ws-title ws-h2"}}>
      {`2020.15 release notes (2020-11-17)`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-catalog-view-extension/v/4.8.105"}}>
          {`@patternfly/react-catalog-view-extension@4.8.105`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-charts/v/6.12.2"}}>
          {`@patternfly/react-charts@6.12.2`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-core/v/4.79.2"}}>
          {`@patternfly/react-core@4.79.2`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-icons/v/4.7.18"}}>
          {`@patternfly/react-icons@4.7.18`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-inline-edit-extension/v/4.5.166"}}>
          {`@patternfly/react-inline-edit-extension@4.5.166`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-styles/v/4.7.16"}}>
          {`@patternfly/react-styles@4.7.16`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-table/v/4.19.24"}}>
          {`@patternfly/react-table@4.19.24`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-tokens/v/4.9.18"}}>
          {`@patternfly/react-tokens@4.9.18`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-topology/v/4.6.69"}}>
          {`@patternfly/react-topology@4.6.69`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-virtualized-extension/v/4.5.150"}}>
          {`@patternfly/react-virtualized-extension@4.5.150`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"components-22","size":"h3","className":"ws-title ws-h3"}}>
      {`Components`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Action list:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added action list component (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5112"}}>
              {`#5112`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Card:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added expandable card, move tests (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5093"}}>
              {`#5093`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added keyboard interaction a11y test, clean up docs (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5082"}}>
              {`#5082`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Checkbox:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed Typescript type for isChecked prop so it allows null (indeterminate) (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5148"}}>
              {`#5148`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Data list:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed to respect isDisabled for dragging (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5052"}}>
              {`#5052`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Dual list selector:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added new component (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5120"}}>
              {`#5120`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Dropdown:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Update disabled dropdown items for accessability (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5044"}}>
              {`#5044`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Form:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added more tests around keyboard interactivity in forms (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5083"}}>
              {`#5083`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Jump links:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added jump links component (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5089"}}>
              {`#5089`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Menu:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added new menu component (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4847"}}>
              {`#4847`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Modal:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added/updated cypress tests for modal (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5081"}}>
              {`#5081`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Navigation:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Moved page html demos to navigation component (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5109"}}>
              {`#5109`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Page:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Moved page html demos to navigation component (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5109"}}>
              {`#5109`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Skeleton:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated skeleton examples (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5072"}}>
              {`#5072`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Splitter:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Removed splitter component (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5105"}}>
              {`#5105`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Tree view:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added support for indeterminate checkboxes without requiring consumer to use refs (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5150"}}>
              {`#5150`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Toolbar:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added flag to match page insets (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5098"}}>
              {`#5098`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated breakpoints and formatting examples. Created collapsed variant. (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5123"}}>
              {`#5123`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Touchspin:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added touchspin component (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5115"}}>
              {`#5115`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"access-console-extension-6","size":"h3","className":"ws-title ws-h3"}}>
      {`Access console extension`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Ported react-console from PF3 branch - move to typescript and utilize PF4 components (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4907"}}>
          {`#4907`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Removed css imports (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5147"}}>
          {`#5147`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"catalog-view-extension-2","size":"h3","className":"ws-title ws-h3"}}>
      {`Catalog view extension`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Fixed typings in filter side panel category item (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5145"}}>
          {`#5145`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"date-time","size":"h3","className":"ws-title ws-h3"}}>
      {`Date time`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Date picker:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Add calendar component (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5026"}}>
              {`#5026`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Calendar month:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Handle undefined onToggle and add docs note (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5143"}}>
              {`#5143`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"table-21","size":"h3","className":"ws-title ws-h3"}}>
      {`Table`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Added composable table components (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4950"}}>
          {`#4950`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Added table info transform (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5075"}}>
          {`#5075`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Fixed to set button type on compoundExpand transform button (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5058"}}>
          {`#5058`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Fixed issues related to tables with an ID column (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5152"}}>
          {`#5152`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"virtualized-extension-1","size":"h3","className":"ws-title ws-h3"}}>
      {`Virtualized extension`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Added virtualized examples with composable components (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5122"}}>
          {`#5122`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"other-22","size":"h3","className":"ws-title ws-h3"}}>
      {`Other`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Chore:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Cleanup dependencies (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5060"}}>
              {`#5060`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Bumped Victory package (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5116"}}>
              {`#5116`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed circular deps (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5086"}}>
              {`#5086`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed example codesandbox (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5065"}}>
              {`#5065`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Demos:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added sticky bottom pagination to the card demo (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5000"}}>
              {`#5000`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Docs:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Add missing fieldId prop in sample code (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5059"}}>
              {`#5059`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Update getting-started.md (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5062"}}>
              {`#5062`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Removed get started, add developer resources, moved release notes & upgrade guide (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5091"}}>
              {`#5091`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"2020.14-release-notes-2020-10-27","size":"h2","className":"ws-title ws-h2"}}>
      {`2020.14 release notes (2020-10-27)`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-catalog-view-extension/v/4.8.89"}}>
          {`@patternfly/react-catalog-view-extension@4.8.89`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-charts/v/6.11.7"}}>
          {`@patternfly/react-charts@6.11.7`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-core/v/4.75.2"}}>
          {`@patternfly/react-core@4.75.2`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-icons/v/4.7.16"}}>
          {`@patternfly/react-icons@4.7.16`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-inline-edit-extension/v/4.5.147"}}>
          {`@patternfly/react-inline-edit-extension@4.5.147`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-styles/v/4.7.12"}}>
          {`@patternfly/react-styles@4.7.12`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-table/v/4.19.5"}}>
          {`@patternfly/react-table@4.19.5`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-tokens/v/4.9.16"}}>
          {`@patternfly/react-tokens@4.9.16`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-topology/v/4.6.54"}}>
          {`@patternfly/react-topology@4.6.54`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-virtualized-extension/v/4.5.134"}}>
          {`@patternfly/react-virtualized-extension@4.5.134`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"components-23","size":"h3","className":"ws-title ws-h3"}}>
      {`Components`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Alert:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added tooltips to truncated titles (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5043"}}>
              {`#5043`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added support for callback on alert timeout (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5014"}}>
              {`#5014`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Backdrop:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added backdrop examples (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5009"}}>
              {`#5009`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Button:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed sandbox for button examples with tooltips (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5033"}}>
              {`#5033`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Context selector:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added footer to selector (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4976"}}>
              {`#4976`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Data list:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added documentation for properties of DataListDragButton (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5047"}}>
              {`#5047`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added expand/collapse all (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5034"}}>
              {`#5034`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Exposed grid modifiers as properties (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4969"}}>
              {`#4969`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed to cancel moving for invalid drops (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4996"}}>
              {`#4996`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Converted DataListAction to functional component (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4947"}}>
              {`#4947`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Date picker:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Exposed date picker input (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5011"}}>
              {`#5011`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Dropdown:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Tested and update dropdown to work better in JAWS (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4951"}}>
              {`#4951`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Empty state:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added extra small variation (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5012"}}>
              {`#5012`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Removed duplicate example, use title case (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4954"}}>
              {`#4954`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Form:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added FormAlert, isLimitWidth, and allowed helper text above field (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5036"}}>
              {`#5036`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added FormSection component (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4971"}}>
              {`#4971`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Input group:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated to allow string children (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4963"}}>
              {`#4963`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Label:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added tooltip to truncated text (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5007"}}>
              {`#5007`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Label group:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated to always contain pf-c-label-group__main (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4970"}}>
              {`#4970`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Modal:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added help section to the modal header (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5002"}}>
              {`#5002`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Removed duplicate pf-c-modal-box__title from ModalContent (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4980"}}>
              {`#4980`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added alert variation (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4939"}}>
              {`#4939`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Navigation:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed aria label not getting applied (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4944"}}>
              {`#4944`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed selectors for dark background (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4952"}}>
              {`#4952`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added OUIA props into NavExpandable (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4930"}}>
              {`#4930`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Notification drawer:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added tooltips to truncated titles (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5043"}}>
              {`#5043`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Page:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated for page section enhancements (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5025"}}>
              {`#5025`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Pagination:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added sticky modifier flag (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4977"}}>
              {`#4977`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Select:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated to display label and not value in typeahead (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4916"}}>
              {`#4916`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed to skip the divider children in getDisplay (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4998"}}>
              {`#4998`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated to allow custom chip render props in the multi typeahead select (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5031"}}>
              {`#5031`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Skeleton:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added screen reader text to skeleton (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5032"}}>
              {`#5032`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Splitter:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added Splitter component (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5051"}}>
              {`#5051`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Tab:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed so tab component properties show in the docs (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4851"}}>
              {`#4851`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Text area:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added support for passing a ref (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4953"}}>
              {`#4953`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Toggle group:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added support for text and icon (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4999"}}>
              {`#4999`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Tree view:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Replaced button wrapper around actions with a div (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4967"}}>
              {`#4967`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Wizard:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated to export WizardContext  (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4933"}}>
              {`#4933`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"catalog-view-extension-3","size":"h3","className":"ws-title ws-h3"}}>
      {`Catalog view extension`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Fixed example css selectors (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4966"}}>
          {`#4966`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"chart-0","size":"h3","className":"ws-title ws-h3"}}>
      {`Chart`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Fixed example button location (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4993"}}>
          {`#4993`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Fixed legend example size (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4995"}}>
          {`#4995`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Fixed stack chart example size (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4994"}}>
          {`#4994`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Fixed legend tooltip example (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5006"}}>
          {`#5006`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"table-22","size":"h3","className":"ws-title ws-h3"}}>
      {`Table`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Fixed compound expandable data labels (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5017"}}>
          {`#5017`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Updated demo to show expand/collapse all examples (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5030"}}>
          {`#5030`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Reverted table type definitions (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5158"}}>
          {`#5158`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"topology-11","size":"h3","className":"ws-title ws-h3"}}>
      {`Topology`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Added notification on graph position/scale/extent changes (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5004"}}>
          {`#5004`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Updated to not update nodes on layout when fixed (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4978"}}>
          {`#4978`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Fixed for issue when dragging nodes that get re-created (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4975"}}>
          {`#4975`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"other-23","size":"h3","className":"ws-title ws-h3"}}>
      {`Other`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Chore:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed linting errors in nav and modal demos (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5015"}}>
              {`#5015`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added keyboard interactivity test for button (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5037"}}>
              {`#5037`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added git hook for linting (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/5003"}}>
              {`#5003`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed typescript complaining about missing default export when importing React (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4938"}}>
              {`#4938`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Deps:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Pinned dependency theme-patternfly-org to 0.1.25 (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4986"}}>
              {`#4986`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Locked tslib to 1.13.0 for consumers (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4981"}}>
              {`#4981`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Bumped Victory pkgs (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4992"}}>
              {`#4992`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Docs:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Bumped theme (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4984"}}>
              {`#4984`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added virtualized extension back to site (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4972"}}>
              {`#4972`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"2020.13-release-notes-2020-10-06","size":"h2","className":"ws-title ws-h2"}}>
      {`2020.13 release notes (2020-10-06)`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-catalog-view-extension/v/4.8.60"}}>
          {`@patternfly/react-catalog-view-extension@4.8.60`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-charts/v/6.10.4"}}>
          {`@patternfly/react-charts@6.10.4`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-core/v/4.63.3"}}>
          {`@patternfly/react-core@4.63.3`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-icons/v/4.7.11"}}>
          {`@patternfly/react-icons@4.7.11`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-inline-edit-extension/v/4.5.117"}}>
          {`@patternfly/react-inline-edit-extension@4.5.117`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-styles/v/4.7.8"}}>
          {`@patternfly/react-styles@4.7.8`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-table/v/4.18.14"}}>
          {`@patternfly/react-table@4.18.14`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-tokens/v/4.9.12"}}>
          {`@patternfly/react-tokens@4.9.12`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-topology/v/4.6.25"}}>
          {`@patternfly/react-topology@4.6.25`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-virtualized-extension/v/4.5.105"}}>
          {`@patternfly/react-virtualized-extension@4.5.105`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"components-24","size":"h3","className":"ws-title ws-h3"}}>
      {`Components`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Button:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added support for spinner in button (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4837"}}>
              {`#4837`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added support for warning variant (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4829"}}>
              {`#4829`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added support for inline link variation that acts like a link (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4859"}}>
              {`#4859`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Chip group:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added main div to chip group to fix close button wrapping (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4873"}}>
              {`#4873`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Data list:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added draggable feature for basic list (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4852"}}>
              {`#4852`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added support for text modifiers (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4846"}}>
              {`#4846`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added ref to omit list (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4948"}}>
              {`#4948`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated aria of data list (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4913"}}>
              {`#4913`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Date picker:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added basic date picker (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4888"}}>
              {`#4888`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Dropdown:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed indeterminate warning in dropdown toggle checkbox(`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4844"}}>
              {`#4844`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added more OUIA props into dropdown component (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4754"}}>
              {`#4754`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Deprecated the unused openOnEnter prop and removed unused isFocused and isHovered from the dropdown toggle (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4843"}}>
              {`#4843`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Label:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added support for React router (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4934"}}>
              {`#4934`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Label group:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added label group main div for categories (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4923"}}>
              {`#4923`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Modal:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added top align to modal (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4871"}}>
              {`#4871`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Nav:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added OUIA support into nav item (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4769"}}>
              {`#4769`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Notification drawer:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added default variation to notification items (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4792"}}>
              {`#4792`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Removed unused import (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4843"}}>
              {`#4843`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Page:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Replaced hasNoPadding property in the documentation example (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4848"}}>
              {`#4848`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed handleMainClick function signature (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4843"}}>
              {`#4843`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Progress:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added warning variant (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4834"}}>
              {`#4834`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added truncation (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4842"}}>
              {`#4842`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Select:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added support for divider in select (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4772"}}>
              {`#4772`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Cleaned up some typeahead behaviors (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4864"}}>
              {`#4864`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed grouped Select generating invalid HTML (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4919"}}>
              {`#4919`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added support to pass chip group props on typeaheadmulti variant (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4855"}}>
              {`#4855`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated to return the string value for select chips (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4915"}}>
              {`#4915`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Passed aria-label / aria-labelledby to the `}
            <code {...{"className":"ws-code"}}>
              {`<ul role="listbox">`}
            </code>
            {` to prevent axe issues (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4931"}}>
              {`#4931`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated to remove the clear button button when onClear function is not specified for typeahead (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4887"}}>
              {`#4887`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Tabs:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added support for light scheme variant in Tabs && TabContent (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4832"}}>
              {`#4832`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Conditionally render aria-controls when mountOnEnter (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4796"}}>
              {`#4796`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Tooltip`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated to export TooltipProps as a type to help babel (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4854"}}>
              {`#4854`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"catalog-view-extension-4","size":"h3","className":"ws-title ws-h3"}}>
      {`Catalog view extension`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Added back catalogue items (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4940"}}>
          {`#4940`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"charts-8","size":"h3","className":"ws-title ws-h3"}}>
      {`Charts`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Replaced or used exact lodash imports (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4830"}}>
          {`#4830`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"icons-1","size":"h3","className":"ws-title ws-h3"}}>
      {`Icons`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Reverted support for svg alt tags (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4935"}}>
          {`#4935`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"table-23","size":"h3","className":"ws-title ws-h3"}}>
      {`Table`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Fixed expandable cell content always being on `}
        <code {...{"className":"ws-code"}}>
          {`<td>`}
        </code>
        {` (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4899"}}>
          {`#4899`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Added support for single row radio select (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4925"}}>
          {`#4925`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Replaced or used exact lodash imports (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4830"}}>
          {`#4830`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"topology-12","size":"h3","className":"ws-title ws-h3"}}>
      {`Topology`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Fixed exports (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4927"}}>
          {`#4927`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Fixed selector for cancelling dnd (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4850"}}>
          {`#4850`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Updated to wrap drag event handlers in actions (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4826"}}>
          {`#4826`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"other-24","size":"h3","className":"ws-title ws-h3"}}>
      {`Other`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Chore:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Configured Renovate (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4889"}}>
              {`#4889`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed and re-added PatternFly a11y to CI (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4879"}}>
              {`#4879`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Removed most warnings generated when building the docs (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4911"}}>
              {`#4911`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Use new doc theme in workspace (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4840"}}>
              {`#4840`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added transformer-cjs-imports (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4910"}}>
              {`#4910`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Upgrade react-hooks (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4857"}}>
              {`#4857`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Removed config from dependabot (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4908"}}>
              {`#4908`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed build to use same patternfly versions (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4928"}}>
              {`#4928`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Demos:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed component padding in primary detail demo (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4808"}}>
              {`#4808`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Demo app:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Replaced CRA with webpack and ts-loader (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4877"}}>
              {`#4877`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Deps:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Pinned dependency @patternfly/patternfly-a11y to 2.0.10 (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4895"}}>
              {`#4895`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated dependency @patternfly/patternfly-a11y to v2.0.11 (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4898"}}>
              {`#4898`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Bumped security deps and regenerate lockfile (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4794"}}>
              {`#4794`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Docs:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Changed overview to get-started (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4862"}}>
              {`#4862`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Removed out of date links from the readme (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4921"}}>
              {`#4921`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed broken links (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4870"}}>
              {`#4870`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"pf3-0","size":"h3","className":"ws-title ws-h3"}}>
      {`PF3`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Vertical nav:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updates to not handle modified clicks on VerticalNav links (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4747"}}>
              {`#4747`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"2020.12-release-notes-2020-09-17","size":"h2","className":"ws-title ws-h2"}}>
      {`2020.12 release notes (2020-09-17)`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-catalog-view-extension/v/4.8.31"}}>
          {`@patternfly/react-catalog-view-extension@4.8.31`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-charts/v/6.9.8"}}>
          {`@patternfly/react-charts@6.9.8`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-core/v/4.50.2"}}>
          {`@patternfly/react-core@4.50.2`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-icons/v/4.7.6"}}>
          {`@patternfly/react-icons@4.7.6`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-inline-edit-extension/v/4.5.87"}}>
          {`@patternfly/react-inline-edit-extension@4.5.87`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-styles/v/4.7.5"}}>
          {`@patternfly/react-styles@4.7.5`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-table/v/4.16.20"}}>
          {`@patternfly/react-table@4.16.20`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-tokens/v/4.9.8"}}>
          {`@patternfly/react-tokens@4.9.8`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-topology/v/4.5.14"}}>
          {`@patternfly/react-topology@4.5.14`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-virtualized-extension/v/4.5.76"}}>
          {`@patternfly/react-virtualized-extension@4.5.76`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"components-25","size":"h3","className":"ws-title ws-h3"}}>
      {`Components`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Card:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added ability to customize card title and support heading element (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4761"}}>
              {`#4761`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Chip Group:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added OUIA props into chip group (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4749"}}>
              {`#4749`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Drawer:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added bottom panel variation (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4771"}}>
              {`#4771`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Dropdown:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed indeterminate warning in dropdown toggle checkbox (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4844"}}>
              {`#4844`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Label group:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added label group component (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4775"}}>
              {`#4775`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Nav:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added href to nav examples (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4789"}}>
              {`#4789`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Notification drawer:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added x close button to notification drawer (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4739"}}>
              {`#4739`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Page:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Hid PageSideBar onClick on mobile when isManagedSidebar is true (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4781"}}>
              {`#4781`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Popover:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added header cell information for tooltip/popover (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4778"}}>
              {`#4778`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Select:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added support for favorites (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4642"}}>
              {`#4642`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Skeleton:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added skeleton component (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4755"}}>
              {`#4755`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Tabs:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Handled activeKey props and update with mountOnEnter on tabs (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4806"}}>
              {`#4806`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated TabButton and TabContent with OUIA (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4743"}}>
              {`#4743`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Tests:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated drawer snapshots (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4814"}}>
              {`#4814`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Toolbar:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added insets property (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4757"}}>
              {`#4757`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Tooltip:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added aria-labels to tooltip example checkboxes (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4788"}}>
              {`#4788`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added header cell information for tooltip/popover (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4778"}}>
              {`#4778`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"topology-13","size":"h3","className":"ws-title ws-h3"}}>
      {`Topology`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Enabled saving current topology graph model (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4690"}}>
          {`#4690`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Wrapped drag event handlers in actions (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4826"}}>
          {`#4826`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"other-25","size":"h3","className":"ws-title ws-h3"}}>
      {`Other`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Chore:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Used updated icons (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4764"}}>
              {`#4764`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added better ouia defaults (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4746"}}>
              {`#4746`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Deps:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Bump prismjs from 1.17.1 to 1.21.0 (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4675"}}>
              {`#4675`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Docs:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Marked search input as beta (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4774"}}>
              {`#4774`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Demos:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Changed double dashes to single in examples in master detail demo (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4804"}}>
              {`#4804`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"2020.11-release-notes-2020-08-26","size":"h2","className":"ws-title ws-h2"}}>
      {`2020.11 release notes (2020-08-26)`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-catalog-view-extension/v/4.8.18"}}>
          {`@patternfly/react-catalog-view-extension@4.8.18`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-charts/v/6.9.6"}}>
          {`@patternfly/react-charts@6.9.6`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-core/v/4.47.0"}}>
          {`@patternfly/react-core@4.47.0`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-icons/v/4.7.4"}}>
          {`@patternfly/react-icons@4.7.4`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-inline-edit-extension/v/4.5.74"}}>
          {`@patternfly/react-inline-edit-extension@4.5.74`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-styles/v/4.7.3"}}>
          {`@patternfly/react-styles@4.7.3`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-table/v/4.16.7"}}>
          {`@patternfly/react-table@4.16.7`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-tokens/v/4.9.6"}}>
          {`@patternfly/react-tokens@4.9.6`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-topology/v/4.4.75"}}>
          {`@patternfly/react-topology@4.4.75`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-virtualized-extension/v/4.5.63"}}>
          {`@patternfly/react-virtualized-extension@4.5.63`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"components-26","size":"h3","className":"ws-title ws-h3"}}>
      {`Components`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Alert:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added support to truncate title (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4399"}}>
              {`#4399`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Label:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added no overflow prop (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4680"}}>
              {`#4680`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Modal:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added medium variant (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4678"}}>
              {`#4678`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Notification drawer:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added support to truncate title (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4399"}}>
              {`#4399`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added formatHeaderText prop to support customize notification drawer header text (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4684"}}>
              {`#4684`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Page:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added width limit prop (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4686"}}>
              {`#4686`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added missing tertiary nav demo, integration, and cypress test (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4707"}}>
              {`#4707`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Search input:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Use title case id in docs (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4725"}}>
              {`#4725`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Tabs:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added classNames to tab (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4578"}}>
              {`#4578`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Text input:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added helper util for left trim (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4691"}}>
              {`#4691`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Tile:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added new tile component (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4610"}}>
              {`#4610`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Toggle group:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added new toggle group component (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4702"}}>
              {`#4702`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Tree view:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added new tree view component (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4701"}}>
              {`#4701`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"catalog-view-extension-5","size":"h3","className":"ws-title ws-h3"}}>
      {`Catalog view extension`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Catalog tile:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added children prop (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4674"}}>
              {`#4674`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"table-24","size":"h3","className":"ws-title ws-h3"}}>
      {`Table`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Fixed table showing cell tooltips on non text cells (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4689"}}>
          {`#4689`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"other-26","size":"h3","className":"ws-title ws-h3"}}>
      {`Other`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Demos:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Renamed master detail demo to primary-detail (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4703"}}>
              {`#4703`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"2020.10-release-notes-2020-08-17","size":"h2","className":"ws-title ws-h2"}}>
      {`2020.10 release notes (2020-08-17)`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-catalog-view-extension/v/4.8.5"}}>
          {`@patternfly/react-catalog-view-extension@4.8.5`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-charts/v/6.9.4"}}>
          {`@patternfly/react-charts@6.9.4`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-core/v/4.40.4"}}>
          {`@patternfly/react-core@4.40.4`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-icons/v/4.7.2"}}>
          {`@patternfly/react-icons@4.7.2`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-inline-edit-extension/v/4.5.61"}}>
          {`@patternfly/react-inline-edit-extension@4.5.61`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-styles/v/4.7.2"}}>
          {`@patternfly/react-styles@4.7.2`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-table/v/4.15.5"}}>
          {`@patternfly/react-table@4.15.5`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-tokens/v/4.9.4"}}>
          {`@patternfly/react-tokens@4.9.4`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-topology/v/4.4.63"}}>
          {`@patternfly/react-topology@4.4.63`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-virtualized-extension/v/4.5.51"}}>
          {`@patternfly/react-virtualized-extension@4.5.51`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"components-27","size":"h3","className":"ws-title ws-h3"}}>
      {`Components`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Button:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added isLarge modifier prop (call to action) (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4596"}}>
              {`#4596`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Chip group:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added type button to overflow chip button (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4608"}}>
              {`#4608`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Changed TimesIcon to TimesCircleIcon in Chips (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4550"}}>
              {`#4550`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Description list:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added new description list component (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4586"}}>
              {`#4586`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Clipboard copy:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated to maintain line breaks & spaces when copying text (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4619"}}>
              {`#4619`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Dropdown`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated dropdown with image example to use an avatar (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4566"}}>
              {`#4566`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Expandable section:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Made children optional (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4621"}}>
              {`#4621`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Hint:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added hint components (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4595"}}>
              {`#4595`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Modal:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated to ensure getElement does not return null (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4544"}}>
              {`#4544`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Nav expandable:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Converted nav expandable to button (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4512"}}>
              {`#4512`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Notification badge:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added needs attention state and count (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4516"}}>
              {`#4516`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Notification drawer:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed accessibility issues and add accessibility test cases (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4466"}}>
              {`#4466`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Overflow menu:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated to allow0 passing dropdown item props to overflow menu dropdown item (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4536"}}>
              {`#4536`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Page`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed breakpoint typo in PageHeaderToolsItem: (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4634"}}>
              {`#4634`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Used the correct type for the page context (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4576"}}>
              {`#4576`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Popover:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added reference prop (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4546"}}>
              {`#4546`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated to propagate clicks (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4585"}}>
              {`#4585`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Search input:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added new search input component (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4588"}}>
              {`#4588`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Select:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed maximum call stack size exceeded in a read-only typeahead Select field when pressing enter (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4616"}}>
              {`#4616`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed type error on undefined valueToCheck.toString (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4603"}}>
              {`#4603`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Allowed typeahead groups, fixed a few bugs around groups (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4622"}}>
              {`#4622`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed space/enter closing typeahead variants incorrectly (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4663"}}>
              {`#4663`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Use width prop in select (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4579"}}>
              {`#4579`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Toolbar:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Changed spelling of visiblity prop to visibility(`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4560"}}>
              {`#4560`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed so delete chip does not expects categoryKey as string (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4553"}}>
              {`#4553`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Tooltip:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added reference prop (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4546"}}>
              {`#4546`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Wizard:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Made wizard nav items more easily discoverable (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4425"}}>
              {`#4425`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"charts-9","size":"h3","className":"ws-title ws-h3"}}>
      {`Charts`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Updated chart imports (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4645"}}>
          {`#4645`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Updated Victory packages to support OUIA props (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4633"}}>
          {`#4633`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"table-25","size":"h3","className":"ws-title ws-h3"}}>
      {`Table`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Updated to custom properties for actions (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4559"}}>
          {`#4559`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"tokens-2","size":"h3","className":"ws-title ws-h3"}}>
      {`Tokens`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Added component index (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4572"}}>
          {`#4572`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Fixed .d.ts typo (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4669"}}>
          {`#4669`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"topology-14","size":"h3","className":"ws-title ws-h3"}}>
      {`Topology`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Moved @types to the dependencies list (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4569"}}>
          {`#4569`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Re-parented nodes with invalid parents to graph (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4629"}}>
          {`#4629`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"other-27","size":"h3","className":"ws-title ws-h3"}}>
      {`Other`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Chore:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed sentence case in 2020.09 notes (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4571"}}>
              {`#4571`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Bumped lodash to 4.17.19 (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4580"}}>
              {`#4580`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Replaced classnames with css function (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4582"}}>
              {`#4582`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Demos:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed demo headers and imports (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4607"}}>
              {`#4607`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added notification drawer demo (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4640"}}>
              {`#4640`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Docs:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated to use h3s for titles (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4570"}}>
              {`#4570`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added missing imports to React doc (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4627"}}>
              {`#4627`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Moved non-patternfly deps to devDeps in React docs (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4584"}}>
              {`#4584`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed title syntax in react docs (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4628"}}>
              {`#4628`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed typos in upgrade guide (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4601"}}>
              {`#4601`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"2020.09-release-notes-2020-07-17","size":"h2","className":"ws-title ws-h2"}}>
      {`2020.09 release notes (2020-07-17)`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-catalog-view-extension/v/4.5.1"}}>
          {`@patternfly/react-catalog-view-extension@4.5.1`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-charts/v/6.6.0"}}>
          {`@patternfly/react-charts@6.6.0`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-core/v/4.32.1"}}>
          {`@patternfly/react-core@4.32.1`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-icons/v/4.5.0"}}>
          {`@patternfly/react-icons@4.5.0`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-inline-edit-extension/v/4.5.28"}}>
          {`@patternfly/react-inline-edit-extension@4.5.28`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-styles/v/4.5.0"}}>
          {`@patternfly/react-styles@4.5.0`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-table/v/4.12.1"}}>
          {`@patternfly/react-table@4.12.1`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-tokens/v/4.6.0"}}>
          {`@patternfly/react-tokens@4.6.0`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-topology/v/4.4.30"}}>
          {`@patternfly/react-topology@4.4.30`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-virtualized-extension/v/4.5.20"}}>
          {`@patternfly/react-virtualized-extension@4.5.20`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"components-28","size":"h3","className":"ws-title ws-h3"}}>
      {`Components`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Alert:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added alert timeout functionality (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4510"}}>
              {`#4510`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added display name to the close action button (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4426"}}>
              {`#4426`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Button:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added support for small variation (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4433"}}>
              {`#4433`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Data list:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added support for action containers in data list (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4488"}}>
              {`#4488`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Drawer:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Renamed onMount to onExpand and add animation timeout (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4508"}}>
              {`#4508`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed small mistake in the documentation for drawer (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4473"}}>
              {`#4473`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Drawer panel content:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Update to not render children when hidden (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4500"}}>
              {`#4500`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Dropdown:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added description to Dropdown item (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4468"}}>
              {`#4468`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added support and documentation for styleChildren to dropdown item (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4476"}}>
              {`#4476`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Made the interactions in the demo more life-like (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4492"}}>
              {`#4492`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Expandable section:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Update to pass expandable value to onToggle (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4427"}}>
              {`#4427`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Form:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added warning state (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4554"}}>
              {`#4554`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Form select:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added warning state (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4554"}}>
              {`#4554`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Options menu:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed accessibility bug in plain with text disabled part (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4424"}}>
              {`#4424`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Page header tools:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated to make page header tools item visibility props optional (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4486"}}>
              {`#4486`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Popover:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Rewrote tooltip/popover to use popper (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4491"}}>
              {`#4491`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added tippyProps back so as not to cause breaking changes (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4543"}}>
              {`#4543`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updates to house popper dependencies, added tippy back as a dependency (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4565"}}>
              {`#4565`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Select:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added logic to handle SelectOptionObject in comparisons (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4469"}}>
              {`#4469`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added option description property (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4460"}}>
              {`#4460`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed typeahead button toggle propagation (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4472"}}>
              {`#4472`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated to handle missing select group label (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4464"}}>
              {`#4464`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed option with description on active display only value (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4503"}}>
              {`#4503`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Text area:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added warning state (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4554"}}>
              {`#4554`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Text input:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added warning state (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4554"}}>
              {`#4554`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Toolbar:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Used alignment prop instead of align in ToolbarItem (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4481"}}>
              {`#4481`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated docs to use overflow menu components (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4459"}}>
              {`#4459`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Tooltip:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Rewrote tooltip/popover to use popper (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4491"}}>
              {`#4491`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added tippyProps back so as not to cause breaking changes (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4543"}}>
              {`#4543`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updates to house popper dependencies, added tippy back as a dependency. Fixed pressing the enter key opens all tooltips on the page (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4565"}}>
              {`#4565`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"table-26","size":"h3","className":"ws-title ws-h3"}}>
      {`Table`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Added sticky header prop and demo (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4417"}}>
          {`#4417`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Published prop type interfaces in docs (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4461"}}>
          {`#4461`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"topology-15","size":"h3","className":"ws-title ws-h3"}}>
      {`Topology`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Added lost support for custom menu items in withCreateConnector (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4493"}}>
          {`#4493`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Bumped mobx versions in react-topology (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4442"}}>
          {`#4442`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Corrected mobx dependencies (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4487"}}>
          {`#4487`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Created connector drag spec configuration (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4529"}}>
          {`#4529`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"other-28","size":"h3","className":"ws-title ws-h3"}}>
      {`Other`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Chore:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added dependabot.yml (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4484"}}>
              {`#4484`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added card OUIA attributes (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4479"}}>
              {`#4479`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added radio OUIA attributes (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4482"}}>
              {`#4482`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed build on windows (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4475"}}>
              {`#4475`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated tag from prerelease-v4 to prerelease (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4539"}}>
              {`#4539`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Demos:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated docs to use overflow menu components in bulk select table, card view, master detail, pagination and table column management demos (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4459"}}>
              {`#4459`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Docs:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Removed theme="dark" from docs (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4485"}}>
              {`#4485`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"2020.08-release-notes-2020-06-24","size":"h2","className":"ws-title ws-h2"}}>
      {`2020.08 release notes (2020-06-24)`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-catalog-view-extension/v/4.4.8"}}>
          {`@patternfly/react-catalog-view-extension@4.4.8`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-charts/v/6.5.4"}}>
          {`@patternfly/react-charts@6.5.4`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-core/v/4.23.1"}}>
          {`@patternfly/react-core@4.23.1`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-icons/v/4.4.2"}}>
          {`@patternfly/react-icons@4.4.2`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-inline-edit-extension/v/4.5.7"}}>
          {`@patternfly/react-inline-edit-extension@4.5.7`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-styles/v/4.4.2"}}>
          {`@patternfly/react-styles@4.4.2`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-table/v/4.8.6"}}>
          {`@patternfly/react-table@4.8.6`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-tokens/v/4.5.2"}}>
          {`@patternfly/react-tokens@4.5.2`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-topology/v/4.4.8"}}>
          {`@patternfly/react-topology@4.4.8`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-virtualized-extension/v/4.4.8"}}>
          {`@patternfly/react-virtualized-extension@4.4.8`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"components-29","size":"h3","className":"ws-title ws-h3"}}>
      {`Components`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Application launcher:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updates for menuAppendTo prop in several components (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4414"}}>
              {`#4414`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Banner:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added banner component (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4408"}}>
              {`#4408`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added beta bete flag to docs (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4439"}}>
              {`#4439`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Breadcrumb:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Made temporary fix for spacing (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4368"}}>
              {`#4368`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed console.warn when using a BreadcrumbItem component (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4288"}}>
              {`#4288`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Button:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added isAriaDisabled prop (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3801"}}>
              {`#3801`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Context selector:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updates for menuAppendTo prop in several components (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4414"}}>
              {`#4414`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Divider:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added support for insets to the divider (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4410"}}>
              {`#4410`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Drawer:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated so opening drawer can send focus to the drawer (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4328"}}>
              {`#4328`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Dropdown:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated to allow dropdown to be appended to a higher DOM element (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4348"}}>
              {`#4348`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed split button styling (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4347"}}>
              {`#4347`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated to use popper for dropdown and select when menu is appended to another element (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4403"}}>
              {`#4403`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Flex layout:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Remove all references to FlexModifiers (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4384"}}>
              {`#4384`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Form:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added .pf-c-form`}
            <strong>
              {`group-control wrapper to .pf-c-form`}
            </strong>
            {`actions (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4405"}}>
              {`#4405`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Modal:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added tooltip to truncated modal titles (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4291"}}>
              {`#4291`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Changed modal size in example to variant (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4385"}}>
              {`#4385`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Nav expandable:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added style.modifiers.expandable (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4362"}}>
              {`#4362`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Notification drawer:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added streamlined notification drawer example to docs (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4312"}}>
              {`#4312`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Options menu:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed accessibility issue in plain with text (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4352"}}>
              {`#4352`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updates for menuAppendTo prop in several components (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4414"}}>
              {`#4414`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Overflow menu:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed accessibility issue on kebab toggle button (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4353"}}>
              {`#4353`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Page header tools:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Ensured PageHeaderToolsGroup visibility mods are optional (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4386"}}>
              {`#4386`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Select:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed filter clear button accessibility issue (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4331"}}>
              {`#4331`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed panel issue (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4340"}}>
              {`#4340`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Replaced all uses of value as default id of SelectOption (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4308"}}>
              {`#4308`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated to use popper for dropdown and select when menu is appended to another element (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4403"}}>
              {`#4403`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Spinner:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed className prop not getting applied properly (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4380"}}>
              {`#4380`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Title:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Import TitleSizes in title example (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4387"}}>
              {`#4387`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Toolbar`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Reverted show to breakpoint (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4343"}}>
              {`#4343`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"charts-10","size":"h3","className":"ws-title ws-h3"}}>
      {`Charts`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Aligned legend tooltip with flyout edge (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4398"}}>
          {`#4398`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Updated documentation. Replaced old DefinitelyTyped comments with links to victory types (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4376"}}>
          {`#4376`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Added an example showing how to embed HTML in a chart tooltip (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4379"}}>
          {`#4379`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Move dChartCursorTooltip to own directory (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4381"}}>
          {`#4381`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Updated tooltip legend to use Victory's activePoints (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4409"}}>
          {`#4409`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Added tooltip support for interactive legends (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4402"}}>
          {`#4402`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Fixed line height for the labels shown with the chart's tooltip legend. (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4419"}}>
          {`#4419`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Added support for a legend tooltip (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4371"}}>
          {`#4371`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Updated chart tooltip legend (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4375"}}>
          {`#4375`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Bumped Victory packages to version 34.3.12 (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4438"}}>
          {`#4438`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"table-27","size":"h3","className":"ws-title ws-h3"}}>
      {`Table`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Added inline editable dropdown (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4262"}}>
          {`#4262`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Removed data-label from expanded rows (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4307"}}>
          {`#4307`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Specified button type to avoid unwanted form submits (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4252"}}>
          {`#4252`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Updated property name to avoid error (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4320"}}>
          {`#4320`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"topology-16","size":"h3","className":"ws-title ws-h3"}}>
      {`Topology`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Added integration app examples for topology functionality (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4315"}}>
          {`#4315`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Made APIs more react friendly with hooks (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4342"}}>
          {`#4342`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Allowed a promise to be returned by the create connector callback (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4390"}}>
          {`#4390`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Updated to sync with OpenShift Console (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4317"}}>
          {`#4317`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"virtualized-extension-2","size":"h3","className":"ws-title ws-h3"}}>
      {`Virtualized extension`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Add filterable demo, fix for filtering+scrolling (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4389"}}>
          {`#4389`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"other-29","size":"h3","className":"ws-title ws-h3"}}>
      {`Other`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Chore:`}
        </strong>
      </li>
      <li {...{"className":"ws-li"}}>
        {`Publish to prerelease tag to NPM (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4355"}}>
          {`#4355`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Publish v3 branch to v3 tag to NPM (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4354"}}>
          {`#4354`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Removed call for yarn clean:pf3 fro package.json (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4356"}}>
          {`#4356`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Fixed no anonymous functions (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4391"}}>
          {`#4391`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Updates from OUIA audit (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4401"}}>
          {`#4401`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Docs:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated the git workflow in CONTRIBUTING.md (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4319"}}>
              {`#4319`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added upgrade guide (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4298"}}>
              {`#4298`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Removed footer from docs (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4327"}}>
              {`#4327`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Removed training.md since it is moved to patternfly-org repo (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4382"}}>
              {`#4382`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed broken links and references in README files caused by moving patternfly-3 packages to their own branch (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4332"}}>
              {`#4332`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Changelog:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added bash script for git (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4300"}}>
              {`#4300`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"2020.07-release-notes-2020-06-05","size":"h2","className":"ws-title ws-h2"}}>
      {`2020.07 release notes (2020-06-05)`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Packages released:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-catalog-view-extension/v/4.3.12"}}>
          {`@patternfly/react-catalog-view-extension@4.3.12`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-charts/v/6.3.9"}}>
          {`@patternfly/react-charts@6.3.9`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-core/v/4.18.5"}}>
          {`@patternfly/react-core@4.18.5`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-icons/v/4.3.5"}}>
          {`@patternfly/react-icons@4.3.5`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-inline-edit-extension/v/4.4.14"}}>
          {`@patternfly/react-inline-edit-extension@4.4.14`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-styles/v/4.3.4"}}>
          {`@patternfly/react-styles@4.3.4`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-table/v/4.5.7"}}>
          {`@patternfly/react-table@4.5.7`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-tokens/v/4.4.4"}}>
          {`@patternfly/react-tokens@4.4.4`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-topology/v/4.3.13"}}>
          {`@patternfly/react-topology@4.3.13`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-virtualized-extension/v/4.3.14"}}>
          {`@patternfly/react-virtualized-extension@4.3.14`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`This is our major release. Checkout our `}
      <PatternflyThemeLink {...{"to":"/documentation/react/overview/upgrade-guide"}}>
        {`upgrade guide`}
      </PatternflyThemeLink>
      {` for a list of breaking changes!`}
    </p>
    <AutoLinkHeader {...{"id":"2020.06-release-notes-2020-05-12","size":"h2","className":"ws-title ws-h2"}}>
      {`2020.06 release notes (2020-05-12)`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Packages released:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-catalog-view-extension/v/1.4.66"}}>
          {`@patternfly/react-catalog-view-extension@1.4.66`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-charts/v/5.3.21"}}>
          {`@patternfly/react-charts@5.3.21`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-core/v/3.158.1"}}>
          {`@patternfly/react-core@3.158.1`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-icons/v/3.15.17"}}>
          {`@patternfly/react-icons@3.15.17`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-inline-edit-extension/v/2.17.66"}}>
          {`@patternfly/react-inline-edit-extension@2.17.66`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-styles/v/3.7.14"}}>
          {`@patternfly/react-styles@3.7.14`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-table/v/2.28.47"}}>
          {`@patternfly/react-table@2.28.47`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-tokens/v/2.8.14"}}>
          {`@patternfly/react-tokens@2.8.14`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-topology/v/2.14.66"}}>
          {`@patternfly/react-topology@2.14.66`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-virtualized-extension/v/1.4.67"}}>
          {`@patternfly/react-virtualized-extension@1.4.67`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"components-30","size":"h3","className":"ws-title ws-h3"}}>
      {`Components`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Empty state:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added xl empty state to demo app and integration tests. (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4200"}}>
              {`#4200`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Notification drawer:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added new Notification Drawer Component (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4137"}}>
              {`#4137`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Page:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Made tabIndex optional (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4181"}}>
              {`#4181`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Select:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added placeholder text for inline filter (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4185"}}>
              {`#4185`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added missing import to docs (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4109"}}>
              {`#4109`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added "0" and "All" selected badging (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4186"}}>
              {`#4186`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Tabs:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated to Properly handle null Tab and TabContent (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4211"}}>
              {`#4211`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added integration test for showing/hiding tab button (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4205"}}>
              {`#4205`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated to properly check children before setting hidden (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4179"}}>
              {`#4179`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated to allow hiding tab buttons (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4196"}}>
              {`#4196`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"charts-11","size":"h3","className":"ws-title ws-h3"}}>
      {`Charts`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Fixed ChartDonut subTitleComponent being ignored in some cases(`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4206"}}>
          {`#4206`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"other-30","size":"h3","className":"ws-title ws-h3"}}>
      {`Other`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Demos:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added master detail demo (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4115"}}>
              {`#4115`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Utilities:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed fillTemplate ie11 compatibility (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4155"}}>
              {`#4155`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"2020.05-release-notes-2020-04-21","size":"h2","className":"ws-title ws-h2"}}>
      {`2020.05 release notes (2020-04-21)`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Packages released:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-catalog-view-extension/v/1.4.58"}}>
          {`@patternfly/react-catalog-view-extension@1.4.58`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-charts/v/5.3.19"}}>
          {`@patternfly/react-charts@5.3.19`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-core/v/3.153.13"}}>
          {`@patternfly/react-core@3.153.13`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-icons/v/3.15.16"}}>
          {`@patternfly/react-icons@3.15.16`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-inline-edit-extension/v/2.17.58"}}>
          {`@patternfly/react-inline-edit-extension@2.17.58`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-styles/v/3.7.13"}}>
          {`@patternfly/react-styles@3.7.13`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-table/v/2.28.39"}}>
          {`@patternfly/react-table@2.28.39`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-tokens/v/2.8.13"}}>
          {`@patternfly/react-tokens@2.8.13`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-topology/v/2.14.58"}}>
          {`@patternfly/react-topology@2.14.58`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-virtualized-extension/v/1.4.59"}}>
          {`@patternfly/react-virtualized-extension@1.4.59`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"components-31","size":"h3","className":"ws-title ws-h3"}}>
      {`Components`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Data toolbar:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added prop to enable removal of all chips in a filter category. (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4060"}}>
              {`#4060`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed max depth  (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4103"}}>
              {`#4103`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Dropdown:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed ref to show indeterminate checkbox in toggle (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3990"}}>
              {`#3990`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated to respect already passed props (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4016"}}>
              {`#4016`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Tooltip:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed Codesandbox examples (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4088"}}>
              {`#4088`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"other-31","size":"h3","className":"ws-title ws-h3"}}>
      {`Other`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Chore:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Removed promoted components from experimental index file (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4029"}}>
              {`#4029`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"2020.04-release-notes-2020-03-31","size":"h2","className":"ws-title ws-h2"}}>
      {`2020.04 release notes (2020-03-31)`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Packages released:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-catalog-view-extension/v/1.4.48"}}>
          {`@patternfly/react-catalog-view-extension@1.4.48`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-charts/v/5.3.18"}}>
          {`@patternfly/react-charts@5.3.18`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-core/v/3.153.3"}}>
          {`@patternfly/react-core@3.153.3`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-icons/v/3.15.15"}}>
          {`@patternfly/react-icons@3.15.15`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-inline-edit-extension/v/2.17.48"}}>
          {`@patternfly/react-inline-edit-extension@2.17.48`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-styles/v/3.7.12"}}>
          {`@patternfly/react-styles@3.7.12`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-table/v/2.28.29"}}>
          {`@patternfly/react-table@2.28.29`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-tokens/v/2.8.12"}}>
          {`@patternfly/react-tokens@2.8.12`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-topology/v/2.14.48"}}>
          {`@patternfly/react-topology@2.14.48`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-virtualized-extension/v/1.4.49"}}>
          {`@patternfly/react-virtualized-extension@1.4.49`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"components-32","size":"h3","className":"ws-title ws-h3"}}>
      {`Components`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`About modal:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Allowed custom aria-label for the close button (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3877"}}>
              {`#3877`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Alert:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Used context to set label (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3771"}}>
              {`#3771`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Card:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added Card View to demos (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3441"}}>
              {`#3441`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added wrapper to image to resize it properly (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3642"}}>
              {`#3642`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Drawer:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added width props, updated demo & integration test (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3979"}}>
              {`#3979`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Dropdown:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Removed duplicate prop (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3923"}}>
              {`#3923`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Cleaned console errors in Dropdown.test.tsx (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3861"}}>
              {`#3861`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Supported router link as DropdownItems through component API (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3995"}}>
              {`#3995`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Empty state:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added support for extra-large empty state (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3844"}}>
              {`#3844`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Select:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed group select options in single variant (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3838"}}>
              {`#3838`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Allowed count badge to be hidden in checkbox select (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3976"}}>
              {`#3976`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added logic for disabled default options for typeahead (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3895"}}>
              {`#3895`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"table-28","size":"h3","className":"ws-title ws-h3"}}>
      {`Table`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Fixed forward ref types (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3919"}}>
          {`#3919`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Added column management demo (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3942"}}>
          {`#3942`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"other-32","size":"h3","className":"ws-title ws-h3"}}>
      {`Other`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Docs:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Released docs to NPM for patternfly-org (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3941"}}>
              {`#3941`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Build:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Removed unused packages from repo (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3916"}}>
              {`#3916`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Created unified react-core dist (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3971"}}>
              {`#3971`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Created variables by file in react-tokens (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3896"}}>
              {`#3896`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Types:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed tippy types, remove copyTS (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3940"}}>
              {`#3940`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added in-house focusTrap (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3967"}}>
              {`#3967`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Removed a few usages of prop-types (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3968"}}>
              {`#3968`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"2020.03-release-notes-2020-03-10","size":"h2","className":"ws-title ws-h2"}}>
      {`2020.03 release notes (2020-03-10)`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Packages released:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-catalog-view-extension/v/1.4.29"}}>
          {`@patternfly/react-catalog-view-extension: 1.4.29`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-charts/v/5.3.12"}}>
          {`@patternfly/react-charts: 5.3.12`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-core/v/3.146.0"}}>
          {`@patternfly/react-core: 3.146.0`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-inline-edit-extension/v/2.17.29"}}>
          {`@patternfly/react-inline-edit-extension: 2.17.29`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-styles/v/3.7.8"}}>
          {`@patternfly/react-styles: 3.7.8`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-table/v/2.28.10"}}>
          {`@patternfly/react-table: 2.28.10`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-tokens/v/2.8.8"}}>
          {`@patternfly/react-tokens: 2.8.8`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-topology/v/2.14.29"}}>
          {`@patternfly/react-topology: 2.14.29`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-virtualized-extension/v/1.4.30"}}>
          {`@patternfly/react-virtualized-extension: 1.4.30`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-icons/v/3.15.11"}}>
          {`@patternfly/react-icons: 3.15.11`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"components-33","size":"h3","className":"ws-title ws-h3"}}>
      {`Components`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Background image:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Removed width attr from background image filter element (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3758"}}>
              {`#3758`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Data toolbar:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Cleaned up beta warning for data toolbar (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3755"}}>
              {`#3755`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Drawer:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added console warning to Drawer beta component (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3856"}}>
              {`#3856`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated drawer for Master/Detail support (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3884"}}>
              {`#3884`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Dropdown`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated to Destructure bubbleEvent from props to avoid it passing to button el (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3894"}}>
              {`#3894`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Button:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added link icon position for link buttons (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3798"}}>
              {`#3798`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Card:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added selectable and selected variation (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3587"}}>
              {`#3587`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Chip group:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added a tooltip to the Chipgroup label (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3826"}}>
              {`#3826`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Data list:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added compact data list (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3807"}}>
              {`#3807`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Data toolbar:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added support for key with categoryName. (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3880"}}>
              {`#3880`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Dropdown:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed keyboard selection of toggle causing selection of parent (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3816"}}>
              {`#3816`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`File upload:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added new beta file upload component (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3865"}}>
              {`#3865`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Input group:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated docs to be more readable (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3839"}}>
              {`#3839`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Modal:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added description property (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3821"}}>
              {`#3821`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Moved description to separate component (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3897"}}>
              {`#3897`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Pagination:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated to calculate navigation input according to last page (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3534"}}>
              {`#3534`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Select:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added inline filtering to checkbox select (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3843"}}>
              {`#3843`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fix panel checkbox labels (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3820"}}>
              {`#3820`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Switch:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated to avoid switch id override by props (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3706"}}>
              {`#3706`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Tabs:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated tabs with nav examples + add Tab component to props docs (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3527"}}>
              {`#3527`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Tooltip:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Removed TooltipContent from propComponents (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3800"}}>
              {`#3800`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Wizard:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Used patternfly-styles to set the no padding modifier (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3871"}}>
              {`#3871`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"catalog-view-extension-6","size":"h3","className":"ws-title ws-h3"}}>
      {`Catalog view extension`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Catalog tile:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Removed truncation and maxLength props (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3830"}}>
              {`#3830`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"other-33","size":"h3","className":"ws-title ws-h3"}}>
      {`Other`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Chore:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added experimental exports (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3775"}}>
              {`#3775`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Wrapped layout examples to fix codesandbox (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3818"}}>
              {`#3818`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Tested prerelease workflow (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3868"}}>
              {`#3868`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Removed exenv and lodash (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3882"}}>
              {`#3882`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added jest test generator (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3828"}}>
              {`#3828`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added experimental/components directory (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3764"}}>
              {`#3764`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Improved promote script (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3812"}}>
              {`#3812`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed react-docs version (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3879"}}>
              {`#3879`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated Gatsby theme for patternfly org (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3813"}}>
              {`#3813`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated versions in react-core for react-icons (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3760"}}>
              {`#3760`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated additional versions in react-core for react-icons (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3761"}}>
              {`#3761`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Docs:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated readme to match new guidelines (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3837"}}>
              {`#3837`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added GDPR banner to all pages (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3831"}}>
              {`#3831`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added page titles for react docs & react icons pages (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3851"}}>
              {`#3851`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed typo in README (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3769"}}>
              {`#3769`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Linting:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed eslint recommendations (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3858"}}>
              {`#3858`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added linting to react styles (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3723"}}>
              {`#3723`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added linting react tokens (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3725"}}>
              {`#3725`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Ouia:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated to not omit ouiaContext (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3872"}}>
              {`#3872`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"virtualized-extension-3","size":"h3","className":"ws-title ws-h3"}}>
      {`Virtualized extension`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Resolved linter errors (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3726"}}>
          {`#3726`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"pf3-1","size":"h3","className":"ws-title ws-h3"}}>
      {`PF3`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Chore:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Enabled releasing patternfly 3 (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3863"}}>
              {`#3863`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Removed patternfly-3 packages (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3852"}}>
              {`#3852`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Created patternfly-3 branch (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3846"}}>
              {`#3846`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"2020.02-release-notes-2020-02-18","size":"h2","className":"ws-title ws-h2"}}>
      {`2020.02 release notes (2020-02-18)`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Packages released:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-catalog-view-extension/v/1.4.11"}}>
          {`@patternfly/react-catalog-view-extension: 1.4.11`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-charts/v/5.3.5"}}>
          {`@patternfly/react-charts: 5.3.5`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-core/v/3.140.11"}}>
          {`@patternfly/react-core: 3.140.11`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-inline-edit-extension/v/2.17.11"}}>
          {`@patternfly/react-inline-edit-extension: 2.17.11`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-styles/v/3.7.4"}}>
          {`@patternfly/react-styles: 3.7.4`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-table/v/2.27.11"}}>
          {`@patternfly/react-table: 2.27.11`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-tokens/v/2.8.4"}}>
          {`@patternfly/react-tokens: 2.8.4`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-topology/v/2.14.11"}}>
          {`@patternfly/react-topology: 2.14.11`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-virtualized-extension/v/1.4.12"}}>
          {`@patternfly/react-virtualized-extension: 1.4.12`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-icons/v/3.15.3"}}>
          {`@patternfly/react-icons: 3.15.3`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"components-34","size":"h3","className":"ws-title ws-h3"}}>
      {`Components`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Context selector:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated signature for context selector (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3697"}}>
              {`#3697`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Data toolbar:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated html structure to match core (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3710"}}>
              {`#3701`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Popover:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added min-width override property (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3601"}}>
              {`#3601`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Radio:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added support for optional description (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3621"}}>
              {`#3621`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Select:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Handled undefined default for checkbox select (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3711"}}>
              {`#3711`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Simple list:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added Simple list component (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3645"}}>
              {`#3645`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Wizard:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added type to wizard context (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3572"}}>
              {`#3572`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"catalog-view-extension-7","size":"h3","className":"ws-title ws-h3"}}>
      {`Catalog view extension`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Catalog tile:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Adjusted max width of header image (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3628"}}>
              {`#3628`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Reduced padding between badge and logo (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3644"}}>
              {`#3644`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed styles that stopped working (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3635"}}>
              {`#3635`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed linting errors (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3714"}}>
              {`#3714`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"table-29","size":"h3","className":"ws-title ws-h3"}}>
      {`Table`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Added inline edit to table (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/issues/3058"}}>
          {`#3058`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Reverted IHeaderRow interface change (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3746"}}>
          {`#3746`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Fixed that column functions are not always equal (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3612"}}>
          {`#3612`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Added support for truncated column headers (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3729"}}>
          {`#3729`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"other-34","size":"h3","className":"ws-title ws-h3"}}>
      {`Other`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Build:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated CircleCi config for pricing (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3654"}}>
              {`#3654`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Made change to use machine instance (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3712"}}>
              {`#3712`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed typo, added md lint to CircleCi (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3692"}}>
              {`#3692`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Chore:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Phrased non production components as beta (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3663"}}>
              {`#3663`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Linted React topology (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3721"}}>
              {`#3721`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`For icons made change to use absolute import paths (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3517"}}>
              {`#3517`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed broken link in issue template (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3634"}}>
              {`#3634`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Ci:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Parallelized tests and run in PRs (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3627"}}>
              {`#3627`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Demos:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed the TextInput type in filter table demo (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3652"}}>
              {`#3652`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Docs:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated table property descriptions (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3745"}}>
              {`#3745`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated node version in readme (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3741"}}>
              {`#3741`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Bumped Gatsby (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3657"}}>
              {`#3657`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Merged branch gatsby-theme-patternfly-org (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3651"}}>
              {`#3651`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Merged patternfly-org branch (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3619"}}>
              {`#3619`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Linting:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Eslint react-table (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3693"}}>
              {`#3693`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed linting errors (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3713"}}>
              {`#3717`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Resolved existing linting errors (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3715"}}>
              {`#3715`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added react-hooks to eslint-plugin-patternfly-react (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3636"}}>
              {`#3636`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed linting errors (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3713"}}>
              {`#3713`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"pf3-2","size":"h3","className":"ws-title ws-h3"}}>
      {`PF3`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Slider:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added limit for lowest possible value of slider (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3660"}}>
              {`#3660`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"2020.01-release-notes-2020-01-28","size":"h2","className":"ws-title ws-h2"}}>
      {`2020.01 release notes (2020-01-28)`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Packages released:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-catalog-view-extension/v/1.2.5"}}>
          {`@patternfly/react-catalog-view-extension@1.2.5`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-charts/v/5.2.21"}}>
          {`@patternfly/react-charts@5.2.21`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-core/v/3.134.2"}}>
          {`@patternfly/react-core@3.134.2`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-inline-edit-extension/v/2.15.6"}}>
          {`@patternfly/react-inline-edit-extension@2.15.6`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-styles/v/3.6.26"}}>
          {`@patternfly/react-styles@3.6.26`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-table/v/2.25.6"}}>
          {`@patternfly/react-table@2.25.6`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-tokens/v/2.7.25"}}>
          {`@patternfly/react-tokens@2.7.25`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-topology/v/2.12.5"}}>
          {`@patternfly/react-topology@2.12.5`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-virtualized-extension/v/1.3.93"}}>
          {`@patternfly/react-virtualized-extension@1.3.93`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-icons/v/3.14.39"}}>
          {`@patternfly/react-icons@3.14.39`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"components-35","size":"h3","className":"ws-title ws-h3"}}>
      {`Components`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`About modal:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added type safety to default props (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3536"}}>
              {`#3536`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Alert:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Accessibility updates to alert for toast alerts (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3519"}}>
              {`#3519`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed integration test regression (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3594"}}>
              {`#3594`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Alert group:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added alert group component (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3531"}}>
              {`#3531`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Chip group:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added closable chip group (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3455"}}>
              {`#3455`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Clipboard copy:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Set type of copy and toggle buttons to 'button' (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3444"}}>
              {`#3444`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Data list:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Properly assigned selectable and selected classes (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3447"}}>
              {`#3447`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Removed hook (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3434"}}>
              {`#3434`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Reverted React.Component back to React.FunctionComponent (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3431"}}>
              {`#3431`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Data toolbar:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added and removed some modifiers to match core (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3422"}}>
              {`#3422`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Reverted promotion of DataToolbar from experimental (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3580"}}>
              {`#3580`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated example to not exclude previous filtered items (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3571"}}>
              {`#3571`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Divider:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Promote Divider from experimental (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3516"}}>
              {`#3516`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Dropdown:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Set a random id for dropdown item if id is not given (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3555"}}>
              {`#3555`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Flex layout:`}
        </strong>
        {` Allowed string literals to be used for FlexItem modifiers (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3544"}}>
          {`#3544`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Overflow menu:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Promote OverflowMenu from experimental (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3516"}}>
              {`#3516`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Page:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Add ability to customize screen reader label (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3433"}}>
              {`#3433`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Page header:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Removed redundant role="banner" attribute (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3499"}}>
              {`#3499`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Page layout:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed page layout imports for use with code sandbox.(`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3461"}}>
              {`#3461`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Pagination:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Disabled navigation input if page is equal to zero (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3472"}}>
              {`#3472`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Select:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Add the type prop to the select toggle button (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3495"}}>
              {`#3495`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Allowed custom option data comparison (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3491"}}>
              {`#3491`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated so clear button appears with any type ahead input (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3502"}}>
              {`#3502`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Set a unique id to the select toggle type ahead input (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3529"}}>
              {`#3529`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Spinner:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Promote Spinner from experimental (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3516"}}>
              {`#3516`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"catalog-view-extension-8","size":"h3","className":"ws-title ws-h3"}}>
      {`Catalog view extension`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Catalog tile:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Removed truncation fade and fixed length (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3378"}}>
              {`#3378`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"table-30","size":"h3","className":"ws-title ws-h3"}}>
      {`Table`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Fixed issue `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/issues/3559"}}>
          {`#3559`}
        </PatternflyThemeLink>
        {`, for table we now default to a div instead of anchor(`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3567"}}>
          {`#3567`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Made IAction onClick optional (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3558"}}>
          {`#3558`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Fixed ActionsColumn import path for DropdownSeparator (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3578"}}>
          {`#3578`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"other-35","size":"h3","className":"ws-title ws-h3"}}>
      {`Other`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Ci:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Stopped caching stale doc builds (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3582"}}>
              {`#3582`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added coverage reporting for cypress tests (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3295"}}>
              {`#3295`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Chore:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Used absolute import paths for react core in pf4 packages. (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3525"}}>
              {`#3525`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed homepage URL (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3522"}}>
              {`#3522`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Removed listing of icons while under construction (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3485"}}>
              {`#3485`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Use direct paths to react-icons in production build (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3448"}}>
              {`#3448`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Demos:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Upped version of gatsby-theme-patternfly-org (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3562"}}>
              {`#3562`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Docs:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added a link to icons docs (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3430"}}>
              {`#3430`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Extensions:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Moved extensions to 'Extensions' in side nav category (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3453"}}>
              {`#3453`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Integration:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed selector in table simple actions (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3584"}}>
              {`#3584`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Linting:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Made Eslint fixes for *.md file (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3493"}}>
              {`#3493`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Made initial eslint fixes for react-core-style-system *.md file (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3505"}}>
              {`#3505`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Made minor updates to TopologyView package, missing imports (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3510"}}>
              {`#3510`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Made minor updates to VirtualizedTable examples (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3513"}}>
              {`#3513`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Made minor updates to react-table package (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3509"}}>
              {`#3509`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Turned on errors for markdown code block linting (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3515"}}>
              {`#3515`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added linting for md charts 3486 (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3496"}}>
              {`#3496`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added linting for md code blocks 3469 (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3474"}}>
              {`#3474`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fix linting for md react core example md files 3486 (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3500"}}>
              {`#3500`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated *.md files in demos and verified they were working in code sandbox as well (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3504"}}>
              {`#3504`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"pf3-3","size":"h3","className":"ws-title ws-h3"}}>
      {`PF3`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Date and time picker:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Use toLocaleTimeString to fix year 2020 bug (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3506"}}>
              {`#3506`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated test snapshot due to new year (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3450"}}>
              {`#3450`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`React console:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added `}
            <code {...{"className":"ws-code"}}>
              {`additionalButtons`}
            </code>
            {` prop to VncConsole (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3465"}}>
              {`#3465`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Slider`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added onFormatChange handler (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3477"}}>
              {`#3477`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"2019.11-release-notes-2019-12-18","size":"h2","className":"ws-title ws-h2"}}>
      {`2019.11 release notes (2019-12-18)`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Packages released:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-catalog-view-extension/v/1.1.60"}}>
          {`@patternfly/react-catalog-view-extension@1.1.60`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-charts/v/5.2.9"}}>
          {`@patternfly/react-charts@5.2.9`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-core/v/3.129.3"}}>
          {`@patternfly/react-core@3.129.3`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-inline-edit-extension/v/2.14.20"}}>
          {`@patternfly/react-inline-edit-extension@2.14.20`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-styles/v/3.6.15"}}>
          {`@patternfly/react-styles@3.6.15`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-table/v/2.24.64"}}>
          {`@patternfly/react-table@2.24.64`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-tokens/v/2.7.14"}}>
          {`@patternfly/react-tokens@2.7.14`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-topology/v/2.11.48"}}>
          {`@patternfly/react-topology@2.11.48`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-virtualized-extension/v/1.3.61"}}>
          {`@patternfly/react-virtualized-extension@1.3.61`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-icons/v/3.14.28"}}>
          {`@patternfly/react-icons@3.14.28`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"charts-12","size":"h3","className":"ws-title ws-h3"}}>
      {`Charts`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Updated interpolation examples to use monotoneX (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3372"}}>
          {`#3372`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Update threshold props (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3414"}}>
          {`#3414`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"components-36","size":"h3","className":"ws-title ws-h3"}}>
      {`Components`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Application launcher:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Application launcher enhancements (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3371"}}>
              {`#3371`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Breadcrumb:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Set breadcrumb, nav and title texts to sentence case (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3387"}}>
              {`#3387`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Data list:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Removed duplicate import from the docs (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3362"}}>
              {`#3362`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added selectable variant (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3404"}}>
              {`#3404`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Dropdown:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated component to use input rather than PF checkbox (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3391"}}>
              {`#3391`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Empty state icon:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Marked deprecated props (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3375"}}>
              {`#3375`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Filter side panel:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Passed remaining props to checkbox component (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3374"}}>
              {`#3374`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`List:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added the ordered variant (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3363"}}>
              {`#3363`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Nav:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Removed basic nav example, switched to default variant,  updated PF masthead logo (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3262"}}>
              {`#3262`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Options menu:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added support for groups and titles (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3360"}}>
              {`#3360`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Page layout:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Removed basic nav example, switched to default variant,  updated PF masthead logo (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3262"}}>
              {`#3262`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Set breadcrumb, nav and title texts to sentence case (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3387"}}>
              {`#3387`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Pagination:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added optional offset prop (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3383"}}>
              {`#3383`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Automated pagination and overflow logic (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3182"}}>
              {`#3182`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed prev arrows are active with 0 rows (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3384"}}>
              {`#3384`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Popover:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Made text selectable (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3376"}}>
              {`#3376`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Progress:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed typo (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3346"}}>
              {`#3346`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Select:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Made integration tests pass (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3359"}}>
              {`#3359`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Text input:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added support for passing a ref (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3168"}}>
              {`#3168`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"table-31","size":"h3","className":"ws-title ws-h3"}}>
      {`Table`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Fixed the ActionColumn to allow a link in the actions menu (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3402"}}>
          {`#3402`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Renamed visible/hiddenOn2Xl to visible/hiddenOn_2xl (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3365"}}>
          {`#3365`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"other-36","size":"h3","className":"ws-title ws-h3"}}>
      {`Other`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Build:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Used patternfly-a11y (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3339"}}>
              {`#3339`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updates build to not cache stale doc build (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3424"}}>
              {`#3424`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Chore:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated tippy.js dependency (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3370"}}>
              {`#3370`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed broken Katacoda tutorial links (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3408"}}>
              {`#3408`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Demo:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added various table state demos (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3352"}}>
              {`#3352`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Docs:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Documented CJS tree shaking solution for icons and react-core (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3410"}}>
              {`#3410`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Workspace:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Upgraded gatsby and org theme (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3386"}}>
              {`#3386`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"pf3-4","size":"h3","className":"ws-title ws-h3"}}>
      {`PF3`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`React console:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added spacing between VncAction buttons (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3345"}}>
              {`#3345`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Custom modal dialog:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated CustomModalDialog to match changes to original react-bootstrap ModalDialog (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3409"}}>
              {`#3409`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"2019.10-release-notes-2019-11-25","size":"h2","className":"ws-title ws-h2"}}>
      {`2019.10 release notes (2019-11-25)`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Packages released:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-catalog-view-extension/v/1.1.38"}}>
          {`@patternfly/react-catalog-view-extension@1.1.38`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-charts/v/5.2.2"}}>
          {`@patternfly/react-charts@5.2.2`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-core/v/3.124.1"}}>
          {`@patternfly/react-core@3.124.1`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-inline-edit-extension/v/2.13.9"}}>
          {`@patternfly/react-inline-edit-extension@2.13.9`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-styles/v/3.6.11"}}>
          {`@patternfly/react-styles@3.6.11`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-table/v/2.24.41"}}>
          {`@patternfly/react-table@2.24.41`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-tokens/v/2.7.10"}}>
          {`@patternfly/react-tokens@2.7.10`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-topology/v/2.11.27"}}>
          {`@patternfly/react-topology@2.11.27`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-virtualized-extension/v/1.3.40"}}>
          {`@patternfly/react-virtualized-extension@1.3.40`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-icons/v/3.14.23"}}>
          {`@patternfly/react-icons@3.14.23`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"charts-13","size":"h3","className":"ws-title ws-h3"}}>
      {`Charts`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Put back the secondary title when showing percentage in the Donut Chart(`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3299"}}>
          {`#3299`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Added Interactive legend example (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3253"}}>
          {`#3253`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"components-37","size":"h3","className":"ws-title ws-h3"}}>
      {`Components`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`About modal:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Removed appendTo from props passed to div (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3239"}}>
              {`#3239`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Accordion:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added a prop to allow the box shadow to be removed (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3309"}}>
              {`#3309`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Button:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added support for setting tab index unless not button and disabled (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3240"}}>
              {`#3240`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Data toolbar:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Moved and wrapped chips in expandable content (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3319"}}>
              {`#3319`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Dropdown:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added split button action variant (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3307"}}>
              {`#3307`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated keyboard interaction (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3293"}}>
              {`#3293`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Flex:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`In breakpointMods, set the breakpoint as optional and added enums  (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3258"}}>
              {`#3258`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed typo in align and justify modifiers (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3328"}}>
              {`#3328`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Form:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added validated variant to form inputs (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3220"}}>
              {`#3220`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Options menu:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Removed the `}
            <code {...{"className":"ws-code"}}>
              {`<i>`}
            </code>
            {` element around selected item svg (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3238"}}>
              {`#3238`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Pagination:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed previous page navigation issues with 1 row per page (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3297"}}>
              {`#3297`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Select:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed displaying pre-selected input (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3305"}}>
              {`#3305`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added the ability to have custom content in the select menu (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3333"}}>
              {`#3333`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Removed `}
            <code {...{"className":"ws-code"}}>
              {`<form>`}
            </code>
            {` from typeahead and checkbox selects (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3298"}}>
              {`#3298`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Wizard:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Removed appendTo from props passed to div (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3239"}}>
              {`#3239`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"catalog-view-extension-9","size":"h3","className":"ws-title ws-h3"}}>
      {`Catalog view extension`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Chore:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added @patternfly/react-catalog-view-extension package to release promotion script (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3260"}}>
              {`#3260`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Removed unused packages (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3332"}}>
              {`#3332`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`fixed checbox margin on filter side panel (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3287"}}>
              {`#3287`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`fixed @types errors when using the extension (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3284"}}>
              {`#3284`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Removed unused dev dependencies from package.json (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3275"}}>
              {`#3275`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added check for sass changes (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3271"}}>
              {`#3271`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Catalog tile:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Removed unneeded selector (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3331"}}>
              {`#3331`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Edited target selector (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3291"}}>
              {`#3291`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Removed margin and fixed hidden text (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3285"}}>
              {`#3285`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated scss and add class to image (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3282"}}>
              {`#3282`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Properties side panel:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Aligned sass file with correct styles for properties panel (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3236"}}>
              {`#3236`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"table-32","size":"h3","className":"ws-title ws-h3"}}>
      {`Table`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Added types, examples, and demo for onRowClick (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3265"}}>
          {`#3265`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Fixed types for table transforms (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3203"}}>
          {`#3203`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"topology-17","size":"h3","className":"ws-title ws-h3"}}>
      {`Topology`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Set topology container to take full height of the view (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3314"}}>
          {`#3314`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"other-37","size":"h3","className":"ws-title ws-h3"}}>
      {`Other`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Chore:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated gatsby-browser.js (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3313"}}>
              {`#3313`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added use of node 10, more resources for doc build (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3278"}}>
              {`#3278`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added new package to promotion script (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3260"}}>
              {`#3260`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated github templates (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3261"}}>
              {`#3261`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Upgraded react-bootstrap to fix React deprecated lifecycle method warnings (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3249"}}>
              {`#3249`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Demo:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated Pagination Table demo to add Spinner and empty state (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3294"}}>
              {`#3294`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Demo-app-ts:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Increased strict checks for react-integration (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3222"}}>
              {`#3222`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Docs:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Bumped gatsby-theme-patternfly-org  (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3269"}}>
              {`#3269`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`fix(README.md) (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3254"}}>
              {`#3254`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"pf3-5","size":"h3","className":"ws-title ws-h3"}}>
      {`PF3`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Date and time picker:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Properly imported formatTime to DateTimePicker (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3303"}}>
              {`#3303`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"2019.09-release-notes-2019-11-01","size":"h2","className":"ws-title ws-h2"}}>
      {`2019.09 release notes (2019-11-01)`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Packages released:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-catalog-view-extension/v/1.1.5"}}>
          {`@patternfly/react-catalog-view-extension@1.1.5`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-charts/v/5.1.5"}}>
          {`@patternfly/react-charts@5.1.5`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-core/v/3.120.5"}}>
          {`@patternfly/react-core@3.120.5`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-inline-edit-extension/v/2.12.17"}}>
          {`@patternfly/react-inline-edit-extension@2.12.17`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-styles/v/3.6.5"}}>
          {`@patternfly/react-styles@3.6.5`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-table/v/2.24.17"}}>
          {`@patternfly/react-table@2.24.17`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-tokens/v/2.7.5"}}>
          {`@patternfly/react-tokens@2.7.5`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-topology/v/2.11.5"}}>
          {`@patternfly/react-topology@2.11.5`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-virtualized-extension/v/1.3.17"}}>
          {`@patternfly/react-virtualized-extension@1.3.17`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-icons/v/3.14.18"}}>
          {`@patternfly/react-icons@3.14.18`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"charts-14","size":"h3","className":"ws-title ws-h3"}}>
      {`Charts`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Added legend examples (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3093"}}>
          {`#3093`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Added chart scatter examples (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3086"}}>
          {`#3086`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Updated ChartThreshold to use pf-core variable (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3085"}}>
          {`#3085`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Updates to use markdown links (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3072"}}>
          {`#3072`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Simplified legend tooltip example (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3069"}}>
          {`#3069`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Added Responsive legend (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3067"}}>
          {`#3067`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Added tooltip examples (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3061"}}>
          {`#3061`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Added props to ChartLabel (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3028"}}>
          {`#3028`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Fixed ChartThreshold props (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3024"}}>
          {`#3024`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Added custom theme example (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3023"}}>
          {`#3023`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Moved ChartThreshold to its own example (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3019"}}>
          {`#3019`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"components-38","size":"h3","className":"ws-title ws-h3"}}>
      {`Components`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`About Modal:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Append component to an element in DOM (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3102"}}>
              {`#3102`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Application launcher:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fix unit tests (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3107"}}>
              {`#3107`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Button:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Component type accepts react-router Link (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3077"}}>
              {`#3077`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added an example of a link button with anchor component (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3034"}}>
              {`#3034`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Chip:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added OUIA compatibility to Chip component (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2995"}}>
              {`#2995`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Copy to clipboard:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Wrapped pre inside the expand element (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3169"}}>
              {`#3169`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Data toolbar:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Implemented changes to match PF-Core (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3144"}}>
              {`#3144`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Add unit and integration tests (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3201"}}>
              {`#3201`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Divider:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added divider component (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3125"}}>
              {`#3125`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Dropdown:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added OUIA compatibility for Dropdown (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3135"}}>
              {`#3135`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fix unit tests (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3107"}}>
              {`#3107`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Empty state:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Removed debug message from tests (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3161"}}>
              {`#3161`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Expandable:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Allowed for dynamic toggle text in uncontrolled version (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3068"}}>
              {`#3068`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Login form:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Pass 'remember me' state to isChecked (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3056"}}>
              {`#3056`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Options menu:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fix unit tests and options menu(`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3107"}}>
              {`#3107`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Overflow menu:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Removed unnecessary class names (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3204"}}>
              {`#3204`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Radio:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Pass checked either from isChecked or checked (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3066"}}>
              {`#3066`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fix console error (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3138"}}>
              {`#3138`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Group radio inputs in docs (axe-core) (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2684"}}>
              {`#2684`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`React catalog view extension:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added catalog view extension and three components (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3145"}}>
              {`#3145`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Select:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated prop description for selections (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3183"}}>
              {`#3183`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Set onFilter to null to run the default filter (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3158"}}>
              {`#3158`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added plain modifier to toggle button (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3140"}}>
              {`#3140`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Use props children if custom on filter used (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3123"}}>
              {`#3123`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Modifying selection outside Select component now works (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3096"}}>
              {`#3096`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Allow custom component as select option (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3060"}}>
              {`#3060`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added OUIA compatibility to Select component (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2996"}}>
              {`#2996`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Spinner:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed alert type in docs (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3063"}}>
              {`#3063`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Switch:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`reverted defaultChecked to checked (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3037"}}>
              {`#3037`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Tabs:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Move TabButton to new file (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3033"}}>
              {`#3033`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Text area:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added a prop to allow limiting the  resize orientation of the Text are (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3180"}}>
              {`#3180`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Tooltip:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Allow tooltip text to be left-aligned (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3053"}}>
              {`#3053`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Virtualized extension`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added jest test (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2761"}}>
              {`#2761`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Wizard:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Append component to an element in DOM (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3102"}}>
              {`#3102`}
            </PatternflyThemeLink>
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"table-33","size":"h3","className":"ws-title ws-h3"}}>
      {`Table`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Added custom row wrapper example for table  (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3160"}}>
          {`#3160`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Set height auto modifier on table row (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3133"}}>
          {`#3133`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Added support for custom dataLabel prop on table header (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3040"}}>
          {`#3040`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Disable header controls with empty table (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3008"}}>
          {`#3008`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Added OUIA compatibility to Table component (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2964"}}>
          {`#2964`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"other-38","size":"h3","className":"ws-title ws-h3"}}>
      {`Other`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Chore:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Add issue template (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2804"}}>
              {`#2804`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Surrounded OUIA check with a try catch (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3178"}}>
              {`#3178`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Use consumer context if specified for OUIA (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3148"}}>
              {`#3149`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated webpack config to output source maps (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3115"}}>
              {`#3115`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fix warnings about use of deprecated lifecycle methods (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3098"}}>
              {`#3098`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added eslint-plugin-react-hooks (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3083"}}>
              {`#3083`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Properly use this.setState in components (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3075"}}>
              {`#3075`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed sentence case for component titles (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3054"}}>
              {`#3054`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added tslint-plugin-prettier and apply code formatting (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2810"}}>
              {`#2810`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Demo:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added bulk select demo with table and toolbar (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3082"}}>
              {`#3082`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added table filter demo (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3127"}}>
              {`#3127`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Docs:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Use gatsby-theme-patternfly-org  (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3146"}}>
              {`#3146`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed regressions from gatsby-theme-patternfly-org (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3164"}}>
              {`#3164`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"pf3-6","size":"h3","className":"ws-title ws-h3"}}>
      {`PF3`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Serial console:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Use xterm v4 (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3030"}}>
              {`#3030`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Cards:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Refactored sub-component references (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2935"}}>
              {`#2935`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"2019.08-release-notes-2019-10-01","size":"h2","className":"ws-title ws-h2"}}>
      {`2019.08 release notes (2019-10-01)`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Packages released:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-charts/v/5.0.13"}}>
          {`@patternfly/react-charts@5.0.13`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-core/v/3.112.3"}}>
          {`@patternfly/react-core@3.112.3`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-inline-edit-extension/v/2.11.70"}}>
          {`@patternfly/react-inline-edit-extension@2.11.70`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-styles/v/3.5.27"}}>
          {`@patternfly/react-styles@3.5.27`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-table/v/2.22.19"}}>
          {`@patternfly/react-table@2.22.19`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-tokens/v/2.6.31"}}>
          {`@patternfly/react-tokens@2.6.31`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-topology/v/2.8.65"}}>
          {`@patternfly/react-topology@2.8.65`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-virtualized-extension/v/1.2.55"}}>
          {`@patternfly/react-virtualized-extension@1.2.55`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-icons/v/3.14.7"}}>
          {`@patternfly/react-icons@3.14.7`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"charts-15","size":"h3","className":"ws-title ws-h3"}}>
      {`Charts`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`(BREAKING CHANGE) Updated Victory to 30.0.0`}
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Replace `}
            <code {...{"className":"ws-code"}}>
              {`labels={(d) => x: \${d.x}}`}
            </code>
            {` with `}
            <code {...{"className":"ws-code"}}>
              {`labels={({ datum }) => x: \${datum.x}}`}
            </code>
          </li>
          <li {...{"className":"ws-li"}}>
            <strong>
              {`ChartPie:`}
            </strong>
            <ul {...{"className":"ws-ul"}}>
              <li {...{"className":"ws-li"}}>
                {`Removed `}
                <code {...{"className":"ws-code"}}>
                  {`pieHeight`}
                </code>
                {` & `}
                <code {...{"className":"ws-code"}}>
                  {`pieWidth`}
                </code>
                {` props -- use `}
                <code {...{"className":"ws-code"}}>
                  {`padding`}
                </code>
                {` prop`}
              </li>
              <li {...{"className":"ws-li"}}>
                {`Adjusted padding from 8px to 20px`}
              </li>
            </ul>
          </li>
          <li {...{"className":"ws-li"}}>
            <strong>
              {`ChartDonut:`}
            </strong>
            <ul {...{"className":"ws-ul"}}>
              <li {...{"className":"ws-li"}}>
                {`Removed `}
                <code {...{"className":"ws-code"}}>
                  {`donutHeight`}
                </code>
                {` & `}
                <code {...{"className":"ws-code"}}>
                  {`donutWidth`}
                </code>
                {`  props -- use `}
                <code {...{"className":"ws-code"}}>
                  {`padding`}
                </code>
                {` prop`}
              </li>
              <li {...{"className":"ws-li"}}>
                {`Adjusted padding from 8px to 20px`}
              </li>
            </ul>
          </li>
          <li {...{"className":"ws-li"}}>
            <strong>
              {`ChartDonutUtilization:`}
            </strong>
            <ul {...{"className":"ws-ul"}}>
              <li {...{"className":"ws-li"}}>
                {`Removed `}
                <code {...{"className":"ws-code"}}>
                  {`donutHeight`}
                </code>
                {` & `}
                <code {...{"className":"ws-code"}}>
                  {`donutWidth`}
                </code>
                {` props -- use `}
                <code {...{"className":"ws-code"}}>
                  {`padding`}
                </code>
                {` prop`}
              </li>
              <li {...{"className":"ws-li"}}>
                {`Adjusted padding from 8px to 20px`}
              </li>
            </ul>
          </li>
          <li {...{"className":"ws-li"}}>
            <strong>
              {`ChartDonutThreshold:`}
            </strong>
            <ul {...{"className":"ws-ul"}}>
              <li {...{"className":"ws-li"}}>
                {`Removed `}
                <code {...{"className":"ws-code"}}>
                  {`donutHeight`}
                </code>
                {` & `}
                <code {...{"className":"ws-code"}}>
                  {`donutWidth`}
                </code>
                {` props -- use `}
                <code {...{"className":"ws-code"}}>
                  {`padding`}
                </code>
                {` prop`}
              </li>
              <li {...{"className":"ws-li"}}>
                {`Adjusted padding from 8px to 20px`}
              </li>
            </ul>
          </li>
          <li {...{"className":"ws-li"}}>
            <strong>
              {`ChartBullet:`}
            </strong>
            <ul {...{"className":"ws-ul"}}>
              <li {...{"className":"ws-li"}}>
                {`Removed `}
                <code {...{"className":"ws-code"}}>
                  {`bulletHeight`}
                </code>
                {` & `}
                <code {...{"className":"ws-code"}}>
                  {`bulletWidth`}
                </code>
                {`  props -- use `}
                <code {...{"className":"ws-code"}}>
                  {`bulletSize`}
                </code>
                {` prop`}
              </li>
            </ul>
          </li>
          <li {...{"className":"ws-li"}}>
            <strong>
              {`ChartContainer:`}
            </strong>
            <ul {...{"className":"ws-ul"}}>
              <li {...{"className":"ws-li"}}>
                {`Renamed the `}
                <code {...{"className":"ws-code"}}>
                  {`VictoryContainer`}
                </code>
                {` CSS selector as `}
                <code {...{"className":"ws-code"}}>
                  {`pf-c-chart`}
                </code>
                {` for specificity`}
              </li>
            </ul>
          </li>
          <li {...{"className":"ws-li"}}>
            {`See the `}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/releases/tag/%40patternfly%2Freact-charts%405.0.0"}}>
              {`Github tag notes`}
            </PatternflyThemeLink>
            {` or `}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2883"}}>
              {`#2883`}
            </PatternflyThemeLink>
            {` for additional details`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        {`Added missing style and responsive props to ChartVoronoiContainer (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2977"}}>
          {`#2977`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Updated chart tutorial paths (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2962"}}>
          {`#2962`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Eliminate the "missing key prop" warning seen in the browser console for ChartPie (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2943"}}>
          {`#2943`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Slightly modified how chart containers are cloned and added examples. This ensures charts can be wrapped with the Tippy tooltip component as an alternate way of providing custom tooltips. (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3048"}}>
          {`#3048`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Area Chart:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added stacked area chart demo and test (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2896"}}>
              {`#2896`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added Horizontal indicator example (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2796"}}>
              {`#2796`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Sparkline:`}
        </strong>
        {` Added line border to ChartArea and move sparkline (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2887"}}>
          {`#2887`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Donut chart:`}
        </strong>
        {` Added simple fix for the donut chart tutorial link (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2940"}}>
          {`#2940`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"components-39","size":"h3","className":"ws-title ws-h3"}}>
      {`Components`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`App launcher:`}
        </strong>
        {` Made dropdown/app launcher work better with router components (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3011"}}>
          {`#3011`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Button:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added control variant to button (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2983"}}>
              {`#2983`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Set the disable modifier when component is not button (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2683"}}>
              {`#2683`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Dropdown:`}
        </strong>
        {` Disabled button now only applies disabled attribute (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2989"}}>
          {`#2989`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Chip group:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Allowed chip group toolbar item to handle single chip (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2882"}}>
              {`#2882`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`ChipGroupToolbarItem component was not propagating className despite having this prop in documentation and TS. This is a fix to ChipGroupToolbarItem className (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2881"}}>
              {`#2881`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Allowed variable number of chips to be displayed (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2878"}}>
              {`#2878`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Copy to clipboard:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added prop for expanded by default (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2923"}}>
              {`#2923`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added an example of copy clipboard with array of objects (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2916"}}>
              {`#2916`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Date and time picker component:`}
        </strong>
        {` Added Date and time picker component (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/1420"}}>
          {`#1420`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Data toolbar:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added aria-haspopup to the toggle group (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3012"}}>
              {`#3012`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added chip groups to toolbar (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/issues/2888"}}>
              {`#2888`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Dropdown split button:`}
        </strong>
        {` Added 3rd state to split button (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2842"}}>
          {`#2842`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Empty state:`}
        </strong>
        {` Made it possible to support primary and icon as div elements (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2957"}}>
          {`#2957`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Expandable:`}
        </strong>
        {` The controlled version of Expandable was not reacting to changes made to the isExpanded prop after initial creation. This PR fixed the issue. (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2955"}}>
          {`#2955`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Flex:`}
        </strong>
        {` Added support for flex layout, tests, etc. (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2985"}}>
          {`#2985`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`LoginPage:`}
        </strong>
        {` Add attributes to the submit button (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2682"}}>
          {`#2682`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Modal:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Simplified disabling of FocusTrap (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2862"}}>
              {`#2862`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Changed the cancel button variant to link (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2979"}}>
              {`#2979`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Nav:`}
        </strong>
        {` HorizontalNavMenuItem: Fixed onItemClick PropType  (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2984"}}>
          {`#2984`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Overflow:`}
        </strong>
        {` Introduced overflow component (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/issues/2819"}}>
          {`#2819`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Pagination:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added OUIA compatibility to Pagination component (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2960"}}>
              {`#2960`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed styling discrepancy with HTML version (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2904"}}>
              {`#2904`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Select:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added a maximum height property to select menu (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2946"}}>
              {`#2946`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Displayed selections data properly (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2848"}}>
              {`#2848`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added props for hard coded strings (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2993"}}>
              {`#2993`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Switch:`}
        </strong>
        {` Backward compatibility in case labelOff was not set, fixed the conditionals (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2816"}}>
          {`#2816`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Tab:`}
        </strong>
        {` Added two new props: mountOnEnter and unmountOnExit (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2902"}}>
          {`#2902`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Wizard:`}
        </strong>
        {` Added default function to onClose prop (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2863"}}>
          {`#2863`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"table-34","size":"h3","className":"ws-title ws-h3"}}>
      {`Table`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Fixed cell title warning (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2967"}}>
          {`#2967`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Support height auto modifier in tr (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2932"}}>
          {`#2932`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Added flag to hide select all (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2926"}}>
          {`#2926`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Improved the documentation for Table component from react-table (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3016"}}>
          {`#3016`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Added tables to integration test demos and wrote unit tests (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2685"}}>
          {`#2685`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"other-39","size":"h3","className":"ws-title ws-h3"}}>
      {`Other`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Docs:`}
        </strong>
        {` Fixed live edit caret color so it is visible (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2899"}}>
          {`#2899`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`PF3`}
        </strong>
        {`: Bumped PF3 deps including Storybook (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2895"}}>
          {`#2985`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"2019.07-release-notes-2019-09-10","size":"h2","className":"ws-title ws-h2"}}>
      {`2019.07 release notes (2019-09-10)`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Packages released:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-charts/v/4.9.10"}}>
          {`@patternfly/react-charts@4.9.10`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-core/v/3.104.0"}}>
          {`@patternfly/react-core@3.104.0`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-styles/v/3.5.22"}}>
          {`@patternfly/react-styles@3.5.22`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-table/v/2.20.15"}}>
          {`@patternfly/react-table@2.20.15`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-tokens/v/2.6.26"}}>
          {`@patternfly/react-tokens@2.6.26`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-topology/v/2.8.34"}}>
          {`@patternfly/react-topology@2.8.34`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-icons/v/3.14.2"}}>
          {`@patternfly/react-icons@3.14.2`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-virtualized-extension/v/1.2.23"}}>
          {`@patternfly/react-virtualized-extension@1.2.23`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-inline-edit-extension/v/2.11.35"}}>
          {`@patternfly/react-inline-edit-extension@2.11.35`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"charts-16","size":"h3","className":"ws-title ws-h3"}}>
      {`Charts`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Adjusted legend position for axis label (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2763"}}>
          {`#2763`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Added new symbol for dash/threshold (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2884"}}>
          {`#2884`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`BulletChart:`}
        </strong>
        {` Added new BulletChart type! (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2708"}}>
          {`#2708`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`StackChart:`}
        </strong>
        {` Added monthly vertical stack example (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2625"}}>
          {`#2625`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"components-40","size":"h3","className":"ws-title ws-h3"}}>
      {`Components`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Accordion:`}
        </strong>
        {` Allow JSX elements for content and toggle (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2713"}}>
          {`#2713`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`BackgroundImage:`}
        </strong>
        {` Fix bug on non-Chrome browsers regarding filter's width (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2742"}}>
          {`#2742`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`ChipGroup:`}
        </strong>
        {` Added defaultIsOpen prop to allow chip group to be initially expanded (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2651"}}>
          {`#2651`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`ClipboardCopy:`}
        </strong>
        {` Updated if children change (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2849"}}>
          {`#2849`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Drawer:`}
        </strong>
        {` Expose DrawerContent components and remove panelContent prop (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2733"}}>
          {`#2733`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Dropdown:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added support for dropdown with primary button toggle (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2857"}}>
              {`#2857`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Allow custom dropdown items (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2890"}}>
              {`#2890`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`EmptyState:`}
        </strong>
        {` Fixed a bug where the correct size modifier wasn't being passed (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2692"}}>
          {`#2692`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Expandable:`}
        </strong>
        {` Support uncontrolled expandable (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2649"}}>
          {`#2649`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`FormGroup:`}
        </strong>
        {` Fixed a bug where className was not being propogated for non-inline forms (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2864"}}>
          {`#2864`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`LoginForm:`}
        </strong>
        {` Username input field is now autofocused (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2659"}}>
          {`#2659`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Modal:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added isFooterLeftAligned prop (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2835"}}>
              {`#2835`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added appendTo prop so component can render in element other than document.body (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2802"}}>
              {`#2802`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`FocusTrap works with showClose being false (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2774"}}>
              {`#2774`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Nav:`}
        </strong>
        {` Added dark theme modifier flag (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2856"}}>
          {`#2856`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`OptionsMenu:`}
        </strong>
        {` Now uses our Dropdown component and is consistent with it (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2299"}}>
          {`#2299`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Page:`}
        </strong>
        {` Added dark theme modifier flag (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2856"}}>
          {`#2856`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Select:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Allow creating new select items (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2820"}}>
              {`#2820`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added support for toggle icon (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2748"}}>
              {`#2748`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added direction prop (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2611"}}>
              {`#2611`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Spinner:`}
        </strong>
        {` Added new experimental Spinner component! (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2858"}}>
          {`#2858`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Switch:`}
        </strong>
        {` Changed checked property in DOM (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2749"}}>
          {`#2749`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Tab:`}
        </strong>
        {` Allow JSX elements for Tab title (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2681"}}>
          {`#2681`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`TextArea:`}
        </strong>
        {` Support defaultValue attribute for uncontrolled TextArea (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2712"}}>
          {`#2712`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Toolbar:`}
        </strong>
        {` Added new experimental Toolbar component! (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2861"}}>
          {`#2861`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Tooltip:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Allow passing properties through to PopoverBase and hence tippy.js (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2769"}}>
              {`#2769`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added the manual trigger option with the isVisible prop (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2769"}}>
              {`#2769`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Wizard:`}
        </strong>
        {` Added support for in-page rendering (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2830"}}>
          {`#2830`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"table-35","size":"h3","className":"ws-title ws-h3"}}>
      {`Table`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Added new visibleOn and hiddenOn breakpoint (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2676"}}>
          {`#2676`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"icons-2","size":"h3","className":"ws-title ws-h3"}}>
      {`Icons`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Added Path Missing Icon (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2817"}}>
          {`#2817`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Added Azure and OpenStack icons (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2827"}}>
          {`#2827`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Added Ansible Tower icon to custom icons definition (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2735"}}>
          {`#2735`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Publish configs as well with icons (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2701"}}>
          {`#2701`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"virtualized-extension-4","size":"h3","className":"ws-title ws-h3"}}>
      {`Virtualized Extension`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Debounce resize event to fix inconsistent grid sizing (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2754"}}>
          {`#2754`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"pf3-7","size":"h3","className":"ws-title ws-h3"}}>
      {`PF3`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`AsyncTypeAheadSelect:`}
        </strong>
        {` Forward ref for AsyncTypeAheadSelect (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2760"}}>
          {`#2760`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`CatalogTile:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Allow JSX element for CatalogTile's icon (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2771"}}>
              {`#2771`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added iconAlt property to use for alt text for icon image (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2715"}}>
              {`#2715`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`DatePicker:`}
        </strong>
        {` Added new date picker components (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/1873"}}>
          {`#1873`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`HorizontalNavMenu:`}
        </strong>
        {` Allow HorizontalNavMenuItem's title to be a node (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2825"}}>
          {`#2825`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"2019.06-release-notes-2019-08-13","size":"h2","className":"ws-title ws-h2"}}>
      {`2019.06 release notes (2019-08-13)`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Packages released:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-charts/v/4.7.9"}}>
          {`@patternfly/react-charts@4.7.9`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-core/v/3.87.3"}}>
          {`@patternfly/react-core@3.87.3`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-styles/v/3.5.13"}}>
          {`@patternfly/react-styles@3.5.13`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-table/v/2.17.5"}}>
          {`@patternfly/react-table@2.17.5`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-tokens/v/2.6.16"}}>
          {`@patternfly/react-tokens@2.6.16`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-topology/v/2.7.31"}}>
          {`@patternfly/react-topology@2.7.31`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-icons/v/3.10.14"}}>
          {`@patternfly/react-icons@3.10.14`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-virtualized-extension/v/1.1.117"}}>
          {`@patternfly/react-virtualized-extension@1.1.117`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-inline-edit-extension/v/2.10.5"}}>
          {`@patternfly/react-inline-edit-extension@2.10.5`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"charts-17","size":"h3","className":"ws-title ws-h3"}}>
      {`Charts`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Used vars to enable Red Hat fonts. When the pf-m-redhat-font selector is added to the page, the Red Hat font is expected to be used instead of the default Overpass font. This change ensures that charts and its labels use the Red Hat font as expected
(`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2584"}}>
          {`#2584`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`The donut threshold chart used to generate a 'width must be a non-negative' warning when donutWidth values are zero. This change ensures the dynamic chart size is never less than zero  (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2590"}}>
          {`#2590`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Fixed missing fill and stroke colors for area and line charts. Set area.style.data.fill to first color scale value in colorTheme function. Set line.style.data.stroke to first color scale value in colorTheme function (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2626"}}>
          {`#2626`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"components-41","size":"h3","className":"ws-title ws-h3"}}>
      {`Components`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Accordion:`}
        </strong>
        {` Added the html structure of Accordion to React  (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2422"}}>
          {`#2422`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Alert:`}
        </strong>
        {` Added default variant for Alert  (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2648"}}>
          {`#2648`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Button:`}
        </strong>
        {` Added 'reset' to types (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2622"}}>
          {`#2622`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Checkbox`}
        </strong>
        {` Updated ids so none repeat. Prevents inconsistent checking behavior when labels are clicked for uncontrolled vs. controlled
examples  (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2663"}}>
          {`#2663`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Drawer:`}
        </strong>
        {` Added the drawer component to experimental  (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2633"}}>
          {`#2633`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Dropdown:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Automatically focus first dropdown item when DropdownMenu mounts  (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2355"}}>
              {`#2355`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`This PR adds an aria-label to the "icon only" example of Dropdown  (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2517"}}>
              {`#2517`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed missing event passthrough on internal onSelect callback (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2657"}}>
              {`#2657`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Form:`}
        </strong>
        {` Updated Form demo to use check over radio
(`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2567"}}>
          {`#2567`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Modal:`}
        </strong>
        {` Allows for custom header and/or footer in Modal component Added the showClose prop, defaulted to true. Set to false to hide the close button  (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2120"}}>
          {`#2120`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Page:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Skip to content should point to primary content container (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2519"}}>
              {`#2519`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Change the defaultManagedSidebarOpen prop name for consistency (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2664"}}>
              {`#2664`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Pagination:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`When there is 0 items or negative number for pagination show 0th page out of 0 and disable paginating  (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2558"}}>
              {`#2558`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added a demo of table integrated with pagination (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2601"}}>
              {`#2601`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed pagination to update page count (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2639"}}>
              {`#2639`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added disabled flag for whole component (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2586"}}>
              {`#2586`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Select:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Select menu now has consistent, open behavior on empty text input field  (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2572"}}>
              {`#2572`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added a custom callback for the filtering function used in typeahead variants. This replaces the current search entirely, so the function must handle filtering the list of children/options and return the filtered results for the internal state to update
(`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2434"}}>
              {`#2434`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added isPlain variation/prop to Select.tsx, snapshot tests, and integration (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2588"}}>
              {`#2588`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`This enhancement allows a user to now pass in a user defined object to store additional data besides just the string value to a select option. The object must have a toString function that is
responsible for returning the the localized string (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2612"}}>
              {`#2612`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Disabled focus trap on checkbox select with no children. Focus Trap throws exception if no children to ref. In order to avoid this error, render the component with no Focus Trap when no children is passed  (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2647"}}>
              {`#2647`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added disabled flag to select (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2678"}}>
              {`#2678`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Switch:`}
        </strong>
        {` Added aria-labelledby to input
(`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2468"}}>
          {`#2468`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Topology:`}
        </strong>
        {` Fixed paddings for topology control bar buttons. Removed css settings that override the paddings for the topology control bar buttons  (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2635"}}>
          {`#2635`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"table-36","size":"h3","className":"ws-title ws-h3"}}>
      {`Table`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Added the wrap modifier to react-table through transforms  (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2615"}}>
          {`#2615`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Replaced lodash-es with lodash  (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2641"}}>
          {`#2641`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"typescript-conversion","size":"h3","className":"ws-title ws-h3"}}>
      {`TypeScript conversion`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Dropdown:`}
        </strong>
        {` (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2502"}}>
          {`#2502`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"docs","size":"h3","className":"ws-title ws-h3"}}>
      {`Docs`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Made name column not wrap
(`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2502"}}>
          {`#2583`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Small adjustment for Stack layout. Updated the doc to correctly read that isFilled is related to the vertical space occupied, not horizontal  (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2605"}}>
          {`#2605`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Link to react-tokens page was broken. Updated to point to the Global CSS Variables page (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2453"}}>
          {`#2453`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Added extension notes to Gatsby docs to improve the Gatsby doc for table extensions and add disclaimer about extension status (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2637"}}>
          {`#2637`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Fixed accessibility issues in Accordion, ClipboardCopy, and DataList (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2634"}}>
          {`#2634`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"other-40","size":"h3","className":"ws-title ws-h3"}}>
      {`Other`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Chore:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added curl command after release (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2547"}}>
              {`#2547`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Invalidate all packages if yarn.lock changes (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2548"}}>
              {`#2548`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated release notes to use uls (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2604"}}>
              {`#2604`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"2019.05-release-notes-2019-07-24","size":"h2","className":"ws-title ws-h2"}}>
      {`2019.05 release notes (2019-07-24)`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Packages released:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-charts/v/4.7.1"}}>
          {`@patternfly/react-charts@4.7.1`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-core/v/3.75.2"}}>
          {`@patternfly/react-core@3.75.2`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-styles/v/3.5.7"}}>
          {`@patternfly/react-styles@3.5.7`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-table/v/2.14.23"}}>
          {`@patternfly/react-table@.14.23`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-tokens/v/2.6.13"}}>
          {`@patternfly/react-tokens@2.6.13`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-topology/v/2.7.2"}}>
          {`@patternfly/react-topology@2.6.20`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-icons/v/3.10.14"}}>
          {`@patternfly/react-icons@3.10.14`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-virtualized-extension/v/1.1.82"}}>
          {`@patternfly/react-virtualized-extension@1.1.82`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-inline-edit-extension/v/2.9.49"}}>
          {`@patternfly/react-inline-edit-extension@2.9.49`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"charts-patternflyreact-charts4.7.1","size":"h3","className":"ws-title ws-h3"}}>
      {`Charts (`}
      <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-charts/v/4.7.1"}}>
        {`@patternfly/react-charts@4.7.1`}
      </PatternflyThemeLink>
      {`)`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Fixed runtime errors related to theme padding (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2430"}}>
          {`#2430`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Added charts to react-integration tests (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2354"}}>
          {`#2354`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Updated chart theme to use pf-core variables (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2439"}}>
          {`#2439`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Removed invalid pf-core var (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2463"}}>
          {`#2463`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Adjusted pf-core vars & added tooltip examples (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2497"}}>
          {`#2497`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Updated pf-core vars (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2480"}}>
          {`#2480`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Provided an accessible title and description (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2500"}}>
          {`#2500`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Added bottom-left legend position (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2442"}}>
          {`#2442`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Tweaked aria title for area chart (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2510"}}>
          {`#2510`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Replaced prop `}
        <code {...{"className":"ws-code"}}>
          {`titleComponent`}
        </code>
        {` by `}
        <code {...{"className":"ws-code"}}>
          {`subTitleComponent`}
        </code>
        {` on donut charts (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2488"}}>
          {`#2488`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Added individual padding vars for donut charts (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2529"}}>
          {`#2529`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Added new mutil-color theme for ordered charts (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2552"}}>
          {`#2552`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Added fixed point notation into percentage donut charts (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2375"}}>
          {`#2375`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Used vars to enable Red Hat fonts (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2584"}}>
          {`#2584`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"components-patternflyreact-core3.75.2","size":"h3","className":"ws-title ws-h3"}}>
      {`Components (`}
      <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-core/v/3.75.2"}}>
        {`@patternfly/react-core@3.75.2`}
      </PatternflyThemeLink>
      {`)`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`About modal:`}
        </strong>
        {` AboutModal and Modal both now trap focus in the browser (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2428"}}>
          {`#2428`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Accordion:`}
        </strong>
        {` Added prop to heading level of parent component (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2290"}}>
          {`#2290`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Application launcher:`}
        </strong>
        {` Allowed custom icon for application launcher toggle (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2492"}}>
          {`#2492`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Badge:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Temporarily disabled problematic badges (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2530"}}>
              {`#2530`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added space between badges in the examples (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2556"}}>
              {`#2556`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Breadcrumb switcher:`}
        </strong>
        {` Fixed Autocomplete camelCase (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2457"}}>
          {`#2457`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Datalist:`}
        </strong>
        {` Added hidden and visible breakpoints (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2251"}}>
          {`#2251`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Dropdown:`}
        </strong>
        {` Provided option to not autofocus on first item (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2473"}}>
          {`#2473`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Empty state:`}
        </strong>
        {` Updated EmptyStateBody to use div instead of p (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2499"}}>
          {`#2499`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Experimental features:`}
        </strong>
        {` Added POC for experimental button and badge (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2363"}}>
          {`#2363`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Gallery:`}
        </strong>
        {` Converted gallery to TypeScript (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2432"}}>
          {`#2432`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Login page:`}
        </strong>
        {` Removed ariaLabel from checkbox (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2455"}}>
          {`#2455`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Modal:`}
        </strong>
        {` Modal now traps screen reader focus (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2406"}}>
          {`#2406`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Options menu:`}
        </strong>
        {` Updated examples to trigger select on the whole item (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2513"}}>
          {`#2513`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Pagination:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Dropdown closes on click outside of menu area (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2235"}}>
              {`#2235`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added ability to allow users to enter numbers into the input field (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2417"}}>
              {`#2417`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Select:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Removed ariaLabel from grouped checkbox select (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2456"}}>
              {`#2456`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added optional display via children to option (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2419"}}>
              {`#2419`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated typeahead filtered list when children change (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2518"}}>
              {`#2518`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Switch:`}
        </strong>
        {` Added OUIA compatibility to Switch (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2304"}}>
          {`#2304`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Tabs:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Allowed eventKey to accept a string (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2493"}}>
              {`#2493`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Implemented overflow styles for secondary tabs (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2512"}}>
              {`#2512`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Tooltip:`}
        </strong>
        {` Added support for aria prop from Tippy library (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2539"}}>
          {`#2539`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"typescript-conversion-0","size":"h3","className":"ws-title ws-h3"}}>
      {`TypeScript conversion`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Bullseye (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2427"}}>
          {`#2427`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Gallery (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2432"}}>
          {`#2432`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Grid (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2443"}}>
          {`#2443`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Level (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2450"}}>
          {`#2450`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Pagination (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2256"}}>
          {`#2256`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Split (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2466"}}>
          {`#2466`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Stack (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2412"}}>
          {`#2412`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Switch (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2311"}}>
          {`#2311`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Toolbar (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2475"}}>
          {`#2475`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"table-patternflyreact-table2.14.23","size":"h3","className":"ws-title ws-h3"}}>
      {`Table (`}
      <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-table/v/2.14.23"}}>
        {`@patternfly/react-table@2.14.23`}
      </PatternflyThemeLink>
      {`)`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Checked empty array in areAllRowsSelected (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2527"}}>
          {`#2527`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Added exports for compoundExpand (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2554"}}>
          {`#2554`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"styles-patternflyreact-styles3.5.7","size":"h3","className":"ws-title ws-h3"}}>
      {`Styles (`}
      <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-styles/v/3.5.7"}}>
        {`@patternfly/react-styles@3.5.7`}
      </PatternflyThemeLink>
      {`)`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Added pickProperties to react-styles utils exports (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2481"}}>
          {`#2481`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"docs-0","size":"h3","className":"ws-title ws-h3"}}>
      {`Docs`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Updated link to react-tokens page in the readme (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2453"}}>
          {`#2453`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"other-41","size":"h3","className":"ws-title ws-h3"}}>
      {`Other`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Build:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added PR comment on publishing to NPM (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2433"}}>
              {`#2433`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added Windows support (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2471"}}>
              {`#2471`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Chore:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Removed tippy-react dependency (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2505"}}>
              {`#2505`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated react-docs to use Red Hat font (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2563"}}>
              {`#2563`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Unit tests:`}
        </strong>
        {` Fixed keyHandler tests in util.test.js (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2489"}}>
          {`#2489`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"2019.04-release-notes-2019-07-02","size":"h2","className":"ws-title ws-h2"}}>
      {`2019.04 release notes (2019-07-02)`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Packages released:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-core/v/3.58.1"}}>
          {`@patternfly/react-core@3.58.1`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-inline-edit-extension/v/2.9.12"}}>
          {`@patternfly/react-inline-edit-extension@2.9.12`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-table/v/2.13.43"}}>
          {`@patternfly/react-table@2.13.43`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-topology/v/2.4.21"}}>
          {`@patternfly/react-topology@2.4.21`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-virtualized-extension/v/1.1.45"}}>
          {`@patternfly/react-virtualized-extension@1.1.45`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-charts/v/4.4.7"}}>
          {`@patternfly/react-charts@4.4.7`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-styles/v/3.4.6"}}>
          {`@patternfly/react-styles@3.4.6`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-tokens/v/2.6.5"}}>
          {`@patternfly/react-tokens@2.6.5`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"charts-patternflyreact-charts4.4.7","size":"h3","className":"ws-title ws-h3"}}>
      {`Charts (`}
      <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-charts/v/4.4.7"}}>
        {`@patternfly/react-charts@4.4.7`}
      </PatternflyThemeLink>
      {`)`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Added sparkline example and interpolation to area examples (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2373"}}>
          {`#2373`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Fixed themes for bar chart default colors (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2112"}}>
          {`#2112)`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        {`DonutThreshold: No longer show static threshold donut tooltips by default (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2270"}}>
          {`#2270`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Added support for legends and grids (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2324"}}>
          {`#2324`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"components-patternflyreact-core3.58.1","size":"h3","className":"ws-title ws-h3"}}>
      {`Components (`}
      <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-core/v/3.58.1"}}>
        {`@patternfly/react-core@3.58.1`}
      </PatternflyThemeLink>
      {`)`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`About modal:`}
        </strong>
        {` Changed strapline element to paragraph (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2376"}}>
          {`#2376`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Breadcrumb switcher:`}
        </strong>
        {` Disabled autocomplete (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2407"}}>
          {`#2407`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Card:`}
        </strong>
        {` Addedcompacted card variation (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2399"}}>
          {`#2399`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Checkbox:`}
        </strong>
        {` Added 3rd state to checkbox controlled by consumer (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2252"}}>
          {`#2252`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Chip group:`}
        </strong>
        {` Added heading level prop to toolbar chip group label (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2278"}}>
          {`#2278`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Data list:`}
        </strong>
        {` Added DataListRow to imports (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2353"}}>
          {`#2353`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Dropdown:`}
        </strong>
        {` Automatically focused first dropdown item when DropdownMenu (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2355"}}>
          {`#2355`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Expandable:`}
        </strong>
        {` Added button type to the expandable component (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2340"}}>
          {`#2340`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Label:`}
        </strong>
        {` Added TypeScript flag to the label docs (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2343"}}>
          {`#2343`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Notification badge:`}
        </strong>
        {` Added the notification badge component (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2342"}}>
          {`#2342)`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Options menu:`}
        </strong>
        {` Added disabled modifier to the toggle (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2401"}}>
          {`#2401`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Page:`}
        </strong>
        {` Added page section main nav type variant (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2268"}}>
          {`#2268`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Radio:`}
        </strong>
        {` Fixed warning from undefined starting params (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2292"}}>
          {`#2292`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Form:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated text in form component (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2352"}}>
              {`#2352`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Wrapped form label text in new element (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2332"}}>
              {`#2322`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Grid:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Removed size props from ...props (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2404"}}>
              {`#2404`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated grid layout to support new 2xl breakpoint (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2305"}}>
              {`#2305`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Tabs:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed TypeScript errors and revert `}
            <code {...{"className":"ws-code"}}>
              {`TabContainer`}
            </code>
            {` to a component (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2402"}}>
              {`#2402`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Remove comment from code (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2351"}}>
              {`#2351`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Made variant prop optional (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2348"}}>
              {`#2348`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"typescript-conversion-1","size":"h3","className":"ws-title ws-h3"}}>
      {`TypeScript conversion`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Copy to clipboard (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2131"}}>
          {`#2131`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Progress (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2307"}}>
          {`#2307`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Select (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2201"}}>
          {`#2201`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Input group (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2220"}}>
          {`#2220`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"2019.03-release-notes-2019-06-11","size":"h2","className":"ws-title ws-h2"}}>
      {`2019.03 release notes (2019-06-11)`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Packages released:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-charts/v/4.1.5"}}>
          {`@patternfly/react-charts@4.1.5`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-core/v/3.38.1"}}>
          {`@patternfly/react-core@3.38.1`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-inline-edit-extension/v/2.7.7"}}>
          {`@patternfly/react-inline-edit-extension@2.7.7`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-styles/v/3.3.3"}}>
          {`@patternfly/react-styles@3.3.3`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-table/v/2.11.1"}}>
          {`@patternfly/react-table@2.11.1`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-tokens/v/2.5.5"}}>
          {`@patternfly/react-tokens@2.5.5`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"charts-patternflyreact-charts4.1.5","size":"h3","className":"ws-title ws-h3"}}>
      {`Charts (`}
      <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-charts/v/4.1.5"}}>
        {`@patternfly/react-charts@4.1.5`}
      </PatternflyThemeLink>
      {`)`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Major bump react-charts (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2143"}}>
          {`#2143`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Changed default Chart padding property to show axis`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Refactored ChartTheme colors and utils for donut utilization theme`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`ChartLegend now defaults to be responsive`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Aligned label vertically and added donutHeight/Width defaults (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2193"}}>
          {`#2193`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Added examples on how to use VictoryZoomContainer (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/1879"}}>
          {`#1879`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Apply defaults to custom legend (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/issues/2194"}}>
          {`#2194`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Chart & ChartStack to use ReactNode as children type (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2155"}}>
          {`#2155`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Remove ChartThemeDefinition export from index.ts (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2149"}}>
          {`#2149`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"components-patternflyreact-core3.38.1","size":"h3","className":"ws-title ws-h3"}}>
      {`Components (`}
      <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-core/v/3.38.1"}}>
        {`@patternfly/react-core@3.38.1`}
      </PatternflyThemeLink>
      {`)`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`About modal:`}
        </strong>
        {` Support isOpen initially set true in about modal. This ensures the about modal container exists on initial load if `}
        <code {...{"className":"ws-code"}}>
          {`isOpen`}
        </code>
        {` is passed `}
        <code {...{"className":"ws-code"}}>
          {`true`}
        </code>
        {` with children contents initially (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2153"}}>
          {`#2153`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Navigation:`}
        </strong>
        {` On NavItems, Maintain className passed to custom NavItems. Keeps classNames set on the child of a custom NavItem (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2134"}}>
          {`#2134`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Pagination:`}
        </strong>
        {` When empty array is sent to pagination now no per page is visible. It is now possible with Per page option to hide by passing empty array of per page options (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2175"}}>
          {`#2175`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Select:`}
        </strong>
        {` Added keyboard interaction to typeahead variants, other variants remained unchanged. Enter, with select closed, toggles open the menu. Focus should now remains on input. Arrow up and down navigates the options with a focus styling. Enter, with select opened, selects the highlighted item (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2013"}}>
          {`#2013`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Tabs:`}
        </strong>
        {` Fixed tabs ref proptype (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2158"}}>
          {`#2158`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"table-patternflyreact-table2.11.1","size":"h3","className":"ws-title ws-h3"}}>
      {`Table (`}
      <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-table/v/2.11.1"}}>
        {`@patternfly/react-table@2.11.1`}
      </PatternflyThemeLink>
      {`)`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Added React-Virtualized PF4 tables (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2011"}}>
          {`#2011`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Exported RowWrapper implementation (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2118"}}>
          {`#2118`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Some props of IRow should not required Makes following props of `}
        <code {...{"className":"ws-code"}}>
          {`IRow`}
        </code>
        {` to optional isOpen parent props (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2196"}}>
          {`#2196`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Fixed error Unknown event handler property `}
        <code {...{"className":"ws-code"}}>
          {`onCollapse`}
        </code>
        {`. Removed `}
        <code {...{"className":"ws-code"}}>
          {`rows`}
        </code>
        {` and `}
        <code {...{"className":"ws-code"}}>
          {`onCollapse`}
        </code>
        {` from `}
        <code {...{"className":"ws-code"}}>
          {`...props`}
        </code>
        {` (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2195"}}>
          {`#2195`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Added support for .pf-m-grid-2xl breakpoint. Added breakpoint to list of available breakpoints and updated snapshot (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2206"}}>
          {`#2206`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Reverted bodywrapper conversion to stateless-function (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2161"}}>
          {`#2161`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"topology-patternflyreact-topology","size":"h3","className":"ws-title ws-h3"}}>
      {`Topology (@patternfly/react-topology)`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Added @patternfly/react-topology package (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2170"}}>
          {`#2170`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Fixed esm output and converted react-virtualized-extension to TS (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2190"}}>
          {`#2190`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"styles-patternflyreact-styles3.3.3","size":"h3","className":"ws-title ws-h3"}}>
      {`Styles (`}
      <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-styles/v/3.3.3"}}>
        {`@patternfly/react-styles@3.3.3`}
      </PatternflyThemeLink>
      {`)`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Changed all the React css imports and added types for them. Instead of using a babel plugin to generate the JS at compile time for our CSS-in-JS solution, we statically generate it beforehand in react-styles (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2085"}}>
          {`#2085`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Bumped jsdom (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2080"}}>
          {`#2080`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Added sideeffects to react-styles (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2207"}}>
          {`#2207`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"typescript-conversion-2","size":"h3","className":"ws-title ws-h3"}}>
      {`TypeScript conversion`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Backdrop (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2105"}}>
          {`#2105`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Background image (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2070"}}>
          {`#2070`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Options menu (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2002"}}>
          {`#2002`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Text input (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/1914"}}>
          {`#1914`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"2019.02-release-notes-2019-06-05","size":"h2","className":"ws-title ws-h2"}}>
      {`2019.02 release notes (2019-06-05)`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Packages released:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-charts/v/3.6.4"}}>
          {`@patternfly/react-charts@3.6.4`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-core/v/3.34.2"}}>
          {`@patternfly/react-core@3.34.2`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-inline-edit-extension/v/2.5.2"}}>
          {`@patternfly/react-inline-edit-extension@2.5.2`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-styles/v/3.2.3"}}>
          {`@patternfly/react-styles@3.2.3`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-table/v/2.9.2"}}>
          {`@patternfly/react-table@2.9.2`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-tokens/v/2.5.3"}}>
          {`@patternfly/react-tokens@2.5.3`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"components-patternflyreact-core3.34.2","size":"h3","className":"ws-title ws-h3"}}>
      {`Components (`}
      <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-core/v/3.34.2"}}>
        {`@patternfly/react-core@3.34.2`}
      </PatternflyThemeLink>
      {`)`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`About Modal:`}
        </strong>
        {` Provided a way to set the background using props (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/1940"}}>
          {`#1940`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Accordion:`}
        </strong>
        {` Added accordion component (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/1511"}}>
          {`#1511`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Background Image:`}
        </strong>
        {` Fixed background image spacing issue (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/1923"}}>
          {`#1923`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Card:`}
        </strong>
        {` Added card is-hoverable modifier prop (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/1852"}}>
          {`#1852`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Checkbox:`}
        </strong>
        {` Set checked value correctly (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/1929"}}>
          {`#1929`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Copy to Clipboard:`}
        </strong>
        {` Fixed docs (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/1821"}}>
          {`#1821`}
        </PatternflyThemeLink>
        {`)`}
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Changed doc text (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/1823"}}>
              {`#1823`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Removed textarea from clipboard copy (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/1840"}}>
              {`#1840`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Dropdown:`}
        </strong>
        {` Renamed toggle export (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/1861"}}>
          {`#1861`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Grid:`}
        </strong>
        {` Added missing props in d.ts (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/1749"}}>
          {`#1749`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Icons:`}
        </strong>
        {` Added font awesome brands icons(`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/1669"}}>
          {`#1669`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Popover:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated Popover max width. We made maxWidth optional (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2110"}}>
              {`#2110`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Enabled highlighting and selecting text in popover (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/1757"}}>
              {`#1757`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Handled on enter focusing when options are disabled (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2025"}}>
              {`#2025`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Changed PopoverPosition from a const to an enum. This allows users to specify their choice of a string or object property for the position property value on Popover component. Also adds a test that exercises this method to ensure it doesn't regress going forward (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2113"}}>
              {`#2113`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Select:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated the SelectProps interface to avoid a type error when importing react-core into a TypeScript application. I also removed some unnecessary code in a couple of the demo's I followed recently. Copying the code as is was creating an error. I think they were safe deletions but worth double checking (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2107"}}>
              {`#2107`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed ListGroupItem import (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/1867"}}>
              {`#1867`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added user personalized icon in Select component (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/1768"}}>
              {`#1768`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"charts-patternflyreact-charts3.6.4","size":"h3","className":"ws-title ws-h3"}}>
      {`Charts `}
      <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-charts/v/3.6.4"}}>
        {`@patternfly/react-charts@3.6.4`}
      </PatternflyThemeLink>
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Introduced Donut utilization chart and thresholds (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2064"}}>
          {`#2064`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Added example styles (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/1889"}}>
          {`#1889`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Fixed chart font stack to use PatternFly core sans-serif font stack (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/1865"}}>
          {`#1865`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Refactored themes for bar chart default colors (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2112"}}>
          {`#2112`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Added default for component props (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2103"}}>
          {`#2103`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"docs-1","size":"h3","className":"ws-title ws-h3"}}>
      {`Docs`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Use frontmatter for what props to show in docs (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2072"}}>
          {`#2072`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`If you add new imports to your MDX file, rerun yarn develop which now clears the gatsby-mdx cache and lets you be on your merry way (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2059"}}>
          {`#2059`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Hide inherited TypeScript props (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/1866"}}>
          {`#1866`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Use MDX for docs (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/1753"}}>
          {`#1753`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Reverted bodywrapper conversion to stateless-function (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2161"}}>
          {`#2161`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"typescript-conversion-3","size":"h3","className":"ws-title ws-h3"}}>
      {`TypeScript conversion`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Packages released:
We are in the process of converting all components to TypeScript to provide better types for consumers. The following components have been converted:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Alert (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/1978"}}>
          {`#1978`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Badge (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2048"}}>
          {`#2048`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Breadcrumb (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/1723"}}>
          {`#1723`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Button (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/1903"}}>
          {`#1903`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Brand (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/1918"}}>
          {`#1918`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Card (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/1885"}}>
          {`#1885`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Charts (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2081"}}>
          {`#2081`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Empty State (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/1917"}}>
          {`#1917`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Label (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/1896"}}>
          {`#1896`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`List (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/1946"}}>
          {`#1946`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Login Page (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/1967"}}>
          {`#1967`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Modal (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/1942"}}>
          {`#1942`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Popover (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/2023"}}>
          {`#2023`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Radio (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/1945"}}>
          {`#1945`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Text (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/1907"}}>
          {`#1907`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"2019.01-release-notes-2019-05-02","size":"h2","className":"ws-title ws-h2"}}>
      {`2019.01 release notes (2019-05-02)`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`We don't have notes for this release yet.`}
    </p>
  </React.Fragment>
);
Component.displayName = 'DeveloperResourcesReleaseNotesReactDocs';
Component.pageData = pageData;

export default Component;
