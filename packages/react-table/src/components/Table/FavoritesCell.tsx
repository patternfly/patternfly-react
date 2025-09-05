import { Button } from '@patternfly/react-core/dist/esm/components/Button';

export interface FavoritesCellProps {
  id?: string;
  className?: string;
  onFavorite?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  isFavorited?: boolean;
  rowIndex?: number;
}

export const FavoritesCell: React.FunctionComponent<FavoritesCellProps> = ({
  className = '' as string,
  onFavorite,
  isFavorited,
  rowIndex,
  ...props
}: FavoritesCellProps) => {
  const ariaProps =
    rowIndex === undefined
      ? {}
      : {
          id: `favorites-button-${rowIndex}`,
          'aria-labelledby': `favorites-button-${rowIndex}`
        };
  return (
    <Button
      variant="plain"
      className={className}
      type="button"
      aria-label={isFavorited ? 'Starred' : 'Not starred'}
      onClick={onFavorite}
      isFavorite
      isFavorited={isFavorited}
      {...ariaProps}
      {...props}
    />
  );
};
FavoritesCell.displayName = 'FavoritesCell';
