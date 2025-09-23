import figma from '@figma/code-connect';
import { Th } from '@patternfly/react-table';

// Documentation for BasicRow can be found at https://www.patternfly.org/components/table

figma.connect(Th, 'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/PatternFly-6--Components?node-id=6241-29627', {
  props: {
    children: figma.children('*')
  },
  example: (props) => <Th>{props.children}</Th>
});
