import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import InfoCircleIcon from '@patternfly/react-icons/dist/esm/icons/info-circle-icon';
const pageData = {
  "id": "Label group",
  "section": "components",
  "source": "react",
  "slug": "/components/label-group/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/components/LabelGroup/examples/LabelGroup.md",
  "propComponents": [
    {
      "name": "LabelGroup",
      "description": "",
      "props": [
        {
          "name": "aria-label",
          "type": "string",
          "description": "Aria label for label group that does not have a category name",
          "defaultValue": "'Label group category'"
        },
        {
          "name": "categoryName",
          "type": "string",
          "description": "Category name text for the label group category.  If this prop is supplied the label group with have a label and category styling applied",
          "defaultValue": "''"
        },
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside the label group. Should be <Label> elements."
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the label item"
        },
        {
          "name": "closeBtnAriaLabel",
          "type": "string",
          "description": "Aria label for close button",
          "defaultValue": "'Close label group'"
        },
        {
          "name": "collapsedText",
          "type": "string",
          "description": "Customizeable template string. Use variable \"${remaining}\" for the overflow label count.",
          "defaultValue": "'${remaining} more'"
        },
        {
          "name": "defaultIsOpen",
          "type": "boolean",
          "description": "Flag for having the label group default to expanded",
          "defaultValue": "false"
        },
        {
          "name": "editableTextAreaProps",
          "type": "any",
          "description": "Additional props passed to the editable textarea.",
          "beta": true
        },
        {
          "name": "expandedText",
          "type": "string",
          "description": "Customizable \"Show Less\" text string",
          "defaultValue": "'Show Less'"
        },
        {
          "name": "hasEditableTextArea",
          "type": "boolean",
          "description": "Flag indicating the editable label group should be appended with a textarea.",
          "defaultValue": "false",
          "beta": true
        },
        {
          "name": "isClosable",
          "type": "boolean",
          "description": "Flag if label group can be closed",
          "defaultValue": "false"
        },
        {
          "name": "isCompact",
          "type": "boolean",
          "description": "Flag indicating the labels in the group are compact",
          "defaultValue": "false"
        },
        {
          "name": "isEditable",
          "type": "boolean",
          "description": "Flag indicating contained labels are editable. Allows spacing for a text input after the labels.",
          "defaultValue": "false",
          "beta": true
        },
        {
          "name": "isVertical",
          "type": "boolean",
          "description": "Flag to implement a vertical layout",
          "defaultValue": "false"
        },
        {
          "name": "numLabels",
          "type": "number",
          "description": "Set number of labels to show before overflow",
          "defaultValue": "3"
        },
        {
          "name": "onClick",
          "type": "(event: React.MouseEvent) => void",
          "description": "Function that is called when clicking on the label group close button",
          "defaultValue": "(_e: React.MouseEvent) => undefined as any"
        },
        {
          "name": "tooltipPosition",
          "type": "TooltipPosition\n| 'auto'\n| 'top'\n| 'bottom'\n| 'left'\n| 'right'\n| 'top-start'\n| 'top-end'\n| 'bottom-start'\n| 'bottom-end'\n| 'left-start'\n| 'left-end'\n| 'right-start'\n| 'right-end'",
          "description": "Position of the tooltip which is displayed if the category name text is longer",
          "defaultValue": "'top'"
        }
      ]
    },
    {
      "name": "Label",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside the label."
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the label.",
          "defaultValue": "''"
        },
        {
          "name": "closeBtn",
          "type": "React.ReactNode",
          "description": "Node for custom close button."
        },
        {
          "name": "closeBtnAriaLabel",
          "type": "string",
          "description": "Aria label for close button"
        },
        {
          "name": "closeBtnProps",
          "type": "any",
          "description": "Additional properties for the default close button."
        },
        {
          "name": "color",
          "type": "'blue' | 'cyan' | 'green' | 'orange' | 'purple' | 'red' | 'grey'",
          "description": "Color of the label.",
          "defaultValue": "'grey'"
        },
        {
          "name": "editableProps",
          "type": "any",
          "description": "Additional props passed to the editable label text div. Optionally passing onInput and onBlur callbacks will allow finer custom text input control.",
          "beta": true
        },
        {
          "name": "href",
          "type": "string",
          "description": "Href for a label that is a link. If present, the label will change to an anchor element."
        },
        {
          "name": "icon",
          "type": "React.ReactNode",
          "description": "Icon added to the left of the label text."
        },
        {
          "name": "isCompact",
          "type": "boolean",
          "description": "Flag indicating the label is compact.",
          "defaultValue": "false"
        },
        {
          "name": "isEditable",
          "type": "boolean",
          "description": "Flag indicating the label is editable.",
          "defaultValue": "false",
          "beta": true
        },
        {
          "name": "isOverflowLabel",
          "type": "boolean",
          "description": "Flag indicating if the label is an overflow label"
        },
        {
          "name": "isTruncated",
          "type": "boolean",
          "description": "Flag indicating the label text should be truncated.",
          "defaultValue": "false"
        },
        {
          "name": "onClose",
          "type": "(event: React.MouseEvent) => void",
          "description": "Close click callback for removable labels. If present, label will have a close button."
        },
        {
          "name": "onEditCancel",
          "type": "(previousText: string) => void",
          "description": "Callback when an editable label cancels an edit.",
          "beta": true
        },
        {
          "name": "onEditComplete",
          "type": "(newText: string) => void",
          "description": "Callback when an editable label completes an edit.",
          "beta": true
        },
        {
          "name": "render",
          "type": "({\n  className,\n  content,\n  componentRef\n}: {\n  className: string;\n  content: React.ReactNode;\n  componentRef: any;\n}) => React.ReactNode",
          "description": "Forwards the label content and className to rendered function.  Use this prop for react router support."
        },
        {
          "name": "tooltipPosition",
          "type": "TooltipPosition\n| 'auto'\n| 'top'\n| 'bottom'\n| 'left'\n| 'right'\n| 'top-start'\n| 'top-end'\n| 'bottom-start'\n| 'bottom-end'\n| 'left-start'\n| 'left-end'\n| 'right-start'\n| 'right-end'",
          "description": "Position of the tooltip which is displayed if text is truncated"
        },
        {
          "name": "variant",
          "type": "'outline' | 'filled'",
          "description": "Variant of the label.",
          "defaultValue": "'filled'"
        }
      ]
    }
  ],
  "beta": true,
  "cssPrefix": [
    "pf-c-label"
  ],
  "examples": [
    "Basic",
    "Overflow",
    "Category",
    "Category removable",
    "Vertical category overflow removable",
    "Editable labels"
  ]
};
pageData.liveContext = {
  InfoCircleIcon
};
pageData.examples = {
  'Basic': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Label, LabelGroup } from '@patternfly/react-core';\nimport InfoCircleIcon from '@patternfly/react-icons/dist/esm/icons/info-circle-icon';\n\nconst Basic = () => (\n  <LabelGroup>\n    <Label icon={<InfoCircleIcon />}>Label 1</Label>\n    <Label icon={<InfoCircleIcon />} color=\"blue\">\n      Label 2\n    </Label>\n    <Label icon={<InfoCircleIcon />} color=\"green\">\n      Label 3\n    </Label>\n  </LabelGroup>\n)","title":"Basic","lang":"js"}}>
      
    </Example>,
  'Overflow': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Label, LabelGroup } from '@patternfly/react-core';\nimport InfoCircleIcon from '@patternfly/react-icons/dist/esm/icons/info-circle-icon';\n\nconst Overflow = () => (\n  <LabelGroup>\n    <Label icon={<InfoCircleIcon />}>Label 1</Label>\n    <Label icon={<InfoCircleIcon />} color=\"blue\">\n      Label 2\n    </Label>\n    <Label icon={<InfoCircleIcon />} color=\"green\">\n      Label 3\n    </Label>\n    <Label icon={<InfoCircleIcon />} color=\"orange\">\n      Label 4\n    </Label>\n    <Label icon={<InfoCircleIcon />} color=\"red\">\n      Label 5\n    </Label>\n    <Label icon={<InfoCircleIcon />} color=\"purple\">\n      Label 6\n    </Label>\n  </LabelGroup>\n)","title":"Overflow","lang":"js"}}>
      
    </Example>,
  'Category': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Label, LabelGroup } from '@patternfly/react-core';\nimport InfoCircleIcon from '@patternfly/react-icons/dist/esm/icons/info-circle-icon';\n\nconst Category = () => (\n  <LabelGroup categoryName=\"Group label\">\n    <Label icon={<InfoCircleIcon />}>Label 1</Label>\n    <Label icon={<InfoCircleIcon />} color=\"blue\">\n      Label 2\n    </Label>\n    <Label icon={<InfoCircleIcon />} color=\"green\">\n      Label 3\n    </Label>\n  </LabelGroup>\n)","title":"Category","lang":"js"}}>
      
    </Example>,
  'Category removable': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Label, LabelGroup } from '@patternfly/react-core';\nimport InfoCircleIcon from '@patternfly/react-icons/dist/esm/icons/info-circle-icon';\n\nCategoryLabelGroupRemovable = () => {\n  const [labels, setLabels] = React.useState([\n    ['Label 1', 'grey'],\n    ['Label 2', 'blue'],\n    ['Label 3', 'green'],\n    ['Label 4', 'orange'],\n    ['Label 5', 'red']\n  ]);\n  const deleteCategory = () => setLabels([]);\n\n  return (\n    <LabelGroup categoryName=\"Group label\" isClosable onClick={deleteCategory}>\n      {labels.map(([labelText, labelColor]) => (\n        <Label icon={<InfoCircleIcon />} color={labelColor} key={labelText}>\n          {labelText}\n        </Label>\n      ))}\n    </LabelGroup>\n  );\n};","title":"Category removable","lang":"js"}}>
      
    </Example>,
  'Vertical category overflow removable': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Label, LabelGroup } from '@patternfly/react-core';\nimport InfoCircleIcon from '@patternfly/react-icons/dist/esm/icons/info-circle-icon';\n\nVerticalCategoryLabelGroupOverflowRemovable = () => {\n  const [labels, setLabels] = React.useState([\n    ['Label 1', 'grey'],\n    ['Label 2', 'blue'],\n    ['Label 3', 'green'],\n    ['Label 4', 'orange'],\n    ['Label 5', 'red']\n  ]);\n  const deleteCategory = () => setLabels([]);\n\n  return (\n    <LabelGroup categoryName=\"Group label with a very long name\" isVertical isClosable onClick={deleteCategory}>\n      {labels.map(([labelText, labelColor]) => (\n        <Label icon={<InfoCircleIcon />} color={labelColor} key={labelText}>\n          {labelText}\n        </Label>\n      ))}\n    </LabelGroup>\n  );\n};","title":"Vertical category overflow removable","lang":"js"}}>
      
    </Example>,
  'Editable labels': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { LabelGroup, Label, TextArea } from '@patternfly/react-core';\n\nclass EditableLabelGroup extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      label1: 'Editable label',\n      label2: 'Editable label 2',\n      label3: 'Editable label 3'\n    };\n    this.onEditCancel = (prevText, label) => {\n      this.setState({\n        [label]: prevText\n      });\n    };\n    this.onEditComplete = (newText, label) => {\n      this.setState({\n        [label]: newText\n      });\n    };\n  }\n\n  render() {\n    return (\n      <LabelGroup numLabels={5} isEditable>\n        <Label\n          color=\"blue\"\n          onClose={Function.prototype}\n          onEditCancel={prevText => this.onEditCancel(prevText, 'label1')}\n          onEditComplete={newText => this.onEditComplete(newText, 'label1')}\n          isEditable\n          editableProps={{\n            'aria-label': 'Editable text',\n            id: 'editable-label-1'\n          }}\n        >\n          {this.state.label1}\n        </Label>\n        <Label color=\"green\">Static label</Label>\n        <Label\n          color=\"blue\"\n          onClose={Function.prototype}\n          onEditCancel={prevText => this.onEditCancel(prevText, 'label2')}\n          onEditComplete={newText => this.onEditComplete(newText, 'label2')}\n          isEditable\n          editableProps={{\n            'aria-label': 'Editable text 2',\n            id: 'editable-label-2'\n          }}\n        >\n          {this.state.label2}\n        </Label>\n        <Label\n          color=\"blue\"\n          onClose={Function.prototype}\n          onEditCancel={prevText => this.onEditCancel(prevText, 'label3')}\n          onEditComplete={newText => this.onEditComplete(newText, 'label3')}\n          isEditable\n          editableProps={{\n            'aria-label': 'Editable text 3',\n            id: 'editable-label-3'\n          }}\n        >\n          {this.state.label3}\n        </Label>\n      </LabelGroup>\n    );\n  }\n}","title":"Editable labels","lang":"js","isBeta":true}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Basic"])}
    {React.createElement(pageData.examples["Overflow"])}
    {React.createElement(pageData.examples["Category"])}
    {React.createElement(pageData.examples["Category removable"])}
    {React.createElement(pageData.examples["Vertical category overflow removable"])}
    {React.createElement(pageData.examples["Editable labels"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsLabelGroupReactDocs';
Component.pageData = pageData;

export default Component;
