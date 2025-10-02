import figma from '@figma/code-connect';
import { Table } from '@patternfly/react-table';

// Documentation for Table can be found at https://www.patternfly.org/components/table

figma.connect(
  Table,
  'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/PatternFly-6--Components?node-id=6482-55919',
  {
    props: {
      children: figma.children('*')
    },
    example: (props) => (
      <Table isExpandable aria-label="Compound expandable table">
        {props.children}
      </Table>
    )
  }
);
