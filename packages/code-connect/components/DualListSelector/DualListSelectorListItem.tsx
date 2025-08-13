import figma from '@figma/code-connect';
import { DualListSelectorListItem } from '@patternfly/react-core';

// TODO: DESIGN: Dual list item types and tree setting should come from this component
// Documentation for DualListSelector can be found at https://www.patternfly.org/components/dual-list-selector

figma.connect(
  DualListSelectorListItem,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=21279-116294',
  {
    props: {
      // string
      itemText: figma.string('Item text'),

      // boolean
      draggableButtonAriaLabel: figma.boolean('Is Draggable', {
        true: 'Draggable list item',
        false: undefined
      }),
      isDraggable: figma.boolean('Is Draggable'),

      // enum
      isSelected: figma.enum('State', { Selected: true }),

      children: figma.children('*')
    },
    example: (props) => (
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
