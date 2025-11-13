import styles from '@patternfly/react-styles/css/components/Compass/compass';
import { css } from '@patternfly/react-styles';
import { Button } from '../Button';
import { Tooltip } from '../Tooltip';
import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';

export interface CompassNavSearchProps extends Omit<React.HTMLProps<HTMLDivElement>, 'onClick'> {
  /** Content to display in the tooltip. Defaults to "Search". */
  tooltipContent?: React.ReactNode;
  /** Click handler for the search button. */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const CompassNavSearch: React.FunctionComponent<CompassNavSearchProps> = ({
  'aria-label': ariaLabel = 'Search',
  tooltipContent = 'Search',
  className,
  onClick,
  ...props
}) => (
  <div className={css(styles.compassNav + '-search', className)} {...props}>
    <Tooltip content={tooltipContent}>
      <Button isCircle variant="plain" icon={<SearchIcon />} aria-label={ariaLabel} onClick={onClick} />
    </Tooltip>
  </div>
);

CompassNavSearch.displayName = 'CompassNavSearch';
