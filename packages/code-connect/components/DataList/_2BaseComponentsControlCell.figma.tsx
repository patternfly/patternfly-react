import figma from '@figma/code-connect';
import {
  // DataListAction,
  DataListCheck,
  DataListControl,
  DataListToggle
} from '@patternfly/react-core';

// TODO: 2. Base Components/Control cell - These cells need unique names. Either create components for DataListCell,
// DataListToggle, DataListDragButton, DataListAction, DataListCheck
// These component specifics are unreachable unless separated into their own entities
// Documentation for DataListControl can be found at https://www.patternfly.org/components/data-list

// const selectableCell = {
//   <DataListCheck id="ex1-item1" aria-labelledby="ex1-item1" name="ex1-item1" />
//   return (
//     <>
//       {props.isSelectable}
//       {props.isExpandable}
//       {props.isDraggable}
//       <DataListAction aria-labelledby="item1 action1" id="action1" aria-label="Actions">
//         {props.children}
//       </DataListAction>
//     </>
//   );
// };

figma.connect(
  DataListControl,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=6596-34013',
  {
    props: {
      isExpandable: figma.boolean('Row expansion', {
        true: <DataListToggle onClick={() => {}} isExpanded={false} id="m-ex-toggle1" aria-controls="m-ex-expand1" />,
        false: undefined
      }),
      isSelectable: figma.boolean('Row select', {
        true: <DataListCheck id="ex1-item1" aria-labelledby="ex1-item1" name="ex1-item1" />,
        false: undefined
      })
    },
    example: (props) => (
      <>
        {props.isSelectable}
        {props.isExpandable}
      </>
    )
  }
);
