import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import PlusIcon from '@patternfly/react-icons/dist/esm/icons/plus-icon';
import BellIcon from '@patternfly/react-icons/dist/esm/icons/bell-icon';
const pageData = {
  "id": "Tile",
  "section": "components",
  "source": "react",
  "slug": "/components/tile/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/components/Tile/examples/Tile.md",
  "propComponents": [
    {
      "name": "Tile",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside the banner"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the banner"
        },
        {
          "name": "icon",
          "type": "React.ReactNode",
          "description": "Icon in the tile title"
        },
        {
          "name": "isDisabled",
          "type": "boolean",
          "description": "Flag indicating if the tile is disabled"
        },
        {
          "name": "isDisplayLarge",
          "type": "boolean",
          "description": "Flag indicating if the stacked tile icon is large"
        },
        {
          "name": "isSelected",
          "type": "boolean",
          "description": "Flag indicating if the tile is selected"
        },
        {
          "name": "isStacked",
          "type": "boolean",
          "description": "Flag indicating if the tile header is stacked"
        },
        {
          "name": "title",
          "type": "string",
          "description": "Title of the tile",
          "required": true
        }
      ]
    }
  ],
  "beta": true,
  "cssPrefix": [
    "pf-c-tile"
  ],
  "examples": [
    "Basic",
    "With subtext",
    "With icon",
    "Stacked",
    "Stacked with large icons",
    "With extra content"
  ]
};
pageData.liveContext = {
  PlusIcon,
  BellIcon
};
pageData.examples = {
  'Basic': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Tile } from '@patternfly/react-core';\n\nconst Basic = () => (\n  <div role=\"listbox\" aria-label=\"Basic tiles\">\n    <Tile title=\"Default\" isSelected={false} />\n    <Tile title=\"Selected\" isSelected />\n    <Tile title=\"Disabled\" isDisabled isSelected={false} />\n  </div>\n)","title":"Basic","lang":"js"}}>
      
    </Example>,
  'With subtext': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Tile } from '@patternfly/react-core';\n\nconst WithSubtext = () => (\n  <div role=\"listbox\" aria-label=\"Tiles with subtext\">\n    <Tile title=\"Default\" isSelected={false}>\n      Subtext goes here\n    </Tile>{' '}\n    <Tile title=\"Selected\" isSelected>\n      Subtext goes here\n    </Tile>{' '}\n    <Tile title=\"Disabled\" isDisabled isSelected={false}>\n      Subtext goes here\n    </Tile>\n  </div>\n)","title":"With subtext","lang":"js"}}>
      
    </Example>,
  'With icon': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Tile } from '@patternfly/react-core';\nimport PlusIcon from '@patternfly/react-icons/dist/esm/icons/plus-icon';\n\nconst WithIcon = () => (\n  <div role=\"listbox\" aria-label=\"Tiles with icon\">\n    <Tile title=\"Default\" icon={<PlusIcon />} isSelected={false}>\n      Subtext goes here\n    </Tile>{' '}\n    <Tile title=\"Selected\" icon={<PlusIcon />} isSelected>\n      Subtext goes here\n    </Tile>{' '}\n    <Tile title=\"Disabled\" icon={<PlusIcon />} isDisabled isSelected={false}>\n      Subtext goes here\n    </Tile>\n  </div>\n)","title":"With icon","lang":"js"}}>
      
    </Example>,
  'Stacked': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Tile } from '@patternfly/react-core';\nimport BellIcon from '@patternfly/react-icons/dist/esm/icons/bell-icon';\n\nconst Stacked = () => (\n  <div role=\"listbox\" aria-label=\"Stacked tiles\">\n    <Tile title=\"Default\" icon={<BellIcon />} isStacked isSelected={false}>\n      Subtext goes here\n    </Tile>{' '}\n    <Tile title=\"Selected\" icon={<BellIcon />} isStacked isSelected>\n      Subtext goes here\n    </Tile>{' '}\n    <Tile title=\"Disabled\" icon={<BellIcon />} isStacked isDisabled isSelected={false}>\n      Subtext goes here\n    </Tile>\n  </div>\n)","title":"Stacked","lang":"js"}}>
      
    </Example>,
  'Stacked with large icons': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Tile } from '@patternfly/react-core';\nimport BellIcon from '@patternfly/react-icons/dist/esm/icons/bell-icon';\n\nconst StackedWithLargeIcons = () => (\n  <div role=\"listbox\" aria-label=\"Stacked tiles with large icons\">\n    <Tile title=\"Default\" icon={<BellIcon />} isStacked isDisplayLarge isSelected={false}>\n      Subtext goes here\n    </Tile>{' '}\n    <Tile title=\"Selected\" icon={<BellIcon />} isStacked isDisplayLarge isSelected>\n      Subtext goes here\n    </Tile>{' '}\n    <Tile title=\"Disabled\" icon={<BellIcon />} isStacked isDisplayLarge isDisabled isSelected={false}>\n      Subtext goes here\n    </Tile>\n  </div>\n)","title":"Stacked with large icons","lang":"js"}}>
      
    </Example>,
  'With extra content': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Tile, Flex } from '@patternfly/react-core';\nimport BellIcon from '@patternfly/react-icons/dist/esm/icons/bell-icon';\n\nconst WithExtraContent = () => (\n  <div role=\"listbox\" aria-label=\"Tiles with extra content\">\n    <Flex>\n      <Flex flex={{ default: 'flex_1' }}>\n        <Tile title=\"Default\" icon={<BellIcon />} isStacked isSelected={false}>\n          This is really really long subtext that goes on for so long that it has to wrap to the next line. This is really\n          really long subtext that goes on for so long that it has to wrap to the next line.\n        </Tile>\n      </Flex>\n      <Flex flex={{ default: 'flex_1' }}>\n        <Tile title=\"Selected\" icon={<BellIcon />} isStacked isSelected>\n          This is really really long subtext that goes on for so long that it has to wrap to the next line.\n        </Tile>\n      </Flex>\n      <Flex flex={{ default: 'flex_1' }}>\n        <Tile title=\"Disabled\" icon={<BellIcon />} isStacked isDisabled isSelected={false}>\n          Subtext goes here\n        </Tile>\n      </Flex>\n    </Flex>\n  </div>\n)","title":"With extra content","lang":"js"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Keyboard interaction patterns and a11y is implemented in the Tile demos, located in the `}
      <PatternflyThemeLink {...{"to":"/documentation/react/demos/tiledemo"}}>
        {`Demo section`}
      </PatternflyThemeLink>
      {`.`}
    </p>
    {React.createElement(pageData.examples["Basic"])}
    {React.createElement(pageData.examples["With subtext"])}
    {React.createElement(pageData.examples["With icon"])}
    {React.createElement(pageData.examples["Stacked"])}
    {React.createElement(pageData.examples["Stacked with large icons"])}
    {React.createElement(pageData.examples["With extra content"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsTileReactDocs';
Component.pageData = pageData;

export default Component;
