import figma from '@figma/code-connect';
import { Thead, Tr } from '@patternfly/react-table';

// Documentation for Table can be found at https://www.patternfly.org/components/table

figma.connect(Tr, 'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/PatternFly-6--Components?node-id=2912-35117', {
  props: {
    children: figma.children('*')
  },
  example: (props) => (
    <Thead>
      <Tr>{props.children}</Tr>
    </Thead>
  )
});
