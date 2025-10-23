import figma from '@figma/code-connect';
import { Table } from '@patternfly/react-table';

// Documentation for BasicRow can be found at https://www.patternfly.org/components/table

figma.connect(
  Table,
  'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/PatternFly-6--Components?node-id=6482-49461',
  {
    props: {
      // enum
      variant: figma.enum('Size', { Compact: 'compact' }),

      children: figma.children('*')
    },
    example: (props) => (
      <Table variant={props.variant} aria-label="Column based table">
        {props.children}test
      </Table>
    )
  }
);
