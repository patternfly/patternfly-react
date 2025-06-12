import figma from '@figma/code-connect';
import { DataListItem } from '@patternfly/react-core';

/**
 * PatternFly DataListItem component integration for Figma Code Connect
 */

figma.connect(
  DataListItem,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=6649-69488&m=dev',
  {
    props: {
      // boolean
      showLeftControls: figma.boolean('Show Left controls'),
      showRightActions: figma.boolean('Show right actions'),
      isSelected: figma.boolean('Selected'),
      isExpanded: figma.boolean('Expanded'),

      // enum
      isCompact: figma.enum('Size', { Compact: true }),

      children: figma.children('*')
    },
    example: (props) => (
      <DataListItem selected={props.isSelected} isExpanded={props.isExpanded} aria-labelledby="<data-list-row-id>">
        {props.children}
      </DataListItem>
    )
  }
);
