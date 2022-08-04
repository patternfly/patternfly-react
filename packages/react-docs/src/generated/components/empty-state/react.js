import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import CubesIcon from '@patternfly/react-icons/dist/esm/icons/cubes-icon';
import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';
const pageData = {
  "id": "Empty state",
  "section": "components",
  "source": "react",
  "slug": "/components/empty-state/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/components/EmptyState/examples/EmptyState.md",
  "propComponents": [
    {
      "name": "EmptyState",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside the EmptyState",
          "required": true
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the EmptyState",
          "defaultValue": "''"
        },
        {
          "name": "isFullHeight",
          "type": "boolean",
          "description": "Cause component to consume the available height of its container"
        },
        {
          "name": "variant",
          "type": "'xs' | 'small' | 'large' | 'xl' | 'full'",
          "description": "Modifies EmptyState max-width",
          "defaultValue": "EmptyStateVariant.full"
        }
      ]
    },
    {
      "name": "EmptyStateBody",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside the EmptyState"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the EmptyState",
          "defaultValue": "''"
        }
      ]
    },
    {
      "name": "EmptyStateIcon",
      "description": "",
      "props": [
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the EmptyState",
          "defaultValue": "''"
        },
        {
          "name": "color",
          "type": "string",
          "description": "Changes the color of the icon."
        },
        {
          "name": "component",
          "type": "React.ComponentType<any>",
          "description": "Component to be rendered inside the EmptyState on container variant"
        },
        {
          "name": "icon",
          "type": "React.ComponentType<any>",
          "description": "Icon component to be rendered inside the EmptyState on icon variant\nUsually a CheckCircleIcon, ExclamationCircleIcon, LockIcon, PlusCircleIcon, RocketIcon\nSearchIcon, or WrenchIcon"
        },
        {
          "name": "variant",
          "type": "'icon' | 'container'",
          "description": "Adds empty state icon variant styles",
          "defaultValue": "'icon'"
        }
      ]
    },
    {
      "name": "EmptyStateSecondaryActions",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside the EmptyState",
          "defaultValue": "null"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the EmptyState",
          "defaultValue": "''"
        }
      ]
    }
  ],
  "cssPrefix": [
    "pf-c-empty-state"
  ],
  "examples": [
    "Basic",
    "Extra small",
    "Small",
    "Large",
    "Extra large",
    "Spinner",
    "No match found"
  ]
};
pageData.liveContext = {
  CubesIcon,
  SearchIcon
};
pageData.examples = {
  'Basic': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  Title,\n  Button,\n  EmptyState,\n  EmptyStateIcon,\n  EmptyStateBody,\n  EmptyStateSecondaryActions\n} from '@patternfly/react-core';\nimport CubesIcon from '@patternfly/react-icons/dist/esm/icons/cubes-icon';\n\nexport const EmptyStateBasic: React.FunctionComponent = () => (\n  <EmptyState>\n    <EmptyStateIcon icon={CubesIcon} />\n    <Title headingLevel=\"h4\" size=\"lg\">\n      Empty state\n    </Title>\n    <EmptyStateBody>\n      This represents an the empty state pattern in Patternfly 4. Hopefully it's simple enough to use but flexible\n      enough to meet a variety of needs.\n    </EmptyStateBody>\n    <Button variant=\"primary\">Primary action</Button>\n    <EmptyStateSecondaryActions>\n      <Button variant=\"link\">Multiple</Button>\n      <Button variant=\"link\">Action Buttons</Button>\n      <Button variant=\"link\">Can</Button>\n      <Button variant=\"link\">Go here</Button>\n      <Button variant=\"link\">In the secondary</Button>\n      <Button variant=\"link\">Action area</Button>\n    </EmptyStateSecondaryActions>\n  </EmptyState>\n);\n","title":"Basic","lang":"ts"}}>
      
    </Example>,
  'Extra small': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  Title,\n  Button,\n  EmptyState,\n  EmptyStateVariant,\n  EmptyStateBody,\n  EmptyStateSecondaryActions\n} from '@patternfly/react-core';\n\nexport const EmptyStateExtraSmall: React.FunctionComponent = () => (\n  <EmptyState variant={EmptyStateVariant.xs}>\n    <Title headingLevel=\"h4\" size=\"md\">\n      Empty state\n    </Title>\n    <EmptyStateBody>\n      This represents an the empty state pattern in Patternfly 4. Hopefully it's simple enough to use but flexible\n      enough to meet a variety of needs.\n    </EmptyStateBody>\n    <EmptyStateSecondaryActions>\n      <Button variant=\"link\">Multiple</Button>\n      <Button variant=\"link\">Action Buttons</Button>\n      <Button variant=\"link\">Can</Button>\n      <Button variant=\"link\">Go here</Button>\n      <Button variant=\"link\">In the secondary</Button>\n      <Button variant=\"link\">Action area</Button>\n    </EmptyStateSecondaryActions>\n  </EmptyState>\n);\n","title":"Extra small","lang":"ts"}}>
      
    </Example>,
  'Small': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  Title,\n  Button,\n  EmptyState,\n  EmptyStateVariant,\n  EmptyStateIcon,\n  EmptyStateBody,\n  EmptyStateSecondaryActions\n} from '@patternfly/react-core';\nimport CubesIcon from '@patternfly/react-icons/dist/esm/icons/cubes-icon';\n\nexport const EmptyStateSmall: React.FunctionComponent = () => (\n  <EmptyState variant={EmptyStateVariant.small}>\n    <EmptyStateIcon icon={CubesIcon} />\n    <Title headingLevel=\"h4\" size=\"lg\">\n      Empty state\n    </Title>\n    <EmptyStateBody>\n      This represents an the empty state pattern in Patternfly 4. Hopefully it's simple enough to use but flexible\n      enough to meet a variety of needs.\n    </EmptyStateBody>\n    <Button variant=\"primary\">Primary action</Button>\n    <EmptyStateSecondaryActions>\n      <Button variant=\"link\">Multiple</Button>\n      <Button variant=\"link\">Action Buttons</Button>\n      <Button variant=\"link\">Can</Button>\n      <Button variant=\"link\">Go here</Button>\n      <Button variant=\"link\">In the secondary</Button>\n      <Button variant=\"link\">Action area</Button>\n    </EmptyStateSecondaryActions>\n  </EmptyState>\n);\n","title":"Small","lang":"ts"}}>
      
    </Example>,
  'Large': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  Title,\n  Button,\n  EmptyState,\n  EmptyStateVariant,\n  EmptyStateIcon,\n  EmptyStateBody,\n  EmptyStateSecondaryActions\n} from '@patternfly/react-core';\nimport CubesIcon from '@patternfly/react-icons/dist/esm/icons/cubes-icon';\n\nexport const EmptyStateLarge: React.FunctionComponent = () => (\n  <EmptyState variant={EmptyStateVariant.large}>\n    <EmptyStateIcon icon={CubesIcon} />\n    <Title headingLevel=\"h4\" size=\"lg\">\n      Empty state\n    </Title>\n    <EmptyStateBody>\n      This represents an the empty state pattern in Patternfly 4. Hopefully it's simple enough to use but flexible\n      enough to meet a variety of needs.\n    </EmptyStateBody>\n    <Button variant=\"primary\">Primary action</Button>\n    <EmptyStateSecondaryActions>\n      <Button variant=\"link\">Multiple</Button>\n      <Button variant=\"link\">Action Buttons</Button>\n      <Button variant=\"link\">Can</Button>\n      <Button variant=\"link\">Go here</Button>\n      <Button variant=\"link\">In the secondary</Button>\n      <Button variant=\"link\">Action area</Button>\n    </EmptyStateSecondaryActions>\n  </EmptyState>\n);\n","title":"Large","lang":"ts"}}>
      
    </Example>,
  'Extra large': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  Title,\n  Button,\n  EmptyState,\n  EmptyStateVariant,\n  EmptyStateIcon,\n  EmptyStateBody,\n  EmptyStateSecondaryActions\n} from '@patternfly/react-core';\nimport CubesIcon from '@patternfly/react-icons/dist/esm/icons/cubes-icon';\n\nexport const EmptyStateExtraLarge: React.FunctionComponent = () => (\n  <EmptyState variant={EmptyStateVariant.xl}>\n    <EmptyStateIcon icon={CubesIcon} />\n    <Title headingLevel=\"h5\" size=\"4xl\">\n      Empty state\n    </Title>\n    <EmptyStateBody>\n      This represents an the empty state pattern in Patternfly 4. Hopefully it's simple enough to use but flexible\n      enough to meet a variety of needs.\n    </EmptyStateBody>\n    <Button variant=\"primary\">Primary action</Button>\n    <EmptyStateSecondaryActions>\n      <Button variant=\"link\">Multiple</Button>\n      <Button variant=\"link\">Action Buttons</Button>\n      <Button variant=\"link\">Can</Button>\n      <Button variant=\"link\">Go here</Button>\n      <Button variant=\"link\">In the secondary</Button>\n      <Button variant=\"link\">Action area</Button>\n    </EmptyStateSecondaryActions>\n  </EmptyState>\n);\n","title":"Extra large","lang":"ts"}}>
      
    </Example>,
  'Spinner': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Title, EmptyState, EmptyStateIcon, Spinner } from '@patternfly/react-core';\n\nexport const EmptyStateSpinner: React.FunctionComponent = () => (\n  <EmptyState>\n    <EmptyStateIcon variant=\"container\" component={Spinner} />\n    <Title size=\"lg\" headingLevel=\"h4\">\n      Loading\n    </Title>\n  </EmptyState>\n);\n","title":"Spinner","lang":"ts"}}>
      
    </Example>,
  'No match found': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Title, Button, EmptyState, EmptyStatePrimary, EmptyStateIcon, EmptyStateBody } from '@patternfly/react-core';\nimport SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';\n\nexport const EmptyStateNoMatchFound: React.FunctionComponent = () => (\n  <EmptyState>\n    <EmptyStateIcon icon={SearchIcon} />\n    <Title size=\"lg\" headingLevel=\"h4\">\n      No results found\n    </Title>\n    <EmptyStateBody>No results match the filter criteria. Clear all filters and try again.</EmptyStateBody>\n    <EmptyStatePrimary>\n      <Button variant=\"link\">Clear all filters</Button>\n    </EmptyStatePrimary>\n  </EmptyState>\n);\n","title":"No match found","lang":"ts"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Basic"])}
    {React.createElement(pageData.examples["Extra small"])}
    {React.createElement(pageData.examples["Small"])}
    {React.createElement(pageData.examples["Large"])}
    {React.createElement(pageData.examples["Extra large"])}
    {React.createElement(pageData.examples["Spinner"])}
    {React.createElement(pageData.examples["No match found"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsEmptyStateReactDocs';
Component.pageData = pageData;

export default Component;
