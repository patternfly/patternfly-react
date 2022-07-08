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
          "name": "addLabelControl",
          "type": "React.ReactNode",
          "description": "Control for adding new labels",
          "beta": true
        },
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
          "type": "'blue' | 'cyan' | 'green' | 'orange' | 'purple' | 'red' | 'grey' | 'gold'",
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
    "Editable labels",
    "Editable labels with add button"
  ]
};
pageData.liveContext = {
  InfoCircleIcon
};
pageData.examples = {
  'Basic': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Label, LabelGroup } from '@patternfly/react-core';\nimport InfoCircleIcon from '@patternfly/react-icons/dist/esm/icons/info-circle-icon';\n\nexport const LabelGroupBasic: React.FunctionComponent = () => (\n  <LabelGroup>\n    <Label icon={<InfoCircleIcon />}>Label 1</Label>\n    <Label icon={<InfoCircleIcon />} color=\"blue\">\n      Label 2\n    </Label>\n    <Label icon={<InfoCircleIcon />} color=\"green\">\n      Label 3\n    </Label>\n  </LabelGroup>\n);\n","title":"Basic","lang":"ts"}}>
      
    </Example>,
  'Overflow': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Label, LabelGroup } from '@patternfly/react-core';\nimport InfoCircleIcon from '@patternfly/react-icons/dist/esm/icons/info-circle-icon';\n\nexport const LabelGroupOverflow: React.FunctionComponent = () => (\n  <LabelGroup>\n    <Label icon={<InfoCircleIcon />}>Label 1</Label>\n    <Label icon={<InfoCircleIcon />} color=\"blue\">\n      Label 2\n    </Label>\n    <Label icon={<InfoCircleIcon />} color=\"green\">\n      Label 3\n    </Label>\n    <Label icon={<InfoCircleIcon />} color=\"orange\">\n      Label 4\n    </Label>\n    <Label icon={<InfoCircleIcon />} color=\"red\">\n      Label 5\n    </Label>\n    <Label icon={<InfoCircleIcon />} color=\"purple\">\n      Label 6\n    </Label>\n  </LabelGroup>\n);\n","title":"Overflow","lang":"ts"}}>
      
    </Example>,
  'Category': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Label, LabelGroup } from '@patternfly/react-core';\nimport InfoCircleIcon from '@patternfly/react-icons/dist/esm/icons/info-circle-icon';\n\nexport const LabelGroupCategory: React.FunctionComponent = () => (\n  <LabelGroup categoryName=\"Group label\">\n    <Label icon={<InfoCircleIcon />}>Label 1</Label>\n    <Label icon={<InfoCircleIcon />} color=\"blue\">\n      Label 2\n    </Label>\n    <Label icon={<InfoCircleIcon />} color=\"green\">\n      Label 3\n    </Label>\n  </LabelGroup>\n);\n","title":"Category","lang":"ts"}}>
      
    </Example>,
  'Category removable': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Label, LabelGroup, LabelProps } from '@patternfly/react-core';\nimport InfoCircleIcon from '@patternfly/react-icons/dist/esm/icons/info-circle-icon';\n\nexport const LabelGroupCategoryRemovable: React.FunctionComponent = () => {\n  const [labels, setLabels] = React.useState([\n    ['Label 1', 'grey'],\n    ['Label 2', 'blue'],\n    ['Label 3', 'green'],\n    ['Label 4', 'orange'],\n    ['Label 5', 'red']\n  ]);\n  const deleteCategory = () => setLabels([]);\n\n  return (\n    <LabelGroup categoryName=\"Group label\" isClosable onClick={deleteCategory}>\n      {labels.map(([labelText, labelColor]) => (\n        <Label icon={<InfoCircleIcon />} color={labelColor as LabelProps['color']} key={labelText}>\n          {labelText}\n        </Label>\n      ))}\n    </LabelGroup>\n  );\n};\n","title":"Category removable","lang":"ts"}}>
      
    </Example>,
  'Vertical category overflow removable': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Label, LabelGroup, LabelProps } from '@patternfly/react-core';\nimport InfoCircleIcon from '@patternfly/react-icons/dist/esm/icons/info-circle-icon';\n\nexport const LabelGroupVerticalCategoryOverflowRemovable: React.FunctionComponent = () => {\n  const [labels, setLabels] = React.useState([\n    ['Label 1', 'grey'],\n    ['Label 2', 'blue'],\n    ['Label 3', 'green'],\n    ['Label 4', 'orange'],\n    ['Label 5', 'red']\n  ]);\n  const deleteCategory = () => setLabels([]);\n\n  return (\n    <LabelGroup categoryName=\"Group label with a very long name\" isVertical isClosable onClick={deleteCategory}>\n      {labels.map(([labelText, labelColor]) => (\n        <Label icon={<InfoCircleIcon />} color={labelColor as LabelProps['color']} key={labelText}>\n          {labelText}\n        </Label>\n      ))}\n    </LabelGroup>\n  );\n};\n","title":"Vertical category overflow removable","lang":"ts"}}>
      
    </Example>,
  'Editable labels': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { LabelGroup, Label } from '@patternfly/react-core';\n\nexport const LabelGroupEditableLabels: React.FunctionComponent = () => {\n  const [label1, setLabel1] = React.useState('Editable label');\n  const [label2, setLabel2] = React.useState('Editable label 2');\n  const [label3, setLabel3] = React.useState('Editable label 3');\n\n  return (\n    <LabelGroup numLabels={5} isEditable>\n      <Label\n        color=\"blue\"\n        onClose={() => Function.prototype}\n        onEditCancel={prevText => setLabel1(prevText)}\n        onEditComplete={newText => setLabel1(newText)}\n        isEditable\n        editableProps={{\n          'aria-label': 'Editable text',\n          id: 'editable-label-1'\n        }}\n      >\n        {label1}\n      </Label>\n      <Label color=\"green\">Static label</Label>\n      <Label\n        color=\"blue\"\n        onClose={() => Function.prototype}\n        onEditCancel={prevText => setLabel2(prevText)}\n        onEditComplete={newText => setLabel2(newText)}\n        isEditable\n        editableProps={{\n          'aria-label': 'Editable text 2',\n          id: 'editable-label-2'\n        }}\n      >\n        {label2}\n      </Label>\n      <Label\n        color=\"blue\"\n        onClose={() => Function.prototype}\n        onEditCancel={prevText => setLabel3(prevText)}\n        onEditComplete={newText => setLabel3(newText)}\n        isEditable\n        editableProps={{\n          'aria-label': 'Editable text 3',\n          id: 'editable-label-3'\n        }}\n      >\n        {label3}\n      </Label>\n    </LabelGroup>\n  );\n};\n","title":"Editable labels","lang":"ts","isBeta":true}}>
      
    </Example>,
  'Editable labels with add button': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { LabelGroup, Label } from '@patternfly/react-core';\n\nexport const LabelGroupEditableAdd: React.FunctionComponent = () => {\n  const [idIndex, setIdIndex] = React.useState<number>(3);\n  const [labels, setLabels] = React.useState<any>([\n    { name: 'Label 1', id: 0 },\n    { name: 'Label 2', id: 1 },\n    {\n      name: 'Label 3',\n      props: {\n        isEditable: true,\n        editableProps: {\n          'aria-label': 'label editable text'\n        }\n      },\n      id: 2\n    }\n  ]);\n\n  const onClose = (labelId: string) => {\n    setLabels(labels.filter((l: any) => l.id !== labelId));\n  };\n\n  const onEdit = (nextText: string, index: number) => {\n    const copy = [...labels];\n    copy[index] = { name: nextText, props: labels[index].props, id: labels[index].id };\n    setLabels(copy);\n  };\n\n  const onAdd = () => {\n    setLabels([\n      {\n        name: 'New Label',\n        props: {\n          isEditable: true,\n          editableProps: {\n            'aria-label': 'label editable text'\n          }\n        },\n        id: idIndex\n      },\n      ...labels\n    ]);\n    setIdIndex(idIndex + 1);\n  };\n\n  return (\n    <LabelGroup\n      categoryName=\"Label group 1\"\n      numLabels={5}\n      isEditable\n      addLabelControl={\n        <Label color=\"blue\" variant=\"outline\" isOverflowLabel onClick={onAdd}>\n          Add label\n        </Label>\n      }\n    >\n      {labels.map((label, index) => (\n        <Label\n          key={`${label.name}-${index}`}\n          id={`${label.name}-${index}`}\n          color=\"blue\"\n          onClose={() => onClose(label.id)}\n          onEditCancel={prevText => onEdit(prevText, index)}\n          onEditComplete={newText => onEdit(newText, index)}\n          {...label.props}\n        >\n          {label.name}\n        </Label>\n      ))}\n    </LabelGroup>\n  );\n};\n","title":"Editable labels with add button","lang":"ts"}}>
      
      <p {...{"className":"ws-p"}}>
        {`For additional documentation that showcases adding a new label, see `}
        
        <PatternflyThemeLink {...{"to":"/components/label-group/react-demos"}}>
          {`label group demos`}
        </PatternflyThemeLink>
        {`.`}
      </p>
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
    {React.createElement(pageData.examples["Editable labels with add button"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsLabelGroupReactDocs';
Component.pageData = pageData;

export default Component;
