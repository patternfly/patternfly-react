import figma from '@figma/code-connect';
import { DataList } from '@patternfly/react-core';

// Documentation for DataListItemRow can be found at https://www.patternfly.org/components/data-list
// This variant has been refactored to use the DragDropSort component.
// In order to use this variant, you must wrap the DataList component in a DragDropSort component.

figma.connect(
  DataList,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=19618-55289',
  {
    example: () =>
      'Draggable DataList variant has been refactored to use the DragDropSort component. The design is the same, but the implementation is different. This component variant requires refactoring to work within the new context. For more information, see the example at https://www.patternfly.org/components/data-list/#draggable.'
    //   Code example:
    //   <DragDropSort
    //   items={items}
    //   onDrop={(_, newItems) => {
    //     setItems(newItems);
    //   }}
    //   variant="DataList"
    //   overlayProps={{ isCompact: true }}
    // >
    //   <DataList aria-label="draggable data list example" isCompact {...props} />
    // </DragDropSort>
  }
);
