import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport0 from '../../../../../node_modules/theme-patternfly-org/pages/./img/component-variable-mapping.png';
import { CSSVariables } from '../../../../../node_modules/theme-patternfly-org/pages/../components/cssVariables/cssVariables';
const pageData = {
  "id": "Global CSS variables",
  "section": "developer-resources",
  "source": "pages-overview",
  "slug": "/developer-resources/global-css-variables",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/node_modules/theme-patternfly-org/pages/global-css-variables.md"
};
pageData.liveContext = {
  CSSVariables
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"about-css-variables","size":"h2","className":"ws-title ws-h2"}}>
      {`About CSS variables`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The CSS variable system is a two-layer theming system where global variables inform component variables.`}
    </p>
    <AutoLinkHeader {...{"id":"global-variables","size":"h3","className":"ws-title ws-h3"}}>
      {`Global variables`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Global variables define and enforce global style elements (like values for color, spacing, and font size) across the entire system.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Global variables follow this formula:`}
    </p>
    <p {...{"className":"ws-p"}}>
      <code {...{"className":"ws-code"}}>
        {`--pf-global--concept--PropertyCamelCase--modifier--state`}
      </code>
    </p>
    <p {...{"className":"ws-p"}}>
      {`Where...`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`A `}
        <code {...{"className":"ws-code"}}>
          {`concept`}
        </code>
        {` is something like a `}
        <code {...{"className":"ws-code"}}>
          {`spacer`}
        </code>
        {` or `}
        <code {...{"className":"ws-code"}}>
          {`main-title`}
        </code>
        {`.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`A `}
        <code {...{"className":"ws-code"}}>
          {`PropertyCamelCase`}
        </code>
        {` is something like `}
        <code {...{"className":"ws-code"}}>
          {`BackgroundColor`}
        </code>
        {` or `}
        <code {...{"className":"ws-code"}}>
          {`FontSize`}
        </code>
        {`.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`A `}
        <code {...{"className":"ws-code"}}>
          {`modifier`}
        </code>
        {` is something like `}
        <code {...{"className":"ws-code"}}>
          {`sm`}
        </code>
        {` or `}
        <code {...{"className":"ws-code"}}>
          {`lg`}
        </code>
        {`.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`A `}
        <code {...{"className":"ws-code"}}>
          {`state`}
        </code>
        {` is something like `}
        <code {...{"className":"ws-code"}}>
          {`hover`}
        </code>
        {` or `}
        <code {...{"className":"ws-code"}}>
          {`expanded`}
        </code>
        {`.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Example:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Note: global variables are scoped to `}
        <code {...{"className":"ws-code"}}>
          {`:root`}
        </code>
        <Example {...{"code":":root {\n  /* Default & hovered link colors */\n  --pf-global--link--Color: #06c;\n  --pf-global--link--Color--hover: #004080;\n}","lang":"css"}}>
        </Example>
      </li>
    </ul>
    <br/>
    <p {...{"className":"ws-p"}}>
      {`The `}
      <PatternflyThemeLink {...{"to":"#global-css-variables"}}>
        {`full list of global CSS variables`}
      </PatternflyThemeLink>
      {` can be found below.`}
    </p>
    <AutoLinkHeader {...{"id":"component-variables","size":"h3","className":"ws-title ws-h3"}}>
      {`Component variables`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Component variables are used to define custom properties at the component-level. Component variables are always defined by global variables.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Component variables follow this formula:`}
    </p>
    <p {...{"className":"ws-p"}}>
      <code {...{"className":"ws-code"}}>
        {`--pf-c-block__element--modifier--state--breakpoint--pseudo-element--PropertyCamelCase`}
      </code>
    </p>
    <p {...{"className":"ws-p"}}>
      {`Where...`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`pf-c-block`}
        </code>
        {` refers to the block, usually the component or layout name, like `}
        <code {...{"className":"ws-code"}}>
          {`pf-c-alert`}
        </code>
        {`.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`__element`}
        </code>
        {` refers to the element inside of the block, like `}
        <code {...{"className":"ws-code"}}>
          {`__title`}
        </code>
        {`.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`modifier`}
        </code>
        {` is prefixed with`}
        <code {...{"className":"ws-code"}}>
          {`-m`}
        </code>
        {` and refers to a modifier class such as `}
        <code {...{"className":"ws-code"}}>
          {`.pf-m-danger`}
        </code>
        {`.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`state`}
        </code>
        {` is something like `}
        <code {...{"className":"ws-code"}}>
          {`hover`}
        </code>
        {` or `}
        <code {...{"className":"ws-code"}}>
          {`active`}
        </code>
        {`.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`breakpoint`}
        </code>
        {` is a media query breakpoint such as `}
        <code {...{"className":"ws-code"}}>
          {`sm`}
        </code>
        {` for `}
        <code {...{"className":"ws-code"}}>
          {`$pf-global--breakpoint--xs`}
        </code>
        {`.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`pseudo-element`}
        </code>
        {` is either `}
        <code {...{"className":"ws-code"}}>
          {`before`}
        </code>
        {` or `}
        <code {...{"className":"ws-code"}}>
          {`after`}
        </code>
        {`.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Example:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Note: component variables are scoped to the top-level component selector`}
        <Example {...{"code":".pf-c-button {\n  /* Default, primary, and primary hovered button background colors */\n  --pf-c-button--BackgroundColor: transparent;\n  --pf-c-button--m-primary--BackgroundColor: var(--pf-global--primary-color--100);\n  --pf-c-button--m-primary--hover--BackgroundColor: var(--pf-global--primary-color--200);\n}","lang":"css"}}>
        </Example>
      </li>
    </ul>
    <br/>
    <p {...{"className":"ws-p"}}>
      {`Component variables are listed at the bottom of each component page (for example, `}
      <PatternflyThemeLink {...{"to":"/components/button#css-variables"}}>
        {`button css variables`}
      </PatternflyThemeLink>
      {`).`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Note that all component variables are declared at the top component level (for example, `}
      <code {...{"className":"ws-code"}}>
        {`.pf-c-button`}
      </code>
      {`). The component variable table linked above also shows all usages of each variable and the values they evaluate to in each case - expand any component variable row to view the global variable it is mapped to.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport0} width={srcImport0.width} height={srcImport0.height} {...{"alt":"Component variable mapping","className":"ws-img"}}>
      </img>
    </p>
    <AutoLinkHeader {...{"id":"breakpoint-variables-and-class-suffixes","size":"h3","className":"ws-title ws-h3"}}>
      {`Breakpoint variables and class suffixes`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`PatternFly defines a number of standard breakpoints. These are always used as a `}
      <code {...{"className":"ws-code"}}>
        {`min-width`}
      </code>
      {` breakpoint; i.e. using the `}
      <code {...{"className":"ws-code"}}>
        {`-md`}
      </code>
      {` breakpoint would apply to everything at the `}
      <code {...{"className":"ws-code"}}>
        {`-md`}
      </code>
      {` width and wider. (There is one exception to this, which is in the responsive behavior of the `}
      <PatternflyThemeLink {...{"to":"/components/table"}}>
        {`table component`}
      </PatternflyThemeLink>
      {`.)`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Breakpoint suffixes are used in utility classes and layouts as well as in many components as a way to apply class styles at a specified breakpoint. When available, `}
      <code {...{"className":"ws-code"}}>
        {`{-on-[breakpoint]}`}
      </code>
      {` will be shown as an available suffix for the class in the usage section of the documentation. The breakpoint suffix is optional and if not specified, the base class will be used. There are breakpoints for `}
      <code {...{"className":"ws-code"}}>
        {`sm`}
      </code>
      {`, `}
      <code {...{"className":"ws-code"}}>
        {`md`}
      </code>
      {`, `}
      <code {...{"className":"ws-code"}}>
        {`lg`}
      </code>
      {`, `}
      <code {...{"className":"ws-code"}}>
        {`xl`}
      </code>
      {`, and `}
      <code {...{"className":"ws-code"}}>
        {`2xl`}
      </code>
      {`, and the values for the corresponding breakpoints are defined below in the global variables `}
      <code {...{"className":"ws-code"}}>
        {`—pf-global—breakpoint—[breakpoint]`}
      </code>
      {`.`}
    </p>
    <AutoLinkHeader {...{"id":"using-the-variable-system","size":"h3","className":"ws-title ws-h3"}}>
      {`Using the variable system`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`PatternFly 4 styles provide a default starting point. You can use the variable system to make adjustments to that default styling. When you change one or more elements, you should package those values into a new SCSS stylesheet to replace the default styling.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Overrides to PatternFly variables should be made at the `}
      <code {...{"className":"ws-code"}}>
        {`:root`}
      </code>
      {` level for global variables or at the top-level component selector for component variables (for example, `}
      <code {...{"className":"ws-code"}}>
        {`.pf-c-button`}
      </code>
      {`), as these overrides will cascade down to children elements accordingly.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Example:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`Change the global primary color to red, but keep the original primary blue color as the background for primary buttons.`}
        </p>
        <Example {...{"code":"/* Override global primary color 100 to red */\n:root {\n  --pf-global--primary-color--100: var(--pf-global--palette--red-400);\n}\n\n/* Override the above override for only the primary button background color */\n.pf-c-button {\n  --pf-c-button--m-primary--BackgroundColor: var(--pf-global--palette--blue-400);\n}","lang":"css"}}>
        </Example>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"global-css-variables","size":"h2","className":"ws-title ws-h2"}}>
      {`Global CSS variables`}
    </AutoLinkHeader>
    <CSSVariables
  prefix="patternfly_variables"
  selector=":root"
  hideSelectorColumn
/>
    <AutoLinkHeader {...{"id":"chart-css-variables","size":"h2","className":"ws-title ws-h2"}}>
      {`Chart CSS variables`}
    </AutoLinkHeader>
    <CSSVariables
  prefix="patternfly_charts"
  hideSelectorColumn
/>
  </React.Fragment>
);
Component.displayName = 'DeveloperResourcesGlobalCssVariablesDocs';
Component.pageData = pageData;

export default Component;
