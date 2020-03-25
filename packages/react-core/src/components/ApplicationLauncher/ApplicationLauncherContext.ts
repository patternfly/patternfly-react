import * as React from 'react';

export const ApplicationLauncherContext = React.createContext({
  onFavorite: (_itemId: string, _isFavorite: boolean) => {}
});
