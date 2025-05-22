import { DataList } from '@patternfly/react-core';
import figma from '@figma/code-connect';

/**
 * PatternFly DataList component integration for Figma Code Connect
 */

figma.connect(
  DataList,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=6649-80542&m=dev',
  {
    props: {
      // enum
      isCompact: figma.enum('Size', { Compact: true }),
      isExpanded: figma.boolean('Expandable'),

      children: figma.children('*')
    },
    example: (props) => <DataList isExpanded={props.isExpanded} isCompact={props.isCompact}>{props.children}</DataList>
  }
);
