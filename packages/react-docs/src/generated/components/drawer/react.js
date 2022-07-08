import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Drawer",
  "section": "components",
  "source": "react",
  "slug": "/components/drawer/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/components/Drawer/examples/Drawer.md",
  "propComponents": [
    {
      "name": "Drawer",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered in the left hand panel"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the Drawer.",
          "defaultValue": "''"
        },
        {
          "name": "isExpanded",
          "type": "boolean",
          "description": "Indicates if the drawer is expanded",
          "defaultValue": "false"
        },
        {
          "name": "isInline",
          "type": "boolean",
          "description": "Indicates if the content element and panel element are displayed side by side.",
          "defaultValue": "false"
        },
        {
          "name": "isStatic",
          "type": "boolean",
          "description": "Indicates if the drawer will always show both content and panel.",
          "defaultValue": "false"
        },
        {
          "name": "onExpand",
          "type": "() => void",
          "description": "Callback when drawer panel is expanded after waiting 250ms for animation to complete.",
          "defaultValue": "() => {}"
        },
        {
          "name": "position",
          "type": "'left' | 'right' | 'bottom'",
          "description": "Position of the drawer panel",
          "defaultValue": "'right'"
        }
      ]
    },
    {
      "name": "DrawerContent",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content to be rendered in the drawer."
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the Drawer.",
          "defaultValue": "''"
        },
        {
          "name": "colorVariant",
          "type": "DrawerColorVariant | 'light-200' | 'default'",
          "description": "Color variant of the background of the drawer panel",
          "defaultValue": "DrawerColorVariant.default"
        },
        {
          "name": "panelContent",
          "type": "React.ReactNode",
          "description": "Content rendered in the drawer panel.",
          "required": true
        }
      ]
    },
    {
      "name": "DrawerPanelContent",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content to be rendered in the drawer panel."
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the drawer.",
          "defaultValue": "''"
        },
        {
          "name": "colorVariant",
          "type": "DrawerColorVariant | 'light-200' | 'default'",
          "description": "Color variant of the background of the drawer panel",
          "defaultValue": "DrawerColorVariant.default"
        },
        {
          "name": "defaultSize",
          "type": "string",
          "description": "The starting size of a resizable drawer, in either pixels or percentage."
        },
        {
          "name": "hasNoBorder",
          "type": "boolean",
          "description": "Flag indicating that the drawer panel should not have a border.",
          "defaultValue": "false"
        },
        {
          "name": "id",
          "type": "string",
          "description": "ID of the drawer panel"
        },
        {
          "name": "increment",
          "type": "number",
          "description": "The increment amount for keyboard drawer resizing, in pixels.",
          "defaultValue": "5"
        },
        {
          "name": "isResizable",
          "type": "boolean",
          "description": "Flag indicating that the drawer panel should be resizable.",
          "defaultValue": "false"
        },
        {
          "name": "maxSize",
          "type": "string",
          "description": "The maximum size of a drawer, in either pixels or percentage."
        },
        {
          "name": "minSize",
          "type": "string",
          "description": "The minimum size of a drawer, in either pixels or percentage."
        },
        {
          "name": "onResize",
          "type": "(width: number, id: string) => void",
          "description": "Callback for resize end."
        },
        {
          "name": "resizeAriaLabel",
          "type": "string",
          "description": "Aria label for the resizable drawer splitter.",
          "defaultValue": "'Resize'"
        },
        {
          "name": "widths",
          "type": "{\n  default?: 'width_25' | 'width_33' | 'width_50' | 'width_66' | 'width_75' | 'width_100';\n  lg?: 'width_25' | 'width_33' | 'width_50' | 'width_66' | 'width_75' | 'width_100';\n  xl?: 'width_25' | 'width_33' | 'width_50' | 'width_66' | 'width_75' | 'width_100';\n  '2xl'?: 'width_25' | 'width_33' | 'width_50' | 'width_66' | 'width_75' | 'width_100';\n}",
          "description": "Width for drawer panel at various breakpoints. Overriden by resizable drawer minSize and defaultSize."
        }
      ]
    },
    {
      "name": "DrawerContentBody",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content to be rendered in the drawer"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the Drawer.",
          "defaultValue": "''"
        },
        {
          "name": "hasPadding",
          "type": "boolean",
          "description": "Indicates if there should be padding around the drawer content body",
          "defaultValue": "false"
        }
      ]
    },
    {
      "name": "DrawerPanelBody",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content to be rendered in the drawer"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the Drawer.",
          "defaultValue": "''"
        },
        {
          "name": "hasNoPadding",
          "type": "boolean",
          "description": "Indicates if there should be no padding around the drawer panel body",
          "defaultValue": "false"
        }
      ]
    },
    {
      "name": "DrawerSection",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content to be rendered in the drawer section."
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the drawer section.",
          "defaultValue": "''"
        },
        {
          "name": "colorVariant",
          "type": "DrawerColorVariant | 'light-200' | 'default'",
          "description": "Color variant of the background of the drawer Section",
          "defaultValue": "DrawerColorVariant.default"
        }
      ]
    },
    {
      "name": "DrawerHead",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content to be rendered in the drawer head"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the drawer head.",
          "defaultValue": "''"
        },
        {
          "name": "hasNoPadding",
          "type": "boolean",
          "description": "Indicates if there should be no padding around the drawer panel body of the head",
          "defaultValue": "false"
        }
      ]
    },
    {
      "name": "DrawerActions",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Actions to be rendered in the panel head."
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the drawer actions button.",
          "defaultValue": "''"
        }
      ]
    },
    {
      "name": "DrawerCloseButton",
      "description": "",
      "props": [
        {
          "name": "aria-label",
          "type": "string",
          "description": "Accessible label for the drawer close button",
          "defaultValue": "'Close drawer panel'"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the drawer close button outer <div>.",
          "defaultValue": "''"
        },
        {
          "name": "onClose",
          "type": "() => void",
          "description": "A callback for when the close button is clicked",
          "defaultValue": "() => undefined as any"
        }
      ]
    }
  ],
  "cssPrefix": [
    "pf-c-drawer"
  ],
  "examples": [
    "Basic",
    "Panel on right",
    "Panel on left",
    "Panel on bottom",
    "Basic inline",
    "Inline panel on right",
    "Inline panel on left",
    "Stacked content body elements",
    "Modified content padding",
    "Modified panel padding",
    "Additional section above drawer content",
    "Static drawer",
    "Breakpoint",
    "Resizable on right",
    "Resizable on left",
    "Resizable on bottom",
    "Resizable on inline",
    "Panel with light-200 background"
  ]
};
pageData.examples = {
  'Basic': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  Drawer,\n  DrawerPanelContent,\n  DrawerContent,\n  DrawerContentBody,\n  DrawerHead,\n  DrawerActions,\n  DrawerCloseButton,\n  Button\n} from '@patternfly/react-core';\n\nexport const DrawerBasic: React.FunctionComponent = () => {\n  const [isExpanded, setIsExpanded] = React.useState(false);\n  const drawerRef = React.useRef<HTMLDivElement>();\n\n  const onExpand = () => {\n    drawerRef.current && drawerRef.current.focus();\n  };\n\n  const onClick = () => {\n    setIsExpanded(!isExpanded);\n  };\n\n  const onCloseClick = () => {\n    setIsExpanded(false);\n  };\n\n  const panelContent = (\n    <DrawerPanelContent>\n      <DrawerHead>\n        <span tabIndex={isExpanded ? 0 : -1} ref={drawerRef}>\n          drawer-panel\n        </span>\n        <DrawerActions>\n          <DrawerCloseButton onClick={onCloseClick} />\n        </DrawerActions>\n      </DrawerHead>\n    </DrawerPanelContent>\n  );\n\n  const drawerContent =\n    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat,nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.';\n\n  return (\n    <React.Fragment>\n      <Button aria-expanded={isExpanded} onClick={onClick}>\n        Toggle drawer\n      </Button>\n      <Drawer isExpanded={isExpanded} onExpand={onExpand}>\n        <DrawerContent panelContent={panelContent}>\n          <DrawerContentBody>{drawerContent}</DrawerContentBody>\n        </DrawerContent>\n      </Drawer>\n    </React.Fragment>\n  );\n};\n","title":"Basic","lang":"ts"}}>
      
    </Example>,
  'Panel on right': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  Drawer,\n  DrawerPanelContent,\n  DrawerContent,\n  DrawerContentBody,\n  DrawerHead,\n  DrawerActions,\n  DrawerCloseButton,\n  Button\n} from '@patternfly/react-core';\n\nexport const DrawerPanelRight: React.FunctionComponent = () => {\n  const [isExpanded, setIsExpanded] = React.useState(false);\n  const drawerRef = React.useRef<HTMLDivElement>();\n\n  const onExpand = () => {\n    drawerRef.current && drawerRef.current.focus();\n  };\n\n  const onClick = () => {\n    setIsExpanded(!isExpanded);\n  };\n\n  const onCloseClick = () => {\n    setIsExpanded(false);\n  };\n\n  const panelContent = (\n    <DrawerPanelContent>\n      <DrawerHead>\n        <span tabIndex={isExpanded ? 0 : -1} ref={drawerRef}>\n          drawer-panel\n        </span>\n        <DrawerActions>\n          <DrawerCloseButton onClick={onCloseClick} />\n        </DrawerActions>\n      </DrawerHead>\n    </DrawerPanelContent>\n  );\n\n  const drawerContent =\n    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat,nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.';\n\n  return (\n    <React.Fragment>\n      <Button aria-expanded={isExpanded} onClick={onClick}>\n        Toggle drawer\n      </Button>\n      <Drawer isExpanded={isExpanded} position=\"right\" onExpand={onExpand}>\n        <DrawerContent panelContent={panelContent}>\n          <DrawerContentBody>{drawerContent}</DrawerContentBody>\n        </DrawerContent>\n      </Drawer>\n    </React.Fragment>\n  );\n};\n","title":"Panel on right","lang":"ts"}}>
      
    </Example>,
  'Panel on left': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  Drawer,\n  DrawerPanelContent,\n  DrawerContent,\n  DrawerContentBody,\n  DrawerHead,\n  DrawerActions,\n  DrawerCloseButton,\n  Button\n} from '@patternfly/react-core';\n\nexport const DrawerPanelLeft: React.FunctionComponent = () => {\n  const [isExpanded, setIsExpanded] = React.useState(false);\n  const drawerRef = React.useRef<HTMLDivElement>();\n\n  const onExpand = () => {\n    drawerRef.current && drawerRef.current.focus();\n  };\n\n  const onClick = () => {\n    setIsExpanded(!isExpanded);\n  };\n\n  const onCloseClick = () => {\n    setIsExpanded(false);\n  };\n\n  const panelContent = (\n    <DrawerPanelContent>\n      <DrawerHead>\n        <span tabIndex={isExpanded ? 0 : -1} ref={drawerRef}>\n          drawer-panel\n        </span>\n        <DrawerActions>\n          <DrawerCloseButton onClick={onCloseClick} />\n        </DrawerActions>\n      </DrawerHead>\n    </DrawerPanelContent>\n  );\n\n  const drawerContent =\n    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat,nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.';\n\n  return (\n    <React.Fragment>\n      <Button aria-expanded={isExpanded} onClick={onClick}>\n        Toggle drawer\n      </Button>\n      <Drawer isExpanded={isExpanded} position=\"left\" onExpand={onExpand}>\n        <DrawerContent panelContent={panelContent}>\n          <DrawerContentBody>{drawerContent}</DrawerContentBody>\n        </DrawerContent>\n      </Drawer>\n    </React.Fragment>\n  );\n};\n","title":"Panel on left","lang":"ts"}}>
      
    </Example>,
  'Panel on bottom': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  Drawer,\n  DrawerPanelContent,\n  DrawerContent,\n  DrawerContentBody,\n  DrawerHead,\n  DrawerActions,\n  DrawerCloseButton,\n  Button\n} from '@patternfly/react-core';\n\nexport const DrawerPanelBottom: React.FunctionComponent = () => {\n  const [isExpanded, setIsExpanded] = React.useState(false);\n  const drawerRef = React.useRef<HTMLDivElement>();\n\n  const onExpand = () => {\n    drawerRef.current && drawerRef.current.focus();\n  };\n\n  const onClick = () => {\n    setIsExpanded(!isExpanded);\n  };\n\n  const onCloseClick = () => {\n    setIsExpanded(false);\n  };\n\n  const panelContent = (\n    <DrawerPanelContent>\n      <DrawerHead>\n        <span tabIndex={isExpanded ? 0 : -1} ref={drawerRef}>\n          drawer-panel\n        </span>\n        <DrawerActions>\n          <DrawerCloseButton onClick={onCloseClick} />\n        </DrawerActions>\n      </DrawerHead>\n    </DrawerPanelContent>\n  );\n\n  const drawerContent =\n    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat,nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.';\n\n  return (\n    <React.Fragment>\n      <Button aria-expanded={isExpanded} onClick={onClick}>\n        Toggle drawer\n      </Button>\n      <div style={{ height: '400px' }}>\n        <Drawer isExpanded={isExpanded} position=\"bottom\" onExpand={onExpand}>\n          <DrawerContent panelContent={panelContent}>\n            <DrawerContentBody>{drawerContent}</DrawerContentBody>\n          </DrawerContent>\n        </Drawer>\n      </div>\n    </React.Fragment>\n  );\n};\n","title":"Panel on bottom","lang":"ts"}}>
      
    </Example>,
  'Basic inline': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  Drawer,\n  DrawerPanelContent,\n  DrawerContent,\n  DrawerContentBody,\n  DrawerHead,\n  DrawerActions,\n  DrawerCloseButton,\n  Button\n} from '@patternfly/react-core';\n\nexport const DrawerBasicInline: React.FunctionComponent = () => {\n  const [isExpanded, setIsExpanded] = React.useState(false);\n  const drawerRef = React.useRef<HTMLDivElement>();\n\n  const onExpand = () => {\n    drawerRef.current && drawerRef.current.focus();\n  };\n\n  const onClick = () => {\n    setIsExpanded(!isExpanded);\n  };\n\n  const onCloseClick = () => {\n    setIsExpanded(false);\n  };\n\n  const panelContent = (\n    <DrawerPanelContent>\n      <DrawerHead>\n        <span tabIndex={isExpanded ? 0 : -1} ref={drawerRef}>\n          drawer-panel\n        </span>\n        <DrawerActions>\n          <DrawerCloseButton onClick={onCloseClick} />\n        </DrawerActions>\n      </DrawerHead>\n    </DrawerPanelContent>\n  );\n\n  const drawerContent =\n    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat,nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.';\n\n  return (\n    <React.Fragment>\n      <Button aria-expanded={isExpanded} onClick={onClick}>\n        Toggle drawer\n      </Button>\n      <Drawer isExpanded={isExpanded} isInline onExpand={onExpand}>\n        <DrawerContent panelContent={panelContent}>\n          <DrawerContentBody>{drawerContent}</DrawerContentBody>\n        </DrawerContent>\n      </Drawer>\n    </React.Fragment>\n  );\n};\n","title":"Basic inline","lang":"ts"}}>
      
    </Example>,
  'Inline panel on right': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  Drawer,\n  DrawerPanelContent,\n  DrawerContent,\n  DrawerContentBody,\n  DrawerHead,\n  DrawerActions,\n  DrawerCloseButton,\n  Button\n} from '@patternfly/react-core';\n\nexport const DrawerInlinePanelRight: React.FunctionComponent = () => {\n  const [isExpanded, setIsExpanded] = React.useState(false);\n  const drawerRef = React.useRef<HTMLDivElement>();\n\n  const onExpand = () => {\n    drawerRef.current && drawerRef.current.focus();\n  };\n\n  const onClick = () => {\n    setIsExpanded(!isExpanded);\n  };\n\n  const onCloseClick = () => {\n    setIsExpanded(false);\n  };\n\n  const panelContent = (\n    <DrawerPanelContent>\n      <DrawerHead>\n        <span tabIndex={isExpanded ? 0 : -1} ref={drawerRef}>\n          drawer-panel\n        </span>\n        <DrawerActions>\n          <DrawerCloseButton onClick={onCloseClick} />\n        </DrawerActions>\n      </DrawerHead>\n    </DrawerPanelContent>\n  );\n\n  const drawerContent =\n    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat,nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.';\n\n  return (\n    <React.Fragment>\n      <Button aria-expanded={isExpanded} onClick={onClick}>\n        Toggle drawer\n      </Button>\n      <Drawer isExpanded={isExpanded} isInline onExpand={onExpand}>\n        <DrawerContent panelContent={panelContent}>\n          <DrawerContentBody>{drawerContent}</DrawerContentBody>\n        </DrawerContent>\n      </Drawer>\n    </React.Fragment>\n  );\n};\n","title":"Inline panel on right","lang":"ts"}}>
      
    </Example>,
  'Inline panel on left': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  Drawer,\n  DrawerPanelContent,\n  DrawerContent,\n  DrawerContentBody,\n  DrawerHead,\n  DrawerActions,\n  DrawerCloseButton,\n  Button\n} from '@patternfly/react-core';\n\nexport const DrawerInlinePanelLeft: React.FunctionComponent = () => {\n  const [isExpanded, setIsExpanded] = React.useState(false);\n  const drawerRef = React.useRef<HTMLDivElement>();\n\n  const onExpand = () => {\n    drawerRef.current && drawerRef.current.focus();\n  };\n\n  const onClick = () => {\n    setIsExpanded(!isExpanded);\n  };\n\n  const onCloseClick = () => {\n    setIsExpanded(false);\n  };\n\n  const panelContent = (\n    <DrawerPanelContent>\n      <DrawerHead>\n        <span tabIndex={isExpanded ? 0 : -1} ref={drawerRef}>\n          drawer-panel\n        </span>\n        <DrawerActions>\n          <DrawerCloseButton onClick={onCloseClick} />\n        </DrawerActions>\n      </DrawerHead>\n    </DrawerPanelContent>\n  );\n\n  const drawerContent =\n    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat,nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.';\n\n  return (\n    <React.Fragment>\n      <Button aria-expanded={isExpanded} onClick={onClick}>\n        Toggle drawer\n      </Button>\n      <Drawer isExpanded={isExpanded} isInline position=\"left\" onExpand={onExpand}>\n        <DrawerContent panelContent={panelContent}>\n          <DrawerContentBody>{drawerContent}</DrawerContentBody>\n        </DrawerContent>\n      </Drawer>\n    </React.Fragment>\n  );\n};\n","title":"Inline panel on left","lang":"ts"}}>
      
    </Example>,
  'Stacked content body elements': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  Drawer,\n  DrawerPanelContent,\n  DrawerContent,\n  DrawerContentBody,\n  DrawerHead,\n  DrawerActions,\n  DrawerCloseButton,\n  DrawerPanelBody,\n  Button\n} from '@patternfly/react-core';\n\nexport const DrawerStackedContentBodyElements: React.FunctionComponent = () => {\n  const [isExpanded, setIsExpanded] = React.useState(false);\n  const drawerRef = React.useRef<HTMLDivElement>();\n\n  const onExpand = () => {\n    drawerRef.current && drawerRef.current.focus();\n  };\n\n  const onClick = () => {\n    setIsExpanded(!isExpanded);\n  };\n\n  const onCloseClick = () => {\n    setIsExpanded(false);\n  };\n\n  const panelContent = (\n    <DrawerPanelContent>\n      <DrawerHead>\n        <h3 className=\"pf-c-title pf-m-2xl\" tabIndex={isExpanded ? 0 : -1} ref={drawerRef}>\n          drawer title{' '}\n        </h3>\n        <DrawerActions>\n          <DrawerCloseButton onClick={onCloseClick} />\n        </DrawerActions>\n        drawer-panel\n      </DrawerHead>\n      <DrawerPanelBody hasNoPadding>drawer-panel with no padding</DrawerPanelBody>\n      <DrawerPanelBody>drawer-panel</DrawerPanelBody>\n    </DrawerPanelContent>\n  );\n\n  return (\n    <React.Fragment>\n      <Button aria-expanded={isExpanded} onClick={onClick}>\n        Toggle drawer\n      </Button>\n      <Drawer isExpanded={isExpanded} onExpand={onExpand}>\n        <DrawerContent panelContent={panelContent}>\n          <DrawerContentBody>content-body</DrawerContentBody>\n          <DrawerContentBody hasPadding>content-body with padding</DrawerContentBody>\n          <DrawerContentBody>content-body</DrawerContentBody>\n        </DrawerContent>\n      </Drawer>\n    </React.Fragment>\n  );\n};\n","title":"Stacked content body elements","lang":"ts"}}>
      
    </Example>,
  'Modified content padding': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  Drawer,\n  DrawerPanelContent,\n  DrawerContent,\n  DrawerContentBody,\n  DrawerHead,\n  DrawerActions,\n  DrawerCloseButton,\n  Button\n} from '@patternfly/react-core';\n\nexport const DrawerModifiedContentPadding: React.FunctionComponent = () => {\n  const [isExpanded, setIsExpanded] = React.useState(false);\n  const drawerRef = React.useRef<HTMLDivElement>();\n\n  const onExpand = () => {\n    drawerRef.current && drawerRef.current.focus();\n  };\n\n  const onClick = () => {\n    setIsExpanded(!isExpanded);\n  };\n\n  const onCloseClick = () => {\n    setIsExpanded(false);\n  };\n\n  const panelContent = (\n    <DrawerPanelContent>\n      <DrawerHead>\n        <span tabIndex={isExpanded ? 0 : -1} ref={drawerRef}>\n          drawer-panel\n        </span>\n        <DrawerActions>\n          <DrawerCloseButton onClick={onCloseClick} />\n        </DrawerActions>\n      </DrawerHead>\n    </DrawerPanelContent>\n  );\n\n  const drawerContent =\n    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat,nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.';\n\n  return (\n    <React.Fragment>\n      <Button aria-expanded={isExpanded} onClick={onClick}>\n        Toggle drawer\n      </Button>\n      <Drawer isExpanded={isExpanded} onExpand={onExpand}>\n        <DrawerContent panelContent={panelContent}>\n          <DrawerContentBody hasPadding>\n            <b>Drawer content padding.</b> {drawerContent}\n          </DrawerContentBody>\n        </DrawerContent>\n      </Drawer>\n    </React.Fragment>\n  );\n};\n","title":"Modified content padding","lang":"ts"}}>
      
    </Example>,
  'Modified panel padding': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  Drawer,\n  DrawerPanelContent,\n  DrawerContent,\n  DrawerContentBody,\n  DrawerHead,\n  DrawerActions,\n  DrawerCloseButton,\n  Button\n} from '@patternfly/react-core';\n\nexport const DrawerModifiedPanelPadding: React.FunctionComponent = () => {\n  const [isExpanded, setIsExpanded] = React.useState(false);\n  const drawerRef = React.useRef<HTMLDivElement>();\n\n  const onExpand = () => {\n    drawerRef.current && drawerRef.current.focus();\n  };\n\n  const onClick = () => {\n    setIsExpanded(!isExpanded);\n  };\n\n  const onCloseClick = () => {\n    setIsExpanded(false);\n  };\n\n  const panelContent = (\n    <DrawerPanelContent>\n      <DrawerHead hasNoPadding>\n        <span tabIndex={isExpanded ? 0 : -1} ref={drawerRef}>\n          drawer-panel\n        </span>\n        <DrawerActions>\n          <DrawerCloseButton onClick={onCloseClick} />\n        </DrawerActions>\n      </DrawerHead>\n    </DrawerPanelContent>\n  );\n\n  const drawerContent =\n    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat,nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.';\n\n  return (\n    <React.Fragment>\n      <Button aria-expanded={isExpanded} onClick={onClick}>\n        Toggle drawer\n      </Button>\n      <Drawer isExpanded={isExpanded} onExpand={onExpand}>\n        <DrawerContent panelContent={panelContent}>\n          <DrawerContentBody>{drawerContent}</DrawerContentBody>\n        </DrawerContent>\n      </Drawer>\n    </React.Fragment>\n  );\n};\n","title":"Modified panel padding","lang":"ts"}}>
      
    </Example>,
  'Additional section above drawer content': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  Drawer,\n  DrawerPanelContent,\n  DrawerContent,\n  DrawerContentBody,\n  DrawerHead,\n  DrawerActions,\n  DrawerCloseButton,\n  DrawerSection,\n  Button\n} from '@patternfly/react-core';\n\nexport const DrawerAdditionalSectionAboveContent: React.FunctionComponent = () => {\n  const [isExpanded, setIsExpanded] = React.useState(false);\n  const drawerRef = React.useRef<HTMLDivElement>();\n\n  const onExpand = () => {\n    drawerRef.current && drawerRef.current.focus();\n  };\n\n  const onClick = () => {\n    setIsExpanded(!isExpanded);\n  };\n\n  const onCloseClick = () => {\n    setIsExpanded(false);\n  };\n\n  const panelContent = (\n    <DrawerPanelContent>\n      <DrawerHead>\n        <span tabIndex={isExpanded ? 0 : -1} ref={drawerRef}>\n          drawer-panel\n        </span>\n        <DrawerActions>\n          <DrawerCloseButton onClick={onCloseClick} />\n        </DrawerActions>\n      </DrawerHead>\n    </DrawerPanelContent>\n  );\n\n  const drawerContent =\n    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat,nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.';\n\n  return (\n    <React.Fragment>\n      <Button aria-expanded={isExpanded} onClick={onClick}>\n        Toggle drawer\n      </Button>\n      <Drawer isExpanded={isExpanded} onExpand={onExpand}>\n        <DrawerSection>drawer-section</DrawerSection>\n        <DrawerContent panelContent={panelContent}>\n          <DrawerContentBody>{drawerContent}</DrawerContentBody>\n        </DrawerContent>\n      </Drawer>\n    </React.Fragment>\n  );\n};\n","title":"Additional section above drawer content","lang":"ts"}}>
      
    </Example>,
  'Static drawer': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  Drawer,\n  DrawerPanelContent,\n  DrawerContent,\n  DrawerContentBody,\n  DrawerHead,\n  DrawerActions,\n  DrawerCloseButton,\n  Button\n} from '@patternfly/react-core';\n\nexport const DrawerStatic: React.FunctionComponent = () => {\n  const [isExpanded, setIsExpanded] = React.useState(false);\n  const drawerRef = React.useRef<HTMLDivElement>();\n\n  const onExpand = () => {\n    drawerRef.current && drawerRef.current.focus();\n  };\n\n  const onClick = () => {\n    setIsExpanded(!isExpanded);\n  };\n\n  const onCloseClick = () => {\n    setIsExpanded(false);\n  };\n\n  const panelContent = (\n    <DrawerPanelContent>\n      <DrawerHead>\n        <span tabIndex={isExpanded ? 0 : -1} ref={drawerRef}>\n          drawer-panel\n        </span>\n        <DrawerActions>\n          <DrawerCloseButton onClick={onCloseClick} />\n        </DrawerActions>\n      </DrawerHead>\n    </DrawerPanelContent>\n  );\n\n  const drawerContent =\n    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat,nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.';\n\n  return (\n    <React.Fragment>\n      <Button className=\"pf-u-hidden-on-md\" aria-expanded={isExpanded} onClick={onClick}>\n        Toggle drawer\n      </Button>\n      <Drawer isStatic isExpanded={isExpanded} onExpand={onExpand}>\n        <DrawerContent panelContent={panelContent}>\n          <DrawerContentBody>{drawerContent}</DrawerContentBody>\n        </DrawerContent>\n      </Drawer>\n    </React.Fragment>\n  );\n};\n","title":"Static drawer","lang":"ts"}}>
      
      <p {...{"className":"ws-p"}}>
        
        <strong>
          {`Note:`}
        </strong>
        {` For mobile viewports, all drawer variants behave the same way. At the `}
        
        <code {...{"className":"ws-code"}}>
          {`md`}
        </code>
        {` breakpoint, or where `}
        
        <code {...{"className":"ws-code"}}>
          {`.pf-m-static{-on-[lg, xl, 2xl]}`}
        </code>
        {` is applied, the `}
        
        <code {...{"className":"ws-code"}}>
          {`static drawer`}
        </code>
        {` variant’s `}
        
        <code {...{"className":"ws-code"}}>
          {`close button`}
        </code>
        {` is automatically hidden because the drawer panel doesn’t close by design.`}
      </p>
    </Example>,
  'Breakpoint': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  Drawer,\n  DrawerPanelContent,\n  DrawerContent,\n  DrawerContentBody,\n  DrawerHead,\n  DrawerActions,\n  DrawerCloseButton,\n  Button\n} from '@patternfly/react-core';\n\nexport const DrawerBreakpoint: React.FunctionComponent = () => {\n  const [isExpanded, setIsExpanded] = React.useState(false);\n  const drawerRef = React.useRef<HTMLDivElement>();\n\n  const onExpand = () => {\n    drawerRef.current && drawerRef.current.focus();\n  };\n\n  const onClick = () => {\n    setIsExpanded(!isExpanded);\n  };\n\n  const onCloseClick = () => {\n    setIsExpanded(false);\n  };\n\n  const panelContent = (\n    <DrawerPanelContent widths={{ default: 'width_33' }}>\n      <DrawerHead>\n        <span tabIndex={isExpanded ? 0 : -1} ref={drawerRef}>\n          drawer-panel\n        </span>\n        <DrawerActions>\n          <DrawerCloseButton onClick={onCloseClick} />\n        </DrawerActions>\n      </DrawerHead>\n    </DrawerPanelContent>\n  );\n\n  const drawerContent =\n    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat,nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.';\n\n  return (\n    <React.Fragment>\n      <Button aria-expanded={isExpanded} onClick={onClick}>\n        Toggle drawer\n      </Button>\n      <Drawer isExpanded={isExpanded} onExpand={onExpand}>\n        <DrawerContent panelContent={panelContent}>\n          <DrawerContentBody>{drawerContent}</DrawerContentBody>\n        </DrawerContent>\n      </Drawer>\n    </React.Fragment>\n  );\n};\n","title":"Breakpoint","lang":"ts"}}>
      
    </Example>,
  'Resizable on right': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  Drawer,\n  DrawerPanelContent,\n  DrawerContent,\n  DrawerContentBody,\n  DrawerHead,\n  DrawerActions,\n  DrawerCloseButton,\n  Button\n} from '@patternfly/react-core';\n\nexport const DrawerResizableOnRight: React.FunctionComponent = () => {\n  const [isExpanded, setIsExpanded] = React.useState(false);\n  const drawerRef = React.useRef<HTMLDivElement>();\n\n  const onExpand = () => {\n    drawerRef.current && drawerRef.current.focus();\n  };\n\n  const onClick = () => {\n    setIsExpanded(!isExpanded);\n  };\n\n  const onCloseClick = () => {\n    setIsExpanded(false);\n  };\n\n  const onResize = (newWidth: number, id: string) => {\n    // eslint-disable-next-line no-console\n    console.log(`${id} has new width of: ${newWidth}`);\n  };\n\n  const panelContent = (\n    <DrawerPanelContent isResizable onResize={onResize} id=\"right-resize-panel\" defaultSize={'500px'} minSize={'150px'}>\n      <DrawerHead>\n        <span tabIndex={isExpanded ? 0 : -1} ref={drawerRef}>\n          drawer-panel\n        </span>\n        <DrawerActions>\n          <DrawerCloseButton onClick={onCloseClick} />\n        </DrawerActions>\n      </DrawerHead>\n    </DrawerPanelContent>\n  );\n\n  const drawerContent =\n    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat,nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.';\n\n  return (\n    <React.Fragment>\n      <Button aria-expanded={isExpanded} onClick={onClick}>\n        Toggle drawer\n      </Button>\n      <Drawer isExpanded={isExpanded} onExpand={onExpand} position=\"right\">\n        <DrawerContent panelContent={panelContent}>\n          <DrawerContentBody>{drawerContent}</DrawerContentBody>\n        </DrawerContent>\n      </Drawer>\n    </React.Fragment>\n  );\n};\n","title":"Resizable on right","lang":"ts"}}>
      
    </Example>,
  'Resizable on left': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  Drawer,\n  DrawerPanelContent,\n  DrawerContent,\n  DrawerContentBody,\n  DrawerHead,\n  DrawerActions,\n  DrawerCloseButton,\n  Button\n} from '@patternfly/react-core';\n\nexport const DrawerResizableOnLeft: React.FunctionComponent = () => {\n  const [isExpanded, setIsExpanded] = React.useState(false);\n  const drawerRef = React.useRef<HTMLDivElement>();\n\n  const onExpand = () => {\n    drawerRef.current && drawerRef.current.focus();\n  };\n\n  const onClick = () => {\n    setIsExpanded(!isExpanded);\n  };\n\n  const onCloseClick = () => {\n    setIsExpanded(false);\n  };\n\n  const panelContent = (\n    <DrawerPanelContent isResizable defaultSize={'500px'} minSize={'200px'}>\n      <DrawerHead>\n        <span tabIndex={isExpanded ? 0 : -1} ref={drawerRef}>\n          drawer-panel\n        </span>\n        <DrawerActions>\n          <DrawerCloseButton onClick={onCloseClick} />\n        </DrawerActions>\n      </DrawerHead>\n    </DrawerPanelContent>\n  );\n\n  const drawerContent =\n    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat,nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.';\n\n  return (\n    <React.Fragment>\n      <Button aria-expanded={isExpanded} onClick={onClick}>\n        Toggle drawer\n      </Button>\n      <Drawer isExpanded={isExpanded} onExpand={onExpand} position=\"left\">\n        <DrawerContent panelContent={panelContent}>\n          <DrawerContentBody>{drawerContent}</DrawerContentBody>\n        </DrawerContent>\n      </Drawer>\n    </React.Fragment>\n  );\n};\n","title":"Resizable on left","lang":"ts"}}>
      
    </Example>,
  'Resizable on bottom': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  Drawer,\n  DrawerPanelContent,\n  DrawerHead,\n  DrawerActions,\n  DrawerCloseButton,\n  Button,\n  DrawerContent,\n  DrawerContentBody\n} from '@patternfly/react-core';\n\nexport const DrawerResizableOnBottom: React.FunctionComponent = () => {\n  const [isExpanded, setIsExpanded] = React.useState(false);\n  const drawerRef = React.useRef<HTMLDivElement>();\n\n  const onExpand = () => {\n    drawerRef.current && drawerRef.current.focus();\n  };\n\n  const onClick = () => {\n    setIsExpanded(!isExpanded);\n  };\n\n  const onCloseClick = () => {\n    setIsExpanded(false);\n  };\n  const panelContent = (\n    <DrawerPanelContent isResizable defaultSize={'200px'} minSize={'100px'}>\n      <DrawerHead>\n        <span tabIndex={isExpanded ? 0 : -1} ref={drawerRef}>\n          drawer-panel\n        </span>\n        <DrawerActions>\n          <DrawerCloseButton onClick={onCloseClick} />\n        </DrawerActions>\n      </DrawerHead>\n    </DrawerPanelContent>\n  );\n\n  const drawerContent =\n    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat,nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.';\n\n  return (\n    <React.Fragment>\n      <Button aria-expanded={isExpanded} onClick={onClick}>\n        Toggle drawer\n      </Button>\n      <div style={{ height: '400px' }}>\n        <Drawer isExpanded={isExpanded} onExpand={onExpand} position=\"bottom\">\n          <DrawerContent panelContent={panelContent}>\n            <DrawerContentBody>{drawerContent}</DrawerContentBody>\n          </DrawerContent>\n        </Drawer>\n      </div>\n    </React.Fragment>\n  );\n};\n","title":"Resizable on bottom","lang":"ts"}}>
      
    </Example>,
  'Resizable on inline': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  Drawer,\n  DrawerPanelContent,\n  DrawerHead,\n  DrawerActions,\n  DrawerCloseButton,\n  Button,\n  DrawerContent,\n  DrawerContentBody\n} from '@patternfly/react-core';\n\nexport const DrawerResizableOnInline: React.FunctionComponent = () => {\n  const [isExpanded, setIsExpanded] = React.useState(false);\n  const drawerRef = React.useRef<HTMLDivElement>();\n\n  const onExpand = () => {\n    drawerRef.current && drawerRef.current.focus();\n  };\n\n  const onClick = () => {\n    setIsExpanded(!isExpanded);\n  };\n\n  const onCloseClick = () => {\n    setIsExpanded(false);\n  };\n  const panelContent = (\n    <DrawerPanelContent isResizable defaultSize={'500px'} minSize={'150px'}>\n      <DrawerHead>\n        <span tabIndex={isExpanded ? 0 : -1} ref={drawerRef}>\n          drawer-panel\n        </span>\n        <DrawerActions>\n          <DrawerCloseButton onClick={onCloseClick} />\n        </DrawerActions>\n      </DrawerHead>\n    </DrawerPanelContent>\n  );\n\n  const drawerContent =\n    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat,nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.';\n\n  return (\n    <React.Fragment>\n      <Button aria-expanded={isExpanded} onClick={onClick}>\n        Toggle drawer\n      </Button>\n      <Drawer isExpanded={isExpanded} onExpand={onExpand} isInline>\n        <DrawerContent panelContent={panelContent}>\n          <DrawerContentBody>{drawerContent}</DrawerContentBody>\n        </DrawerContent>\n      </Drawer>\n    </React.Fragment>\n  );\n};\n","title":"Resizable on inline","lang":"ts"}}>
      
    </Example>,
  'Panel with light-200 background': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  Checkbox,\n  Drawer,\n  DrawerPanelContent,\n  DrawerContent,\n  DrawerContentBody,\n  DrawerHead,\n  DrawerActions,\n  DrawerCloseButton,\n  DrawerSection,\n  Button,\n  DrawerColorVariant\n} from '@patternfly/react-core';\n\nexport const DrawerLightGray: React.FunctionComponent = () => {\n  const [isExpanded, setIsExpanded] = React.useState(false);\n  const [panelGray, setPanelGray] = React.useState(true);\n  const [contentGray, setContentGray] = React.useState(false);\n  const [sectionGray, setSectionGray] = React.useState(false);\n\n  const drawerRef = React.useRef<HTMLDivElement>();\n\n  const onExpand = () => {\n    drawerRef.current && drawerRef.current.focus();\n  };\n\n  const onClick = () => {\n    setIsExpanded(!isExpanded);\n  };\n\n  const onCloseClick = () => {\n    setIsExpanded(false);\n  };\n\n  const togglePanelGray = (checked: boolean) => {\n    setPanelGray(checked);\n  };\n\n  const toggleSectionGray = (checked: boolean) => {\n    setSectionGray(checked);\n  };\n\n  const toggleContentGray = (checked: boolean) => {\n    setContentGray(checked);\n  };\n\n  const panelContent = (\n    <DrawerPanelContent colorVariant={panelGray ? DrawerColorVariant.light200 : DrawerColorVariant.default}>\n      <DrawerHead>\n        <span tabIndex={isExpanded ? 0 : -1} ref={drawerRef}>\n          drawer-panel\n        </span>\n        <DrawerActions>\n          <DrawerCloseButton onClick={onCloseClick} />\n        </DrawerActions>\n      </DrawerHead>\n    </DrawerPanelContent>\n  );\n\n  const drawerContent =\n    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat,nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.';\n\n  return (\n    <React.Fragment>\n      <Checkbox\n        label=\"Gray panel\"\n        isChecked={panelGray}\n        onChange={togglePanelGray}\n        aria-label=\"Gray panel checkbox\"\n        id=\"toggle-gray-panel\"\n        name=\"toggle-gray-panel\"\n      />\n      <Checkbox\n        label=\"Gray content\"\n        isChecked={contentGray}\n        onChange={toggleContentGray}\n        aria-label=\"Gray content checkbox\"\n        id=\"toggle-gray-content\"\n        name=\"toggle-gray-content\"\n      />\n      <Checkbox\n        label=\"Gray section\"\n        isChecked={sectionGray}\n        onChange={toggleSectionGray}\n        aria-label=\"Gray section checkbox\"\n        id=\"toggle-gray-section\"\n        name=\"toggle-gray-section\"\n      />\n      <br />\n      <Button aria-expanded={isExpanded} onClick={onClick}>\n        Toggle drawer\n      </Button>\n      <Drawer isExpanded={isExpanded} onExpand={onExpand}>\n        <DrawerSection colorVariant={sectionGray ? DrawerColorVariant.light200 : DrawerColorVariant.default}>\n          drawer-section\n        </DrawerSection>\n        <DrawerContent\n          colorVariant={contentGray ? DrawerColorVariant.light200 : DrawerColorVariant.default}\n          panelContent={panelContent}\n        >\n          <DrawerContentBody>{drawerContent}</DrawerContentBody>\n        </DrawerContent>\n      </Drawer>\n    </React.Fragment>\n  );\n};\n","title":"Panel with light-200 background","lang":"ts"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Basic"])}
    {React.createElement(pageData.examples["Panel on right"])}
    {React.createElement(pageData.examples["Panel on left"])}
    {React.createElement(pageData.examples["Panel on bottom"])}
    {React.createElement(pageData.examples["Basic inline"])}
    {React.createElement(pageData.examples["Inline panel on right"])}
    {React.createElement(pageData.examples["Inline panel on left"])}
    {React.createElement(pageData.examples["Stacked content body elements"])}
    {React.createElement(pageData.examples["Modified content padding"])}
    {React.createElement(pageData.examples["Modified panel padding"])}
    {React.createElement(pageData.examples["Additional section above drawer content"])}
    {React.createElement(pageData.examples["Static drawer"])}
    {React.createElement(pageData.examples["Breakpoint"])}
    {React.createElement(pageData.examples["Resizable on right"])}
    {React.createElement(pageData.examples["Resizable on left"])}
    {React.createElement(pageData.examples["Resizable on bottom"])}
    {React.createElement(pageData.examples["Resizable on inline"])}
    {React.createElement(pageData.examples["Panel with light-200 background"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsDrawerReactDocs';
Component.pageData = pageData;

export default Component;
