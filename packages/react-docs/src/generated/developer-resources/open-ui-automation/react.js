import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Open UI Automation",
  "section": "developer-resources",
  "source": "react",
  "slug": "/developer-resources/open-ui-automation/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/helpers/OUIA/OUIA.md",
  "examples": [
    "Example"
  ]
};
pageData.examples = {
  'Example': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Button } from '@patternfly/react-core';\n\nconst Example = () => (\n  <React.Fragment>\n    <Button>Button</Button>\n    <br />\n    <br />\n    <Button ouiaId=\"static_id\">Button with ouiaId</Button>\n  </React.Fragment>\n)","title":"Example","lang":"js"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"about-open-ui-automation","size":"h2","className":"ws-title ws-h2"}}>
      {`About Open UI Automation`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Open UI Automation (OUIA) is a specification of certain key guidelines to follow when creating a new
web framework or application. The goal is to ease the burden of creating and maintaining automated
testing environments. OUIA standardizes some HTML attributes and web page
behavior. It helps to create trivial and unambiguous locators of the elements in the DOM for
various automated test suites.`}
    </p>
    <AutoLinkHeader {...{"id":"why-not-use-id-or-aria","size":"h3","className":"ws-title ws-h3"}}>
      {`Why not use `}
      <code {...{"className":"ws-code"}}>
        {`id`}
      </code>
      {` or `}
      <code {...{"className":"ws-code"}}>
        {`ARIA`}
      </code>
      {`?`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <code {...{"className":"ws-code"}}>
        {`ARIA`}
      </code>
      {` is designed as an accessibility specification, and it doesn't account for aspects that are crucial
for automation such as a component type. The `}
      <code {...{"className":"ws-code"}}>
        {`id`}
      </code>
      {` attribute might be reserved by some front-end code, and
there might be restrictions on changing it. Having a separate id attribute makes it application and
framework independent. Developers and testers have a contract that these attributes are designed for
UI automation.`}
    </p>
    <AutoLinkHeader {...{"id":"specification-parts","size":"h3","className":"ws-title ws-h3"}}>
      {`Specification parts`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The following blocks exist in the specification:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`OUIA:Component`}
        </code>
        {` - components and component frameworks`}
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`OUIA:Page`}
        </code>
        {` - page identification`}
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`OUIA:PageSafe`}
        </code>
        {` - interaction safety`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`You can find the complete description on the `}
      <PatternflyThemeLink {...{"to":"https://ouia.readthedocs.io"}}>
        {`OUIA website`}
      </PatternflyThemeLink>
      {`.`}
    </p>
    <AutoLinkHeader {...{"id":"usage","size":"h3","className":"ws-title ws-h3"}}>
      {`Usage`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`PatternFly 4 generates a `}
      <code {...{"className":"ws-code"}}>
        {`data-ouia-component-type`}
      </code>
      {` attribute for selected components automatically
based on the name. For example, the `}
      <code {...{"className":"ws-code"}}>
        {`data-ouia-component-type`}
      </code>
      {` attribute for the
`}
      <PatternflyThemeLink {...{"to":"/components/button"}}>
        {`button component`}
      </PatternflyThemeLink>
      {` is `}
      <code {...{"className":"ws-code"}}>
        {`PF4/Button`}
      </code>
      {`. The id of the `}
      <code {...{"className":"ws-code"}}>
        {`data-ouia-component-id`}
      </code>
      {`
attribute is random by default. To specify the concrete id, add an `}
      <code {...{"className":"ws-code"}}>
        {`ouiaId`}
      </code>
      {` prop to the
component.`}
    </p>
    {React.createElement(pageData.examples["Example"])}
    <AutoLinkHeader {...{"id":"ouia-compliant-patternfly-4-components","size":"h2","className":"ws-title ws-h2"}}>
      {`OUIA-compliant PatternFly 4 components`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"id":"react-core-package","size":"h3","className":"ws-title ws-h3"}}>
      {`react-core package`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/components/alert"}}>
          {`Alert`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/components/breadcrumb"}}>
          {`Breadcrumb`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/components/button"}}>
          {`Button`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/components/card"}}>
          {`Card`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/components/checkbox"}}>
          {`Checkbox`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/components/chip"}}>
          {`Chip`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/components/chipg-roup"}}>
          {`ChipGroup`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/components/context-selector"}}>
          {`ContextSelector`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/components/dropdown"}}>
          {`Dropdown`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/components/dropdown"}}>
          {`DropdownItem`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/components/dropdown"}}>
          {`DropdownSeparator`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/components/dropdown"}}>
          {`DropdownToggle`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/components/dropdown"}}>
          {`DropdownToggleCheckbox`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/components/form-select"}}>
          {`FormSelect`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/components/menu"}}>
          {`Menu`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/components/modal"}}>
          {`Modal`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/components/modal"}}>
          {`ModalContent`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/components/navigation"}}>
          {`Nav`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/components/navigation"}}>
          {`NavExpandable`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/components/navigation"}}>
          {`NavItem`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/components/options-menu"}}>
          {`OptionsMenu`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/components/pagination"}}>
          {`Pagination`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/components/radio"}}>
          {`Radio`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/components/select"}}>
          {`Select`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/components/switch"}}>
          {`Switch`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/components/tabs"}}>
          {`TabButton`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/components/tabs"}}>
          {`TabContent`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/components/tabs"}}>
          {`Tabs`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/components/text"}}>
          {`Text`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/components/text-input"}}>
          {`TextInput`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/components/title"}}>
          {`Title`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/components/toolbar"}}>
          {`Toolbar`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"react-table-package","size":"h3","className":"ws-title ws-h3"}}>
      {`react-table package`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/components/table"}}>
          {`RowWrapper`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/components/table"}}>
          {`Table`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/components/table"}}>
          {`TableComposable`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/components/table"}}>
          {`Tr`}
        </PatternflyThemeLink>
      </li>
    </ul>
  </React.Fragment>
);
Component.displayName = 'DeveloperResourcesOpenUiAutomationReactDocs';
Component.pageData = pageData;

export default Component;
