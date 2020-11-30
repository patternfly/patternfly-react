import * as React from 'react';
import StarIcon from '@patternfly/react-icons/dist/js/icons/star-icon';
import { Button } from '@patternfly/react-core/dist/js/components/Button/Button';

export interface FavoritesCellProps {
  id?: string;
  className?: string;
  children?: React.ReactNode;
  onFavorite?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  isFavorited?: boolean;
}

export const FavoritesCell: React.FunctionComponent<FavoritesCellProps> = ({
  className = '' as string,
  children = null as React.ReactNode,
  onFavorite,
  isFavorited,
  ...props
}: FavoritesCellProps) => (
  <React.Fragment>
    {isFavorited !== undefined && (
      <Button
        variant="plain"
        className={className}
        type="button"
        aria-label={isFavorited ? 'Starred' : 'Not starred'}
        // aria-labelledby="table-favorites-sortable-node1 table-favorites-sortable-favorite-button1"
        onClick={onFavorite}
        {...props}
      >
        <StarIcon aria-hidden />
      </Button>
    )}
    {children}
  </React.Fragment>
);
FavoritesCell.displayName = 'FavoritesCell';
