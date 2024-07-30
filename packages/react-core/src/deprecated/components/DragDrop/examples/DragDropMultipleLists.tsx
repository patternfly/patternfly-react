import React from 'react';
import { Flex } from '@patternfly/react-core';
import { DragDrop, Draggable, Droppable } from '@patternfly/react-core/deprecated';

interface ItemType {
  id: string;
  content: string;
}

interface SourceType {
  droppableId: string;
  index: number;
}

interface MultipleListState {
  items1: ItemType[];
  items2: ItemType[];
}

interface DestinationType extends SourceType {}

const getItems = (count: number, startIndex: number) =>
  Array.from({ length: count }, (_, idx) => idx + startIndex).map((idx) => ({
    id: `item-${idx}`,
    content: `item ${idx} `.repeat(idx === 4 ? 20 : 1)
  }));

const reorder = (list: ItemType[], startIndex: number, endIndex: number) => {
  const result = list;
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

const move = (source: ItemType[], destination: ItemType[], sourceIndex: number, destIndex: number) => {
  const sourceClone = source;
  const destClone = destination;
  const [removed] = sourceClone.splice(sourceIndex, 1);
  destClone.splice(destIndex, 0, removed);
  return [sourceClone, destClone];
};

export const DragDropMultipleLists: React.FunctionComponent = () => {
  const [items, setItems] = React.useState<MultipleListState>({
    items1: getItems(10, 0),
    items2: getItems(5, 10)
  });

  function onDrop(source: SourceType, dest: DestinationType) {
    // eslint-disable-next-line no-console
    console.log(source, dest);
    if (dest) {
      if (source.droppableId === dest.droppableId) {
        const newItems = reorder(
          source.droppableId === 'items1' ? items.items1 : items.items2,
          source.index,
          dest.index
        );
        if (source.droppableId === 'items1') {
          setItems({
            items1: newItems,
            items2: items.items2
          });
        } else {
          setItems({
            items1: items.items1,
            items2: newItems
          });
        }
      } else {
        const [newItems1, newItems2] = move(
          source.droppableId === 'items1' ? items.items1 : items.items2,
          dest.droppableId === 'items1' ? items.items1 : items.items2,
          source.index,
          dest.index
        );
        setItems({
          items1: source.droppableId === 'items1' ? newItems1 : newItems2,
          items2: dest.droppableId === 'items1' ? newItems1 : newItems2
        });
      }
      return true;
    }
    return false;
  }

  return (
    <DragDrop onDrop={onDrop}>
      <Flex alignItems={{ default: 'alignItemsStretch' }} flexWrap={{ default: 'nowrap' }}>
        {Object.entries(items).map(([key, subitems]) => (
          <Flex key={key} fullWidth={{ default: 'fullWidth' }} alignItems={{ default: 'alignItemsStretch' }}>
            <Droppable zone="multizone" droppableId={key} style={{ flexGrow: 1 }}>
              {(subitems as ItemType[]).map(({ id, content }) => (
                <Draggable key={id} style={{ padding: '8px' }}>
                  {content}
                </Draggable>
              ))}
            </Droppable>
          </Flex>
        ))}
      </Flex>
    </DragDrop>
  );
};
