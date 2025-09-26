import figma from '@figma/code-connect';
import { Label } from '@patternfly/react-core';

// Documentation for Label can be found at https://www.patternfly.org/components/label
// TODO: DESIGN: Update status to be a prop

figma.connect(
  Label,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2800-609',
  {
    props: {
      status: 'info', // TODO: DESIGN: Update status to be a prop
      // string
      labelText: figma.string('Text'),

      // boolean
      isEditable: figma.boolean('Is Editable', {
        true: {
          isEditable: true,
          onEditCancel: () => {}, // Callback when an editable label cancels an edit.
          onEditComplete: () => {}, // Callback when an editable label completes an edit.
          editableProps: {
            'aria-label': `Editable label with text`,
            id: 'editable-label'
          }
        },
        false: undefined
      }),

      // enum
      isCompact: figma.enum('Size', { Compact: true }),
      color: figma.enum('Color', {
        Red: 'red',
        Orange: 'orange',
        'Orange Red': 'orangered',
        Green: 'green',
        Blue: 'blue',
        Purple: 'purple',
        Grey: 'grey',
        Cyan: 'teal', // TODO: DESIGN: Update to teal
        Gold: 'yellow' // TODO: DESIGN: Update to yellow
      }),
      variant: figma.enum('Type', { Outlined: 'outline' })
    },
    example: (props) => (
      <Label
        isCompact={props.isCompact}
        status={props.status}
        isEditable={props.isEditable}
        color={props.color}
        variant={props.variant}
      >
        {props.labelText}
      </Label>
    )
  }
);
