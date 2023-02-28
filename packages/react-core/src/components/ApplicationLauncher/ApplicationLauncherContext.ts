import * as React from 'react';

export const ApplicationLauncherContext = React.createContext({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onFavorite: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, itemId: string, isFavorite: boolean) => {}
});
