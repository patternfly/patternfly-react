import figma from '@figma/code-connect';
import { Label, LabelGroup } from '@patternfly/react-core';

// Documentation for LabelGroups can be found at https://www.patternfly.org/components/label

figma.connect(
  LabelGroup,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2800-1075',
  {
    props: {
      // string
      labelGroupName: figma.string('Label group name'),

      // boolean
      hasCollapsedLabels: figma.boolean('Has collapsed labels', {
        true: 4,
        false: undefined
      }),

      // enum
      addLabelControl: figma.enum('Type', {
        'Label management': (
          <Label variant="add" onClick={() => {}}>
            Add label
          </Label>
        )
      }),

      children: figma.children([
        'Label in group 1',
        'Label in group 2',
        'Label in group 3',
        'Label in group 4',
        'Label in group 5',
        'Label in group 6',
        'Label Non-status'
      ])
    },
    example: (props) => (
      <LabelGroup
        addLabelControl={props.addLabelControl}
        categoryName="Group label"
        isClosable
        isEditable
        numLabels={props.hasCollapsedLabels}
        onClick={() => {}}
      >
        {props.children}
      </LabelGroup>
    )
  }
);
