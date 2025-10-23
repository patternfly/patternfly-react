import figma from '@figma/code-connect';
import { Td } from '@patternfly/react-table';

// Documentation for Table can be found at https://www.patternfly.org/components/table

figma.connect(Td, 'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/PatternFly-6--Components?node-id=2930-36766', {
  props: {
    selectAll: figma.boolean('Row select', {
      true: (
        <Td
          select={{
            onSelect: () => {},
            isSelected: false
          }}
          aria-label="Row select"
        />
      ),
      false: undefined
    }),
    expandableAll: figma.boolean('Row expansion', {
      true: (
        <Td
          expand={{
            onToggle: () => {}
          }}
          aria-label="Row expand"
        />
      ),
      false: undefined
    }),
    isDraggable: figma.boolean('Is draggable', {
      true: <Td draggableRow={{ id: `draggable-row-id` }} />,
      false: undefined
    })
  },
  example: (props) => (
    <>
      {props.selectAll}
      {props.expandableAll}
      {props.isDraggable}
    </>
  )
});
