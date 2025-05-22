import figma from '@figma/code-connect';
import { DualListSelectorListItem } from '@patternfly/react-core';

/**
 * PatternFly DualListSelectorListItem component integration for Figma Code Connect
 */

figma.connect(
  DualListSelectorListItem,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=21279-116294&m=dev',
  {
    props: {
      // string
      itemText: figma.string('Item text'),

      // boolean
      isDraggable: figma.boolean('Is Draggable'),

      // enum
      isSelected: figma.enum('State', { Selected: true }),

      children: figma.children('*')
    },
    example: (props) => (
      <DualListSelectorListItem isDraggable={props.isDraggable} text={props.itemText} isSelected={props.isSelected}>
        {props.children}
      </DualListSelectorListItem>
    )
  }
);
