import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import brandImg from '../../../../../react-core/src/components/AboutModal/examples/./brandImg.svg';
import bgImg from '../../../../../react-core/src/components/AboutModal/examples/./patternfly-orb.svg';
const pageData = {
  "id": "About modal",
  "section": "components",
  "source": "react",
  "slug": "/components/about-modal/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/components/AboutModal/examples/AboutModal.md",
  "propComponents": [
    {
      "name": "AboutModal",
      "description": "",
      "props": [
        {
          "name": "appendTo",
          "type": "HTMLElement | (() => HTMLElement)",
          "description": "The parent container to append the modal to. Defaults to document.body",
          "defaultValue": "null"
        },
        {
          "name": "backgroundImageSrc",
          "type": "string",
          "description": "The URL of the image for the background",
          "defaultValue": "''"
        },
        {
          "name": "brandImageAlt",
          "type": "string",
          "description": "The alternate text of the brand image",
          "required": true
        },
        {
          "name": "brandImageSrc",
          "type": "string",
          "description": "The URL of the image for the brand",
          "required": true
        },
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside the about modal",
          "required": true
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the about modal",
          "defaultValue": "''"
        },
        {
          "name": "closeButtonAriaLabel",
          "type": "string",
          "description": "Set aria label to the close button"
        },
        {
          "name": "disableFocusTrap",
          "type": "boolean",
          "description": "Flag to disable focus trap"
        },
        {
          "name": "isOpen",
          "type": "boolean",
          "description": "Flag to show the about modal",
          "defaultValue": "false"
        },
        {
          "name": "noAboutModalBoxContentContainer",
          "type": "boolean",
          "description": "Prevents the about modal from rendering content inside a container; allows for more flexible layouts",
          "defaultValue": "false"
        },
        {
          "name": "onClose",
          "type": "() => void",
          "description": "A callback for when the close button is clicked",
          "defaultValue": "(): any => undefined"
        },
        {
          "name": "productName",
          "type": "string",
          "description": "Product name",
          "defaultValue": "''"
        },
        {
          "name": "trademark",
          "type": "string",
          "description": "Trademark information",
          "defaultValue": "''"
        }
      ]
    }
  ],
  "cssPrefix": [
    "pf-c-about-modal-box"
  ],
  "examples": [
    "Basic",
    "Without product name",
    "Complex user positioned content",
    "Custom background image"
  ]
};
pageData.liveContext = {
  brandImg,
  bgImg
};
pageData.examples = {
  'Basic': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { AboutModal, Button, TextContent, TextList, TextListItem } from '@patternfly/react-core';\nimport brandImg from './brandImg.svg';\n\nexport const AboutModalBasic: React.FunctionComponent = () => {\n  const [isModalOpen, setIsModalOpen] = React.useState(false);\n\n  const toggleModal = () => {\n    setIsModalOpen(!isModalOpen);\n  };\n\n  return (\n    <React.Fragment>\n      <Button variant=\"primary\" onClick={toggleModal}>\n        Show about modal\n      </Button>\n      <AboutModal\n        isOpen={isModalOpen}\n        onClose={toggleModal}\n        trademark=\"Trademark and copyright information here\"\n        brandImageSrc={brandImg}\n        brandImageAlt=\"Patternfly Logo\"\n        productName=\"Product Name\"\n      >\n        <TextContent>\n          <TextList component=\"dl\">\n            <TextListItem component=\"dt\">CFME Version</TextListItem>\n            <TextListItem component=\"dd\">5.5.3.4.20102789036450</TextListItem>\n            <TextListItem component=\"dt\">Cloudforms Version</TextListItem>\n            <TextListItem component=\"dd\">4.1</TextListItem>\n            <TextListItem component=\"dt\">Server Name</TextListItem>\n            <TextListItem component=\"dd\">40DemoMaster</TextListItem>\n            <TextListItem component=\"dt\">User Name</TextListItem>\n            <TextListItem component=\"dd\">Administrator</TextListItem>\n            <TextListItem component=\"dt\">User Role</TextListItem>\n            <TextListItem component=\"dd\">EvmRole-super_administrator</TextListItem>\n            <TextListItem component=\"dt\">Browser Version</TextListItem>\n            <TextListItem component=\"dd\">601.2</TextListItem>\n            <TextListItem component=\"dt\">Browser OS</TextListItem>\n            <TextListItem component=\"dd\">Mac</TextListItem>\n          </TextList>\n        </TextContent>\n      </AboutModal>\n    </React.Fragment>\n  );\n};\n","title":"Basic","lang":"ts"}}>
      
    </Example>,
  'Without product name': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { AboutModal, Button, TextContent, TextList, TextListItem } from '@patternfly/react-core';\nimport brandImg from './brandImg.svg';\n\nexport const AboutModalWithoutProductName: React.FunctionComponent = () => {\n  const [isModalOpen, setIsModalOpen] = React.useState(false);\n\n  const toggleModal = () => {\n    setIsModalOpen(!isModalOpen);\n  };\n\n  return (\n    <React.Fragment>\n      <Button variant=\"primary\" onClick={toggleModal}>\n        Show about modal\n      </Button>\n      <AboutModal\n        isOpen={isModalOpen}\n        onClose={toggleModal}\n        trademark=\"Trademark and copyright information here\"\n        brandImageSrc={brandImg}\n        brandImageAlt=\"Patternfly Logo\"\n      >\n        <TextContent>\n          <TextList component=\"dl\">\n            <TextListItem component=\"dt\">CFME Version</TextListItem>\n            <TextListItem component=\"dd\">5.5.3.4.20102789036450</TextListItem>\n            <TextListItem component=\"dt\">Cloudforms Version</TextListItem>\n            <TextListItem component=\"dd\">4.1</TextListItem>\n            <TextListItem component=\"dt\">Server Name</TextListItem>\n            <TextListItem component=\"dd\">40DemoMaster</TextListItem>\n            <TextListItem component=\"dt\">User Name</TextListItem>\n            <TextListItem component=\"dd\">Administrator</TextListItem>\n            <TextListItem component=\"dt\">User Role</TextListItem>\n            <TextListItem component=\"dd\">EvmRole-super_administrator</TextListItem>\n            <TextListItem component=\"dt\">Browser Version</TextListItem>\n            <TextListItem component=\"dd\">601.2</TextListItem>\n            <TextListItem component=\"dt\">Browser OS</TextListItem>\n            <TextListItem component=\"dd\">Mac</TextListItem>\n          </TextList>\n        </TextContent>\n      </AboutModal>\n    </React.Fragment>\n  );\n};\n","title":"Without product name","lang":"ts"}}>
      
    </Example>,
  'Complex user positioned content': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { AboutModal, Alert, Button, TextContent, TextList, TextListItem } from '@patternfly/react-core';\nimport brandImg from './brandImg.svg';\n\nexport const AboutModalComplexUserPositionedContent: React.FunctionComponent = () => {\n  const [isModalOpen, setIsModalOpen] = React.useState(false);\n\n  const toggleModal = () => {\n    setIsModalOpen(!isModalOpen);\n  };\n\n  return (\n    <React.Fragment>\n      <Button variant=\"primary\" onClick={toggleModal}>\n        Show about modal\n      </Button>\n      <AboutModal\n        isOpen={isModalOpen}\n        onClose={toggleModal}\n        trademark=\"Trademark and copyright information here\"\n        brandImageSrc={brandImg}\n        brandImageAlt=\"Patternfly Logo\"\n        noAboutModalBoxContentContainer={true}\n        productName=\"Product Name\"\n      >\n        <TextContent id=\"test1\" className=\"pf-u-py-xl\">\n          <h4>About</h4>\n          <p>Content here</p>\n        </TextContent>\n        <Alert variant=\"info\" title=\"Updates available\" />\n        <TextContent id=\"test2\" className=\"pf-u-py-xl\">\n          <TextList component=\"dl\">\n            <TextListItem component=\"dt\">CFME Version</TextListItem>\n            <TextListItem component=\"dd\">5.5.3.4.20102789036450</TextListItem>\n            <TextListItem component=\"dt\">Cloudforms Version</TextListItem>\n            <TextListItem component=\"dd\">4.1</TextListItem>\n            <TextListItem component=\"dt\">Server Name</TextListItem>\n            <TextListItem component=\"dd\">40DemoMaster</TextListItem>\n            <TextListItem component=\"dt\">User Name</TextListItem>\n            <TextListItem component=\"dd\">Administrator</TextListItem>\n            <TextListItem component=\"dt\">User Role</TextListItem>\n            <TextListItem component=\"dd\">EvmRole-super_administrator</TextListItem>\n            <TextListItem component=\"dt\">Browser Version</TextListItem>\n            <TextListItem component=\"dd\">601.2</TextListItem>\n            <TextListItem component=\"dt\">Browser OS</TextListItem>\n            <TextListItem component=\"dd\">Mac</TextListItem>\n          </TextList>\n        </TextContent>\n      </AboutModal>\n    </React.Fragment>\n  );\n};\n","title":"Complex user positioned content","lang":"ts"}}>
      
    </Example>,
  'Custom background image': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { AboutModal, Button, TextContent, TextList, TextListItem } from '@patternfly/react-core';\nimport brandImg from './brandImg.svg';\nimport bgImg from './patternfly-orb.svg';\n\nexport const AboutModalCustomBackgroundImage: React.FunctionComponent = () => {\n  const [isModalOpen, setIsModalOpen] = React.useState(false);\n\n  const toggleModal = () => {\n    setIsModalOpen(!isModalOpen);\n  };\n\n  return (\n    <React.Fragment>\n      <Button variant=\"primary\" onClick={toggleModal}>\n        Show about modal\n      </Button>\n      <AboutModal\n        isOpen={isModalOpen}\n        onClose={toggleModal}\n        trademark=\"Trademark and copyright information here\"\n        brandImageSrc={brandImg}\n        brandImageAlt=\"Patternfly Logo\"\n        backgroundImageSrc={bgImg}\n      >\n        <TextContent>\n          <TextList component=\"dl\">\n            <TextListItem component=\"dt\">CFME Version</TextListItem>\n            <TextListItem component=\"dd\">5.5.3.4.20102789036450</TextListItem>\n          </TextList>\n        </TextContent>\n      </AboutModal>\n    </React.Fragment>\n  );\n};\n","title":"Custom background image","lang":"ts"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Basic"])}
    {React.createElement(pageData.examples["Without product name"])}
    {React.createElement(pageData.examples["Complex user positioned content"])}
    {React.createElement(pageData.examples["Custom background image"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsAboutModalReactDocs';
Component.pageData = pageData;

export default Component;
