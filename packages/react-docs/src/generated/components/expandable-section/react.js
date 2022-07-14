import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Expandable section",
  "section": "components",
  "source": "react",
  "slug": "/components/expandable-section/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/components/ExpandableSection/examples/ExpandableSection.md",
  "propComponents": [
    {
      "name": "ExpandableSection",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside the Expandable Component"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the Expandable Component",
          "defaultValue": "''"
        },
        {
          "name": "contentId",
          "type": "string",
          "description": "ID of the content of the expandable section",
          "defaultValue": "''"
        },
        {
          "name": "displaySize",
          "type": "'default' | 'large'",
          "description": "Display size variant. Set to large for disclosure styling.",
          "defaultValue": "'default'"
        },
        {
          "name": "isActive",
          "type": "boolean",
          "description": "Forces active state",
          "defaultValue": "false"
        },
        {
          "name": "isDetached",
          "type": "boolean",
          "description": "Indicates the expandable section has a detached toggle",
          "defaultValue": "false"
        },
        {
          "name": "isExpanded",
          "type": "boolean",
          "description": "Flag to indicate if the content is expanded"
        },
        {
          "name": "isIndented",
          "type": "boolean",
          "description": "Flag to indicate if the content is indented",
          "defaultValue": "false"
        },
        {
          "name": "isWidthLimited",
          "type": "boolean",
          "description": "Flag to indicate the width of the component is limited. Set to true for disclosure styling.",
          "defaultValue": "false"
        },
        {
          "name": "onToggle",
          "type": "(isExpanded: boolean) => void",
          "description": "Callback function to toggle the expandable content. Detached expandable sections should use the onToggle property of ExpandableSectionToggle.",
          "defaultValue": "(isExpanded): void => undefined"
        },
        {
          "name": "toggleContent",
          "type": "React.ReactNode",
          "description": "React node that appears in the attached toggle in place of toggle text"
        },
        {
          "name": "toggleText",
          "type": "string",
          "description": "Text that appears in the attached toggle",
          "defaultValue": "''"
        },
        {
          "name": "toggleTextCollapsed",
          "type": "string",
          "description": "Text that appears in the attached toggle when collapsed (will override toggleText if both are specified; used for uncontrolled expandable with dynamic toggle text)",
          "defaultValue": "''"
        },
        {
          "name": "toggleTextExpanded",
          "type": "string",
          "description": "Text that appears in the attached toggle when expanded (will override toggleText if both are specified; used for uncontrolled expandable with dynamic toggle text)",
          "defaultValue": "''"
        }
      ]
    },
    {
      "name": "ExpandableSectionToggle",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside the expandable toggle."
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the expandable toggle.",
          "defaultValue": "''"
        },
        {
          "name": "contentId",
          "type": "string",
          "description": "ID of the toggle's respective expandable section content."
        },
        {
          "name": "direction",
          "type": "'up' | 'down'",
          "description": "Direction the toggle arrow should point when the expandable section is expanded.",
          "defaultValue": "'down'"
        },
        {
          "name": "isExpanded",
          "type": "boolean",
          "description": "Flag indicating if the expandable section is expanded.",
          "defaultValue": "false"
        },
        {
          "name": "onToggle",
          "type": "(isExpanded: boolean) => void",
          "description": "Callback function to toggle the expandable content."
        }
      ]
    }
  ],
  "cssPrefix": [
    "pf-c-expandable-section"
  ],
  "examples": [
    "Basic",
    "Uncontrolled",
    "Uncontrolled with dynamic toggle text",
    "Detached",
    "Disclosure variation",
    "Indented"
  ]
};
pageData.examples = {
  'Basic': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { ExpandableSection } from '@patternfly/react-core';\n\nclass SimpleExpandableSection extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      isExpanded: false\n    };\n    this.onToggle = isExpanded => {\n      this.setState({\n        isExpanded\n      });\n    };\n  }\n\n  render() {\n    const { isExpanded } = this.state;\n    return (\n      <ExpandableSection\n        toggleText={isExpanded ? 'Show less' : 'Show more'}\n        onToggle={this.onToggle}\n        isExpanded={isExpanded}\n      >\n        This content is visible only when the component is expanded.\n      </ExpandableSection>\n    );\n  }\n}","title":"Basic","lang":"js"}}>
      
    </Example>,
  'Uncontrolled': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { ExpandableSection } from '@patternfly/react-core';\n\nconst Uncontrolled = () => (\n  <ExpandableSection toggleText=\"Show more\">\n    This content is visible only when the component is expanded.\n  </ExpandableSection>\n)","title":"Uncontrolled","lang":"js"}}>
      
    </Example>,
  'Uncontrolled with dynamic toggle text': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { ExpandableSection } from '@patternfly/react-core';\n\nconst UncontrolledWithDynamicToggleText = () => (\n  <ExpandableSection toggleTextExpanded=\"Show less\" toggleTextCollapsed=\"Show more\">\n    This content is visible only when the component is expanded.\n  </ExpandableSection>\n)","title":"Uncontrolled with dynamic toggle text","lang":"js"}}>
      
    </Example>,
  'Detached': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { ExpandableSection, ExpandableSectionToggle, Stack, StackItem } from '@patternfly/react-core';\n\nclass DetachedExpandableSection extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      isExpanded: false\n    };\n    this.onToggle = isExpanded => {\n      this.setState({\n        isExpanded\n      });\n    };\n  }\n\n  render() {\n    const { isExpanded } = this.state;\n    const contentId = 'detached-toggle-content';\n    return (\n      <Stack hasGutter>\n        <StackItem>\n          <ExpandableSection isExpanded={isExpanded} isDetached contentId={contentId}>\n            This content is visible only when the component is expanded.\n          </ExpandableSection>\n        </StackItem>\n        <StackItem>\n          <ExpandableSectionToggle\n            isExpanded={isExpanded}\n            onToggle={this.onToggle}\n            contentId={contentId}\n            direction=\"up\"\n          >\n            {isExpanded ? 'Show less' : 'Show more'}\n          </ExpandableSectionToggle>\n        </StackItem>\n      </Stack>\n    );\n  }\n}","title":"Detached","lang":"js"}}>
      
    </Example>,
  'Disclosure variation': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { ExpandableSection } from '@patternfly/react-core';\n\nclass DisclosureExpandableSection extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      isExpanded: false\n    };\n    this.onToggle = isExpanded => {\n      this.setState({\n        isExpanded\n      });\n    };\n  }\n\n  render() {\n    const { isExpanded } = this.state;\n    return (\n      <ExpandableSection\n        toggleText={isExpanded ? 'Show less' : 'Show more'}\n        onToggle={this.onToggle}\n        isExpanded={isExpanded}\n        displaySize=\"large\"\n        isWidthLimited\n      >\n        This content is visible only when the component is expanded.\n      </ExpandableSection>\n    );\n  }\n}","title":"Disclosure variation","lang":"js"}}>
      
    </Example>,
  'Indented': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { ExpandableSection } from '@patternfly/react-core';\n\nclass SimpleExpandableSection extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      isExpanded: false\n    };\n    this.onToggle = isExpanded => {\n      this.setState({\n        isExpanded\n      });\n    };\n  }\n\n  render() {\n    const { isExpanded } = this.state;\n    return (\n      <ExpandableSection\n        toggleText={isExpanded ? 'Show less' : 'Show more'}\n        onToggle={this.onToggle}\n        isExpanded={isExpanded}\n        isIndented={true}\n      >\n        This content is visible only when the component is expanded.\n      </ExpandableSection>\n    );\n  }\n}","title":"Indented","lang":"js"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Basic"])}
    {React.createElement(pageData.examples["Uncontrolled"])}
    {React.createElement(pageData.examples["Uncontrolled with dynamic toggle text"])}
    {React.createElement(pageData.examples["Detached"])}
    {React.createElement(pageData.examples["Disclosure variation"])}
    {React.createElement(pageData.examples["Indented"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsExpandableSectionReactDocs';
Component.pageData = pageData;

export default Component;
