import figma from '@figma/code-connect';
import { Th } from '@patternfly/react-table';

// Documentation for header cell can be found at https://www.patternfly.org/components/table

figma.connect(Th, 'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/PatternFly-6--Components?node-id=14-623', {
  props: {
    info: figma.boolean('Show help icon', {
      true: { tooltip: 'More information ' },
      false: undefined
    }),
    sort: figma.boolean('Sortable', {
      true: `getSortParams(<row-index>)`,
      false: undefined
    })
  },
  example: (props) => (
    <Th sort={props.sort} info={props.info}>
      Header
    </Th>
  )
});
