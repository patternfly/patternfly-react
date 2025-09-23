import figma from '@figma/code-connect';
import { Tr } from '@patternfly/react-table';

// Documentation for BasicRow can be found at https://www.patternfly.org/components/table

figma.connect(Tr, 'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/PatternFly-6--Components?node-id=2930-40632', {
  props: {
    isExpanded: figma.boolean('Expanded'),
    isRowSelected: figma.enum('State', {
      Clicked: true
    }),

    children: figma.children('*')
  },
  example: (props) => (
    <Tr
      onRowClick={() => {}}
      isSelectable
      isExpanded={props.isExpanded}
      isClickable
      isRowSelected={props.isRowSelected}
    >
      {props.children}
    </Tr>
  )
});
