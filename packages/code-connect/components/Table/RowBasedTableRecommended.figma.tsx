import figma from '@figma/code-connect';
import { Table } from '@patternfly/react-table';

// Documentation for Table can be found at https://www.patternfly.org/components/table

figma.connect(
  Table,
  'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/PatternFly-6--Components?node-id=3331-12049',
  {
    props: {
      // boolean
      isBordered: figma.boolean('Bordered'),
      isExpandable: figma.boolean('Expandable'),

      // enum
      variant: figma.enum('Size', { Compact: 'compact' }),
      children: figma.children('*')
    },
    example: (props) => (
      <Table variant={props.variant} borders={props.isBordered} isExpandable={props.isExpandable}>
        {props.children}
      </Table>
    )
  }
);
