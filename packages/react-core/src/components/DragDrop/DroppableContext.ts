import * as React from 'react';

export const DroppableContext = React.createContext({
  zone: 'defaultZone',
  key: null as string | number | null
});
