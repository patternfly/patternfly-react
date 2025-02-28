import { createContext } from 'react';

export const DroppableContext = createContext({
  zone: 'defaultDroppableZone',
  droppableId: 'defaultDroppableId'
});
