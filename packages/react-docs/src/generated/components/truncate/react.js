import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import '../../../../../react-core/src/components/Truncate/examples/./TruncateExamples.css';
const pageData = {
  "id": "Truncate",
  "section": "components",
  "source": "react",
  "slug": "/components/truncate/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/components/Truncate/examples/Truncate.md",
  "propComponents": [
    {
      "name": "Truncate",
      "description": "",
      "props": [
        {
          "name": "className",
          "type": "string",
          "description": "Class to add to outer span"
        },
        {
          "name": "content",
          "type": "string",
          "description": "Text to truncate",
          "required": true
        },
        {
          "name": "position",
          "type": "'start' | 'middle' | 'end'",
          "description": "Where the text will be truncated",
          "defaultValue": "'end'"
        },
        {
          "name": "tooltipPosition",
          "type": "TooltipPosition\n| 'auto'\n| 'top'\n| 'bottom'\n| 'left'\n| 'right'\n| 'top-start'\n| 'top-end'\n| 'bottom-start'\n| 'bottom-end'\n| 'left-start'\n| 'left-end'\n| 'right-start'\n| 'right-end'",
          "description": "Tooltip position",
          "defaultValue": "'top'"
        },
        {
          "name": "trailingNumChars",
          "type": "number",
          "description": "The number of characters displayed in the second half of the truncation",
          "defaultValue": "7"
        }
      ]
    }
  ],
  "beta": true,
  "examples": [
    "Default",
    "Middle",
    "Start",
    "Default with tooltip at the bottom"
  ]
};
pageData.examples = {
  'Default': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Truncate } from '@patternfly/react-core';\nconst Default = () => (\n  <div className=\"pf-c-truncate--example\">\n    <Truncate\n      content={'Vestibulum interdum risus et enim faucibus, sit amet molestie est accumsan.'}\n    />\n  </div>\n)","title":"Default","lang":"js"}}>
      
    </Example>,
  'Middle': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Truncate } from '@patternfly/react-core';\nconst Middle = () => (\n  <div className=\"pf-c-truncate--example\">\n    <Truncate\n      content={'redhat_logo_black_and_white_reversed_simple_with_fedora_container.zip'}\n      trailingNumChars={10}\n      position={'middle'}\n    />\n  </div>\n)","title":"Middle","lang":"js"}}>
      
    </Example>,
  'Start': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Truncate } from '@patternfly/react-core';\nconst Start = () => (\n  <div className=\"pf-c-truncate--example\">\n    <Truncate\n      content={'Vestibulum interdum risus et enim faucibus, sit amet molestie est accumsan.'}\n      position={'start'}\n    />\n  </div>\n)","title":"Start","lang":"js"}}>
      
    </Example>,
  'Default with tooltip at the bottom': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Truncate } from '@patternfly/react-core';\nconst DefaultWithTooltipAtTheBottom = () => (\n  <div className=\"pf-c-truncate--example\">\n    <Truncate\n      content={'Vestibulum interdum risus et enim faucibus, sit amet molestie est accumsan.'}\n      tooltipPosition={'bottom'}\n    />\n  </div>\n)","title":"Default with tooltip at the bottom","lang":"js"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Default"])}
    {React.createElement(pageData.examples["Middle"])}
    {React.createElement(pageData.examples["Start"])}
    {React.createElement(pageData.examples["Default with tooltip at the bottom"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsTruncateReactDocs';
Component.pageData = pageData;

export default Component;
