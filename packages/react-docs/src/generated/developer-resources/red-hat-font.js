import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Red Hat font",
  "section": "developer-resources",
  "source": "pages-overview",
  "slug": "/developer-resources/red-hat-font",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/node_modules/theme-patternfly-org/pages/red-hat-font.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`PR - `}
      <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4476"}}>
        {`https://github.com/patternfly/patternfly/pull/4476`}
      </PatternflyThemeLink>
    </p>
    <p {...{"className":"ws-p"}}>
      {`Available in `}
      <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/releases/tag/prerelease-v4.161.0"}}>
        {`v4.161.0`}
      </PatternflyThemeLink>
    </p>
    <AutoLinkHeader {...{"id":"overview","size":"h2","className":"ws-title ws-h2"}}>
      {`Overview`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`PatternFly has created opt-ins for `}
      <code {...{"className":"ws-code"}}>
        {`v4.0.2`}
      </code>
      {` of the `}
      <PatternflyThemeLink {...{"to":"https://github.com/RedHatOfficial/RedHatFont/"}}>
        {`RedHatFont`}
      </PatternflyThemeLink>
      {`. This is an update from `}
      <code {...{"className":"ws-code"}}>
        {`v2.x`}
      </code>
      {`. There are many new features in this update, including:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Variable fonts`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`New weights in Red Hat Display and Red Hat Text`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Tabular figures (monospaced numbers) in Red Hat Display and Red Hat Text`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Red Hat Mono typeface`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Dropping support for IE11 (dropped the `}
        <code {...{"className":"ws-code"}}>
          {`.woff`}
        </code>
        {` format)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"available-opt-ins","size":"h3","className":"ws-title ws-h3"}}>
      {`Available Opt-ins`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"id":".pf-m-redhat-updated-font","size":"h4","className":"ws-title ws-h4"}}>
      <code {...{"className":"ws-code"}}>
        {`.pf-m-redhat-updated-font`}
      </code>
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Updates the Red Hat Text and Red Hat Display font stacks to `}
      <code {...{"className":"ws-code"}}>
        {`v4.0.2`}
      </code>
      {`. This should be a safe, seamless opt-in, with small improvements to glyph shape, kerning, metadata across the entire family of fonts. Potential concerns may be that this will remove support for IE11 by removing the `}
      <code {...{"className":"ws-code"}}>
        {`.woff`}
      </code>
      {` format support, and small layout shifts as result of the small improvements.`}
    </p>
    <AutoLinkHeader {...{"id":".pf-m-redhatmono-font","size":"h4","className":"ws-title ws-h4"}}>
      <code {...{"className":"ws-code"}}>
        {`.pf-m-redhatmono-font`}
      </code>
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Updates the monospaced font stack to use the Red Hat Mono font. This opt-in can be combined with `}
      <code {...{"className":"ws-code"}}>
        {`.pf-m-redhat-updated-font`}
      </code>
      {`.`}
    </p>
    <AutoLinkHeader {...{"id":".pf-m-redhatvf-font","size":"h4","className":"ws-title ws-h4"}}>
      <code {...{"className":"ws-code"}}>
        {`.pf-m-redhatVF-font`}
      </code>
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Updates the Red Hat Text, Red Hat Display, and Red Hat Mono font stacks to use the variable font files.`}
    </p>
    <AutoLinkHeader {...{"id":".pf-m-tabular-nums","size":"h4","className":"ws-title ws-h4"}}>
      <code {...{"className":"ws-code"}}>
        {`.pf-m-tabular-nums`}
      </code>
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`This is a global class that can be applied to any element to enable monospaced numbers on that element and its children.`}
    </p>
    <AutoLinkHeader {...{"id":"using-opt-in-classes","size":"h3","className":"ws-title ws-h3"}}>
      {`Using opt-in classes`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`To opt-in to any of the new fonts (`}
      <code {...{"className":"ws-code"}}>
        {`.pf-m-redhat-updated-font`}
      </code>
      {`, `}
      <code {...{"className":"ws-code"}}>
        {`.pf-m-redhatmono-font`}
      </code>
      {`, and `}
      <code {...{"className":"ws-code"}}>
        {`.pf-m-redhatVF-font`}
      </code>
      {`), add the opt-in class to the `}
      <code {...{"className":"ws-code"}}>
        {`<body>`}
      </code>
      {` tag of your application. To opt-in to monospaced numbers globally across your application, apply `}
      <code {...{"className":"ws-code"}}>
        {`.pf-m-tabular-nums`}
      </code>
      {` to any element that wraps your entire application (eg, `}
      <code {...{"className":"ws-code"}}>
        {`<body>`}
      </code>
      {`, `}
      <code {...{"className":"ws-code"}}>
        {`<div id="root">`}
      </code>
      {`, `}
      <code {...{"className":"ws-code"}}>
        {`<div class="pf-c-page">`}
      </code>
      {`, etc). To opt-in to monospaced numbers on a particular element and its children, add the class to that element itself.`}
    </p>
  </React.Fragment>
);
Component.displayName = 'DeveloperResourcesRedHatFontDocs';
Component.pageData = pageData;

export default Component;
