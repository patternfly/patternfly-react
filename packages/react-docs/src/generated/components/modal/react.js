import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import WarningTriangleIcon from '@patternfly/react-icons/dist/esm/icons/warning-triangle-icon';
import CaretDownIcon from '@patternfly/react-icons/dist/esm/icons/caret-down-icon';
import BullhornIcon from '@patternfly/react-icons/dist/esm/icons/bullhorn-icon';
import HelpIcon from '@patternfly/react-icons/dist/esm/icons/help-icon';
const pageData = {
  "id": "Modal",
  "section": "components",
  "source": "react",
  "slug": "/components/modal/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/components/Modal/examples/Modal.md",
  "propComponents": [
    {
      "name": "Modal",
      "description": "",
      "props": [
        {
          "name": "actions",
          "type": "any",
          "description": "Action buttons to add to the standard Modal Footer, ignored if `footer` is given",
          "defaultValue": "[]"
        },
        {
          "name": "appendTo",
          "type": "HTMLElement | (() => HTMLElement)",
          "description": "The parent container to append the modal to. Defaults to document.body",
          "defaultValue": "() => document.body"
        },
        {
          "name": "aria-describedby",
          "type": "string",
          "description": "Id to use for Modal Box descriptor",
          "defaultValue": "''"
        },
        {
          "name": "aria-label",
          "type": "string",
          "description": "Accessible descriptor of modal",
          "defaultValue": "''"
        },
        {
          "name": "aria-labelledby",
          "type": "string | null",
          "description": "Id to use for Modal Box label",
          "defaultValue": "''"
        },
        {
          "name": "bodyAriaLabel",
          "type": "string",
          "description": "Accessible label applied to the modal box body. This should be used to communicate important information about the modal box body div if needed, such as that it is scrollable"
        },
        {
          "name": "bodyAriaRole",
          "type": "string",
          "description": "Accessible role applied to the modal box body. This will default to region if a body aria label is applied. Set to a more appropriate role as applicable based on the modal content and context"
        },
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside the Modal.",
          "required": true
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the Modal",
          "defaultValue": "''"
        },
        {
          "name": "description",
          "type": "React.ReactNode",
          "description": "Description of the modal"
        },
        {
          "name": "disableFocusTrap",
          "type": "boolean",
          "description": "Flag to disable focus trap"
        },
        {
          "name": "footer",
          "type": "React.ReactNode",
          "description": "Custom footer"
        },
        {
          "name": "hasNoBodyWrapper",
          "type": "boolean",
          "description": "Flag indicating if modal content should be placed in a modal box body wrapper",
          "defaultValue": "false"
        },
        {
          "name": "header",
          "type": "React.ReactNode",
          "description": "Complex header (more than just text), supersedes title for header content"
        },
        {
          "name": "help",
          "type": "React.ReactNode",
          "description": "Optional help section for the Modal Header"
        },
        {
          "name": "id",
          "type": "string",
          "description": "An ID to use for the ModalBox container",
          "defaultValue": "undefined"
        },
        {
          "name": "isOpen",
          "type": "boolean",
          "description": "Flag to show the modal",
          "defaultValue": "false"
        },
        {
          "name": "onClose",
          "type": "() => void",
          "description": "A callback for when the close button is clicked",
          "defaultValue": "() => undefined as any"
        },
        {
          "name": "onEscapePress",
          "type": "(event: KeyboardEvent) => void",
          "description": "Modal handles pressing of the Escape key and closes the modal. If you want to handle this yourself you can use this callback function"
        },
        {
          "name": "ouiaSafe",
          "type": "No type info",
          "defaultValue": "true"
        },
        {
          "name": "position",
          "type": "literal",
          "description": "Alternate position of the modal"
        },
        {
          "name": "positionOffset",
          "type": "string",
          "description": "Offset from alternate position. Can be any valid CSS length/percentage"
        },
        {
          "name": "showClose",
          "type": "boolean",
          "description": "Flag to show the close button in the header area of the modal",
          "defaultValue": "true"
        },
        {
          "name": "title",
          "type": "string",
          "description": "Simple text content of the Modal Header, also used for aria-label on the body",
          "defaultValue": "''"
        },
        {
          "name": "titleIconVariant",
          "type": "'success' | 'danger' | 'warning' | 'info' | 'default' | React.ComponentType<any>",
          "description": "Optional alert icon (or other) to show before the title of the Modal Header\nWhen the predefined alert types are used the default styling\nwill be automatically applied",
          "defaultValue": "null"
        },
        {
          "name": "titleLabel",
          "type": "string",
          "description": "Optional title label text for screen readers",
          "defaultValue": "''"
        },
        {
          "name": "variant",
          "type": "'small' | 'medium' | 'large' | 'default'",
          "description": "Variant of the modal",
          "defaultValue": "'default'"
        },
        {
          "name": "width",
          "type": "number | string",
          "description": "Default width of the Modal."
        }
      ]
    },
    {
      "name": "ModalBox",
      "description": "",
      "props": [
        {
          "name": "aria-describedby",
          "type": "string",
          "description": "Id to use for Modal Box description",
          "required": true
        },
        {
          "name": "aria-label",
          "type": "string",
          "description": "Accessible descriptor of modal",
          "defaultValue": "''"
        },
        {
          "name": "aria-labelledby",
          "type": "string",
          "description": "Id to use for Modal Box label"
        },
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside the ModalBox.",
          "required": true
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the ModalBox",
          "defaultValue": "''"
        },
        {
          "name": "position",
          "type": "literal",
          "description": "Alternate position of the modal"
        },
        {
          "name": "positionOffset",
          "type": "string",
          "description": "Offset from alternate position. Can be any valid CSS length/percentage"
        },
        {
          "name": "variant",
          "type": "'small' | 'medium' | 'large' | 'default'",
          "description": "Variant of the modal",
          "defaultValue": "'default'"
        }
      ]
    },
    {
      "name": "ModalBoxBody",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside the ModalBoxBody",
          "defaultValue": "null"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the ModalBoxBody",
          "defaultValue": "''"
        }
      ]
    },
    {
      "name": "ModalBoxCloseButton",
      "description": "",
      "props": [
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the close button",
          "defaultValue": "''"
        },
        {
          "name": "onClose",
          "type": "() => void",
          "description": "A callback for when the close button is clicked",
          "defaultValue": "() => undefined as any"
        }
      ]
    },
    {
      "name": "ModalBoxFooter",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside the Footer",
          "defaultValue": "null"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the Footer",
          "defaultValue": "''"
        }
      ]
    },
    {
      "name": "ModalContent",
      "description": "",
      "props": [
        {
          "name": "actions",
          "type": "any",
          "description": "Action buttons to add to the standard Modal Footer, ignored if `footer` is given",
          "defaultValue": "[]"
        },
        {
          "name": "aria-describedby",
          "type": "string",
          "description": "Id of Modal Box description"
        },
        {
          "name": "aria-label",
          "type": "string",
          "description": "Accessible descriptor of modal",
          "defaultValue": "''"
        },
        {
          "name": "aria-labelledby",
          "type": "string | null",
          "description": "Id of Modal Box label"
        },
        {
          "name": "bodyAriaLabel",
          "type": "string",
          "description": "Accessible label applied to the modal box body. This should be used to communicate important information about the modal box body div if needed, such as that it is scrollable"
        },
        {
          "name": "bodyAriaRole",
          "type": "string",
          "description": "Accessible role applied to the modal box body. This will default to region if a body aria label is applied. Set to a more appropriate role as applicable based on the modal content and context"
        },
        {
          "name": "boxId",
          "type": "string",
          "description": "Id of the ModalBox container",
          "required": true
        },
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside the Modal.",
          "required": true
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the button",
          "defaultValue": "''"
        },
        {
          "name": "description",
          "type": "React.ReactNode",
          "description": "Description of the modal",
          "defaultValue": "null"
        },
        {
          "name": "descriptorId",
          "type": "string",
          "description": "Id of the ModalBoxBody",
          "required": true
        },
        {
          "name": "disableFocusTrap",
          "type": "boolean",
          "description": "Flag to disable focus trap",
          "defaultValue": "false"
        },
        {
          "name": "footer",
          "type": "React.ReactNode",
          "description": "Custom footer",
          "defaultValue": "null"
        },
        {
          "name": "hasNoBodyWrapper",
          "type": "boolean",
          "description": "Flag indicating if modal content should be placed in a modal box body wrapper",
          "defaultValue": "false"
        },
        {
          "name": "header",
          "type": "React.ReactNode",
          "description": "Complex header (more than just text), supersedes title for header content",
          "defaultValue": "null"
        },
        {
          "name": "help",
          "type": "React.ReactNode",
          "description": "Optional help section for the Modal Header",
          "defaultValue": "null"
        },
        {
          "name": "isOpen",
          "type": "boolean",
          "description": "Flag to show the modal",
          "defaultValue": "false"
        },
        {
          "name": "labelId",
          "type": "string",
          "description": "Id of the ModalBox title",
          "required": true
        },
        {
          "name": "onClose",
          "type": "() => void",
          "description": "A callback for when the close button is clicked",
          "defaultValue": "() => undefined as any"
        },
        {
          "name": "ouiaSafe",
          "type": "No type info",
          "defaultValue": "true"
        },
        {
          "name": "position",
          "type": "literal",
          "description": "Alternate position of the modal"
        },
        {
          "name": "positionOffset",
          "type": "string",
          "description": "Offset from alternate position. Can be any valid CSS length/percentage"
        },
        {
          "name": "showClose",
          "type": "boolean",
          "description": "Flag to show the close button in the header area of the modal",
          "defaultValue": "true"
        },
        {
          "name": "title",
          "type": "string",
          "description": "Simple text content of the Modal Header, also used for aria-label on the body",
          "defaultValue": "''"
        },
        {
          "name": "titleIconVariant",
          "type": "'success' | 'danger' | 'warning' | 'info' | 'default' | React.ComponentType<any>",
          "description": "Optional alert icon (or other) to show before the title of the Modal Header\nWhen the predefined alert types are used the default styling\nwill be automatically applied",
          "defaultValue": "null"
        },
        {
          "name": "titleLabel",
          "type": "string",
          "description": "Optional title label text for screen readers",
          "defaultValue": "''"
        },
        {
          "name": "variant",
          "type": "'small' | 'medium' | 'large' | 'default'",
          "description": "Variant of the modal",
          "defaultValue": "'default'"
        },
        {
          "name": "width",
          "type": "number | string",
          "description": "Default width of the content.",
          "defaultValue": "-1"
        }
      ]
    }
  ],
  "cssPrefix": [
    "pf-c-modal-box"
  ],
  "examples": [
    "Basic",
    "With description",
    "Top aligned",
    "Small",
    "Medium",
    "Large",
    "Width",
    "Custom header and footer",
    "No header",
    "Custom Icon",
    "Warning Alert",
    "With wizard",
    "With dropdown",
    "With help",
    "With form",
    "With overflowing content"
  ]
};
pageData.liveContext = {
  WarningTriangleIcon,
  CaretDownIcon,
  BullhornIcon,
  HelpIcon
};
pageData.examples = {
  'Basic': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Modal, Button } from '@patternfly/react-core';\n\nclass SimpleModal extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      isModalOpen: false\n    };\n    this.handleModalToggle = () => {\n      this.setState(({ isModalOpen }) => ({\n        isModalOpen: !isModalOpen\n      }));\n    };\n  }\n\n  render() {\n    const { isModalOpen } = this.state;\n\n    return (\n      <React.Fragment>\n        <Button variant=\"primary\" onClick={this.handleModalToggle}>\n          Show modal\n        </Button>\n        <Modal\n          title=\"Simple modal header\"\n          isOpen={isModalOpen}\n          onClose={this.handleModalToggle}\n          actions={[\n            <Button key=\"confirm\" variant=\"primary\" onClick={this.handleModalToggle}>\n              Confirm\n            </Button>,\n            <Button key=\"cancel\" variant=\"link\" onClick={this.handleModalToggle}>\n              Cancel\n            </Button>\n          ]}\n        >\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\n          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\n          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id\n          est laborum.\n        </Modal>\n      </React.Fragment>\n    );\n  }\n}","title":"Basic","lang":"js"}}>
      
    </Example>,
  'With description': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Modal, Button } from '@patternfly/react-core';\n\nclass SimpleModal extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      isModalOpen: false\n    };\n    this.handleModalToggle = () => {\n      this.setState(({ isModalOpen }) => ({\n        isModalOpen: !isModalOpen\n      }));\n    };\n  }\n\n  render() {\n    const { isModalOpen } = this.state;\n\n    return (\n      <React.Fragment>\n        <Button variant=\"primary\" onClick={this.handleModalToggle}>\n          Show modal\n        </Button>\n        <Modal\n          aria-label=\"My modal context\"\n          title=\"Modal header with description\"\n          isOpen={isModalOpen}\n          onClose={this.handleModalToggle}\n          description=\"A description is used when you want to provide more info about the modal than the title is able to describe. The content in the description is static and will not scroll with the rest of the modal body.\"\n          actions={[\n            <Button key=\"confirm\" variant=\"primary\" onClick={this.handleModalToggle}>\n              Confirm\n            </Button>,\n            <Button key=\"cancel\" variant=\"link\" onClick={this.handleModalToggle}>\n              Cancel\n            </Button>\n          ]}\n        >\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\n          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\n          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id\n          est laborum.\n        </Modal>\n      </React.Fragment>\n    );\n  }\n}","title":"With description","lang":"js"}}>
      
    </Example>,
  'Top aligned': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Modal, ModalVariant, Button } from '@patternfly/react-core';\n\nclass TopModal extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      isModalOpen: false\n    };\n    this.handleModalToggle = () => {\n      this.setState(({ isModalOpen }) => ({\n        isModalOpen: !isModalOpen\n      }));\n    };\n  }\n\n  render() {\n    const { isModalOpen } = this.state;\n\n    return (\n      <React.Fragment>\n        <Button variant=\"primary\" onClick={this.handleModalToggle}>\n          Show top aligned modal\n        </Button>\n        <Modal\n          position=\"top\"\n          title=\"Top modal header\"\n          isOpen={isModalOpen}\n          onClose={this.handleModalToggle}\n          actions={[\n            <Button key=\"confirm\" variant=\"primary\" onClick={this.handleModalToggle}>\n              Confirm\n            </Button>,\n            <Button key=\"cancel\" variant=\"link\" onClick={this.handleModalToggle}>\n              Cancel\n            </Button>\n          ]}\n        >\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\n          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\n          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id\n          est laborum.\n        </Modal>\n      </React.Fragment>\n    );\n  }\n}","title":"Top aligned","lang":"js"}}>
      
    </Example>,
  'Small': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Modal, ModalVariant, Button } from '@patternfly/react-core';\n\nclass SmallModal extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      isModalOpen: false\n    };\n    this.handleModalToggle = () => {\n      this.setState(({ isModalOpen }) => ({\n        isModalOpen: !isModalOpen\n      }));\n    };\n  }\n\n  render() {\n    const { isModalOpen } = this.state;\n\n    return (\n      <React.Fragment>\n        <Button variant=\"primary\" onClick={this.handleModalToggle}>\n          Show small modal\n        </Button>\n        <Modal\n          variant={ModalVariant.small}\n          title=\"Small modal header\"\n          isOpen={isModalOpen}\n          onClose={this.handleModalToggle}\n          actions={[\n            <Button key=\"confirm\" variant=\"primary\" onClick={this.handleModalToggle}>\n              Confirm\n            </Button>,\n            <Button key=\"cancel\" variant=\"link\" onClick={this.handleModalToggle}>\n              Cancel\n            </Button>\n          ]}\n        >\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\n          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\n          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id\n          est laborum.\n        </Modal>\n      </React.Fragment>\n    );\n  }\n}","title":"Small","lang":"js"}}>
      
    </Example>,
  'Medium': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Modal, ModalVariant, Button } from '@patternfly/react-core';\n\nclass MediumModal extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      isModalOpen: false\n    };\n    this.handleModalToggle = () => {\n      this.setState(({ isModalOpen }) => ({\n        isModalOpen: !isModalOpen\n      }));\n    };\n  }\n\n  render() {\n    const { isModalOpen } = this.state;\n\n    return (\n      <React.Fragment>\n        <Button variant=\"primary\" onClick={this.handleModalToggle}>\n          Show medium modal\n        </Button>\n        <Modal\n          variant={ModalVariant.medium}\n          title=\"Medium modal header\"\n          isOpen={isModalOpen}\n          onClose={this.handleModalToggle}\n          actions={[\n            <Button key=\"confirm\" variant=\"primary\" onClick={this.handleModalToggle}>\n              Confirm\n            </Button>,\n            <Button key=\"cancel\" variant=\"link\" onClick={this.handleModalToggle}>\n              Cancel\n            </Button>\n          ]}\n        >\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\n          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\n          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id\n          est laborum.\n        </Modal>\n      </React.Fragment>\n    );\n  }\n}","title":"Medium","lang":"js"}}>
      
    </Example>,
  'Large': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Modal, ModalVariant, Button } from '@patternfly/react-core';\n\nclass LargeModal extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      isModalOpen: false\n    };\n    this.handleModalToggle = () => {\n      this.setState(({ isModalOpen }) => ({\n        isModalOpen: !isModalOpen\n      }));\n    };\n  }\n\n  render() {\n    const { isModalOpen } = this.state;\n\n    return (\n      <React.Fragment>\n        <Button variant=\"primary\" onClick={this.handleModalToggle}>\n          Show large modal\n        </Button>\n        <Modal\n          variant={ModalVariant.large}\n          title=\"Large modal header\"\n          isOpen={isModalOpen}\n          onClose={this.handleModalToggle}\n          actions={[\n            <Button key=\"confirm\" variant=\"primary\" onClick={this.handleModalToggle}>\n              Confirm\n            </Button>,\n            <Button key=\"cancel\" variant=\"link\" onClick={this.handleModalToggle}>\n              Cancel\n            </Button>\n          ]}\n        >\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\n          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\n          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id\n          est laborum.\n        </Modal>\n      </React.Fragment>\n    );\n  }\n}","title":"Large","lang":"js"}}>
      
    </Example>,
  'Width': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Modal, Button } from '@patternfly/react-core';\n\nclass WidthModal extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      isModalOpen: false\n    };\n    this.handleModalToggle = () => {\n      this.setState(({ isModalOpen }) => ({\n        isModalOpen: !isModalOpen\n      }));\n    };\n  }\n\n  render() {\n    const { isModalOpen } = this.state;\n\n    return (\n      <React.Fragment>\n        <Button variant=\"primary\" onClick={this.handleModalToggle}>\n          Show 50% width modal\n        </Button>\n        <Modal\n          width={'50%'}\n          title=\"Modal header for set width example\"\n          isOpen={isModalOpen}\n          onClose={this.handleModalToggle}\n          actions={[\n            <Button key=\"confirm\" variant=\"primary\" onClick={this.handleModalToggle}>\n              Confirm\n            </Button>,\n            <Button key=\"cancel\" variant=\"link\" onClick={this.handleModalToggle}>\n              Cancel\n            </Button>\n          ]}\n        >\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\n          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\n          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id\n          est laborum.\n        </Modal>\n      </React.Fragment>\n    );\n  }\n}","title":"Width","lang":"js"}}>
      
    </Example>,
  'Custom header and footer': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Modal, ModalVariant, Button, Title, TitleSizes } from '@patternfly/react-core';\nimport WarningTriangleIcon from '@patternfly/react-icons/dist/esm/icons/warning-triangle-icon';\n\nclass CustomHeaderFooter extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      isModalOpen: false\n    };\n    this.handleModalToggle = () => {\n      this.setState(({ isModalOpen }) => ({\n        isModalOpen: !isModalOpen\n      }));\n    };\n  }\n\n  render() {\n    const { isModalOpen } = this.state;\n\n    const header = (\n      <React.Fragment>\n        <Title id=\"custom-header-label\" headingLevel=\"h1\" size={TitleSizes['2xl']}>\n          With custom modal header/footer\n        </Title>\n        <p className=\"pf-u-pt-sm\">Allows for custom content in the header and/or footer by passing components.</p>\n      </React.Fragment>\n    );\n\n    const footer = (\n      <Title headingLevel=\"h4\" size={TitleSizes.md}>\n        <WarningTriangleIcon />\n        <span className=\"pf-u-pl-sm\">Custom modal footer.</span>\n      </Title>\n    );\n\n    return (\n      <React.Fragment>\n        <Button variant=\"primary\" onClick={this.handleModalToggle}>\n          Show custom header/footer modal\n        </Button>\n        <Modal\n          variant={ModalVariant.large}\n          isOpen={isModalOpen}\n          header={header}\n          aria-label=\"My dialog\"\n          aria-labelledby=\"custom-header-label\"\n          aria-describedby=\"custom-header-description\"\n          onClose={this.handleModalToggle}\n          footer={footer}\n        >\n          <span id=\"custom-header-description\">\n            When static text describing the modal is available, it can be wrapped with an ID referring to the modal's\n            aria-describedby value.\n          </span>\n          <br />\n          <br />\n          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis\n          aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint\n          occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </Modal>\n      </React.Fragment>\n    );\n  }\n}","title":"Custom header and footer","lang":"js"}}>
      
    </Example>,
  'No header': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Modal, ModalVariant, Button } from '@patternfly/react-core';\n\nclass NoHeader extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      isModalOpen: false\n    };\n    this.handleModalToggle = () => {\n      this.setState(({ isModalOpen }) => ({\n        isModalOpen: !isModalOpen\n      }));\n    };\n  }\n\n  render() {\n    const { isModalOpen } = this.state;\n    const footer = <React.Fragment>Modal Footer</React.Fragment>;\n\n    return (\n      <React.Fragment>\n        <Button variant=\"primary\" onClick={this.handleModalToggle}>\n          Show no header modal\n        </Button>\n        <Modal\n          variant={ModalVariant.large}\n          isOpen={isModalOpen}\n          aria-label=\"No header example\"\n          showClose={true}\n          aria-describedby=\"no-header-example\"\n          onClose={this.handleModalToggle}\n          footer={footer}\n        >\n          <span id=\"no-header-example\">\n            When static text describing the modal is available, it can be wrapped with an ID referring to the modal's\n            aria-describedby value.\n          </span>\n          <br />\n          <br />\n          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis\n          aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint\n          occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </Modal>\n      </React.Fragment>\n    );\n  }\n}","title":"No header","lang":"js"}}>
      
    </Example>,
  'Custom Icon': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Modal, Button } from '@patternfly/react-core';\nimport BullhornIcon from '@patternfly/react-icons/dist/esm/icons/bullhorn-icon';\n\nclass NoHeader extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      isModalOpen: false\n    };\n    this.handleModalToggle = () => {\n      this.setState(({ isModalOpen }) => ({\n        isModalOpen: !isModalOpen\n      }));\n    };\n  }\n\n  render() {\n    const { isModalOpen } = this.state;\n\n    return (\n      <React.Fragment>\n        <Button variant=\"primary\" onClick={this.handleModalToggle}>\n          Show icon modal\n        </Button>\n        <Modal\n          isOpen={isModalOpen}\n          aria-label=\"Modal custom icon example\"\n          title=\"Modal Header\"\n          titleIconVariant={BullhornIcon}\n          showClose={true}\n          aria-describedby=\"no-header-example\"\n          onClose={this.handleModalToggle}\n        >\n          <span id=\"no-header-example\">\n            When static text describing the modal is available, it can be wrapped with an ID referring to the modal's\n            aria-describedby value.\n          </span>\n          <br />\n          <br />\n          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis\n          aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint\n          occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </Modal>\n      </React.Fragment>\n    );\n  }\n}","title":"Custom Icon","lang":"js"}}>
      
    </Example>,
  'Warning Alert': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Modal, Button } from '@patternfly/react-core';\n\nclass NoHeader extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      isModalOpen: false\n    };\n    this.handleModalToggle = () => {\n      this.setState(({ isModalOpen }) => ({\n        isModalOpen: !isModalOpen\n      }));\n    };\n  }\n\n  render() {\n    const { isModalOpen } = this.state;\n\n    return (\n      <React.Fragment>\n        <Button variant=\"primary\" onClick={this.handleModalToggle}>\n          Show icon modal\n        </Button>\n        <Modal\n          isOpen={isModalOpen}\n          aria-label=\"Modal warning example\"\n          title=\"Modal Header\"\n          titleIconVariant=\"warning\"\n          showClose={true}\n          aria-describedby=\"no-header-example\"\n          onClose={this.handleModalToggle}\n        >\n          <span id=\"no-header-example\">\n            When static text describing the modal is available, it can be wrapped with an ID referring to the modal's\n            aria-describedby value.\n          </span>\n          <br />\n          <br />\n          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis\n          aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint\n          occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </Modal>\n      </React.Fragment>\n    );\n  }\n}","title":"Warning Alert","lang":"js"}}>
      
    </Example>,
  'With wizard': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Modal, Button, Wizard } from '@patternfly/react-core';\n\nclass WithWizard extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      isModalOpen: false\n    };\n    this.handleModalToggle = () => {\n      this.setState(({ isModalOpen }) => ({\n        isModalOpen: !isModalOpen\n      }));\n    };\n  }\n\n  render() {\n    const { isModalOpen } = this.state;\n\n    const steps = [\n      { name: 'Step 1', component: <p>Step 1</p> },\n      { name: 'Step 2', component: <p>Step 2</p> },\n      { name: 'Step 3', component: <p>Step 3</p> },\n      { name: 'Step 4', component: <p>Step 4</p> },\n      { name: 'Review', component: <p>Review Step</p>, nextButtonText: 'Finish' }\n    ];\n\n    return (\n      <React.Fragment>\n        <Button variant=\"primary\" onClick={this.handleModalToggle}>\n          Show modal\n        </Button>\n        <Modal\n          isOpen={isModalOpen}\n          variant={ModalVariant.large}\n          showClose={false}\n          onClose={this.handleModalToggle}\n          hasNoBodyWrapper\n          aria-describedby=\"wiz-modal-example-description\"\n          aria-labelledby=\"wiz-modal-example-title\"\n        >\n          <Wizard\n            titleId=\"wiz-modal-example-title\"\n            descriptionId=\"wiz-modal-example-description\"\n            title=\"Simple Wizard\"\n            description=\"Simple Wizard Description\"\n            steps={steps}\n            onClose={this.handleModalToggle}\n            height={400}\n          />\n        </Modal>\n      </React.Fragment>\n    );\n  }\n}","title":"With wizard","lang":"js"}}>
      
    </Example>,
  'With dropdown': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Modal, Button, Dropdown, DropdownToggle, DropdownItem, KebabToggle } from '@patternfly/react-core';\nimport CaretDownIcon from '@patternfly/react-icons/dist/esm/icons/caret-down-icon';\n\nclass WithDropdown extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      isModalOpen: false,\n      isDropdownOpen: false\n    };\n    this.handleModalToggle = () => {\n      const { isModalOpen } = this.state;\n      this.setState({\n        isModalOpen: !isModalOpen,\n        isDropdownOpen: false\n      });\n    };\n    this.onToggle = isDropdownOpen => {\n      this.setState({\n        isDropdownOpen\n      });\n    };\n    this.onSelect = event => {\n      this.setState({\n        isDropdownOpen: !this.state.isDropdownOpen\n      });\n      this.onFocus();\n    };\n    this.onFocus = () => {\n      const element = document.getElementById('toggle-id-menu-document-body');\n      element.focus();\n    };\n    this.onEscapePress = () => {\n      const { isDropdownOpen } = this.state;\n      if (isDropdownOpen) {\n        this.setState(\n          {\n            isDropdownOpen: !isDropdownOpen\n          },\n          () => {\n            this.onFocus();\n          }\n        );\n      } else {\n        this.handleModalToggle();\n      }\n    };\n  }\n\n  render() {\n    const { isModalOpen, isDropdownOpen } = this.state;\n\n    const dropdownItems = [\n      <DropdownItem key=\"link\">Link</DropdownItem>,\n      <DropdownItem key=\"action\" component=\"button\">\n        Action\n      </DropdownItem>,\n      <DropdownItem key=\"disabled link\" isDisabled>\n        Disabled Link\n      </DropdownItem>,\n      <DropdownItem key=\"disabled action\" isDisabled component=\"button\">\n        Disabled Action\n      </DropdownItem>,\n      <DropdownItem key=\"separated link\">Separated Link</DropdownItem>,\n      <DropdownItem key=\"separated action\" component=\"button\">\n        Separated Action\n      </DropdownItem>\n    ];\n\n    return (\n      <React.Fragment>\n        <Button variant=\"primary\" onClick={this.handleModalToggle}>\n          Show modal\n        </Button>\n        <Modal\n          title=\"Modal with dropdown\"\n          variant={ModalVariant.small}\n          isOpen={isModalOpen}\n          onClose={this.handleModalToggle}\n          actions={[\n            <Button key=\"confirm\" variant=\"primary\" onClick={this.handleModalToggle}>\n              Confirm\n            </Button>,\n            <Button key=\"cancel\" variant=\"link\" onClick={this.handleModalToggle}>\n              Cancel\n            </Button>\n          ]}\n          onEscapePress={this.onEscapePress}\n        >\n          <div>\n            Set the dropdown <strong>menuAppendTo</strong> prop to <em>parent</em> in order to allow the dropdown menu\n            break out of the modal container. You'll also want to handle closing of the modal yourself, by listening to\n            the <strong>onEscapePress</strong> callback on the Modal component, so you can close the Dropdown first if\n            it's open.\n          </div>\n          <div>\n            <Dropdown\n              onSelect={this.onSelect}\n              toggle={\n                <DropdownToggle\n                  id=\"toggle-id-menu-document-body\"\n                  onToggle={this.onToggle}\n                  toggleIndicator={CaretDownIcon}\n                >\n                  Dropdown with a menu that can break out\n                </DropdownToggle>\n              }\n              isOpen={isDropdownOpen}\n              dropdownItems={dropdownItems}\n              menuAppendTo=\"parent\"\n            />\n          </div>\n        </Modal>\n      </React.Fragment>\n    );\n  }\n}","title":"With dropdown","lang":"js"}}>
      
    </Example>,
  'With help': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Modal, Button, Popover } from '@patternfly/react-core';\nimport HelpIcon from '@patternfly/react-icons/dist/esm/icons/help-icon';\n\nclass HelpModal extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      isModalOpen: false\n    };\n    this.handleModalToggle = () => {\n      this.setState(({ isModalOpen }) => ({\n        isModalOpen: !isModalOpen\n      }));\n    };\n  }\n\n  render() {\n    const { isModalOpen } = this.state;\n\n    return (\n      <React.Fragment>\n        <Button variant=\"primary\" onClick={this.handleModalToggle}>\n          Show modal\n        </Button>\n        <Modal\n          title=\"Simple modal header\"\n          help={\n            <Popover\n              headerContent={<div>Help Popover</div>}\n              bodyContent={\n                <div>\n                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla\n                  turpis.\n                </div>\n              }\n              footerContent=\"Popover Footer\"\n            >\n              <Button variant=\"plain\" aria-label=\"Help\">\n                <HelpIcon />\n              </Button>\n            </Popover>\n          }\n          isOpen={isModalOpen}\n          onClose={this.handleModalToggle}\n          actions={[\n            <Button key=\"confirm\" variant=\"primary\" onClick={this.handleModalToggle}>\n              Confirm\n            </Button>,\n            <Button key=\"cancel\" variant=\"link\" onClick={this.handleModalToggle}>\n              Cancel\n            </Button>\n          ]}\n        >\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\n          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\n          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id\n          est laborum.\n        </Modal>\n      </React.Fragment>\n    );\n  }\n}","title":"With help","lang":"js"}}>
      
    </Example>,
  'With form': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Modal, ModalVariant, Button, Form, FormGroup, Popover, TextInput } from '@patternfly/react-core';\nimport HelpIcon from '@patternfly/react-icons/dist/esm/icons/help-icon';\n\nexport const ModalWithForm: React.FunctionComponent = () => {\n  const [isModalOpen, setModalOpen] = React.useState(false);\n  const [nameValue, setNameValue] = React.useState('');\n  const [emailValue, setEmailValue] = React.useState('');\n  const [addressValue, setAddressValue] = React.useState('');\n  const nameInputRef = React.useRef();\n\n  const handleModalToggle = () => {\n    setModalOpen(!isModalOpen);\n  };\n\n  const handleNameInputChange = value => {\n    setNameValue(value);\n  };\n\n  const handleEmailInputChange = value => {\n    setEmailValue(value);\n  };\n  const handleAddressInputChange = value => {\n    setAddressValue(value);\n  };\n\n  React.useEffect(() => {\n    if (isModalOpen && nameInputRef && nameInputRef.current) {\n      (nameInputRef.current as HTMLInputElement).focus();\n    }\n  }, [isModalOpen]);\n\n  return (\n    <React.Fragment>\n      <Button variant=\"primary\" onClick={handleModalToggle}>\n        Show modal\n      </Button>\n      <Modal\n        variant={ModalVariant.small}\n        title=\"Create account\"\n        description=\"Enter your personal information below to create an account.\"\n        isOpen={isModalOpen}\n        onClose={handleModalToggle}\n        actions={[\n          <Button key=\"create\" variant=\"primary\" form=\"modal-with-form-form\" onClick={handleModalToggle}>\n            Confirm\n          </Button>,\n          <Button key=\"cancel\" variant=\"link\" onClick={handleModalToggle}>\n            Cancel\n          </Button>\n        ]}\n      >\n        <Form id=\"modal-with-form-form\">\n          <FormGroup\n            label=\"Name\"\n            labelIcon={\n              <Popover\n                headerContent={\n                  <div>\n                    The\n                    <a href=\"https://schema.org/name\" target=\"_blank\" rel=\"noopener noreferrer\">\n                      name\n                    </a>\n                    of a\n                    <a href=\"https://schema.org/Person\" target=\"_blank\" rel=\"noopener noreferrer\">\n                      Person\n                    </a>\n                  </div>\n                }\n                bodyContent={\n                  <div>\n                    Often composed of\n                    <a href=\"https://schema.org/givenName\" target=\"_blank\" rel=\"noopener noreferrer\">\n                      givenName\n                    </a>\n                    and\n                    <a href=\"https://schema.org/familyName\" target=\"_blank\" rel=\"noopener noreferrer\">\n                      familyName\n                    </a>\n                    .\n                  </div>\n                }\n              >\n                <button\n                  type=\"button\"\n                  aria-label=\"More info for name field\"\n                  onClick={e => e.preventDefault()}\n                  aria-describedby=\"modal-with-form-form-name\"\n                  className=\"pf-c-form__group-label-help\"\n                >\n                  <HelpIcon noVerticalAlign />\n                </button>\n              </Popover>\n            }\n            isRequired\n            fieldId=\"modal-with-form-form-name\"\n          >\n            <TextInput\n              isRequired\n              type=\"email\"\n              id=\"modal-with-form-form-name\"\n              name=\"modal-with-form-form-name\"\n              value={nameValue}\n              onChange={handleNameInputChange}\n              ref={nameInputRef}\n            />\n          </FormGroup>\n          <FormGroup\n            label=\"E-mail\"\n            labelIcon={\n              <Popover\n                headerContent={\n                  <div>\n                    The\n                    <a href=\"https://schema.org/email\" target=\"_blank\" rel=\"noopener noreferrer\">\n                      e-mail\n                    </a>\n                    of a\n                    <a href=\"https://schema.org/Person\" target=\"_blank\" rel=\"noopener noreferrer\">\n                      person\n                    </a>\n                  </div>\n                }\n                bodyContent={\n                  <div>\n                    Valid\n                    <a href=\"https://schema.org/email\" target=\"_blank\" rel=\"noopener noreferrer\">\n                      e-mail\n                    </a>\n                    address.\n                  </div>\n                }\n              >\n                <button\n                  type=\"button\"\n                  aria-label=\"More info for e-mail field\"\n                  onClick={e => e.preventDefault()}\n                  aria-describedby=\"modal-with-form-form-email\"\n                  className=\"pf-c-form__group-label-help\"\n                >\n                  <HelpIcon noVerticalAlign />\n                </button>\n              </Popover>\n            }\n            isRequired\n            fieldId=\"modal-with-form-form-email\"\n          >\n            <TextInput\n              isRequired\n              type=\"email\"\n              id=\"modal-with-form-form-email\"\n              name=\"modal-with-form-form-email\"\n              value={emailValue}\n              onChange={handleEmailInputChange}\n            />\n          </FormGroup>\n          <FormGroup\n            label=\"Address\"\n            labelIcon={\n              <Popover\n                headerContent={\n                  <div>\n                    The\n                    <a href=\"https://schema.org/address\" target=\"_blank\" rel=\"noopener noreferrer\">\n                      adress\n                    </a>\n                    of a\n                    <a href=\"https://schema.org/Person\" target=\"_blank\" rel=\"noopener noreferrer\">\n                      person\n                    </a>\n                  </div>\n                }\n                bodyContent={\n                  <div>\n                    Valid\n                    <a href=\"https://schema.org/PostalAddress\" target=\"_blank\" rel=\"noopener noreferrer\">\n                      postal address.\n                    </a>\n                  </div>\n                }\n              >\n                <button\n                  type=\"button\"\n                  aria-label=\"More info for address field\"\n                  onClick={e => e.preventDefault()}\n                  aria-describedby=\"modal-with-form-form-address\"\n                  className=\"pf-c-form__group-label-help\"\n                >\n                  <HelpIcon noVerticalAlign />\n                </button>\n              </Popover>\n            }\n            isRequired\n            fieldId=\"modal-with-form-form-address\"\n          >\n            <TextInput\n              isRequired\n              type=\"email\"\n              id=\"modal-with-form-form-address\"\n              name=\"modal-with-form-form-address\"\n              value={addressValue}\n              onChange={handleAddressInputChange}\n            />\n          </FormGroup>\n        </Form>\n      </Modal>\n    </React.Fragment>\n  );\n};\n","title":"With form","lang":"ts"}}>
      
    </Example>,
  'With overflowing content': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Modal, ModalVariant, Button } from '@patternfly/react-core';\n\nexport const ModalWithOverflowingContent: React.FunctionComponent = () => {\n  const [isModalOpen, setIsModalOpen] = React.useState(false);\n\n  const handleModalToggle = () => {\n    setIsModalOpen(prevIsModalOpen => !prevIsModalOpen);\n  };\n\n  return (\n    <React.Fragment>\n      <Button variant=\"primary\" onClick={handleModalToggle}>\n        Show modal\n      </Button>\n      <Modal\n        bodyAriaLabel=\"Scrollable modal content\"\n        tabIndex={0}\n        variant={ModalVariant.small}\n        title=\"Modal with overflowing content\"\n        isOpen={isModalOpen}\n        onClose={handleModalToggle}\n        actions={[\n          <Button key=\"confirm\" variant=\"primary\" onClick={handleModalToggle}>\n            Confirm\n          </Button>,\n          <Button key=\"cancel\" variant=\"link\" onClick={handleModalToggle}>\n            Cancel\n          </Button>\n        ]}\n      >\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\n        magna aliqua. Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Semper auctor neque vitae tempus.\n        Diam donec adipiscing tristique risus. Augue eget arcu dictum varius duis. Ut enim blandit volutpat maecenas\n        volutpat blandit aliquam. Sit amet mauris commodo quis imperdiet massa tincidunt. Habitant morbi tristique\n        senectus et netus. Fames ac turpis egestas sed tempus urna. Neque laoreet suspendisse interdum consectetur\n        libero id. Volutpat lacus laoreet non curabitur gravida arcu ac tortor. Porta nibh venenatis cras sed felis eget\n        velit. Nullam non nisi est sit amet facilisis. Nunc mi ipsum faucibus vitae. Lorem sed risus ultricies tristique\n        nulla aliquet enim tortor at. Egestas sed tempus urna et pharetra pharetra massa massa ultricies. Lacinia quis\n        vel eros donec ac odio tempor orci. Malesuada fames ac turpis egestas integer eget aliquet.\n        <br />\n        <br />\n        Neque aliquam vestibulum morbi blandit cursus risus at ultrices. Molestie at elementum eu facilisis sed odio\n        morbi. Elit pellentesque habitant morbi tristique. Consequat nisl vel pretium lectus quam id leo in vitae. Quis\n        varius quam quisque id diam vel quam elementum. Viverra nam libero justo laoreet sit amet cursus. Sollicitudin\n        tempor id eu nisl nunc. Orci nulla pellentesque dignissim enim sit amet venenatis. Dignissim enim sit amet\n        venenatis urna cursus eget. Iaculis at erat pellentesque adipiscing commodo elit. Faucibus pulvinar elementum\n        integer enim neque volutpat. Nullam vehicula ipsum a arcu cursus vitae congue mauris. Nunc mattis enim ut tellus\n        elementum sagittis vitae. Blandit cursus risus at ultrices. Tellus mauris a diam maecenas sed enim. Non diam\n        phasellus vestibulum lorem sed risus ultricies tristique nulla.\n        <br />\n        <br />\n        Nulla pharetra diam sit amet nisl suscipit adipiscing. Ac tortor vitae purus faucibus ornare suspendisse sed\n        nisi. Sed felis eget velit aliquet sagittis id consectetur purus. Tincidunt tortor aliquam nulla facilisi cras\n        fermentum. Volutpat est velit egestas dui id ornare arcu odio. Pharetra magna ac placerat vestibulum. Ultrices\n        sagittis orci a scelerisque purus semper eget duis at. Nisi est sit amet facilisis magna etiam tempor orci eu.\n        Convallis tellus id interdum velit. Facilisis sed odio morbi quis commodo odio aenean sed.\n        <br />\n        <br />\n        Eu scelerisque felis imperdiet proin fermentum leo vel orci porta. Facilisi etiam dignissim diam quis enim\n        lobortis scelerisque fermentum. Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. Magna\n        etiam tempor orci eu lobortis elementum. Quis auctor elit sed vulputate mi sit. Eleifend quam adipiscing vitae\n        proin sagittis nisl rhoncus mattis rhoncus. Erat velit scelerisque in dictum non. Sit amet nulla facilisi morbi\n        tempus iaculis urna. Enim ut tellus elementum sagittis vitae et leo duis ut. Lectus arcu bibendum at varius vel\n        pharetra vel turpis. Morbi tristique senectus et netus et. Eget aliquet nibh praesent tristique magna sit amet\n        purus gravida. Nisl purus in mollis nunc sed id semper risus. Id neque aliquam vestibulum morbi. Mauris a diam\n        maecenas sed enim ut sem. Egestas tellus rutrum tellus pellentesque.\n      </Modal>\n    </React.Fragment>\n  );\n};\n","title":"With overflowing content","lang":"ts"}}>
      
      <p {...{"className":"ws-p"}}>
        {`If the content that you're passing to the modal is likely to overflow the modal content area, pass tabIndex=`}
        {0}
        {` to the modal to enable keyboard accessible scrolling.`}
      </p>
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Basic"])}
    {React.createElement(pageData.examples["With description"])}
    {React.createElement(pageData.examples["Top aligned"])}
    {React.createElement(pageData.examples["Small"])}
    {React.createElement(pageData.examples["Medium"])}
    {React.createElement(pageData.examples["Large"])}
    {React.createElement(pageData.examples["Width"])}
    {React.createElement(pageData.examples["Custom header and footer"])}
    {React.createElement(pageData.examples["No header"])}
    {React.createElement(pageData.examples["Custom Icon"])}
    {React.createElement(pageData.examples["Warning Alert"])}
    {React.createElement(pageData.examples["With wizard"])}
    {React.createElement(pageData.examples["With dropdown"])}
    {React.createElement(pageData.examples["With help"])}
    {React.createElement(pageData.examples["With form"])}
    {React.createElement(pageData.examples["With overflowing content"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsModalReactDocs';
Component.pageData = pageData;

export default Component;
