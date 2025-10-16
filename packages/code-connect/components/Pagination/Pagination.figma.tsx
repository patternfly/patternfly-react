import figma from '@figma/code-connect';
import { Pagination } from '@patternfly/react-core';

// TODO: Split perPage and Page into separate properties
// Documentation for Pagination can be found at https://www.patternfly.org/components/pagination

figma.connect(
  Pagination,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=5047-695',
  {
    props: {
      // enum
      isExpanded: figma.enum('Menu', { Open: true, Closed: false }),
      isCompact: figma.enum('Type', { Compact: true, Closed: false }),

      // nested
      pageQuantity: figma.nestedProps('Page quantity selector', {
        itemCount: figma.string('Total quantity')
      })
    },
    example: (props) => (
      <Pagination
        isCompact={props.isCompact}
        isDisabled={props.pageQuantity.state}
        itemCount={props.pageQuantity.itemCount}
        perPage={20} // this needs to be specified in the figma file
        page={1} // this needs to be specified in the figma file
      />
    )
  }
);
