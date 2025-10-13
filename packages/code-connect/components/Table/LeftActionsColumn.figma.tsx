import figma from '@figma/code-connect';
import { ActionsColumn, Td, Th } from '@patternfly/react-table';

// Documentation for Table can be found at https://www.patternfly.org/components/table

figma.connect(Td, 'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/PatternFly-6--Components?node-id=6441-38440', {
  props: {
    tableCell: figma.boolean('Column header', {
      true: <Th screenReaderText="Action cell" />,
      false: (
        <Td isActionCell>
          <ActionsColumn items={[]} />
        </Td>
      )
    })
  },
  example: (props) => <>{props.tableCell}</>
});
