import { DualListSelectorListItem } from '@patternfly/react-core';
import figma from '@figma/code-connect';

figma.connect(
  DualListSelectorListItem,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=21279-116294',
  {
    props: {
      // string
      itemText: figma.string('Item text'),

      // boolean
      isDraggable: figma.boolean('Is Draggable'),
      draggableButtonAriaLabel: figma.boolean('Is Draggable', {
        true: 'Draggable list item',
        false: undefined
      }),

      // enum
      isSelected: figma.enum('State', { Selected: true }),
      children: figma.children('*')
    },
    example: (props) => (
      // TODO: FIGMA: Dual list item types and tree setting should come from this component
      // Documentation for DualListSelector can be found at https://www.patternfly.org/components/dual-list-selector
      <DualListSelectorListItem
        id="dual-list-selector-list-item-id"
        isSelected={props.isSelected}
        isDraggable={props.isDraggable}
        key="dual-list-selector-list-item-key"
        draggableButtonAriaLabel={props.draggableButtonAriaLabel}
        onOptionSelect={() => {}}
      >
        {props.itemText}
        {props.children}
      </DualListSelectorListItem>
    )
  }
);
