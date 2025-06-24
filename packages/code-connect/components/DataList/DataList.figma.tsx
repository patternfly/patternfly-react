import figma from '@figma/code-connect';
import { DataList } from '@patternfly/react-core';

// Documentation for DataList can be found at https://www.patternfly.org/components/data-list

figma.connect(
  DataList,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=6649-80542',
  {
    props: {
      // enum
      isCompact: figma.enum('Size', { Compact: true }),

      children: figma.children('*')
    },
    example: (props) => <DataList isCompact={props.isCompact}>{props.children}</DataList>
  }
);
