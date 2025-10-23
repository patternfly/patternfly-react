import figma from '@figma/code-connect';
import { Td } from '@patternfly/react-table';

// Documentation for Table can be found at https://www.patternfly.org/components/table

figma.connect(Td, 'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/PatternFly-6--Components?node-id=2912-36519', {
  props: {
    children: figma.children('*')
  },
  example: (props) => <Td>{props.children}</Td>
});
