import figma from '@figma/code-connect';
import { Th } from '@patternfly/react-table';

// Documentation for BasicRow can be found at https://www.patternfly.org/components/table

figma.connect(Th, 'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/PatternFly-6--Components?node-id=6241-29618', {
  props: {
    selectAll: figma.boolean('Select all', {
      true: (
        <Th
          select={{
            onSelect: () => {},
            isSelected: false
          }}
          aria-label="Row select"
        />
      ),
      false: undefined
    }),
    expandableAll: figma.boolean('Expandable all', {
      true: (
        <Th
          expand={{
            onToggle: () => {}
          }}
          aria-label="Row expand"
        />
      ),
      false: undefined
    }),
    isDraggable: figma.boolean('Is draggable', {
      true: <Th draggableRow={{ id: `draggable-row-id` }} />,
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
