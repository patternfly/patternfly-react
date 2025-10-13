import figma from '@figma/code-connect';
import { Tr } from '@patternfly/react-table';

// Documentation for BasicRow can be found at https://www.patternfly.org/components/table

figma.connect(Tr, 'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/PatternFly-6--Components?node-id=2945-48504', {
  props: {
    showActions: figma.boolean('Show actions'),
    children: figma.children('*')
  },
  example: (props) => <Tr>{props.children}</Tr>
});
