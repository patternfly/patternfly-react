import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import pfLogo from '../../../../../react-core/src/components/Card/examples/./pfLogo.svg';
import pfLogoSmall from '../../../../../react-core/src/components/Card/examples/./pf-logo-small.svg';
const pageData = {
  "id": "Card",
  "section": "components",
  "source": "react",
  "slug": "/components/card/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/components/Card/examples/Card.md",
  "propComponents": [
    {
      "name": "Card",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside the Card",
          "defaultValue": "null"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the Card",
          "defaultValue": "''"
        },
        {
          "name": "component",
          "type": "unknown",
          "description": "Sets the base component to render. defaults to article",
          "defaultValue": "'article'"
        },
        {
          "name": "hasSelectableInput",
          "type": "boolean",
          "description": "Flag indicating that the card should render a hidden input to make it selectable",
          "defaultValue": "false"
        },
        {
          "name": "id",
          "type": "string",
          "description": "ID of the Card. Also passed back in the CardHeader onExpand callback.",
          "defaultValue": "''"
        },
        {
          "name": "isCompact",
          "type": "boolean",
          "description": "Modifies the card to include compact styling. Should not be used with isLarge.",
          "defaultValue": "false"
        },
        {
          "name": "isDisabledRaised",
          "type": "boolean",
          "description": "Modifies a raised selectable card to have disabled styling",
          "defaultValue": "false",
          "beta": true
        },
        {
          "name": "isExpanded",
          "type": "boolean",
          "description": "Flag indicating if a card is expanded. Modifies the card to be expandable.",
          "defaultValue": "false"
        },
        {
          "name": "isFlat",
          "type": "boolean",
          "description": "Modifies the card to include flat styling",
          "defaultValue": "false"
        },
        {
          "name": "isFullHeight",
          "type": "boolean",
          "description": "Cause component to consume the available height of its container",
          "defaultValue": "false"
        },
        {
          "name": "isHoverable",
          "type": "boolean",
          "description": "to make a card hoverable, use isSelectable or isSelectableRaised.",
          "defaultValue": "false",
          "deprecated": true
        },
        {
          "name": "isLarge",
          "type": "boolean",
          "description": "Modifies the card to be large. Should not be used with isCompact.",
          "defaultValue": "false"
        },
        {
          "name": "isPlain",
          "type": "boolean",
          "description": "Modifies the card to include plain styling; this removes border and background",
          "defaultValue": "false"
        },
        {
          "name": "isRounded",
          "type": "boolean",
          "description": "Modifies the card to include rounded styling",
          "defaultValue": "false"
        },
        {
          "name": "isSelectable",
          "type": "boolean",
          "description": "Modifies the card to include selectable styling",
          "defaultValue": "false"
        },
        {
          "name": "isSelectableRaised",
          "type": "boolean",
          "description": "Specifies the card is selectable, and applies the new raised styling on hover and select",
          "defaultValue": "false",
          "beta": true
        },
        {
          "name": "isSelected",
          "type": "boolean",
          "description": "Modifies the card to include selected styling",
          "defaultValue": "false"
        },
        {
          "name": "onSelectableInputChange",
          "type": "(labelledBy: string, event: React.FormEvent<HTMLInputElement>) => void",
          "description": "Callback that executes when the selectable input is changed",
          "defaultValue": "() => {}"
        },
        {
          "name": "ouiaSafe",
          "type": "No type info",
          "defaultValue": "true"
        },
        {
          "name": "selectableInputAriaLabel",
          "type": "string",
          "description": "Aria label to apply to the selectable input if one is rendered"
        }
      ]
    },
    {
      "name": "CardActions",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside the Card Action",
          "defaultValue": "null"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the Action",
          "defaultValue": "''"
        },
        {
          "name": "hasNoOffset",
          "type": "boolean",
          "description": "Flag indicating that the actions have no offset",
          "defaultValue": "false"
        }
      ]
    },
    {
      "name": "CardHeader",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside the CardHeader",
          "defaultValue": "null"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the CardHeader",
          "defaultValue": "''"
        },
        {
          "name": "id",
          "type": "string",
          "description": "ID of the card header."
        },
        {
          "name": "isToggleRightAligned",
          "type": "boolean",
          "description": "Whether to right-align expandable toggle button"
        },
        {
          "name": "onExpand",
          "type": "(event: React.MouseEvent, id: string) => void",
          "description": "Callback expandable card"
        },
        {
          "name": "toggleButtonProps",
          "type": "any",
          "description": "Additional props for expandable toggle button"
        }
      ]
    },
    {
      "name": "CardHeaderMain",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside the Card Head Main",
          "defaultValue": "null"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the Card Head Main",
          "defaultValue": "''"
        }
      ]
    },
    {
      "name": "CardTitle",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside the CardTitle",
          "defaultValue": "null"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the CardTitle",
          "defaultValue": "''"
        },
        {
          "name": "component",
          "type": "unknown",
          "description": "Sets the base component to render. defaults to div",
          "defaultValue": "'div'"
        }
      ]
    },
    {
      "name": "CardBody",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside the Card Body",
          "defaultValue": "null"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the Card Body",
          "defaultValue": "''"
        },
        {
          "name": "component",
          "type": "unknown",
          "description": "Sets the base component to render. defaults to div",
          "defaultValue": "'div'"
        },
        {
          "name": "isFilled",
          "type": "boolean",
          "description": "Enables the body Content to fill the height of the card",
          "defaultValue": "true"
        }
      ]
    },
    {
      "name": "CardFooter",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside the Card Footer",
          "defaultValue": "null"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the Footer",
          "defaultValue": "''"
        },
        {
          "name": "component",
          "type": "unknown",
          "description": "Sets the base component to render. defaults to div",
          "defaultValue": "'div'"
        }
      ]
    },
    {
      "name": "CardExpandableContent",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside the Card Body",
          "defaultValue": "null"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the Card Body",
          "defaultValue": "''"
        }
      ]
    }
  ],
  "cssPrefix": [
    "pf-c-card"
  ],
  "examples": [
    "Basic",
    "With modifiers",
    "With image and actions",
    "Header in card head",
    "Only actions in card head (no header/footer)",
    "Only image in card head",
    "With no footer",
    "With no header",
    "With only a body section",
    "With multiple body sections",
    "With only a body section that fills",
    "Selectable",
    "Selectable accessibility highlight",
    "With heading element",
    "Expandable",
    "Expandable with icon",
    "Legacy selectable"
  ]
};
pageData.liveContext = {
  pfLogo,
  pfLogoSmall
};
pageData.examples = {
  'Basic': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Card, CardTitle, CardBody, CardFooter } from '@patternfly/react-core';\n\nexport const CardBasic: React.FunctionComponent = () => (\n  <Card>\n    <CardTitle>Header</CardTitle>\n    <CardBody>Body</CardBody>\n    <CardFooter>Footer</CardFooter>\n  </Card>\n);\n","title":"Basic","lang":"ts"}}>
      
    </Example>,
  'With modifiers': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Card, CardTitle, CardBody, CardFooter, Checkbox } from '@patternfly/react-core';\n\nexport const CardWithModifiers: React.FunctionComponent = () => {\n  const mods = ['isCompact', 'isFlat', 'isRounded', 'isLarge', 'isFullHeight', 'isPlain'];\n  const [modifiers, setModifiers] = React.useState({});\n\n  return (\n    <React.Fragment>\n      <div style={{ marginBottom: '12px' }}>\n        {mods.map(mod => (\n          <Checkbox\n            id={mod}\n            key={mod}\n            label={mod}\n            isChecked={modifiers[mod]}\n            onChange={checked => {\n              modifiers[mod] = checked;\n              setModifiers({ ...modifiers });\n            }}\n          />\n        ))}\n      </div>\n      <div style={{ height: '15rem' }}>\n        <Card {...modifiers}>\n          <CardTitle>Header</CardTitle>\n          <CardBody>Body</CardBody>\n          <CardFooter>Footer</CardFooter>\n        </Card>\n      </div>\n    </React.Fragment>\n  );\n};\n","title":"With modifiers","lang":"ts"}}>
      
    </Example>,
  'With image and actions': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  Brand,\n  Card,\n  CardHeader,\n  CardHeaderMain,\n  CardActions,\n  CardTitle,\n  CardBody,\n  CardFooter,\n  Checkbox,\n  Dropdown,\n  DropdownItem,\n  DropdownSeparator,\n  KebabToggle\n} from '@patternfly/react-core';\nimport pfLogo from './pfLogo.svg';\n\nexport const CardWithImageAndActions: React.FunctionComponent = () => {\n  const [isOpen, setIsOpen] = React.useState<boolean>(false);\n  const [isChecked, setIsChecked] = React.useState<boolean>(false);\n  const [hasNoOffset, setHasNoOffset] = React.useState<boolean>(false);\n\n  const onSelect = () => {\n    setIsOpen(!isOpen);\n  };\n  const onClick = (checked: boolean) => {\n    setIsChecked(checked);\n  };\n  const toggleOffset = (checked: boolean) => {\n    setHasNoOffset(checked);\n  };\n\n  const dropdownItems = [\n    <DropdownItem key=\"link\">Link</DropdownItem>,\n    <DropdownItem key=\"action\" component=\"button\">\n      Action\n    </DropdownItem>,\n    <DropdownItem key=\"disabled link\" isDisabled>\n      Disabled Link\n    </DropdownItem>,\n    <DropdownItem key=\"disabled action\" isDisabled component=\"button\">\n      Disabled Action\n    </DropdownItem>,\n    <DropdownSeparator key=\"separator\" />,\n    <DropdownItem key=\"separated link\">Separated Link</DropdownItem>,\n    <DropdownItem key=\"separated action\" component=\"button\">\n      Separated Action\n    </DropdownItem>\n  ];\n\n  return (\n    <>\n      <Card>\n        <CardHeader>\n          <CardHeaderMain>\n            <Brand src={pfLogo} alt=\"PatternFly logo\" style={{ height: '50px' }} />\n          </CardHeaderMain>\n          <CardActions hasNoOffset={hasNoOffset}>\n            <Dropdown\n              onSelect={onSelect}\n              toggle={<KebabToggle onToggle={setIsOpen} />}\n              isOpen={isOpen}\n              isPlain\n              dropdownItems={dropdownItems}\n              position={'right'}\n            />\n            <Checkbox\n              isChecked={isChecked}\n              onChange={onClick}\n              aria-label=\"card checkbox example\"\n              id=\"check-1\"\n              name=\"check1\"\n            />\n          </CardActions>\n        </CardHeader>\n        <CardTitle>Header</CardTitle>\n        <CardBody>Body</CardBody>\n        <CardFooter>Footer</CardFooter>\n      </Card>\n      <div style={{ marginTop: '20px' }}>\n        <Checkbox\n          label=\"actions hasNoOffset\"\n          isChecked={hasNoOffset}\n          onChange={toggleOffset}\n          aria-label=\"remove actions offset\"\n          id=\"toggle-actions-offset\"\n          name=\"toggle-actions-offset\"\n        />\n      </div>\n    </>\n  );\n};\n","title":"With image and actions","lang":"ts"}}>
      
    </Example>,
  'Header in card head': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  Card,\n  CardHeader,\n  CardActions,\n  CardTitle,\n  CardBody,\n  CardFooter,\n  Checkbox,\n  Dropdown,\n  DropdownItem,\n  DropdownSeparator,\n  KebabToggle\n} from '@patternfly/react-core';\n\nexport const CardTitleInHeader: React.FunctionComponent = () => {\n  const [isOpen, setIsOpen] = React.useState<boolean>(false);\n  const [isChecked, setIsChecked] = React.useState<boolean>(false);\n\n  const onSelect = () => {\n    setIsOpen(!isOpen);\n  };\n  const onClick = (checked: boolean) => {\n    setIsChecked(checked);\n  };\n\n  const dropdownItems = [\n    <DropdownItem key=\"link\">Link</DropdownItem>,\n    <DropdownItem key=\"action\" component=\"button\">\n      Action\n    </DropdownItem>,\n    <DropdownItem key=\"disabled link\" isDisabled>\n      Disabled Link\n    </DropdownItem>,\n    <DropdownItem key=\"disabled action\" isDisabled component=\"button\">\n      Disabled Action\n    </DropdownItem>,\n    <DropdownSeparator key=\"separator\" />,\n    <DropdownItem key=\"separated link\">Separated Link</DropdownItem>,\n    <DropdownItem key=\"separated action\" component=\"button\">\n      Separated Action\n    </DropdownItem>\n  ];\n\n  return (\n    <Card>\n      <CardHeader>\n        <CardActions>\n          <Dropdown\n            onSelect={onSelect}\n            toggle={<KebabToggle onToggle={setIsOpen} />}\n            isOpen={isOpen}\n            isPlain\n            dropdownItems={dropdownItems}\n            position={'right'}\n          />\n          <Checkbox\n            isChecked={isChecked}\n            onChange={onClick}\n            aria-label=\"card checkbox example\"\n            id=\"check-2\"\n            name=\"check2\"\n          />\n        </CardActions>\n        <CardTitle>\n          This is a really really really really really really really really really really long header\n        </CardTitle>\n      </CardHeader>\n      <CardBody>Body</CardBody>\n      <CardFooter>Footer</CardFooter>\n    </Card>\n  );\n};\n","title":"Header in card head","lang":"ts"}}>
      
    </Example>,
  'Only actions in card head (no header/footer)': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  Checkbox,\n  Dropdown,\n  DropdownItem,\n  DropdownSeparator,\n  KebabToggle,\n  Card,\n  CardHeader,\n  CardActions,\n  CardBody\n} from '@patternfly/react-core';\n\nexport const CardOnlyActionsInCardHead: React.FunctionComponent = () => {\n  const [isOpen, setIsOpen] = React.useState<boolean>(false);\n  const [isChecked, setIsChecked] = React.useState<boolean>(false);\n\n  const onSelect = () => {\n    setIsOpen(!isOpen);\n  };\n  const onClick = (checked: boolean) => {\n    setIsChecked(checked);\n  };\n\n  const dropdownItems = [\n    <DropdownItem key=\"link\">Link</DropdownItem>,\n    <DropdownItem key=\"action\" component=\"button\">\n      Action\n    </DropdownItem>,\n    <DropdownItem key=\"disabled link\" isDisabled>\n      Disabled Link\n    </DropdownItem>,\n    <DropdownItem key=\"disabled action\" isDisabled component=\"button\">\n      Disabled Action\n    </DropdownItem>,\n    <DropdownSeparator key=\"separator\" />,\n    <DropdownItem key=\"separated link\">Separated Link</DropdownItem>,\n    <DropdownItem key=\"separated action\" component=\"button\">\n      Separated Action\n    </DropdownItem>\n  ];\n\n  return (\n    <Card>\n      <CardHeader>\n        <CardActions>\n          <Dropdown\n            onSelect={onSelect}\n            toggle={<KebabToggle onToggle={setIsOpen} />}\n            isOpen={isOpen}\n            isPlain\n            dropdownItems={dropdownItems}\n            position={'right'}\n          />\n          <Checkbox\n            isChecked={isChecked}\n            onChange={onClick}\n            aria-label=\"card checkbox example\"\n            id=\"check-3\"\n            name=\"check3\"\n          />\n        </CardActions>\n      </CardHeader>\n      <CardBody>This is the card body. There are only actions in the card head.</CardBody>\n    </Card>\n  );\n};\n","title":"Only actions in card head (no header/footer)","lang":"ts"}}>
      
    </Example>,
  'Only image in card head': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Brand, Card, CardBody, CardFooter, CardHeader, CardHeaderMain, CardTitle } from '@patternfly/react-core';\nimport pfLogo from './pfLogo.svg';\n\nexport const CardOnlyImageInCardHead: React.FunctionComponent = () => (\n  <Card>\n    <CardHeader>\n      <CardHeaderMain>\n        <Brand src={pfLogo} alt=\"PatternFly logo\" style={{ height: '50px' }} />\n      </CardHeaderMain>\n    </CardHeader>\n    <CardTitle>Header</CardTitle>\n    <CardBody>Body</CardBody>\n    <CardFooter>Footer</CardFooter>\n  </Card>\n);\n","title":"Only image in card head","lang":"ts"}}>
      
    </Example>,
  'With no footer': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Card, CardTitle, CardBody } from '@patternfly/react-core';\n\nexport const CardWithNoFooter: React.FunctionComponent = () => (\n  <Card>\n    <CardTitle>Header</CardTitle>\n    <CardBody>This card has no footer</CardBody>\n  </Card>\n);\n","title":"With no footer","lang":"ts"}}>
      
    </Example>,
  'With no header': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Card, CardBody, CardFooter } from '@patternfly/react-core';\n\nexport const CardWithNoHeader: React.FunctionComponent = () => (\n  <Card>\n    <CardBody>This card has no header</CardBody>\n    <CardFooter>Footer</CardFooter>\n  </Card>\n);\n","title":"With no header","lang":"ts"}}>
      
    </Example>,
  'With only a body section': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Card, CardBody } from '@patternfly/react-core';\n\nexport const CardWithOnlyBodySection: React.FunctionComponent = () => (\n  <Card>\n    <CardBody>Body</CardBody>\n  </Card>\n);\n","title":"With only a body section","lang":"ts"}}>
      
    </Example>,
  'With multiple body sections': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Card, CardTitle, CardBody, CardFooter } from '@patternfly/react-core';\n\nexport const CardWithMultipleBodySections: React.FunctionComponent = () => (\n  <Card>\n    <CardTitle>Header</CardTitle>\n    <CardBody>Body</CardBody>\n    <CardBody>Body</CardBody>\n    <CardBody>Body</CardBody>\n    <CardFooter>Footer</CardFooter>\n  </Card>\n);\n","title":"With multiple body sections","lang":"ts"}}>
      
    </Example>,
  'With only a body section that fills': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Card, CardTitle, CardBody, CardFooter } from '@patternfly/react-core';\n\nexport const CardWithBodySectionFills: React.FunctionComponent = () => (\n  <Card style={{ minHeight: '30em' }}>\n    <CardTitle>Header</CardTitle>\n    <CardBody isFilled={false}>Body pf-m-no-fill</CardBody>\n    <CardBody isFilled={false}>Body pf-m-no-fill</CardBody>\n    <CardBody>Body</CardBody>\n    <CardFooter>Footer</CardFooter>\n  </Card>\n);\n","title":"With only a body section that fills","lang":"ts"}}>
      
    </Example>,
  'Selectable': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  Card,\n  CardHeader,\n  CardActions,\n  CardTitle,\n  CardBody,\n  Dropdown,\n  DropdownItem,\n  DropdownSeparator,\n  KebabToggle\n} from '@patternfly/react-core';\n\nexport const CardSelectable: React.FunctionComponent = () => {\n  const [selected, setSelected] = React.useState<string>('');\n  const [isKebabOpen, setIsKebabOpen] = React.useState<boolean>(false);\n\n  const onKeyDown = (event: React.KeyboardEvent) => {\n    if (event.target !== event.currentTarget) {\n      return;\n    }\n    if ([' ', 'Enter'].includes(event.key)) {\n      event.preventDefault();\n      const newSelected = event.currentTarget.id === selected ? null : event.currentTarget.id;\n      setSelected(newSelected);\n    }\n  };\n\n  const onClick = (event: React.MouseEvent) => {\n    const newSelected = event.currentTarget.id === selected ? null : event.currentTarget.id;\n    setSelected(newSelected);\n  };\n\n  const onChange = (labelledById: string, _event: React.FormEvent<HTMLInputElement>) => {\n    const newSelected = labelledById === selected ? null : labelledById;\n    setSelected(newSelected);\n  };\n\n  const onToggle = (\n    isOpen: boolean,\n    event: MouseEvent | TouchEvent | KeyboardEvent | React.KeyboardEvent<any> | React.MouseEvent<HTMLButtonElement>\n  ) => {\n    event.stopPropagation();\n    setIsKebabOpen(isOpen);\n  };\n\n  const onSelect = (event: React.SyntheticEvent<HTMLDivElement>) => {\n    event.stopPropagation();\n    setIsKebabOpen(false);\n  };\n\n  const dropdownItems = [\n    <DropdownItem key=\"link\">Link</DropdownItem>,\n    <DropdownItem key=\"action\" component=\"button\">\n      Action\n    </DropdownItem>,\n    <DropdownItem key=\"disabled link\" isDisabled>\n      Disabled Link\n    </DropdownItem>,\n    <DropdownItem key=\"disabled action\" isDisabled component=\"button\">\n      Disabled Action\n    </DropdownItem>,\n    <DropdownSeparator key=\"separator\" />,\n    <DropdownItem key=\"separated link\">Separated Link</DropdownItem>,\n    <DropdownItem key=\"separated action\" component=\"button\">\n      Separated Action\n    </DropdownItem>\n  ];\n\n  return (\n    <React.Fragment>\n      <Card\n        id=\"selectable-first-card\"\n        onKeyDown={onKeyDown}\n        onClick={onClick}\n        hasSelectableInput\n        onSelectableInputChange={onChange}\n        isSelectableRaised\n        isSelected={selected === 'selectable-first-card'}\n      >\n        <CardHeader>\n          <CardActions>\n            <Dropdown\n              onSelect={onSelect}\n              toggle={<KebabToggle onToggle={onToggle} />}\n              isOpen={isKebabOpen}\n              isPlain\n              dropdownItems={dropdownItems}\n              position={'right'}\n            />\n          </CardActions>\n        </CardHeader>\n        <CardTitle>First card</CardTitle>\n        <CardBody>This is a selectable card. Click me to select me. Click again to deselect me.</CardBody>\n      </Card>\n      <br />\n      <Card\n        id=\"selectable-second-card\"\n        onKeyDown={onKeyDown}\n        onClick={onClick}\n        hasSelectableInput\n        onSelectableInputChange={onChange}\n        isSelectableRaised\n        isSelected={selected === 'selectable-second-card'}\n      >\n        <CardTitle>Second card</CardTitle>\n        <CardBody>This is a selectable card. Click me to select me. Click again to deselect me.</CardBody>\n      </Card>\n      <br />\n      <Card id=\"selectable-third-card\" isSelectableRaised isDisabledRaised hasSelectableInput>\n        <CardTitle>Third card</CardTitle>\n        <CardBody>This is a raised but disabled card.</CardBody>\n      </Card>\n    </React.Fragment>\n  );\n};\n","title":"Selectable","lang":"ts"}}>
      
    </Example>,
  'Selectable accessibility highlight': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Card, CardTitle, CardBody } from '@patternfly/react-core';\n\nexport const CardSelectableA11yHighlight: React.FunctionComponent = () => {\n  const [selected, setSelected] = React.useState<string>('');\n\n  const onKeyDown = (event: React.KeyboardEvent) => {\n    if (event.target !== event.currentTarget) {\n      return;\n    }\n    if ([' ', 'Enter'].includes(event.key)) {\n      event.preventDefault();\n      const newSelected = event.currentTarget.id === selected ? null : event.currentTarget.id;\n      setSelected(newSelected);\n    }\n  };\n\n  const onClick = (event: React.MouseEvent) => {\n    const newSelected = event.currentTarget.id === selected ? null : event.currentTarget.id;\n    setSelected(newSelected);\n  };\n\n  const onChange = (labelledById: string, _event: React.FormEvent<HTMLInputElement>) => {\n    const newSelected = labelledById === selected ? null : labelledById;\n    setSelected(newSelected);\n  };\n\n  return (\n    <React.Fragment>\n      <Card\n        id=\"selectable-first-card\"\n        onKeyDown={onKeyDown}\n        onClick={onClick}\n        hasSelectableInput\n        onSelectableInputChange={onChange}\n        isSelectableRaised\n        isSelected={selected === 'selectable-first-card'}\n      >\n        <CardTitle>Selectable card with proper accessibility considerations</CardTitle>\n        <CardBody>\n          When using a screen reader a checkbox will become navigable that indicates this card is selectable and\n          communicate if it is currently selected.\n        </CardBody>\n      </Card>\n      <br />\n      <Card\n        id=\"selectable-second-card\"\n        onKeyDown={onKeyDown}\n        onClick={onClick}\n        isSelectableRaised\n        isSelected={selected === 'selectable-second-card'}\n      >\n        <CardTitle>Selectable card without proper accessibility considerations</CardTitle>\n        <CardBody>\n          When using a screen reader there are no indications that this card is selectable or if it is currently\n          selected.\n        </CardBody>\n      </Card>\n    </React.Fragment>\n  );\n};\n","title":"Selectable accessibility highlight","lang":"ts"}}>
      
      <p {...{"className":"ws-p"}}>
        {`This example demonstrates how the `}
        
        <code {...{"className":"ws-code"}}>
          {`hasSelectableInput`}
        </code>
        {` and `}
        
        <code {...{"className":"ws-code"}}>
          {`onSelectableInputChange`}
        </code>
        {` props improve accessibility for selectable cards.`}
      </p>
      
      <p {...{"className":"ws-p"}}>
        {`The first card sets `}
        
        <code {...{"className":"ws-code"}}>
          {`hasSelectableInput`}
        </code>
        {` to true, which renders a checkbox input that is only visible to, and navigable by, screen readers. This input communicates to assistive technology users that a card is selectable, and if so, it communicates the current selection state as well.`}
      </p>
      
      <p {...{"className":"ws-p"}}>
        {`By default this input will have an aria-label that corresponds to the title given to the card if using the card title component. If you don't use the card title component in your selectable card, you must pass a custom aria-label for this input using the `}
        
        <code {...{"className":"ws-code"}}>
          {`selectableInputAriaLabel`}
        </code>
        {` prop.`}
      </p>
      
      <p {...{"className":"ws-p"}}>
        {`The first card also (by passing an onchange callback to `}
        
        <code {...{"className":"ws-code"}}>
          {`onSelectableInputChange`}
        </code>
        {`) enables the selection/deselection of the associated card by checking/unchecking the checkbox input.`}
      </p>
      
      <p {...{"className":"ws-p"}}>
        {`The second card does not set `}
        
        <code {...{"className":"ws-code"}}>
          {`hasSelectableInput`}
        </code>
        {` to true, so the input is not rendered. It does not communicate to screen reader users that it is selectable or if it is currently selected.`}
      </p>
      
      <p {...{"className":"ws-p"}}>
        {`To best understand this example it is encouraged that you navigate both of these cards using a screen reader.`}
      </p>
    </Example>,
  'With heading element': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Card, CardTitle, CardBody, CardFooter } from '@patternfly/react-core';\n\nexport const CardWithHeadingElement: React.FunctionComponent = () => (\n  <Card>\n    <CardTitle component=\"h4\">Header within an {'<h4>'} element</CardTitle>\n    <CardBody>Body</CardBody>\n    <CardFooter>Footer</CardFooter>\n  </Card>\n);\n","title":"With heading element","lang":"ts"}}>
      
    </Example>,
  'Expandable': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  Card,\n  CardHeader,\n  CardActions,\n  CardTitle,\n  CardBody,\n  CardFooter,\n  CardExpandableContent,\n  Checkbox,\n  Dropdown,\n  DropdownItem,\n  DropdownSeparator,\n  KebabToggle\n} from '@patternfly/react-core';\n\nexport const CardExpandable: React.FunctionComponent = () => {\n  const [isOpen, setIsOpen] = React.useState<boolean>(false);\n  const [isChecked, setIsChecked] = React.useState<boolean>(false);\n  const [isExpanded, setIsExpanded] = React.useState<boolean>(false);\n  const [isToggleRightAligned, setIsToggleRightAligned] = React.useState<boolean>(false);\n\n  const onSelect = () => {\n    setIsOpen(!isOpen);\n  };\n\n  const onClick = (checked: boolean) => {\n    setIsChecked(checked);\n  };\n\n  const onExpand = (event: React.MouseEvent, id: string) => {\n    // eslint-disable-next-line no-console\n    console.log(id);\n    setIsExpanded(!isExpanded);\n  };\n\n  const onRightAlign = () => {\n    setIsToggleRightAligned(!isToggleRightAligned);\n  };\n\n  const dropdownItems = [\n    <DropdownItem key=\"link\">Link</DropdownItem>,\n    <DropdownItem key=\"action\" component=\"button\">\n      Action\n    </DropdownItem>,\n    <DropdownItem key=\"disabled link\" isDisabled>\n      Disabled Link\n    </DropdownItem>,\n    <DropdownItem key=\"disabled action\" isDisabled component=\"button\">\n      Disabled Action\n    </DropdownItem>,\n    <DropdownSeparator key=\"separator\" />,\n    <DropdownItem key=\"separated link\">Separated Link</DropdownItem>,\n    <DropdownItem key=\"separated action\" component=\"button\">\n      Separated Action\n    </DropdownItem>\n  ];\n\n  return (\n    <React.Fragment>\n      <div style={{ marginBottom: '12px' }}>\n        <Checkbox\n          id={'isToggleRightAligned-1'}\n          key={'isToggleRightAligned'}\n          label={'isToggleRightAligned'}\n          isChecked={isToggleRightAligned}\n          onChange={onRightAlign}\n        />\n      </div>\n      <Card id=\"expandable-card\" isExpanded={isExpanded}>\n        <CardHeader\n          onExpand={onExpand}\n          isToggleRightAligned={isToggleRightAligned}\n          toggleButtonProps={{\n            id: 'toggle-button1',\n            'aria-label': 'Details',\n            'aria-labelledby': 'expandable-card-title toggle-button1',\n            'aria-expanded': isExpanded\n          }}\n        >\n          <CardActions>\n            <Dropdown\n              onSelect={onSelect}\n              toggle={<KebabToggle onToggle={setIsOpen} />}\n              isOpen={isOpen}\n              isPlain\n              dropdownItems={dropdownItems}\n              position={'right'}\n            />\n            <Checkbox\n              isChecked={isChecked}\n              onChange={onClick}\n              aria-label=\"card checkbox example\"\n              id=\"check-4\"\n              name=\"check4\"\n            />\n          </CardActions>\n          <CardTitle id=\"expandable-card-title\">Header</CardTitle>\n        </CardHeader>\n        <CardExpandableContent>\n          <CardBody>Body</CardBody>\n          <CardFooter>Footer</CardFooter>\n        </CardExpandableContent>\n      </Card>\n    </React.Fragment>\n  );\n};\n","title":"Expandable","lang":"ts"}}>
      
    </Example>,
  'Expandable with icon': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  Card,\n  CardHeader,\n  CardActions,\n  CardBody,\n  CardFooter,\n  CardExpandableContent,\n  Checkbox,\n  Dropdown,\n  DropdownItem,\n  DropdownSeparator,\n  KebabToggle\n} from '@patternfly/react-core';\nimport pfLogoSmall from './pf-logo-small.svg';\n\nexport const CardExpandableWithIcon: React.FunctionComponent = () => {\n  const [isOpen, setIsOpen] = React.useState<boolean>(false);\n  const [isChecked, setIsChecked] = React.useState<boolean>(false);\n  const [isExpanded, setIsExpanded] = React.useState<boolean>(false);\n\n  const onSelect = () => {\n    setIsOpen(!isOpen);\n  };\n\n  const onClick = (checked: boolean) => {\n    setIsChecked(checked);\n  };\n\n  const onExpand = (event: React.MouseEvent, id: string) => {\n    // eslint-disable-next-line no-console\n    console.log(id);\n    setIsExpanded(!isExpanded);\n  };\n\n  const dropdownItems = [\n    <DropdownItem key=\"link\">Link</DropdownItem>,\n    <DropdownItem key=\"action\" component=\"button\">\n      Action\n    </DropdownItem>,\n    <DropdownItem key=\"disabled link\" isDisabled>\n      Disabled Link\n    </DropdownItem>,\n    <DropdownItem key=\"disabled action\" isDisabled component=\"button\">\n      Disabled Action\n    </DropdownItem>,\n    <DropdownSeparator key=\"separator\" />,\n    <DropdownItem key=\"separated link\">Separated Link</DropdownItem>,\n    <DropdownItem key=\"separated action\" component=\"button\">\n      Separated Action\n    </DropdownItem>\n  ];\n\n  return (\n    <Card id=\"expandable-card-icon\" isExpanded={isExpanded}>\n      <CardHeader\n        onExpand={onExpand}\n        toggleButtonProps={{\n          id: 'toggle-button2',\n          'aria-label': 'Patternfly Details',\n          'aria-expanded': isExpanded\n        }}\n      >\n        <img src={pfLogoSmall} alt=\"PatternFly logo\" width=\"27px\" />\n        <CardActions>\n          <Dropdown\n            onSelect={onSelect}\n            toggle={<KebabToggle onToggle={setIsOpen} />}\n            isOpen={isOpen}\n            isPlain\n            dropdownItems={dropdownItems}\n            position={'right'}\n          />\n          <Checkbox\n            isChecked={isChecked}\n            onChange={onClick}\n            aria-label=\"card checkbox example\"\n            id=\"check-5\"\n            name=\"check5\"\n          />\n        </CardActions>\n      </CardHeader>\n      <CardExpandableContent>\n        <CardBody>Body</CardBody>\n        <CardFooter>Footer</CardFooter>\n      </CardExpandableContent>\n    </Card>\n  );\n};\n","title":"Expandable with icon","lang":"ts"}}>
      
    </Example>,
  'Legacy selectable': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  Card,\n  CardHeader,\n  CardActions,\n  CardTitle,\n  CardBody,\n  Dropdown,\n  DropdownItem,\n  DropdownSeparator,\n  KebabToggle\n} from '@patternfly/react-core';\n\nexport const CardLegacySelectable: React.FunctionComponent = () => {\n  const [selected, setSelected] = React.useState<string>('');\n  const [isKebabOpen, setIsKebabOpen] = React.useState<boolean>(false);\n\n  const onKeyDown = (event: React.KeyboardEvent) => {\n    if (event.target !== event.currentTarget) {\n      return;\n    }\n    if ([13, 32].includes(event.keyCode)) {\n      event.preventDefault();\n      const newSelected = event.currentTarget.id === selected ? null : event.currentTarget.id;\n      setSelected(newSelected);\n    }\n  };\n\n  const onClick = (event: React.MouseEvent) => {\n    const newSelected = event.currentTarget.id === selected ? null : event.currentTarget.id;\n    setSelected(newSelected);\n  };\n\n  const onChange = (labelledById: string, _event: React.FormEvent<HTMLInputElement>) => {\n    const newSelected = labelledById === selected ? null : labelledById;\n    setSelected(newSelected);\n  };\n\n  const onToggle = (isOpen: boolean, event: any) => {\n    event.stopPropagation();\n    setIsKebabOpen(isOpen);\n  };\n\n  const onSelect = (event: React.SyntheticEvent<HTMLDivElement>) => {\n    event.stopPropagation();\n    setIsKebabOpen(!isKebabOpen);\n  };\n\n  const dropdownItems = [\n    <DropdownItem key=\"link\">Link</DropdownItem>,\n    <DropdownItem key=\"action\" component=\"button\">\n      Action\n    </DropdownItem>,\n    <DropdownItem key=\"disabled link\" isDisabled>\n      Disabled Link\n    </DropdownItem>,\n    <DropdownItem key=\"disabled action\" isDisabled component=\"button\">\n      Disabled Action\n    </DropdownItem>,\n    <DropdownSeparator key=\"separator\" />,\n    <DropdownItem key=\"separated link\">Separated Link</DropdownItem>,\n    <DropdownItem key=\"separated action\" component=\"button\">\n      Separated Action\n    </DropdownItem>\n  ];\n\n  return (\n    <>\n      <Card\n        id=\"legacy-first-card\"\n        onKeyDown={onKeyDown}\n        onClick={onClick}\n        onSelectableInputChange={onChange}\n        isSelectable\n        isSelected={selected === 'legacy-first-card'}\n        hasSelectableInput\n      >\n        <CardHeader>\n          <CardActions>\n            <Dropdown\n              onSelect={onSelect}\n              toggle={<KebabToggle onToggle={onToggle} />}\n              isOpen={isKebabOpen}\n              isPlain\n              dropdownItems={dropdownItems}\n              position={'right'}\n            />\n          </CardActions>\n        </CardHeader>\n        <CardTitle>First legacy selectable card</CardTitle>\n        <CardBody>This is a selectable card. Click me to select me. Click again to deselect me.</CardBody>\n      </Card>\n      <br />\n      <Card\n        id=\"legacy-second-card\"\n        onKeyDown={onKeyDown}\n        onClick={onClick}\n        onSelectableInputChange={onChange}\n        isSelectable\n        isSelected={selected === 'legacy-second-card'}\n        hasSelectableInput\n      >\n        <CardTitle>Second legacy selectable card</CardTitle>\n        <CardBody>This is a selectable card. Click me to select me. Click again to deselect me.</CardBody>\n      </Card>\n    </>\n  );\n};\n","title":"Legacy selectable","lang":"ts"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Basic"])}
    {React.createElement(pageData.examples["With modifiers"])}
    {React.createElement(pageData.examples["With image and actions"])}
    {React.createElement(pageData.examples["Header in card head"])}
    {React.createElement(pageData.examples["Only actions in card head (no header/footer)"])}
    {React.createElement(pageData.examples["Only image in card head"])}
    {React.createElement(pageData.examples["With no footer"])}
    {React.createElement(pageData.examples["With no header"])}
    {React.createElement(pageData.examples["With only a body section"])}
    {React.createElement(pageData.examples["With multiple body sections"])}
    {React.createElement(pageData.examples["With only a body section that fills"])}
    {React.createElement(pageData.examples["Selectable"])}
    {React.createElement(pageData.examples["Selectable accessibility highlight"])}
    {React.createElement(pageData.examples["With heading element"])}
    {React.createElement(pageData.examples["Expandable"])}
    {React.createElement(pageData.examples["Expandable with icon"])}
    {React.createElement(pageData.examples["Legacy selectable"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsCardReactDocs';
Component.pageData = pageData;

export default Component;
