import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import ArrowRightIcon from '@patternfly/react-icons/dist/esm/icons/arrow-right-icon';
const pageData = {
  "id": "Accordion",
  "section": "components",
  "source": "react",
  "slug": "/components/accordion/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/components/Accordion/examples/Accordion.md",
  "propComponents": [
    {
      "name": "Accordion",
      "description": "",
      "props": [
        {
          "name": "aria-label",
          "type": "string",
          "description": "Adds accessible text to the Accordion",
          "defaultValue": "''"
        },
        {
          "name": "asDefinitionList",
          "type": "boolean",
          "description": "Flag to indicate whether use definition list or div",
          "defaultValue": "true"
        },
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside the Accordion",
          "defaultValue": "null"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the Accordion",
          "defaultValue": "''"
        },
        {
          "name": "displaySize",
          "type": "'default' | 'large'",
          "description": "Display size variant.",
          "defaultValue": "'default'"
        },
        {
          "name": "headingLevel",
          "type": "'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'",
          "description": "Heading level to use",
          "defaultValue": "'h3'"
        },
        {
          "name": "isBordered",
          "type": "boolean",
          "description": "Flag to indicate the accordion had a border",
          "defaultValue": "false"
        }
      ]
    },
    {
      "name": "AccordionItem",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside the Accordion item",
          "defaultValue": "null"
        }
      ]
    },
    {
      "name": "AccordionContent",
      "description": "",
      "props": [
        {
          "name": "aria-label",
          "type": "string",
          "description": "Adds accessible text to the Accordion content",
          "defaultValue": "''"
        },
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside the Accordion",
          "defaultValue": "null"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the Accordion content",
          "defaultValue": "''"
        },
        {
          "name": "component",
          "type": "React.ElementType",
          "description": "Component to use as content container"
        },
        {
          "name": "id",
          "type": "string",
          "description": "Identify the AccordionContent item",
          "defaultValue": "''"
        },
        {
          "name": "isCustomContent",
          "type": "React.ReactNode",
          "description": "Flag indicating content is custom. Expanded content Body wrapper will be removed from children.  This allows multiple bodies to be rendered as content.",
          "defaultValue": "false"
        },
        {
          "name": "isFixed",
          "type": "boolean",
          "description": "Flag to indicate Accordion content is fixed",
          "defaultValue": "false"
        },
        {
          "name": "isHidden",
          "type": "boolean",
          "description": "Flag to show if the expanded content of the Accordion item is visible",
          "defaultValue": "false"
        }
      ]
    },
    {
      "name": "AccordionToggle",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside the Accordion toggle",
          "defaultValue": "null"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the Accordion Toggle",
          "defaultValue": "''"
        },
        {
          "name": "component",
          "type": "React.ElementType",
          "description": "Container to override the default for toggle"
        },
        {
          "name": "id",
          "type": "string",
          "description": "Identify the Accordion toggle number",
          "required": true
        },
        {
          "name": "isExpanded",
          "type": "boolean",
          "description": "Flag to show if the expanded content of the Accordion item is visible",
          "defaultValue": "false"
        }
      ]
    },
    {
      "name": "AccordionExpandedContentBody",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside the accordion content body",
          "defaultValue": "null"
        }
      ]
    }
  ],
  "cssPrefix": [
    "pf-c-accordion"
  ],
  "examples": [
    "Definition list",
    "Single expand behavior",
    "Fixed with multiple expand behavior",
    "Bordered"
  ]
};
pageData.liveContext = {
  ArrowRightIcon
};
pageData.examples = {
  'Definition list': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Accordion, AccordionItem, AccordionContent, AccordionToggle } from '@patternfly/react-core';\n\nexport const AccordionDefinitionList: React.FunctionComponent = () => {\n  const [expanded, setExpanded] = React.useState('ex-toggle2');\n\n  const onToggle = (id: string) => {\n    if (id === expanded) {\n      setExpanded('');\n    } else {\n      setExpanded(id);\n    }\n  };\n\n  return (\n    <Accordion asDefinitionList>\n      <AccordionItem>\n        <AccordionToggle\n          onClick={() => {\n            onToggle('ex-toggle1');\n          }}\n          isExpanded={expanded === 'ex-toggle1'}\n          id=\"ex-toggle1\"\n        >\n          Item one\n        </AccordionToggle>\n        <AccordionContent id=\"ex-expand1\" isHidden={expanded !== 'ex-toggle1'}>\n          <p>\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et\n            dolore magna aliqua.\n          </p>\n        </AccordionContent>\n      </AccordionItem>\n\n      <AccordionItem>\n        <AccordionToggle\n          onClick={() => {\n            onToggle('ex-toggle2');\n          }}\n          isExpanded={expanded === 'ex-toggle2'}\n          id=\"ex-toggle2\"\n        >\n          Item two\n        </AccordionToggle>\n        <AccordionContent id=\"ex-expand2\" isHidden={expanded !== 'ex-toggle2'}>\n          <p>\n            Vivamus et tortor sed arcu congue vehicula eget et diam. Praesent nec dictum lorem. Aliquam id diam\n            ultrices, faucibus erat id, maximus nunc.\n          </p>\n        </AccordionContent>\n      </AccordionItem>\n\n      <AccordionItem>\n        <AccordionToggle\n          onClick={() => {\n            onToggle('ex-toggle3');\n          }}\n          isExpanded={expanded === 'ex-toggle3'}\n          id=\"ex-toggle3\"\n        >\n          Item three\n        </AccordionToggle>\n        <AccordionContent id=\"ex-expand3\" isHidden={expanded !== 'ex-toggle3'}>\n          <p>Morbi vitae urna quis nunc convallis hendrerit. Aliquam congue orci quis ultricies tempus.</p>\n        </AccordionContent>\n      </AccordionItem>\n\n      <AccordionItem>\n        <AccordionToggle\n          onClick={() => {\n            onToggle('ex-toggle4');\n          }}\n          isExpanded={expanded === 'ex-toggle4'}\n          id=\"ex-toggle4\"\n        >\n          Item four\n        </AccordionToggle>\n        <AccordionContent id=\"ex-expand4\" isHidden={expanded !== 'ex-toggle4'}>\n          <p>\n            Donec vel posuere orci. Phasellus quis tortor a ex hendrerit efficitur. Aliquam lacinia ligula pharetra,\n            sagittis ex ut, pellentesque diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere\n            cubilia Curae; Vestibulum ultricies nulla nibh. Etiam vel dui fermentum ligula ullamcorper eleifend non quis\n            tortor. Morbi tempus ornare tempus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur\n            ridiculus mus. Mauris et velit neque. Donec ultricies condimentum mauris, pellentesque imperdiet libero\n            convallis convallis. Aliquam erat volutpat. Donec rutrum semper tempus. Proin dictum imperdiet nibh, quis\n            dapibus nulla. Integer sed tincidunt lectus, sit amet auctor eros.\n          </p>\n        </AccordionContent>\n      </AccordionItem>\n\n      <AccordionItem>\n        <AccordionToggle\n          onClick={() => {\n            onToggle('ex-toggle5');\n          }}\n          isExpanded={expanded === 'ex-toggle5'}\n          id=\"ex-toggle5\"\n        >\n          Item five\n        </AccordionToggle>\n        <AccordionContent id=\"ex-expand5\" isHidden={expanded !== 'ex-toggle5'}>\n          <p>Vivamus finibus dictum ex id ultrices. Mauris dictum neque a iaculis blandit.</p>\n        </AccordionContent>\n      </AccordionItem>\n    </Accordion>\n  );\n};\n","title":"Definition list","lang":"ts"}}>
      
    </Example>,
  'Single expand behavior': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Accordion, AccordionItem, AccordionContent, AccordionToggle } from '@patternfly/react-core';\n\nexport const AccordionSingleExpandBehavior: React.FunctionComponent = () => {\n  const [expanded, setExpanded] = React.useState('ex-toggle2');\n\n  const onToggle = (id: string) => {\n    if (id === expanded) {\n      setExpanded('');\n    } else {\n      setExpanded(id);\n    }\n  };\n\n  return (\n    <Accordion asDefinitionList={false}>\n      <AccordionItem>\n        <AccordionToggle\n          onClick={() => {\n            onToggle('ex-toggle1');\n          }}\n          isExpanded={expanded === 'ex-toggle1'}\n          id=\"ex-toggle1\"\n        >\n          Item one\n        </AccordionToggle>\n        <AccordionContent id=\"ex-expand1\" isHidden={expanded !== 'ex-toggle1'}>\n          <p>\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et\n            dolore magna aliqua.\n          </p>\n        </AccordionContent>\n      </AccordionItem>\n\n      <AccordionItem>\n        <AccordionToggle\n          onClick={() => {\n            onToggle('ex-toggle2');\n          }}\n          isExpanded={expanded === 'ex-toggle2'}\n          id=\"ex-toggle2\"\n        >\n          Item two\n        </AccordionToggle>\n        <AccordionContent id=\"ex-expand2\" isHidden={expanded !== 'ex-toggle2'}>\n          <p>\n            Vivamus et tortor sed arcu congue vehicula eget et diam. Praesent nec dictum lorem. Aliquam id diam\n            ultrices, faucibus erat id, maximus nunc.\n          </p>\n        </AccordionContent>\n      </AccordionItem>\n\n      <AccordionItem>\n        <AccordionToggle\n          onClick={() => {\n            onToggle('ex-toggle3');\n          }}\n          isExpanded={expanded === 'ex-toggle3'}\n          id=\"ex-toggle3\"\n        >\n          Item three\n        </AccordionToggle>\n        <AccordionContent id=\"ex-expand3\" isHidden={expanded !== 'ex-toggle3'}>\n          <p>Morbi vitae urna quis nunc convallis hendrerit. Aliquam congue orci quis ultricies tempus.</p>\n        </AccordionContent>\n      </AccordionItem>\n\n      <AccordionItem>\n        <AccordionToggle\n          onClick={() => {\n            onToggle('ex-toggle4');\n          }}\n          isExpanded={expanded === 'ex-toggle4'}\n          id=\"ex-toggle4\"\n        >\n          Item four\n        </AccordionToggle>\n        <AccordionContent id=\"ex-expand4\" isHidden={expanded !== 'ex-toggle4'}>\n          <p>\n            Donec vel posuere orci. Phasellus quis tortor a ex hendrerit efficitur. Aliquam lacinia ligula pharetra,\n            sagittis ex ut, pellentesque diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere\n            cubilia Curae; Vestibulum ultricies nulla nibh. Etiam vel dui fermentum ligula ullamcorper eleifend non quis\n            tortor. Morbi tempus ornare tempus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur\n            ridiculus mus. Mauris et velit neque. Donec ultricies condimentum mauris, pellentesque imperdiet libero\n            convallis convallis. Aliquam erat volutpat. Donec rutrum semper tempus. Proin dictum imperdiet nibh, quis\n            dapibus nulla. Integer sed tincidunt lectus, sit amet auctor eros.\n          </p>\n        </AccordionContent>\n      </AccordionItem>\n\n      <AccordionItem>\n        <AccordionToggle\n          onClick={() => {\n            onToggle('ex-toggle5');\n          }}\n          isExpanded={expanded === 'ex-toggle5'}\n          id=\"ex-toggle5\"\n        >\n          Item five\n        </AccordionToggle>\n        <AccordionContent id=\"ex-expand5\" isHidden={expanded !== 'ex-toggle5'}>\n          <p>Vivamus finibus dictum ex id ultrices. Mauris dictum neque a iaculis blandit.</p>\n        </AccordionContent>\n      </AccordionItem>\n    </Accordion>\n  );\n};\n","title":"Single expand behavior","lang":"ts"}}>
      
    </Example>,
  'Fixed with multiple expand behavior': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Accordion, AccordionItem, AccordionContent, AccordionToggle } from '@patternfly/react-core';\n\nexport const AccordionFixedWithMultipleExpandBehavior: React.FunctionComponent = () => {\n  const [expanded, setExpanded] = React.useState(['ex2-toggle4']);\n\n  const toggle = id => {\n    const index = expanded.indexOf(id);\n    const newExpanded: string[] =\n      index >= 0 ? [...expanded.slice(0, index), ...expanded.slice(index + 1, expanded.length)] : [...expanded, id];\n    setExpanded(newExpanded);\n  };\n\n  return (\n    <Accordion asDefinitionList={false}>\n      <AccordionItem>\n        <AccordionToggle\n          onClick={() => toggle('ex2-toggle1')}\n          isExpanded={expanded.includes('ex2-toggle1')}\n          id=\"ex2-toggle1\"\n        >\n          Item one\n        </AccordionToggle>\n        <AccordionContent id=\"ex2-expand1\" isHidden={!expanded.includes('ex2-toggle1')} isFixed>\n          <p>\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et\n            dolore magna aliqua.\n          </p>\n        </AccordionContent>\n      </AccordionItem>\n      <AccordionItem>\n        <AccordionToggle\n          onClick={() => toggle('ex2-toggle2')}\n          isExpanded={expanded.includes('ex2-toggle2')}\n          id=\"ex2-toggle2\"\n        >\n          Item two\n        </AccordionToggle>\n        <AccordionContent id=\"ex2-expand2\" isHidden={!expanded.includes('ex2-toggle2')} isFixed>\n          <p>\n            Vivamus et tortor sed arcu congue vehicula eget et diam. Praesent nec dictum lorem. Aliquam id diam\n            ultrices, faucibus erat id, maximus nunc.\n          </p>\n        </AccordionContent>\n      </AccordionItem>\n      <AccordionItem>\n        <AccordionToggle\n          onClick={() => toggle('ex2-toggle3')}\n          isExpanded={expanded.includes('ex2-toggle3')}\n          id=\"ex2-toggle3\"\n        >\n          Item three\n        </AccordionToggle>\n        <AccordionContent id=\"ex2-expand3\" isHidden={!expanded.includes('ex2-toggle3')} isFixed>\n          <p>Morbi vitae urna quis nunc convallis hendrerit. Aliquam congue orci quis ultricies tempus.</p>\n        </AccordionContent>\n      </AccordionItem>\n      <AccordionItem>\n        <AccordionToggle\n          onClick={() => toggle('ex2-toggle4')}\n          isExpanded={expanded.includes('ex2-toggle4')}\n          id=\"ex2-toggle4\"\n        >\n          Item four\n        </AccordionToggle>\n        <AccordionContent id=\"ex2-expand4\" isHidden={!expanded.includes('ex2-toggle4')} isFixed>\n          <p>\n            Donec vel posuere orci. Phasellus quis tortor a ex hendrerit efficitur. Aliquam lacinia ligula pharetra,\n            sagittis ex ut, pellentesque diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere\n            cubilia Curae; Vestibulum ultricies nulla nibh. Etiam vel dui fermentum ligula ullamcorper eleifend non quis\n            tortor. Morbi tempus ornare tempus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur\n            ridiculus mus. Mauris et velit neque. Donec ultricies condimentum mauris, pellentesque imperdiet libero\n            convallis convallis. Aliquam erat volutpat. Donec rutrum semper tempus. Proin dictum imperdiet nibh, quis\n            dapibus nulla. Integer sed tincidunt lectus, sit amet auctor eros.\n          </p>\n        </AccordionContent>\n      </AccordionItem>\n      <AccordionItem>\n        <AccordionToggle\n          onClick={() => toggle('ex2-toggle5')}\n          isExpanded={expanded.includes('ex2-toggle5')}\n          id=\"ex2-toggle5\"\n        >\n          Item five\n        </AccordionToggle>\n        <AccordionContent id=\"ex2-expand5\" isHidden={!expanded.includes('ex2-toggle5')} isFixed>\n          <p>Vivamus finibus dictum ex id ultrices. Mauris dictum neque a iaculis blandit.</p>\n        </AccordionContent>\n      </AccordionItem>\n    </Accordion>\n  );\n};\n","title":"Fixed with multiple expand behavior","lang":"ts"}}>
      
    </Example>,
  'Bordered': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  Accordion,\n  AccordionItem,\n  AccordionContent,\n  AccordionToggle,\n  AccordionExpandedContentBody,\n  Button,\n  Checkbox\n} from '@patternfly/react-core';\nimport ArrowRightIcon from '@patternfly/react-icons/dist/esm/icons/arrow-right-icon';\n\nexport const AccordionBordered: React.FunctionComponent = () => {\n  const [expanded, setExpanded] = React.useState('ex-toggle4');\n  const [isDisplayLarge, setIsDisplayLarge] = React.useState(false);\n\n  const displaySize = isDisplayLarge ? 'large' : 'default';\n  const onToggle = (id: string) => {\n    if (id === expanded) {\n      setExpanded('');\n    } else {\n      setExpanded(id);\n    }\n  };\n\n  return (\n    <>\n      <Accordion isBordered displaySize={displaySize}>\n        <AccordionItem>\n          <AccordionToggle\n            onClick={() => {\n              onToggle('ex-toggle1');\n            }}\n            isExpanded={expanded === 'ex-toggle1'}\n            id=\"ex-toggle1\"\n          >\n            Item one\n          </AccordionToggle>\n          <AccordionContent id=\"ex-expand1\" isHidden={expanded !== 'ex-toggle1'}>\n            <p>\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et\n              dolore magna aliqua.\n            </p>\n          </AccordionContent>\n        </AccordionItem>\n\n        <AccordionItem>\n          <AccordionToggle\n            onClick={() => {\n              onToggle('ex-toggle2');\n            }}\n            isExpanded={expanded === 'ex-toggle2'}\n            id=\"ex-toggle2\"\n          >\n            Item two\n          </AccordionToggle>\n          <AccordionContent id=\"ex-expand2\" isHidden={expanded !== 'ex-toggle2'}>\n            <p>\n              Vivamus et tortor sed arcu congue vehicula eget et diam. Praesent nec dictum lorem. Aliquam id diam\n              ultrices, faucibus erat id, maximus nunc.\n            </p>\n          </AccordionContent>\n        </AccordionItem>\n\n        <AccordionItem>\n          <AccordionToggle\n            onClick={() => {\n              onToggle('ex-toggle3');\n            }}\n            isExpanded={expanded === 'ex-toggle3'}\n            id=\"ex-toggle3\"\n          >\n            Item three\n          </AccordionToggle>\n          <AccordionContent id=\"ex-expand3\" isHidden={expanded !== 'ex-toggle3'}>\n            <p>Morbi vitae urna quis nunc convallis hendrerit. Aliquam congue orci quis ultricies tempus.</p>\n          </AccordionContent>\n        </AccordionItem>\n\n        <AccordionItem>\n          <AccordionToggle\n            onClick={() => {\n              onToggle('ex-toggle4');\n            }}\n            isExpanded={expanded === 'ex-toggle4'}\n            id=\"ex-toggle4\"\n          >\n            Item four\n          </AccordionToggle>\n          <AccordionContent id=\"ex-expand4\" isHidden={expanded !== 'ex-toggle4'} isCustomContent>\n            <AccordionExpandedContentBody>\n              Donec vel posuere orci. Phasellus quis tortor a ex hendrerit efficitur. Aliquam lacinia ligula pharetra,\n              sagittis ex ut, pellentesque diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices\n              posuere cubilia Curae; Vestibulum ultricies nulla nibh. Etiam vel dui fermentum ligula ullamcorper\n              eleifend non quis tortor. Morbi tempus ornare tempus. Orci varius natoque penatibus et magnis dis\n              parturient montes, nascetur ridiculus mus. Mauris et velit neque. Donec ultricies condimentum mauris,\n              pellentesque imperdiet libero convallis convallis. Aliquam erat volutpat. Donec rutrum semper tempus.\n              Proin dictum imperdiet nibh, quis dapibus nulla. Integer sed tincidunt lectus, sit amet auctor eros.\n            </AccordionExpandedContentBody>\n            <AccordionExpandedContentBody>\n              <Button variant=\"link\" isLarge isInline>\n                Call to action <ArrowRightIcon />\n              </Button>\n            </AccordionExpandedContentBody>\n          </AccordionContent>\n        </AccordionItem>\n        <AccordionItem>\n          <AccordionToggle\n            onClick={() => {\n              onToggle('ex-toggle5');\n            }}\n            isExpanded={expanded === 'ex-toggle5'}\n            id=\"ex-toggle5\"\n          >\n            Item five\n          </AccordionToggle>\n          <AccordionContent id=\"ex-expand5\" isHidden={expanded !== 'ex-toggle5'}>\n            <p>Vivamus finibus dictum ex id ultrices. Mauris dictum neque a iaculis blandit.</p>\n          </AccordionContent>\n        </AccordionItem>\n      </Accordion>\n      <div style={{ marginTop: '30px' }}>\n        <Checkbox\n          label=\"Display size large\"\n          isChecked={isDisplayLarge}\n          onChange={setIsDisplayLarge}\n          aria-label=\"show displlay large variation checkbox\"\n          id=\"toggle-display-lg\"\n          name=\"toggle-display-lg\"\n        />\n      </div>\n    </>\n  );\n};\n","title":"Bordered","lang":"ts"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Definition list"])}
    {React.createElement(pageData.examples["Single expand behavior"])}
    {React.createElement(pageData.examples["Fixed with multiple expand behavior"])}
    {React.createElement(pageData.examples["Bordered"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsAccordionReactDocs';
Component.pageData = pageData;

export default Component;
