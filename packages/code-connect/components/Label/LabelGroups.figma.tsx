import figma from '@figma/code-connect';
import { Label, LabelGroup } from '@patternfly/react-core';

// Documentation for LabelGroups can be found at https://www.patternfly.org/components/label

const sharedProps = {
  closableLabels: (
    <>
      <Label onClose={() => {}}>Label</Label>
      <Label onClose={() => {}}>Label</Label>
      <Label onClose={() => {}}>Label</Label>
      <Label onClose={() => {}}>Label</Label>
      <Label onClose={() => {}}>Label</Label>
      <Label onClose={() => {}}>Label</Label>
      <Label onClose={() => {}}>Label</Label>
      <Label onClose={() => {}}>Label</Label>
      <Label onClose={() => {}}>Label</Label>
    </>
  ),
  editableLabels: (
    <>
      <Label
        color="grey"
        isCompact
        onClose={() => {}}
        closeBtnAriaLabel="Custom close button for compact editable label"
        onEditCancel={() => {}}
        onEditComplete={() => {}}
        isEditable
        editableProps={{
          'aria-label': `Editable compact label with text`,
          id: 'compact-editable-label1'
        }}
      >
        Label
      </Label>
      <Label
        color="grey"
        isCompact
        onClose={() => {}}
        closeBtnAriaLabel="Custom close button for compact editable label"
        onEditCancel={() => {}}
        onEditComplete={() => {}}
        isEditable
        editableProps={{
          'aria-label': `Editable compact label with text`,
          id: 'compact-editable-label1'
        }}
      >
        Label
      </Label>
      <Label
        color="grey"
        isCompact
        onClose={() => {}}
        closeBtnAriaLabel="Custom close button for compact editable label"
        onEditCancel={() => {}}
        onEditComplete={() => {}}
        isEditable
        editableProps={{
          'aria-label': `Editable compact label with text`,
          id: 'compact-editable-label2'
        }}
      >
        Label
      </Label>
      <Label
        color="grey"
        isCompact
        onClose={() => {}}
        closeBtnAriaLabel="Custom close button for compact editable label"
        onEditCancel={() => {}}
        onEditComplete={() => {}}
        isEditable
        editableProps={{
          'aria-label': `Editable compact label with text`,
          id: 'compact-editable-label3'
        }}
      >
        Label
      </Label>
      <Label
        color="grey"
        isCompact
        onClose={() => {}}
        closeBtnAriaLabel="Custom close button for compact editable label"
        onEditCancel={() => {}}
        onEditComplete={() => {}}
        isEditable
        editableProps={{
          'aria-label': `Editable compact label with text`,
          id: 'compact-editable-label4'
        }}
      >
        Label
      </Label>
      <Label
        color="grey"
        isCompact
        onClose={() => {}}
        closeBtnAriaLabel="Custom close button for compact editable label"
        onEditCancel={() => {}}
        onEditComplete={() => {}}
        isEditable
        editableProps={{
          'aria-label': `Editable compact label with text`,
          id: 'compact-editable-label5'
        }}
      >
        Label
      </Label>
      <Label
        color="grey"
        isCompact
        onClose={() => {}}
        closeBtnAriaLabel="Custom close button for compact editable label"
        onEditCancel={() => {}}
        onEditComplete={() => {}}
        isEditable
        editableProps={{
          'aria-label': `Editable compact label with text`,
          id: 'compact-editable-label6'
        }}
      >
        Label
      </Label>
      <Label
        color="grey"
        isCompact
        onClose={() => {}}
        closeBtnAriaLabel="Custom close button for compact editable label"
        onEditCancel={() => {}}
        onEditComplete={() => {}}
        isEditable
        editableProps={{
          'aria-label': `Editable compact label with text`,
          id: 'compact-editable-label7'
        }}
      >
        Label
      </Label>
      <Label
        color="grey"
        isCompact
        onClose={() => {}}
        closeBtnAriaLabel="Custom close button for compact editable label"
        onEditCancel={() => {}}
        onEditComplete={() => {}}
        isEditable
        editableProps={{
          'aria-label': `Editable compact label with text`,
          id: 'compact-editable-label8'
        }}
      >
        Label
      </Label>
    </>
  )
};

figma.connect(
  LabelGroup,
  'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/PatternFly-6--Components?node-id=2800-1075',
  {
    props: {
      ...sharedProps,
      // boolean
      numLabels: figma.boolean('Has collapsed labels', {
        true: 6,
        false: undefined
      }),

      // enum
      addLabelControl: figma.enum('Type', {
        'Label management': (
          <Label variant="add" onClick={() => {}}>
            Add label
          </Label>
        )
      })
    },
    example: (props) => (
      <LabelGroup
        addLabelControl={props.addLabelControl}
        categoryName="Group label"
        isClosable
        numLabels={props.numLabels}
        onClick={() => {}}
      >
        {props.closableLabels}
      </LabelGroup>
    )
  }
);

figma.connect(
  LabelGroup,
  'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/PatternFly-6--Components?node-id=2800-1075',
  {
    variant: { Type: 'Label management' },
    props: {
      ...sharedProps,
      // boolean
      numLabels: figma.boolean('Has collapsed labels', {
        true: 6,
        false: undefined
      }),

      // enum
      addLabelControl: figma.enum('Type', {
        'Label management': (
          <Label variant="add" onClick={() => {}}>
            Add label
          </Label>
        )
      })
    },
    example: (props) => (
      <LabelGroup
        addLabelControl={props.addLabelControl}
        categoryName="Group label"
        isClosable
        numLabels={props.numLabels}
        onClick={() => {}}
      >
        {props.editableLabels}
      </LabelGroup>
    )
  }
);
