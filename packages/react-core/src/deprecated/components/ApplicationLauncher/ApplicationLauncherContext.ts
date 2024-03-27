import { createContext, type MouseEvent as ReactMouseEvent } from 'react';

export const ApplicationLauncherContext = createContext({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onFavorite: (event: ReactMouseEvent<HTMLButtonElement, MouseEvent>, itemId: string, isFavorite: boolean) => {}
});
