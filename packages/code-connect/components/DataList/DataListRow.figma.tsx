import figma from '@figma/code-connect';
import { DataListItemRow } from '@patternfly/react-core';

// Documentation for DataListItem can be found at https://www.patternfly.org/components/data-list

figma.connect(
  DataListItemRow,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=6649-69488',
  {
    props: {
      // boolean
      isExpanded: figma.boolean('Expanded'),
      isSelected: figma.boolean('Selected'),

      // enum
      isCompact: figma.enum('Size', { Compact: true }),

      children: figma.children('*')
    },
    example: (props) => <DataListItemRow>{props.children}</DataListItemRow>
  }
);
