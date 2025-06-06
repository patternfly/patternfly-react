import { useState } from 'react';
import { Button } from '@patternfly/react-core';

export const ButtonFavorite: React.FunctionComponent = () => {
  const [isFavorited, setIsFavorited] = useState(false);
  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };
  return (
    <Button
      variant="plain"
      aria-label={isFavorited ? 'Favorite example favorited' : 'Favorite example not favorited'}
      isFavorite
      isFavorited={isFavorited}
      onClick={toggleFavorite}
    />
  );
};
