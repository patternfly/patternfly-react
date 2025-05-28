import { useState } from 'react';
import { Button } from '@patternfly/react-core';
import TimesIcon from '@patternfly/react-icons/dist/esm/icons/star-icon';

export const ButtonFavorite: React.FunctionComponent = () => {
  const [isFavorited, setIsFavorited] = useState(false);
  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };
  return (
    <Button
      variant="plain"
      aria-label="favorite action"
      isFavorite
      isFavorited={isFavorited}
      onClick={toggleFavorite}
      icon={<TimesIcon />}
    />
  );
};
