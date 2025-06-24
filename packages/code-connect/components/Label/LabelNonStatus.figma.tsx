import figma from '@figma/code-connect';
import { Label } from '@patternfly/react-core';

// Documentation for Label can be found at https://www.patternfly.org/components/label

figma.connect(
  Label,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2800-609',
  {
    props: {
      // string
      labelText: figma.string('Text'),

      // boolean
      isEditable: figma.boolean('Is Editable'),
      onEditCancel: figma.boolean('Is Editable', {
        true: `{() => {}}`,
        false: undefined
      }),
      onEditComplete: figma.boolean('Is Editable', {
        true: `{() => {}}`,
        false: undefined
      }),
      editableProps: figma.boolean('Is Editable', {
        true: {
          'aria-label': 'Editable label props',
          id: 'editable-label'
        },
        false: undefined
      }),

      // enum
      isCompact: figma.enum('Type', { Compact: true }),
      color: figma.enum('Color', {
        Red: 'red',
        Orange: 'orange',
        'Orange Red': 'orangered',
        Green: 'green',
        Blue: 'blue',
        Purple: 'purple',
        Grey: 'grey'
      }),
      variant: figma.enum('Type', {
        Filled: 'filled',
        Outlined: 'outline'
      }),

      children: figma.children('*')
    },
    example: (props) => (
      <Label
        isCompact={props.isCompact}
        isEditable={props.isEditable}
        onEditCancel={props.onEditCancel}
        onEditComplete={props.onEditComplete}
        editableProps={props.editableProps}
        color={props.color}
        variant={props.variant}
      >
        {props.children}
        {props.labelText}
      </Label>
    )
  }
);
