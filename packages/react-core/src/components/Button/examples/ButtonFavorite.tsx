import { useState } from 'react';
import { Button } from '@patternfly/react-core';
import StarIcon from '@patternfly/react-icons/dist/esm/icons/star-icon';

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
      icon={<StarIcon />}
    />
  );
};
